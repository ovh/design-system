import { composeStory } from '@storybook/react';
import { type ComponentType, type ReactElement, type ReactNode, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Kbd } from '../../../ods-react/src/components/kbd/src';
import { LinkProp, Link } from '../../../ods-react/src/components/link/src';
import { CodeBlock } from './CodeBlock';
import { Message, MessageBody, MessageIcon } from '../../../ods-react/src/components/message/src';
import { Table } from '../../../ods-react/src/components/table/src';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';
import { DemoFrame } from '../demo/DemoFrame';
import { DemoSource } from '../demo/DemoSource';
import { extractStorySources } from '../demo/extractSource';
import { usePageStories } from './PageStories';
import { ChartColorCards } from './ports/chartColorCards/ChartColorCards';
import { DesignTokens } from './ports/designTokens/DesignTokens';
import { TokenPreview } from './ports/designTokens/tokenPreview/TokenPreview';
import { OdsLocaleList } from './ports/OdsLocaleList';
import { Roadmap } from './ports/roadmap/Roadmap';
import './doc.css';

/* The neutral-format component contract: every component available inside a
   content MDX file, provided through the MDX provider — content files import
   NOTHING. */

const anatomyImages = import.meta.glob('../../../storybook/assets/components/*/anatomy.png', { eager: true, import: 'default', query: '?url' }) as Record<string, string>;

const slugify = (label: string): string => label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Heading = ({ children, label, level }: { children?: ReactNode, label: string, level: 2 | 3 | 4 }) => {
  const presets = { 2: TEXT_PRESET.heading4, 3: TEXT_PRESET.heading5, 4: TEXT_PRESET.heading6 } as const;
  return (
    <Text as={ `h${level}` } className="doc__heading" id={ slugify(label) } preset={ presets[level] }>
      { label }{ children }
    </Text>
  );
};

const Canvas = ({ from, source = 'shown', story }: { from?: string, source?: 'shown' | 'none', story: string }) => {
  const page = usePageStories();
  // A guide's <Canvas from="button" /> pulls that component's module; a
  // component page uses its single storiesModule.
  const resolved = from ? page.storyModules?.[from] : { module: page.storiesModule, raw: page.raw };
  const storiesModule = resolved?.module;
  const raw = resolved?.raw;
  const Composed = useMemo(() => {
    const storyExport = storiesModule?.[story];
    if (!storyExport) {
      return null;
    }
    return composeStory(storyExport as Parameters<typeof composeStory>[0], (storiesModule as { default: Parameters<typeof composeStory>[1] }).default) as ComponentType;
  }, [storiesModule, story]);
  const storySource = useMemo(() => (raw ? extractStorySources(raw)[story] : undefined), [raw, story]);

  if (!Composed) {
    return <p className="doc__missing">Story « { story } » introuvable.</p>;
  }
  return (
    <div className="doc__canvas">
      <DemoFrame>
        <Composed />
      </DemoFrame>
      { source === 'shown' && storySource && <DemoSource source={ storySource } /> }
    </div>
  );
};

const IdentityCard = ({ aliases = [], children, figmaLink, githubUrl, name }: { aliases?: string[], children?: ReactNode, figmaLink?: string, githubUrl: string, name: string }) => (
  <div className="doc__identity">
    <dl>
      <div><dt>Name</dt><dd>{ name }</dd></div>
      { aliases.length > 0 && <div><dt>Aliases</dt><dd>{ aliases.join(', ') }</dd></div> }
      <div>
        <dt>Links</dt>
        <dd className="doc__identity-links">
          { figmaLink && <Link href={ figmaLink } target="_blank">Design <Icon name={ ICON_NAME.externalLink } /></Link> }
          <Link href={ githubUrl } target="_blank">GitHub <Icon name={ ICON_NAME.externalLink } /></Link>
        </dd>
      </div>
    </dl>
    <div className="doc__identity-desc">{ children }</div>
  </div>
);

const BestPractices = ({ donts = [], dos = [] }: { donts?: string[], dos?: string[] }) => (
  <div className="doc__best-practices">
    <div className="doc__best-practices-col doc__best-practices-col--do">
      <Text preset={ TEXT_PRESET.heading6 }><Icon name={ ICON_NAME.circleCheck } /> Do</Text>
      <ul>{ dos.map((item) => <li key={ item }>{ item.replace(/^- /, '') }</li>) }</ul>
    </div>
    <div className="doc__best-practices-col doc__best-practices-col--dont">
      <Text preset={ TEXT_PRESET.heading6 }><Icon name={ ICON_NAME.circleXmark } /> Don't</Text>
      <ul>{ donts.map((item) => <li key={ item }>{ item.replace(/^- /, '') }</li>) }</ul>
    </div>
  </div>
);

const Anatomy = ({ src }: { src: string }) => {
  const url = anatomyImages[`../../../storybook/assets/${src}`];
  return url ? <img alt="" className="doc__anatomy" src={ url } /> : null;
};

/* Markdown images use assets-relative paths (![alt](components/x/foo.png));
   the glob resolves them to hashed build URLs. */
const docImages = import.meta.glob('../../../storybook/assets/components/**/*.png', { eager: true, import: 'default', query: '?url' }) as Record<string, string>;

const DocImage = ({ alt, src }: { alt?: string, src?: string }) => {
  const url = (src && docImages[`../../../storybook/assets/${src}`]) ?? src;
  return <img alt={ alt ?? '' } className="doc__anatomy" src={ url } />;
};

/* Internal navigation with the ODS Link look: SPA routing, no reload. */
const DocLink = ({ children, to }: { children: ReactNode, to: string }) => {
  const navigate = useNavigate();
  return (
    <Link
      href={ to }
      onClick={ (event) => {
        event.preventDefault();
        navigate(to);
      } }>
      { children }
    </Link>
  );
};

const ExternalLink = ({ children, href, ...prop }: LinkProp) => (
  <Link href={ href } target="_blank" { ...prop }>{ children } <Icon name={ ICON_NAME.externalLink } /></Link>
);

/* Fenced code blocks (```tsx) come out of MDX as <pre><code class="language-x">. */
const CodeFence = ({ children }: { children?: ReactNode }) => {
  const codeEl = children as ReactElement<{ children: string }> | undefined;
  const source = typeof codeEl?.props?.children === 'string' ? codeEl.props.children.trim() : '';
  return <CodeBlock style={{ margin: '1rem 0', width: '100%' }}>{ source }</CodeBlock>;
};

const MDX_COMPONENTS = {
  Anatomy,
  BestPractices,
  Canvas,
  ChartColorCards,
  DesignTokens,
  DocLink,
  ExternalLink,
  Heading,
  Icon,
  IdentityCard,
  Kbd,
  Link,
  Message,
  MessageBody,
  MessageIcon,
  OdsLocaleList,
  Roadmap,
  Table,
  TokenPreview,
  img: DocImage,
  pre: CodeFence,
};

export { ExternalLink, Heading, MDX_COMPONENTS };
