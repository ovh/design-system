import { Canvas } from '@storybook/blocks';
import { type ModuleExports } from '@storybook/types';
import React from 'react';
import styles from './canvasWithoutContext.module.css';

type Props = {
  of: ModuleExports,
}

// Remove the transform form to the element because it create a new staking context
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context
const CanvasWithoutContext = ({ of }: Props) => {
  return (
    <Canvas of={ of } sourceState="none" className={ styles['canvas-without-context'] } />
  );
};

export {
  CanvasWithoutContext,
};
