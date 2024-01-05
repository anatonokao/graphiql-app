import React, { FC } from 'react';
import styles from './DocField.module.scss';
import { Field } from '@/components/GraphQl/helpers.ts';

type DocFieldProps = {
  field: Field;
  onClickHandler: (arg0: string) => void;
};

const DocField: FC<DocFieldProps> = ({ field, onClickHandler }) => {
  return (
    <div className={styles.field}>
      <div className={styles.fieldBody}>
        {field.name}
        {field.args.length !== 0 && (
          <div className={styles.args}>
            (
            {field.args.map((arg) => (
              <span key={arg.name}>
                {arg.name}:&nbsp;
                <button
                  type="button"
                  className={styles.fieldBtn}
                  onClick={
                    onClickHandler ? () => onClickHandler(arg.type) : () => {}
                  }
                >
                  {arg.type}
                </button>
              </span>
            ))}
            )
          </div>
        )}
        :
        <button
          key={field.name}
          className={styles.fieldBtn}
          onClick={() => onClickHandler(field.type)}
        >
          {field.type}
        </button>
      </div>
      {field.description && (
        <div className={styles.fieldDesc}>{field.description}</div>
      )}
    </div>
  );
};

export default DocField;
