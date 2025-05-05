import { useEffect, useRef } from 'react';
import { Clipboard, ClipboardControl, ClipboardTrigger } from '.';
import style from './dev.module.css';

export default {
  component: Clipboard,
  title: 'Clipboard dev',
};

export const Default = () => (
  <Clipboard value="Default">
    <ClipboardControl />
    <ClipboardTrigger labelCopy="Copy to clipboard" labelCopySuccess="Copied!" />
  </Clipboard>
);

export const OnCopy = () => (
  <Clipboard value="OnCopy" onCopy={ () => console.log('Copied') }>
    <ClipboardControl />
    <ClipboardTrigger labelCopy="Copy to clipboard" labelCopySuccess="Copied!" />
  </Clipboard>
);

export const Masked = () => (
  <Clipboard value="Masked">
    <ClipboardControl maskOption={ { enable: true } } />
    <ClipboardTrigger labelCopy="Copy to clipboard" labelCopySuccess="Copied!" />
  </Clipboard>
);

export const Disabled = () => (
  <Clipboard value="Disabled" disabled>
    <ClipboardControl />
    <ClipboardTrigger labelCopy="Copy to clipboard" labelCopySuccess="Copied!" />
  </Clipboard>
);

export const Loading = () => (
  <Clipboard value="Loading">
    <ClipboardControl loading />
    <ClipboardTrigger labelCopy="Copy to clipboard" labelCopySuccess="Copied!" />
  </Clipboard>
);

export const Refs = () => {
  const refControl = useRef(null);
  const refTrigger = useRef(null);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   console.log(refControl.current, refTrigger.current);
    // }, 1000);
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return <Clipboard>
    <ClipboardControl ref={ refControl } />
    <ClipboardTrigger ref={ refTrigger } />
  </Clipboard>;
};

export const CustomStyle = () => (
  <Clipboard
    value="Custom styled clipboard"
    className={ style['custom-clipboard'] }>
    <ClipboardControl className={ style['custom-clipboard-control'] } />
    <ClipboardTrigger
      className={ style['custom-clipboard-trigger'] }
      labelCopy="Copy text"
      labelCopySuccess="Copied!" />
  </Clipboard>
);
