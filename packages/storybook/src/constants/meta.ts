// Since v7, storybook does not allow anything else than string literal on Meta.
// so we can't use those constants on meta declaration and still needs to duplicate those values.
// Until a solution is found, those are still useful when defining <StorybookLink />

enum SECTION {
  design = 'Design and Style',
  formElements = 'Form elements',
  guides = 'Guides',
  home = 'OVHcloud Design System',
  migrationGuide = 'Migration guide',
  odsComponents = 'ODS Components',
  whatsNew = 'What\'s new?',
}

enum HOME_TITLE {
  getStarted = `${SECTION.home}/Get Started`,
  guideEvents = `${SECTION.home}/${SECTION.guides}/Using Events`,
  guideMethods = `${SECTION.home}/${SECTION.guides}/Using Methods`,
  migration12to13 = `${SECTION.home}/${SECTION.whatsNew}/${SECTION.migrationGuide}/12.x to 13.x`,
  migration13to14 = `${SECTION.home}/${SECTION.whatsNew}/${SECTION.migrationGuide}/13.x to 14.x`,
  migration14to15 = `${SECTION.home}/${SECTION.whatsNew}/${SECTION.migrationGuide}/14.x to 15.x`,
  migration15to16 = `${SECTION.home}/${SECTION.whatsNew}/${SECTION.migrationGuide}/15.x to 16.x`,
  migration16to17 = `${SECTION.home}/${SECTION.whatsNew}/${SECTION.migrationGuide}/16.x to 17.x`,
  migration17to18 = `${SECTION.home}/${SECTION.whatsNew}/${SECTION.migrationGuide}/17.x to 18.x`,
  styleCustomization = `${SECTION.home}/${SECTION.design}/Style Customization`,
  welcome = `${SECTION.home}/Welcome`,
}

enum ODS_COMPONENTS_TITLE {
  accordion = `${SECTION.odsComponents}/Accordion`,
  badge = `${SECTION.odsComponents}/Badge`,
  breadcrumb = `${SECTION.odsComponents}/Breadcrumb`,
  button = `${SECTION.odsComponents}/Button`,
  card = `${SECTION.odsComponents}/Card`,
  cart = `${SECTION.odsComponents}/Cart`,
  checkbox = `${SECTION.odsComponents}/${SECTION.formElements}/Checkbox`,
  clipboard = `${SECTION.odsComponents}/${SECTION.formElements}/Clipboard`,
  code = `${SECTION.odsComponents}/Code`,
  combobox = `${SECTION.odsComponents}/${SECTION.formElements}/Combobox`,
  contentAddon = `${SECTION.odsComponents}/Content Addon`,
  datepicker = `${SECTION.odsComponents}/${SECTION.formElements}/Datepicker`,
  divider = `${SECTION.odsComponents}/Divider`,
  drawer = `${SECTION.odsComponents}/Drawer`,
  fileUpload = `${SECTION.odsComponents}/${SECTION.formElements}/File Upload`,
  flag = `${SECTION.odsComponents}/Flag`,
  formField = `${SECTION.odsComponents}/${SECTION.formElements}/Form Field`,
  icon = `${SECTION.odsComponents}/Icon`,
  input = `${SECTION.odsComponents}/${SECTION.formElements}/Input`,
  link = `${SECTION.odsComponents}/Link`,
  medium = `${SECTION.odsComponents}/Medium`,
  menu = `${SECTION.odsComponents}/Menu`,
  message = `${SECTION.odsComponents}/Message`,
  modal = `${SECTION.odsComponents}/Modal`,
  pagination = `${SECTION.odsComponents}/Pagination`,
  password = `${SECTION.odsComponents}/${SECTION.formElements}/Password`,
  phoneNumber = `${SECTION.odsComponents}/${SECTION.formElements}/Phone Number`,
  popover = `${SECTION.odsComponents}/Popover`,
  progressBar = `${SECTION.odsComponents}/Progress Bar`,
  searchBar = `${SECTION.odsComponents}/Search Bar`,
  quantity = `${SECTION.odsComponents}/${SECTION.formElements}/Quantity`,
  radio = `${SECTION.odsComponents}/${SECTION.formElements}/Radio`,
  range = `${SECTION.odsComponents}/${SECTION.formElements}/Range`,
  select = `${SECTION.odsComponents}/${SECTION.formElements}/Select`,
  skeleton = `${SECTION.odsComponents}/Skeleton`,
  spinner = `${SECTION.odsComponents}/Spinner`,
  switch = `${SECTION.odsComponents}/${SECTION.formElements}/Switch`,
  table = `${SECTION.odsComponents}/Table`,
  tabs = `${SECTION.odsComponents}/Tabs`,
  tag = `${SECTION.odsComponents}/Tag`,
  text = `${SECTION.odsComponents}/Text`,
  textarea = `${SECTION.odsComponents}/${SECTION.formElements}/Textarea`,
  timepicker = `${SECTION.odsComponents}/${SECTION.formElements}/Timepicker`,
  toggle = `${SECTION.odsComponents}/${SECTION.formElements}/Toggle`,
  tooltip = `${SECTION.odsComponents}/Tooltip`,
}

enum STORY {
  documentation = 'Documentation',
  migrationFrom17 = 'Migration From 17.x',
  technicalInformation = 'Technical information',
}

export {
  HOME_TITLE,
  ODS_COMPONENTS_TITLE,
  SECTION,
  STORY,
};
