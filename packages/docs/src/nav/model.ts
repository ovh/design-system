import { ICON_NAME } from '../../../ods-react/src/components/icon/src';
import * as ButtonStories from '../../../storybook/stories/components/button/button.stories';
import * as CommandStories from '../../../storybook/stories/components/command/command.stories';
import * as DatepickerStories from '../../../storybook/stories/components/datepicker/datepicker.stories';
import ButtonRaw from '../../../storybook/stories/components/button/button.stories.tsx?raw';
import CommandRaw from '../../../storybook/stories/components/command/command.stories.tsx?raw';
import DatepickerRaw from '../../../storybook/stories/components/datepicker/datepicker.stories.tsx?raw';

/* Navigation model of the docs app — the single source the sidebar tree, the
   router and the ⌘K search are all derived from. Mirrors the editorial
   structure decided in the CDC (two roots); populated with the PoC scope for
   now, grows as content is migrated. */

interface NavPage {
  icon?: ICON_NAME;
  id: string;
  kind: 'component' | 'tool';
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

const NAV: NavSection[] = [
  {
    icon: ICON_NAME.book,
    id: 'ods',
    title: 'OVHcloud Design System',
    children: [
      {
        icon: ICON_NAME.cog,
        id: 'tools',
        title: 'Tools',
        children: [
          { icon: ICON_NAME.lightbulb, id: 'tools/sandbox', kind: 'tool', path: '/tools/sandbox', title: 'Code Sandbox' },
        ],
      },
    ],
  },
  {
    icon: ICON_NAME.grid,
    id: 'components',
    title: 'React Components',
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
   selection maps straight to a route. */
function toTreeItems(nodes: (NavSection | NavPage)[] = NAV): { children?: unknown[], customRendererData?: { icon?: ICON_NAME }, id: string, name: string }[] {
  return nodes.map((node) => (isPage(node)
    ? { customRendererData: { icon: node.icon }, id: node.id, name: node.title }
    : { children: toTreeItems(node.children), customRendererData: { icon: node.icon }, id: node.id, name: node.title }));
}

export { NAV, flattenPages, isPage, toTreeItems, type NavPage, type NavSection };
