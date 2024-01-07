import React from 'react';
import styles from './Prettifyer.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts';
import { setRequest } from '@/store/GraphQl/graphqlSlice.ts';
import { isQueryValid } from '@/components/GraphQl/graphql-helpers.ts';
import { goToast } from '@/components/toast-helper.ts';
import AnimBroom from '@/components/GraphQl/Prettifyer/AnimBroom/AnimBroom.tsx';

const Prettifyer = () => {
  const request = useAppSelector((state) => state.graphqlSlice.request);
  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    if (!isQueryValid(request)) {
      goToast('Invalid GraphQl operation!', 'error');
      return;
    }

    const formattedRequest = prettify(request);
    dispatch(setRequest(formattedRequest));
    goToast('All Clear!', 'custom', 'successToast', AnimBroom(), 3000);
  };

  function prettify(code: string) {
    const ugly = code.replace(/\s+/g, ' ');
    const lines = ugly.split(/([{}])/);

    let deep = 0;
    let result = '';

    lines.forEach((line, index, arr) => {
      const trimmedLine = line.trim();

      if (trimmedLine === '{') {
        result += ` ${trimmedLine}\n`;
        deep++;
      } else if (trimmedLine === '}') {
        deep = Math.max(0, deep - 1);
        result += `${'  '.repeat(deep)}${trimmedLine}\n`;
      } else if (trimmedLine !== '') {
        const fields = trimmedLine.split(/\s+/);
        fields.forEach((field, fieldIndex) => {
          if (fieldIndex === fields.length - 1 && arr[index + 1] === '{') {
            result += `${'  '.repeat(deep)}${field}`;
          } else {
            result += `${'  '.repeat(deep)}${field}\n`;
          }
        });
      }
    });

    return result;
  }

  return (
    <button
      type="button"
      className={styles.btn}
      onClick={onClickHandler}
      title="Prettify"
    >
      <img src="src/assets/broom-prettify.svg" alt="prettify" />
    </button>
  );
};

export default Prettifyer;
