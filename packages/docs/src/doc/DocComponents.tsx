import { composeStory } from '@storybook/react';
import { type ComponentType, type ReactElement, type ReactNode, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import versions from '../../assets/ods-versions.json';
import { APP_ROOT } from '../appBase';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Kbd } from '../../../ods-react/src/components/kbd/src';
import { LinkProp, Link } from '../../../ods-react/src/components/link/src';
import { CodeBlock } from './CodeBlock';
import { MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '../../../ods-react/src/components/message/src';
import { Table } from '../../../ods-react/src/components/table/src';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';
import { HelperSpecification } from './HelperSpecification';
import { DemoCanvas, buildSandboxSnippet } from '../demo/DemoCanvas';
import { extractStorySources } from '../demo/extractSource';
import { usePageStories } from './PageStories';
import { ChartColorCards } from './ports/chartColorCards/ChartColorCards';
import { DesignTokens } from './ports/designTokens/DesignTokens';
import { TokenPreview } from './ports/designTokens/tokenPreview/TokenPreview';
import { OdsLocaleList } from './ports/OdsLocaleList';
import { Recipes } from './ports/recipes/Recipes';
import { Roadmap } from './ports/roadmap/Roadmap';
import './doc.css';

/* The neutral-format component contract: every component available inside a
   content MDX file, provided through the MDX provider — content files import
   NOTHING. */

const anatomyImages = import.meta.glob('../../assets/components/*/anatomy.png', { eager: true, import: 'default', query: '?url' }) as Record<string, string>;

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
  const imports = (storiesModule?.[story] as { globals?: { imports?: string } } | undefined)?.globals?.imports;

  if (!Composed) {
    return <p className="doc__missing">Story « { story } » introuvable.</p>;
  }
  const shown = source === 'shown' ? storySource : undefined;
  return (
    <DemoCanvas sandboxCode={ shown ? buildSandboxSnippet(shown, imports) : undefined } source={ shown }>
      <Composed />
    </DemoCanvas>
  );
};

/* Previous-major documentation link, gated by startingVersion (the major the
   component first shipped in): a component born in (or after) the previous
   major has no earlier doc to link to. Same logic as the old storybook
   IdentityCard — v18 and below is the Stencil-era storybook, whose form
   elements lived under a "form-elements" category. */
const LAST_NON_REACT_VERSION = 18;
const PREVIOUS_MAJOR_FULL_VERSION = (versions as string[]).find((version) => version.split('.')[0] !== (versions as string[])[0]?.split('.')[0]) ?? '';
const PREVIOUS_MAJOR = parseInt(PREVIOUS_MAJOR_FULL_VERSION, 10);
const PREVIOUS_FORM_ELEMENTS = ['checkbox', 'clipboard', 'combobox', 'datepicker', 'file-upload', 'form-field', 'input', 'password', 'phone-number', 'quantity', 'radio', 'range', 'select', 'switch', 'textarea', 'timepicker', 'toggle'];

function previousMajorDocUrl(name: string, startingVersion?: number): string {
  if (!PREVIOUS_MAJOR_FULL_VERSION || (startingVersion && startingVersion >= PREVIOUS_MAJOR)) {
    return '';
  }
  const uriName = name.toLowerCase().replace(' ', '-');
  const suffix = PREVIOUS_FORM_ELEMENTS.includes(uriName) && (!startingVersion || startingVersion <= LAST_NON_REACT_VERSION) ? '-form-elements' : '';
  const prefix = PREVIOUS_MAJOR > LAST_NON_REACT_VERSION ? 'react' : 'ods';
  return `https://ovh.github.io/design-system/v${PREVIOUS_MAJOR_FULL_VERSION}/?path=/docs/${prefix}-components${suffix}-${uriName}--documentation`;
}

