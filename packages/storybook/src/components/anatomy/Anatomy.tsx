import React from 'react';
import styles from './anatomy.module.css';

type Props = {
  src: string,
}

const Anatomy = ({ src }: Props) => {
  return (
    <div className={ styles['anatomy'] }>
      <img
        alt="Component anatomy"
        src={ src } />
    </div>
  );
};

export {
  Anatomy,
};
