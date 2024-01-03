import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { editorTheme } from '../customTheme.ts';
import styles from './ResultPanel.module.scss';
import { json } from '@codemirror/lang-json';
import { useAppSelector } from '@/store/hooks.ts';
import { EditorView } from '@codemirror/view';
const ResultPanel = () => {
  const { response, error } = useAppSelector((state) => state.graphqlSlice);

  return (
    <section className={styles.resultContainer}>
      <CodeMirror
        theme={editorTheme()}
        spellCheck={true}
        value={error[0] || response}
        readOnly={true}
        extensions={[json(), EditorView.lineWrapping]}
      />
    </section>
  );
};

export default ResultPanel;
