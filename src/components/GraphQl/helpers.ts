import {
  GraphQLSchema,
  isObjectType,
  isEnumType,
  isInterfaceType,
  isInputObjectType,
  parse,
} from 'graphql';

export const getOperationsNames = (request: string): string[] => {
  if (!request) return [];
  const { definitions } = parse(request);
  return definitions
    .filter((definition) => definition.kind === 'OperationDefinition')
    .map((operation) =>
      operation.kind === 'OperationDefinition' && operation.name?.value
        ? operation.name?.value
        : 'Unnamed Operation',
    );
};

export const isQueryValid = (value: string) => {
  try {
    parse(value);
    return true;
  } catch {
    return false;
  }
};

export const getFields = (schema: GraphQLSchema): Type[] => {
  const types = schema.getTypeMap();
  const filteredTypes = Object.values(types).filter(
    (type) => !type.name.startsWith('__'),
  );
  return filteredTypes.map((type) => {
    let fields: Field[] | undefined;

    if (isObjectType(type)) {
      fields = Object.values(type.getFields()).map((field) => ({
        name: field.name,
        type: field.type.toString(),
        args:
          field.args.map((arg) => ({
            name: arg.name,
            type: arg.type.toString(),
          })) || [],
        description: field.description || '',
      }));
    }

    if (isInterfaceType(type) || isInputObjectType(type)) {
      fields = Object.values(type.getFields()).map((field) => ({
        name: field.name,
        type: field.type.toString(),
        args: [],
        description: field.description || '',
      }));
    }

    if (isEnumType(type)) {
      fields = type.getValues().map((value) => {
        return {
          name: value.name,
          type: value.value,
          args: [],
          description: value.description || '',
        };
      });
    }

    return {
      name: type.name,
      description: type.description as string,
      fields: fields || null,
    };
  });
};

export interface Arg {
  name: string;
  type: string;
}

export interface Field {
  name: string;
  type: string;
  args: Arg[];
  description: string;
}

export interface Type {
  name: string;
  description: string;
  fields: Field[] | null;
}
