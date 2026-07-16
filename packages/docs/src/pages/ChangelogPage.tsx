import Markdown from 'markdown-to-jsx';
import changelog from '../../../../CHANGELOG.md?raw';

/* The changelog is generated plain markdown (conventional-changelog), not MDX:
   stray braces or angle brackets in commit subjects would break an MDX
   compile, so it renders through markdown-to-jsx — the same engine the old
   Storybook Markdown block used. */
const ChangelogPage = () => (
  <article className="doc">
    <Markdown>{ changelog }</Markdown>
  </article>
);

export default ChangelogPage;
