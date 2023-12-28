import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { editorTheme } from '../customTheme.ts';
import styles from './ResultSection.module.scss';
import { json } from '@codemirror/lang-json';
const ResultSection = () => {
  const exampleResponse = JSON.stringify({
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1,
  });
  return (
    <section className={styles.responseContainer}>
      <CodeMirror
        className={styles.code}
        theme={editorTheme()}
        spellCheck={true}
        value={exampleResponse}
        readOnly={true}
        extensions={[json()]}
      />
    </section>
  );
};

export default ResultSection;
