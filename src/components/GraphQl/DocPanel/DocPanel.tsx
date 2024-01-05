import React, { FC, useState } from 'react';
import { buildClientSchema, IntrospectionQuery } from 'graphql/utilities';
import { getFields, Type } from '@/components/GraphQl/helpers.ts';
import styles from './DocPanel.module.scss';
import DocField from '@/components/GraphQl/DocPanel/DocField/DocField.tsx';
import DocType from '@/components/GraphQl/DocPanel/DocType/DocType.tsx';

type DocPanelProps = {
  schema: IntrospectionQuery | undefined;
};
const DocPanel: FC<DocPanelProps> = ({ schema }) => {
  const graphqlSchema = schema ? buildClientSchema(schema) : null;

  const queryType = graphqlSchema?.getQueryType();
  const mutationType = graphqlSchema?.getMutationType();
  const subscriptionType = graphqlSchema?.getSubscriptionType();

  const rootTypes = [
    {
      name: 'Query',
      description: 'A query is sent through an HTTP POST call to retrieve data',
      fields: [
        {
          name: queryType?.name ?? '',
          type: queryType?.name ?? '',
          args: [],
          description: queryType?.description ?? '',
        },
      ],
    },
    {
      name: 'Mutation',
      description:
        'A mutation is also sent through a HTTP POST and is used to modify data',
      fields: [
        {
          name: mutationType?.name ?? '',
          type: mutationType?.name ?? '',
          args: [],
          description: mutationType?.description ?? '',
        },
      ],
    },
    {
      name: 'Subscription',
      description: 'A subscription uses WebSockets to receive events',
      fields: [
        {
          name: subscriptionType?.name ?? '',
          type: subscriptionType?.name ?? '',
          args: [],
          description: subscriptionType?.description ?? '',
        },
      ],
    },
  ];

  const docTypes = graphqlSchema && getFields(graphqlSchema);

  const [currentType, setCurrentType] = useState<Type>();

  const onClickHandler = (fieldName: string) => {
    const type = docTypes?.find(
      (item) => item.name === fieldName.replace(/[\[\]!]/g, ''),
    );
    type && setCurrentType(type);
  };

  return (
    <div className={styles.container}>
      {schema ? (
        currentType ? (
          <div className={styles.typeContainer}>
            <div className={styles.typeHeader}>
              <div className={styles.typeName}>{currentType.name}</div>
              {currentType.description && (
                <div className={styles.typeDesc}>{currentType.description}</div>
              )}
            </div>
            <div className={styles.fieldsContainer}>
              {currentType.fields?.map((field) => (
                <DocField
                  field={field}
                  onClickHandler={onClickHandler}
                  key={field.name}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.typeContainer}>
            {rootTypes.map(
              (type) =>
                type.fields[0].name && (
                  <DocType
                    type={type}
                    onClickHandler={onClickHandler}
                    key={type.name}
                  />
                ),
            )}
          </div>
        )
      ) : (
        <div>Schema Not Found</div>
      )}
    </div>
  );
};

export default DocPanel;
