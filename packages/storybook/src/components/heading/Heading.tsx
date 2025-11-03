import { DIVIDER_SPACING, Divider } from '@ovhcloud/ods-react';
import { HeaderMdx } from '@storybook/blocks';
import React, { type ReactNode } from 'react';
import styles from './heading.module.css';

type Props = {
  children?: ReactNode,
  label: string,
  level: number,
}

const Heading = ({ children, label, level }: Props) => {
  const tagID = label.toLowerCase().replace(/[^a-z0-9]/gi, '-');

  return (
    <>
      <div className={ styles.heading }>
        <HeaderMdx
          as={ `h${level}` }
          id={ tagID }>
          { label }
        </HeaderMdx>

        {
          children &&
          <span className={ styles['heading__child'] }>
            { children }
          </span>
        }
      </div>

      {
        level < 3 &&
        <Divider spacing={ level === 1 ? DIVIDER_SPACING._32 : DIVIDER_SPACING._16 } />
      }
    </>
  );
};

export {
  Heading,
};
