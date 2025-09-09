import { type Metadata } from 'next';
import { type JSX, type ReactNode } from 'react';
import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'ODS NextJS Example',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  );
}
