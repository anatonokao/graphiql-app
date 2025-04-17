import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { editorTheme } from '../customTheme.ts';
import styles from './ResultPanel.module.scss';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useAppSelector } from '@/store/hooks.ts';
import { EditorView } from '@uiw/react-codemirror';
const ResultPanel = () => {
  const { response } = useAppSelector((state) => state.graphqlSlice);

  return (
    <section className={styles.resultContainer}>
      <CodeMirror
        theme={editorTheme()}
        spellCheck={true}
        value={response}
        readOnly={true}
        extensions={[langs.json(), EditorView.lineWrapping]}
      />
    </section>
  );
};

export default ResultPanel;
