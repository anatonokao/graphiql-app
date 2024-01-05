import React, { FC } from 'react';
import styles from './DocType.module.scss';
import { Type } from '@/components/GraphQl/helpers.ts';

type DocTypeProps = {
  type: Type;
  onClickHandler: (arg0: string) => void;
};

const DocType: FC<DocTypeProps> = ({ type, onClickHandler }) => {
  return (
    <div className={styles.typeHeader}>
      <div className={styles.typeName}>
        {type.name}&nbsp;:&nbsp;
        <button
          key={type.name}
          className={styles.typeBtn}
          onClick={() => onClickHandler(type.name)}
        >
          {type.name}
        </button>
      </div>
      <div className={styles.typeDesc}>{type.description}</div>
    </div>
  );
};

export default DocType;
