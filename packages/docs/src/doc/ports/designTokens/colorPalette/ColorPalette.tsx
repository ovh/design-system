import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../ods';
import { type FC, type JSX } from 'react';
import { type Token } from '../../constants/designTokens';
import styles from './colorPalette.module.css';

interface ColorPaletteProp {
  tokens: Token[],
}

const ColorPalette: FC<ColorPaletteProp> = ({ tokens }): JSX.Element => {
  return (
    <div className={ styles['color-palette'] }>
      {
        tokens.map((token) => (
          <Tooltip key={ token.name }>
            <TooltipTrigger asChild>
              <div
                className={ styles['color-palette__block'] }
                style={{ backgroundColor: token.value }} />
            </TooltipTrigger>

            <TooltipContent>
              { token.value }
            </TooltipContent>
          </Tooltip>
        ))
      }
    </div>
  );
};

export {
  ColorPalette,
};
