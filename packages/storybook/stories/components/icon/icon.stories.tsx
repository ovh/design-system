import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { ICON_NAME, ICON_NAMES, Icon, type IconProp } from '../../../../ods-react/src/components/icon/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<IconProp>;
type AllArg = Partial<IconProp> & {
  search: string
};
type IconNameKey = keyof typeof ICON_NAME;

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

const meta: Meta<IconProp> = {
  component: Icon,
  title: 'React Components/Icon',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    name: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'ICON_NAME' },
      },
      control: { type: 'select' },
      options: ICON_NAMES,
    },
  }),
  args: {
    name: ICON_NAME.home,
  },
};

export const AccessibilityDecorative: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Icon
      aria-hidden="true"
      name="cloud" />
  ),
};

export const AccessibilityInformative: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Icon
      aria-label="home"
      name="home" />
  ),
};

export const All: StoryObj<AllArg> = {
  render: (arg: AllArg) => {
    const regexp = new RegExp(arg.search)

    const names = arg.search ?
      Object.entries<string>(ICON_NAME)
        .filter(([key, name]) => {
          return [name].concat(ODS_ICON_TAG[key as IconNameKey] || []).some((value) => regexp.test(value));
        })
        .map(([_, name]) => name)
      : ICON_NAMES;

    return (
      <div style={{
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        {
          names.map((name) => (
            <Icon
              key={ name }
              name={ name as ICON_NAME }
              title={ name } />
          ))
        }
      </div>
    );
  },
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    search: {
      control: { type: 'text' },
      description: 'Search for a specific icon name or tag',
    },
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Icon
      aria-hidden="true"
      name="home"
      style={{ fontSize: '2rem', color: 'var(--ods-color-primary-500)' }} />
  ),
};

export const Decorative: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Icon
      aria-hidden="true"
      name="home" />
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Icon name="home" />
  ),
};

export const Informative: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Icon
      aria-label="Help"
      name="circle-question" />
  ),
};

export const AccessibilityBadPracticeDecorative: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Icon
      name="home" />
  ),
};

export const AccessibilityBadPracticeRating: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <label htmlFor="rating">Rating</label>
      <div id="rating">
        <Icon name="star" tabIndex={ 0 } aria-label="one star" />
        <Icon name="star" tabIndex={ 0 } aria-label="two star" />
        <Icon name="star" tabIndex={ 0 } aria-label="three star" />
        <Icon name="star" tabIndex={ 0 } aria-label="four star" />
        <Icon name="star" tabIndex={ 0 } aria-label="five star" />
      </div>
    </>
  ),
};

export const AccessibilityRating: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <>
      <label id="rating-label" htmlFor="rating">Rating</label>
      <div id="rating" role="radiogroup" aria-labelledby="rating-label">
        <Icon name="star" role="radio" tabIndex={ -1 } aria-label="one star" aria-checked="false" />
        <Icon name="star" role="radio" tabIndex={ 0 } aria-label="two star" aria-checked="true" />
        <Icon name="star" role="radio" tabIndex={ -1 } aria-label="three star" aria-checked="false" />
        <Icon name="star" role="radio" tabIndex={ -1 } aria-label="four star" aria-checked="false" />
        <Icon name="star" role="radio" tabIndex={ -1 } aria-label="five star" aria-checked="false" />
      </div>
    </>
  ),
};
