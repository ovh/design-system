import { useOf } from '@storybook/blocks';
import { type ModuleExports } from '@storybook/types';
import React from 'react';

export const Banner = ({ of, label, section }: { of: ModuleExports, label?: string, section?: string }) => {
  let title = label;
  let subtitle = section;

  if (of) {
    const resolvedOf = useOf(of || 'story', ['meta']);
    const metaTitle = resolvedOf.preparedMeta.title;
    const metaTitles = metaTitle.split('/');

    title = label || metaTitles[metaTitles.length - 1];
    subtitle = section || metaTitles.slice(0, -1).join(' / ');
  }

  return (
    <div
      style={{
        backgroundColor: 'var(--ods-color-primary-500)',
        margin: '-1.5rem -1.5rem 3rem',
        minHeight: '5rem',
        position: 'relative',
        borderRadius: '0 0 1rem 1rem',
        padding: '1.25rem'
      }}
    >
      <span style={{ color: 'white' }}>{subtitle}</span>
      <h1 className={'banner'} style={{ color: 'white' }}>{title}</h1>
    </div>
  );
}
