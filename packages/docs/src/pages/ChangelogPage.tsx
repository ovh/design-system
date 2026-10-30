import { Children, isValidElement, type ReactNode } from 'react';
import changelog from '../../../../CHANGELOG.md?raw';
import { Markdown } from '../../../ods-react/src/components/markdown/src';
import { DocArticle } from '../doc/DocArticle';
import { Heading } from '../doc/Heading';

/* A heading's text, through the link a version heading wraps its number in. */
const textOf = (children: ReactNode): string => Children.toArray(children)
  .map((child) => (typeof child === 'string' ? child : isValidElement<{ children?: ReactNode }>(child) ? textOf(child.props.children) : ''))
  .join('');

/* The changelog is generated plain markdown (conventional-changelog), not MDX: stray braces or angle
   brackets in commit subjects would break an MDX compile, so it renders through the ODS Markdown
   component. Its "# Change Log" title repeats the page title; a release is a "#" (minor) or "##"
   (patch) heading, and both are the page's sections. */
const HEADINGS = {
  h1: ({ children }: { children?: ReactNode }) => (textOf(children) === 'Change Log' ? null : <Heading label={ textOf(children) } level={ 2 } />),
  h2: ({ children }: { children?: ReactNode }) => <Heading label={ textOf(children) } level={ 2 } />,
  h3: ({ children }: { children?: ReactNode }) => <Heading label={ textOf(children) } level={ 3 } />,
};

const ChangelogPage = () => (
  <DocArticle>
    <Markdown component={ HEADINGS } content={ changelog } />
  </DocArticle>
);

export default ChangelogPage;
