import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { editorTheme } from '../customTheme.ts';
import styles from './ResultPanel.module.scss';
import { json } from '@codemirror/lang-json';
const ResultPanel = () => {
  const exampleResponse = JSON.stringify({
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1,
    id1: 101,
    title1: 'foo',
    body1: 'bar',
    userId1: 1,
    id2: 101,
    title2: 'foo',
    body2: 'bar',
    userId2: 1,
    id3: 101,
    title3: 'foo',
    body3: 'bar',
    userId3: 1,
  });
  return (
    <section className={styles.resultContainer}>
      <CodeMirror
        theme={editorTheme()}
        spellCheck={true}
        value={exampleResponse}
        readOnly={true}
        extensions={[json()]}
      />
    </section>
  );
};

export default ResultPanel;