/* Description (plain prose, unboxed) and the metadata card sit side by side. */
const IdentityCard = ({ aliases = [], children, figmaLink, githubUrl, name, startingVersion }: { aliases?: string[], children?: ReactNode, figmaLink?: string, githubUrl: string, name: string, startingVersion?: number }) => {
  const previousVersionUrl = previousMajorDocUrl(name, startingVersion);
  return (
    <div className="doc__overview">
      <div className="doc__identity-desc">{ children }</div>
      <dl className="doc__identity">
        <div><dt>Name</dt><dd>{ name }</dd></div>
        { aliases.length > 0 && <div><dt>Aliases</dt><dd>{ aliases.join(', ') }</dd></div> }
        <div>
          <dt>Links</dt>
          <dd className="doc__identity-links">
            { figmaLink && <Link href={ figmaLink } target="_blank">Design <Icon name={ ICON_NAME.externalLink } /></Link> }
            <Link href={ githubUrl } target="_blank">GitHub <Icon name={ ICON_NAME.externalLink } /></Link>
            { previousVersionUrl && <Link href={ previousVersionUrl } target="_blank">Previous major version <Icon name={ ICON_NAME.externalLink } /></Link> }
          </dd>
        </div>
      </dl>
    </div>
  );
};

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
  const url = anatomyImages[`../../assets/${src}`];
  return url ? <img alt="" className="doc__anatomy" src={ url } /> : null;
};

/* Markdown images use assets-relative paths (![alt](components/x/foo.png));
   the glob resolves them to hashed build URLs. */
const docImages = import.meta.glob('../../assets/components/**/*.png', { eager: true, import: 'default', query: '?url' }) as Record<string, string>;

const DocImage = ({ alt, src }: { alt?: string, src?: string }) => {
  const url = (src && docImages[`../../assets/${src}`]) ?? src;
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

/* Site-root-relative hrefs (e.g. "/llms/llms.txt") must resolve against the
   deploy root, not the origin: the app lives under a version subpath. */
const ExternalLink = ({ children, href, ...prop }: LinkProp) => (
  <Link href={ href?.startsWith('/') ? new URL(href.slice(1), APP_ROOT).href : href } target="_blank" { ...prop }>{ children } <Icon name={ ICON_NAME.externalLink } /></Link>
);

/* Fenced code blocks (```tsx) come out of MDX as <pre><code class="language-x">. */
const CodeFence = ({ children }: { children?: ReactNode }) => {
  const codeEl = children as ReactElement<{ children: string }> | undefined;
  const source = typeof codeEl?.props?.children === 'string' ? codeEl.props.children.trim() : '';
  return <CodeBlock style={{ margin: '1rem 0', width: '100%' }}>{ source }</CodeBlock>;
};

/* Static comparison block shared by the table and data-table docs. */
const TableVsDataTable = () => (
  <>
    <Heading label="Data Table vs Table" level={ 3 } />
    <p><code>Table</code>:</p>
    <ul>
      <li>Static data display.</li>
      <li>Limited or no interaction.</li>
      <li>Often used for simple layouts or read-only content.</li>
    </ul>
    <p><code>Data Table</code>:</p>
    <ul>
      <li>Interactive and stateful component.</li>
      <li>Supports sorting, selection, and actions.</li>
      <li>Integrated with application logic through composition.</li>
    </ul>
  </>
);

/* Deprecation banner (switch doc): replacement path per use-case. */
const Deprecated = () => (
  <Message color={ MESSAGE_COLOR.warning } dismissible={ false } style={{ width: '100%' }}>
    <MessageIcon name={ ICON_NAME.triangleExclamation } />
    <MessageBody>
      Component is now deprecated and will be removed in a future major release.
      You can use different components instead depending on your use-case:
      <ul>
        <li>managing navigation: move to <DocLink to="/components/tabs">Tabs</DocLink> using the switch variant.</li>
        <li>managing option activation: move to a <DocLink to="/components/button-group">Button Group</DocLink>.</li>
        <li>as a form element: move to a <DocLink to="/components/radio-group">Radio Group</DocLink>.</li>
      </ul>
    </MessageBody>
  </Message>
);

const MDX_COMPONENTS = {
  Anatomy,
  BestPractices,
  Canvas,
  ChartColorCards,
  Deprecated,
  DesignTokens,
  DocLink,
  ExternalLink,
  Heading,
  HelperSpecification,
  Icon,
  IdentityCard,
  Kbd,
  Link,
  Message,
  MessageBody,
  MessageIcon,
  OdsLocaleList,
  Recipes,
  TableVsDataTable,
  Roadmap,
  Table,
  TokenPreview,
  img: DocImage,
  pre: CodeFence,
};

export { ExternalLink, Heading, MDX_COMPONENTS };
