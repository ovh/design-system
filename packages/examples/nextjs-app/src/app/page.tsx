'use client';
import { Clipboard, ClipboardControl, ClipboardTrigger, Link, Markdown } from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import style from './page.module.css';

export default function Home(): JSX.Element {
  return (
    <div>
      <Link href="#">
        My Ods Link
      </Link>

      <Clipboard
        className={ style['custom-clipboard'] }
        value="Something to copy">
        <ClipboardControl />

        <ClipboardTrigger />
      </Clipboard>

      { /* Server-rendered like the rest of this client page: guards against browser-only code at load time. */ }
      <Markdown content={ '# Markdown\n\nCopyright &copy; OVHcloud' } />
    </div>
  );
}
