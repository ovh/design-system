import { ICON_NAME } from '../../../ods-react/src/components/icon/src';
import * as ButtonStories from '../../../storybook/stories/components/button/button.stories';
import * as CommandStories from '../../../storybook/stories/components/command/command.stories';
import * as DatepickerStories from '../../../storybook/stories/components/datepicker/datepicker.stories';
import * as FormFieldStories from '../../../storybook/stories/components/form-field/form-field.stories';
import ButtonRaw from '../../../storybook/stories/components/button/button.stories.tsx?raw';
import CommandRaw from '../../../storybook/stories/components/command/command.stories.tsx?raw';
import DatepickerRaw from '../../../storybook/stories/components/datepicker/datepicker.stories.tsx?raw';
import FormFieldRaw from '../../../storybook/stories/components/form-field/form-field.stories.tsx?raw';

/* Navigation model of the docs app — the single source the sidebar tree, the
   router and the ⌘K search are all derived from. Mirrors the editorial
   structure decided in the CDC (two roots); populated with the PoC scope for
   now, grows as content is migrated. */

interface NavPage {
  icon?: ICON_NAME;
  id: string;
  kind: 'component' | 'guide' | 'tool';
  path: string;
  raw?: string;
  storiesModule?: Record<string, unknown>;
  title: string;
}

interface NavSection {
  children: (NavSection | NavPage)[];
  icon?: ICON_NAME;
  id: string;
  title: string;
}

/* Section order mirrors the old Storybook storySort; the single "OVHcloud
   Design System" root was dropped (the brand logo already says it). */
