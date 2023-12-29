import React from 'react';
import { json } from '@codemirror/lang-json';
import { editorTheme } from '@/components/GraphQl/customTheme.ts';
import CodeMirror from '@uiw/react-codemirror';
import styles from './VariablesPanel.module.scss';
const VariablesPanel = () => {
  return (
    <section className={styles.variablesContainer}>
      <CodeMirror
        theme={editorTheme()}
        placeholder="JSON format"
        spellCheck={true}
        extensions={[json()]}
      />
    </section>
  );
};

export default VariablesPanel;
