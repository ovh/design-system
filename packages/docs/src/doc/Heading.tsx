import { type ReactNode } from 'react';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';
import { slugify } from './slug';
import './doc.css';

const PRESETS = { 2: TEXT_PRESET.heading4, 3: TEXT_PRESET.heading5, 4: TEXT_PRESET.heading6 } as const;

const Heading = ({ children, className, label, level }: { children?: ReactNode, className?: string, label: string, level: 2 | 3 | 4 }) => {
  const id = slugify(label);
  return (
    // The anchor sits BESIDE the heading, not inside it: nested, its label would
    // enter the heading's accessible name and the table of contents text.
    <div className="doc__heading-row">
      <Text as={ `h${level}` } className={ className ? `doc__heading ${className}` : 'doc__heading' } id={ id } preset={ PRESETS[level] }>
        { label }{ children }
      </Text>
      { /* Hover anchor: native #-navigation, plus the absolute URL in the
           clipboard so "look at this section" is one click to share. */ }
      <a
        aria-label={ `Link to “${label}”` }
        className="doc__anchor"
        href={ `#${id}` }
        onClick={ () => {
          navigator.clipboard?.writeText(new URL(`#${id}`, window.location.href).href).catch(() => { /* http or denied: the hash still lands in the URL bar */ });
        } }>
        #
      </a>
    </div>
  );
};

export { Heading };
