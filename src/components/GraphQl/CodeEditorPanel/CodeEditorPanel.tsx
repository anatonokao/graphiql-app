import React, { FC, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { editorTheme } from '../customTheme.ts';
import styles from './CodeEditorPanel.module.scss';
import { buildClientSchema } from 'graphql/utilities';
import { graphql } from 'cm6-graphql';
import { graphqlAPI } from '@/store/GraphQl/graphqlAPI/graphqlAPI.ts';
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts';
import { setRequest } from '@/store/GraphQl/graphqlSlice.ts';

const CodeEditorPanel: FC = () => {
  const dispatch = useAppDispatch();

  const apiUrl = useAppSelector((state) => state.graphqlSlice.apiUrl);

  const [getSchema, { data, isFetching }] = graphqlAPI.useLazyGetSchemaQuery();

  const code = useAppSelector((state) => state.graphqlSlice.request);

  useEffect(() => {
    getSchema(apiUrl);
  }, [apiUrl, getSchema]);

  const changeHandler = (value: string) => {
    dispatch(setRequest(value));
  };

  return isFetching || !data ? (
    <div>loading</div>
  ) : (
    <section className={styles.editorContainer}>
      <CodeMirror
        theme={editorTheme()}
        spellCheck={true}
        placeholder={'Write something...'}
        value={code}
        onChange={changeHandler}
        extensions={graphql(buildClientSchema(data))}
      />
    </section>
  );
};

export default CodeEditorPanel;
