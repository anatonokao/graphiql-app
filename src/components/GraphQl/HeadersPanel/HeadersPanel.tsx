import React, { FC } from 'react';
import styles from './HeadersPanel.module.scss';
import CodeMirror from '@uiw/react-codemirror';
import { editorTheme } from '@/components/GraphQl/customTheme.ts';
import { json } from '@codemirror/lang-json';

const HeadersPanel: FC = () => {
  return (
    <section className={styles.headersContainer}>
      <CodeMirror
        theme={editorTheme()}
        placeholder="JSON format"
        spellCheck={true}
        extensions={[json()]}
      />
    </section>
  );
};

export default HeadersPanel;
