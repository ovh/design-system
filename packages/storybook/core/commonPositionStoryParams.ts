const positionParams = {
  applyDirection: {
    category: 'General',
    description: 'apply an HTML directionality',
    defaultValue: 'ltr',
    options: ['ltr', 'rtl'],
    control: { type: 'select' },
    table: { defaultValue: { summary: 'ltr' } },
  },
  changeAlignment: {
    category: 'General',
    description: 'position component on the page',
    defaultValue: 'center',
    options: ['start start', 'start center', 'start end', 'center start', 'center', 'center end', 'end start', 'end center', 'end end'],
    control: { type: 'select' },
    table: { defaultValue: { summary: 'start center' } },
  },
  applyContent: {
    category: 'General',
    description: 'apply some fake HTML in order to enable scrolling',
    defaultValue: false,
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } },
  },
};

const applyContentText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
  'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Phasellus at blandit elit. Sed blandit, ipsum ut luctus venenatis, leo augue mollis massa, '

export { positionParams, applyContentText };
