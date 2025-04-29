'use client';
import { Clipboard, ClipboardControl, ClipboardTrigger, Link } from '@ovhcloud/ods-react';
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
    </div>
  );
}
