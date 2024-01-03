import React from 'react';
import { json } from '@codemirror/lang-json';
import { editorTheme } from '@/components/GraphQl/customTheme.ts';
import CodeMirror from '@uiw/react-codemirror';
import styles from './VariablesPanel.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts';
import { setVars } from '@/store/GraphQl/graphqlSlice.ts';
const VariablesPanel = () => {
  const vars = useAppSelector((state) => state.graphqlSlice.vars);

  const dispatch = useAppDispatch();

  const onChangeHandler = (value: string): void => {
    dispatch(setVars(value));
  };

  return (
    <section className={styles.variablesContainer}>
      <CodeMirror
        theme={editorTheme()}
        onChange={onChangeHandler}
        placeholder="JSON format"
        spellCheck={true}
        extensions={[json()]}
        value={vars}
      />
    </section>
  );
};

export default VariablesPanel;