const NAV: (NavSection | NavPage)[] = [
  { icon: ICON_NAME.home, id: 'guides/welcome', kind: 'guide', path: '/', title: 'Welcome' },
  { icon: ICON_NAME.arrowRight, id: 'guides/get-started', kind: 'guide', path: '/guides/get-started', title: 'Get Started' },
  {
    icon: ICON_NAME.pen,
    id: 'build',
    title: 'Build',
    children: [
      { icon: ICON_NAME.file, id: 'guides/accessibility', kind: 'guide', path: '/guides/accessibility', title: 'Accessibility' },
      { icon: ICON_NAME.file, id: 'guides/internationalization', kind: 'guide', path: '/guides/internationalization', title: 'Internationalization' },
      { icon: ICON_NAME.file, id: 'guides/forms', kind: 'guide', path: '/guides/forms', raw: FormFieldRaw, storiesModule: FormFieldStories, title: 'Forms' },
      { icon: ICON_NAME.file, id: 'guides/charts', kind: 'guide', path: '/guides/charts', title: 'Charts' },
    ],
  },
  {
    icon: ICON_NAME.magicWand,
    id: 'customize',
    title: 'Customize',
    children: [
      { icon: ICON_NAME.file, id: 'guides/apply-ods-style', kind: 'guide', path: '/guides/apply-ods-style', title: 'Apply ODS Style' },
      { icon: ICON_NAME.file, id: 'guides/style-customization', kind: 'guide', path: '/guides/style-customization', title: 'Style Customization' },
      { icon: ICON_NAME.file, id: 'guides/design-tokens', kind: 'guide', path: '/guides/design-tokens', title: 'Design Tokens' },
      { icon: ICON_NAME.file, id: 'guides/tailwind', kind: 'guide', path: '/guides/tailwind', title: 'Tailwind CSS Integration' },
    ],
  },
  {
    icon: ICON_NAME.arrowUp,
    id: 'upgrade',
    title: 'Upgrade',
    children: [
      { icon: ICON_NAME.file, id: 'guides/whats-new', kind: 'guide', path: '/guides/whats-new', title: "What's new" },
      { icon: ICON_NAME.list, id: 'guides/changelog', kind: 'guide', path: '/guides/changelog', title: 'Changelog' },
      { icon: ICON_NAME.file, id: 'guides/migration-to-v19', kind: 'guide', path: '/guides/migration-to-v19', title: 'Migration to v19' },
      {
        icon: ICON_NAME.refresh,
        id: 'previous-migrations',
        title: 'Previous Migrations',
        children: [
          { icon: ICON_NAME.file, id: 'guides/migration-12-to-13', kind: 'guide', path: '/guides/migration-12-to-13', title: '12.x to 13.x' },
          { icon: ICON_NAME.file, id: 'guides/migration-13-to-14', kind: 'guide', path: '/guides/migration-13-to-14', title: '13.x to 14.x' },
          { icon: ICON_NAME.file, id: 'guides/migration-14-to-15', kind: 'guide', path: '/guides/migration-14-to-15', title: '14.x to 15.x' },
          { icon: ICON_NAME.file, id: 'guides/migration-15-to-16', kind: 'guide', path: '/guides/migration-15-to-16', title: '15.x to 16.x' },
          { icon: ICON_NAME.file, id: 'guides/migration-16-to-17', kind: 'guide', path: '/guides/migration-16-to-17', title: '16.x to 17.x' },
          { icon: ICON_NAME.file, id: 'guides/migration-17-to-18', kind: 'guide', path: '/guides/migration-17-to-18', title: '17.x to 18.x' },
        ],
      },
    ],
  },
  {
    icon: ICON_NAME.cog,
    id: 'tools',
    title: 'Tools',
    children: [
      { icon: ICON_NAME.chevronLeftUnderscore, id: 'tools/sandbox', kind: 'tool', path: '/tools/sandbox', title: 'Code Sandbox' },
    ],
  },
  {
    icon: ICON_NAME.robot,
    id: 'ai-agents',
    title: 'AI Agents',
    children: [
      { icon: ICON_NAME.file, id: 'guides/llm-documentation', kind: 'guide', path: '/guides/llm-documentation', title: 'LLM Documentation' },
    ],
  },
  { icon: ICON_NAME.circleQuestion, id: 'guides/faq', kind: 'guide', path: '/guides/faq', title: 'F.A.Q.' },
  { icon: ICON_NAME.list, id: 'guides/roadmap', kind: 'guide', path: '/guides/roadmap', title: 'Roadmap' },
  {
    icon: ICON_NAME.grid,
    id: 'components',
    title: 'Components',
    children: [
      { icon: ICON_NAME.box, id: 'components/button', kind: 'component', path: '/components/button', raw: ButtonRaw, storiesModule: ButtonStories, title: 'Button' },
      { icon: ICON_NAME.box, id: 'components/command', kind: 'component', path: '/components/command', raw: CommandRaw, storiesModule: CommandStories, title: 'Command' },
      { icon: ICON_NAME.box, id: 'components/datepicker', kind: 'component', path: '/components/datepicker', raw: DatepickerRaw, storiesModule: DatepickerStories, title: 'Datepicker' },
    ],
  },
];

function isPage(node: NavSection | NavPage): node is NavPage {
  return 'path' in node;
}

function flattenPages(nodes: (NavSection | NavPage)[] = NAV): NavPage[] {
  return nodes.flatMap((node) => (isPage(node) ? [node] : flattenPages(node.children)));
}

/* TreeView items derived from the model; leaf ids = page ids so a tree
   selection maps straight to a route. Icons show on the top level only —
   an icon per row drowns the labels. */
function toTreeItems(nodes: (NavSection | NavPage)[] = NAV, depth = 0): { children?: unknown[], customRendererData?: { icon?: ICON_NAME }, id: string, name: string }[] {
  return nodes.map((node) => (isPage(node)
    ? { customRendererData: { icon: depth === 0 ? node.icon : undefined }, id: node.id, name: node.title }
    : { children: toTreeItems(node.children, depth + 1), customRendererData: { icon: depth === 0 ? node.icon : undefined }, id: node.id, name: node.title }));
}

export { NAV, flattenPages, isPage, toTreeItems, type NavPage, type NavSection };
