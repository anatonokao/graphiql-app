import React, { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { editorTheme } from '../customTheme.ts';
import styles from './CodeEditorPanel.module.scss';
import { buildClientSchema, IntrospectionQuery } from 'graphql/utilities';
import { graphql } from 'cm6-graphql';
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts';
import { setRequest } from '@/store/GraphQl/graphqlSlice.ts';

type CodeEditorPanel = {
  schema: IntrospectionQuery | undefined;
  isLoading: boolean;
};

const CodeEditorPanel: FC<CodeEditorPanel> = ({ isLoading, schema }) => {
  const dispatch = useAppDispatch();
  const code = useAppSelector((state) => state.graphqlSlice.request);

  const changeHandler = (value: string) => {
    dispatch(setRequest(value));
  };

  return isLoading ? (
    <div>loading</div>
  ) : (
    <section className={styles.editorContainer}>
      <CodeMirror
        theme={editorTheme()}
        spellCheck={true}
        placeholder={'Write something...'}
        value={code}
        onChange={changeHandler}
        extensions={schema && graphql(buildClientSchema(schema))}
      />
    </section>
  );
};

export default CodeEditorPanel;
