import React, { ChangeEvent, FC, useState } from 'react';
import styles from './InputUrlApi.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts';
import { setApiUrl } from '@/store/GraphQl/graphqlSlice.ts';
import { useLocalization } from '@/components/localization/LocalizationContext';
const InputUrlApi: FC = () => {
  const url = useAppSelector((state) => state.graphqlSlice.apiUrl);
  const { texts } = useLocalization();
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState(url);
  const [isInputEditable, setIsInputEditable] = useState(false);

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const editBtnHandler = () => {
    setIsInputEditable(true);
  };

  const saveBtnHandler = () => {
    dispatch(setApiUrl(inputValue.trim()));
    setIsInputEditable(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <input
          className={styles.input}
          type="text"
          placeholder="The base link to the GraphQL API"
          onChange={changeInputHandler}
          value={inputValue}
          disabled={!isInputEditable}
        />
        {isInputEditable ? (
          <button className={styles.actionBtn} onClick={saveBtnHandler}>
            {texts.graphQLPage.btnSave}
          </button>
        ) : (
          <button className={styles.actionBtn} onClick={editBtnHandler}>
            {texts.graphQLPage.btnEdit}
          </button>
        )}
      </div>
      <div className={styles.caption}>
        {texts.graphQLPage.warningText}
      </div>
    </div>
  );
};

export default InputUrlApi;
