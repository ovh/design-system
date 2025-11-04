import classNames from 'classnames';
import React, { type CSSProperties, type FC, type JSX } from 'react';
import { type Token, TOKEN_TYPE } from '../../../constants/designTokens';
import styles from './tokenPreview.module.css';

interface PreviewProp {
  style: CSSProperties,
}

interface TokenPreviewProp {
  token: Token,
}

const MAX_HEIGHT = 100;
const MAX_WIDTH = 100;

function capitalizeFirstLetter(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

const Preview: FC<PreviewProp> = ({ style }): JSX.Element => {
  return (
    <div
      className={ styles['preview'] }
      style={ style } />
  );
};

const PreviewFont: FC<TokenPreviewProp> = ({ token }): JSX.Element => {
  return (
    <div style={{ fontFamily: token.value }}>
      Aa
    </div>
  );
};

const PreviewGap: FC<TokenPreviewProp> = ({ token }): JSX.Element => {
  const column = token.name.includes('column');

  return (
    <div
      className={ styles['preview-gap'] }
      style={{
        flexFlow: column ? 'row' : 'column',
        [column ? 'columnGap' : 'rowGap']: token.value,
      }}>
      <div className={ styles['preview'] } />
      <div className={ styles['preview'] } />
    </div>
  );
};

const PreviewMargin: FC<TokenPreviewProp> = ({ token }): JSX.Element => {
  const horizontal = token.name.includes('horizontal');

  return (
    <div
      className={ styles['preview-margin'] }
      style={{ padding: horizontal ? `0 ${token.value}` : `${token.value} 0` }}>
      <div className={ styles['preview-margin__child'] } />
    </div>
  );
};

const PreviewOutline: FC<TokenPreviewProp> = ({ token }): JSX.Element => {
  const matches = token.name.match(/outline-(.*)/);
  const prop = matches && matches.length > 0 ? matches[1].replace(/-default/, '') : '';

  return (
    <div
      className={ styles['preview-outline'] }
      style={{ [`outline${capitalizeFirstLetter(prop)}`]: token.value }} />
  );
};

const PreviewPadding: FC<TokenPreviewProp> = ({ token }): JSX.Element => {
  const horizontal = token.name.includes('horizontal');

  return (
    <div
      className={ styles['preview-padding'] }
      style={{ padding: horizontal ? `0 ${token.value}` : `${token.value} 0` }}>
      <div className={ styles['preview-padding__child'] } />
    </div>
  );
};

const PreviewSize: FC<TokenPreviewProp> = ({ token }): JSX.Element => {
  const height = token.name.includes('height');
  const tokenNumericalValue = parseInt(token.value, 10);
  const value = Math.min(tokenNumericalValue, height ? MAX_HEIGHT : MAX_WIDTH);

  return (
    <div
      className={ classNames(
        styles['preview-size'],
        { [styles['preview-size--extra-large']]: value !== tokenNumericalValue }
      )}
      style={{ [height ? 'height' : 'width']: value }} />
  );
};

const PreviewZIndex: FC<TokenPreviewProp> = ({ token }): JSX.Element => {
  return (
    <div className={ styles['preview-z-index'] }>
      <div className={ styles['preview-z-index__back'] } />

      <div
        className={ styles['preview-z-index__front'] }
        style={{ zIndex: token.value }} />
    </div>
  );
};

function renderPreview(token: Token): JSX.Element {
  switch (token.type) {
    case TOKEN_TYPE.borderRadius:
      return <Preview style={{ borderRadius: token.value }} />;
    case TOKEN_TYPE.borderWidth:
      return <Preview style={{ borderWidth: token.value }} />;
    case TOKEN_TYPE.boxShadow:
      return <Preview style={{ boxShadow: token.value }} />;
    case TOKEN_TYPE.color:
      return <Preview style={{ backgroundColor: token.value }} />;
    case TOKEN_TYPE.fontFamily:
      return <PreviewFont token={ token } />;
    case TOKEN_TYPE.gap:
      return <PreviewGap token={ token } />;
    case TOKEN_TYPE.height:
    case TOKEN_TYPE.width:
      return <PreviewSize token={ token } />;
    case TOKEN_TYPE.margin:
      return <PreviewMargin token={ token } />;
    case TOKEN_TYPE.opacity:
      return <Preview style={{ opacity: token.value }} />;
    case TOKEN_TYPE.outline:
      if (token.name.endsWith('color')) {
        return <Preview style={{ backgroundColor: token.value }} />;
      }
      return <PreviewOutline token={ token } />;
    case TOKEN_TYPE.padding:
      return <PreviewPadding token={ token } />;
    case TOKEN_TYPE.zIndex:
      return <PreviewZIndex token={ token } />;
    case TOKEN_TYPE.unknown:
    default:
      return <></>;
  }
}

const TokenPreview: FC<TokenPreviewProp> = ({ token }): JSX.Element => {
  return (
    <div className={ styles['token-preview' ]}>
      { renderPreview(token) }
    </div>
  );
};

export {
  TokenPreview,
};
