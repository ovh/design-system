import { BUTTON_VARIANT, CARD_COLOR, ICON_NAME, Card, Button, Icon } from '@ovhcloud/ods-react';
// import { Canvas as StorybookCanvas, Canvas } from '@storybook/blocks';
import lang from '@shikijs/langs/css';
import theme from '@shikijs/themes/nord';
import React, { useState } from 'react';
import { Canvas } from './canvas/Canvas';
import styles from './test.module.css';

// const DUMMY_STYLE = `.my-class {
//   background-color: red;
// }`;

const Test = ({ of }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const codeRef = useRef<HTMLDivElement>(null);
  // const [style, setStyle] = useState(DUMMY_STYLE);
  //
  // function onCodeBlur() {
  //   if (codeRef.current) {
  //     setStyle(codeRef.current.textContent || '');
  //   }
  // }

  return (
    <div
      // className={ styles['test'] }
    >
      {/*<Code*/}
      {/*  // contentEditable*/}
      {/*  highlighter={{*/}
      {/*    language: lang,*/}
      {/*    theme: theme,*/}
      {/*  }}*/}
      {/*  // onBlur={ onCodeBlur }*/}
      {/*  // ref={ codeRef }*/}
      {/*  // suppressContentEditableWarning*/}
      {/*>*/}
      {/*  { style }*/}
      {/*</Code>*/}

      <Card color={ CARD_COLOR.neutral }>
        <Canvas
          className={ styles['test__canvas'] }
          of={ of }
          sourceState="none"
           />

        <div className={ styles['test__name'] }>
          <Button
            onClick={ () => setIsExpanded((v) => !v) }
            variant={ BUTTON_VARIANT.ghost }>
            My name <Icon name={ isExpanded ? ICON_NAME.chevronDown : ICON_NAME.chevronRight } />
          </Button>
        </div>
      </Card>

      {
        isExpanded &&
        <div>
        </div>
      }
    </div>
  );
}

export {
  Test,
};
