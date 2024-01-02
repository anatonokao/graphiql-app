import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { editorTheme } from '../customTheme.ts';
import styles from './CodeEditorPanel.module.scss';
import { buildClientSchema } from 'graphql/utilities';
import { graphql as createSchema } from 'cm6-graphql';
import { graphqlAPI } from '@/store/GraphQl/graphqlAPI/graphqlAPI.ts';
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts';
import { setRequest } from '@/store/GraphQl/graphqlSlice.ts';

const CodeEditorPanel = () => {
  const { data, isFetching } = graphqlAPI.useGetSchemaQuery();

  const schema = data && buildClientSchema(data);

  const dispatch = useAppDispatch();
  const code = useAppSelector((state) => state.graphqlSlice.request);

  const changeHandler = (value: string) => {
    dispatch(setRequest(value));
  };

  return isFetching ? (
    <div>loading</div>
  ) : (
    <section className={styles.editorContainer}>
      <CodeMirror
        theme={editorTheme()}
        spellCheck={true}
        placeholder={'Write something...'}
        value={code}
        onChange={changeHandler}
        extensions={[createSchema(schema)]}
      />
    </section>
  );
};

export default CodeEditorPanel;
