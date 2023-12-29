import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { editorTheme } from '../customTheme.ts';
import styles from './CodeEditorPanel.module.scss';
const CodeEditorPanel = () => {
  const [code, setCode] = useState('');

  const changeHandler = (value: string) => {
    console.log(value);
    setCode(value);
  };
  return (
    <section className={styles.editorContainer}>
      <CodeMirror
        theme={editorTheme()}
        spellCheck={true}
        placeholder={'Write something...'}
        value={code}
        onChange={changeHandler}
        extensions={[javascript({ jsx: true })]}
      />
    </section>
  );
};

export default CodeEditorPanel;
