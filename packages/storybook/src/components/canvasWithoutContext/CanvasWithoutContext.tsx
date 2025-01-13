import { Canvas } from '@storybook/blocks';
import { type ModuleExports } from '@storybook/types';
import React from 'react';
import styles from './canvasWithoutContext.module.css';

type Props = {
  of: ModuleExports,
  className?: string,
  sourceState?: string,
}

// Remove the transform form to the element because it create a new stacking context
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context
const CanvasWithoutContext = ({ of, className, sourceState = 'none' }: Props) => {
  return (
    <Canvas of={ of } sourceState={ sourceState } className={ `${className} ${styles['canvas-without-context']}` } />
  );
};

export {
  CanvasWithoutContext,
};
