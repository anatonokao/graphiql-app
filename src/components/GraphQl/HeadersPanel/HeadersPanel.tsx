import React, { FC } from 'react';
import styles from './HeadersPanel.module.scss';
import CodeMirror from '@uiw/react-codemirror';
import { editorTheme } from '@/components/GraphQl/customTheme.ts';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts';
import { setHeaders } from '@/store/GraphQl/graphqlSlice.ts';

const HeadersPanel: FC = () => {
  const headers = useAppSelector((state) => state.graphqlSlice.headers);

  const dispatch = useAppDispatch();

  const onChangeHandler = (value: string): void => {
    dispatch(setHeaders(value));
  };

  return (
    <section className={styles.headersContainer}>
      <CodeMirror
        theme={editorTheme()}
        placeholder="JSON Format"
        spellCheck={true}
        extensions={[langs.json()]}
        onChange={onChangeHandler}
        value={headers}
      />
    </section>
  );
};

export default HeadersPanel;
