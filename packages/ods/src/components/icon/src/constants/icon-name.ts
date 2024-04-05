enum ODS_ICON_NAME {
  add = 'add',
  apps = 'apps',
  arrowCrossed = 'arrow-crossed',
  arrowDownLeft = 'arrow-down-left',
  arrowDownRight = 'arrow-down-right',
  arrowDown = 'arrow-down',
  arrowLeftRight = 'arrow-left-right',
  arrowLeft = 'arrow-left',
  arrowRight = 'arrow-right',
  arrowUpDown = 'arrow-up-down',
  arrowUpLeft = 'arrow-up-left',
  arrowUpRight = 'arrow-up-right',
  arrowUp = 'arrow-up',
  baremetalRack = 'baremetal-rack',
  baremetal = 'baremetal',
  bell = 'bell',
  book = 'book',
  calendar = 'calendar',
  chat = 'chat',
  check = 'check',
  checkboxIndeterminate = 'checkbox-indeterminate',
  checkbox = 'checkbox',
  chevronDown = 'chevron-down',
  chevronLeft = 'chevron-left',
  chevronRight = 'chevron-right',
  chevronUp = 'chevron-up',
  chrono = 'chrono',
  circle = 'circle',
  cloudCheck = 'cloud-check',
  cloudCross = 'cloud-cross',
  cloudDown = 'cloud-down',
  cloudLockFill = 'cloud-lock-fill',
  cloudUp = 'cloud-up',
  cloud = 'cloud',
  collab = 'collab',
  component = 'component',
  criticalFull = 'critical-full',
  critical = 'critical',
  cross = 'cross',
  dPad = 'd-pad',
  dangerFull = 'danger-full',
  danger = 'danger',
  delivery = 'delivery',
  diamond = 'diamond',
  doubleChevronLeft = 'double-chevron-left',
  doubleChevronRight = 'double-chevron-right',
  download = 'download',
  email = 'email',
  equal = 'equal',
  errorCircle = 'error-circle',
  externalLink = 'external-link',
  eyeClose = 'eye-close',
  eyeOpen = 'eye-open',
  faceActivated = 'face-activated',
  faceDissatisfied = 'face-dissatisfied',
  faceDizzy = 'face-dizzy',
  faceNeutral = 'face-neutral',
  faceSatisfied = 'face-satisfied',
  faceWink = 'face-wink',
  fileMinus = 'file-minus',
  filePlus = 'file-plus',
  file = 'file',
  filesCopy = 'files-copy',
  filter = 'filter',
  focus = 'focus',
  folderMinus = 'folder-minus',
  folderPlus = 'folder-plus',
  folder = 'folder',
  gameControlerA = 'game-controler-a',
  gameControlerB = 'game-controler-b',
  gameboy = 'gameboy',
  gathering = 'gathering',
  gear = 'gear',
  globe = 'globe',
  grid = 'grid',
  helpCircle = 'help-circle',
  help = 'help',
  hexagon = 'hexagon',
  hierarchy = 'hierarchy',
  home = 'home',
  infoCircle = 'info-circle',
  key = 'key',
  labsBetween = 'labs-between',
  labsEmpty = 'labs-empty',
  labsFull = 'labs-full',
  leaf = 'leaf',
  lifeBuoy = 'life-buoy',
  lightbulb = 'lightbulb',
  list = 'list',
  location = 'location',
  menuEllipsisHorizontal = 'menu-ellipsis-horizontal',
  menuEllipsisVertical = 'menu-ellipsis-vertical',
  menuHamburger = 'menu-hamburger',
  minus = 'minus',
  money = 'money',
  network = 'network',
  padlockClose = 'padlock-close',
  padlockOpen = 'padlock-open',
  pen = 'pen',
  phone = 'phone',
  printer = 'printer',
  product3az = 'product-3az',
  promotion = 'promotion',
  purchase = 'purchase',
  radio = 'radio',
  refresh = 'refresh',
  resize = 'resize',
  screen = 'screen',
  search = 'search',
  share = 'share',
  shieldCheck = 'shield-check',
  shieldCross = 'shield-cross',
  shieldFirewall = 'shield-firewall',
  shieldLockFill = 'shield-lock-fill',
  shieldMinus = 'shield-minus',
  shieldOff = 'shield-off',
  shieldPlus = 'shield-plus',
  shieldWarning = 'shield-warning',
  shield = 'shield',
  shoppingCartAdd = 'shopping-cart-add',
  shoppingCartClear = 'shopping-cart-clear',
  shoppingCartError = 'shopping-cart-error',
  shoppingCartMinus = 'shopping-cart-minus',
  shoppingCart = 'shopping-cart',
  shrink = 'shrink',
  shutdown = 'shutdown',
  sortAlphaDown = 'sort-alpha-down',
  sortAlphaUp = 'sort-alpha-up',
  sortNumDown = 'sort-num-down',
  sortNumUp = 'sort-num-up',
  square = 'square',
  starFilled = 'star-filled',
  star = 'star',
  status = 'status',
  store = 'store',
  successCircle = 'success-circle',
  time0am = 'time-0am',
  time3am = 'time-3am',
  time4am = 'time-4am',
  time6am = 'time-6am',
  time9am = 'time-9am',
  trafficCone = 'traffic-cone',
  trash = 'trash',
  triangle = 'triangle',
  undo = 'undo',
  upload = 'upload',
  userCircle = 'user-circle',
  user = 'user',
  warningTriangleFull = 'warning-triangle-full',
  warningTriangle = 'warning-triangle',
}

type OdsIconName =`${ODS_ICON_NAME}`;

const ODS_ICON_NAMES = Object.freeze(Object.values(ODS_ICON_NAME));

export type {
  OdsIconName,
};
export {
  ODS_ICON_NAME,
  ODS_ICON_NAMES,
};
