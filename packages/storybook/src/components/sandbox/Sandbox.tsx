import { Splitter } from '@ark-ui/react/splitter'
import { BUTTON_COLOR, BUTTON_VARIANT, ICON_NAME, Button, Icon } from '@ovhcloud/ods-react';
import classNames from 'classnames';
import lzString from 'lz-string';
import React, { type JSX, useMemo, useRef, useState } from 'react';
import { Playground } from 'storybook-addon-code-editor';
import { getEditorConfig } from '../../helpers/liveCoding';
import { ORIENTATION, OrientationSwitch } from './actions/OrientationSwitch';
import { ResetSandbox } from './actions/ResetSandbox';
import { ShareLink } from './actions/ShareLink';
import { type Editor } from './types/editor';
import styles from './sandbox.module.css';

interface Prop {
  location: Location,
}

const DEFAULT_CODE = `import { TEXT_PRESET, Button, Text } from '@ovhcloud/ods-react';
import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text preset={ TEXT_PRESET.heading1 }>
        Welcome on the ODS sandbox
      </Text>

      <p>
        Here is a counter state basic example: { count }
      </p>

      <Button onClick={ () => setCount((c) => c + 1) }>
        Increment counter
      </Button>
    </>
  );
};`;

function decodeUrl(location: Location) {
  const searchParams = new URLSearchParams(location.search);

  return searchParams.has('code')
    ? lzString.decompressFromEncodedURIComponent(searchParams.get('code') || '')
    : DEFAULT_CODE;
}

const Sandbox = ({ location }: Prop): JSX.Element => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [orientation, setOrientation] = useState(ORIENTATION.horizontal);
  const editorRef = useRef<Editor>();
  const editorConfig = getEditorConfig();
  const initialCode = useMemo(() => decodeUrl(location), [location]);

  function onReset() {
    editorRef.current?.setValue(initialCode);
  }

  function onToggleFullscreen() {
    setIsFullscreen((v) => !v);
  }

  return (
    <div className={ classNames(
      styles['sandbox'],
      { [styles['sandbox--fullscreen']]: isFullscreen },
    )}>
      <div className={ styles['sandbox__menu'] }>
        <ResetSandbox onConfirm={ onReset } />

        <ShareLink
          editorRef={ editorRef }
          location={ location } />

        <OrientationSwitch
          onChange={ (value) => setOrientation(value) }
          orientation={ orientation } />

        <Button
          onClick={ onToggleFullscreen }
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ isFullscreen ? ICON_NAME.shrink : ICON_NAME.resize } />
        </Button>
      </div>

      <Playground
        { ...editorConfig }
        code={ initialCode }
        Container={ ({ editor, preview }) => (
          <Splitter.Root
            className={ styles['sandbox__container'] }
            orientation={ orientation }
            panels={ [{ id: 'editor', minSize: 10 }, { id: 'preview', minSize: 10 }] }>
            <Splitter.Panel id="editor">
              { editor }
            </Splitter.Panel>

            <Splitter.ResizeTrigger
              asChild
              aria-label="Resize"
              id="editor:preview">
              <Button
                className={ classNames(
                  styles['sandbox__container__resize'],
                  { [styles['sandbox__container__resize--horizontal']]: orientation === ORIENTATION.horizontal },
                  { [styles['sandbox__container__resize--vertical']]: orientation === ORIENTATION.vertical },
                )}
                color={ BUTTON_COLOR.neutral } />
            </Splitter.ResizeTrigger>

            <Splitter.Panel id="preview">
              <div className={ styles['sandbox__container__preview'] }>
                { preview }
              </div>
            </Splitter.Panel>
          </Splitter.Root>
        )}
        modifyEditor={ (monaco, editor) => {
          editorConfig.modifyEditor?.(monaco, editor);
          editorRef.current = editor;
        }} />
    </div>
  );
};

export {
  Sandbox,
};
