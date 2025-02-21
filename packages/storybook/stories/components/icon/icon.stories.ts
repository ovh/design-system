import { ODS_ICON_NAME, ODS_ICON_NAMES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-icon';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

type IconNameKey = keyof typeof ODS_ICON_NAME;

/**
 * Try to keep the tags meaningful, they should represent possible search value from a user or an alternative name
 * (ex: "day" for "calendar" or "times" for "xmark")
 * Do not add tag copying part of the icon name, as the search will find them anyway
 * (ex: do not add "arrow" tag to "arrowCrossed" icon)
 * Not every icon needs to have tags, add them only if relevant
 * Keep each tag list small (ideally no more than 4 elements)
 * Keep the tag high-level, it does not describe the state represented on the icon
 * (ex: do not add "lab-full" tag to "flask-full" icon, just add "lab" on each flask icon)
 */
const ODS_ICON_TAG: { [NameKey in IconNameKey]: string[] } = {
  arrowCrossed: [],
  arrowDown: [],
  arrowDownLeft: [],
  arrowDownRight: [],
  arrowLeft: [],
  arrowLeftRight: [],
  arrowRight: [],
  arrowUp: [],
  arrowUpDown: [],
  arrowUpLeft: [],
  arrowUpRight: [],
  bell: ['notification'],
  bill: ['invoice'],
  book: [],
  box: ['pack'],
  calendar: ['day', 'month', 'year'],
  check: ['validation'],
  chevronDoubleLeft: [],
  chevronDoubleRight: [],
  chevronDown: [],
  chevronLeft: [],
  chevronRight: [],
  chevronUp: [],
  circleCheck: ['validation'],
  circleInfo: [],
  circleQuestion: [],
  circleThreeNodes: [],
  circleUser: [],
  circleXmark: ['clear', 'times'],
  clockTimeFour: [],
  clockTimeNine: [],
  clockTimeSix: [],
  clockTimeThree: [],
  clockTimeTwelve: [],
  cloud: [],
  cloudCheck: ['validation'],
  cloudDownload: [],
  cloudLock: [],
  cloudUpload: [],
  cloudXmark: ['clear', 'times'],
  cog: [],
  columns: ['filter', 'table'],
  comment: ['chat', 'message'],
  creditCard: [],
  dPad: [],
  diamondExclamation: [],
  diamondExclamationFull: [],
  diamondsFull: [],
  download: [],
  ellipsisHorizontal: [],
  ellipsisVertical: [],
  email: [],
  emoticon: [],
  emoticonDizzy: [],
  emoticonNeutral: [],
  emoticonSad: [],
  emoticonSmile: [],
  emoticonWink: [],
  equal: [],
  externalLink: [],
  eye: [],
  eyeOff: [],
  file: [],
  fileCopy: [],
  fileMinus: [],
  filePlus: [],
  filter: [],
  flaskEmpty: ['lab'],
  flaskFull: ['lab'],
  flaskHalf: ['lab'],
  focus: [],
  folder: [],
  folderMinus: [],
  folderPlus: [],
  gameConsole: [],
  gameController: [],
  gameControllerAlt: [],
  gathering: [],
  globe: [],
  grid: ['apps'],
  gridAlt: [],
  hamburgerMenu: [],
  hexagonExclamation: [],
  hexagonExclamationFull: [],
  hierarchy: [],
  home: [],
  key: [],
  leaf: [],
  lifeBuoy: [],
  lightbulb: [],
  list: [],
  location: [],
  lockClose: [],
  lockOpen: [],
  magnifyingGlass: ['search'],
  minus: [],
  money: [],
  monitor: ['display', 'screen'],
  network: [],
  pen: [],
  phone: [],
  plus: [],
  printer: [],
  question: [],
  refresh: [],
  resize: [],
  server: ['rack'],
  serverRack: [],
  shareNodes: [],
  shield: [],
  shieldCheck: ['validation'],
  shieldExclamation: [],
  shieldFirewall: [],
  shieldLock: [],
  shieldMinus: [],
  shieldOff: [],
  shieldPlus: [],
  shieldXmark: ['clear', 'times'],
  shoppingCart: [],
  shoppingCartError: [],
  shoppingCartMinus: [],
  shoppingCartPlus: [],
  shoppingCartXmark: ['clear', 'times'],
  shrink: [],
  shutdown: [],
  sortAlphaDown: [],
  sortAlphaUp: [],
  sortNumericDown: [],
  sortNumericUp: [],
  star: [],
  starFull: [],
  store: [],
  tag: [],
  timer: ['alarm', 'clock'],
  trafficCone: [],
  trash: [],
  triangleExclamation: [],
  triangleExclamationFull: [],
  triangleThreeNodes: [],
  truck: [],
  undo: [],
  upload: [],
  user: [],
  xmark: ['clear', 'times'],
};

const meta: Meta = {
  title: 'ODS Components/Icon',
  component: 'ods-icon',
};

export default meta;

export const Demo: StoryObj = {
  argTypes: orderControls({
    name: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
      },
      control: { type: 'select' },
      options: ODS_ICON_NAMES,
    },
  }),
  args: {
    name: ODS_ICON_NAME.home,
  },
};

export const All: StoryObj = {
  render: (args) => {
    const regexp = new RegExp(args.search)

    const names = args.search ?
      Object.entries<string>(ODS_ICON_NAME)
        .filter(([key, name]) => {
          return [name].concat(ODS_ICON_TAG[key as IconNameKey] || []).some((value) => regexp.test(value));
        })
        .map(([_, name]) => name)
      : ODS_ICON_NAMES;

    return html`
      <div style="display: flex; flex-flow: row; flex-wrap: wrap; gap: 1rem;">
        ${names.map((name) =>
          html`<ods-icon name="${name}" title="${name}"></ods-icon>`
        )}
      </div>
    `;
  },
  argTypes: {
    search: {
      control: { type: 'text' },
      description: 'Search for a specific icon name or tag'
    },
  },
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-icon aria-hidden="true" id="icon-overview" name="home" size="lg"></ods-icon>
<style>
  #icon-overview {
    font-size: 2rem;
    color: var(--ods-color-primary-500);
  }
</style>
  `,
};

export const Decorative: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-icon aria-hidden="true" name="home"></ods-icon>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-icon name="home"></ods-icon>
  `,
};

export const Informative: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-icon aria-label="Help" name="circle-question"></ods-icon>
  `,
};
