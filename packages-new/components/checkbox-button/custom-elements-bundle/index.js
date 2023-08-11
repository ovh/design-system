import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

var ODS_ICON_NAME;
(function (ODS_ICON_NAME) {
  ODS_ICON_NAME["ADD"] = "add";
  ODS_ICON_NAME["ARROW_DOWN_RIGHT"] = "arrow-down-right";
  ODS_ICON_NAME["ARROW_DOWN"] = "arrow-down";
  ODS_ICON_NAME["ARROW_LEFT"] = "arrow-left";
  ODS_ICON_NAME["ARROW_RIGHT"] = "arrow-right";
  ODS_ICON_NAME["ARROW_TRANSFER"] = "arrow-transfer";
  ODS_ICON_NAME["ARROW_UP_RIGHT"] = "arrow-up-right";
  ODS_ICON_NAME["ARROW_UP"] = "arrow-up";
  ODS_ICON_NAME["BELL"] = "bell";
  ODS_ICON_NAME["BIN"] = "bin";
  ODS_ICON_NAME["BOOK"] = "book";
  ODS_ICON_NAME["CALENDAR"] = "calendar";
  ODS_ICON_NAME["CART"] = "cart";
  ODS_ICON_NAME["CHAT"] = "chat";
  ODS_ICON_NAME["CHECK"] = "check";
  ODS_ICON_NAME["CHEVRON_DOWN"] = "chevron-down";
  ODS_ICON_NAME["CHEVRON_LEFT"] = "chevron-left";
  ODS_ICON_NAME["CHEVRON_RIGHT"] = "chevron-right";
  ODS_ICON_NAME["CHEVRON_UP_DOWN"] = "chevron-up-down";
  ODS_ICON_NAME["CHEVRON_UP"] = "chevron-up";
  ODS_ICON_NAME["CLOCK_WAIT"] = "clock-wait";
  ODS_ICON_NAME["CLOSE"] = "close";
  ODS_ICON_NAME["COPY"] = "copy";
  ODS_ICON_NAME["DOWNLOAD"] = "download";
  ODS_ICON_NAME["ELLIPSIS_VERTICAL"] = "ellipsis-vertical";
  ODS_ICON_NAME["ELLIPSIS"] = "ellipsis";
  ODS_ICON_NAME["EMAIL"] = "email";
  ODS_ICON_NAME["EQUAL"] = "equal";
  ODS_ICON_NAME["ERROR_CIRCLE"] = "error-circle";
  ODS_ICON_NAME["ERROR"] = "error";
  ODS_ICON_NAME["EXTERNAL_LINK"] = "external-link";
  ODS_ICON_NAME["EYE_CLOSED"] = "eye-closed";
  ODS_ICON_NAME["EYE_OPEN"] = "eye-open";
  ODS_ICON_NAME["FILE"] = "file";
  ODS_ICON_NAME["FILTER"] = "filter";
  ODS_ICON_NAME["FOLDER"] = "folder";
  ODS_ICON_NAME["GEAR"] = "gear";
  ODS_ICON_NAME["GUIDES"] = "guides";
  ODS_ICON_NAME["HAMBURGER"] = "hamburger";
  ODS_ICON_NAME["HELP_CIRCLE"] = "help-circle";
  ODS_ICON_NAME["HELP"] = "help";
  ODS_ICON_NAME["HOME"] = "home";
  ODS_ICON_NAME["INDETERMINATE"] = "indeterminate";
  ODS_ICON_NAME["INFO_CIRCLE"] = "info-circle";
  ODS_ICON_NAME["INFO"] = "info";
  ODS_ICON_NAME["LIGHTBULB"] = "lightbulb";
  ODS_ICON_NAME["LIST"] = "list";
  ODS_ICON_NAME["LOCATION"] = "location";
  ODS_ICON_NAME["LOCK"] = "lock";
  ODS_ICON_NAME["MINUS"] = "minus";
  ODS_ICON_NAME["OK"] = "ok";
  ODS_ICON_NAME["OVH"] = "ovh";
  ODS_ICON_NAME["PEN"] = "pen";
  ODS_ICON_NAME["PHONE"] = "phone";
  ODS_ICON_NAME["PLUS"] = "plus";
  ODS_ICON_NAME["PRINTER"] = "printer";
  ODS_ICON_NAME["REFRESH"] = "refresh";
  ODS_ICON_NAME["REMOVE"] = "remove";
  ODS_ICON_NAME["SEARCH"] = "search";
  ODS_ICON_NAME["SETTINGS"] = "settings";
  ODS_ICON_NAME["SHAPE_CIRCLE"] = "shape-circle";
  ODS_ICON_NAME["SHAPE_DOT"] = "shape-dot";
  ODS_ICON_NAME["SORT_DOWN"] = "sort-down";
  ODS_ICON_NAME["SORT_UP"] = "sort-up";
  ODS_ICON_NAME["SORT"] = "sort";
  ODS_ICON_NAME["SUCCESS_CIRCLE"] = "success-circle";
  ODS_ICON_NAME["SUCCESS"] = "success";
  ODS_ICON_NAME["TIME"] = "time";
  ODS_ICON_NAME["TRANSFER"] = "transfer";
  ODS_ICON_NAME["TRASH"] = "trash";
  ODS_ICON_NAME["TRIANGLE_DOWN"] = "triangle-down";
  ODS_ICON_NAME["TRIANGLE_LEFT"] = "triangle-left";
  ODS_ICON_NAME["TRIANGLE_RIGHT"] = "triangle-right";
  ODS_ICON_NAME["TRIANGLE_UP"] = "triangle-up";
  ODS_ICON_NAME["TRUCK"] = "truck";
  ODS_ICON_NAME["USER"] = "user";
  ODS_ICON_NAME["WARNING_CIRCLE"] = "warning-circle";
  ODS_ICON_NAME["WARNING"] = "warning";
  ODS_ICON_NAME["ANTI_DDOS_PROTECTION_CONCEPT"] = "anti-ddos-protection-concept";
  ODS_ICON_NAME["APP_GEAR_CONCEPT"] = "app-gear-concept";
  ODS_ICON_NAME["APP_REPLICATION_CONCEPT"] = "app-replication-concept";
  ODS_ICON_NAME["APP_SCRIPT_CONCEPT"] = "app-script-concept";
  ODS_ICON_NAME["APP_WORLD_CONCEPT"] = "app-world-concept";
  ODS_ICON_NAME["APPLICATION_CONCEPT"] = "application-concept";
  ODS_ICON_NAME["ARROW_CROSSED_CONCEPT"] = "arrow-crossed-concept";
  ODS_ICON_NAME["ARROW_DOWN_CONCEPT"] = "arrow-down-concept";
  ODS_ICON_NAME["ARROW_LEFT_CONCEPT"] = "arrow-left-concept";
  ODS_ICON_NAME["ARROW_RIGHT_CONCEPT"] = "arrow-right-concept";
  ODS_ICON_NAME["ARROW_UNDO_CONCEPT"] = "arrow-undo-concept";
  ODS_ICON_NAME["BALANCE_CONCEPT"] = "balance-concept";
  ODS_ICON_NAME["BANDWIDTH_CONCEPT"] = "bandwidth-concept";
  ODS_ICON_NAME["BELL_CONCEPT"] = "bell-concept";
  ODS_ICON_NAME["BIRD_CONCEPT"] = "bird-concept";
  ODS_ICON_NAME["BOOK_CLOSE_CONCEPT"] = "book-close-concept";
  ODS_ICON_NAME["BOOK_CONTACT_CONCEPT"] = "book-contact-concept";
  ODS_ICON_NAME["BOOK_OPEN_CONCEPT"] = "book-open-concept";
  ODS_ICON_NAME["BROOM_CONCEPT"] = "broom-concept";
  ODS_ICON_NAME["BRUSH_CONCEPT"] = "brush-concept";
  ODS_ICON_NAME["CABLE_SPEED_CONCEPT"] = "cable-speed-concept";
  ODS_ICON_NAME["CALENDAR_PAY_AS_YOU_GO_CONCEPT"] = "calendar-pay-as-you-go-concept";
  ODS_ICON_NAME["CALENDAR_CONCEPT"] = "calendar-concept";
  ODS_ICON_NAME["CAMERA_CONCEPT"] = "camera-concept";
  ODS_ICON_NAME["CART_CONCEPT"] = "cart-concept";
  ODS_ICON_NAME["CDN_CONCEPT"] = "cdn-concept";
  ODS_ICON_NAME["CHATBOT_CONCEPT"] = "chatbot-concept";
  ODS_ICON_NAME["CHRONO_CONCEPT"] = "chrono-concept";
  ODS_ICON_NAME["CLOCK_AVAILABLE_CONCEPT"] = "clock-available-concept";
  ODS_ICON_NAME["CLOCK_CONCEPT"] = "clock-concept";
  ODS_ICON_NAME["CLOUD_DATA_SHARING_CONCEPT"] = "cloud-data-sharing-concept";
  ODS_ICON_NAME["CLOUD_EDGE_COMPUTING_CONCEPT"] = "cloud-edge-computing-concept";
  ODS_ICON_NAME["CLOUD_ESSENTIAL_CONCEPT"] = "cloud-essential-concept";
  ODS_ICON_NAME["CLOUD_EYE_CONCEPT"] = "cloud-eye-concept";
  ODS_ICON_NAME["CLOUD_HAND_CONCEPT"] = "cloud-hand-concept";
  ODS_ICON_NAME["CLOUD_HYBRID_CONCEPT"] = "cloud-hybrid-concept";
  ODS_ICON_NAME["CLOUD_INFINITY_CONCEPT"] = "cloud-infinity-concept";
  ODS_ICON_NAME["CLOUD_PADLOCK_CONCEPT"] = "cloud-padlock-concept";
  ODS_ICON_NAME["CLOUD_SERVER_CONCEPT"] = "cloud-server-concept";
  ODS_ICON_NAME["CLOUD_CONCEPT"] = "cloud-concept";
  ODS_ICON_NAME["COMMUNITY_CONCEPT"] = "community-concept";
  ODS_ICON_NAME["COMPONENT_SQUARE_CONCEPT"] = "component-square-concept";
  ODS_ICON_NAME["COMPONENT_CONCEPT"] = "component-concept";
  ODS_ICON_NAME["COMPUTE_CONCEPT"] = "compute-concept";
  ODS_ICON_NAME["COMPUTER_CURVE_CONCEPT"] = "computer-curve-concept";
  ODS_ICON_NAME["COMPUTER_FLOPPY_CONCEPT"] = "computer-floppy-concept";
  ODS_ICON_NAME["COMPUTER_FOLDER_CONCEPT"] = "computer-folder-concept";
  ODS_ICON_NAME["COMPUTER_LAPTOP_CLOUD_CONCEPT"] = "computer-laptop-cloud-concept";
  ODS_ICON_NAME["COMPUTER_LAPTOP_CONCEPT"] = "computer-laptop-concept";
  ODS_ICON_NAME["COMPUTER_V_R_OPS_CONCEPT"] = "computer-v-r-ops-concept";
  ODS_ICON_NAME["COMPUTER_CONCEPT"] = "computer-concept";
  ODS_ICON_NAME["CONTAINER_CONCEPT"] = "container-concept";
  ODS_ICON_NAME["COUNTER_CONCEPT"] = "counter-concept";
  ODS_ICON_NAME["CREDIT_CARD_CLOCK_CONCEPT"] = "credit-card-clock-concept";
  ODS_ICON_NAME["CREDIT_CARD_CONCEPT"] = "credit-card-concept";
  ODS_ICON_NAME["CURVE_CONCEPT"] = "curve-concept";
  ODS_ICON_NAME["DATABASE_COLD_ARCHIVE_CONCEPT"] = "database-cold-archive-concept";
  ODS_ICON_NAME["DATABASE_SQL_CONCEPT"] = "database-sql-concept";
  ODS_ICON_NAME["DATABASE_CONCEPT"] = "database-concept";
  ODS_ICON_NAME["DATACENTER_CONCEPT"] = "datacenter-concept";
  ODS_ICON_NAME["DEVICE_MOBILE_CONCEPT"] = "device-mobile-concept";
  ODS_ICON_NAME["DEVICE_TABLET_CONCEPT"] = "device-tablet-concept";
  ODS_ICON_NAME["DIAMOND_CONCEPT"] = "diamond-concept";
  ODS_ICON_NAME["DIFFERENT_CONCEPT"] = "different-concept";
  ODS_ICON_NAME["DNS_ANYCAST_CONCEPT"] = "dns-anycast-concept";
  ODS_ICON_NAME["DOMAINS_CONCEPT"] = "domains-concept";
  ODS_ICON_NAME["DOWNLOAD_CONCEPT"] = "download-concept";
  ODS_ICON_NAME["DSLAM_CONCEPT"] = "dslam-concept";
  ODS_ICON_NAME["ENVELOP_LETTER_CONCEPT"] = "envelop-letter-concept";
  ODS_ICON_NAME["ENVELOP_CONCEPT"] = "envelop-concept";
  ODS_ICON_NAME["ETHERNET_ADD_CONCEPT"] = "ethernet-add-concept";
  ODS_ICON_NAME["ETHERNET_CONCEPT"] = "ethernet-concept";
  ODS_ICON_NAME["EXPANSION_ARROWS_CONCEPT"] = "expansion-arrows-concept";
  ODS_ICON_NAME["EXPORT_CONCEPT"] = "export-concept";
  ODS_ICON_NAME["EYE_CONCEPT"] = "eye-concept";
  ODS_ICON_NAME["FLASK_CONCEPT"] = "flask-concept";
  ODS_ICON_NAME["FLOPPY_CLOCK_CONCEPT"] = "floppy-clock-concept";
  ODS_ICON_NAME["FLOPPY_RELOAD_CONCEPT"] = "floppy-reload-concept";
  ODS_ICON_NAME["FLOPPY_CONCEPT"] = "floppy-concept";
  ODS_ICON_NAME["FOLDER_FTP_CONCEPT"] = "folder-ftp-concept";
  ODS_ICON_NAME["FOLDER_CONCEPT"] = "folder-concept";
  ODS_ICON_NAME["GEAR_ARROW_CONCEPT"] = "gear-arrow-concept";
  ODS_ICON_NAME["GEAR_DOLLAR_CONCEPT"] = "gear-dollar-concept";
  ODS_ICON_NAME["GEAR_CONCEPT"] = "gear-concept";
  ODS_ICON_NAME["GEOLOCALISATION_OVHCLOUD_CONCEPT"] = "geolocalisation-ovhcloud-concept";
  ODS_ICON_NAME["GEOLOCALISATION_PLAN_CONCEPT"] = "geolocalisation-plan-concept";
  ODS_ICON_NAME["GIFT_CONCEPT"] = "gift-concept";
  ODS_ICON_NAME["GRAPH_CONCEPT"] = "graph-concept";
  ODS_ICON_NAME["HAND_LEAF_CONCEPT"] = "hand-leaf-concept";
  ODS_ICON_NAME["HAND_WORLD_CONCEPT"] = "hand-world-concept";
  ODS_ICON_NAME["HANDSHAKE_CONCEPT"] = "handshake-concept";
  ODS_ICON_NAME["HARDWARE_GPU_CONCEPT"] = "hardware-gpu-concept";
  ODS_ICON_NAME["HARDWARE_SATA_CONCEPT"] = "hardware-sata-concept";
  ODS_ICON_NAME["HARDWARE_SSD_CONCEPT"] = "hardware-ssd-concept";
  ODS_ICON_NAME["HASHTAG_CONCEPT"] = "hashtag-concept";
  ODS_ICON_NAME["HOURGLASS_CONCEPT"] = "hourglass-concept";
  ODS_ICON_NAME["HOUSE_CONCEPT"] = "house-concept";
  ODS_ICON_NAME["IMPORT_CONCEPT"] = "import-concept";
  ODS_ICON_NAME["INFINITE_CONCEPT"] = "infinite-concept";
  ODS_ICON_NAME["INFO_CONCEPT"] = "info-concept";
  ODS_ICON_NAME["INVADER_CONCEPT"] = "invader-concept";
  ODS_ICON_NAME["IO_T_CONCEPT"] = "io-t-concept";
  ODS_ICON_NAME["KEY_CONCEPT"] = "key-concept";
  ODS_ICON_NAME["KEYPAD_CONCEPT"] = "keypad-concept";
  ODS_ICON_NAME["LEAF_CONCEPT"] = "leaf-concept";
  ODS_ICON_NAME["LIFEBUOY_CONCEPT"] = "lifebuoy-concept";
  ODS_ICON_NAME["LIGHTBULB_CONCEPT"] = "lightbulb-concept";
  ODS_ICON_NAME["LINE_COMMUNICATING_CONCEPT"] = "line-communicating-concept";
  ODS_ICON_NAME["LINES_SYMMETRICAL_CONCEPT"] = "lines-symmetrical-concept";
  ODS_ICON_NAME["MAGNIFYING_GLASS_CHECK_CONCEPT"] = "magnifying-glass-check-concept";
  ODS_ICON_NAME["MAGNIFYING_GLASS_PERSON_CONCEPT"] = "magnifying-glass-person-concept";
  ODS_ICON_NAME["MAGNIFYING_GLASS_CONCEPT"] = "magnifying-glass-concept";
  ODS_ICON_NAME["MAP_FRANCE_CONCEPT"] = "map-france-concept";
  ODS_ICON_NAME["MEASURE_CONCEPT"] = "measure-concept";
  ODS_ICON_NAME["MEDAL_CONCEPT"] = "medal-concept";
  ODS_ICON_NAME["MICROPHONE_CONCEPT"] = "microphone-concept";
  ODS_ICON_NAME["MODEM_CONCEPT"] = "modem-concept";
  ODS_ICON_NAME["MULTI_DEVICE_CONCEPT"] = "multi-device-concept";
  ODS_ICON_NAME["NETWORK_CONCEPT"] = "network-concept";
  ODS_ICON_NAME["NEWTAB_CONCEPT"] = "newtab-concept";
  ODS_ICON_NAME["NRA_CONCEPT"] = "nra-concept";
  ODS_ICON_NAME["OPENSTACK_CONCEPT"] = "openstack-concept";
  ODS_ICON_NAME["OVER_THE_BOX_CONCEPT"] = "over-the-box-concept";
  ODS_ICON_NAME["PADLOCK_CLOSED_CONCEPT"] = "padlock-closed-concept";
  ODS_ICON_NAME["PADLOCK_OPENED_CONCEPT"] = "padlock-opened-concept";
  ODS_ICON_NAME["PADLOCK_TRANSIT_CONCEPT"] = "padlock-transit-concept";
  ODS_ICON_NAME["PAGE_CERTIFICATE_CONCEPT"] = "page-certificate-concept";
  ODS_ICON_NAME["PAGE_INFO_CONCEPT"] = "page-info-concept";
  ODS_ICON_NAME["PAGE_QUESTION_CONCEPT"] = "page-question-concept";
  ODS_ICON_NAME["PAGE_SCRIPT_CONCEPT"] = "page-script-concept";
  ODS_ICON_NAME["PAGE_CONCEPT"] = "page-concept";
  ODS_ICON_NAME["PAPERPLANE_CONCEPT"] = "paperplane-concept";
  ODS_ICON_NAME["PARTNER_PLATFORMSH_CONCEPT"] = "partner-platformsh-concept";
  ODS_ICON_NAME["PAUSE_CONCEPT"] = "pause-concept";
  ODS_ICON_NAME["PEN_CONCEPT"] = "pen-concept";
  ODS_ICON_NAME["PERSON_HAPPY_CONCEPT"] = "person-happy-concept";
  ODS_ICON_NAME["PERSON_CONCEPT"] = "person-concept";
  ODS_ICON_NAME["PHONE_DOTS_CONCEPT"] = "phone-dots-concept";
  ODS_ICON_NAME["PHONE_FILTER_CONCEPT"] = "phone-filter-concept";
  ODS_ICON_NAME["PHONE_FOBIDDEN_CONCEPT"] = "phone-fobidden-concept";
  ODS_ICON_NAME["PHONE_FORWARD_CONCEPT"] = "phone-forward-concept";
  ODS_ICON_NAME["PHONE_CONCEPT"] = "phone-concept";
  ODS_ICON_NAME["PROMOTION"] = "promotion";
  ODS_ICON_NAME["PIG_CONCEPT"] = "pig-concept";
  ODS_ICON_NAME["PLAY_CONCEPT"] = "play-concept";
  ODS_ICON_NAME["PLUG_N_PLAY_CONCEPT"] = "plug-n-play-concept";
  ODS_ICON_NAME["POWER_CONCEPT"] = "power-concept";
  ODS_ICON_NAME["PRINTER_CONCEPT"] = "printer-concept";
  ODS_ICON_NAME["PUZZLE_CONCEPT"] = "puzzle-concept";
  ODS_ICON_NAME["RAM_CONCEPT"] = "ram-concept";
  ODS_ICON_NAME["RECEIPT_CONCEPT"] = "receipt-concept";
  ODS_ICON_NAME["RELOAD_CONCEPT"] = "reload-concept";
  ODS_ICON_NAME["REPLICATION_CONCEPT"] = "replication-concept";
  ODS_ICON_NAME["RSS_CONCEPT"] = "rss-concept";
  ODS_ICON_NAME["SCALE_UP_CONCEPT"] = "scale-up-concept";
  ODS_ICON_NAME["SERVER_GEAR_CONCEPT"] = "server-gear-concept";
  ODS_ICON_NAME["SERVER_MANAGED_CONCEPT"] = "server-managed-concept";
  ODS_ICON_NAME["SERVER_CONCEPT"] = "server-concept";
  ODS_ICON_NAME["SHARE_CONCEPT"] = "share-concept";
  ODS_ICON_NAME["SHIELD_CONCEPT"] = "shield-concept";
  ODS_ICON_NAME["SMILEY_HAPPY_CONCEPT"] = "smiley-happy-concept";
  ODS_ICON_NAME["SMILEY_SAD_CONCEPT"] = "smiley-sad-concept";
  ODS_ICON_NAME["SMS_CONCEPT"] = "sms-concept";
  ODS_ICON_NAME["SOFTWARE_CONCEPT"] = "software-concept";
  ODS_ICON_NAME["SPANNER_CONCEPT"] = "spanner-concept";
  ODS_ICON_NAME["SPEAKER_OFF_CONCEPT"] = "speaker-off-concept";
  ODS_ICON_NAME["SPEAKER_ON_CONCEPT"] = "speaker-on-concept";
  ODS_ICON_NAME["SPEECH_BUBBLE_CONCEPT"] = "speech-bubble-concept";
  ODS_ICON_NAME["STAR_CONCEPT"] = "star-concept";
  ODS_ICON_NAME["STOP_CONCEPT"] = "stop-concept";
  ODS_ICON_NAME["SUB_REPARTITOR_CONCEPT"] = "sub-repartitor-concept";
  ODS_ICON_NAME["TAPE_CONCEPT"] = "tape-concept";
  ODS_ICON_NAME["THUMB_UP_CONCEPT"] = "thumb-up-concept";
  ODS_ICON_NAME["TODO_LIST_CONCEPT"] = "todo-list-concept";
  ODS_ICON_NAME["TRAFFIC_CONE_CONCEPT"] = "traffic-cone-concept";
  ODS_ICON_NAME["TRANSFER_CONCEPT"] = "transfer-concept";
  ODS_ICON_NAME["TRASH_CONCEPT"] = "trash-concept";
  ODS_ICON_NAME["TRUCK_CONCEPT"] = "truck-concept";
  ODS_ICON_NAME["TYPING_CONCEPT"] = "typing-concept";
  ODS_ICON_NAME["UPLOAD_CONCEPT"] = "upload-concept";
  ODS_ICON_NAME["USER_FORBID_CONCEPT"] = "user-forbid-concept";
  ODS_ICON_NAME["USER_SUPPORT_CONCEPT"] = "user-support-concept";
  ODS_ICON_NAME["USER_CONCEPT"] = "user-concept";
  ODS_ICON_NAME["VIRTUAL_MACHINE_CONCEPT"] = "virtual-machine-concept";
  ODS_ICON_NAME["WALLET_CONCEPT"] = "wallet-concept";
  ODS_ICON_NAME["WARNING_CONCEPT"] = "warning-concept";
  ODS_ICON_NAME["WIFI_CONCEPT"] = "wifi-concept";
  ODS_ICON_NAME["WORLD_ADD_CONCEPT"] = "world-add-concept";
  ODS_ICON_NAME["WORLD_CONCEPT"] = "world-concept";
})(ODS_ICON_NAME || (ODS_ICON_NAME = {}));
Object.freeze(Object.values(ODS_ICON_NAME));

var ODS_ICON_SIZE;
(function (ODS_ICON_SIZE) {
  ODS_ICON_SIZE["xxs"] = "xxs";
  ODS_ICON_SIZE["xs"] = "xs";
  ODS_ICON_SIZE["sm"] = "sm";
  ODS_ICON_SIZE["md"] = "md";
  ODS_ICON_SIZE["lg"] = "lg";
  ODS_ICON_SIZE["xl"] = "xl";
})(ODS_ICON_SIZE || (ODS_ICON_SIZE = {}));
Object.freeze(Object.values(ODS_ICON_SIZE));

const add = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 3a1 1 0 011 1v7h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 011-1z'/%3E%3C/svg%3E";
const bell = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 2a7 7 0 017 7v5c0 1.65.488 2.626 1.447 3.106.944.471.608 1.894-.447 1.894h-4.902a2.999 2.999 0 01-5.196 0H4c-1.055 0-1.391-1.423-.447-1.894C4.513 16.626 5 15.65 5 14V9a7 7 0 017-7zm0 2a5 5 0 00-5 5v5c0 1.171-.21 2.178-.632 3h11.264c-.422-.822-.632-1.829-.632-3V9a5 5 0 00-5-5z'/%3E%3C/svg%3E";
const bin = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M15 5h4a1 1 0 010 2H5a1 1 0 010-2h4c0-1.857.386-1.99.883-2h4.234c.497.01.883.143.883 2zm-5 4a1 1 0 011 1v7a1 1 0 01-2 0v-7a1 1 0 011-1zm8-1a1 1 0 011 1v11c0 1.219-.781 2-2 2H7c-1.219 0-2-.781-2-2V9a1 1 0 012 0v11h10V9a1 1 0 011-1zm-4 1a1 1 0 011 1v7a1 1 0 01-2 0v-7a1 1 0 011-1z'/%3E%3C/svg%3E";
const book = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20 18h-4.422l1.905-1.143a.998.998 0 00.486-.857V9H20v9zM4 9h2.031v7c0 .35.182.673.481.854L8.396 18H4V9zm4.031-2.222l2.936 1.784v8.66l-2.936-1.785V6.778zm4.936 1.788l3.002-1.8v8.668l-3.002 1.8V8.566zM20 7h-2.031V5a1 1 0 00-1.514-.857l-4.484 2.69-4.42-2.687a1.007 1.007 0 00-1.01-.018c-.315.178-.51.511-.51.872v2H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2z'/%3E%3C/svg%3E";
const calendar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 2a1 1 0 011 1v1h3a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h3V3a1 1 0 112 0v1h6V3a1 1 0 011-1zm4 9H4v9h16v-9zM7 6H4v3h16V6h-3v1a1 1 0 01-2 0V6H9v1a1 1 0 11-2 0V6z'/%3E%3C/svg%3E";
const cart = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M8.5 18a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm12 0a2.5 2.5 0 11-.002 5.002A2.5 2.5 0 0120.5 18zm-12 2a.5.5 0 100 1 .5.5 0 000-1zm12 0a.5.5 0 100 1 .5.5 0 000-1zM5 2c.43 0 .805.263.943.646l.032.107.829 3.605h16.197c.594 0 1.048.494.995 1.047l-.018.112-1.61 7.363c-.344 1.243-1.506 2.105-2.785 2.12l-.175-.003-9.676-.001c-1.335.063-2.541-.741-2.967-1.984l-.053-.172-1.673-7.265-.01-.036-.012-.06-.82-3.559-3.199.001c-.512 0-.934-.37-.991-.848L0 2.96c0-.493.385-.9.882-.955L.998 2H5zm16.772 6.279H7.246l1.405 6.106c.108.39.46.664.908.69l9.898.002c.417.02.796-.221.938-.55l.032-.092 1.345-6.156z'/%3E%3C/svg%3E";
const chat = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M5.26 19.252l3.117-1.558a1 1 0 01.706-.072c.93.25 1.912.378 2.917.378 5.013 0 9-3.19 9-7s-3.987-7-9-7-9 3.19-9 7c0 1.736.823 3.386 2.308 4.671a1 1 0 01.335.898l-.383 2.683zm-.813 2.642A1 1 0 013.01 20.86l.579-4.051C1.937 15.208 1 13.17 1 11c0-5.026 4.968-9 11-9s11 3.974 11 9-4.968 9-11 9c-1.047 0-2.074-.12-3.06-.352l-4.493 2.246z'/%3E%3C/svg%3E";
const check = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke-linecap='round' stroke-width='2' d='M4 13l5 5M20 7L9 18'/%3E%3Cpath fill='%23000000' d='M19.293 6.293a1 1 0 011.414 1.414l-11 11a.995.995 0 01-.53.277l-.118.014h-.118a.996.996 0 01-.648-.29l-5-5a1 1 0 011.414-1.415L9 16.585z'/%3E%3C/g%3E%3C/svg%3E";
const close = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M7.05 5.636l4.95 4.95 4.95-4.95a1 1 0 111.414 1.414L13.414 12l4.95 4.95a1 1 0 11-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414l4.95-4.95-4.95-4.95A1 1 0 017.05 5.636z'/%3E%3C/svg%3E";
const copy = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M7.999 6L8 7.959 6 8v11h9v.5c0 .828-.657 1.5-1.467 1.5H5.467C4.657 21 4 20.328 4 19.5v-12C4 6.672 4.657 6 5.467 6h2.532zm8.317-3c.386 0 .758.156 1.032.435l2.218 2.25c.278.281.434.664.434 1.064V16.5c0 .828-.657 1.5-1.467 1.5h-8.066C9.657 18 9 17.328 9 16.5V6.005L8 6h1V4.5c0-.828.657-1.5 1.467-1.5h5.849zm-2.317 2H11v1h.316c.08 0 .159.007.237.02L11 6.016V16h7V9h-2.286A1.715 1.715 0 0114 7.286L13.999 5zm2.186 0h-.471v2.086c0 .11.09.2.2.2L18 7.285v-.35l-.988-1.088L16.185 5z'/%3E%3C/svg%3E";
const download = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M3 22a1 1 0 01-1-1v-4a1 1 0 112 0v2.987h16V17a1 1 0 112 0v4a1 1 0 01-1 1zm2.3-9.708a1 1 0 011.412-1.416l4.291 4.291V3.001a1 1 0 012 0v12.17l4.291-4.295a1.001 1.001 0 011.416 1.416L12 19z'/%3E%3C/svg%3E";
const ellipsis = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 10a2 2 0 110 4 2 2 0 010-4zm-6 0a2 2 0 110 4 2 2 0 010-4zm12 0a2 2 0 110 4 2 2 0 010-4z'/%3E%3C/svg%3E";
const email = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M4 20a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4zm0-2h16V7.143l-7.394 5.653a.998.998 0 01-1.215 0L3.998 7.142 4 18zm8-7.257L18.2 6H5.8l6.2 4.743z'/%3E%3C/svg%3E";
const equal = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' d='M-1-1h582v402H-1z'/%3E%3Cg%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M18.222 7c.43 0 .778.448.778 1s-.348 1-.778 1H5.778C5.348 9 5 8.552 5 8s.348-1 .778-1h12.444zm0 8c.43 0 .778.448.778 1s-.348 1-.778 1H5.778C5.348 17 5 16.552 5 16s.348-1 .778-1h12.444z'/%3E%3C/g%3E%3C/svg%3E";
const error = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M13.014 3.248a2 2 0 01.71.71l8.251 14.028A2 2 0 0120.252 21H3.748a2 2 0 01-1.723-3.014l8.251-14.028a2 2 0 012.738-.71zM12 4.972L3.748 19h16.504L12 4.972zm.068 12.025h.017a1.006 1.006 0 01-.052.002L12 17l.068-.003zM12 17a1.018 1.018 0 01-.367-.07l-.056-.024a1.016 1.016 0 01-.198-.122l-.088-.079-.05-.056.048.055-.05-.055-.026-.032-.022-.029a1.045 1.045 0 01-.154-.318.959.959 0 01-.025-.116l-.008-.069L11 16a1.018 1.018 0 01.037-.27l.012-.04a.96.96 0 01.067-.158l.034-.059a1.05 1.05 0 01.063-.09l.078-.088.064-.059.011-.01.001-.001.001-.001.05-.038a1.042 1.042 0 01.32-.151.933.933 0 01.112-.024l.067-.008L12 15h.02a1.006 1.006 0 01.183.02l.058.014a1.069 1.069 0 01.106.035l.056.025a1.016 1.016 0 01.194.119l.09.08a1.008 1.008 0 01.219.329l.025.07a1.11 1.11 0 01.037.154l.008.068.002.069v-.043l.001.028v.066l-.003.051a.985.985 0 01-.033.185l-.012.04a.96.96 0 01-.164.307l-.08.09a1.008 1.008 0 01-.447.259l-.056.013a1.099 1.099 0 01-.056.01l-.066.007h-.002l-.005.001h-.007l.011-.001L12 17zm-.634-1.774l-.01.01-.063.057.06-.056.013-.011zm.553-.224l-.002.001-.006.001.008-.002zM12 15l-.069.002h.015L11.98 15H12zm0-6a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm-.622 6.217l-.01.007v.001l.01-.008z'/%3E%3C/svg%3E";
const file = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M14.146 3.5h.26c.462 0 .905.186 1.227.517l2.38 2.44c.312.32.487.749.487 1.196V18.8c0 .939-.776 1.7-1.733 1.7H7.233c-.957 0-1.733-.761-1.733-1.7V5.2c0-.939.776-1.7 1.733-1.7h6.913zm-1.647 1.699L7.233 5.2v13.6h9.534l-.001-9.3h-2.552A1.714 1.714 0 0112.5 7.786l-.001-2.587zm1.811.015a.096.096 0 00-.096.096v2.276c0 .11.09.2.2.2h2.305a.07.07 0 00.05-.022l-.002-.12a.163.163 0 00-.028-.038l-1.578-1.618-.749-.75a.228.228 0 00-.102-.024z'/%3E%3C/svg%3E";
const filter = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E%3Cdefs%3E%3Cpath id='a' d='M3.5 3l-.087.004a1.122 1.122 0 00-.164.027.999.999 0 00-.956 1.676l6.708 6.708V20l.002.093a1 1 0 001.719.78l4.001-4.181.013-.016a.65.65 0 00.059-.07l.023-.031c.015-.021.029-.043.043-.066a1.018 1.018 0 00.054-.103l.016-.04a.684.684 0 00.025-.071.467.467 0 00.011-.04l.015-.063.009-.06c.003-.018.004-.04.006-.06.002-.016.002-.032.003-.05v-4.607l6.708-6.707.082-.094a1 1 0 10-1.038-1.581A1 1 0 0020.5 3h-17 17-17zm15.084 2l-5.291 5.293a1.131 1.131 0 00-.083.094l-.013.017c-.018.024-.035.05-.051.076l-.021.035-.031.06-.023.053-.021.06c-.006.015-.009.03-.014.046l-.016.065-.009.052a.993.993 0 00-.007.06l-.004.07v4.617l-2 2.09V11l-.001-.032-.001-.028v-.015l-.009-.074-.009-.052-.016-.065a.592.592 0 00-.014-.045l-.021-.06-.022-.052a.845.845 0 00-.032-.06l-.021-.037a.821.821 0 00-.051-.075l-.028-.035-.068-.077L5.415 5h13.169z'/%3E%3C/defs%3E%3Cuse fill='%23000000' fill-rule='evenodd' xlink:href='%23a'/%3E%3C/svg%3E";
const folder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M4 6v12h16V8H10a2 2 0 01-1.789-1.106L7.764 6H4zm3.764-2a2 2 0 011.789 1.106L10 6h10a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h3.764z'/%3E%3C/svg%3E";
const gear = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12.558 2a3 3 0 012.847 2.051l.282.848c.211.11.418.23.619.357l.875-.179a3 3 0 013.2 1.44l.558.967a3 3 0 01-.353 3.49l-.594.67a8.12 8.12 0 010 .712l.594.67a3 3 0 01.353 3.49l-.558.968a3 3 0 01-3.2 1.439l-.875-.18a7.949 7.949 0 01-.619.358l-.282.848A3 3 0 0112.558 22h-1.116a3 3 0 01-2.847-2.051l-.282-.848a7.993 7.993 0 01-.619-.357l-.875.179a3 3 0 01-3.2-1.44l-.558-.967a3 3 0 01.353-3.49l.594-.67a8.12 8.12 0 010-.712l-.594-.67a3 3 0 01-.353-3.49l.558-.968a3 3 0 013.2-1.439l.875.18c.201-.129.408-.248.619-.358l.282-.848A3 3 0 0111.442 2h1.116zm0 2h-1.116a1 1 0 00-.95.684L9.94 6.346l-.4.18a6.06 6.06 0 00-1.047.605l-.356.257-1.718-.351a1 1 0 00-1.067.48l-.558.967a1 1 0 00.117 1.163l1.164 1.312-.044.435a6.083 6.083 0 000 1.212l.044.435-1.164 1.312a1 1 0 00-.117 1.163l.558.968a1 1 0 001.067.48l1.718-.352.356.257c.328.236.679.44 1.047.605l.4.18.554 1.662a1 1 0 00.949.684h1.116a1 1 0 00.95-.684l.553-1.662.4-.18a6.06 6.06 0 001.047-.605l.356-.257 1.718.351a1 1 0 001.067-.48l.558-.967a1 1 0 00-.117-1.163l-1.164-1.312.044-.435a6.083 6.083 0 000-1.212l-.044-.435 1.164-1.312a1 1 0 00.117-1.163l-.558-.968a1 1 0 00-1.067-.48l-1.718.352-.356-.257a5.993 5.993 0 00-1.047-.605l-.4-.18-.554-1.662a1 1 0 00-.95-.684zM12 10a2 2 0 110 4 2 2 0 010-4z'/%3E%3C/svg%3E";
const guides = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20 18h-4.422l1.905-1.143a.998.998 0 00.486-.857V9H20v9zM4 9h2.031v7c0 .35.182.673.481.854L8.396 18H4V9zm4.031-2.222l2.936 1.784v8.66l-2.936-1.785V6.778zm4.936 1.788l3.002-1.8v8.668l-3.002 1.8V8.566zM20 7h-2.031V5a1 1 0 00-1.514-.857l-4.484 2.69-4.42-2.687a1.007 1.007 0 00-1.01-.018c-.315.178-.51.511-.51.872v2H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2z'/%3E%3C/svg%3E";
const hamburger = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M18 16a1 1 0 010 2H6a1 1 0 010-2h12zm0-5a1 1 0 010 2H6a1 1 0 010-2h12zm0-5a1 1 0 010 2H6a1 1 0 110-2h12z'/%3E%3C/svg%3E";
const help = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm0 13.1a1 1 0 110 2 1 1 0 010-2zm0-10.2c1.796 0 3.5 1.704 3.5 3.5 0 1.434-1.087 2.81-2.44 3.306l-.06.02v1.424c0 .41-.386.92-.883.992L12 15.15c-.513 0-.936-.481-.993-.904L11 14.15v-2c0-.29.194-.631.483-.83a.868.868 0 01.517-.17c.83 0 1.75-.92 1.75-1.75S12.83 7.65 12 7.65s-1.75.92-1.75 1.75a.875.875 0 11-1.75 0c0-1.796 1.704-3.5 3.5-3.5zm1 6.826l-.118.04.118-.04z'/%3E%3C/svg%3E";
const home = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M4 23c-1.333 0-2-.667-2-2V10l10-9 10 9v11c0 1.333-.667 2-2 2H4zm8-19.31l-8 7.2V21h4v-6a2 2 0 012-2h4a2 2 0 012 2v6h4V10.89l-8-7.2zM14 15h-4v6h4v-6z'/%3E%3C/svg%3E";
const indeterminate = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20 11a1 1 0 010 2H4a1 1 0 010-2h16z'/%3E%3C/svg%3E";
const info = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm0 8a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E";
const lightbulb = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M14 20a1 1 0 010 2h-4a1 1 0 010-2h4zm2.95-16.95c2.72 2.72 2.571 6.843-.243 9.657-.278.278-.482.777-.596 1.457-.09.54-.111 1.014-.111 1.836 0 1.219-.781 2-2 2h-4c-1.219 0-2-.781-2-2 0-1.715-.174-2.76-.707-3.293-2.76-2.76-2.939-6.96-.243-9.657a7 7 0 019.9 0zM8.464 4.464c-1.886 1.887-1.762 4.824.243 6.829C9.774 12.36 10 13.715 10 16h4c0-.928.025-1.485.139-2.164.175-1.054.528-1.918 1.154-2.543 2.055-2.055 2.158-4.914.243-6.829a5 5 0 00-7.072 0z'/%3E%3C/svg%3E";
const list = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M18 16a1 1 0 010 2h-8a1 1 0 010-2h8zM6 16a1 1 0 110 2 1 1 0 010-2zm12-5a1 1 0 010 2h-8a1 1 0 010-2h8zM6 11a1 1 0 110 2 1 1 0 010-2zm12-5a1 1 0 010 2h-8a1 1 0 110-2h8zM6 6a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E";
const location = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 2c3.866 0 7 2.985 7 6.667 0 4.222-2.333 8.666-7 13.333-4.667-4.667-7-9.111-7-13.333C5 4.985 8.134 2 12 2zm0 2C9.217 4 7 6.112 7 8.667c0 3.195 1.633 6.676 5 10.429 3.367-3.753 5-7.234 5-10.43C17 6.113 14.783 4 12 4zm0 3a2 2 0 110 4 2 2 0 010-4z'/%3E%3C/svg%3E";
const lock = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M4 24a2 2 0 01-2-2V12a2 2 0 012-2h1V7a7.008 7.008 0 017-7 7.008 7.008 0 017 7v3h1a2 2 0 012 2v10a2 2 0 01-2 2H4zm0-2h16V12H4v10zm13-12V7a5.007 5.007 0 00-5-5 5.007 5.007 0 00-5 5v3h10zm-6 9v-1c0-.084.01-.168.031-.25a2.001 2.001 0 111.938 0c.021.082.032.166.032.25v1A1 1 0 0111 19z'/%3E%3C/svg%3E";
const minus = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20 11a1 1 0 010 2H4a1 1 0 010-2h16z'/%3E%3C/svg%3E";
const ok = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke-linecap='round' stroke-width='2' d='M4 13l5 5M20 7L9 18'/%3E%3Cpath fill='%23000000' d='M19.293 6.293a1 1 0 011.414 1.414l-11 11a.995.995 0 01-.53.277l-.118.014h-.118a.996.996 0 01-.648-.29l-5-5a1 1 0 011.414-1.415L9 16.585z'/%3E%3C/g%3E%3C/svg%3E";
const ovh = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M17.567 5L9.332 19H2.71C-.426 15.245-.882 9.991 1.56 5.772l4.307 7.302L10.602 5h6.965zm4.872.755c2.443 4.22 1.987 9.473-1.149 13.228h-6.622l2.041-3.458h-2.693l3.14-5.388h2.727z'/%3E%3C/svg%3E";
const pen = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M22.223 2.901l-.877-.878a3.505 3.505 0 00-4.95 0L3.016 15.404a.88.88 0 00-.223.385l-1.76 6.352a.874.874 0 001.077 1.076l6.352-1.76a.855.855 0 00.385-.225L22.224 7.851a3.512 3.512 0 00-.001-4.95zM6.611 20.154l-3.48.965.962-3.483 2.518 2.518zM19.044 8.563L8.269 19.335l-3.358-3.356L15.688 5.205l3.356 3.358zm-.174-5.814c.464-.001.909.183 1.236.512l.88.88a1.756 1.756 0 010 2.476l-.711.711-3.355-3.355.712-.712c.328-.33.774-.514 1.238-.512z'/%3E%3C/svg%3E";
const phone = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M14.616 12.84c.496-.497 1.141-.743 1.86-.743.756 0 1.472.315 2.083.884l2.556 2.56c.486.486.789 1.136.88 1.885.045.756-.224 1.514-.74 2.03l-1.432 1.435c-.147.147-.324.28-.536.407-.786.466-1.695.702-2.7.702-2.883 0-6.51-1.916-9.613-4.993C2.81 12.806.878 7.688 2.67 4.755c.111-.24.27-.45.472-.617L4.568 2.71A2.684 2.684 0 016.393 2c.756 0 1.473.315 2.083.884l2.556 2.56c1.111 1.112 1.193 2.879.112 3.916l-1.023 1.025a21.935 21.935 0 001.613 1.865c.573.574 1.191 1.11 1.858 1.616l1.024-1.026zM4.461 5.64l-.062.12c-1.22 1.91.377 6.19 3.99 9.833C11.145 18.327 14.313 20 16.588 20c.654 0 1.21-.145 1.675-.42a.843.843 0 00.145-.102l1.432-1.435c.1-.1.17-.298.165-.435a1.133 1.133 0 00-.305-.655l-2.53-2.533c-.232-.217-.474-.323-.695-.323-.206 0-.338.05-.444.156l-1.629 1.632a1 1 0 01-1.28.113 20.614 20.614 0 01-2.815-2.347 22.9 22.9 0 01-2.32-2.795A1 1 0 018.1 9.578l1.644-1.646c.249-.239.226-.721-.127-1.075l-2.53-2.534C6.856 4.107 6.614 4 6.394 4a.666.666 0 00-.444.157L4.516 5.59l-.055.048z'/%3E%3C/svg%3E";
const plus = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 3a1 1 0 011 1v7h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 011-1z'/%3E%3C/svg%3E";
const printer = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M6.367 24.004a1 1 0 01-1-1v-5.247H3.014a1 1 0 01-1-1v-10a1 1 0 011-1h2.5L5.5 2.997a1 1 0 011-1h11a1 1 0 011 1l.013 2.76h2.5a1 1 0 011 1v10a1 1 0 01-1 1h-2.645V23a1 1 0 01-1 1l-11.001.004zm1-2h9v-6.247h-9v6.247zm10-8.244a1 1 0 011 1v1h1.645v-8h-16v8h1.354v-1a1 1 0 011-1h11.001zm-9.855-8h9L16.499 4h-9l.013 1.76zM5.499 9.999a1 1 0 112 0 1 1 0 01-2 0z'/%3E%3C/svg%3E";
const promotion = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3E%3Crect id='Zone' fill='%23000000' fill-rule='evenodd' /%3E%3E%3Cpath id='Icon' d='M-208.876-164.276l-9.92-9.921a.977.977,0,0,1,0-1.383l10.122-10.122a.959.959,0,0,1,.73-.285l9.906.389a.977.977,0,0,1,.939.976l.015,9.531a.977.977,0,0,1-.286.693l-10.123,10.123a.975.975,0,0,1-.691.285A.976.976,0,0,1-208.876-164.276Zm-7.846-10.612,8.538,8.537,9.145-9.145-.014-8.186-8.54-.335Zm8.079,4.46a1.5,1.5,0,0,1,0-2.122,1.492,1.492,0,0,1,1.059-.439,1.5,1.5,0,0,1,1.061.439,1.5,1.5,0,0,1,0,2.122,1.5,1.5,0,0,1-1.061.439A1.5,1.5,0,0,1-208.643-170.428Zm-4.38-2.828a.88.88,0,0,1,.508-1.139l9.23-3.536a.887.887,0,0,1,1.143.507.879.879,0,0,1-.508,1.138l-9.23,3.535a.9.9,0,0,1-.318.06A.883.883,0,0,1-213.023-173.255Zm4.38-5.173a1.5,1.5,0,0,1,0-2.121,1.494,1.494,0,0,1,1.059-.439,1.5,1.5,0,0,1,1.061.439,1.5,1.5,0,0,1,0,2.121,1.5,1.5,0,0,1-1.061.44A1.5,1.5,0,0,1-208.643-178.429Z' transform='translate(220.082 186.989)' fill='currentColor' /%3E%3E%3C/svg%3E";
const refresh = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M11 3a9 9 0 019 9v.585l1.293-1.292a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414L19 16.414l-3.707-3.707a1 1 0 011.414-1.414L18 12.585V12a7 7 0 00-6.76-6.996L11 5a7 7 0 100 14 1 1 0 010 2 9 9 0 010-18z'/%3E%3C/svg%3E";
const remove = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20 11a1 1 0 010 2H4a1 1 0 010-2h16z'/%3E%3C/svg%3E";
const search = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M10 3a7 7 0 015.606 11.192l5.101 5.1a1 1 0 01-1.414 1.415l-5.1-5.1A7 7 0 1110 3zm0 2a5 5 0 100 10 5 5 0 000-10z'/%3E%3C/svg%3E";
const settings = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12.558 2a3 3 0 012.847 2.051l.282.848c.211.11.418.23.619.357l.875-.179a3 3 0 013.2 1.44l.558.967a3 3 0 01-.353 3.49l-.594.67a8.12 8.12 0 010 .712l.594.67a3 3 0 01.353 3.49l-.558.968a3 3 0 01-3.2 1.439l-.875-.18a7.949 7.949 0 01-.619.358l-.282.848A3 3 0 0112.558 22h-1.116a3 3 0 01-2.847-2.051l-.282-.848a7.993 7.993 0 01-.619-.357l-.875.179a3 3 0 01-3.2-1.44l-.558-.967a3 3 0 01.353-3.49l.594-.67a8.12 8.12 0 010-.712l-.594-.67a3 3 0 01-.353-3.49l.558-.968a3 3 0 013.2-1.439l.875.18c.201-.129.408-.248.619-.358l.282-.848A3 3 0 0111.442 2h1.116zm0 2h-1.116a1 1 0 00-.95.684L9.94 6.346l-.4.18a6.06 6.06 0 00-1.047.605l-.356.257-1.718-.351a1 1 0 00-1.067.48l-.558.967a1 1 0 00.117 1.163l1.164 1.312-.044.435a6.083 6.083 0 000 1.212l.044.435-1.164 1.312a1 1 0 00-.117 1.163l.558.968a1 1 0 001.067.48l1.718-.352.356.257c.328.236.679.44 1.047.605l.4.18.554 1.662a1 1 0 00.949.684h1.116a1 1 0 00.95-.684l.553-1.662.4-.18a6.06 6.06 0 001.047-.605l.356-.257 1.718.351a1 1 0 001.067-.48l.558-.967a1 1 0 00-.117-1.163l-1.164-1.312.044-.435a6.083 6.083 0 000-1.212l-.044-.435 1.164-1.312a1 1 0 00.117-1.163l-.558-.968a1 1 0 00-1.067-.48l-1.718.352-.356-.257a5.993 5.993 0 00-1.047-.605l-.4-.18-.554-1.662a1 1 0 00-.95-.684zM12 10a2 2 0 110 4 2 2 0 010-4z'/%3E%3C/svg%3E";
const sort = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.183 16a1.166 1.166 0 01.825 1.992l-4.183 4.183a1.166 1.166 0 01-1.65 0l-4.183-4.183A1.166 1.166 0 017.817 16zM11.175 5.825a1.166 1.166 0 011.65 0l4.183 4.183A1.166 1.166 0 0116.183 12H7.817a1.166 1.166 0 01-.825-1.992z'/%3E%3C/svg%3E";
const success = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke-linecap='round' stroke-width='2' d='M4 13l5 5M20 7L9 18'/%3E%3Cpath fill='%23000000' d='M19.293 6.293a1 1 0 011.414 1.414l-11 11a.995.995 0 01-.53.277l-.118.014h-.118a.996.996 0 01-.648-.29l-5-5a1 1 0 011.414-1.415L9 16.585z'/%3E%3C/g%3E%3C/svg%3E";
const time = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm0 1a1 1 0 011 1v6.586l3.707 3.707a1 1 0 01-1.414 1.414L11 12.414V5a1 1 0 011-1z'/%3E%3C/svg%3E";
const transfer = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M8.246 20.703l-4.245-4.2 4.243-4.2a1.027 1.027 0 011.445 0c.395.393.41 1.027.034 1.438L7.98 15.468h7.995c.565.008 1.02.463 1.031 1.027v.013a1.023 1.023 0 01-1.036 1.027H7.982l1.716 1.7c.398.394.41 1.034.028 1.443a1.09 1.09 0 01-.761.322 1.009 1.009 0 01-.719-.297zm6.066-8a1.035 1.035 0 01-.029-1.444l1.742-1.727H8.03c-.568 0-1.029-.46-1.031-1.028V8.49a1.017 1.017 0 011.037-1.025h7.987l-1.716-1.7a1.027 1.027 0 01-.306-.713c-.007-.27.093-.532.279-.729a1.039 1.039 0 011.472-.031l4.245 4.2-4.243 4.2a1.027 1.027 0 01-1.442.011z'/%3E%3C/svg%3E";
const trash = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M18 9a1 1 0 011 1v10c0 1.219-.781 2-2 2H7c-1.219 0-2-.781-2-2V10a1 1 0 112 0v10h10V10a1 1 0 011-1zm-4-5a1 1 0 011 1h4a1 1 0 010 2H5a1 1 0 110-2h4a1 1 0 011-1h4z'/%3E%3C/svg%3E";
const truck = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20.622 19A2.499 2.499 0 1116 20.323c0-.633.235-1.21.623-1.651a2.978 2.978 0 01-.626-.434A2.989 2.989 0 0114 19H7.622A2.498 2.498 0 015.5 22.823 2.5 2.5 0 013.38 19h-.63A3.013 3.013 0 010 16V6a3 3 0 013-3h11c1.309 0 2.422.838 2.832 2.007l.019-.002L17 5h1.176c.527 0 1.033.21 1.405.583l3.832 3.83c.375.377.586.885.586 1.415V17A2 2 0 0122 19h-.54zm-2.122.823a.5.5 0 10.002 1.002.5.5 0 00-.002-1.002zm-13 0a.5.5 0 10.002.998.5.5 0 00-.002-.998zM17 16a1 1 0 001 1h4v-6h-3a1 1 0 01-.117-1.993L19 9h1.171l-2-2h-1.17zM14 5H3a1 1 0 00-1 1v10a1 1 0 001 1h11a1 1 0 001-1V6a1 1 0 00-1-1z'/%3E%3C/svg%3E";
const user = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 6c-2.06 0-3 1.176-3 4 0 1.656.335 2.744.918 3.568.017.024 1.176 1.276 1.267 1.823.085.505-.108.946-.478 1.316-.684.684-1.836 1.312-3.48 1.922A8.94 8.94 0 0012 21a8.958 8.958 0 004.776-1.37c-1.647-.611-2.799-1.239-3.483-1.923-.37-.37-.563-.81-.479-1.316.091-.547 1.25-1.8 1.267-1.823.584-.824.919-1.912.919-3.568 0-2.736-.883-3.925-2.81-3.997L12 7zm0-4a9 9 0 00-6.554 15.168.955.955 0 01.238-.117c1.56-.52 2.665-1.03 3.295-1.493-.375-.406-.472-.522-.693-.834C7.459 14.556 7 13.064 7 11c0-3.843 1.726-6 5-6l.231.004C15.355 5.104 17 7.249 17 11c0 2.064-.46 3.556-1.286 4.724-.221.312-.318.428-.693.834.63.463 1.735.973 3.295 1.493.086.03.166.068.238.116A9 9 0 0012 3z'/%3E%3C/svg%3E";
const warning = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M13.014 3.248a2 2 0 01.71.71l8.251 14.028A2 2 0 0120.252 21H3.748a2 2 0 01-1.723-3.014l8.251-14.028a2 2 0 012.738-.71zM12 4.972L3.748 19h16.504L12 4.972zm.068 12.025h.017a1.006 1.006 0 01-.052.002L12 17l.068-.003zM12 17a1.018 1.018 0 01-.367-.07l-.056-.024a1.016 1.016 0 01-.198-.122l-.088-.079-.05-.056.048.055-.05-.055-.026-.032-.022-.029a1.045 1.045 0 01-.154-.318.959.959 0 01-.025-.116l-.008-.069L11 16a1.018 1.018 0 01.037-.27l.012-.04a.96.96 0 01.067-.158l.034-.059a1.05 1.05 0 01.063-.09l.078-.088.064-.059.011-.01.001-.001.001-.001.05-.038a1.042 1.042 0 01.32-.151.933.933 0 01.112-.024l.067-.008L12 15h.02a1.006 1.006 0 01.183.02l.058.014a1.069 1.069 0 01.106.035l.056.025a1.016 1.016 0 01.194.119l.09.08a1.008 1.008 0 01.219.329l.025.07a1.11 1.11 0 01.037.154l.008.068.002.069v-.043l.001.028v.066l-.003.051a.985.985 0 01-.033.185l-.012.04a.96.96 0 01-.164.307l-.08.09a1.008 1.008 0 01-.447.259l-.056.013a1.099 1.099 0 01-.056.01l-.066.007h-.002l-.005.001h-.007l.011-.001L12 17zm-.634-1.774l-.01.01-.063.057.06-.056.013-.011zm.553-.224l-.002.001-.006.001.008-.002zM12 15l-.069.002h.015L11.98 15H12zm0-6a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm-.622 6.217l-.01.007v.001l.01-.008z'/%3E%3C/svg%3E";
const icons = {
	"anti-ddos-protection-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.078 0a.55.55 0 01.492.287 10.273 10.273 0 001.99 2.68 11.866 11.866 0 004.073 2.57 14.8 14.8 0 005.227.963.55.55 0 01.483.273c.258.464.487.942.687 1.431 1.275 3.122 2.959 8.399 2.958 10.15.121 2.179-.673 4.317-2.229 5.984-.563.566-2.73 1.85-6.168 3.724l-.579.314a361.193 361.193 0 01-6.165 3.261l-.58.3a.589.589 0 01-.53 0l-.582-.3-1.534-.798c-.6-.314-1.2-.63-1.795-.943l-.006-.004a314.073 314.073 0 01-2.852-1.523l-.566-.307c-3.443-1.872-5.622-3.156-6.214-3.738C.658 22.672-.122 20.54.015 18.4c0-1.819 1.728-7.273 2.961-10.242.201-.474.431-.938.688-1.39a.552.552 0 01.48-.268 14.831 14.831 0 005.228-.962 11.882 11.882 0 004.062-2.562c.819-.793 1.494-1.7 2-2.69A.552.552 0 0115.926 0h.152zm-.076 1.452c-.492.8-1.09 1.544-1.78 2.212a12.968 12.968 0 01-4.435 2.798 16.011 16.011 0 01-5.306 1.034c-.18.335-.344.677-.491 1.022-1.182 2.845-2.888 8.232-2.89 9.912-.12 1.91.565 3.79 1.897 5.229.44.432 2.426 1.611 5.416 3.248-2.633-3.449-2.99-8.123-.537-11.97 1.222-2.004 3.269-3.47 5.68-4.07 2.41-.6 4.98-.281 7.141.888 3.594 2.027 4.775 6.32 2.668 9.671-.81 1.322-2.163 2.29-3.755 2.683a6.611 6.611 0 01-4.718-.591c-2.403-1.35-3.19-4.22-1.772-6.46 1.152-1.807 3.677-2.415 5.653-1.354 1.629.915 2.166 2.859 1.212 4.373a2.82 2.82 0 01-1.736 1.238 3.057 3.057 0 01-2.181-.276c-1.14-.634-1.514-1.994-.844-3.044.265-.432.707-.748 1.228-.877s1.077-.06 1.55.197c.816.461 1.082 1.438.604 2.19-.195.32-.522.555-.907.65a1.593 1.593 0 01-1.134-.141 1.28 1.28 0 01-.448-.395l-.075-.122.046.114c.106.23.289.431.537.57.405.22.888.28 1.342.168.454-.112.84-.387 1.074-.769.661-1.048.29-2.39-.825-3.017-1.45-.779-3.31-.33-4.158 1-1.12 1.768-.497 4.035 1.393 5.097a5.438 5.438 0 003.877.484c1.31-.325 2.424-1.12 3.093-2.213 1.816-2.888.799-6.58-2.283-8.319a8.827 8.827 0 00-6.3-.78c-2.128.53-3.935 1.825-5.02 3.602-2.986 4.684-1.404 10.703 3.58 13.612.582.308 1.17.617 1.76.924.553.29 1.067.557 1.528.795l.315.163.312-.162a371.83 371.83 0 006.147-3.251l.576-.313c3.278-1.787 5.469-3.084 5.91-3.527 1.362-1.46 2.062-3.346 1.955-5.294 0-1.608-1.665-6.828-2.889-9.824-.147-.36-.312-.714-.493-1.06a15.983 15.983 0 01-5.302-1.034 12.99 12.99 0 01-4.448-2.808 11.393 11.393 0 01-1.768-2.202z'/%3E%3C/svg%3E",
	"app-gear-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.5 4A1.5 1.5 0 0132 5.5v21a1.5 1.5 0 01-1.5 1.5h-29A1.5 1.5 0 010 26.5v-21A1.5 1.5 0 011.5 4h29zm.5 8H1v14.5a.5.5 0 00.5.5l7.572.001A7.956 7.956 0 018.252 25H6.65a.502.502 0 01-.493-.414 9.232 9.232 0 010-3.172A.5.5 0 016.65 21h1.604a7.948 7.948 0 01.86-2.059l-1.148-1.147a.5.5 0 01-.055-.641 9.148 9.148 0 012.242-2.242.499.499 0 01.64.055l1.15 1.15A7.94 7.94 0 0114 15.262V13.66c0-.243.175-.45.414-.493a9.232 9.232 0 013.172 0 .5.5 0 01.414.493v1.602a7.992 7.992 0 012.058.853l1.148-1.149a.5.5 0 01.641-.055 9.183 9.183 0 012.242 2.242.5.5 0 01-.055.64l-1.15 1.15c.38.642.667 1.335.853 2.057h1.603c.243 0 .45.175.493.414a9.232 9.232 0 010 3.172.5.5 0 01-.493.414h-1.602a7.993 7.993 0 01-.82 2.001L30.5 27a.5.5 0 00.5-.5V12zm-16 2.091v1.569a.5.5 0 01-.4.49 6.94 6.94 0 00-2.454 1.017.501.501 0 01-.63-.063l-1.125-1.126a8.144 8.144 0 00-1.413 1.413l1.126 1.125a.502.502 0 01.062.632 6.946 6.946 0 00-1.026 2.453.5.5 0 01-.49.399H7.081a8.26 8.26 0 000 2H8.65a.5.5 0 01.49.4 6.94 6.94 0 001.017 2.454.53.53 0 01.066.146h11.544c.014-.05.035-.1.066-.146A6.959 6.959 0 0022.85 24.4a.5.5 0 01.49-.4h1.569a8.26 8.26 0 000-2H23.34a.5.5 0 01-.49-.4 6.977 6.977 0 00-1.017-2.454.501.501 0 01.063-.63l1.126-1.125a8.286 8.286 0 00-1.413-1.413l-1.125 1.126a.501.501 0 01-.63.063A6.94 6.94 0 0017.4 16.15a.5.5 0 01-.4-.49v-1.569a8.26 8.26 0 00-2 0zM16 20a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 10-.001 3.999A2 2 0 0016 21zM30.5 5h-29a.5.5 0 00-.5.5V11h30V5.5a.5.5 0 00-.5-.5zM4 7a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E",
	"app-replication-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M23.5 1A1.5 1.5 0 0125 2.5V7h1.5A1.5 1.5 0 0128 8.5V12h1.5a1.5 1.5 0 011.5 1.5v16a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 017 29.5V26H5.5A1.5 1.5 0 014 24.5V20H2.5A1.5 1.5 0 011 18.5v-16A1.5 1.5 0 012.5 1h21zM30 18H8v11.5a.5.5 0 00.5.5h21a.5.5 0 00.5-.5V18zM26.5 8h-21a.5.5 0 00-.5.5v16a.5.5 0 00.5.5H7V13.5A1.5 1.5 0 018.5 12H27V8.5a.5.5 0 00-.5-.5zm-3-6h-21a.5.5 0 00-.5.5v16a.5.5 0 00.5.5H4V8.5A1.5 1.5 0 015.5 7H24V2.5a.5.5 0 00-.5-.5zm6 11h-21a.5.5 0 00-.5.5V17h22v-3.5a.5.5 0 00-.5-.5zM11 14a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E",
	"app-script-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.943 4c.815 0 1.47.675 1.47 1.5v5.808a.495.495 0 010 .384V26.5c0 .825-.655 1.5-1.47 1.5H1.503c-.815 0-1.47-.675-1.47-1.5L.032 11.711a.494.494 0 010-.422L.033 5.5c0-.825.655-1.5 1.47-1.5h29.44zm.469 8H1.032l.001 14.5c0 .28.214.5.47.5h29.44c.256 0 .47-.22.47-.5L31.412 12zm-17.363 3.15a.5.5 0 01-.007.707L10.333 19.5l3.71 3.643a.5.5 0 01-.701.714l-4.073-4a.5.5 0 010-.714l4.073-4a.5.5 0 01.707.007zm5.055-.007l4.073 4a.5.5 0 010 .714l-4.073 4a.5.5 0 01-.7-.714l3.71-3.643-3.71-3.643a.5.5 0 01.7-.714zM30.943 5H1.503c-.256 0-.47.22-.47.5V11h30.379V5.5c0-.28-.213-.5-.469-.5zM12.165 6.955c.56 0 1.013.468 1.013 1.045s-.454 1.045-1.013 1.045c-.56 0-1.013-.468-1.013-1.045s.453-1.045 1.013-1.045zm-4.063 0c.56 0 1.013.468 1.013 1.045s-.454 1.045-1.013 1.045c-.56 0-1.014-.468-1.014-1.045s.454-1.045 1.014-1.045zM4.082 7c.536 0 .97.448.97 1s-.434 1-.97 1c-.535 0-.97-.448-.97-1s.435-1 .97-1z'/%3E%3C/svg%3E",
	"app-world-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.5 4A1.5 1.5 0 0132 5.5v21a1.5 1.5 0 01-1.5 1.5l-29 .02a1.5 1.5 0 01-1.5-1.5v-21a1.5 1.5 0 011.5-1.5zm.5 8.02H1v14.5a.5.5 0 00.5.5l29-.02a.5.5 0 00.5-.5V12.02zm-15 2a6 6 0 110 12 6 6 0 010-12zm1.82 8h-3.64c.332 1.777 1.079 3 1.82 3 .742 0 1.488-1.223 1.82-3zm-4.659 0h-1.745a5.01 5.01 0 002.618 2.599c-.4-.684-.702-1.58-.873-2.6zm7.423 0H18.84c-.171 1.019-.473 1.915-.873 2.599a5.009 5.009 0 002.618-2.6zM11.1 19.019a4.995 4.995 0 000 2h1.939a12.584 12.584 0 010-2zm6.856 0h-3.912a11.186 11.186 0 00-.001 2h3.913a11.125 11.125 0 000-2zm2.944 0h-1.94a12.584 12.584 0 010 2h1.94a5.07 5.07 0 000-2zm-6.865-3.598l-.075.033a5.015 5.015 0 00-2.544 2.566l1.745-.001c.171-1.018.473-1.914.873-2.598zm3.93 0l.012.02c.395.683.692 1.57.861 2.578h1.745a5.01 5.01 0 00-2.617-2.598zM16 15.02c-.74 0-1.487 1.223-1.819 2.999h3.64c-.319-1.702-1.017-2.895-1.727-2.992zM30.5 5l-29 .02a.5.5 0 00-.5.5v5.5h30V5.5a.5.5 0 00-.5-.5zM12 7.02a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E",
	"application-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M29.45 1a1.5 1.5 0 011.5 1.5l.002 5.787a.504.504 0 010 .426L30.95 21.5a1.5 1.5 0 01-1.5 1.5H17v4.5a.5.5 0 01-.806.395l-2.284-1.77L12 30.693a.5.5 0 01-.652.269l-3.14-1.3a.5.5 0 01-.27-.655l1.902-4.553-2.625-.287a.5.5 0 01-.298-.852L7.234 23H2.45a1.5 1.5 0 01-1.5-1.5v-19A1.5 1.5 0 012.45 1h27zM16 15.702l-7.635 7.585 2.25.246a.5.5 0 01.406.69L9.055 28.93l2.216.917 1.968-4.71a.5.5 0 01.767-.202L16 26.48l-.001-3.765a.485.485 0 010-.43L16 15.702zM29.95 9h-28v12.5a.5.5 0 00.5.5h5.791l7.907-7.855A.5.5 0 0117 14.5V22h12.45a.5.5 0 00.5-.5V9zm-.5-7h-27a.5.5 0 00-.5.5V8h28V2.5a.5.5 0 00-.5-.5zM5 4a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E",
	"arrow-crossed-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M26.854 4.146l5 5a.502.502 0 010 .708l-5 5a.502.502 0 01-.708-.708l4.234-4.233c-5.213-.249-9.741 1.91-13.777 6.08.133.139.267.274.402.408a.5.5 0 11-.703.711l-.384-.387c-1.21 1.337-2.375 2.858-3.501 4.551C9.675 25.408 6.394 27.16.57 27.995a.5.5 0 11-.142-.99c5.562-.798 8.587-2.412 11.155-6.282 1.169-1.757 2.383-3.338 3.647-4.729-.333-.363-.662-.74-.987-1.13a.5.5 0 11.768-.641c.299.359.6.706.906 1.042 4.157-4.288 8.854-6.554 14.28-6.36l-4.052-4.051a.502.502 0 01.708-.708zm0 13l5 5a.502.502 0 010 .708l-5 5a.502.502 0 01-.708-.708l4.054-4.052-.116.003a.499.499 0 11-.027-.999l.319-.014-4.23-4.23a.502.502 0 01.708-.708zm-2.501 4.062c.918.324 1.857.562 2.819.71a.5.5 0 01-.153.989 16.719 16.719 0 01-2.999-.756.5.5 0 01.333-.943zm-5.11-2.84a19.96 19.96 0 002.435 1.622.5.5 0 01-.489.872 21.01 21.01 0 01-2.559-1.703.502.502 0 01-.09-.702.502.502 0 01.702-.09zm-7.81-8.991c.33.41.652.848.966 1.32.276.415.54.798.808 1.176a.5.5 0 11-.816.579 47.51 47.51 0 01-.825-1.202c-.297-.445-.6-.86-.911-1.244a.5.5 0 01.777-.629zM6.508 5.559c.977.435 1.862.961 2.68 1.597a.5.5 0 01-.613.79 11.9 11.9 0 00-2.474-1.474.5.5 0 11.407-.913zM.57 4.005c1.11.16 2.095.344 2.997.567a.5.5 0 11-.24.971 29.748 29.748 0 00-2.899-.548.501.501 0 01.142-.99z'/%3E%3C/svg%3E",
	"arrow-down-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 23.758L31.13 7.163a.5.5 0 11.739.674l-15.5 17a.5.5 0 01-.738 0l-15.5-17a.499.499 0 11.738-.674L16 23.758z'/%3E%3C/svg%3E",
	"arrow-left-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M8.242 16l16.595 15.13a.5.5 0 11-.674.739l-17-15.5a.5.5 0 010-.738l17-15.5a.499.499 0 11.674.738L8.242 16z'/%3E%3C/svg%3E",
	"arrow-right-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M7.657.364a.501.501 0 01-.021-.707c.19-.2.506-.21.707-.021l17 16a.5.5 0 010 .728l-17 16a.5.5 0 11-.686-.728L24.27 16 7.657.364z'/%3E%3C/svg%3E",
	"arrow-undo-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.935 10.642A14 14 0 018.096 25.893a.5.5 0 01.708-.707 12.998 12.998 0 0016.415 1.623A13.001 13.001 0 105 16l-.001 1.294 3.147-3.148a.502.502 0 01.708.708l-4 4-.013.011a.436.436 0 01-.04.035l.053-.046a.512.512 0 01-.083.066l-.039.023-.045.021-.036.013-.038.01a.401.401 0 01-.05.009l-.04.003L4.5 19h-.023l-.04-.004L4.5 19a.466.466 0 01-.113-.013l-.038-.01-.036-.013-.045-.02-.04-.024-.028-.02a.271.271 0 01-.041-.035l-.013-.011-4-4a.502.502 0 01.708-.708l3.145 3.146L4 16a14 14 0 0126.935-5.358z'/%3E%3C/svg%3E",
	"balance-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M27.5 20a3.5 3.5 0 01-3.464-3h6.929a3.5 3.5 0 01-3.464 3zm0-13.154L30.763 15H24.24l3.26-8.154zM13.55 5a2.502 2.502 0 014.9 0h-4.9zm4.123 24.001h-3.345a4.492 4.492 0 001.673-3.5c0 1.413.652 2.675 1.672 3.5zm-9.911-14H1.239L4.5 6.845 7.76 15zM4.5 20a3.502 3.502 0 01-3.465-3h6.929A3.5 3.5 0 014.5 20zm27-4a.5.5 0 00.464-.687l-4-10A.492.492 0 0027.5 5h-8.036a3.501 3.501 0 00-6.929 0h-8.02a.496.496 0 00-.48.314l-4 10A.5.5 0 00.5 16a.5.5 0 00-.5.5 4.5 4.5 0 009 0 .5.5 0 00-.5-.5.5.5 0 00.464-.686L5.238 6H15v19.5a3.5 3.5 0 01-3.5 3.5h-5a.5.5 0 000 1h19a.5.5 0 000-1h-5a3.5 3.5 0 01-3.5-3.5V6h9.762l-3.726 9.314a.5.5 0 00.465.686.5.5 0 00-.5.5 4.5 4.5 0 009 0 .5.5 0 00-.5-.5z'/%3E%3C/svg%3E",
	"bandwidth-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M4.854 18.146a.502.502 0 010 .708L1.707 22H31.46a.5.5 0 010 1H1.707l3.147 3.146a.502.502 0 01-.708.708l-4-4-.011-.013a.31.31 0 01-.033-.039l.044.052a.517.517 0 01-.069-.087l-.02-.035-.02-.041-.014-.04a.345.345 0 01-.012-.046l-.006-.03c-.003-.022-.004-.043-.005-.063v-.022c0-.022.002-.043.005-.064L0 22.5a.52.52 0 01.011-.105l.012-.046.015-.04c.005-.014.012-.027.019-.04a.307.307 0 01.02-.036l.025-.035a.304.304 0 01.033-.04l.011-.012 4-4a.502.502 0 01.708 0zm23-13l4 4a.502.502 0 010 .708l-4 4a.502.502 0 01-.708-.708l3.156-3.156H.5a.5.5 0 010-1h29.782l-3.136-3.136a.502.502 0 01.708-.708z'/%3E%3C/svg%3E",
	"bell-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0a2.5 2.5 0 012.5 2.5v1.785C23.37 5.418 27 9.785 27 15v8.5a4.5 4.5 0 004.288 4.495L31.5 28h-3.163c.82.578 1.805.937 2.87.992L31.5 29H19.464a3.5 3.5 0 01-6.928 0H.5c1.177 0 2.268-.37 3.163-1l-3.121-.001L.5 28v1c-.667 0-.667-1 0-1l.042-.001.17-.004A4.499 4.499 0 005 23.5V15c0-5.215 3.63-9.583 8.5-10.715V2.5A2.5 2.5 0 0116 0zm2.45 29h-4.9a2.5 2.5 0 004.9 0zm13.05-1c.63 0 .665.892.105.991L31.5 29v-1zM16 5C10.477 5 6 9.477 6 15v8.5c0 1.86-.923 3.505-2.337 4.5h24.674A5.492 5.492 0 0126 23.5V15c0-5.523-4.477-10-10-10zm0-4a1.5 1.5 0 00-1.5 1.5v1.601a11.235 11.235 0 013 .001V2.5A1.5 1.5 0 0016 1z'/%3E%3C/svg%3E",
	"bird-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M10.096 1.099l6.6 4.85a.497.497 0 01.196.312l.246 1.345 2.85 1.9c.116.077.195.2.216.339.024.156.067.433.121.795.091.603.182 1.22.267 1.815l.056.397c.118.848.21 1.556.268 2.077.017.16.032.302.042.425l4.544-.913a.498.498 0 01.397.09c.77.575 1.574 1.101 2.408 1.576l.017.011 3.331 1.088a.5.5 0 01-.02.957L27.1 19.438c-.957.953-2.33 1.398-4.332 1.638-1.153 2.43-3.164 3.895-5.765 4.553-1.884.478-3.877.493-5.737.235-.22-.03-.42-.063-.6-.095l-2.555 3.973a.507.507 0 01-.351.225l-3.75.53a.506.506 0 01-.419-.137L.225 27.08l-.071-.069-.062-.071.06.069a.502.502 0 01-.057-.653l.06-.067a.542.542 0 01.074-.058l9.298-6.008-.875-1.592a.5.5 0 01-.045-.371l1.356-4.97.368-3.615a.492.492 0 01.015-.161l.12-1.156-1.159-6.773a.5.5 0 01.79-.487zm15.385 14.366l-7.113 1.427a.487.487 0 01-.194 0l-2.963.879-4.681 3.014-5.605 8.572 2.468-.349 2.617-4.067a.498.498 0 01.533-.216c.155.036.451.092.86.149 1.744.241 3.614.227 5.355-.214 2.174-.55 3.855-1.706 4.896-3.6-.597-.095-1.256-.376-2.089-.834-.17-.094-.336-.188-.583-.33-1.44-.83-1.946-1.064-2.442-1.064a.5.5 0 010-1c.756 0 1.3.253 2.94 1.197.243.14.404.231.568.321 1.046.576 1.737.811 2.275.727a.505.505 0 01.223.016l-.17.021c1.783-.191 2.975-.508 3.803-1.202a.496.496 0 01.346-.352l.018-.004c.396-.452.693-1.03.928-1.778a23.653 23.653 0 01-1.99-1.313zM8.467 22.114l-7.165 4.614 2.55 2.446 4.615-7.06zm2.035-19.476l.381 2.233 3.84 2.512a.5.5 0 11-.547.837l-3.063-2.005.35 2.042.004.135-.092.893 3.96 1.208a.499.499 0 11-.291.957l-3.774-1.152-.327 3.174-.156.573h.053l.648-.014c.461-.01.91-.018 1.334-.023 2.046-.026 2.692-.017 2.926.132a.5.5 0 11-.536.843c.081.052-.006.04-.044.038-.14-.009-.336-.015-.584-.018a70.658 70.658 0 00-1.749.005 175.025 175.025 0 00-2.275.044h-.047l-.888 3.276.752 1.366 4.352-2.803.129-.059L17.667 16l-1.723-9.363-5.442-4zm17.503 15.508l1.775-.5-1.392-.455c-.113.348-.24.665-.383.955zm-3.165-1.824a.5.5 0 110 1 .5.5 0 010-1zm-7.425-7.33l1.245 6.787 1.308-.267c-.01-.129-.026-.287-.046-.473a72.69 72.69 0 00-.265-2.048l-.055-.395c-.085-.592-.175-1.206-.266-1.807l-.087-.574-1.834-1.223z'/%3E%3C/svg%3E",
	"book-close-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M24.702.411l5 27.8a.5.5 0 01-.404.581l-17.42 3.13a4.502 4.502 0 01-5.02-2.889.507.507 0 01-.05-.14l-.002-.013a4.365 4.365 0 01-.148-.591l-3.59-19.92a4.497 4.497 0 013.634-5.231l17.42-3.13a.5.5 0 01.58.403zm2.646 20.36l-15.066 3.075a.512.512 0 01-.056.015l-.052.005-1.732.354a3.498 3.498 0 00-2.73 4.066l.064.342a3.5 3.5 0 003.926 2.31l16.927-3.042-.894-4.972-1.243.246.717 3.304a.5.5 0 01-.397.598L11.645 29.9a2.21 2.21 0 01-2.585-1.73 2.5 2.5 0 011.953-2.951l16.545-3.281-.21-1.167zm-1.837 2.594L11.21 26.2a1.5 1.5 0 00-1.17 1.771 1.21 1.21 0 001.418.947l14.664-2.735-.611-2.818zM7.835 3.95l-.957.172a3.5 3.5 0 00-2.826 4.069l3.126 17.345a4.495 4.495 0 013.062-2.296l1.303-.266L7.835 3.95zm15.971-2.87L8.82 3.774l3.704 19.002 14.648-2.987L23.806 1.08z'/%3E%3C/svg%3E",
	"book-contact-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30 19.5a1.5 1.5 0 01-1.5 1.5H26v9.5a1.5 1.5 0 01-1.5 1.5h-18A1.5 1.5 0 015 30.5V27H2.5a.5.5 0 010-1H5v-6H2.5a.5.5 0 010-1H5v-6H2.5a.5.5 0 010-1H5V6H2.5a.5.5 0 010-1H5V1.5A1.5 1.5 0 016.5 0h18A1.5 1.5 0 0126 1.5V2h2.5A1.5 1.5 0 0130 3.5v16zM24.5 1h-18a.5.5 0 00-.5.5V5h2.5a.5.5 0 010 1H6v6h2.5a.5.5 0 010 1H6v6h2.5a.5.5 0 010 1H6v6h2.5a.5.5 0 010 1H6v3.5a.5.5 0 00.5.5h18a.5.5 0 00.5-.5v-29a.5.5 0 00-.5-.5zM16 15a5 5 0 015 5v2.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V20a5 5 0 015-5zm0 1c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4zm13-1h-3v5h2.5a.5.5 0 00.5-.5V15zm0-6h-3v5h3V9zM16 8a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 10-.001 3.999A2 2 0 0016 9zm12.5-6H26v5h3V3.5a.5.5 0 00-.5-.5z'/%3E%3C/svg%3E",
	"book-open-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M27 4.5v1.86l2.427-.355A.5.5 0 0130 6.5V8h.5A1.5 1.5 0 0132 9.5v17c0 .921-.778 1.5-2 1.5H1a.502.502 0 01-.313-.11A1.847 1.847 0 010 26.5v-17A1.5 1.5 0 011.5 8H2V6.5a.5.5 0 01.574-.495L5 6.368V4.5a.5.5 0 01.686-.464l9.822 3.929L26.329 4.03A.5.5 0 0127 4.5zM2 9h-.5a.5.5 0 00-.5.5v16.983a.837.837 0 00.2.517h7.762l-6.538-1.006A.5.5 0 012 25.5V9zm28.5 0H30v16.5a.5.5 0 01-.43.495L22.537 27H30c.723 0 1-.206 1-.5v-17a.5.5 0 00-.5-.5zM26 5.214L16 8.85v17.936l10-3.636V5.214zM6 5.239l.001 1.617c.01.054.012.11.004.168L6 7.04v16.12l9 3.6V8.84l-9-3.6zM3 7.08v17.991l8.255 1.269-5.94-2.376A.5.5 0 015 23.5V7.379L3 7.08zm26-.001l-2 .293V23.5a.5.5 0 01-.33.47l-6.472 2.354L29 25.066V7.08zM8.178 19.033l5.5 2.1a.5.5 0 11-.356.935l-5.5-2.1a.502.502 0 01-.29-.646.502.502 0 01.646-.29zm16.29.289a.5.5 0 01-.29.645l-5.5 2.1a.498.498 0 01-.645-.289.498.498 0 01.289-.645l5.5-2.1a.498.498 0 01.645.289zm-16.29-3.29l5.5 2.1c.258.1.388.388.29.646a.502.502 0 01-.646.29l-5.5-2.1a.502.502 0 01-.29-.646.502.502 0 01.646-.29zm16.29.29a.5.5 0 01-.29.645l-5.5 2.1a.498.498 0 01-.645-.289.498.498 0 01.289-.645l5.5-2.1a.498.498 0 01.645.289zm-16.29-3.29l5.5 2.1c.258.1.388.388.29.646a.502.502 0 01-.646.29l-5.5-2.1a.502.502 0 01-.29-.646.502.502 0 01.646-.29zm16.29.29a.5.5 0 01-.29.645l-5.5 2.1a.498.498 0 01-.645-.289.498.498 0 01.289-.645l5.5-2.1a.498.498 0 01.645.289zm-16.29-3.29l5.5 2.1c.258.1.388.388.29.646a.502.502 0 01-.646.29l-5.5-2.1a.502.502 0 01-.29-.646.502.502 0 01.646-.29zm16.29.29a.5.5 0 01-.29.645l-5.5 2.1a.498.498 0 01-.645-.289.498.498 0 01.289-.645l5.5-2.1a.498.498 0 01.645.289z'/%3E%3C/svg%3E",
	"broom-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M31.854.146a.502.502 0 010 .708L14.712 17.995l1.012 1.012a2.5 2.5 0 01.338 3.111l-6.14 9.65a.5.5 0 01-.776.086l-9-9a.5.5 0 01.086-.776l9.649-6.14a2.504 2.504 0 013.113.338l1.011 1.012L31.146.146a.502.502 0 01.708 0zM8.374 18.081l-7.08 4.506L3.5 24.793l1.646-1.647a.502.502 0 01.708.708L4.207 25.5 6.5 27.793l1.646-1.647a.502.502 0 01.708.708L7.207 28.5l2.206 2.206 4.504-7.082-5.543-5.543zm2.044-1.3l-1.179.751 5.228 5.228.752-1.18a1.498 1.498 0 00-.203-1.866l-1.307-1.307a.631.631 0 01-.063-.053l-.053-.064-1.306-1.306a1.5 1.5 0 00-1.869-.202z'/%3E%3C/svg%3E",
	"brush-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M31.224.777c.99.975 1.059 2.55.148 3.617L16.916 20.49a.49.49 0 01-.073.093l-.048.039-.006.008-6.057 4.523a9.995 9.995 0 01-2.268 4.2C6.52 31.296 3.763 32 1.2 32H1a1 1 0 01-1-1l-.001-.058c-.008-.476.016-1.036.103-1.716a11.68 11.68 0 01.789-3.025c.428-1.022 1.006-1.926 1.774-2.692a9.968 9.968 0 014.181-2.251l3.001-4.01a.485.485 0 01.095-.127l1.379-1.84a.49.49 0 01.096-.135l.013-.011.006-.007L27.614.62a2.639 2.639 0 013.61.156zM6.981 22.258l.275-.072a8.956 8.956 0 00-3.902 2.048c-.652.651-1.16 1.445-1.54 2.353a10.703 10.703 0 00-.72 2.766c-.08.627-.102 1.142-.095 1.574L1 31h.2c2.322 0 4.848-.645 6.539-2.335a8.97 8.97 0 001.996-3.653l-2.754-2.754zm4.843-5.996l-.882 1.182 1.493 1.594a.5.5 0 01-.73.684l-1.371-1.464-2.54 3.4 2.544 2.543 5.397-4.02-3.911-3.919zm16.45-14.89L12.49 15.513l3.98 3.989L30.62 3.736a1.652 1.652 0 00-.1-2.25l-.008-.007a1.638 1.638 0 00-2.238-.107z'/%3E%3C/svg%3E",
	"cable-speed-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M22.5 10a.5.5 0 01.5.5V12h7.5a1.5 1.5 0 010 3H23v2h3.5a1.5 1.5 0 011.414 2h.586a1.5 1.5 0 010 3H23v.5a.5.5 0 01-.5.5H.5a.5.5 0 010-1H22V11h-5.5a.5.5 0 010-1h6zm6 10H23v1h5.5a.5.5 0 000-1zm-14-1a.5.5 0 010 1h-5a.5.5 0 010-1h5zm-8 0a.5.5 0 010 1h-3a.5.5 0 010-1h3zm20-1H23v1h3.5a.5.5 0 000-1zm-12-2a.5.5 0 010 1h-8a.5.5 0 010-1h8zm16-3H23v1h7.5a.5.5 0 000-1zm-16 0a.5.5 0 010 1h-5a.5.5 0 010-1h5zm0-3a.5.5 0 010 1h-2a.5.5 0 010-1h2z'/%3E%3C/svg%3E",
	"calendar-pay-as-you-go-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M26.5 0a.5.5 0 01.5.5V3h1.5A3.5 3.5 0 0132 6.5v22a3.5 3.5 0 01-3.5 3.5h-25A3.5 3.5 0 010 28.5v-22A3.5 3.5 0 013.5 3H5V.5a.5.5 0 011 0V3h6V.5a.5.5 0 011 0V3h6V.5a.5.5 0 011 0V3h6V.5a.5.5 0 01.5-.5zM31 11H1v17.5A2.5 2.5 0 003.5 31h25a2.5 2.5 0 002.5-2.5V11zM10.5 22a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zm8 0a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zm6.776-8.766v1.703l.231.03c.451.072.842.211 1.171.417a5.17 5.17 0 011.04.86l-.756.843-.192-.177a4.353 4.353 0 00-.746-.545c-.303-.172-.69-.258-1.16-.258-.528 0-.947.149-1.256.447-.31.298-.465.7-.465 1.204 0 .413.118.751.353 1.015.235.264.53.496.886.696.355.201.742.396 1.16.585.42.19.806.419 1.162.688.355.27.65.602.886.998.235.395.352.903.352 1.522 0 .826-.238 1.502-.714 2.03-.475.527-1.126.848-1.952.963v1.737h-1.032v-1.703l-.274-.036a4.875 4.875 0 01-1.325-.42 5.467 5.467 0 01-1.325-.868l.654-.98.224.186c.306.241.635.452.988.63.442.224.926.336 1.454.336.642 0 1.12-.16 1.436-.482.315-.32.473-.75.473-1.29 0-.458-.118-.84-.353-1.144a3.385 3.385 0 00-.885-.79 10.566 10.566 0 00-1.161-.629 7.375 7.375 0 01-1.161-.67 3.4 3.4 0 01-.886-.92c-.235-.362-.353-.823-.353-1.385 0-.768.227-1.408.68-1.918.453-.51 1.057-.823 1.814-.937v-1.738h1.032zM10 23H6v4h4v-4zm8 0h-4v4h4v-4zm-7.5-9a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zm8 0a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zM10 15H6v4h4v-4zm8 0h-4v4h4v-4zM5 4H3.5A2.5 2.5 0 001 6.5V10h30V6.5A2.5 2.5 0 0028.5 4H27v2.5a.5.5 0 01-1 0V4h-6v2.5a.5.5 0 01-1 0V4h-6v2.5a.5.5 0 01-1 0V4H6v2.5a.5.5 0 01-1 0V4z'/%3E%3C/svg%3E",
	"calendar-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M26.5 0a.5.5 0 01.5.5V3h1.5A3.5 3.5 0 0132 6.5v22a3.5 3.5 0 01-3.5 3.5h-25A3.5 3.5 0 010 28.5v-22A3.5 3.5 0 013.5 3H5V.5a.5.5 0 011 0V3h6V.5a.5.5 0 011 0V3h6V.5a.5.5 0 011 0V3h6V.5a.5.5 0 01.5-.5zM31 11H1v17.5A2.5 2.5 0 003.5 31h25a2.5 2.5 0 002.5-2.5V11zM10.5 22a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zm16 0a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zm-8 0a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zM10 23H6v4h4v-4zm16 0h-4v4h4v-4zm-8 0h-4v4h4v-4zm-7.5-9a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zm16 0a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zm-8 0a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zM10 15H6v4h4v-4zm16 0h-4v4h4v-4zm-8 0h-4v4h4v-4zM5 4H3.5A2.5 2.5 0 001 6.5V10h30V6.5A2.5 2.5 0 0028.5 4H27v2.5a.5.5 0 01-1 0V4h-6v2.5a.5.5 0 01-1 0V4h-6v2.5a.5.5 0 01-1 0V4H6v2.5a.5.5 0 01-1 0V4z'/%3E%3C/svg%3E",
	"camera-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M22.77 3a.5.5 0 01.471.332L24.903 8H31.5a.5.5 0 01.5.5v20a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-22A.5.5 0 01.5 6h3a.5.5 0 01.5.5V8h2.888l1.671-4.669A.502.502 0 019.03 3h13.74zm-.353 1H9.382L7.711 8.669A.502.502 0 017.24 9H3.5a.5.5 0 01-.5-.5V7H1v21h30V9h-6.45a.5.5 0 01-.471-.332L22.417 4zM16 10a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm0 2a5 5 0 11-.001 10.001A5 5 0 0116 13zm0 1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm11-3a2 2 0 11.001 3.999A2 2 0 0127 11zm0 1a1 1 0 100 2 1 1 0 000-2z'/%3E%3C/svg%3E",
	"cart-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M9.778 23.5a4.055 4.055 0 110 8.11 4.055 4.055 0 010-8.11zm17.778 0a4.055 4.055 0 110 8.11 4.055 4.055 0 010-8.11zm-17.778 1a3.056 3.056 0 100 6.111 3.056 3.056 0 000-6.111zm17.778 0a3.056 3.056 0 100 6.111 3.056 3.056 0 000-6.111zM4.444.389a.5.5 0 01.5.5v1.277H31.11a.5.5 0 01.5.5v7.112a5.834 5.834 0 01-5.833 5.833H4.944v3.056c0 .705.573 1.277 1.278 1.277h24.89a.5.5 0 010 1H6.221a2.278 2.278 0 01-2.278-2.277V1.389H.89a.5.5 0 010-1h3.555zm.5 14.222h20.834a4.833 4.833 0 004.833-4.833V3.167L4.944 3.166V14.61z'/%3E%3C/svg%3E",
	"cdn-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.62 4c5.523 0 10 4.477 10 10 0 6.136-5.998 18-10 18-3.316 0-10-12.428-10-18 0-5.523 4.477-10 10-10zm0 1a9 9 0 00-9 9c0 5.093 6.404 17 9 17 3.265 0 9-11.345 9-17a9 9 0 00-9-9zm.01 3a6 6 0 110 12 6 6 0 010-12zm0 1a5 5 0 10.001 10.001A5 5 0 0016.63 9zm1.99 3a8.661 8.661 0 01-1.29 2.71 1 1 0 01-1.41-1.41 8 8 0 012.7-1.3zM9.247 2.977a.498.498 0 01-.094.7A13.092 13.092 0 005.927 7.26a.5.5 0 01-.854-.52 14.076 14.076 0 013.474-3.857.498.498 0 01.7.094zm15.011-.125a14.06 14.06 0 013.889 3.473.501.501 0 01-.794.61 13.053 13.053 0 00-3.611-3.227.499.499 0 11.516-.856zM19.13 0a.5.5 0 010 1h-5a.5.5 0 010-1h5z'/%3E%3C/svg%3E",
	"chatbot-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M26.5 5c3.04 0 5.5 2.462 5.5 5.5v11a5.5 5.5 0 01-5.5 5.5h-17a3.502 3.502 0 01-2.186-.773 1.282 1.282 0 00-1.63.002A3.49 3.49 0 013.501 27h-3c-.505 0-.691-.663-.261-.927A5.78 5.78 0 003 21.5v-11A5.5 5.5 0 018.5 5zm0 1h-18A4.502 4.502 0 004 10.5v11.03A6.79 6.79 0 011.956 26H3.5a2.49 2.49 0 001.554-.546c.84-.69 2.053-.69 2.89-.004.442.355.992.55 1.557.55h17a4.5 4.5 0 004.5-4.5v-11A4.501 4.501 0 0026.5 6zm-3.999 4a1.5 1.5 0 011.5 1.5L24 16h1.501a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5H10l.001-4.5a1.5 1.5 0 011.5-1.5zm2.5 7H24v3h1.001v-3zm-2.5-6h-11a.5.5 0 00-.5.5V20h12v-8.5a.5.5 0 00-.5-.5zM10 17h-.999v3H10v-3zm10.5 0a.5.5 0 110 1h-7a.5.5 0 010-1zm-6-4a.5.5 0 01.5.5v2a.5.5 0 11-1 0v-2a.5.5 0 01.5-.5zm5 0a.5.5 0 01.5.5v2a.5.5 0 11-1 0v-2a.5.5 0 01.5-.5z'/%3E%3C/svg%3E",
	"chrono-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M19.318 4.788C25.665 5.926 29.73 11.457 29.73 18a13.99 13.99 0 01-27.621 3.144 13.99 13.99 0 018.954-16.335.5.5 0 11.334.942A12.99 12.99 0 1028.73 18c0-6.083-3.746-11.18-9.588-12.228a.5.5 0 11.176-.984zM15.23 0a.5.5 0 01.5.5v16a.5.5 0 01-1 0V.5a.5.5 0 01.5-.5zm9.021 3.278a17.064 17.064 0 016.243 6.294.5.5 0 11-.868.496 16.092 16.092 0 00-5.877-5.926.498.498 0 01-.181-.683.498.498 0 01.683-.181zM7.903 3.46a.5.5 0 01-.183.683A16.094 16.094 0 001.9 9.895a.5.5 0 11-.86-.51 17.092 17.092 0 016.18-6.108.5.5 0 01.683.183z'/%3E%3C/svg%3E",
	"clock-available-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 .3a15.702 15.702 0 0115.46 12.834A15.702 15.702 0 012.62 24.176 15.7 15.7 0 015.37 4.468H.8a.5.5 0 010-1h6.4a.5.5 0 01.5.501l-.016 6.4a.5.5 0 11-1-.002l.015-5.899h-.354a.5.5 0 01-.124.577 14.7 14.7 0 00-2.747 18.61 14.7 14.7 0 0027.002-10.339C29.18 6.344 23.093 1.29 16.018 1.3l-.896.032a.5.5 0 01-.036-1L16 .3zm6.364 11.357a.5.5 0 01-.02.707l-8.471 8a.502.502 0 01-.687 0l-3.53-3.334a.5.5 0 01.687-.727l3.186 3.01 8.128-7.677a.5.5 0 01.707.02z'/%3E%3C/svg%3E",
	"clock-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M6.221 5.045a14.7 14.7 0 00-2.747 18.61 14.7 14.7 0 0027.002-10.339C29.18 6.344 23.093 1.29 16.018 1.3l-.896.032a.5.5 0 01-.036-1L16 .3A15.7 15.7 0 115.37 4.468H.8a.5.5 0 010-1h6.4a.5.5 0 01.5.501l-.016 6.4a.5.5 0 11-1-.002l.015-5.899h-.354a.5.5 0 01-.124.577zM15.2 6.668a.5.5 0 01.5.5v9.1h5.9a.5.5 0 010 1h-6.4a.5.5 0 01-.5-.5v-9.6a.5.5 0 01.5-.5z'/%3E%3C/svg%3E",
	"cloud-data-sharing-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20.036.316A9 9 0 0126.97 9v.285A7 7 0 0125 23l-6.942-.001c.027.061.042.13.042.201v3.5h.567c1.283 0 2.352.918 2.586 2.133h10.214a.5.5 0 010 1H21.253a2.635 2.635 0 01-2.586 2.134h-5.334a2.635 2.635 0 01-2.586-2.134H.533a.5.5 0 010-1h10.214a2.635 2.635 0 012.586-2.133h.566l.001-3.5c0-.072.015-.14.042-.201L6.998 23a6.999 6.999 0 01-3.846-12.832 4.96 4.96 0 017.055-5.647 9.001 9.001 0 019.83-4.205zM18.666 27.7h-5.333a1.633 1.633 0 100 3.267h5.334a1.634 1.634 0 000-3.267zm-1.524-4.701h-2.284c.027.061.042.13.042.201v3.5h2.2v-3.5c0-.072.015-.14.042-.201zM10.845 5.437a.5.5 0 01-.719.191 3.96 3.96 0 00-5.913 4.599.502.502 0 01-.22.595A6 6 0 007 22h18a6 6 0 001.356-11.843.5.5 0 01-.386-.487v-.666a8 8 0 00-15.125-3.567z'/%3E%3C/svg%3E",
	"cloud-edge-computing-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.5 24.889c1.933 0 3.5 1.592 3.5 3.555C20 30.408 18.433 32 16.5 32S13 30.408 13 28.444c0-1.963 1.567-3.555 3.5-3.555zm0 1.016c-1.38 0-2.5 1.137-2.5 2.54 0 1.402 1.12 2.54 2.5 2.54s2.5-1.138 2.5-2.54c0-1.403-1.12-2.54-2.5-2.54zm-13-6.095c1.933 0 3.5 1.591 3.5 3.555 0 1.964-1.567 3.556-3.5 3.556S0 25.329 0 23.365s1.567-3.555 3.5-3.555zM19.147.193c3.177.762 5.431 3.63 5.46 6.951v.14c2.522.795 4.161 3.311 3.857 6.015-.32 2.839-2.683 4.984-5.496 4.987l-.969-.001.001 4.572h3.035c.243-1.723 1.702-3.047 3.465-3.047 1.933 0 3.5 1.591 3.5 3.555 0 1.964-1.567 3.556-3.5 3.556-1.763 0-3.221-1.324-3.464-3.047L21 23.873l-.001-5.588H17v6.604h-1v-6.604h-4.5v5.588H7v-1.016h3.5v-4.572H9.018c-2.497-.008-4.678-1.714-5.327-4.164-.615-2.321.29-4.766 2.219-6.107a4.056 4.056 0 011.423-4.089 3.903 3.903 0 014.128-.457C13.042.816 16.141-.528 19.147.193zM3.5 20.825c-1.38 0-2.5 1.137-2.5 2.54s1.12 2.54 2.5 2.54S6 24.768 6 23.365s-1.12-2.54-2.5-2.54zm25 0c-1.38 0-2.5 1.137-2.5 2.54s1.12 2.54 2.5 2.54 2.5-1.137 2.5-2.54-1.12-2.54-2.5-2.54zM12.1 4.39a.496.496 0 01-.72.194 2.917 2.917 0 00-3.432.143 3.034 3.034 0 00-.982 3.347.512.512 0 01-.22.604c-1.765 1.05-2.621 3.171-2.09 5.179.532 2.008 2.32 3.406 4.364 3.413h13.948c2.303-.003 4.24-1.76 4.502-4.087.262-2.327-1.233-4.484-3.477-5.016a.507.507 0 01-.386-.495V7.15c-.025-2.85-1.96-5.313-4.69-5.967-2.728-.654-5.543.67-6.817 3.208z'/%3E%3C/svg%3E",
	"cloud-essential-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23113f6d;fill-rule:evenodd%7D%3C/style%3E%3C/defs%3E%3Cpath d='M19 1.13a.94.94 0 01.94.93v5.62a.94.94 0 01-.94.94H.94A.94.94 0 010 7.68V2.06a.94.94 0 01.94-.93zm0 .62H.94a.31.31 0 00-.32.31v5.62A.31.31 0 00.94 8H19a.31.31 0 00.31-.31V2.06a.31.31 0 00-.31-.31zm-2.14 1.87a.63.63 0 11-.63.63.63.63 0 01.63-.63zM3.47 9.24a.31.31 0 01.31.31V11l2.07.28h.3a.28.28 0 01.17.09 3.86 3.86 0 001.9 1l2.06.06h.24a1.59 1.59 0 011.23 2.4l-.1.14h1.1L13 15H13.47l.24-.08.15-.06h.08l4-1.92a1.36 1.36 0 01.68-.18 1.49 1.49 0 01.36.05 1.37 1.37 0 011 1.69 1.42 1.42 0 01-.65.83l-4.72 2.88a3.76 3.76 0 01-1 .41 9.33 9.33 0 01-2.37.33h-.28a9.65 9.65 0 01-3.37-.81c-.46-.18-.91-.39-1.35-.59l-.67-.34A5.08 5.08 0 005 17a3.69 3.69 0 00-.56-.11h-.22.16-.22.06-.45v1.77a.32.32 0 01-.25.31H.31a.31.31 0 110-.62h2.85V9.87H.31a.32.32 0 010-.63zm.31 2.4v4.53h.63l.31.05.36.08a3.52 3.52 0 01.43.13l.23.08.68.34c.42.21.86.4 1.31.58a9.23 9.23 0 003.14.77 6.76 6.76 0 003.34-.65L19 14.7a.79.79 0 00.36-.46.69.69 0 00-.08-.56.79.79 0 00-.46-.36H18.6a.81.81 0 00-.39.1l-4 1.93-.1.05a5.39 5.39 0 01-2.45.32H10.83h.46-1.02c-.84-.06-1.67-.16-2.47-.29h-.1a.32.32 0 010-.63h.12l.51.08h.07l.42.05-.42-.05.65.08h-.23a4.6 4.6 0 00.52.06h-.29l.51.06h-.22l.49.05h-.27.53-.26.52-.26.73-.05.16-.05.16-.05l.08-.05.07-.06h.08a.18.18 0 00.07-.05l.07-.07.06-.07a1.09 1.09 0 00.13-.17 1 1 0 000-1 1 1 0 00-.91-.46l-2.15-.06A4.46 4.46 0 016 11.94zm-2.26 3.47h.09a.9.9 0 01.27.07.82.82 0 01.5.78.83.83 0 01-.25.59.86.86 0 01-.5.23h-.09A.84.84 0 011 15.35a.8.8 0 01.52-.24zm0 .62h-.13a.23.23 0 000 .24.22.22 0 00.2.13.2.2 0 00.15-.06.26.26 0 00.02-.04.21.21 0 00-.13-.2z' class='cls-1'/%3E%3C/svg%3E",
	"cloud-eye-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20.044 5.284A8.99 8.99 0 0126.97 14v.285A7 7 0 0125 28H6.998a6.999 6.999 0 01-3.846-12.832 4.96 4.96 0 017.053-5.648 8.99 8.99 0 019.839-4.236zm-9.198 5.151a.499.499 0 01-.72.193 3.96 3.96 0 00-5.913 4.599.502.502 0 01-.22.595A6 6 0 007 27h18a6 6 0 001.356-11.843.5.5 0 01-.386-.487v-.668a7.99 7.99 0 00-15.124-3.567zM16 13c.077 0 .154.001.23.004L15.997 13a11.882 11.882 0 019.737 5.16 1.502 1.502 0 010 1.681 11.77 11.77 0 01-9.326 5.145 5.504 5.504 0 01-.816 0 11.773 11.773 0 01-9.326-5.146 1.501 1.501 0 01.002-1.683 11.88 11.88 0 019.506-5.154l.072-.001.151-.002H16zm0 1a5 5 0 00-.321 9.99c.106.002.214.004.321.004l.322-.004a5 5 0 00-.105-9.985L16 14zm-4.456.982l-.289.137a10.87 10.87 0 00-4.16 3.601.5.5 0 00-.002.559 10.773 10.773 0 004.469 3.758A5.976 5.976 0 0110 19c0-1.545.584-2.954 1.544-4.018zm8.91 0l.074.082A5.974 5.974 0 0122 19a5.971 5.971 0 01-1.562 4.037 10.768 10.768 0 004.468-3.757.5.5 0 00.002-.557 10.875 10.875 0 00-4.453-3.741zM16.09 17.01a1.49 1.49 0 00-.09.49 1.5 1.5 0 001.5 1.5l.01.01a1.49 1.49 0 00.49-.09v.09a2 2 0 11-2-2z'/%3E%3C/svg%3E",
	"cloud-hand-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='33' viewBox='0 0 32 33'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M21.37 26.177l.014-.003.025-.005.03-.008.024-.006.045-.011.048-.013-.045.012.198-.059.191-.069a4.509 4.509 0 00.367-.161l6.444-3.081a2.294 2.294 0 011.662-.201 2.215 2.215 0 011.364 1.023 2.13 2.13 0 01.217 1.679 2.189 2.189 0 01-1.036 1.331l-7.56 4.624c-.318.197-.87.44-1.634.656-1.061.3-2.326.488-3.804.52l-.45.005c-1.49 0-3.336-.484-5.39-1.301a34.25 34.25 0 01-3.236-1.496 7.827 7.827 0 00-1.718-.445l-.12-.015-.199-.022-.017-.002-.028-.002-.029-.003-.193-.014a7.63 7.63 0 00-.478-.015v2.834a.5.5 0 01-.41.492l-.09.008H.5a.5.5 0 010-1h4.562V18H.5a.5.5 0 010-1h5.062a.5.5 0 01.5.5l-.001 2.327 3.316.458.471.065a.502.502 0 01.283.14 6.071 6.071 0 003.038 1.63l3.306.098.189-.006.186.008a2.537 2.537 0 011.819 4.064l-.05.063.223-.002.176-.001.13-.001.16-.002.236-.005c.085-.001.167-.003.246-.006l.05-.001.036-.002.052-.001-.039.001c.178-.006.34-.013.49-.022.153-.01.294-.022.423-.036a5.49 5.49 0 00.303-.04l.12-.022.011-.002.016-.003-.01.003.059-.012.038-.009.041-.009-.01.002zm-18.932.22l.144.004a1.342 1.342 0 011.23 1.367 1.335 1.335 0 01-1.195 1.309l-.149.007a1.344 1.344 0 01-.03-2.687zm.008 1l-.078.015a.346.346 0 00-.218.458.347.347 0 00.324.214.332.332 0 00.338-.33.348.348 0 00-.206-.33.37.37 0 00-.16-.027zM22.65.19a7.061 7.061 0 015.422 6.819v.224a5.495 5.495 0 013.892 5.898 5.482 5.482 0 01-5.433 4.87H12.455a5.478 5.478 0 01-5.266-4.067 5.506 5.506 0 012.258-6.008 3.903 3.903 0 011.378-4.036 3.868 3.868 0 014.14-.398A7.022 7.022 0 0122.65.19zm-7.112 4.147a.385.385 0 01-.552.146c-1.086-.708-2.504-.65-3.529.144S10.027 6.777 10.448 8a.38.38 0 01-.169.454 4.58 4.58 0 00-2.12 5.152 4.601 4.601 0 004.428 3.395H26.4a4.598 4.598 0 004.57-4.065 4.589 4.589 0 00-3.529-4.99.383.383 0 01-.296-.373v-.509a6.124 6.124 0 00-4.73-5.9 6.148 6.148 0 00-6.877 3.173zm2.425 21.211a1.538 1.538 0 000-1.597c-.299-.49-.846-.774-1.468-.733l-3.435-.106a7.076 7.076 0 01-3.51-1.792l-3.489-.483v7.259l.25.004.05.001.013.001h.02c.223.01.445.026.667.052l.061.008a8.574 8.574 0 011.771.41c.123.042.244.087.366.134a33.596 33.596 0 003.191 1.475c1.946.774 3.685 1.23 5.02 1.23 2.73 0 4.51-.504 5.363-1.032l7.581-4.636a1.21 1.21 0 00.578-.74 1.134 1.134 0 00-.116-.898 1.218 1.218 0 00-.972-.601l-.112-.005a1.267 1.267 0 00-.625.165l-6.464 3.09a3.958 3.958 0 01-.162.077c-.94.423-1.603.507-3.933.517h-.592l-.363-.012-.166-.008h-.018l-.016-.002-.164-.007.104.004-.587-.03-.117-.007c-.07 0-.142-.001-.214-.006l-.082-.014a40.32 40.32 0 01-3.956-.47h-.107a.5.5 0 010-1l.19.007.827.13.115.016.561.076.066.008-.03-.004-.036-.004L13.84 26l.142.02.077.008.042.006.031.005-.01-.002-.021-.003-.012-.002.033.005.1.012-.09-.01.371.045-.192-.024.218.027.01.001h-.001l.005.001h.004l.063.007-.026-.003.242.027-.216-.024.297.034h.009l.134.014.307.032.31.028-.26-.024.334.031.036.003.172.014.222.019-.198-.017.196.016.014.001h-.012l.137.009-.084-.006.216.016.088.006.058.004-.056-.004.18.013c.066-.004.13-.01.195-.021l.076-.015.075-.019.076-.023.005-.002-.017.007.05-.019-.023.009.04-.014.046-.019.035-.014.042-.02.013-.006.018-.009.052-.027.015-.009-.009.005.05-.028.028-.019-.01.007.042-.027-.023.014.031-.02.03-.022-.028.021.051-.036.012-.011h.001l.025-.02.022-.017.001-.001.021-.018.011-.01.024-.021.019-.018.031-.029.007-.008.08-.085c.05-.06.097-.125.139-.194z'/%3E%3C/svg%3E",
	"cloud-hybrid-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.53 4a2.504 2.504 0 012.014 1.016A9 9 0 0126.97 14v.285A7 7 0 0125 28h-8.42a.511.511 0 01-.131-.017L2.47 27.98a2.5 2.5 0 01-2.5-2.5v-6.5h.029L0 12.5V6.625a2.508 2.508 0 01.687-1.85A2.507 2.507 0 012.5 4h14.03zm2.465 2.063l.022.143c.015.131.02.264.013.397l-.031 5.997.001 6.9h-.03l.03 5.977c0 .574-.192 1.102-.516 1.523H25a6 6 0 001.357-11.843.5.5 0 01-.386-.487V14a8 8 0 00-6.975-7.937zM17.972 19.98H.97v5.5a1.5 1.5 0 001.5 1.5H16.5a1.5 1.5 0 001.5-1.499l-.028-5.501zM15.5 24a.5.5 0 110 1 .5.5 0 010-1zm0-2a.5.5 0 110 1 .5.5 0 010-1zm2.499-9h-17v5.98h17V13zM15.5 16a.5.5 0 110 1 .5.5 0 010-1zm0-2a.5.5 0 110 1 .5.5 0 010-1zm1.03-9H2.5A1.501 1.501 0 001 6.438V12h17.003l.028-5.425a1.516 1.516 0 00-.114-.651.496.496 0 01-.235-.383.556.556 0 00-.063-.075A1.499 1.499 0 0016.53 5zM15.5 9a.5.5 0 110 1 .5.5 0 010-1zm0-2a.5.5 0 110 1 .5.5 0 010-1z'/%3E%3C/svg%3E",
	"cloud-infinity-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M15.033 15.753l.348 2.117a.47.47 0 01-.37.537L13 18.823a.471.471 0 01-.191-.922l1.082-.224a4.121 4.121 0 00-4.745-.403c-1.632.956-2.43 2.906-1.946 4.756.485 1.848 2.129 3.137 4.008 3.146 1.938 0 3.107-1.357 4.357-4.413l.002-.004.128-.307c1.338-3.169 2.717-4.687 5.087-4.687 2.819 0 5.101 2.319 5.101 5.176s-2.282 5.177-5.103 5.177a5.294 5.294 0 01-3.634-1.473.47.47 0 11.65-.68 4.345 4.345 0 002.986 1.211c2.296 0 4.16-1.894 4.16-4.235 0-2.34-1.864-4.235-4.16-4.235-1.932 0-3.098 1.357-4.345 4.413l-.005.009-.125.303c-1.342 3.168-2.724 4.687-5.101 4.687-2.31-.012-4.324-1.59-4.916-3.85-.591-2.257.383-4.636 2.38-5.806a5.061 5.061 0 015.577.298l-.141-.855a.47.47 0 11.928-.152zm4.109-11.279a8.941 8.941 0 016.933 7.96 6.826 6.826 0 012.09 12.34.47.47 0 01-.515-.787 5.882 5.882 0 00-2.11-10.706.47.47 0 01-.382-.441 8.002 8.002 0 00-15.049-3.414.47.47 0 01-.577.22 3.766 3.766 0 00-5.061 3.527c0 .171.013.342.037.512a.47.47 0 01-.207.459 5.88 5.88 0 00.099 9.894.47.47 0 11-.502.796 6.822 6.822 0 01-.354-11.312 4.95 4.95 0 01-.015-.346 4.708 4.708 0 015.943-4.535 8.942 8.942 0 019.67-4.167z'/%3E%3C/svg%3E",
	"cloud-padlock-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20.044 5.284A8.99 8.99 0 0126.97 14v.285A7 7 0 0125 28H6.998a6.999 6.999 0 01-3.846-12.832 4.96 4.96 0 017.053-5.648 8.99 8.99 0 019.839-4.236zm-9.198 5.151a.499.499 0 01-.72.193 3.96 3.96 0 00-5.913 4.599.502.502 0 01-.22.595A6 6 0 007 27h18a6 6 0 001.356-11.843.5.5 0 01-.386-.487v-.668a7.99 7.99 0 00-15.124-3.567zM16 9c2.21 0 4 1.79 4 4v2h.5a1.5 1.5 0 011.5 1.5v7a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-7a1.5 1.5 0 011.5-1.5h.5v-2c0-2.21 1.79-4 4-4zm4.5 7h-9a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zM16 18a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm0-8a3 3 0 00-3 3v2h6v-2a3 3 0 00-3-3z'/%3E%3C/svg%3E",
	"cloud-server-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20.044 5.284A8.99 8.99 0 0126.97 14v.285A7 7 0 0125 28H6.998a6.999 6.999 0 01-3.846-12.832 4.96 4.96 0 017.053-5.648 8.99 8.99 0 019.839-4.236zm-9.198 5.151a.499.499 0 01-.72.193 3.96 3.96 0 00-5.913 4.599.502.502 0 01-.22.595A6 6 0 007 27h18a6 6 0 001.356-11.843.5.5 0 01-.386-.487v-.668a7.99 7.99 0 00-15.124-3.567zM22.5 13a1.5 1.5 0 011.5 1.5v4c0 .385-.145.736-.383 1.001.239.264.383.615.383.999v4a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 016 24.5v-4c0-.384.144-.735.382-1a1.493 1.493 0 01-.382-1v-4A1.5 1.5 0 017.5 13h15zm0 7h-15a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5zm-1 1a.5.5 0 110 1 .5.5 0 010-1zm1-7h-15a.5.5 0 00-.5.5v4a.5.5 0 00.41.492L7.5 19h15a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5zm-1 1a.5.5 0 110 1 .5.5 0 010-1z'/%3E%3C/svg%3E",
	"cloud-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M31.948 21.797A7 7 0 0125 28H6.998a6.999 6.999 0 01-3.846-12.832 4.96 4.96 0 017.055-5.647A9.001 9.001 0 0126.97 14v.285a7 7 0 014.978 7.512zm-5.978-7.793a8 8 0 00-15.125-3.567.5.5 0 01-.719.191 3.96 3.96 0 00-5.913 4.599.502.502 0 01-.22.595A6 6 0 007 27h18a6 6 0 001.356-11.843.5.5 0 01-.386-.487v-.666z'/%3E%3C/svg%3E",
	"community-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.533.033a3.7 3.7 0 11-.805 7.312l-2.334 6.27a9.57 9.57 0 015.735 9.64l5.579.796a3.7 3.7 0 11-.141 1.016v-.026l-5.578-.796c-.86 4.4-4.736 7.722-9.389 7.722A9.567 9.567 0 01.033 22.4a9.57 9.57 0 015.715-8.76l-1.183-3.1a3.7 3.7 0 11.935-.355l1.183 3.101c.92-.294 1.9-.453 2.917-.453.995 0 1.954.152 2.856.434l2.335-6.269A3.7 3.7 0 0116.533.033zm-6.09 24.627H8.757a4.523 4.523 0 00-4.522 4.418c1.467 1.182 3.334 1.889 5.365 1.889s3.897-.707 5.365-1.888l.002.105a4.524 4.524 0 00-4.524-4.524zM9.6 13.833a8.568 8.568 0 00-6.283 14.391 5.53 5.53 0 014.02-4.38 4.234 4.234 0 114.526.001 5.528 5.528 0 014.02 4.379A8.568 8.568 0 009.6 13.833zm18.667 8.534a2.699 2.699 0 100 5.4 2.7 2.7 0 000-5.4zM9.6 17.033a3.233 3.233 0 100 6.467 3.233 3.233 0 000-6.467zm-5.867-12.8a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zm12.8-3.2a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4z'/%3E%3C/svg%3E",
	"component-square-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M2.75 24.25v2.452l.083.003A2.634 2.634 0 015.279 29H7.5v1H5.215a2.635 2.635 0 01-5.182-.667c0-1.131.714-2.096 1.716-2.469l.001-2.614h1zm28 0v2.864A2.634 2.634 0 1126.785 30H24.5v-1h2.22a2.636 2.636 0 013.03-2.267V24.25h1zm-1.417 3.45a1.633 1.633 0 100 3.266 1.633 1.633 0 000-3.266zm-26.666 0a1.634 1.634 0 100 3.267 1.634 1.634 0 000-3.267zM15.5 29v1h-3v-1h3zm-4 0v1h-3v-1h3zm12 0v1h-3v-1h3zm-4 0v1h-3v-1h3zm.767-23.633c.57 0 1.033.462 1.033 1.033v1.1H23A1.5 1.5 0 0124.5 9v1.7h1.1a1.034 1.034 0 010 2.067h-1.1v2.2h1.1a1.033 1.033 0 010 2.066h-1.1v2.2h1.1a1.034 1.034 0 010 2.067h-1.1V23a1.5 1.5 0 01-1.5 1.5h-1.7v1.11a1.036 1.036 0 01-1.054 1.013 1.035 1.035 0 01-1.013-1.023v-1.1h-2.2v1.11a1.035 1.035 0 01-1.054 1.013 1.035 1.035 0 01-1.012-1.023v-1.1h-2.2v1.11a1.036 1.036 0 01-1.054 1.013A1.035 1.035 0 0110.7 25.6v-1.1H9A1.5 1.5 0 017.5 23v-1.7H6.4a1.034 1.034 0 010-2.067h1.1v-2.2H6.4a1.033 1.033 0 010-2.066h1.1v-2.2H6.4a1.034 1.034 0 010-2.067h1.1V9A1.5 1.5 0 019 7.5h1.7V6.4a1.034 1.034 0 012.067 0v1.1h2.2V6.4a1.033 1.033 0 012.066 0v1.1h2.2V6.4c0-.57.463-1.033 1.034-1.033zM23 8.5H9a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h14a.5.5 0 00.5-.5V9a.5.5 0 00-.5-.5zM2.75 20.25v3h-1v-3h1zm28 0v3h-1v-3h1zm-12.017-8.483a1.5 1.5 0 011.5 1.5v5.466a1.5 1.5 0 01-1.5 1.5h-5.466a1.5 1.5 0 01-1.5-1.5v-5.466a1.5 1.5 0 011.5-1.5h5.466zM2.75 16.25v3h-1v-3h1zm28 0v3h-1v-3h1zm-12.017-3.483h-5.466a.5.5 0 00-.5.5v5.466a.5.5 0 00.5.5h5.466a.5.5 0 00.5-.5v-5.466a.5.5 0 00-.5-.5zm12.017-.517v3h-1v-3h1zm-28 0v3h-1v-3h1zm28-4v3h-1v-3h1zm-28 0v3h-1v-3h1zM29.333.033a2.634 2.634 0 011.418 4.854L30.75 7.25h-1V5.267A2.634 2.634 0 0126.721 3H24.5V2h2.285A2.635 2.635 0 0129.333.033zm-26.666 0C3.89.033 4.92.868 5.215 2H7.5v1H5.28a2.636 2.636 0 01-2.53 2.299V7.25h-1V5.136A2.635 2.635 0 012.666.033zm26.666 1a1.634 1.634 0 10.001 3.267 1.634 1.634 0 00-.001-3.267zm-26.666 0a1.635 1.635 0 00-.404 3.217h.487v.045l.058-.001a1.633 1.633 0 00-.141-3.261zM11.5 2v1h-3V2h3zm4 0v1h-3V2h3zm4 0v1h-3V2h3zm4 0v1h-3V2h3z'/%3E%3C/svg%3E",
	"component-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M23 0a2 2 0 012 2v2h1.5A1.5 1.5 0 0128 5.5V7h2a2 2 0 110 4h-2v3h2a2 2 0 110 4h-2v3h2a2 2 0 110 4h-2v1.5a1.5 1.5 0 01-1.5 1.5H25v2a2 2 0 11-4 0v-2h-3v2a2 2 0 11-4 0v-2h-3v2a2 2 0 11-4 0v-2H5.5A1.5 1.5 0 014 26.5V25H2a2 2 0 110-4h2v-3H2a2 2 0 110-4h2v-3H2a2 2 0 110-4h2V5.5A1.5 1.5 0 015.5 4H7V2a2 2 0 114 0v2h3V2a2 2 0 114 0v2h3V2a2 2 0 012-2zm-6 28h-2v2a1 1 0 002 0v-2zm7 0h-2v2a1 1 0 002 0v-2zm-14 0H8v2a1 1 0 002 0v-2zM26.5 5h-21a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-21a.5.5 0 00-.5-.5zM28 24h2a1 1 0 000-2h-2v2zM4 22H2a1 1 0 000 2h2v-2zm16.5-12a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h9zm0 1h-9a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm9.5 4h-2v2h2a1 1 0 000-2zM4 15H2a1 1 0 000 2h2v-2zm26-7h-2v2h2a1 1 0 000-2zM4 8H2a1 1 0 000 2h2V8zm5-7a1 1 0 00-1 1v2h2V2a1 1 0 00-1-1zm14 0a1 1 0 00-1 1v2h2V2a1 1 0 00-1-1zm-7 0a1 1 0 00-1 1v2h2V2a1 1 0 00-1-1z'/%3E%3C/svg%3E",
	"compute-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M28.467.033a3.5 3.5 0 013.5 3.5v24.934a3.5 3.5 0 01-3.5 3.5H3.533a3.5 3.5 0 01-3.5-3.5V3.533a3.5 3.5 0 013.5-3.5h24.934zm-12.434 17h-15v11.434a2.5 2.5 0 002.5 2.5h12.5V17.032zm14.933 0H17.033v13.933h11.434a2.5 2.5 0 002.5-2.5V17.034zm-6.433 9.634a1.066 1.066 0 11.002 2.132 1.066 1.066 0 01-.002-2.132zM4.087 19.38l3.912 3.912 3.914-3.912a.5.5 0 01.707.707l-3.914 3.912 3.914 3.914a.5.5 0 01-.707.707L8 24.706 4.087 28.62a.5.5 0 01-.707-.707L7.292 24 3.38 20.087a.5.5 0 01.707-.707zm25.246 4.12a.5.5 0 010 1h-9.6a.5.5 0 010-1h9.6zm-4.8-4.3a1.067 1.067 0 110 2.133 1.067 1.067 0 010-2.133zm-8.5-18.168l-12.5.001a2.5 2.5 0 00-2.5 2.5v12.5h15v-15zm12.434.001H17.033v15h13.933v-12.5a2.5 2.5 0 00-2.5-2.5zM8 2.167a.5.5 0 01.5.5v4.832l4.833.001a.5.5 0 010 1H8.5l.001 4.833a.5.5 0 01-1 0V8.5H2.666a.5.5 0 010-1h4.832L7.5 2.666a.5.5 0 01.5-.5zM28.267 7.5a.5.5 0 010 1h-8.534a.5.5 0 010-1h8.534z'/%3E%3C/svg%3E",
	"computer-curve-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.5 2A1.5 1.5 0 0132 3.5v19a1.5 1.5 0 01-1.5 1.5h-9.665l1.366 5H23.5a.5.5 0 010 1h-15a.5.5 0 010-1h1.298l1.366-5H1.5A1.5 1.5 0 010 22.5v-19A1.5 1.5 0 011.5 2h29zM19.798 24h-7.597l-1.367 5h10.331l-1.367-5zM31 19H1v3.5a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V19zm-.5-16h-29a.5.5 0 00-.5.5V18h30V3.5a.5.5 0 00-.5-.5zm-5.01 2c.4-.003.784.154 1.067.436a1.5 1.5 0 01-1.513 2.494l-3.22 3.864a1.5 1.5 0 11-2.824.732l-4.417-1.989a1.491 1.491 0 01-1.729.317L8.857 14.86a1.5 1.5 0 11-.707-.711l3.997-4.001A1.5 1.5 0 1115 9.5l-.006.125 4.326 1.949a1.496 1.496 0 011.764-.456l3.162-3.795A1.5 1.5 0 0125.49 5z'/%3E%3C/svg%3E",
	"computer-floppy-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.5 2A1.5 1.5 0 0132 3.5v19a1.5 1.5 0 01-1.5 1.5h-9.665l1.366 5H23.5a.5.5 0 010 1h-15a.5.5 0 010-1h1.576l.833-5H1.5A1.5 1.5 0 010 22.5v-19A1.5 1.5 0 011.5 2h29zM19.798 24h-7.875l-.833 5h10.075l-1.367-5zM30.5 3h-29a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h29a.5.5 0 00.5-.5v-19a.5.5 0 00-.5-.5zM19.607 7a1.51 1.51 0 011.096.468l.877.985A1.5 1.5 0 0122 9.5v8a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 0111.5 7h8.107zM13 7.999L11.5 8a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V9.497c0-.13-.05-.256-.153-.365l-.874-.982A.505.505 0 0019.61 8L19 7.999V10.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V7.999zM19.5 12a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h7zm-.5 1h-6v3h6v-3zm-1-5.001h-4V10h4V7.999z'/%3E%3C/svg%3E",
	"computer-folder-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.5 2A1.5 1.5 0 0132 3.5v19a1.5 1.5 0 01-1.5 1.5h-9.665l1.366 5H23.5a.5.5 0 010 1h-15a.5.5 0 010-1h1.298l1.366-5H1.5A1.5 1.5 0 010 22.5v-19A1.5 1.5 0 011.5 2h29zM19.798 24h-7.597l-1.367 5h10.331l-1.367-5zM31 19H1v3.5a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V19zm-.5-16h-29a.5.5 0 00-.5.5V18h30V3.5a.5.5 0 00-.5-.5zm-17 3c.133 0 .26.053.354.146l.853.854H21.5a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h3zm-.207 1H11v7h10V8h-6.5a.504.504 0 01-.354-.146L13.293 7z'/%3E%3C/svg%3E",
	"computer-laptop-cloud-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M28.5 6A1.5 1.5 0 0130 7.5V23h1.5a.5.5 0 01.5.5v2a1.5 1.5 0 01-1.5 1.5h-29A1.5 1.5 0 010 25.5v-2a.5.5 0 01.5-.5H2V7.5A1.5 1.5 0 013.5 6h25zM31 24H1v1.5a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V24zM28.5 7h-25a.5.5 0 00-.5.5V23h26V7.5a.5.5 0 00-.5-.5zm-9.796 4.682a3.964 3.964 0 012.749 3.501 3.276 3.276 0 012.02 3.455 3.26 3.26 0 01-3.19 2.862h-7.571a3.26 3.26 0 01-3.186-2.862 3.278 3.278 0 012.018-3.453 2.57 2.57 0 012.555-2.315c.14.001.279.015.416.04a3.92 3.92 0 014.19-1.228zm-3.582 2.078a.499.499 0 01-.567.188 1.55 1.55 0 00-.462-.078c-.862 0-1.563.706-1.563 1.58v.098a.5.5 0 01-.368.482 2.275 2.275 0 00-1.644 2.483 2.258 2.258 0 002.2 1.987h7.558a2.26 2.26 0 002.206-1.987 2.275 2.275 0 00-1.612-2.474.5.5 0 01-.407-.491v-.095a2.965 2.965 0 00-2.06-2.817 2.92 2.92 0 00-3.28 1.124zM16.5 8a.5.5 0 010 1h-1a.5.5 0 010-1h1z'/%3E%3C/svg%3E",
	"computer-laptop-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M28.5 6A1.5 1.5 0 0130 7.5V23h1.5a.5.5 0 01.5.5v2a1.5 1.5 0 01-1.5 1.5h-29A1.5 1.5 0 010 25.5v-2a.5.5 0 01.5-.5H2V7.5A1.5 1.5 0 013.5 6h25zM31 24H1v1.5a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V24zM28.5 7h-25a.5.5 0 00-.5.5V23h26V7.5a.5.5 0 00-.5-.5zm-12 1a.5.5 0 010 1h-1a.5.5 0 010-1h1z'/%3E%3C/svg%3E",
	"computer-v-r-ops-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.5 2A1.5 1.5 0 0132 3.5v19a1.5 1.5 0 01-1.5 1.5h-9.665l1.366 5H23.5a.5.5 0 010 1h-15a.5.5 0 010-1h1.298l1.366-5H1.5A1.5 1.5 0 010 22.5v-19A1.5 1.5 0 011.5 2h29zM19.798 24h-7.597l-1.367 5h10.331l-1.367-5zM31 19H1v3.5a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V19zm-.5-16h-29a.5.5 0 00-.5.5V18h30V3.5a.5.5 0 00-.5-.5zm-4 2a1.5 1.5 0 11-.646 2.854l-4 4a1.5 1.5 0 11-2.843.461l-5.47-2.735a1.496 1.496 0 01-1.687.274l-4 4a1.5 1.5 0 11-.708-.708l4-4a1.5 1.5 0 112.843-.461l5.47 2.735a1.496 1.496 0 011.687-.274l4-4A1.5 1.5 0 0126.5 5z'/%3E%3C/svg%3E",
	"computer-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.5 2A1.5 1.5 0 0132 3.5v19a1.5 1.5 0 01-1.5 1.5h-9.665l1.366 5H23.5a.5.5 0 010 1h-15a.5.5 0 010-1h1.298l1.366-5H1.5A1.5 1.5 0 010 22.5v-19A1.5 1.5 0 011.5 2h29zm-9.335 27l-1.367-5h-7.597l-1.367 5h10.331zM31 19H1v3.5a.5.5 0 00.5.5h29a.5.5 0 00.5-.5V19zm-.5-16h-29a.5.5 0 00-.5.5V18h30V3.5a.5.5 0 00-.5-.5z'/%3E%3C/svg%3E",
	"container-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M31.477 17.1a.51.51 0 01.51.51v13.867a.51.51 0 01-.51.51H.544a.51.51 0 01-.51-.51V17.611a.51.51 0 01.51-.51h30.933zm-.51 1.02H1.054v12.847h29.913V18.121zm-3.756 2.19a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0v-7.466a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0v-7.466a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0v-7.466a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0v-7.466a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0v-7.466a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0v-7.466a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0v-7.466a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0v-7.466a.5.5 0 01.5-.5zM31.477.035a.51.51 0 01.51.51v13.867a.51.51 0 01-.51.51H.544a.51.51 0 01-.51-.51V.544a.51.51 0 01.51-.51h30.933zm-.51 1.02H1.054v12.847h29.913V1.054zm-3.756 2.19a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0V3.744a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0V3.744a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0V3.744a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0V3.744a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0V3.744a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0V3.744a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0V3.744a.5.5 0 01.5-.5zm-3.2 0a.5.5 0 01.5.5v7.467a.5.5 0 01-1 0V3.744a.5.5 0 01.5-.5z'/%3E%3C/svg%3E",
	"counter-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M25.026 8.809a16 16 0 016.571 16.803.5.5 0 01-.487.388H.9a.499.499 0 01-.487-.388A16 16 0 0125.026 8.809zm-17.478.826A14.999 14.999 0 001.303 25h29.404A14.999 14.999 0 007.548 9.635zM19.5 18.45c.39.39-2.44 3.86-2.83 4.24a1 1 0 01-1.41-1.41c.39-.39 3.85-3.22 4.24-2.83zm8 2.55a.5.5 0 010 1h-2.48a.5.5 0 010-1h2.48zM7 21a.5.5 0 010 1H4.5a.5.5 0 010-1H7zm-.006-6.664l2.02 1.47a.5.5 0 11-.588.808l-2.02-1.47a.5.5 0 11.588-.808zm18.71.11a.5.5 0 01-.11.698l-2.02 1.47a.5.5 0 11-.588-.808l2.02-1.47a.5.5 0 01.698.11zm-6-4.362a.5.5 0 01.322.63l-.77 2.38a.5.5 0 11-.952-.308l.77-2.38a.5.5 0 01.63-.322zm-6.778.322l.77 2.37a.501.501 0 01-.952.308l-.77-2.37a.501.501 0 01.952-.308z'/%3E%3C/svg%3E",
	"credit-card-clock-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M21.334.033a10.632 10.632 0 0110.45 8.709c.27 1.457.226 2.909-.087 4.281l-.063-.153c.218.48.332 1.002.333 1.53v13.867a3.7 3.7 0 01-3.7 3.7H3.733a3.7 3.7 0 01-3.7-3.7V14.4a3.7 3.7 0 013.7-3.7h6.96a10.633 10.633 0 013.092-7.53l-2.584.007a.5.5 0 11-.002-1l4.266-.01a.5.5 0 01.502.5l-.011 4.268a.5.5 0 01-1-.002l.009-3.51a.6.6 0 01-.06.064A9.633 9.633 0 0021.201 20.3h.316a9.632 9.632 0 009.284-11.377c-.84-4.569-4.822-7.887-9.45-7.89l-.62.021a.499.499 0 11-.034-.999l.637-.022zm3.785 20.568a10.63 10.63 0 01-3.939.7l-20.147-.002v6.968c0 1.49 1.21 2.7 2.7 2.7h24.534c1.49 0 2.7-1.21 2.7-2.7V15.156a10.621 10.621 0 01-5.848 5.445zM4.8 25.633a.5.5 0 01.5.5v2.134a.5.5 0 01-1 0v-2.134a.5.5 0 01.5-.5zm4.267 0a.5.5 0 01.5.5v2.134a.5.5 0 01-1 0v-2.134a.5.5 0 01.5-.5zm4.266 0a.5.5 0 01.5.5v2.134a.5.5 0 01-1 0v-2.134a.5.5 0 01.5-.5zm-1.225-9.667H1.033V20.3l15.792.001a10.602 10.602 0 01-4.578-4.1l-.139-.234zM10.743 11.7h-7.01a2.7 2.7 0 00-2.7 2.7v.566l10.569.001a10.604 10.604 0 01-.859-3.267zM20.8 4.3a.5.5 0 01.5.5v5.9h3.767a.5.5 0 010 1H20.8a.5.5 0 01-.5-.5V4.8a.5.5 0 01.5-.5z'/%3E%3C/svg%3E",
	"credit-card-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M28.5 5A3.5 3.5 0 0132 8.5v15a3.5 3.5 0 01-3.5 3.5h-25A3.5 3.5 0 010 23.5v-15A3.5 3.5 0 013.5 5h25zM31 15H1v8.5A2.5 2.5 0 003.5 26h25a2.5 2.5 0 002.5-2.5V15zM4.5 21a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM31 10H1v4h30v-4zm-2.5-4h-25A2.5 2.5 0 001 8.5V9h30v-.5A2.5 2.5 0 0028.5 6z'/%3E%3C/svg%3E",
	"curve-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M11 8a5.5 5.5 0 015.496 5.279l.004.221a5.467 5.467 0 01-.745 2.765l3.89 2.764a1.997 1.997 0 012.31-.287l6.38-7.132A2.003 2.003 0 0130 8.5a2 2 0 11-.92 3.777l-6.393 7.148a2 2 0 11-3.585.444l-3.927-2.789A5.487 5.487 0 0111 19a5.479 5.479 0 01-3.52-1.273l-3.757 3.757a2 2 0 11-.707-.707l3.757-3.757A5.5 5.5 0 0111 8zm0 7.5a1.99 1.99 0 01-1.016-.277L8.19 17.016c.77.616 1.747.984 2.809.984 1.334 0 2.532-.58 3.356-1.502l-2.067-1.469a1.99 1.99 0 01-1.289.471zM11 9a4.5 4.5 0 00-3.516 7.309l1.793-1.793a2 2 0 113.592-.301l2.067 1.468a4.49 4.49 0 00.56-1.971l.004-.212A4.5 4.5 0 0011 9z'/%3E%3C/svg%3E",
	"database-cold-archive-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M25.182 12.81a.5.5 0 01.678-.199c1.288.704 2.052 1.553 2.133 2.51l.007.17v11.988c0 2.697-5.454 4.722-12 4.722-6.545 0-12-2.025-12-4.721V15.29c0-1.026.78-1.938 2.144-2.67a.5.5 0 11.473.881C5.544 14.078 5 14.71 5 15.29 5 17.16 9.972 19 16 19s11-1.84 11-3.71c0-.579-.542-1.213-1.62-1.803a.5.5 0 01-.198-.678zM5 23.2v4.08C5 29.151 9.977 31 16 31c6.024 0 11-1.848 11-3.72l.002-4.077C25.138 24.884 20.874 26 16 26c-4.867 0-9.135-1.12-11-2.8zm22.002-5.997C25.138 18.884 20.874 20 16 20c-4.872 0-9.135-1.116-11-2.796v4.085C5 23.154 9.98 25 16 25c6.028 0 11-1.84 11-3.71zM15.996 0c.275 0 .5.225.5.5v2.498L18.596.2a.499.499 0 11.8.6l-2.9 3.865v2.471l2.133-1.232 1.906-4.442a.501.501 0 01.657-.262c.255.11.372.403.262.657L20.076 5.07l2.17-1.252a.5.5 0 11.5.867L20.584 5.93l3.47.412a.501.501 0 01-.117.994l-4.8-.57L17 7.998l2.137 1.234 4.8-.57a.498.498 0 01.554.438.499.499 0 01-.436.555l-3.471.412 2.162 1.248a.502.502 0 01-.5.867l-2.16-1.246 1.37 3.207a.5.5 0 01-.921.393l-1.893-4.435-2.146-1.239v2.457l2.9 3.88a.5.5 0 01-.8.6l-2.1-2.809v2.51a.5.5 0 01-1 0v-2.487l-2.09 2.787a.5.5 0 01-.8-.602l2.89-3.854V8.87l-2.126 1.228-1.905 4.44a.5.5 0 01-.919-.394l1.378-3.212-2.168 1.253a.5.5 0 11-.5-.868l2.162-1.248-3.471-.412a.5.5 0 11.118-.992l4.8.569L14.999 8l-2.138-1.233-4.796.57a.5.5 0 11-.118-.992l3.468-.413-2.16-1.247A.504.504 0 019.072 4a.502.502 0 01.684-.183l2.159 1.248-1.37-3.208a.501.501 0 01.921-.392l1.893 4.433 2.136 1.233V4.665L12.605.8a.5.5 0 01.801-.6l2.09 2.797V.498a.5.5 0 01.5-.5z'/%3E%3C/svg%3E",
	"database-sql-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M23.618 8.78c2.058.501 3.281 1.167 3.376 2.107l.006.12V29c0 1.835-4.89 3-11 3-6.14 0-11-1.152-11-3V11.007C5 10.01 6.251 9.3 8.382 8.781a.5.5 0 01.236.971C6.944 10.16 6 10.696 6 11.006c0 .33.968.874 2.702 1.284 1.915.454 4.521.715 7.298.715 2.769 0 5.376-.264 7.298-.722 1.73-.412 2.702-.956 2.702-1.277 0-.316-.934-.844-2.618-1.254a.5.5 0 11.236-.971zM16 26.013c-4.474 0-8.271-.617-10-1.667V29c0 .33.968.873 2.702 1.284C10.617 30.74 13.223 31 16 31c2.769 0 5.376-.264 7.298-.722C25.028 29.866 26 29.322 26 29l.002-4.662C24.27 25.391 20.466 26.012 16 26.012zm0-5.999c-4.474 0-8.271-.616-10-1.667v4.657c0 .331.967.876 2.698 1.29 1.917.456 4.523.719 7.302.719 2.775 0 5.382-.265 7.301-.724 1.73-.413 2.699-.959 2.699-1.285l.002-4.662C24.27 19.393 20.466 20.013 16 20.013zm0-6.008c-4.476 0-8.272-.612-10-1.66v4.66c0 .33.967.876 2.698 1.289 1.917.457 4.523.72 7.302.72 2.775 0 5.382-.265 7.301-.724 1.73-.413 2.699-.959 2.699-1.286l.002-4.668c-1.733 1.048-5.543 1.67-10.002 1.67zM16 .01c2 0 3.37 1.53 3.37 4 0 2.268-1.11 3.778-2.78 4.068a2.002 2.002 0 001.93 1c.272.013.544-.01.81-.07l.19.8c-.365.12-.746.18-1.13.18a3.001 3.001 0 01-2.9-1.86c-1.71-.24-2.87-1.76-2.87-4.119C12.62 1.528 14 .01 16 .01zm-7 0a3.21 3.21 0 012.35 1l-.53.65A2.531 2.531 0 009 .89c-.85 0-1.44.44-1.44 1.12 0 .68.7 1 1.31 1.31l1.13.5a2.189 2.189 0 011.62 2.099c0 1.25-1 2.239-2.69 2.239a3.791 3.791 0 01-2.75-1.15l.6-.7a3.06 3.06 0 002.22.98c1 0 1.64-.52 1.64-1.28s-.64-1.06-1.36-1.39l-1.13-.499a2.231 2.231 0 01-1.6-2A2.25 2.25 0 019 .009zm13.01.14v7.018h3.43v.85H21V.149h1.01zM16 .89c-1.39 0-2.34 1.21-2.34 3.12 0 1.909.92 3.278 2.34 3.278 1.4 0 2.33-1.27 2.33-3.239 0-1.97-.94-3.159-2.33-3.159z'/%3E%3C/svg%3E",
	"database-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0c8.865 0 15.752 1.507 15.962 3.888l.005.112v24c0 2.392-7.092 4-15.967 4C7.093 32 .033 30.405.033 28V4c0-2.405 7.06-4 15.967-4zm14.968 21.474C28.716 23.029 22.896 24 16 24c-6.916 0-12.719-.962-14.967-2.518V28c0 1.469 6.78 3 14.967 3 8.158 0 14.967-1.544 14.967-3v-6.526zm0-8C28.716 15.029 22.896 16 16 16c-6.916 0-12.719-.962-14.967-2.518V20c0 1.469 6.78 3 14.967 3 8.158 0 14.967-1.544 14.967-3v-6.526zM16 8C9.084 8 3.281 7.038 1.033 5.482V12c0 1.469 6.78 3 14.967 3 8.158 0 14.967-1.544 14.967-3V5.474C28.717 7.029 22.898 8 16 8zm0-7C7.813 1 1.033 2.531 1.033 4S7.813 7 16 7c8.158 0 14.967-1.544 14.967-3 0-1.507-6.69-3-14.967-3z'/%3E%3C/svg%3E",
	"datacenter-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M28.5 0a.5.5 0 01.5.5v31a.5.5 0 01-.5.5h-25a.5.5 0 01-.5-.5V.5a.5.5 0 01.5-.5h25zM28 1H4v30h24V1zm-3.5 2A1.5 1.5 0 0126 4.5v6c0 .385-.145.736-.383 1.001.239.264.383.615.383.999v6c0 .385-.145.736-.383 1.001.239.264.383.615.383.999v6a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 016 26.5v-6c0-.384.144-.735.382-1a1.493 1.493 0 01-.382-1v-6c0-.384.144-.735.382-1a1.493 1.493 0 01-.382-1v-6A1.5 1.5 0 017.5 3h17zm0 17h-17a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5zM22 22a1 1 0 110 2 1 1 0 010-2zm2.5-10h-17a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5zM22 14a1 1 0 110 2 1 1 0 010-2zm2.5-10h-17a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5zM22 6a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E",
	"device-mobile-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M21.5 0A3.5 3.5 0 0125 3.5v25a3.5 3.5 0 01-3.5 3.5h-11A3.5 3.5 0 017 28.5v-25A3.5 3.5 0 0110.5 0h11zM24 26H8v2.5a2.5 2.5 0 002.5 2.5h11a2.5 2.5 0 002.5-2.5V26zm-7.5 2a.5.5 0 010 1h-1a.5.5 0 010-1h1zm5-27h-11A2.5 2.5 0 008 3.5V25h16V3.5A2.5 2.5 0 0021.5 1z'/%3E%3C/svg%3E",
	"device-tablet-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M24.5 0A3.5 3.5 0 0128 3.5v25a3.5 3.5 0 01-3.5 3.5h-17A3.5 3.5 0 014 28.5v-25A3.5 3.5 0 017.5 0h17zM27 26H5v2.5A2.5 2.5 0 007.5 31h17a2.5 2.5 0 002.5-2.5V26zm-10.5 2a.5.5 0 010 1h-1a.5.5 0 010-1h1zm8-27h-17A2.5 2.5 0 005 3.5V25h22V3.5A2.5 2.5 0 0024.5 1z'/%3E%3C/svg%3E",
	"diamond-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M25.249 3.5l6.705 8.87L16 29.24.046 12.37 6.75 3.5h18.5zm-13.873 9.333H1.86l13.215 13.974-3.309-13.25-.391-.724zm18.763 0h-9.453l-.39.724-3.288 13.161 13.13-13.885zm-10.59 0h-7.036l.164.304.045.117 3.309 13.251 3.31-13.251.044-.117.164-.304zM7.028 4.791l-5.323 7.042h9.13L7.028 4.791zm17.98.048l-3.781 6.994h9.068l-5.287-6.994zm-8.97.304l-3.101 6.69h6.51l-3.409-6.69zm-.805-.643H8.007l3.89 7.196L15.234 4.5zm8.82 0h-7.22l3.504 6.876L24.054 4.5z'/%3E%3C/svg%3E",
	"different-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='30' viewBox='0 0 32 30'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M21.677.033a.498.498 0 01.29.644L18.81 9H31.5a.5.5 0 010 1H18.431l-3.793 10H31.5a.5.5 0 010 1H14.258l-3.29 8.677a.5.5 0 11-.935-.354L13.189 21H.5a.5.5 0 010-1h13.068l3.793-10H.5a.5.5 0 010-1h17.24L21.033.323a.498.498 0 01.644-.29z'/%3E%3C/svg%3E",
	"dns-anycast-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.651 1.14A13.5 13.5 0 0127.992 14H29.5a1.5 1.5 0 011.5 1.5v14a1.5 1.5 0 01-1.5 1.5h-20A1.5 1.5 0 018 29.5v-3.202l-.017-.008A13.5 13.5 0 0116.65 1.14zM29.5 15h-20a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h20a.5.5 0 00.5-.5v-14a.5.5 0 00-.5-.5zm-3.64 6.01c.369 0 .734.078 1.07.23.336.148.639.362.89.63l-.57.76a2.83 2.83 0 00-.64-.42 1.73 1.73 0 00-.74-.15 1.16 1.16 0 00-.73.21.699.699 0 00-.27.58.64.64 0 00.08.34.907.907 0 00.22.25c.103.078.213.145.33.2l.38.17.87.38c.183.08.357.176.52.29.15.107.286.235.4.38.117.15.209.32.27.5.054.209.075.425.06.64 0 .265-.055.527-.16.77-.104.24-.257.454-.45.63-.21.189-.454.335-.72.43-.32.116-.66.17-1 .16-.427 0-.849-.09-1.24-.26a3.214 3.214 0 01-1.01-.73l.66-.81c.227.226.491.412.78.55.273.136.574.208.88.21.296.021.59-.064.83-.24a.79.79 0 000-1.23 1.69 1.69 0 00-.31-.2l-.39-.19-.87-.39a2.892 2.892 0 01-.46-.26 2.003 2.003 0 01-.41-.37 1.748 1.748 0 01-.3-.51 1.83 1.83 0 01-.11-.66 1.747 1.747 0 01.16-.75c.106-.227.255-.43.44-.6.198-.177.429-.313.68-.4.276-.097.567-.145.86-.14zm-7.42.11l2 3.8.65 1.43c0-.353-.03-.73-.09-1.13a3.76 3.76 0 010-1.16v-2.94h1v6.75h-1.11l-2-3.8-.65-1.43c0 .36.06.73.09 1.13.03.4.05.78.05 1.16v3h-1.1v-6.81h1.16zM15 22c.595.695.89 1.598.82 2.51.009.501-.062 1-.21 1.48A2.85 2.85 0 0115 27a2.492 2.492 0 01-1 .65 3.485 3.485 0 01-1.27.22H11v-6.75h1.7A2.997 2.997 0 0115 22zm-2.38.09h-.5v4.81h.51c.56.035 1.106-.18 1.49-.59a2.74 2.74 0 00.52-1.84 2.611 2.611 0 00-.53-1.81 1.928 1.928 0 00-1.49-.57zM7.621 21H3.842a12.461 12.461 0 004.157 4.144v-3.057l-.147-.4a19.082 19.082 0 01-.23-.687zm-.97-6H2.01a12.53 12.53 0 001.28 5h4.043a20.881 20.881 0 01-.682-5zm1.435 0H7.65a19.99 19.99 0 00.348 3.414L8 15.5c0-.176.03-.344.086-.5zm3.414 2a.5.5 0 110 1 .5.5 0 010-1zm2 0a.5.5 0 110 1 .5.5 0 010-1zm2 0a.5.5 0 110 1 .5.5 0 010-1zM7.321 8.999H3.258A12.585 12.585 0 002.007 14h4.648c.037-1.774.27-3.462.666-5.001zm6.678 0H8.356a20.954 20.954 0 00-.7 5h6.343V9zm6.645 0H15v5h6.346a20.954 20.954 0 00-.7-5zm5.098 0h-4.063c.395 1.539.629 3.227.666 5h4.646a12.465 12.465 0 00-1.249-5zM10.867 2.507l-.044.013c-2.9.895-5.42 2.83-7.021 5.48h3.805c.742-2.34 1.875-4.26 3.26-5.494zM8.661 7.999h5.338V2.034c-2.229.303-4.204 2.608-5.338 5.965zM15 2.034v5.965h5.34C19.206 4.642 17.23 2.336 15 2.034zm3.134.472l.025.023C19.532 3.764 20.656 5.675 21.393 8h3.804a12.5 12.5 0 00-7.063-5.494z'/%3E%3C/svg%3E",
	"domains-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31' height='31' viewBox='0 0 31 31'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M.736 28.77c.2-.003.394.08.533.23a.842.842 0 01.223.61.812.812 0 01-.223.59.713.713 0 01-.533.23.735.735 0 01-.543-.23.802.802 0 01-.223-.59.838.838 0 01.223-.61.73.73 0 01.543-.23zm11.985-5.09a2.53 2.53 0 011.057.21c.306.135.575.344.786.61.222.297.383.637.475 1 .115.402.17.82.165 1.24.015.2.015.4 0 .6h-4.228c.024.593.247 1.158.63 1.6.38.406.908.627 1.455.61.28.003.56-.044.824-.14a3.54 3.54 0 00.727-.36l.369.71c-.29.183-.595.337-.912.46a3.087 3.087 0 01-1.144.2 2.96 2.96 0 01-1.173-.23 2.731 2.731 0 01-.97-.66 3.095 3.095 0 01-.63-1.05 4.1 4.1 0 01-.233-1.41h.01c-.01-.484.07-.966.232-1.42.143-.394.357-.757.63-1.07.25-.283.554-.511.893-.67.326-.152.68-.23 1.037-.23zm5.1-1.68v1.8H19.5v.88h-1.677v3.62c-.018.322.056.642.213.92.18.23.461.351.747.32.121 0 .242-.017.359-.05l.349-.12.203.82a5.215 5.215 0 01-.562.16c-.194.047-.392.07-.592.07a1.988 1.988 0 01-.843-.16 1.426 1.426 0 01-.553-.44 1.7 1.7 0 01-.3-.67 4.04 4.04 0 01-.088-.87v-3.55h-.97v-.82l.97-.07.184-1.84h.883zm-9.92 2.32c.341.561.5 1.22.457 1.88v4.07H7.32v-3.93A2.353 2.353 0 007.039 25a1.015 1.015 0 00-.902-.4c-.302-.006-.6.081-.853.25a5.546 5.546 0 00-.844.74v4.65H3.383v-6.4h.873l.087.93c.292-.296.617-.555.97-.77a2.097 2.097 0 011.144-.31 1.652 1.652 0 011.445.63zm4.84.23c-.218 0-.433.048-.63.14a1.74 1.74 0 00-.544.4c-.173.186-.31.403-.407.64a2.99 2.99 0 00-.213.87l3.335-.02a2.432 2.432 0 00-.407-1.51 1.35 1.35 0 00-1.134-.52zm1.28-7.62c.2-.003.394.08.533.23a.846.846 0 01.223.61.816.816 0 01-.223.59.713.713 0 01-.533.23.735.735 0 01-.543-.23.812.812 0 01-.223-.59.838.838 0 01.223-.61.735.735 0 01.543-.23zM17.715 9v3.73c.294-.257.62-.473.97-.64.318-.169.67-.258 1.028-.26.368-.008.732.07 1.066.23.306.153.572.38.776.66.218.3.379.639.475 1 .113.437.168.888.165 1.34.008.499-.064.996-.213 1.47-.13.402-.33.775-.592 1.1a2.5 2.5 0 01-.863.68 2.35 2.35 0 01-1.028.23 2.231 2.231 0 01-.901-.2 3.068 3.068 0 01-.723-.447l-.16-.143-.087.64h-.844L16.668 9h1.047zm7.118 3v6.43h-1.048V12h1.048zm6.06 0v.58l-3.277 4.96H31v.89h-4.722v-.58l3.287-4.96h-2.929V12h4.257zm-11.52.72a2.567 2.567 0 00-1.668.87l.01 3.41c.238.223.515.4.815.52.226.092.465.142.708.15.246 0 .49-.061.707-.18.222-.122.414-.292.563-.5a2.46 2.46 0 00.368-.8c.095-.348.14-.708.136-1.07a4.794 4.794 0 00-.087-1 2.186 2.186 0 00-.291-.75 1.392 1.392 0 00-.514-.48 1.542 1.542 0 00-.747-.17zm5.47-3.25c.142.128.22.315.213.51a.662.662 0 01-.214.5.73.73 0 01-.523.2.727.727 0 01-.514-.2.658.658 0 01-.213-.5.647.647 0 01.213-.51.794.794 0 011.037 0zM12.372.23c.345.15.656.376.91.66.284.322.501.7.64 1.11.167.457.25.942.243 1.43.006.485-.077.966-.242 1.42-.14.393-.355.753-.63 1.06a2.698 2.698 0 01-.912.66 2.825 2.825 0 01-2.192 0 2.694 2.694 0 01-.911-.66 3.181 3.181 0 01-.63-1.06 3.986 3.986 0 01-.233-1.42l-.02-.04A4.054 4.054 0 018.628 2c.14-.41.357-.788.64-1.11a2.64 2.64 0 01.912-.66 2.823 2.823 0 012.191 0zM.735 5.08c.2-.003.394.08.533.23a.842.842 0 01.223.61.812.812 0 01-.223.59.713.713 0 01-.533.23.73.73 0 01-.543-.23.802.802 0 01-.223-.59.838.838 0 01.223-.61.735.735 0 01.543-.23zM6.874.23c.278.142.536.324.766.54l-.524.7a2.934 2.934 0 00-.581-.41 1.43 1.43 0 00-.68-.16 1.727 1.727 0 00-1.396.69c-.18.236-.318.504-.407.79-.1.323-.149.66-.145 1-.006.339.04.676.135 1 .084.279.215.54.388.77.164.213.373.384.611.5a1.82 1.82 0 001.6 0 2.98 2.98 0 00.65-.46l.436.72a3.379 3.379 0 01-.97.61 2.683 2.683 0 01-.97.22 2.97 2.97 0 01-1.153-.23 2.572 2.572 0 01-.97-.66 3.108 3.108 0 01-.61-1.06 4.2 4.2 0 01-.224-1.42l-.01.02c-.002-.475.08-.946.243-1.39.142-.411.363-.79.65-1.11a2.71 2.71 0 01.97-.66c.35-.147.726-.225 1.105-.23a2.26 2.26 0 011.086.23zM23.94.64c.348.558.511 1.218.465 1.88v4.07H23.36V2.66a2.35 2.35 0 00-.281-1.32.958.958 0 00-.873-.4 2.307 2.307 0 00-1.561 1v4.65h-1.057V2.66c.037-.46-.061-.92-.282-1.32a.957.957 0 00-.911-.4 2.307 2.307 0 00-1.561 1v4.65h-1.028V.16h.873l.087.93c.262-.297.562-.556.892-.77A1.897 1.897 0 0118.744 0c.4-.026.795.086 1.125.32.28.236.486.553.591.91.287-.337.612-.636.97-.89.321-.222.7-.34 1.086-.34a1.66 1.66 0 011.426.64zm-13.402.44a1.674 1.674 0 00-.572.51 2.514 2.514 0 00-.368.79c-.087.326-.13.662-.126 1l.039.05c-.005.338.038.675.126 1 .077.277.201.538.368.77.151.21.347.38.572.5.46.239 1.004.239 1.464 0 .225-.12.421-.29.573-.5.166-.232.291-.493.368-.77.088-.325.13-.662.126-1a3.788 3.788 0 00-.126-1 2.501 2.501 0 00-.407-.84 1.674 1.674 0 00-.572-.51 1.586 1.586 0 00-1.465 0z'/%3E%3C/svg%3E",
	"download-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M11.2 7.5a.5.5 0 010 1H2.266a1.214 1.214 0 00-.865.346 1.21 1.21 0 00-.368.85v20.068a1.217 1.217 0 001.239 1.203h27.462c.323.004.634-.12.865-.346.232-.226.364-.534.368-.85V9.702A1.217 1.217 0 0029.728 8.5h-7.861a.5.5 0 010-1h7.855a2.222 2.222 0 011.576.63c.42.41.661.972.669 1.566v20.08a2.215 2.215 0 01-.67 1.56c-.42.411-.987.638-1.569.63H2.278a2.213 2.213 0 01-2.245-2.195V9.69A2.217 2.217 0 012.272 7.5H11.2zM16.533.033a.5.5 0 01.5.5v14.781l3.413-3.412a.502.502 0 01.708.708l-4.267 4.266a.5.5 0 01-.707 0l-4.267-4.266a.5.5 0 01.707-.708l3.413 3.414V.533a.5.5 0 01.5-.5z'/%3E%3C/svg%3E",
	"dslam-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M9.56 20.3a2.892 2.892 0 012 .83l-.6.74a2.112 2.112 0 00-1.42-.56c-.62 0-1 .29-1 .77 0 .48.5.7 1 .92l.88.37a1.82 1.82 0 011.32 1.77 2.08 2.08 0 01-2.35 1.94 3.359 3.359 0 01-2.35-1l.69-.71a2.61 2.61 0 001.71.74c.73 0 1.14-.33 1.14-.84s-.42-.71-1-1l-.89-.39a1.87 1.87 0 01-1.32-1.74c.04-.537.296-1.035.708-1.38a1.995 1.995 0 011.482-.46zm-4.184 1.009A2.89 2.89 0 016.18 23.7C6.18 25.87 5 27 3 27H1.25v-6.54H3a2.89 2.89 0 012.376.849zm8.894-.849v5.56h2.71V27h-3.87v-6.54h1.16zm6.98 0L23.38 27h-1.23l-.51-1.77h-2.19L18.94 27h-1.19l2.14-6.54h1.36zm4.44 0l1.18 3.22.43 1.24.43-1.24 1.15-3.22h1.28V27H29.1v-3c0-.508.063-1.197.118-1.76l.032-.32-.53 1.49-1.13 3H27l-1.13-3-.52-1.49c.05.6.14 1.47.14 2.08v3h-1.07v-6.54h1.27zm-22.77.94h-.5v4.66h.49c1.32 0 2.09-.75 2.09-2.36 0-1.61-.76-2.3-2.08-2.3zm17.64-.04c-.18.73-.37 1.47-.58 2.16l-.23.8h1.63l-.23-.8c-.133-.46-.267-.947-.397-1.433l-.193-.727zM30.5 5A1.5 1.5 0 0132 6.5v7a1.5 1.5 0 01-1.5 1.5h-29A1.5 1.5 0 010 13.5v-7A1.5 1.5 0 011.5 5h29zm0 1h-29a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h29a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zM4 9a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm8 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zM16 9a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E",
	"envelop-letter-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M26.5 3a.5.5 0 01.5.5V7h3.5A1.5 1.5 0 0132 8.5v19a1.5 1.5 0 01-1.5 1.5h-29A1.5 1.5 0 010 27.5v-19A1.5 1.5 0 011.5 7H5V3.5a.5.5 0 01.5-.5h21zM11.731 17.975L1.706 28h28.587L20.272 17.979l-2.862 2.487a2.13 2.13 0 01-2.808.002l-2.871-2.493zM31 8.661l-9.972 8.66L31 27.293V8.661zM1 8.662v18.63l9.974-9.974L1 8.662zM26 4H6v7.678l9.26 8.036a1.131 1.131 0 001.492-.001L26 11.68V4zm1 6.811L30.237 8H27v2.811zM5 8H1.763L5 10.81V8z'/%3E%3C/svg%3E",
	"envelop-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.5 5A1.5 1.5 0 0132 6.5v19a1.5 1.5 0 01-1.5 1.5h-29A1.5 1.5 0 010 25.5v-19A1.5 1.5 0 011.5 5h29zM11.731 15.975L1.706 26h28.587L20.272 15.979l-2.862 2.487a2.13 2.13 0 01-2.808.002l-2.871-2.493zM31 6.661l-9.972 8.66L31 25.293V6.661zM1 6.662v18.63l9.974-9.974L1 6.662zM30.237 6H1.763L15.26 17.714a1.131 1.131 0 001.492-.001L30.237 6z'/%3E%3C/svg%3E",
	"ethernet-add-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.467.033a1.5 1.5 0 011.5 1.5v28.934a1.5 1.5 0 01-1.5 1.5H1.533a1.5 1.5 0 01-1.5-1.5V1.533a1.5 1.5 0 011.5-1.5h28.934zm0 1H1.533a.5.5 0 00-.5.5v28.934a.5.5 0 00.5.5h28.934a.5.5 0 00.5-.5V1.533a.5.5 0 00-.5-.5zm-8.6 5.4a.5.5 0 01.5.5v5.9H27.2a.5.5 0 01.5.5v6.157A5.832 5.832 0 0124 29.833a5.834 5.834 0 01-5.62-4.266H4.8a.5.5 0 01-.5-.5V13.333a.5.5 0 01.5-.5h4.833v-5.9a.5.5 0 01.5-.5h11.734zM24 19.167a4.833 4.833 0 100 9.665 4.833 4.833 0 000-9.665zm0 2.2a.5.5 0 01.5.5v1.632l1.633.001a.5.5 0 010 1H24.5l.001 1.633a.5.5 0 01-1 0V24.5l-1.633.001a.5.5 0 010-1H23.5l.001-1.633a.5.5 0 01.5-.5zM21.367 7.433H10.633v5.9a.5.5 0 01-.5.5H5.3v10.734h2.2V20.8a.5.5 0 011 0v3.766h2.2V20.8a.5.5 0 011 0v3.766h2.2V20.8a.5.5 0 011 0v3.766h2.2V20.8a.5.5 0 011 0v3.766h.094A5.832 5.832 0 0124 18.167c.974 0 1.892.238 2.7.66v-4.994h-4.833a.5.5 0 01-.5-.5v-5.9z'/%3E%3C/svg%3E",
	"ethernet-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.467.033a1.5 1.5 0 011.5 1.5v28.934a1.5 1.5 0 01-1.5 1.5H1.533a1.5 1.5 0 01-1.5-1.5V1.533a1.5 1.5 0 011.5-1.5h28.934zm0 1H1.533a.5.5 0 00-.5.5v28.934a.5.5 0 00.5.5h28.934a.5.5 0 00.5-.5V1.533a.5.5 0 00-.5-.5zM4.8 25.567a.5.5 0 01-.5-.5V13.333a.5.5 0 01.5-.5h4.833v-5.9a.5.5 0 01.5-.5h11.734a.5.5 0 01.5.5v5.9H27.2a.5.5 0 01.5.5v11.734a.5.5 0 01-.5.5H4.8zM21.367 7.433H10.633v5.9a.5.5 0 01-.5.5H5.3v10.734h2.2V20.8a.5.5 0 011 0v3.766h2.2V20.8a.5.5 0 011 0v3.766h2.2V20.8a.5.5 0 011 0v3.766h2.2V20.8a.5.5 0 011 0v3.766h2.2V20.8a.5.5 0 011 0v3.766h2.2V20.8a.5.5 0 011 0v3.766h2.2V13.834h-4.833a.5.5 0 01-.5-.5v-5.9z'/%3E%3C/svg%3E",
	"expansion-arrows-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M8.377 23.623a.534.534 0 010 .754L1.82 30.933h5.113a.535.535 0 010 1.067H.52a.438.438 0 01-.051-.004L.533 32a.576.576 0 01-.118-.013l-.03-.008a.493.493 0 01-.054-.019l-.029-.013c-.02-.01-.04-.02-.059-.033l-.013-.008-.012-.009a.523.523 0 01-.115-.115l.053.062a.53.53 0 01-.103-.146L.04 31.67l-.02-.054-.007-.03a.471.471 0 01-.009-.052L0 31.48v-6.413a.534.534 0 111.067 0l-.001 5.112 6.557-6.556a.534.534 0 01.754 0zm23.405 8.274l.062-.053a.53.53 0 01-.146.103l-.029.013-.054.02-.03.007a.471.471 0 01-.052.009L31.48 32h-6.413a.534.534 0 110-1.067h5.112l-6.556-6.556a.534.534 0 01.754-.754l6.556 6.556v-5.112a.535.535 0 011.067 0v6.413a.438.438 0 01-.004.051l.004-.065c0 .04-.005.08-.013.118l-.008.03a.493.493 0 01-.019.054l-.013.029c-.01.02-.02.04-.033.059l-.008.013-.009.012a.523.523 0 01-.115.115zM16 8.533a7.467 7.467 0 110 14.934 7.467 7.467 0 010-14.934zM16 9.6c-3.535 0-6.4 2.865-6.4 6.4s2.865 6.4 6.4 6.4 6.4-2.865 6.4-6.4-2.865-6.4-6.4-6.4zM6.933 0a.534.534 0 110 1.067L1.82 1.066l6.557 6.557a.534.534 0 01-.754.754L1.066 1.82v5.113a.533.533 0 11-1.066 0V.52C0 .502.002.485.004.468L0 .533c0-.04.005-.08.013-.118l.008-.03A.597.597 0 01.04.33L.053.302c.01-.02.02-.04.033-.059L.094.23.103.218A.523.523 0 01.218.103L.156.156A.588.588 0 01.302.052L.33.04.385.02l.03-.007.052-.009L.52 0h6.413zm24.534 0h.013c.018 0 .035.002.052.004L31.467 0c.04 0 .08.005.118.013l.03.008a.493.493 0 01.054.019l.029.013c.02.01.04.02.059.033l.013.008.012.009a.523.523 0 01.115.115l-.053-.062a.53.53 0 01.103.146l.013.029.02.054.007.03a.471.471 0 01.009.052L32 .52v6.413a.534.534 0 11-1.067 0V1.82l-6.556 6.557a.534.534 0 01-.754-.754l6.556-6.557h-5.112a.533.533 0 110-1.066h6.4z'/%3E%3C/svg%3E",
	"export-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M21.916 1a2.11 2.11 0 012.085 2.13V8.5A.501.501 0 0123 8.5V3.124a1.114 1.114 0 00-.315-.79A1.113 1.113 0 0021.91 2H3.096A1.108 1.108 0 002 3.13v25.746c-.004.295.11.578.315.79.206.21.487.33.775.334h18.814A1.108 1.108 0 0023 28.87V18.5a.5.5 0 011 0v10.364A2.11 2.11 0 0121.91 31H3.084a2.11 2.11 0 01-2.085-2.13V3.136A2.113 2.113 0 013.09 1h18.826zm4.938 8.146l4 4a.502.502 0 010 .708l-4 4a.502.502 0 01-.708-.708L29.293 14H15.5a.5.5 0 010-1h13.793l-3.147-3.146a.502.502 0 01.708-.708z'/%3E%3C/svg%3E",
	"eye-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.005 6l.032.001.21.003.074.002L16.005 6a19.068 19.068 0 0115.308 7.974 3.428 3.428 0 01.004 4.057A19.079 19.079 0 0115.98 26c-.113 0-.225-.002-.337-.006l.352.006A19.065 19.065 0 01.667 18.026a3.43 3.43 0 01-.004-4.056A19.075 19.075 0 0115.98 6.001h.025zm-.013 1l-.326.006C11.123 7.181 7.48 11.136 7.48 16c0 4.868 3.647 8.824 8.194 8.994l.314.006.04-.001.257-.005c4.548-.17 8.195-4.126 8.195-8.994 0-4.866-3.644-8.82-8.189-8.994A11.45 11.45 0 0016.029 7l.262.006A7.418 7.418 0 0015.992 7zm5.65.968l.03.025C23.986 9.818 25.48 12.727 25.48 16c0 3.29-1.51 6.213-3.845 8.036a18.082 18.082 0 008.872-6.592c.63-.856.63-2.022-.004-2.883a18.067 18.067 0 00-8.861-6.593zm-11.334.009l-.246.086a18.083 18.083 0 00-8.59 6.493 2.434 2.434 0 00.005 2.883 18.073 18.073 0 008.826 6.582C7.982 22.196 6.48 19.28 6.48 16c0-3.283 1.504-6.2 3.828-8.023zM16.26 13A2 2 0 0018 16c.35.002.695-.087 1-.26V16a3 3 0 11-3-3z'/%3E%3C/svg%3E",
	"flask-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='33' viewBox='0 0 32 33'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M11.578.985l8.888.002c.904.08 1.597.837 1.597 1.744s-.693 1.664-1.641 1.746h-.625v9.645l10.82 11.222a4.435 4.435 0 011.064 4.823 4.441 4.441 0 01-4.074 2.82H4.385A4.436 4.436 0 01.32 30.166a4.428 4.428 0 011.057-4.816l3.008-3.121.021-.051a.501.501 0 01.25-.229l7.548-7.828V4.476l-.669-.001c-.904-.08-1.597-.837-1.597-1.744s.693-1.664 1.641-1.746zm1.931 20.887a10.962 10.962 0 01-8.466 1.117L2.08 26.06a3.436 3.436 0 002.312 5.926H27.6a3.44 3.44 0 002.32-5.926l-.016-.015-3.8-3.94a10.978 10.978 0 01-10.74-.235 1.8 1.8 0 00-1.855.002zm5.264 3.685a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8zm0 1a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8zm-4.189-3.802a1.81 1.81 0 110 3.619 1.81 1.81 0 01.001-3.619zm0 1a.809.809 0 100 1.617.809.809 0 000-1.617zM11.622 1.983c-.387.034-.685.359-.685.748s.298.714.641.746h1.125a.5.5 0 01.5.5v10.347a.5.5 0 01-.14.347l-7.218 7.486a9.96 9.96 0 007.153-1.144 2.794 2.794 0 012.878-.002 9.977 9.977 0 009.504.342l-6.443-6.682a.501.501 0 01-.14-.347V3.977a.5.5 0 01.5-.5l1.08.002a.752.752 0 00.686-.748c0-.39-.298-.714-.641-.746l-8.8-.002z'/%3E%3C/svg%3E",
	"floppy-clock-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M23.5 0a8.5 8.5 0 01.5 16.985V30.5a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 30.5v-21A1.5 1.5 0 011.5 8h13.514A8.5 8.5 0 0123.5 0zM5.99 9H1.5a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h21a.5.5 0 00.5-.5V16.985a8.476 8.476 0 01-6.045-3.062c-.148.05-.306.076-.465.077h-9a1.5 1.5 0 01-1.5-1.5V9zm13.51 8a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5zm-.5 1H5v9h14v-9zm-2.51 6a.5.5 0 010 1h-9a.5.5 0 010-1zm0-4a.5.5 0 010 1h-9a.5.5 0 010-1zM24 1.016V2.5a.5.5 0 01-1 0V1.016A7.5 7.5 0 0016.016 8H17.5a.5.5 0 010 1h-1.484a7.473 7.473 0 001.443 3.946.21.21 0 01.036.037l.041.066A7.489 7.489 0 0023 15.983V14.5a.5.5 0 111 0v1.483A7.502 7.502 0 0030.983 9H29.5a.5.5 0 010-1h1.483A7.5 7.5 0 0024 1.016zM15.014 9H6.99l.001 3.5a.5.5 0 00.5.5l8.798.001a8.461 8.461 0 01-1.274-4zM27.32 5.66v4h.87v.62h-.87V12h-.779v-1.72h-2.87v-.54l2.73-4.08h.92zm-6.5-.13a1.768 1.768 0 011.911 1.88c0 1.2-1.09 2.39-2.6 4 .35 0 .74-.06 1.07-.06H23V12h-4.07v-.45c1.92-1.91 3-3.06 3-4.09a1.124 1.124 0 00-.312-.909 1.122 1.122 0 00-.898-.34 1.875 1.875 0 00-1.36.79l-.47-.47a2.503 2.503 0 011.93-1zm5.721 1.01c-.16.31-.34.59-.52.9l-1.48 2.18h2z'/%3E%3C/svg%3E",
	"floppy-reload-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M17.892 2.168c.101.12.136.272.11.415L18 5.5a.5.5 0 01-1 0V3.683a8.003 8.003 0 00-.832 9.491.453.453 0 01.076.117A7.994 7.994 0 0023 16.99h.5a.5.5 0 01.5.492V30.49a1.5 1.5 0 01-1.5 1.5h-21a1.5 1.5 0 01-1.5-1.5V9.5A1.5 1.5 0 011.5 8c7.268-.022 11.45-.024 12.545-.008A8.983 8.983 0 0116.27 3H14.5a.5.5 0 010-1h2.914a.497.497 0 01.478.168zM6.01 8.999L1.5 9a.5.5 0 00-.5.5v20.99a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-12.5a8.992 8.992 0 01-3.002-.51l.002.02v10a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5l14.386.001a9.01 9.01 0 01-3.376-3l-8-.001a1.5 1.5 0 01-1.5-1.5L6.009 9zM19 18H5v9h14v-9zm-2.51 6a.5.5 0 010 1h-9a.5.5 0 010-1h9zm0-4a.5.5 0 010 1h-9a.5.5 0 010-1h9zm11.618-4.178a.498.498 0 01-.109-.419L28 12.5a.5.5 0 011 0l.001 1.805a8 8 0 00-6-13.305A.501.501 0 0123 0a9 9 0 016.721 15.001L31.5 15a.5.5 0 010 1h-3.01a.496.496 0 01-.382-.178zM7.009 9l.001 3.5a.5.5 0 00.5.5l7.42.001a8.978 8.978 0 01-.944-4L7.01 8.999z'/%3E%3C/svg%3E",
	"floppy-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M25.417 1c.406-.002.796.16 1.082.452l4.081 4.201A1.5 1.5 0 0131 6.7v20.8a3.5 3.5 0 01-3.5 3.5h-23A3.5 3.5 0 011 27.5v-23A3.5 3.5 0 014.5 1h20.917zm.003 1H24v4.5A1.5 1.5 0 0122.5 8h-13A1.5 1.5 0 018 6.5V2H4.5A2.5 2.5 0 002 4.5v23A2.5 2.5 0 004.5 30h23a2.5 2.5 0 002.5-2.5V6.697c0-.13-.05-.256-.139-.349L25.783 2.15A.505.505 0 0025.42 2zm.08 10a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h19zm-.5 1H7v12h18V13zm-3.55 8a.5.5 0 010 1h-11a.5.5 0 010-1h11zm0-5a.5.5 0 010 1h-11a.5.5 0 010-1h11zM23 2H9v4.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V2z'/%3E%3C/svg%3E",
	"folder-ftp-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M9.067.033c.132 0 .26.053.353.147l3.054 3.053H30.4a.5.5 0 01.5.5v18.134a.5.5 0 01-.5.5H18.1v4.332l.567.001c1.283 0 2.352.918 2.586 2.133h10.214a.5.5 0 010 1H21.253a2.635 2.635 0 01-2.586 2.134h-5.334a2.635 2.635 0 01-2.586-2.135l-10.214.001a.5.5 0 010-1h10.214a2.635 2.635 0 012.586-2.133h.566v-4.334H1.6a.5.5 0 01-.5-.5V.534a.5.5 0 01.5-.5h7.467zm9.6 27.667h-5.334a1.633 1.633 0 100 3.267h5.334a1.634 1.634 0 000-3.267zm-1.568-5.334h-2.2V26.7h2.2v-4.333zM8.86 1.033H2.1v20.334h27.8V4.233H12.267a.5.5 0 01-.354-.146L8.86 1.033z'/%3E%3C/svg%3E",
	"folder-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M11.707 7H31.5a.5.5 0 01.5.5v21a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-24A.5.5 0 01.5 4h8c.133 0 .26.053.354.146L11.707 7zM31 8H11.5a.504.504 0 01-.354-.146L8.293 5H1v23h30V8z'/%3E%3C/svg%3E",
	"gear-arrow-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M27.5 1h.012c.02 0 .041.002.062.005L27.5 1a.52.52 0 01.105.011l.046.012.04.015c.014.005.027.012.04.019a.307.307 0 01.036.02l.035.025c.014.01.027.02.04.033l.012.011 3 3a.502.502 0 01-.708.708L28 2.707V16c0 4.92-2.961 9.15-7.199 11.001L29.292 27l-2.146-2.146a.502.502 0 01.708-.708l3 3 .011.013.029.033-.04-.046c.026.027.05.056.069.087l.02.035.02.041.014.04c.005.015.009.03.012.046l.006.033a.388.388 0 01.004.048L31 27.5v.02l-.005.052L31 27.5a.52.52 0 01-.011.105l-.012.046-.015.04c-.005.014-.012.027-.019.04l-.018.033a.328.328 0 01-.027.038.304.304 0 01-.033.04l-.011.012-3 3a.502.502 0 01-.708-.708L29.292 28H16c-4.92 0-9.147-2.96-11-7.196v8.488l2.146-2.146a.502.502 0 01.708.708l-3 3-.013.011a.31.31 0 01-.039.033l.052-.044a.517.517 0 01-.087.069l-.035.02-.041.02-.04.014a.345.345 0 01-.046.012l-.033.006-.051.005H4.48l-.052-.005L4.5 31a.52.52 0 01-.105-.011l-.046-.012-.04-.015c-.014-.005-.027-.012-.04-.019a.307.307 0 01-.036-.02l-.035-.025a.304.304 0 01-.04-.033l-.012-.011-3-3a.502.502 0 01.708-.708L4 29.292V16c0-4.92 2.96-9.147 7.196-11H2.707l2.147 2.146a.502.502 0 01-.708.708l-3-3-.011-.013a.31.31 0 01-.033-.039l.044.052a.517.517 0 01-.069-.087l-.02-.035-.02-.041-.014-.04a.345.345 0 01-.012-.046l-.006-.03c-.003-.022-.004-.043-.005-.063V4.49c0-.022.002-.043.005-.064L1 4.5a.52.52 0 01.011-.105l.012-.046.015-.04c.005-.014.012-.027.019-.04a.307.307 0 01.02-.036l.025-.035a.304.304 0 01.033-.04l.011-.012 3-3a.502.502 0 01.708.708L2.707 4H16c4.92 0 9.15 2.961 11.001 7.199L27 2.707l-2.146 2.147a.502.502 0 01-.708-.708l3-3 .013-.011a.31.31 0 01.039-.033l-.052.044a.517.517 0 01.087-.069l.035-.02.041-.02.04-.014a.345.345 0 01.046-.012l.03-.006A.717.717 0 0127.489 1h.011zM16 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11S22.075 5 16 5zm1.592 2.189c.237.044.408.25.408.491v1.616c.46.136.903.32 1.324.547l1.169-1.193c.17-.174.442-.2.642-.06a9.062 9.062 0 012.276 2.275.5.5 0 01-.056.637l-1.16 1.169c.228.423.412.868.55 1.329h1.615a.5.5 0 01.491.406 8.503 8.503 0 010 3.188.5.5 0 01-.493.406l-1.624-.008c-.137.46-.321.905-.55 1.327l1.17 1.179a.5.5 0 01.057.637 9.083 9.083 0 01-2.276 2.276.5.5 0 01-.64-.059l-1.168-1.176a6.921 6.921 0 01-1.327.548v1.616a.5.5 0 01-.406.491 8.503 8.503 0 01-3.188 0A.5.5 0 0114 24.34v-1.616a6.921 6.921 0 01-1.327-.548l-1.168 1.176a.5.5 0 01-.64.059 9.083 9.083 0 01-2.276-2.276.5.5 0 01.06-.641l1.175-1.159a6.877 6.877 0 01-.548-1.325H7.66a.5.5 0 01-.491-.408 8.608 8.608 0 010-3.184.499.499 0 01.491-.408h1.616a6.9 6.9 0 01.55-1.328l-1.18-1.178a.503.503 0 01-.057-.64 9.095 9.095 0 012.276-2.275.5.5 0 01.642.061l1.169 1.193A7.02 7.02 0 0114 9.296V7.68a.5.5 0 01.408-.491 8.608 8.608 0 013.184 0zM15 8.106V9.68a.5.5 0 01-.385.487 5.926 5.926 0 00-1.762.728.5.5 0 01-.62-.075l-1.137-1.16c-.539.417-1.022.9-1.44 1.44l1.148 1.146c.163.164.193.42.072.617a5.958 5.958 0 00-.73 1.762.5.5 0 01-.486.385H8.086a7.609 7.609 0 000 2H9.66a.5.5 0 01.487.385c.146.623.392 1.218.728 1.762a.5.5 0 01-.074.619L9.66 20.903c.417.538.9 1.022 1.44 1.44l1.136-1.145a.5.5 0 01.618-.073 5.932 5.932 0 001.761.728.5.5 0 01.386.487v1.575c.664.09 1.336.09 2 0V22.34a.5.5 0 01.386-.487 5.932 5.932 0 001.761-.728.5.5 0 01.618.073l1.137 1.144a8.073 8.073 0 001.442-1.443l-1.139-1.147a.499.499 0 01-.07-.615 5.926 5.926 0 00.728-1.762.502.502 0 01.49-.385l1.582.008c.09-.663.09-1.335 0-1.998H22.36a.502.502 0 01-.487-.385 5.929 5.929 0 00-.729-1.762.502.502 0 01.071-.615l1.13-1.137a8.056 8.056 0 00-1.441-1.441l-1.137 1.16a.5.5 0 01-.62.075 5.926 5.926 0 00-1.762-.728A.5.5 0 0117 9.68V8.106a7.609 7.609 0 00-2 0zM16 13a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 10-.001 3.999A2 2 0 0016 14z'/%3E%3C/svg%3E",
	"gear-dollar-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M17.555.092A1.5 1.5 0 0118.92 1.59v1.333a.504.504 0 00.398.504c1.091.288 2.14.718 3.135 1.288a.5.5 0 00.613-.069l1.017-1.015c.573-.524 1.451-.524 1.98-.036.443.322.868.667 1.307 1.068.368.405.714.83 1.006 1.237.497.566.497 1.414-.022 2.004l-1.02 1.017c-.165.15-.212.39-.13.56.561.98.991 2.03 1.283 3.134.054.23.263.392.513.385h1.408c.778-.003 1.43.59 1.499 1.351.13 1.096.13 2.202.001 3.284a1.5 1.5 0 01-1.5 1.365h-.01l-1.321-.03a.506.506 0 00-.505.401 12.89 12.89 0 01-1.287 3.082.5.5 0 00.069.613l1.015 1.017c.524.573.524 1.451.036 1.98-.321.444-.667.869-1.051 1.29a14.83 14.83 0 01-1.103 1 1.5 1.5 0 01-2.025-.09l-.998-.998a.507.507 0 00-.63-.061c-.98.561-2.029.991-3.133 1.283a.504.504 0 00-.385.513v1.458c.003.778-.59 1.43-1.351 1.499-1.096.13-2.202.13-3.284.001a1.5 1.5 0 01-1.365-1.498v-1.383a.504.504 0 00-.397-.504 12.869 12.869 0 01-3.136-1.288.5.5 0 00-.613.069l-1.016 1.015c-.574.524-1.452.524-1.982.036a15.052 15.052 0 01-1.306-1.068c-.368-.405-.714-.83-1.006-1.237-.497-.566-.497-1.414.022-2.004l1.014-1.013c.159-.147.205-.379.137-.533a12.94 12.94 0 01-1.284-3.085A.504.504 0 003 19.08H1.592a1.498 1.498 0 01-1.499-1.351 13.929 13.929 0 01-.001-3.284A1.5 1.5 0 011.59 13.08h1.333a.504.504 0 00.504-.398c.288-1.091.718-2.14 1.288-3.135a.5.5 0 00-.069-.613L3.631 7.918c-.524-.574-.524-1.452-.036-1.981.32-.444.667-.869 1.069-1.307.405-.368.83-.713 1.236-1.006.566-.497 1.414-.497 2.004.022L8.91 4.653c.142.147.36.193.491.143.98-.561 2.03-.991 3.134-1.283A.504.504 0 0012.92 3V1.592A1.498 1.498 0 0114.271.093c1.096-.13 2.202-.13 3.284-.001zm-3.18.996a.5.5 0 00-.455.502v1.397a1.495 1.495 0 01-1.142 1.496 12.183 12.183 0 00-2.938 1.21 1.499 1.499 0 01-1.644-.34l-.976-.977c-.189-.166-.471-.166-.696.029-.414.3-.81.622-1.154.932-.344.377-.666.773-1.001 1.23a.497.497 0 00-.015.66l1.001 1.001c.488.493.575 1.255.219 1.83a11.922 11.922 0 00-1.177 2.867A1.497 1.497 0 012.91 14.08H1.588a.503.503 0 00-.501.469c-.12 1.017-.12 2.045.001 3.076a.5.5 0 00.502.455h1.397a1.494 1.494 0 011.495 1.138c.27.991.667 1.943 1.203 2.874.27.59.13 1.285-.331 1.712l-.978.976c-.166.189-.166.471.029.697.3.413.621.81.931 1.153.378.343.774.666 1.231 1.001a.497.497 0 00.66.015l1.001-1.001a1.495 1.495 0 011.83-.219c.904.518 1.872.915 2.867 1.177.692.164 1.174.79 1.155 1.487v1.372a.503.503 0 00.469.501c1.017.12 2.045.12 3.076-.001a.5.5 0 00.455-.502v-1.447a1.495 1.495 0 011.142-1.496 11.881 11.881 0 002.865-1.172 1.502 1.502 0 011.847.211l1 1a.502.502 0 00.68.027 13.73 13.73 0 001.016-.92c.344-.377.666-.773 1.001-1.23a.497.497 0 00.015-.66l-1.001-1.001a1.496 1.496 0 01-.218-1.832c.514-.89.91-1.84 1.176-2.815a1.5 1.5 0 011.498-1.155l1.315.03a.502.502 0 00.497-.469c.12-1.017.12-2.045-.001-3.076A.5.5 0 0030.41 14h-1.397a1.495 1.495 0 01-1.496-1.142 12.009 12.009 0 00-1.197-2.91 1.492 1.492 0 01.326-1.752l.978-.976c.166-.189.166-.471-.03-.697-.298-.413-.62-.81-.93-1.153a14.825 14.825 0 00-1.232-1.001.494.494 0 00-.658-.015l-1.002 1.001a1.495 1.495 0 01-1.83.219 11.849 11.849 0 00-2.867-1.177A1.497 1.497 0 0117.92 2.91V1.588a.503.503 0 00-.469-.501 13.132 13.132 0 00-3.076.001zm2.701 8.046v1.703l.231.03c.451.072.842.211 1.171.417a5.17 5.17 0 011.04.86l-.756.843-.192-.177a4.353 4.353 0 00-.746-.545c-.303-.172-.69-.258-1.16-.258-.528 0-.947.149-1.256.447-.31.298-.465.7-.465 1.204 0 .413.118.751.353 1.015.235.264.53.496.886.696.355.201.742.396 1.16.585.42.19.806.419 1.162.688.355.27.65.602.886.998.235.395.352.903.352 1.522 0 .826-.238 1.502-.714 2.03-.475.527-1.126.848-1.952.963v1.737h-1.032v-1.703l-.274-.036a4.875 4.875 0 01-1.325-.42 5.467 5.467 0 01-1.325-.868l.654-.98.224.186c.306.241.635.452.988.63.442.224.926.336 1.454.336.642 0 1.12-.16 1.436-.482.315-.32.473-.75.473-1.29 0-.458-.118-.84-.353-1.144a3.385 3.385 0 00-.885-.79 10.566 10.566 0 00-1.161-.629 7.375 7.375 0 01-1.161-.67 3.4 3.4 0 01-.886-.92c-.235-.362-.353-.823-.353-1.385 0-.768.227-1.408.68-1.918.453-.51 1.057-.823 1.814-.937V9.134h1.032z'/%3E%3C/svg%3E",
	"gear-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M17.555.092A1.5 1.5 0 0118.92 1.59v1.333a.504.504 0 00.398.504c1.091.288 2.14.718 3.135 1.288a.5.5 0 00.613-.069l1.017-1.015c.573-.524 1.451-.524 1.98-.036.443.322.868.667 1.307 1.068.368.405.714.83 1.006 1.237.497.566.497 1.414-.022 2.004l-1.02 1.017c-.165.15-.212.39-.13.56.561.98.991 2.03 1.283 3.134.054.23.263.392.513.385h1.408c.778-.003 1.43.59 1.499 1.351.13 1.096.13 2.202.001 3.284a1.5 1.5 0 01-1.5 1.365h-.01l-1.321-.03a.506.506 0 00-.505.401 12.89 12.89 0 01-1.287 3.082.5.5 0 00.069.613l1.015 1.017c.524.573.524 1.451.036 1.98-.321.444-.667.869-1.051 1.29a14.83 14.83 0 01-1.103 1 1.5 1.5 0 01-2.025-.09l-.998-.998a.507.507 0 00-.63-.061c-.98.561-2.029.991-3.133 1.283a.504.504 0 00-.385.513v1.458c.003.778-.59 1.43-1.351 1.499-1.096.13-2.202.13-3.284.001a1.5 1.5 0 01-1.365-1.498v-1.383a.504.504 0 00-.397-.504 12.869 12.869 0 01-3.136-1.288.5.5 0 00-.613.069l-1.016 1.015c-.574.524-1.452.524-1.982.036a15.052 15.052 0 01-1.306-1.068c-.368-.405-.714-.83-1.006-1.237-.497-.566-.497-1.414.022-2.004l1.014-1.013c.159-.147.205-.379.137-.533a12.94 12.94 0 01-1.284-3.085A.504.504 0 003 19.08H1.592a1.498 1.498 0 01-1.499-1.351 13.929 13.929 0 01-.001-3.284A1.5 1.5 0 011.59 13.08h1.333a.504.504 0 00.504-.398c.288-1.091.718-2.14 1.288-3.135a.5.5 0 00-.069-.613L3.631 7.918c-.524-.574-.524-1.452-.036-1.981.32-.444.667-.869 1.069-1.307.405-.368.83-.713 1.236-1.006.566-.497 1.414-.497 2.004.022L8.91 4.653c.142.147.36.193.491.143.98-.561 2.03-.991 3.134-1.283A.504.504 0 0012.92 3V1.592A1.498 1.498 0 0114.271.093c1.096-.13 2.202-.13 3.284-.001zm-3.18.996a.5.5 0 00-.455.502v1.397a1.495 1.495 0 01-1.142 1.496 12.183 12.183 0 00-2.938 1.21 1.499 1.499 0 01-1.644-.34l-.976-.977c-.189-.166-.471-.166-.696.029-.414.3-.81.622-1.154.932-.344.377-.666.773-1.001 1.23a.497.497 0 00-.015.66l1.001 1.001c.488.493.575 1.255.219 1.83a11.922 11.922 0 00-1.177 2.867A1.497 1.497 0 012.91 14.08H1.588a.503.503 0 00-.501.469c-.12 1.017-.12 2.045.001 3.076a.5.5 0 00.502.455h1.397a1.494 1.494 0 011.495 1.138c.27.991.667 1.943 1.203 2.874.27.59.13 1.285-.331 1.712l-.978.976c-.166.189-.166.471.029.697.3.413.621.81.931 1.153.378.343.774.666 1.231 1.001a.497.497 0 00.66.015l1.001-1.001a1.495 1.495 0 011.83-.219c.904.518 1.872.915 2.867 1.177.692.164 1.174.79 1.155 1.487v1.372a.503.503 0 00.469.501c1.017.12 2.045.12 3.076-.001a.5.5 0 00.455-.502v-1.447a1.495 1.495 0 011.142-1.496 11.881 11.881 0 002.865-1.172 1.502 1.502 0 011.847.211l1 1a.502.502 0 00.68.027 13.73 13.73 0 001.016-.92c.344-.377.666-.773 1.001-1.23a.497.497 0 00.015-.66l-1.001-1.001a1.496 1.496 0 01-.218-1.832c.514-.89.91-1.84 1.176-2.815a1.5 1.5 0 011.498-1.155l1.315.03a.502.502 0 00.497-.469c.12-1.017.12-2.045-.001-3.076A.5.5 0 0030.41 14h-1.397a1.495 1.495 0 01-1.496-1.142 12.009 12.009 0 00-1.197-2.91 1.492 1.492 0 01.326-1.752l.978-.976c.166-.189.166-.471-.03-.697-.298-.413-.62-.81-.93-1.153a14.825 14.825 0 00-1.232-1.001.494.494 0 00-.658-.015l-1.002 1.001a1.495 1.495 0 01-1.83.219 11.849 11.849 0 00-2.867-1.177A1.497 1.497 0 0117.92 2.91V1.588a.503.503 0 00-.469-.501 13.132 13.132 0 00-3.076.001zM16 11a5 5 0 11-.001 10.001A5 5 0 0116 11zm0 1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z'/%3E%3C/svg%3E",
	"geolocalisation-ovhcloud-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0c6.075 0 11 4.925 11 11 0 6.237-7.42 21-11 21S5 17.237 5 11C5 4.925 9.925 0 16 0zm0 1C10.477 1 6 5.477 6 11c0 5.756 7.158 20 10 20 2.842 0 10-14.244 10-20 0-5.523-4.477-10-10-10zm3.24 5.83l-4.8 8.34h-3.86a7 7 0 01-.67-7.88l2.51 4.35 2.76-4.81h4.06zm2.848.463l.125.232a7.001 7.001 0 01-.803 7.635h-3.86l1.19-2.06h-1.57L19 9.89h1.59l1.498-2.597z'/%3E%3C/svg%3E",
	"geolocalisation-plan-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0c5.523 0 10 4.477 10 10 0 3.546-2.708 9.87-5.532 14H28.5c.2 0 .38.12.46.303l3 7a.5.5 0 01-.46.697H.5a.5.5 0 01-.46-.697l3-7A.502.502 0 013.5 24h8.032C8.708 19.87 6 13.546 6 10 6 4.477 10.477 0 16 0zM3.83 25l-2.572 6h29.484l-2.572-6-8.422.001C18.375 26.81 17.026 28 16 28c-1.026 0-2.375-1.19-3.748-2.999L3.83 25zM16 1a9 9 0 00-9 9c0 5.093 6.404 17 9 17s9-11.907 9-17a9 9 0 00-9-9zm0 4a5 5 0 11-.001 10.001A5 5 0 0116 5zm0 1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z'/%3E%3C/svg%3E",
	"gift-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.533 4.3a3.7 3.7 0 013.7 3.7v.566H30.4c.865 0 1.567.702 1.567 1.567v3.2c0 .866-.702 1.567-1.567 1.567h-.567v15.5c0 .865-.701 1.567-1.566 1.567H3.733A1.567 1.567 0 012.167 30.4V14.9H1.6a1.567 1.567 0 01-1.567-1.567v-3.2c0-.865.702-1.566 1.567-1.566h10.166V8a3.7 3.7 0 013.7-3.7h1.067zm-4.767 10.6h-8.6v15.5c0 .313.254.567.567.567h24.534a.566.566 0 00.566-.567V14.9h-8.6v10.167a.5.5 0 01-.825.38L16 22.524l-3.408 2.921a.5.5 0 01-.825-.38V14.9zm7.467-5.333h-6.466V23.98l2.908-2.493a.5.5 0 01.65 0l2.908 2.493V9.567zm11.167 0H20.233v4.332L30.4 13.9a.567.567 0 00.567-.567v-3.2a.566.566 0 00-.567-.566zm-18.634 0H1.6a.566.566 0 00-.567.566v3.2c0 .313.254.567.567.567h10.166V9.565zM16.533 5.3h-1.066a2.7 2.7 0 00-2.7 2.7v.566h6.466V8a2.7 2.7 0 00-2.7-2.7zM29.595.674A4.769 4.769 0 0127.2 9.567a.5.5 0 010-1.001 3.766 3.766 0 10-2.652-6.434L19.78 6.975a.5.5 0 11-.712-.702l4.77-4.845a4.767 4.767 0 015.757-.754zm-21.42.757l4.758 4.843a.5.5 0 01-.714.7L7.465 2.135a3.765 3.765 0 00-6.3 3.639A3.767 3.767 0 004.8 8.567c.277 0 .5.224.5.5s-.674 0-.95 0C2.193 9.065.756 8.115.2 6.032a4.764 4.764 0 017.975-4.601z'/%3E%3C/svg%3E",
	"graph-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M3.5 1c.165 0 .311.08.402.203l2.951 2.943a.5.5 0 11-.706.708L4 2.713V27h26.287l-2.141-2.147a.5.5 0 11.708-.706l2.943 2.95a.502.502 0 010 .805l-2.943 2.951a.5.5 0 11-.708-.706L30.285 28H3.5a.5.5 0 01-.5-.5V2.713L.853 4.854a.5.5 0 11-.706-.708l2.95-2.943A.505.505 0 013.5 1zm6 15a2.5 2.5 0 012.5 2.5v3a2.5 2.5 0 01-5 0v-3A2.5 2.5 0 019.5 16zm7-6a2.5 2.5 0 012.5 2.5v9a2.5 2.5 0 01-5 0v-9a2.5 2.5 0 012.5-2.5zm7-6A2.5 2.5 0 0126 6.5v15a2.5 2.5 0 01-5 0v-15A2.5 2.5 0 0123.5 4zm-14 13A1.5 1.5 0 008 18.5v3a1.5 1.5 0 003 0v-3A1.5 1.5 0 009.5 17zm7-6a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 003 0v-9a1.5 1.5 0 00-1.5-1.5zm7-6A1.5 1.5 0 0022 6.5v15a1.5 1.5 0 003 0v-15A1.5 1.5 0 0023.5 5z'/%3E%3C/svg%3E",
	"hand-leaf-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='33' viewBox='0 0 32 33'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.894.639a.502.502 0 01.311.143c.392.389.995 1.041 1.71 1.904C20.083 4.1 21.15 5.607 22.01 7.16c1.26 2.272 1.97 4.448 1.975 6.461a7.12 7.12 0 01-6.409 7.098v1.875a.501.501 0 01-.093.29 2.536 2.536 0 011.111 3.982c2.156-.01 2.742-.083 3.511-.429.044-.02.088-.04.136-.064l6.444-3.08a2.228 2.228 0 011.083-.276c.197 0 .393.025.58.074a2.214 2.214 0 011.363 1.024c.303.507.38 1.118.217 1.678a2.195 2.195 0 01-1.035 1.332l-7.562 4.624c-.317.196-.87.44-1.633.655-1.167.331-2.581.525-4.254.525-1.49 0-3.336-.484-5.39-1.301a34.25 34.25 0 01-3.236-1.496 7.728 7.728 0 00-2.782-.518v2.834a.5.5 0 01-.5.5H.475a.5.5 0 010-1h4.562v-13.43H.475a.5.5 0 010-1h5.062a.5.5 0 01.5.5v2.327l3.786.523a.498.498 0 01.283.14 6.064 6.064 0 003.038 1.63l3.306.098.147-.004a.488.488 0 01-.02-.14v-1.845h-.023a7.122 7.122 0 01-6.833-7.127c.004-2.013.716-4.19 1.975-6.46.86-1.553 1.928-3.062 3.097-4.474a29.75 29.75 0 011.594-1.79l.115-.114.023-.02.042-.035a.48.48 0 01.247-.088h.08zM6.036 21.354v7.26c1.074 0 2.145.2 3.198.61a32.986 32.986 0 003.191 1.474c1.946.774 3.685 1.23 5.02 1.23 2.731 0 4.51-.504 5.363-1.032l7.581-4.636a1.21 1.21 0 00.578-.74 1.13 1.13 0 00-.116-.897 1.22 1.22 0 00-.752-.565 1.277 1.277 0 00-.957.123l-6.463 3.09a4.74 4.74 0 01-.163.077c-1.015.457-1.708.518-4.525.518a41.93 41.93 0 01-1.327-.063c-.07 0-.142-.001-.214-.006l-.082-.014a40.053 40.053 0 01-3.956-.47h-.107a.5.5 0 010-1l.19.007c1.39.232 2.79.393 4.189.483a1.539 1.539 0 001.254-2.335c-.299-.49-.846-.774-1.468-.733l-3.434-.106a7.06 7.06 0 01-3.51-1.792l-3.49-.483zM2.98 27.026c.5.217.82.715.808 1.26a1.334 1.334 0 01-1.343 1.316 1.344 1.344 0 11.535-2.576zm-.775.986a.344.344 0 00.245.59.332.332 0 00.338-.33.342.342 0 00-.583-.259zm14.65-26.157c-.347.367-.79.864-1.291 1.47-1.132 1.367-2.165 2.827-2.992 4.319-1.185 2.136-1.846 4.16-1.85 5.978a6.125 6.125 0 005.856 6.126v-2.722l-3.113-3.112a.5.5 0 01.708-.707l2.404 2.405v-3.306a.635.635 0 01-.076-.063l-2.828-2.829a.5.5 0 01.707-.707l2.197 2.197v-4.65a.5.5 0 011 0v4.204l1.752-1.75a.5.5 0 11.708.706l-2.46 2.458v4.294l2.96-2.959a.5.5 0 01.707.707l-3.536 3.536a.512.512 0 01-.13.094v2.168a6.122 6.122 0 005.409-6.09c-.004-1.818-.665-3.842-1.85-5.978-.827-1.492-1.86-2.952-2.992-4.32a31.108 31.108 0 00-1.29-1.469z'/%3E%3C/svg%3E",
	"hand-world-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='33' viewBox='0 0 32 33'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M27.449 4.785a13.576 13.576 0 014.081 9.592 13.566 13.566 0 01-3.935 9.437l1.09-.523a2.294 2.294 0 011.664-.201 2.214 2.214 0 011.363 1.024c.303.507.38 1.118.217 1.678a2.195 2.195 0 01-1.035 1.332l-7.562 4.624c-.317.196-.87.44-1.633.655-1.167.331-2.581.525-4.254.525-1.49 0-3.336-.484-5.39-1.301a34.25 34.25 0 01-3.236-1.496 7.728 7.728 0 00-2.782-.518v2.834a.5.5 0 01-.5.5H.475a.5.5 0 010-1h4.562V18.518H.475a.5.5 0 010-1h3.99a13.106 13.106 0 01-.378-2.987v-.163a13.567 13.567 0 014.064-9.565A13.565 13.565 0 0117.778.917a13.57 13.57 0 019.67 3.868zM6.036 21.355v7.258c1.074 0 2.145.2 3.198.61a32.986 32.986 0 003.191 1.475c1.946.774 3.685 1.23 5.02 1.23 2.731 0 4.51-.504 5.363-1.032l7.581-4.636a1.21 1.21 0 00.578-.74 1.13 1.13 0 00-.116-.897 1.22 1.22 0 00-.752-.565 1.277 1.277 0 00-.957.123l-6.463 3.09a4.74 4.74 0 01-.163.077c-1.015.457-1.708.518-4.525.518a41.93 41.93 0 01-1.327-.063c-.07 0-.142-.001-.214-.006l-.082-.014a40.053 40.053 0 01-3.956-.47h-.107a.5.5 0 010-1l.19.007c1.39.232 2.79.393 4.189.483a1.539 1.539 0 001.254-2.335c-.299-.49-.846-.774-1.468-.733l-3.434-.106-.126-.025a.497.497 0 01-.362-.088 7.037 7.037 0 01-3.022-1.68l-3.49-.482zm-3.057 5.67c.5.218.82.716.808 1.261a1.334 1.334 0 01-1.343 1.316 1.344 1.344 0 11.535-2.576zm-.775.987a.344.344 0 00.245.59.332.332 0 00.338-.33.342.342 0 00-.583-.259zm20.454-6.011L18.284 22l.001 1.349a2.534 2.534 0 01.507 3.236l-.067.103c1.568-.5 2.972-2.225 3.933-4.687zm5.205 0h-4.135c-.688 1.89-1.63 3.433-2.741 4.458a12.573 12.573 0 006.876-4.458zM17.284 22h-4.358c.082.215.167.428.256.64l3.268.096c.286-.02.567.01.835.082V22zm-6.692-7h-5.49c.043.851.176 1.695.396 2.519h.039a.5.5 0 01.5.5v2.326l3.786.523a.498.498 0 01.283.14l.019.016a.487.487 0 01.154-.024l1.248.001a21.445 21.445 0 01-.935-6zm6.692 0h-5.692c.027 2.041.36 4.063.983 6h4.71v-6zm6.683.001L18.284 15v6h4.726c.556-1.751.902-3.798.957-5.999zm6.542 0h-5.541c-.052 2.169-.374 4.21-.91 6h4.511a12.57 12.57 0 001.94-6zM11.44 8H6.89a12.579 12.579 0 00-1.794 6h5.501v-.045c.036-2.147.335-4.17.843-5.955zm5.845 0h-4.8c-.532 1.76-.853 3.805-.888 6h5.688V8zm5.8 0h-4.8v6h5.688c-.033-2.192-.356-4.238-.888-6zm5.641-.005L28.674 8h-4.546c.512 1.798.813 3.839.844 6h5.55a12.58 12.58 0 00-1.797-6.005zM14.587 2.296A12.585 12.585 0 007.56 7h4.194c.695-2.003 1.67-3.637 2.833-4.704zm2.697-.328C15.487 2.27 13.866 4.175 12.818 7h4.466V1.968zm1 0V7h4.464C21.7 4.179 20.08 2.27 18.285 1.969zm2.673.311l.073.067c1.14 1.067 2.096 2.681 2.782 4.653h4.246a12.568 12.568 0 00-7.101-4.72z'/%3E%3C/svg%3E",
	"handshake-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M17.47 2.07c.2.016.405.038.658.07l.677.089c.306.04.55.068.793.092.36.028.707.13 1.022.301.137-.013.28.03.389.13l3.129 2.88c1.06.97 2.79 2.59 4.904 4.583a2.12 2.12 0 01.55 2.25l-1.001 2.867 1.924 1.367c.752.4 1.276 1.127 1.424 2.017.05.75-.186 1.49-.656 2.063-.75.955-2.07 1.251-3.192.689l-.036-.023.009.057c.038.244.038.492-.01.786-.274 1.032-1.088 1.832-2.217 2.101a4.62 4.62 0 01-1.258-.104c-.037.283-.09.57-.163.867a2.992 2.992 0 01-1.975 1.945c-.6.137-1.22.108-1.797-.076a5.057 5.057 0 01-.127.54 2.809 2.809 0 01-2.08 2.105 2.35 2.35 0 01-1.911-.355l-.895-.529-.23.337a2.503 2.503 0 01-3.601.431 2.498 2.498 0 01-1.205-1.911 2.498 2.498 0 01-2.535-.38 2.497 2.497 0 01-1.204-2.104 2.5 2.5 0 01-2.258-.497 2.5 2.5 0 01-1.205-2.247 2.503 2.503 0 01-2.181-.48 2.499 2.499 0 01-.814-3.494l1.49-2.165-.168-.227-.44-.603-.018-.024c-.39-.531-.64-.87-.83-1.116-.38-.501-.376-.882-.013-1.427l4.168-6.007 2.414-3.526c.245-.347.346-.464.544-.556a.746.746 0 01.534-.031c.06.016.281.09.334.106a50.27 50.27 0 003.118.823c.656-.343 1.325-.67 2.01-.985 1.608-.574 2.694-.73 3.928-.63zm-2.497 20.91a1.49 1.49 0 00-1.013.556l-2.147 3.07a1.502 1.502 0 00.525 2.1l.079.055a1.501 1.501 0 002.171-.225l2.109-3.062c.217-.346.284-.766.185-1.162-.1-.396-.356-.735-.784-.99a1.502 1.502 0 00-1.125-.342zm2.919 2.107l-.038.182a2.59 2.59 0 01-.322.754l-1.333 1.934.873.517c.326.235.74.315 1.13.22a1.822 1.822 0 001.347-1.38c.174-.616.171-.95-.008-1.1-.146-.12-.455-.338-.871-.617l-.09-.06a70.62 70.62 0 00-.688-.45zm-6.314-4.848a1.495 1.495 0 00-.995.483.536.536 0 01-.04.069L8.15 24.314a2.265 2.265 0 01-.145.164 1.497 1.497 0 00.598 1.94l.072.051a1.501 1.501 0 002.135-.194l2.456-3.538a1.5 1.5 0 00.18-1.152c-.097-.393-.348-.73-.771-.986a1.507 1.507 0 00-1.096-.36zM7.934 3.755l-.064.091-.047.066L5.41 7.435l-4.165 6.002c-.13.196-.13.113-.02.257.195.253.448.595.842 1.133l.018.024.402.55.306-.449a2.496 2.496 0 011.692-.9c.662-.063 1.321.14 1.764.515a2.497 2.497 0 011.247 2.273c.753-.21 1.583-.069 2.205.438a2.506 2.506 0 011.238 2.075c.18-.059.368-.096.56-.11.665-.052 1.322.163 1.752.545a2.499 2.499 0 011.235 2.27c.121-.034.249-.058.378-.072.677-.073 1.355.133 1.803.52.54.308.942.805 1.134 1.39a.495.495 0 01.195.071l.356.227c.265.172.531.345.78.51l.093.062c.445.298.772.528.953.68.166.137.286.286.368.45l-.06-.03c.525.3 1.143.39 1.691.268a1.971 1.971 0 001.276-1.25c.084-.354.143-.713.177-1.075l.567.357a57.59 57.59 0 01-5.578-3.904.5.5 0 11.62-.784 57.03 57.03 0 005.421 3.799c.365.096.74.135 1.03.128.68-.168 1.216-.695 1.385-1.323.022-.14.022-.284-.001-.434a2 2 0 00-.672-1.246 36.32 36.32 0 00-.768-.54l-1.17-.805-.03-.02c-1.095-.755-1.69-1.174-1.96-1.388a3.05 3.05 0 00-.346-.237l-.136-.082-.141-.088a.5.5 0 01.536-.844c.061.039.061.039.127.078l.137.084c.192.118.323.206.45.309.238.19.835.61 1.9 1.344l.03.02.03.021 1.142.786c.396.274.648.451.818.578l.148.132a.493.493 0 01.12.063c.134.095.23.159.33.22l.044.026c-.044-.026.578.331.91.534.662.33 1.465.15 1.93-.44.314-.384.47-.874.443-1.32-.09-.534-.424-.997-.956-1.285l-2.191-1.55c-4.847-3.458-8.211-5.84-9.207-6.501a.597.597 0 01-.073-.06 23.404 23.404 0 00-2.573-2.002c-.532.236-1.429.684-1.688.863-.8.484-1.632.912-2.452 1.262-.843.453-1.88.318-2.53-.294A2.677 2.677 0 018.17 7.1c0-.858.413-1.664 1.147-2.19.298-.176.598-.35.9-.519a44.176 44.176 0 01-2.09-.572c-.09-.027-.15-.045-.184-.06l-.008-.004zm-.942 14.529l-2.169 3.141-.07.103-.003.002-.127.187a1.503 1.503 0 00.517 2.1l.079.056c.307.268.71.4 1.116.364.323-.028.626-.16.853-.356.03-.056.064-.112.101-.166l2.444-3.52.05-.085c.158-.316.2-.68.117-1.027-.097-.396-.35-.736-.764-.984-.661-.534-1.63-.437-2.144.185zm-2.41-3.237a1.49 1.49 0 00-.99.506l-.669.974-.01.014-1.68 2.446a1.503 1.503 0 00.517 2.1l.071.05c.312.261.716.385 1.12.342a1.492 1.492 0 001-.533l.129-.19 2.197-3.223c.218-.345.286-.764.189-1.16-.098-.397-.353-.736-.775-.988a1.502 1.502 0 00-1.1-.338zm9.337-11.423a45.996 45.996 0 00-4.057 2.122A1.668 1.668 0 009.169 7.1c0 .537.258 1.04.742 1.395.386.36.958.434 1.462.166a19.241 19.241 0 002.342-1.202c.352-.244 1.593-.853 2.101-1.054l.02-.007c.015-.006.031-.01.047-.014l-.067.02a.572.572 0 01.106-.028l.04-.005.05-.001.034.002c.017.002.035.004.053.008l.027.006c.02.005.039.012.058.019l.025.01a.542.542 0 01.048.026l.017.01a24.603 24.603 0 012.907 2.235l.13.088c1.122.758 4.142 2.896 8.431 5.954l.906-2.594a1.12 1.12 0 00-.291-1.19c-2.112-1.99-3.84-3.61-4.896-4.576l-2.933-2.699a.496.496 0 01-.249-.085 1.562 1.562 0 00-.768-.266c-.265-.027-.52-.057-.835-.098l-.673-.088a14.17 14.17 0 00-.614-.066c-1.09-.088-2.034.047-3.47.558z'/%3E%3C/svg%3E",
	"hardware-gpu-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M4 5v3.268C4.294 8.098 4.636 8 5 8h25a2 2 0 012 2v10a2 2 0 01-2 2H5c-.364 0-.706-.097-1-.268V25H0v-1h3V5h1zm26 4H5a1 1 0 00-1 1v10a1 1 0 001 1h25a1 1 0 001-1V10a1 1 0 00-1-1zm-5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1a3.5 3.5 0 100 7 3.5 3.5 0 000-7z'/%3E%3C/svg%3E",
	"hardware-sata-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M24.5 0A3.5 3.5 0 0128 3.5v25a3.5 3.5 0 01-3.5 3.5h-17A3.5 3.5 0 014 28.5v-25A3.5 3.5 0 017.5 0h17zm0 1h-17A2.5 2.5 0 005 3.5v25A2.5 2.5 0 007.5 31h17a2.5 2.5 0 002.5-2.5v-25A2.5 2.5 0 0024.5 1zm.385 9.315a9.022 9.022 0 01-5.338 9.957c1.868 1.325 3.99 3.02 4.566 3.614a3 3 0 01.012 4.236 3.002 3.002 0 01-4.249.002c-.642-.643-2.472-2.944-3.805-4.843-.65-.925-1.182-1.73-1.583-2.422a9.018 9.018 0 01-7.486-9.16 9.021 9.021 0 0117.883-1.384zM14.578 18.6c-.114.11.117.642.554 1.399.12.081.2.213.215.36 1.321 2.19 3.954 5.776 5.237 7.059a2 2 0 002.831 0 2 2 0 00-.014-2.829c-1.702-1.755-8.372-6.426-8.823-5.99zM15.4 3.974a8.02 8.02 0 00-1.5 15.733c-.365-.867-.388-1.467-.018-1.826.679-.658 2.19.02 4.668 1.698l-.224.072A8.02 8.02 0 0015.4 3.974zM16 9a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 10-.001 3.999A2 2 0 0016 10z'/%3E%3C/svg%3E",
	"hardware-ssd-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M24.5 0A3.5 3.5 0 0128 3.5v25a3.5 3.5 0 01-3.5 3.5h-17A3.5 3.5 0 014 28.5v-25A3.5 3.5 0 017.5 0zm0 1h-17A2.5 2.5 0 005 3.5v3.33a14.06 14.06 0 011.938-.288c7.141-.553 13.55 4.374 14.863 11.425a14.058 14.058 0 01-4.42 13.034h7.12a2.5 2.5 0 002.5-2.5v-25A2.501 2.501 0 0024.5 1zm-3.682 17.15c-1.22-6.549-7.172-11.125-13.802-10.61-.684.052-1.357.158-2.016.314V28.5A2.5 2.5 0 007.5 31h8.307a13.056 13.056 0 005.011-12.85zM8 27a1 1 0 110 2 1 1 0 010-2zm16 0a1 1 0 110 2 1 1 0 010-2zM8 3a1 1 0 110 2 1 1 0 010-2zm16 0a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E",
	"hashtag-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M31.467 6.433a.5.5 0 01.5.5v5.334a.5.5 0 01-.5.5h-5.433l-.924 6.466h6.357a.5.5 0 01.5.5v5.334a.5.5 0 01-.5.5h-7.213l-.825 5.968a.502.502 0 01-.496.432H17.6a.5.5 0 01-.495-.569l.806-5.831h-6.457l-.825 5.968a.502.502 0 01-.496.432H4.8a.5.5 0 01-.495-.569l.806-5.831H.533a.5.5 0 01-.5-.5v-5.334a.5.5 0 01.5-.5h5.433l.924-6.466H.533a.5.5 0 01-.5-.5V6.933a.5.5 0 01.5-.5h7.213L8.57.465a.502.502 0 01.496-.432H14.4a.5.5 0 01.495.569l-.806 5.831h6.457L21.37.465a.502.502 0 01.496-.432H27.2a.5.5 0 01.495.569l-.806 5.831h4.578zm-.5 1h-4.652a.5.5 0 01-.496-.568l.807-5.832h-4.324l-.825 5.969a.5.5 0 01-.496.431h-7.466a.5.5 0 01-.496-.568l.807-5.832H9.502l-.825 5.969a.5.5 0 01-.496.431H1.033v4.334h6.434a.5.5 0 01.495.57l-1.067 7.467a.5.5 0 01-.495.43H1.033v4.333h4.652a.5.5 0 01.496.568l-.807 5.832h4.324l.825-5.969a.5.5 0 01.496-.431h7.466a.5.5 0 01.496.568l-.807 5.832h4.324l.825-5.969a.5.5 0 01.496-.431h7.148v-4.334h-6.434a.5.5 0 01-.495-.57l1.067-7.467a.5.5 0 01.495-.43h5.367V7.434zM19.69 12.767h-6.456l-.924 6.466h6.456l.924-6.466zm-.49 7.466h-7.467a.5.5 0 01-.495-.57l1.067-7.467a.5.5 0 01.495-.43h7.467a.5.5 0 01.495.571l-1.067 7.467a.5.5 0 01-.495.43z'/%3E%3C/svg%3E",
	"hourglass-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M31.5 0a.5.5 0 01.5.5v2a.5.5 0 01-.5.5l-.519.001A14.988 14.988 0 0122.505 16a14.991 14.991 0 018.477 13h.518a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h.498a14.993 14.993 0 018.477-13A14.986 14.986 0 011 3.001L.5 3a.5.5 0 01-.5-.5v-2A.5.5 0 01.5 0h31zM31 30H1v1h30v-1zM10.911 15.534a.5.5 0 010 .932A13.99 13.99 0 002 29h4.292l9.355-8.863a.5.5 0 01.688 0L25.688 29h4.293a13.989 13.989 0 00-8.912-12.534.5.5 0 010-.932 13.991 13.991 0 008.912-12.533H1.999a13.99 13.99 0 008.912 12.533zm5.079 5.655L7.743 29h16.493l-8.246-7.811zM21.49 10a.5.5 0 01.336.87l-5.5 5a.5.5 0 01-.672 0l-5.5-5a.5.5 0 01.336-.87h11zm-1.293 1h-8.414l4.207 3.824L20.197 11zM31 1H1v1h30V1z'/%3E%3C/svg%3E",
	"house-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.336.13l15.466 14a.5.5 0 11-.671.741l-1.298-1.175V31.5a.5.5 0 01-.5.5H2.667a.5.5 0 01-.5-.5V13.695L.868 14.871a.5.5 0 11-.671-.742l15.466-14a.502.502 0 01.672 0zM16 1.173L3.166 12.79V31h8.6v-8.5c0-.836.709-1.5 1.567-1.5h5.334c.858 0 1.566.664 1.566 1.5V31h8.6V12.791L16 1.174zM18.667 22h-5.334c-.32 0-.566.231-.566.5V31h6.466v-8.5c0-.269-.246-.5-.566-.5z'/%3E%3C/svg%3E",
	"import-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M29.777.033a2.218 2.218 0 012.19 2.239v27.45a2.222 2.222 0 01-.63 1.576c-.411.42-.972.661-1.566.669H5.423a2.218 2.218 0 01-2.19-2.239V18.667a.5.5 0 011 0v11.067c-.004.323.12.634.346.865.226.232.534.364.85.368h24.335a1.217 1.217 0 001.203-1.239V2.266a1.214 1.214 0 00-.346-.865 1.213 1.213 0 00-.85-.368H5.436a1.217 1.217 0 00-1.203 1.239V8a.5.5 0 01-1 0V2.278a2.222 2.222 0 01.63-1.576c.411-.42.972-.661 1.566-.669h24.348zm-18.223 8.68l4.266 4.267a.5.5 0 010 .707l-4.266 4.267a.502.502 0 01-.708-.708l3.413-3.413H.533a.5.5 0 010-1H14.26L10.846 9.42a.5.5 0 01.708-.707z'/%3E%3C/svg%3E",
	"infinite-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M11.772 7.308l2.17 5.23a.5.5 0 01-.271.654l-5.23 2.16a.5.5 0 11-.382-.924l4.428-1.829a6.999 6.999 0 00-11.216 7.208A7 7 0 008 25c3.244 0 5.154-2.121 7.54-7.198C17.634 12.73 20.147 10 24 10a8 8 0 11-.005 16 8.808 8.808 0 01-5.746-2.205.5.5 0 11.662-.75A7.806 7.806 0 0024 25a7 7 0 100-14c-3.328 0-5.581 2.448-7.538 7.19l-.005.013-.004.01C13.909 23.629 11.777 26 7.998 26a7.999 7.999 0 01-3.986-14.915 8.001 8.001 0 018.312.162l-1.476-3.555a.5.5 0 01.924-.384z'/%3E%3C/svg%3E",
	"info-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm.5 11.52V24h-1.05l-.04-11.48h1.09zm.183-4.309A1 1 0 0116 9.94.92.92 0 0115 9a1 1 0 011.684-.789z'/%3E%3C/svg%3E",
	"invader-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M9.5 3a.5.5 0 01.5.5V6h2.5a.5.5 0 01.5.5V9h6V6.5a.5.5 0 01.5-.5H22V3.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H23v2h2.5a.5.5 0 01.5.5V12h2.5a.5.5 0 01.5.5v2.947l2.497-.017a.5.5 0 01.503.5v9.57a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V20h-2v5.5a.5.5 0 01-.5.5H23v2.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H22v-2H10v2h4.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V26H6.5a.5.5 0 01-.5-.5V20H4v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5H3v-2.5a.5.5 0 01.5-.5H6V9.5a.5.5 0 01.5-.5H9V7H6.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3zM14 26h-4v2h4v-2zm8 0h-4v2h4v-2zM12 7h-2v2.5a.5.5 0 01-.5.5H7v2.5a.5.5 0 01-.5.5H4v2.5a.5.5 0 01-.5.5H1v9h2v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V25h2v-2.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5V25h2v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V25h2v-8.567l-2.497.017a.5.5 0 01-.503-.5V13h-2.5a.5.5 0 01-.5-.5V10h-2.5a.5.5 0 01-.5-.5V7h-2v2.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5V7zm10.5 7a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2zm-11 0a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2zM25 4h-2v2h2V4zM9 4H7v2h2V4z'/%3E%3C/svg%3E",
	"io-t-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M14.91 25.836a2.847 2.847 0 012.08.936 2.87 2.87 0 01.73 2.167 2.823 2.823 0 01-1.327 2.642 2.799 2.799 0 01-2.947 0 2.826 2.826 0 01-1.328-2.642 2.873 2.873 0 01.725-2.16 2.845 2.845 0 012.067-.943zm-4.742-1.819v7.876h-1.39v-7.876h1.39zm14.045 0v1.186h-2.26v6.69h-1.391v-6.69H18.29v-1.186h5.922zM14.91 26.84c-.86 0-1.381.784-1.381 2.01 0 1.225.52 2.008 1.38 2.008.86 0 1.391-.783 1.391-2.009 0-1.225-.53-2.009-1.39-2.009zM26.608.147c5.856 5.884 5.856 15.419 0 21.302a.502.502 0 01-.707-.71c5.465-5.49 5.465-14.39 0-19.882a.502.502 0 01.707-.71zm-20.509 0a.502.502 0 010 .71C.635 6.35.635 15.248 6.1 20.74a.502.502 0 01-.707.71C-.463 15.567-.463 6.032 5.393.148a.499.499 0 01.707 0zM23.777 2.99A11.076 11.076 0 0127 10.803c0 2.931-1.16 5.742-3.223 7.814a.5.5 0 01-.708 0 .504.504 0 010-.71 10.065 10.065 0 002.93-7.104c0-2.664-1.053-5.22-2.93-7.103a.504.504 0 010-.71.5.5 0 01.708 0zm-14.846 0a.504.504 0 010 .71A10.066 10.066 0 006 10.803c0 2.665 1.053 5.22 2.93 7.104a.504.504 0 010 .71.5.5 0 01-.708 0A11.08 11.08 0 015 10.803c0-2.93 1.16-5.741 3.223-7.813a.5.5 0 01.708 0zm12.025 2.843a7.051 7.051 0 010 9.941.5.5 0 01-.708 0 .504.504 0 010-.71 6.043 6.043 0 000-8.521.504.504 0 010-.71.498.498 0 01.708 0zm-9.204 0a.504.504 0 010 .71 6.042 6.042 0 000 8.52.505.505 0 010 .711.5.5 0 01-.708 0 7.051 7.051 0 010-9.941.498.498 0 01.708 0zM16 8.788c1.105 0 2 .9 2 2.01 0 1.109-.895 2.008-2 2.008s-2-.9-2-2.009c0-1.11.895-2.009 2-2.009zm0 1.005c-.553 0-1 .45-1 1.004 0 .555.447 1.005 1 1.005.553 0 1-.45 1-1.005 0-.554-.447-1.004-1-1.004z'/%3E%3C/svg%3E",
	"key-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M8 0c4.418 0 8 3.582 8 8.005a7.856 7.856 0 01-.102 1.186l15.956 15.955A.504.504 0 0132 25.5v6a.5.5 0 01-.5.5h-6a.504.504 0 01-.354-.146L23.5 30.207l-1.646 1.647a.502.502 0 01-.708 0l-4-4a.502.502 0 010-.708l1.647-1.646-2.293-2.293-1.646 1.647a.502.502 0 01-.708 0l-4-4a.502.502 0 010-.708l1.647-1.646-2.596-2.596c-.394.058-.793.09-1.197.096A8 8 0 018 0zm0 1C4.134 1 1 4.134 1 8s3.134 7 6.993 7a8.083 8.083 0 001.29-.122.498.498 0 01.44.138l3.13 3.13a.5.5 0 010 .708L11.208 20.5l3.293 3.293 1.646-1.647a.502.502 0 01.708 0l3 3a.502.502 0 010 .708L18.207 27.5l3.293 3.293 1.646-1.647a.502.502 0 01.708 0L25.707 31H31v-5.293L15.006 9.714a.499.499 0 01-.136-.451c.082-.418.126-.842.13-1.263a7 7 0 00-7-7zM5.5 3a2.5 2.5 0 010 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 10.001 3.001A1.5 1.5 0 005.5 4z'/%3E%3C/svg%3E",
	"keypad-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M19.5 24a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-1.356 1.493L19.5 29h-7a1.5 1.5 0 01-1.5-1.5v-2a1.5 1.5 0 011.5-1.5h7zm0 1h-7a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5zm-11-8a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.356 1.493L8.5 23h-7A1.5 1.5 0 010 21.5v-3A1.5 1.5 0 011.5 17h7zm11 0a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.356 1.493L19.5 23h-7a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 011.5-1.5h7zm11 0a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.356 1.493L30.5 23h-7a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 011.5-1.5h7zm-22 1h-7a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm11 0h-7a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm11 0h-7a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-22-8a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.356 1.493L8.5 16h-7A1.5 1.5 0 010 14.5v-3A1.5 1.5 0 011.5 10h7zm11 0a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.356 1.493L19.5 16h-7a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 011.5-1.5h7zm11 0a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.356 1.493L30.5 16h-7a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 011.5-1.5h7zm-22 1h-7a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm11 0h-7a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm11 0h-7a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-22-8A1.5 1.5 0 0110 4.5v3a1.5 1.5 0 01-1.356 1.493L8.5 9h-7A1.5 1.5 0 010 7.5v-3A1.5 1.5 0 011.5 3h7zm11 0A1.5 1.5 0 0121 4.5v3a1.5 1.5 0 01-1.356 1.493L19.5 9h-7A1.5 1.5 0 0111 7.5v-3A1.5 1.5 0 0112.5 3h7zm11 0A1.5 1.5 0 0132 4.5v3a1.5 1.5 0 01-1.356 1.493L30.5 9h-7A1.5 1.5 0 0122 7.5v-3A1.5 1.5 0 0123.5 3h7zm-22 1h-7a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm11 0h-7a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm11 0h-7a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5z'/%3E%3C/svg%3E",
	"leaf-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M31.57.005a.485.485 0 01.286.142.489.489 0 01.139.279L32 .478v.054c.002.98-.061 2.567-.249 4.557-.31 3.284-.872 6.562-1.75 9.627-1.28 4.465-3.128 8.108-5.647 10.637a12.498 12.498 0 01-17.347.348L.854 31.854a.502.502 0 01-.708-.708L6.3 24.994l-.05-.055a12.502 12.502 0 01.398-17.293c2.53-2.52 6.172-4.367 10.637-5.647 3.065-.878 6.343-1.44 9.627-1.75 1.99-.188 3.577-.25 4.558-.25a.5.5 0 01.102.006zm-.594 1.726L19.707 12.999 24.5 13a.5.5 0 010 1l-5.793-.001-7 7L19.5 21a.5.5 0 010 1l-8.793-.001-2.993 2.994a11.498 11.498 0 0015.932-.346c2.382-2.391 4.157-5.89 5.394-10.207.86-3 1.411-6.218 1.716-9.445.12-1.278.188-2.385.22-3.264zm-.707-.708c-.879.033-1.986.1-3.264.221-3.227.305-6.446.857-9.445 1.716-4.317 1.237-7.816 3.012-10.207 5.394a11.503 11.503 0 00-.366 15.91l.02.022L10 21.292V12.5a.5.5 0 011 0v7.792l7-7V7.5a.5.5 0 011 0v4.792L30.27 1.023z'/%3E%3C/svg%3E",
	"lifebuoy-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 25a8.944 8.944 0 01-3.56-.732l-4.424 4.433A14.934 14.934 0 0016 31c2.937 0 5.677-.844 7.99-2.303l-4.43-4.429A8.937 8.937 0 0116 25zm-7.792-4.493l-4.333 4.325a15.078 15.078 0 003.298 3.297l4.326-4.334a9.036 9.036 0 01-3.29-3.288zm12.294 3.288l4.33 4.33a15.081 15.081 0 003.293-3.293l-4.33-4.33a9.043 9.043 0 01-3.293 3.293zM16 8a8 8 0 100 16 8 8 0 000-16zM1 16c0 2.937.844 5.677 2.303 7.99l4.432-4.422A8.967 8.967 0 017 16c0-1.265.26-2.469.732-3.56L3.303 8.01A14.927 14.927 0 001 16zm27.7-7.984l-4.429 4.43c.47 1.09.729 2.292.729 3.554 0 1.265-.26 2.469-.732 3.56l4.429 4.43A14.927 14.927 0 0031 16c0-2.935-.843-5.672-2.3-7.984zm-3.862-4.137l-4.33 4.33a9.027 9.027 0 013.29 3.296l4.332-4.331a15.086 15.086 0 00-3.292-3.295zM3.875 7.168l4.33 4.33a9.043 9.043 0 013.293-3.293l-4.33-4.33a15.081 15.081 0 00-3.293 3.293zM16 1c-2.937 0-5.677.844-7.99 2.303l4.43 4.429A8.937 8.937 0 0116 7c1.267 0 2.474.262 3.568.735l4.428-4.428A14.928 14.928 0 0016 1z'/%3E%3C/svg%3E",
	"lightbulb-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31' height='32' viewBox='0 0 31 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M19.24 9.072a8.01 8.01 0 014 6.952 14.114 14.114 0 01-3.107 8.168.492.492 0 01.107.308V27a5 5 0 01-10 0v-2.5c0-.117.04-.224.107-.309A14.112 14.112 0 017.24 16a7.999 7.999 0 0112-6.928zm0 15.928h-8v2a4 4 0 007.874 1H13.74a.5.5 0 010-1h5.5v-2zm-7.5-15.062a6.989 6.989 0 00-3.5 6.038 13.092 13.092 0 003.254 8.025l7.49-.001.108-.121A13.082 13.082 0 0022.24 16a7 7 0 00-10.5-6.062zm-11.086.796l4.75 1.54a.501.501 0 01-.308.952l-4.75-1.54a.501.501 0 01.308-.952zm29.802.322a.502.502 0 01-.322.63l-4.75 1.54a.502.502 0 01-.63-.322.502.502 0 01.322-.63l4.75-1.54a.502.502 0 01.63.322zM6.535 3.166l2.94 4.05a.501.501 0 01-.81.588l-2.94-4.05a.501.501 0 01.81-.588zm18.11-.11a.501.501 0 01.11.698l-2.94 4.04a.502.502 0 01-.81-.588l2.94-4.04a.502.502 0 01.7-.11zM14.74 0a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5z'/%3E%3C/svg%3E",
	"line-communicating-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M13.854 20.146a.502.502 0 010 .708L11.707 23H21.5a.5.5 0 010 1h-9.793l2.147 2.146a.502.502 0 01-.708.708l-3-3-.011-.013a.31.31 0 01-.033-.039l.044.052a.517.517 0 01-.069-.087l-.02-.035-.02-.041-.014-.04a.345.345 0 01-.012-.046l-.006-.03c-.003-.022-.004-.043-.005-.063v-.022c0-.022.002-.043.005-.064L10 23.5a.52.52 0 01.011-.105l.012-.046.015-.04c.005-.014.012-.027.019-.04a.307.307 0 01.02-.036l.025-.035a.304.304 0 01.033-.04l.011-.012 3-3a.502.502 0 01.708 0zM28.5 13a3.5 3.5 0 11-3.464 4H6.964a3.5 3.5 0 11.001-1h18.07a3.502 3.502 0 013.465-3zm-25 1a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm25 0a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm-9.646-7.854l3 3 .011.013a.31.31 0 01.033.039l-.044-.052c.026.027.05.056.069.087l.02.035.02.041.014.04c.005.015.009.03.012.046l.006.033.005.052v.04l-.005.052L22 9.5a.52.52 0 01-.011.105l-.012.046-.015.04c-.005.014-.012.027-.019.04a.307.307 0 01-.02.036l-.025.035a.304.304 0 01-.033.04l-.011.012-3 3a.502.502 0 01-.708-.708L20.292 10H10.5a.5.5 0 010-1h9.792l-2.146-2.146a.502.502 0 01.708-.708z'/%3E%3C/svg%3E",
	"lines-symmetrical-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M26.854 17.146l5 5 .011.013a.31.31 0 01.033.039l-.044-.052c.026.027.05.056.069.087l.02.035.02.041.014.04c.005.015.009.03.012.046l.006.033.005.052v.04l-.005.052L32 22.5a.52.52 0 01-.011.105l-.012.046-.015.04c-.005.014-.012.027-.019.04a.307.307 0 01-.02.036l-.025.035a.304.304 0 01-.033.04l-.011.012-5 5a.502.502 0 01-.708-.708L30.292 23H28.5a.5.5 0 010-1h1.792l-4.146-4.146a.502.502 0 01.708-.708zM25.5 22a.5.5 0 010 1h-3a.5.5 0 010-1h3zm-6 0a.5.5 0 010 1h-3a.5.5 0 010-1h3zm-6 0a.5.5 0 010 1h-3a.5.5 0 010-1h3zm-6 0a.5.5 0 010 1h-3a.5.5 0 010-1h3zm-6 0a.5.5 0 010 1h-1a.5.5 0 010-1h1zM26.854 4.146l5 5 .011.013a.31.31 0 01.033.039l-.044-.052c.026.027.05.056.069.087l.02.035.02.041.014.04c.005.015.009.03.012.046l.006.033.005.052v.04l-.005.052L32 9.5a.52.52 0 01-.011.105l-.012.046-.015.04c-.005.014-.012.027-.019.04a.307.307 0 01-.02.036l-.025.035a.304.304 0 01-.033.04l-.011.012-5 5a.502.502 0 01-.708-.708L30.292 10H.5a.5.5 0 010-1h29.792l-4.146-4.146a.502.502 0 01.708-.708z'/%3E%3C/svg%3E",
	"magnifying-glass-check-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M23.531 3.802a10.5 10.5 0 01.895 12.21 8 8 0 11-7.831 4.956A10.492 10.492 0 018.407 18.3L.854 25.854a.502.502 0 01-.708-.708L7.7 17.593A10.501 10.501 0 1123.531 3.802zM24 17c-.135 0-.27.004-.403.011a.451.451 0 01-.19.015 6.997 6.997 0 00-5.462 3.459.493.493 0 01-.094.169A7 7 0 1024 17zm3.854 4.146a.502.502 0 010 .708l-5 5a.502.502 0 01-.708 0l-2-2a.502.502 0 01.708-.708l1.646 1.647 4.646-4.647a.502.502 0 01.708 0zM11.22 2.033a9.5 9.5 0 00-2.606 15.075.484.484 0 01.279.277 9.483 9.483 0 006.576 2.645c.56 0 1.119-.049 1.67-.146a7.996 7.996 0 016.068-3.845l-.138.191A9.5 9.5 0 0011.22 2.033zM15.5 3a.5.5 0 010 1A6.5 6.5 0 009 10.5a.5.5 0 01-1 0A7.5 7.5 0 0115.5 3z'/%3E%3C/svg%3E",
	"magnifying-glass-person-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M18.5 0C25.956 0 32 6.044 32 13.5S25.956 27 18.5 27a13.455 13.455 0 01-9.186-3.607l-8.46 8.46a.5.5 0 11-.708-.707l8.46-8.46A13.463 13.463 0 015 13.5C5 6.044 11.044 0 18.5 0zm0 1C11.596 1 6 6.596 6 13.5a12.46 12.46 0 003.644 8.821l.02.015.015.02A12.458 12.458 0 0018.5 26C25.404 26 31 20.404 31 13.5S25.404 1 18.5 1zm0 12a6.5 6.5 0 016.5 6.5.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5 6.5 6.5 0 016.5-6.5zm0 1a5.501 5.501 0 00-5.478 5h10.956a5.501 5.501 0 00-5.478-5zm0-9a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 000 5 2.5 2.5 0 000-5z'/%3E%3C/svg%3E",
	"magnifying-glass-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M18.5 0C25.956 0 32 6.044 32 13.5S25.956 27 18.5 27a13.455 13.455 0 01-9.186-3.607l-8.46 8.46a.5.5 0 11-.708-.707l8.46-8.46A13.463 13.463 0 015 13.5C5 6.044 11.044 0 18.5 0zm0 1C11.596 1 6 6.596 6 13.5a12.46 12.46 0 003.644 8.821l.02.015.015.02A12.458 12.458 0 0018.5 26C25.404 26 31 20.404 31 13.5S25.404 1 18.5 1zm0 3a.5.5 0 010 1 8.5 8.5 0 00-8.5 8.5.5.5 0 01-1 0A9.5 9.5 0 0118.5 4z'/%3E%3C/svg%3E",
	"map-france-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.335 26.295c.276.844.386 1.734.324 2.62l-.019.103c-.266.927-.61 1.83-1.03 2.699a.5.5 0 01-.82.12l-1-1.1a.486.486 0 01-.11-.2 12.566 12.566 0 01-.306-1.377c-.125-.793-.118-1.314.167-1.646.145-.17.333-.298.615-.45.093-.05.445-.229.52-.268.405-.216.634-.393.75-.595a.5.5 0 01.91.094zm-.748 1.123a4.861 4.861 0 01-.443.26c-.086.047-.434.223-.514.266-.181.098-.286.17-.331.222-.007.008-.011.37.062.839a11.83 11.83 0 00.249 1.147l.409.45c.25-.59.466-1.194.646-1.809.028-.46.002-.922-.078-1.375zM16.205.194A17.575 17.575 0 0027.63 6.835a.5.5 0 01.284.849c-.386.385-.624.902-.748 1.552-.092.488-.111.908-.107 1.698v.16l.001.066a.5.5 0 01-.205.404A5.731 5.731 0 0024.5 16c0 .616.157 1.376.449 2.243.22.651.51 1.345.852 2.061a27.6 27.6 0 001.321 2.429c.089.14.102.312.038.463a5.342 5.342 0 01-2.946 2.869.496.496 0 01-.346.008c-4.35-1.486-6.358-1.133-7.104.253-.094.173-.167.36-.232.58-.033.108-.125.465-.145.53-.116.388-.25.602-.642.604-2.529.05-5.062-.758-7.482-2.129a20.699 20.699 0 01-2.222-1.456 15.977 15.977 0 01-.836-.673.5.5 0 01-.113-.595 16.5 16.5 0 00.32-.692 26.24 26.24 0 00.71-1.791c.403-1.132.709-2.239.879-3.27.22-1.342.198-2.482-.103-3.35-.298-.856-1.107-1.683-2.276-2.433a13.555 13.555 0 00-2.529-1.26.497.497 0 01-.308-.315 46.717 46.717 0 00-.721-1.974.5.5 0 01.29-.65c1.975-.738 4.31-.728 5.714-.11.067-.576-.126-1.488-.502-2.143a.5.5 0 01.57-.73c.363.103.745.117 1.114.041a.5.5 0 01.473.157c.5.56 1.225.866 1.997.833 1.584 0 2.644-1.9 2.872-4.346a.498.498 0 01.441-.45 2.951 2.951 0 001.47-.6.502.502 0 01.702.09zm-.499.98c-.36.212-.752.366-1.16.456-.347 2.723-1.642 4.87-3.804 4.87a3.507 3.507 0 01-2.57-.965 3.526 3.526 0 01-.356.023c.348 1.026.382 2.175-.085 2.801a.5.5 0 01-.693.107c-.888-.64-2.986-.793-4.854-.238.126.332.244.653.351.956l.123.352.012.005a14.557 14.557 0 012.493 1.269c1.339.86 2.292 1.833 2.68 2.946.364 1.051.39 2.349.144 3.841-.18 1.096-.501 2.258-.922 3.442a27.58 27.58 0 01-.908 2.238c.13.106.293.234.485.38.627.471 1.337.943 2.115 1.384 2.189 1.24 4.463 1.986 6.701 2 .034-.126.088-.33.116-.422.083-.28.18-.527.31-.768 1.013-1.881 3.485-2.339 8.127-.785a4.34 4.34 0 002.123-2.033 28.499 28.499 0 01-1.235-2.297c-.36-.75-.664-1.48-.898-2.174-.324-.961-.501-1.821-.5-2.578a6.736 6.736 0 012.558-5.071c-.004-.835.018-1.299.125-1.863.096-.505.251-.96.48-1.361a18.572 18.572 0 01-10.958-6.516z'/%3E%3C/svg%3E",
	"measure-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M24.5 1a.5.5 0 01.5.5v13.792l5.146-5.146A.5.5 0 0131 10.5v20a.5.5 0 01-.5.5h-21a.5.5 0 01-.5-.5v-29a.5.5 0 01.5-.5h15zm-19.646.146l3 3a.502.502 0 01-.708.708L5 2.707v26.585l2.146-2.146a.502.502 0 01.708.708l-3 3a.502.502 0 01-.708 0l-3-3a.502.502 0 01.708-.708L4 29.292V2.707L1.854 4.854a.502.502 0 01-.708-.708l3-3a.502.502 0 01.708 0zM14 24h-4v6h.292L14 26.292V24zm16-12.293L11.707 30H30V11.707zm-2.95 8.797l-.05 6a.5.5 0 01-.5.496h-6a.5.5 0 01-.352-.855l6.05-6a.5.5 0 01.852.36zm-1.01 1.206L21.714 26h4.29l.036-4.29zM19 16h-4v9.292l4-4V16zm-5 0h-4v7h4v-7zm10 0h-4v4.292l4-4V16zM14 9h-4v6h4V9zm5 0h-4v6h4V9zm5 0h-4v6h4V9zM14 2h-4v6h4V2zm5 0h-4v6h4V2zm5 0h-4v6h4V2z'/%3E%3C/svg%3E",
	"medal-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12.5 0a.5.5 0 01.474.342L16 9.416 19.026.342A.5.5 0 0119.5 0h6a.5.5 0 01.474.658l-4.956 14.87a9 9 0 11-10.036 0L6.026.658A.5.5 0 016.5 0h6zM16 15c-.365 0-.724.024-1.076.072a.386.386 0 01-.117.018A8 8 0 1016 15zm0 1a7 7 0 110 14 7 7 0 010-14zm0 1a6 6 0 100 12 6 6 0 000-12zm.986 3.234v4.464h1.026v1.242h-3.798v-1.242h1.224v-2.952h-1.08v-.954c.648-.126 1.062-.288 1.494-.558h1.134zM12.14 1H7.194l4.668 14.006a8.954 8.954 0 012.562-.869l1.048-3.141L12.14 1zm12.666 0H19.86l-3.378 10.131a.464.464 0 01-.022.066l-.941 2.816a8.953 8.953 0 014.619.993L24.806 1z'/%3E%3C/svg%3E",
	"microphone-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M10.716 32H7.5a.5.5 0 010-1l3.093-.001.119-.07A6.99 6.99 0 0014 25v-1.223c-4.008-.91-7-4.494-7-8.777V9.5a.5.5 0 011 0V15a8 8 0 0016 0V9.5a.5.5 0 011 0V15c0 4.283-2.992 7.867-7 8.777V25a6.988 6.988 0 003.406 6H24.5a.5.5 0 010 1H10.717zM15 23.945V25c0 2.322-1.008 4.5-2.715 6h7.43A7.988 7.988 0 0117 25v-1.055a9.168 9.168 0 01-2 0zM16 0a6 6 0 016 6v9a6 6 0 11-12 0V6a6 6 0 016-6zm0 1a5 5 0 00-5 5v9a5 5 0 0010 0V6a5 5 0 00-5-5z'/%3E%3C/svg%3E",
	"modem-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20.5 7a.5.5 0 01.5.5V18h9.545c.804 0 1.455.672 1.455 1.5v11c0 .828-.651 1.5-1.455 1.5H1.455C.65 32 0 31.328 0 30.5v-11c0-.828.651-1.5 1.455-1.5H20V7.5a.5.5 0 01.5-.5zm10.045 12H1.455a.493.493 0 00-.485.5v11c0 .276.217.5.485.5h29.09a.493.493 0 00.485-.5v-11c0-.276-.217-.5-.485-.5zM6 25a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zM13.859.152a.5.5 0 01-.011.707A9.365 9.365 0 0011 7.496a9.37 9.37 0 002.848 6.645.5.5 0 01-.696.718A10.373 10.373 0 0110 7.496 10.369 10.369 0 0113.152.141a.5.5 0 01.707.011zM27.848.141A10.373 10.373 0 0131 7.504a10.369 10.369 0 01-3.152 7.355.5.5 0 01-.696-.718A9.365 9.365 0 0030 7.504 9.37 9.37 0 0027.152.859a.5.5 0 01.696-.718zm-3.026 2.977c1.293 1.09 2.08 2.665 2.177 4.41a6.156 6.156 0 01-2.177 4.354.499.499 0 11-.644-.764c1.082-.914 1.741-2.232 1.823-3.59a5.16 5.16 0 00-1.823-3.646.499.499 0 11.644-.764zm-7.94.06a.499.499 0 01-.06.704c-1.082.914-1.741 2.232-1.823 3.59a5.16 5.16 0 001.823 3.646.499.499 0 11-.644.764c-1.293-1.09-2.08-2.665-2.177-4.41a6.156 6.156 0 012.177-4.354.499.499 0 01.704.06z'/%3E%3C/svg%3E",
	"multi-device-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M28.5 2A1.5 1.5 0 0130 3.5V17h1.5a.5.5 0 01.5.5v2a1.5 1.5 0 01-1.5 1.5H10v7.5A1.5 1.5 0 018.5 30h-7A1.5 1.5 0 010 28.5v-14A1.5 1.5 0 011.5 13H6V3.5A1.5 1.5 0 017.5 2h21zM9 26H1v2.5a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V26zm-3.5 1a.5.5 0 010 1h-1a.5.5 0 010-1h1zm3-13h-7a.5.5 0 00-.5.5V25h8V14.5a.5.5 0 00-.5-.5zM31 18H10v2h20.5a.5.5 0 00.5-.5V18zM28.5 3h-21a.5.5 0 00-.5.5V13h1.5a1.5 1.5 0 011.5 1.5V17h19V3.5a.5.5 0 00-.5-.5zm-10 1a.5.5 0 010 1h-1a.5.5 0 010-1h1z'/%3E%3C/svg%3E",
	"network-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M28.27.03a3.7 3.7 0 110 7.4 3.7 3.7 0 01-3.638-3.025l-7.287 10.562H24.6a3.701 3.701 0 110 1h-7.945l-.014.02 7.985 11.598a3.7 3.7 0 11.199 2.052l-8.792-12.77-8.939 12.96a3.7 3.7 0 11.29-2.181l8.043-11.66-.014-.02-8.013.001a3.702 3.702 0 01-7.367-.5 3.7 3.7 0 017.367-.5h7.324L7.388 4.312A3.7 3.7 0 116.97 1.94l8.97 13.027h.191l8.706-12.62A3.7 3.7 0 0128.27.03zM3.737 25.57a2.7 2.7 0 102.391 3.955.476.476 0 01.074-.166l.015-.02a2.701 2.701 0 00-2.48-3.769zm24.526-.003a2.7 2.7 0 00-2.54 3.618l-.02-.04a.526.526 0 01.076.176 2.696 2.696 0 002.484 1.646 2.7 2.7 0 000-5.4zm-24.53-12.8a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zm24.534 0a2.699 2.699 0 100 5.4 2.7 2.7 0 000-5.4zM3.733 1.033a2.7 2.7 0 102.386 1.435l-.013-.02a2.691 2.691 0 00-2.373-1.415zM28.27 1.03a2.699 2.699 0 00-2.503 1.686 2.67 2.67 0 00-.197 1.013 2.7 2.7 0 102.7-2.7z'/%3E%3C/svg%3E",
	"newtab-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12.267.033a.5.5 0 010 1H1.033v29.934h29.934V19.733a.5.5 0 011 0v11.734a.5.5 0 01-.5.5H.533a.5.5 0 01-.5-.5V.533a.5.5 0 01.5-.5h11.734zm19.2 0h.011c.02 0 .042.003.062.006l-.073-.006a.52.52 0 01.105.011l.047.013.039.014c.013.006.027.012.04.02a.364.364 0 01.071.044l.039.033.012.012.012.012.035.041L31.82.18a.443.443 0 01.091.124l.018.039.014.04.012.042.007.042c.002.015.004.03.004.045V11.2a.5.5 0 11-1 0V1.74L15.82 16.886a.5.5 0 01-.707-.707L30.258 1.033H20.8a.5.5 0 010-1h10.667z'/%3E%3C/svg%3E",
	"nra-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M28.467.033a3.5 3.5 0 013.5 3.5v24.934a3.5 3.5 0 01-3.5 3.5H3.533a3.5 3.5 0 01-3.5-3.5V3.533a3.5 3.5 0 013.5-3.5h24.934zm0 1H3.533a2.5 2.5 0 00-2.5 2.5v24.934a2.5 2.5 0 002.5 2.5h24.934a2.5 2.5 0 002.5-2.5V3.533a2.5 2.5 0 00-2.5-2.5zM6.699 11.861l3.04 5.27.928 1.738c0-.842-.139-1.792-.139-2.677v-4.33h1.013v8.405h-1.066l-3.008-5.334-.907-1.728c0 .843.128 1.739.128 2.624v4.438H5.632V11.86h1.067zm9.664 0c1.696 0 2.933.619 2.933 2.358a2.304 2.304 0 01-1.877 2.378l2.133 3.659-1.227.01-2.026-3.54h-1.504v3.54h-1.067v-8.405h2.635zm8.064.011l2.837 8.395h-1.12l-.81-2.571h-3.062l-.8 2.57h-1.067l2.838-8.394h1.184zm-.587.864c-.267.97-.533 1.888-.832 2.827l-.405 1.28h2.464l-.395-1.28c-.192-.626-.38-1.242-.562-1.871l-.27-.956zm-7.637 0h-1.408v3.115h1.408c1.301 0 2.026-.534 2.026-1.622s-.714-1.493-2.026-1.493z'/%3E%3C/svg%3E",
	"openstack-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M6.34 20.726v1.004c.001.733.56 1.336 1.276 1.405l.136.006h12.576c.733 0 1.335-.56 1.404-1.275l.007-.136v-1.004h6.35v6.147a2.62 2.62 0 01-2.458 2.606l-.165.004H2.609a2.615 2.615 0 01-2.604-2.445L0 26.873v-6.147h6.34zm24.205 5.954a1.402 1.402 0 11.002 2.804 1.402 1.402 0 01-.002-2.804zm.001.342a1.058 1.058 0 10.001 2.115 1.058 1.058 0 00-.001-2.115zm.037.346a.52.52 0 01.373.131c.08.087.122.202.116.319a.418.418 0 01-.259.411l.293.51h-.327l-.253-.456h-.173v.457h-.284v-1.372zm-.028.258h-.204v.414h.21a.2.2 0 00.225-.205c0-.14-.078-.21-.23-.21zM6.342 12.57v6.342H0V12.57h6.342zm21.739 0v6.342h-6.342V12.57h6.342zM25.47 2a2.618 2.618 0 012.612 2.444l.005.165v6.148h-6.345V9.753c0-.733-.56-1.336-1.275-1.404l-.136-.007H7.756c-.733 0-1.336.56-1.404 1.275l-.007.136v1.004H.005V4.61a2.615 2.615 0 012.444-2.603L2.613 2H25.47z'/%3E%3C/svg%3E",
	"over-the-box-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M6.933 29.952a.5.5 0 110 1h-3.2a.5.5 0 010-1h3.2zm21.334 0a.5.5 0 110 1h-3.2a.5.5 0 010-1h3.2zm.2-16.517a3.5 3.5 0 013.5 3.5v8.452a3.5 3.5 0 01-3.5 3.5H3.533a3.5 3.5 0 01-3.5-3.5v-8.452a3.5 3.5 0 013.5-3.5h24.934zm0 1H3.533a2.5 2.5 0 00-2.5 2.5v8.452a2.5 2.5 0 002.5 2.5h24.934a2.5 2.5 0 002.5-2.5v-8.452a2.5 2.5 0 00-2.5-2.5zM16 18a3 3 0 110 6 3 3 0 010-6zm0 .974c-1.137 0-2.053.91-2.053 2.026 0 1.115.916 2.026 2.053 2.026s2.053-.91 2.053-2.026c0-1.115-.916-2.026-2.053-2.026zM15.995 6.21c4.232 0 8.292 1.628 11.286 4.527a.5.5 0 11-.695.718C23.779 8.737 19.968 7.21 15.995 7.21c-3.974 0-7.784 1.527-10.591 4.245a.5.5 0 01-.696-.718c2.995-2.9 7.054-4.527 11.287-4.527zm0-3.094c5.08 0 9.953 1.953 13.547 5.432a.5.5 0 11-.695.719c-3.407-3.298-8.03-5.151-12.852-5.151-4.822 0-9.446 1.853-12.853 5.15a.5.5 0 11-.695-.718C6.04 5.07 10.914 3.117 15.995 3.117zm-.006-3.11c5.931 0 11.62 2.282 15.815 6.343a.5.5 0 01-.696.719c-4.007-3.88-9.446-6.062-15.119-6.062C10.317 1.007 4.878 3.188.87 7.07a.5.5 0 11-.695-.719C4.37 2.29 10.058.007 15.989.007z'/%3E%3C/svg%3E",
	"padlock-closed-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0a8 8 0 018 8v4h3.5a1.5 1.5 0 011.5 1.5v17a1.5 1.5 0 01-1.5 1.5h-23A1.5 1.5 0 013 30.5v-17A1.5 1.5 0 014.5 12H8V8a8 8 0 018-8zm11.5 13h-23a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h23a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5zM16 19a2 2 0 011.001 3.732L17 25a1 1 0 01-2 0v-2.268A2 2 0 0116 19zm0-18a7 7 0 00-7 7v4h14V8a7 7 0 00-7-7z'/%3E%3C/svg%3E",
	"padlock-opened-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0a8 8 0 018 8v4h3.5a1.5 1.5 0 011.5 1.5v17a1.5 1.5 0 01-1.5 1.5h-23A1.5 1.5 0 013 30.5v-17A1.5 1.5 0 014.5 12H23V8A7 7 0 109 8v.5a.5.5 0 01-1 0V8a8 8 0 018-8zm11.5 13h-23a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h23a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5zM16 19a2 2 0 011.001 3.732L17 25a1 1 0 01-2 0v-2.268A2 2 0 0116 19z'/%3E%3C/svg%3E",
	"padlock-transit-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 4a6 6 0 016 6v3h2.5a1.5 1.5 0 011.5 1.5V20h4.293l-1.147-1.146a.502.502 0 01.708-.708l2 2a.502.502 0 010 .708l-2 2a.502.502 0 01-.708-.708L30.292 21H26v5.5a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 016 26.5V21H1.707l1.147 1.146a.502.502 0 01-.708.708l-2-2a.502.502 0 010-.708l2-2a.502.502 0 01.708.708L1.707 20H6v-5.5A1.5 1.5 0 017.5 13H10v-3a6 6 0 016-6zm8.5 10h-17a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5zM16 18a2 2 0 011.001 3.732L17 23a1 1 0 01-2 0v-1.268A2 2 0 0116 18zm0-13a5 5 0 00-5 5v3h10v-3a5 5 0 00-5-5z'/%3E%3C/svg%3E",
	"page-certificate-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M21.092 0c.394.002.77.158 1.051.436l5.422 5.412c.28.283.437.666.435 1.062V27.5a1.5 1.5 0 01-1.5 1.5H23v2.5a.5.5 0 01-.868.339l-2.632-2.86-2.632 2.86A.5.5 0 0116 31.5V29H5.5A1.5 1.5 0 014 27.5v-26A1.5 1.5 0 015.5 0h15.592zM19.5 26a4.484 4.484 0 01-2.5-.757v4.975l2.132-2.317a.5.5 0 01.736 0L22 30.218v-4.976a4.476 4.476 0 01-2.5.758zM21 1H5.5a.5.5 0 00-.5.5v26a.5.5 0 00.5.5H16v-3.671a4.5 4.5 0 117-.001V28h3.5a.5.5 0 00.5-.5L26.999 7H22.5A1.5 1.5 0 0121 5.5V1zm-1.5 17a3.5 3.5 0 00-2.65 5.787.26.26 0 01.055.06A3.486 3.486 0 0019.5 25a3.49 3.49 0 002.596-1.153.431.431 0 01.051-.062c.532-.611.853-1.41.853-2.285a3.5 3.5 0 00-3.5-3.5zm4.5-5a.5.5 0 010 1H8a.5.5 0 010-1h16zm0-3a.5.5 0 010 1H8a.5.5 0 010-1h16zm-2-8.294V5.5a.5.5 0 00.5.5h3.802L22 1.706z'/%3E%3C/svg%3E",
	"page-info-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M22.5 0l.079.007-.031-.005.007.001.025.004h.004l.024.005c.02.004.04.01.058.016l.032.013.041.02.036.022.03.02c.013.01.025.02.036.032l6.013 6.011A.504.504 0 0129 6.5v24a1.5 1.5 0 01-1.5 1.5h-23A1.5 1.5 0 013 30.5v-29A1.5 1.5 0 014.5 0h18zM22 1H4.5a.5.5 0 00-.5.5v29a.5.5 0 00.5.5h23a.5.5 0 00.5-.5V7h-4.5A1.5 1.5 0 0122 5.5V1zm2.5 24a.5.5 0 010 1h-17a.5.5 0 010-1h17zm0-4a.5.5 0 010 1h-17a.5.5 0 010-1h17zm-9-14a5.5 5.5 0 110 11 5.5 5.5 0 110-11zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm.52 3.98v2.99h-1v-2.99h1zm-.52-2a.5.5 0 110 1 .5.5 0 010-1zM23 1.708V5.5a.5.5 0 00.5.5h3.793L23 1.708z'/%3E%3C/svg%3E",
	"page-question-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M22.5 0a.61.61 0 01.086.007L22.5 0a.483.483 0 01.166.028l.032.013.041.02a.348.348 0 01.036.022l.03.02c.013.01.025.02.036.032l.013.011 6 6 .011.013a.267.267 0 01.031.036l-.042-.049a.475.475 0 01.085.115l.017.034.016.04a.474.474 0 01.016.057l.005.022A.61.61 0 0129 6.5v24a1.5 1.5 0 01-1.5 1.5h-23A1.5 1.5 0 013 30.5v-29A1.5 1.5 0 014.5 0h18zM22 1H4.5a.5.5 0 00-.5.5v29a.5.5 0 00.5.5h23a.5.5 0 00.5-.5V7h-4.5A1.5 1.5 0 0122 5.5V1zm2.5 24a.5.5 0 010 1h-17a.5.5 0 010-1h17zm0-4a.5.5 0 010 1h-17a.5.5 0 010-1h17zm-9-14a5.5 5.5 0 110 11 5.5 5.5 0 110-11zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm-.04 6a.625.625 0 110 1.25.625.625 0 010-1.25zm1.106-3.953c.285.254.444.621.434 1.003 0 1-1.25 1.38-1.14 2.41h-.81c-.17-1.17 1-1.62 1-2.34h.05a.602.602 0 00-.65-.64 1.091 1.091 0 00-.82.42l-.51-.47c.336-.433.851-.69 1.4-.7.378-.053.76.063 1.046.317zM23 1.708V5.5a.5.5 0 00.5.5h3.793L23 1.708z'/%3E%3C/svg%3E",
	"page-script-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M22.5 0a.61.61 0 01.086.007L22.5 0a.483.483 0 01.166.028l.032.013.041.02a.348.348 0 01.036.022l.03.02c.013.01.025.02.036.032l.013.011 6 6A.504.504 0 0129 6.5v24a1.5 1.5 0 01-1.5 1.5h-23A1.5 1.5 0 013 30.5v-29A1.5 1.5 0 014.5 0h18zM22 1H4.5a.5.5 0 00-.5.5v29a.5.5 0 00.5.5h23a.5.5 0 00.5-.5V7h-4.5A1.5 1.5 0 0122 5.5V1zm-8.136 11.147a.5.5 0 01-.001.707L10.199 16.5l3.664 3.646a.5.5 0 01-.706.708l-4.02-4a.5.5 0 010-.708l4.02-4a.5.5 0 01.707.001zm4.979-.001l4.02 4a.5.5 0 010 .708l-4.02 4a.5.5 0 01-.706-.708l3.664-3.646-3.664-3.646a.5.5 0 01.706-.708zM23 1.708V5.5a.5.5 0 00.5.5h3.793L23 1.708z'/%3E%3C/svg%3E",
	"page-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M22.5 0a.61.61 0 01.086.007L22.5 0a.483.483 0 01.166.028l.032.013.041.02a.348.348 0 01.036.022l.03.02c.013.01.025.02.036.032l.013.011 6 6 .011.013a.267.267 0 01.031.036l-.042-.049a.475.475 0 01.085.115l.017.034.016.04a.474.474 0 01.016.057l.005.022A.61.61 0 0129 6.5v24a1.5 1.5 0 01-1.5 1.5h-23A1.5 1.5 0 013 30.5v-29A1.5 1.5 0 014.5 0h18zM22 1H4.5a.5.5 0 00-.5.5v29a.5.5 0 00.5.5h23a.5.5 0 00.5-.5V7h-4.5A1.5 1.5 0 0122 5.5V1zm2.5 25a.5.5 0 010 1h-17a.5.5 0 010-1h17zm0-5a.5.5 0 010 1h-17a.5.5 0 010-1h17zm0-5a.5.5 0 010 1h-17a.5.5 0 010-1h17zm0-5a.5.5 0 010 1h-17a.5.5 0 010-1h17zM23 1.708V5.5a.5.5 0 00.5.5h3.793L23 1.708z'/%3E%3C/svg%3E",
	"paperplane-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.641.02l.028.01a.586.586 0 01.079.036l.006.003a.49.49 0 01.242.497l-.007.037-.001.007-7 31a.5.5 0 01-.842.244l-7.693-7.694L11.8 26.9a.5.5 0 01-.8-.4v-6.793l-8.854-8.853a.5.5 0 01.186-.825L30.302.04a.488.488 0 01.34-.02zm-1.01 2.055L12.208 19.5l11.005 11.005 6.42-28.43zM12 20.707V25.5l2.739-2.054-2.74-2.74zM28.573 1.719l-25.16 8.986 8.087 8.088L28.573 1.719z'/%3E%3C/svg%3E",
	"partner-platformsh-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23113f6d%7D%3C/style%3E%3C/defs%3E%3Cpath d='M0 0h20v7.95H0zM0 17.3h20V20H0zM0 10.51h20v4.08H0z' class='cls-1'/%3E%3C/svg%3E",
	"pause-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm-3.5 8a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-2A1.5 1.5 0 019 21.5v-11A1.5 1.5 0 0110.5 9h2zm9 0a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-2a1.5 1.5 0 01-1.5-1.5v-11A1.5 1.5 0 0119.5 9h2zm-9 1h-2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5zm9 0h-2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5z'/%3E%3C/svg%3E",
	"pen-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M25.854.146l6 6a.502.502 0 010 .708l-21 21-.168.11-10 4a.5.5 0 01-.65-.65l4-10 .11-.168 21-21a.502.502 0 01.708 0zM4.682 22.39l-1.37 3.424 2.874 2.873 3.424-1.369-4.928-4.928zM21.5 5.207L5.207 21.5l5.293 5.293L26.793 10.5 21.5 5.207zm4-4L22.207 4.5 27.5 9.793 30.793 6.5 25.5 1.207z'/%3E%3C/svg%3E",
	"person-happy-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M22.5 0A2.5 2.5 0 0125 2.5v7a1.5 1.5 0 01-1 1.414V15c0 2.55-1.193 4.82-3.05 6.285.032.064.05.138.05.215v2a1.5 1.5 0 001.493 1.5H25.5a5.5 5.5 0 015.5 5.5v1a.5.5 0 01-1 0v-1a4.5 4.5 0 00-4.5-4.5h-2l-.004.221c-.13 3.378-3.225 6.059-6.996 6.059-3.771 0-6.866-2.681-6.996-6.059L9.5 26l-.01-.001L6.5 26A4.5 4.5 0 002 30.5v1a.5.5 0 01-1 0v-1A5.5 5.5 0 016.5 25h3.007l.137-.007A1.5 1.5 0 0011 23.5v-2c0-.077.018-.15.05-.216A7.981 7.981 0 018 15v-4.085c-.582-.206-1-.762-1-1.415v-5A2.5 2.5 0 019.5 2H12v-.5A1.5 1.5 0 0113.5 0h9zM16 23a7.971 7.971 0 01-4-1.07v1.57c0 1.04-.636 1.932-1.54 2.309.026.058.04.123.04.191 0 2.9 2.675 5.28 6 5.28 3.248 0 5.875-2.27 5.996-5.078L22.5 26a2.5 2.5 0 01-2.5-2.5l.001-1.57A7.972 7.972 0 0116 23zm6.5-22h-9a.5.5 0 00-.5.5v1a.5.5 0 01-.5.5h-3A1.5 1.5 0 008 4.5v5l.005.053.003-.066A1.65 1.65 0 019.65 8h8.85a.5.5 0 010 1H9.65a.65.65 0 00-.65.65V15a7 7 0 1014 0V8.5a.5.5 0 011 0v-6A1.5 1.5 0 0022.5 1zM20 14.5a.5.5 0 01.5.5c0 2.37-2.021 4.28-4.5 4.28s-4.5-1.91-4.5-4.28a.5.5 0 011 0c0 1.804 1.561 3.28 3.5 3.28s3.5-1.476 3.5-3.28a.5.5 0 01.5-.5z'/%3E%3C/svg%3E",
	"person-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 32c-3.749 0-6.83-2.65-6.993-6H6.5A4.5 4.5 0 002 30.5v1a.5.5 0 01-1 0v-1A5.5 5.5 0 016.5 25h3a1.5 1.5 0 001.5-1.5v-2c0-.077.018-.15.05-.216A7.981 7.981 0 018 15v-4.085c-.582-.206-1-.762-1-1.415v-5A2.5 2.5 0 019.5 2H12v-.5A1.5 1.5 0 0113.5 0h9A2.5 2.5 0 0125 2.5v7a1.5 1.5 0 01-1 1.414V15c0 2.55-1.193 4.82-3.05 6.285.032.064.05.138.05.215v2a1.5 1.5 0 001.356 1.493L22.5 25h3a5.5 5.5 0 015.5 5.5v1a.5.5 0 01-1 0v-1a4.5 4.5 0 00-4.5-4.5h-2.507c-.164 3.35-3.244 6-6.993 6zm0-9a7.971 7.971 0 01-4-1.07v1.57a2.502 2.502 0 01-1.994 2.449C10.142 28.745 12.763 31 16 31c3.237 0 5.858-2.255 5.994-5.051A2.502 2.502 0 0120 23.5l.001-1.57A7.972 7.972 0 0116 23zm6.5-22h-9a.5.5 0 00-.5.5v1a.5.5 0 01-.5.5h-3A1.5 1.5 0 008 4.5v5l.005.053.003-.066A1.65 1.65 0 019.65 8h8.85a.5.5 0 010 1H9.65a.65.65 0 00-.65.65V15a7 7 0 1014 0V8.5a.5.5 0 011 0v-6A1.5 1.5 0 0022.5 1z'/%3E%3C/svg%3E",
	"phone-dots-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M2.25 0h5.97c.62-.036 1.227.2 1.659.647.432.447.647 1.06.591 1.627.022 1.968.3 3.925.827 5.82.395.783.194 1.738-.455 2.261l-3.526 3.499a26.319 26.319 0 0010.662 10.671l3.588-3.58a2.642 2.642 0 012.172-.42c1.944.648 3.98.977 6.028.975a2.133 2.133 0 011.643.647c.432.447.647 1.06.591 1.633v5.972A2.132 2.132 0 0129.781 32a29.75 29.75 0 01-21.067-8.714A29.73 29.73 0 010 2.25 2.136 2.136 0 01.634.606 2.11 2.11 0 012.25 0zm-.915 1.32a1.15 1.15 0 00-.335.9 28.756 28.756 0 008.42 20.36A28.772 28.772 0 0029.808 31c.322.02.636-.1.864-.328.227-.228.347-.542.328-.892l.002-6.047a1.13 1.13 0 00-1.192-1.234l-.03.001a19.838 19.838 0 01-6.312-1.013c-.456-.105-.936-.007-1.254.217l-3.79 3.79a.503.503 0 01-.585.09A27.324 27.324 0 016.257 13.991a.5.5 0 01.09-.586l3.828-3.793a.871.871 0 00.216-1.093l-.042-.104a23.655 23.655 0 01-.877-6.182A1.13 1.13 0 008.25 1L2.212.999a1.13 1.13 0 00-.877.32zM27.5 13a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0127.5 13zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0122.5 13zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0117.5 13z'/%3E%3C/svg%3E",
	"phone-filter-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M10.69.56c.388.387.591.922.56 1.435.017 1.731.263 3.453.712 5.065a1.88 1.88 0 01-.408 2.044l-3.035 3.034c.556.997 1.18 1.953 1.869 2.863L15.5 15a.5.5 0 01.38.825l-2.313 2.697.17.152a20.885 20.885 0 003.966 2.713l3.105-3.143a2.369 2.369 0 011.953-.368c1.688.573 3.458.868 5.21.875a1.916 1.916 0 011.469.559c.388.387.591.922.56 1.44v5.221a1.921 1.921 0 01-.56 1.469A1.899 1.899 0 0128 28a25.91 25.91 0 01-17.081-6.387L10 22.685V26.5c0 .133-.053.26-.146.354l-3 3A.5.5 0 016 29.5v-6.815l-5.88-6.86A.5.5 0 01.5 15l4.986.001A25.85 25.85 0 012 2.03 1.922 1.922 0 014 0h5.221a1.921 1.921 0 011.469.56zM14.413 16H1.587l5.293 6.175c.077.09.12.206.12.325v5.793l2-2V22.5a.5.5 0 01.12-.325l1.368-1.598.012-.013.007-.01L14.413 16zm7.043 3l-3.3 3.35a.497.497 0 01-.581.096 21.899 21.899 0 01-4.66-3.163l-1.346 1.57a24.937 24.937 0 0016.46 6.148A.92.92 0 0029 26v-5.279a.916.916 0 00-.267-.704.942.942 0 00-.735-.267 17.358 17.358 0 01-5.511-.913c-.38-.088-.779-.009-1.03.164zM3.971 1a.916.916 0 00-.704.267.941.941 0 00-.267.734 24.881 24.881 0 003.65 13h2.497a25.532 25.532 0 01-1.687-2.714.499.499 0 01.086-.59l3.3-3.3c.251-.251.327-.629.173-1.012a20.7 20.7 0 01-.768-5.414A.92.92 0 009.25 1H3.971z'/%3E%3C/svg%3E",
	"phone-fobidden-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M11.38.62c.406.407.62.968.587 1.507.023 1.832.286 3.654.762 5.363.303.735.133 1.58-.429 2.144l-3.26 3.26a24.409 24.409 0 009.854 9.956l3.32-3.363a2.492 2.492 0 012.053-.387c1.805.612 3.696.927 5.57.934a2.014 2.014 0 011.542.587c.407.406.62.967.588 1.512l-.001 5.571a2.016 2.016 0 01-2.098 2.129 27.588 27.588 0 01-15.023-4.402 7.433 7.433 0 01-12.578 4.414.477.477 0 01-.06-.051l-.052-.06a7.435 7.435 0 014.414-12.581A27.542 27.542 0 012.168 2.161 2.012 2.012 0 012.754.62C3.161.213 3.722 0 4.267.032l5.57.001a2.014 2.014 0 011.542.587zm.976 19.732l-9.07 9.071a6.433 6.433 0 009.07-9.07zm10.507-.108l-3.52 3.574a.5.5 0 01-.59.091 25.384 25.384 0 01-5.18-3.614 7.381 7.381 0 011.322 3.969l-.21-.142a26.622 26.622 0 0015.21 4.712 1.013 1.013 0 001.072-1.101v-5.629a1.012 1.012 0 00-.295-.776 1.038 1.038 0 00-.807-.295 18.497 18.497 0 01-5.872-.973c-.414-.096-.85-.009-1.13.184zM7.467 18.1a6.434 6.434 0 00-4.889 10.615l9.07-9.07A6.405 6.405 0 007.467 18.1zM4.237 1.032a1.02 1.02 0 00-.776.296 1.037 1.037 0 00-.294.807 26.587 26.587 0 004.567 14.97 7.392 7.392 0 013.971 1.321 25.356 25.356 0 01-3.723-5.398.5.5 0 01.091-.582l3.52-3.52c.277-.277.36-.693.192-1.11a22.027 22.027 0 01-.817-5.712 1.017 1.017 0 00-.296-.776 1.036 1.036 0 00-.805-.295h-5.63z'/%3E%3C/svg%3E",
	"phone-forward-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M8.354 23.646a.502.502 0 010 .708L1.74 30.966h5.193a.5.5 0 010 1H.522a.446.446 0 01-.063-.005l.074.006a.52.52 0 01-.105-.011l-.046-.013-.04-.014c-.013-.006-.027-.012-.04-.02a.364.364 0 01-.071-.044l-.039-.033-.012-.012-.012-.012a.412.412 0 01-.033-.04l.045.052a.524.524 0 01-.07-.087L.09 31.7l-.02-.042c-.004-.012-.01-.026-.013-.04a.333.333 0 01-.013-.045L.04 31.54a.692.692 0 01-.006-.064v-6.41a.5.5 0 011 0v5.193l6.613-6.614a.502.502 0 01.708 0zM12.136.6c.396.394.606.938.577 1.465.017 1.78.27 3.552.731 5.213a1.92 1.92 0 01-.418 2.078l-3.13 3.13c2.17 4.01 5.46 7.3 9.469 9.47l3.071-3.06c.293-.427.677-.65 1.12-.681.282-.02.52.03.875.144l.114.037a16.93 16.93 0 005.373.901 1.951 1.951 0 011.48.569c.395.395.602.94.569 1.467l-.001 5.367a1.95 1.95 0 01-.568 1.498 1.93 1.93 0 01-1.467.569 26.673 26.673 0 01-18.888-7.81A26.653 26.653 0 013.234 2.096a1.958 1.958 0 01.572-1.49A1.946 1.946 0 015.269.033l5.368.001a1.968 1.968 0 011.5.566zm-6.893.433a.958.958 0 00-.73.28.98.98 0 00-.28.757 25.668 25.668 0 007.518 18.18 25.69 25.69 0 0018.21 7.518.955.955 0 00.73-.277.976.976 0 00.276-.76v-5.428a.95.95 0 00-1.006-1.007l-.032.001a17.941 17.941 0 01-5.7-.952l-.106-.035c-.24-.077-.379-.106-.498-.098-.136.01-.243.072-.423.32l-3.392 3.392a.5.5 0 01-.585.09A24.48 24.48 0 018.837 12.626a.5.5 0 01.09-.585l3.39-3.391c.261-.262.34-.653.183-1.048a21.268 21.268 0 01-.786-5.56.954.954 0 00-.283-.732.982.982 0 00-.764-.277H5.243zm24.444 1.28a.5.5 0 010 .707l-6.614 6.613h5.194a.5.5 0 010 1h-6.423a.313.313 0 01-.043-.004l.066.004a.552.552 0 01-.109-.011l-.042-.012a.316.316 0 01-.043-.016c-.012-.004-.022-.01-.033-.015a.383.383 0 01-.044-.025l-.031-.022-.036-.03-.016-.015-.016-.017a.216.216 0 01-.027-.033l.043.05a.524.524 0 01-.09-.123l-.018-.037-.015-.043c-.005-.014-.008-.028-.012-.043l-.007-.041-.004-.044V3.733a.5.5 0 011 0v5.193l6.613-6.613a.5.5 0 01.707 0z'/%3E%3C/svg%3E",
	"phone-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M31.409 22.147c.432.447.647 1.06.591 1.633v5.972A2.132 2.132 0 0129.781 32a29.75 29.75 0 01-21.067-8.714A29.73 29.73 0 010 2.25 2.136 2.136 0 01.634.606 2.11 2.11 0 012.25 0h5.97c.62-.036 1.227.2 1.659.647.432.447.647 1.06.591 1.627.022 1.968.3 3.925.827 5.82.395.783.194 1.738-.455 2.261l-3.526 3.499a26.319 26.319 0 0010.662 10.671l3.588-3.58a2.642 2.642 0 012.172-.42c1.944.648 3.98.977 6.028.975a2.133 2.133 0 011.643.647zm-1.6.352l-.028.001a19.84 19.84 0 01-6.313-1.013c-.456-.105-.936-.007-1.254.217l-3.79 3.79a.503.503 0 01-.585.09A27.324 27.324 0 016.257 13.991a.5.5 0 01.09-.586l3.828-3.793a.871.871 0 00.216-1.093l-.042-.104a23.655 23.655 0 01-.877-6.182A1.13 1.13 0 008.25 1L2.212.999a1.13 1.13 0 00-.877.32A1.154 1.154 0 001 2.221a28.75 28.75 0 0028.808 28.78c.322.018.636-.102.864-.33A1.15 1.15 0 0031 29.78l.002-6.047a1.13 1.13 0 00-1.192-1.234z'/%3E%3C/svg%3E",
	"pig-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M27.63 5.5v4.586A9.385 9.385 0 0129.885 14H31.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-1.608a10.89 10.89 0 01-1.926 3.896l-.976 4.706a.5.5 0 01-.49.398h-3a.5.5 0 01-.5-.5v-2.228c-.78.32-1.603.562-2.5.728h-3.016A11.966 11.966 0 0115 25.657V27.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.486-.384l-1.112-4.681a9.653 9.653 0 01-1.86-9.18 3.724 3.724 0 00-3.167-1.256 2.753 2.753 0 01-.631 2.036c-.257.353-.57.643-.918.795-.516.225-1.053.112-1.464-.363-.764-.882-.04-2.126 1.028-2.85.23-.133.467-.244.708-.334a3.02 3.02 0 00-2.965-.801.5.5 0 01-.266-.964c1.437-.397 2.975.034 4.05 1.185.07.106.132.215.186.327a4.723 4.723 0 013.833 1.195l.032-.072A9.648 9.648 0 0117.31 7.02h3.2a9.691 9.691 0 013.267.57l3.037-2.477a.5.5 0 01.816.387zM14 23.5a.5.5 0 011 0v1.123l.048.014c.805.215 1.631.337 2.452.363l2.905.009c.896-.173 1.767-.45 2.596-.827L23 23.5a.5.5 0 011 0V27h2.093l.917-4.422a.51.51 0 01.098-.209 9.89 9.89 0 001.904-3.979.5.5 0 01.488-.39H31v-3h-1.5a.5.5 0 01-.486-.382 8.41 8.41 0 00-2.237-3.974.5.5 0 01-.147-.354V6.553l-2.444 1.994a.498.498 0 01-.5.078 8.675 8.675 0 00-3.176-.605h-3.204a8.653 8.653 0 00-8.187 5.677.504.504 0 01-.089.26 8.644 8.644 0 001.706 8.413.492.492 0 01.11.214L11.896 27H14v-3.5zM3.894 12.736c-.162.063-.32.14-.473.228-.603.409-1.01 1.11-.803 1.349.12.139.187.153.308.1.158-.069.348-.245.532-.496a1.85 1.85 0 00.436-1.181zM26.5 13a.5.5 0 010 1h-1a.5.5 0 010-1h1zm-6.01-4a.5.5 0 010 1H17.5a.5.5 0 010-1h2.99z'/%3E%3C/svg%3E",
	"play-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm-4.262 8.06l12 6.5a.5.5 0 010 .88l-12 6.5A.5.5 0 0111 22.5v-13a.5.5 0 01.738-.44zM12 10.34v11.32L22.45 16 12 10.34z'/%3E%3C/svg%3E",
	"plug-n-play-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M17.6.033a2.634 2.634 0 012.633 2.634v5.9h2.7a.5.5 0 01.5.5v4.803c-.002.367-.021.733-.057 1.098l.09-.001a8.5 8.5 0 018.5 8.5 8.5 8.5 0 01-16.851 1.588l-.215.065v6.347a.5.5 0 01-.5.5H9.067a.5.5 0 01-.5-.5v-6.345A11.69 11.69 0 01.033 13.867v-4.8a.5.5 0 01.5-.5h2.7v-5.9a2.634 2.634 0 015.267 0v5.9h6.466v-5.9A2.634 2.634 0 0117.6.033zm5.867 15.934a7.75 7.75 0 00-.484.015l-.076.006a.433.433 0 01-.114.01 7.5 7.5 0 10.674-.031zm-1.034-6.4h-21.4v4.3c0 4.926 3.367 9.214 8.152 10.383a.501.501 0 01.382.486v6.23H13.9v-6.23a.5.5 0 01.38-.485c.238-.06.473-.127.707-.202a8.503 8.503 0 017.375-9.012l-.051.387c.078-.517.12-1.038.122-1.557v-4.3zm-.301 10.809l4.266 2.667a.5.5 0 010 .848l-4.266 2.666a.5.5 0 01-.765-.424V20.8a.5.5 0 01.765-.424zM5.867 1.033c-.902 0-1.634.732-1.634 1.634v5.9H7.5v-5.9c0-.902-.731-1.634-1.633-1.634zm11.733 0c-.902 0-1.633.732-1.633 1.634v5.9h3.266v-5.9c0-.902-.73-1.634-1.633-1.634z'/%3E%3C/svg%3E",
	"power-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M19.588 4.788C25.935 5.926 30 11.457 30 18a13.99 13.99 0 01-27.621 3.144 13.99 13.99 0 018.954-16.335.5.5 0 11.334.942A12.99 12.99 0 1029 18c0-6.083-3.746-11.18-9.588-12.228a.5.5 0 11.176-.984zM15.5 0a.5.5 0 01.5.5v16a.5.5 0 01-1 0V.5a.5.5 0 01.5-.5z'/%3E%3C/svg%3E",
	"printer-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M24.5 2a.5.5 0 01.5.5V8h6.5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5H25v7.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5V22H.5a.5.5 0 01-.5-.5v-13A.5.5 0 01.5 8H7V2.5a.5.5 0 01.5-.5h17zM24 18H8v11h16V18zm-2 8a.5.5 0 010 1H10a.5.5 0 010-1h12zm0-3a.5.5 0 010 1H10a.5.5 0 010-1h12zm9-14H1v12h6v-3.5a.5.5 0 01.5-.5h17a.5.5 0 01.5.5V21h6V9zM5 12a1 1 0 110 2 1 1 0 010-2zm19-9H8v5h16V3z'/%3E%3C/svg%3E",
	"puzzle-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M0 1.399A1.4 1.4 0 011.4 0h16.203a.501.501 0 110 1.002h-.567v5.912a.5.5 0 01-.502.501h-1.603a.503.503 0 01-.402-.2 2.17 2.17 0 100 2.606.502.502 0 01.402-.201h1.603a.5.5 0 01.502.501v5.912h5.41v-.865a3.173 3.173 0 115.115-3.378 3.172 3.172 0 01-.905 3.378v.865h4.339l.001-.567A.501.501 0 0132 15.465v15.136A1.4 1.4 0 0130.6 32H1.4A1.4 1.4 0 010 30.601V1.4zM1.004 30.6c0 .22.177.397.396.397l14.632-.001v-4.843c0-.276.225-.5.502-.5h1.604c.158 0 .307.074.402.2a2.168 2.168 0 003.905-1.303 2.17 2.17 0 00-3.905-1.303.503.503 0 01-.402.2h-1.604a.5.5 0 01-.502-.5v-5.913h-5.409v.866a3.174 3.174 0 11-4.21 0v-.866H1.004V30.6zm23.547-19.979a2.171 2.171 0 00-1.302 3.909.5.5 0 01.2.4v1.603a.5.5 0 01-.502.501h-5.91v5.412h.862a3.176 3.176 0 015.55 2.104 3.175 3.175 0 01-5.55 2.105h-.863v4.342H30.6a.396.396 0 00.396-.397V17.035h-4.842a.501.501 0 01-.502-.5V14.93a.5.5 0 01.2-.4 2.172 2.172 0 00-1.301-3.909zm-8.519-9.62H1.4a.396.396 0 00-.396.397v14.634h5.911c.277 0 .502.225.502.501v1.604a.5.5 0 01-.2.4 2.171 2.171 0 102.603 0 .5.5 0 01-.2-.4v-1.604a.5.5 0 01.501-.5h5.911v-5.412h-.863a3.175 3.175 0 01-5.55-2.104 3.175 3.175 0 015.55-2.105h.863v-5.41zm15.455 11.554c.278 0 .502.225.502.501v.88a.5.5 0 11-1.004 0v-.88c0-.276.225-.5.502-.5zm0-3.808c.278 0 .502.225.502.501v1.904a.5.5 0 01-1.004.001V9.248c0-.276.225-.5.502-.5zm0-3.808c.278 0 .502.225.502.501v1.904a.5.5 0 01-1.004.001V5.44c0-.276.225-.5.502-.5zm0-3.807a.5.5 0 01.502.5v1.905a.501.501 0 01-1.004 0V1.634c0-.277.225-.501.502-.501zM22.557 0a.501.501 0 110 1.002H20.65a.501.501 0 110-1.002h1.908zm3.815 0a.5.5 0 110 1.002h-1.907a.501.501 0 110-1.002h1.907zm3.816 0a.501.501 0 110 1.002H28.28a.501.501 0 110-1.002h1.908z'/%3E%3C/svg%3E",
	"ram-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M22.5 0A1.5 1.5 0 0124 1.5v5a.5.5 0 01-.5.5H21v2h2a1 1 0 010 2h-2v2h2a1 1 0 010 2h-2v2h2a1 1 0 010 2h-2v2h2a1 1 0 010 2h-2v2h2.5a.5.5 0 01.5.5v5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 018 30.5v-29A1.5 1.5 0 019.5 0h13zm0 1h-13a.5.5 0 00-.5.5v29a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V26h-2.5a.5.5 0 01-.5-.5v-19a.5.5 0 01.5-.5H23V1.5a.5.5 0 00-.5-.5zm-6 21a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h4zm-.5 1h-3v4h3v-4zm.5-10a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h4zm-.5 1h-3v4h3v-4zm.5-10a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h4zM16 5h-3v4h3V5z'/%3E%3C/svg%3E",
	"receipt-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M28.5 0a.5.5 0 01.5.5v28a3.5 3.5 0 01-3.5 3.5h-19A3.5 3.5 0 013 28.5v-3a.5.5 0 01.5-.5H9V.5a.5.5 0 01.5-.5h19zM22 26H4v2.5A2.5 2.5 0 006.5 31h16.55A3.489 3.489 0 0122 28.5V26zm6-25H10v24h12.5a.5.5 0 01.5.5v3a2.501 2.501 0 002.336 2.495L25.5 31a2.5 2.5 0 002.5-2.5V1zm-2.5 17a.5.5 0 010 1h-5a.5.5 0 010-1h5zm0-3a.5.5 0 010 1h-5a.5.5 0 010-1h5zm0-5a.5.5 0 010 1h-13a.5.5 0 010-1h13zm0-3a.5.5 0 010 1h-13a.5.5 0 010-1h13zm0-3a.5.5 0 010 1h-13a.5.5 0 010-1h13z'/%3E%3C/svg%3E",
	"reload-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M8.508 2a.5.5 0 01.5.5v5a.5.5 0 01-1 0V3.308l-.038.023a14.999 14.999 0 00-6.42 16.686A14.995 14.995 0 0016.007 31a.5.5 0 010 1A16 16 0 016.673 3H3.508a.5.5 0 010-1h5zm7.5-2a16 16 0 019.321 29.001L28.51 29a.5.5 0 010 1h-5a.5.5 0 01-.5-.5v-5a.5.5 0 111 0l-.001 4.186.013-.009a14.998 14.998 0 006.39-16.848A14.999 14.999 0 0016.009 1a.5.5 0 010-1z'/%3E%3C/svg%3E",
	"replication-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M19.733.033C20.6.033 21.3.735 21.3 1.6v3.766h3.767c.865 0 1.566.702 1.566 1.567V10.7l3.834.001a1.5 1.5 0 011.5 1.5v18.267a1.5 1.5 0 01-1.5 1.5H12.2a1.5 1.5 0 01-1.5-1.5v-3.835l-3.767.001a1.566 1.566 0 01-1.566-1.566V21.3H1.6a1.567 1.567 0 01-1.567-1.567V1.6C.033.735.735.033 1.6.033h18.133zM30.467 11.7H12.2a.5.5 0 00-.5.5v18.267a.5.5 0 00.5.5h18.267a.5.5 0 00.5-.5V12.2a.5.5 0 00-.5-.5zm-5.4-5.333H6.933a.565.565 0 00-.566.566v18.134c0 .313.253.566.566.566H10.7V12.2a1.5 1.5 0 011.5-1.5h13.433V6.932a.565.565 0 00-.566-.566zm-5.334-5.334H1.6a.567.567 0 00-.567.567v18.133c0 .313.254.567.567.567h3.766V6.932c0-.865.702-1.566 1.567-1.566H20.3V1.6a.567.567 0 00-.567-.567z'/%3E%3C/svg%3E",
	"rss-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M3.5 25a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM.5 0C17.897 0 32 14.103 32 31.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5C24 18.521 13.479 8 .5 8a.5.5 0 01-.5-.5v-7A.5.5 0 01.5 0zm0 12C11.27 12 20 20.73 20 31.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5C12 25.149 6.851 20 .5 20a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5zm3 14a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM1 1.004v6.001C14.134 7.268 24.732 17.866 24.995 31h6.001C30.732 14.552 17.448 1.268 1 1.004zm0 12.003v6.003c6.506.256 11.734 5.484 11.99 11.99h6.003C18.733 21.18 10.82 13.267 1 13.007z'/%3E%3C/svg%3E",
	"scale-up-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M31.467.033a.5.5 0 01.5.5v30.934a.5.5 0 01-.5.5H.533a.5.5 0 01-.5-.5V.533a.5.5 0 01.5-.5h30.934zm-.5 1H1.033v29.934h29.934V1.033zM9.067 4.3h.022l.043.004-.065-.004c.037 0 .073.004.107.012l.045.012.039.014c.012.005.025.01.037.017.015.008.03.016.043.025l.029.02c.014.01.028.022.041.035l.012.011 4.267 4.267a.5.5 0 01-.707.707L9.566 6.006V17.1h4.627L24.925 6.366h-6.258a.5.5 0 110-1h7.466l.023.001c.014 0 .029.002.043.004l-.066-.004c.038 0 .074.004.109.011l.042.012.04.014a.31.31 0 01.041.02l.035.02a.271.271 0 01.035.024c.014.01.026.02.038.032l.014.013.014.015.031.037-.045-.052a.519.519 0 01.092.127c.006.01.01.021.015.032.006.015.012.03.016.044a.345.345 0 01.018.078c.003.018.004.036.005.053v7.486a.5.5 0 01-1 0v-6.26L14.9 17.806v4.625h11.093L22.58 19.02a.5.5 0 01.707-.707l4.267 4.267.013.013.031.038-.044-.051c.026.027.05.056.069.087l.02.034.02.042.014.04.011.042.008.042.003.044.001.022v.023l-.004.043.004-.066a.486.486 0 01-.012.109l-.011.042-.015.04a.305.305 0 01-.019.041l-.02.035-.025.035a.393.393 0 01-.031.038l-.013.014-4.267 4.267a.5.5 0 01-.707-.708l3.412-3.414H14.9l.001 2.701a.5.5 0 01-.5.5H5.867a.5.5 0 01-.5-.5V17.6a.5.5 0 01.5-.5h2.7V6.005L5.153 9.42a.5.5 0 01-.708-.707l4.267-4.267.015-.014.04-.033-.055.047a.527.527 0 01.079-.064l.05-.029.03-.014.044-.016.043-.011L9 4.304l.045-.004h.022zM13.9 18.1H6.367v7.533H13.9V18.1z'/%3E%3C/svg%3E",
	"server-gear-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M1.5 22A1.5 1.5 0 010 20.5v-9A1.5 1.5 0 011.5 10h2.967c.08-.153.162-.304.248-.453a.5.5 0 00-.069-.613L3.631 7.918c-.524-.574-.524-1.452-.036-1.981.32-.444.667-.869 1.069-1.307.405-.368.83-.713 1.236-1.006.566-.497 1.414-.497 2.004.022L8.91 4.653c.142.147.36.193.491.143.98-.561 2.03-.991 3.134-1.283A.504.504 0 0012.92 3V1.592A1.498 1.498 0 0114.271.093c1.096-.13 2.202-.13 3.284-.001A1.5 1.5 0 0118.92 1.59v1.333a.504.504 0 00.398.504c1.091.288 2.14.718 3.135 1.288a.5.5 0 00.613-.069l1.017-1.015c.573-.524 1.451-.524 1.98-.036.443.322.868.667 1.307 1.068.368.405.714.83 1.006 1.237.497.566.497 1.414-.022 2.004l-1.02 1.017c-.165.15-.212.39-.13.56.097.17.191.343.28.517L26.35 10l-.029-.05a1.494 1.494 0 01.326-1.753l.978-.976c.166-.189.166-.471-.03-.697-.298-.413-.62-.81-.93-1.153a14.825 14.825 0 00-1.232-1.001.494.494 0 00-.658-.015l-1.002 1.001a1.495 1.495 0 01-1.83.219 11.849 11.849 0 00-2.867-1.177 1.497 1.497 0 01-1.155-1.487V1.588a.503.503 0 00-.469-.501 13.132 13.132 0 00-3.076.001.5.5 0 00-.455.502v1.397a1.495 1.495 0 01-1.142 1.496 12.183 12.183 0 00-2.938 1.21 1.499 1.499 0 01-1.644-.34l-.976-.977c-.189-.166-.471-.166-.696.029-.414.3-.81.622-1.154.932-.344.377-.666.773-1.001 1.23a.497.497 0 00-.015.66l1.001 1.001c.472.476.569 1.204.254 1.771L30.5 10a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-2.964c-.08.152-.164.303-.25.453a.498.498 0 00.068.613l1.015 1.017c.524.573.524 1.451.036 1.98-.321.444-.667.869-1.051 1.29a14.83 14.83 0 01-1.103 1 1.5 1.5 0 01-2.025-.09l-.998-.998a.507.507 0 00-.63-.061c-.98.561-2.029.991-3.133 1.283a.504.504 0 00-.385.513v1.458c.003.778-.59 1.43-1.351 1.499-1.096.13-2.202.13-3.284.001a1.5 1.5 0 01-1.365-1.498v-1.383a.504.504 0 00-.397-.504 12.869 12.869 0 01-3.136-1.288.5.5 0 00-.613.069l-1.016 1.015c-.574.524-1.452.524-1.982.036a15.052 15.052 0 01-1.306-1.068c-.368-.405-.714-.83-1.006-1.237-.497-.566-.497-1.414.022-2.004l1.014-1.013c.159-.147.205-.379.137-.533-.104-.18-.204-.364-.3-.55h1.135l.053.092c.27.59.13 1.285-.331 1.712l-.978.976c-.166.189-.166.471.029.697.3.413.621.81.931 1.153.378.343.774.666 1.231 1.001a.497.497 0 00.66.015l1.001-1.001a1.495 1.495 0 011.83-.219c.904.518 1.872.915 2.867 1.177.692.164 1.174.79 1.155 1.487v1.372a.503.503 0 00.469.501c1.017.12 2.045.12 3.076-.001a.5.5 0 00.455-.502v-1.447a1.495 1.495 0 011.142-1.496 11.881 11.881 0 002.865-1.172 1.502 1.502 0 011.847.211l1 1a.502.502 0 00.68.027 13.73 13.73 0 001.016-.92c.344-.377.666-.773 1.001-1.23a.497.497 0 00.015-.66l-1.001-1.001a1.497 1.497 0 01-.253-1.773L1.5 22zm29-11h-29a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h29a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zM27 14a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E",
	"server-managed-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.5 2A1.5 1.5 0 0132 3.5v9a1.5 1.5 0 01-1.5 1.5h-29A1.5 1.5 0 010 12.5v-9A1.5 1.5 0 011.5 2h29zm0 1h-29a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h29a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zM27 6a1 1 0 110 2 1 1 0 010-2zM5.562 15a.5.5 0 01.5.5l-.001 2.327 3.316.458.471.065a.502.502 0 01.283.14 6.071 6.071 0 003.038 1.63l3.306.098.189-.006.186.008a2.537 2.537 0 011.819 4.064l-.05.063.223-.002.176-.001.13-.001.16-.002.236-.005c.085-.001.167-.003.246-.006.035 0 .067-.002.1-.003l-.1.003.138-.004-.039.001c.178-.006.34-.013.49-.022.153-.01.294-.022.423-.036a5.44 5.44 0 00.44-.064l-.055.01.13-.025-.074.015.114-.024-.04.009.082-.019-.042.01.103-.024-.061.014.112-.028-.051.014.096-.026-.045.012a3.63 3.63 0 00.39-.128l.04-.016-.04.016c.076-.03.152-.062.23-.097l.136-.064 6.444-3.081a2.294 2.294 0 011.662-.201 2.215 2.215 0 011.364 1.023 2.13 2.13 0 01.217 1.679 2.189 2.189 0 01-1.036 1.331l-7.56 4.624c-.318.197-.87.44-1.634.656-1.061.3-2.326.488-3.804.52l-.45.005c-1.49 0-3.336-.484-5.39-1.301a34.25 34.25 0 01-3.236-1.496 7.827 7.827 0 00-1.718-.445l-.1-.013.1.014a5.696 5.696 0 00-.348-.04l.248.026a10.112 10.112 0 00-.35-.036l.102.01a7.444 7.444 0 00-.716-.034v2.834a.5.5 0 01-.41.492l-.09.008H.5a.5.5 0 010-1h4.562V16H.5a.5.5 0 010-1h5.062zm.499 3.836v7.259l.25.004.099.003-.349-.007c.334 0 .667.02 1 .058l.061.008a8.574 8.574 0 011.771.41c.123.042.244.087.366.134a33.596 33.596 0 003.191 1.475c1.946.774 3.685 1.23 5.02 1.23 2.73 0 4.51-.504 5.363-1.032l7.581-4.636a1.21 1.21 0 00.578-.74 1.134 1.134 0 00-.116-.898 1.218 1.218 0 00-.972-.601l-.112-.005a1.267 1.267 0 00-.625.165l-6.464 3.09a3.958 3.958 0 01-.162.077c-.94.423-1.603.507-3.933.517h-.592a35.32 35.32 0 01-.727-.029l.727.03c-.365-.012-.73-.028-1.094-.049l-.233-.014c-.07 0-.142-.001-.214-.006l-.082-.014a40.32 40.32 0 01-3.956-.47h-.107a.5.5 0 010-1l.19.007.827.13.115.016c.224.032.447.062.67.09l-.67-.09c.347.05.694.095 1.041.136l-.37-.045c.276.035.552.067.829.097l-.459-.052c.27.032.538.06.808.087l-.35-.035c.265.028.528.053.792.076l-.442-.04c.286.027.573.052.86.075l-.418-.035c.278.024.555.046.833.064l-.415-.03c.18.014.359.027.539.039.066-.004.13-.01.195-.021.028-.005.057-.01.085-.017l-.085.017c.05-.009.101-.02.15-.034l-.065.017c.044-.01.087-.022.13-.035l-.064.018c.051-.014.102-.03.151-.05l-.087.032c.045-.015.09-.032.134-.05l-.047.018c.041-.016.081-.033.12-.053l-.073.034c.045-.019.09-.04.133-.064l-.06.03a1.47 1.47 0 00.13-.07l-.07.04c.042-.023.082-.048.122-.075l-.052.034c.04-.025.081-.053.12-.082l-.068.048a1.5 1.5 0 00.12-.09l-.052.042c.037-.028.073-.058.108-.09l-.056.048c.04-.032.078-.067.115-.104l-.059.056c.036-.032.07-.066.102-.102l-.043.046a1.54 1.54 0 00.219-1.878c-.299-.49-.846-.774-1.468-.733l-3.435-.106a7.076 7.076 0 01-3.51-1.792l-3.489-.483zm-3.623 5.56l.144.005a1.342 1.342 0 011.23 1.367 1.335 1.335 0 01-1.195 1.309l-.149.007a1.344 1.344 0 01-.03-2.687zm.008 1.001l-.078.015a.346.346 0 00-.218.458.347.347 0 00.324.214.332.332 0 00.338-.33.348.348 0 00-.206-.33.37.37 0 00-.16-.027z'/%3E%3C/svg%3E",
	"server-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M30.5 10a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-29A1.5 1.5 0 010 20.5v-9A1.5 1.5 0 011.5 10h29zm0 1h-29a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h29a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zM27 14a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E",
	"share-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M26 0a5 5 0 11-4.117 7.838l-11.283 6.2c.258.603.4 1.266.4 1.962s-.142 1.36-.4 1.962l11.283 6.2a5 5 0 11-.483.876l-11.283-6.2a5 5 0 110-5.676l11.283-6.2A5 5 0 0126 0zm0 23a4 4 0 00-3.498 2.058c0 .005-.002.009-.004.013l-.008.01A3.999 3.999 0 0026 31c2.21 0 4-1.79 4-4s-1.79-4-4-4zM6 12c-2.21 0-4 1.79-4 4a3.999 3.999 0 007.498 1.942c0-.005.002-.009.004-.013l.008-.01c.312-.57.49-1.223.49-1.919s-.178-1.35-.49-1.92c-.004-.001-.006-.005-.008-.01l-.004-.012A4 4 0 006 12zM26 1a3.999 3.999 0 00-3.502 5.93l.004.012A4 4 0 1026 1z'/%3E%3C/svg%3E",
	"shield-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.366 0c.194 0 .37.112.452.287 1.42 3.014 4.426 5.138 7.94 5.606l.568.067h1.768c.7-.055 1.39-.176 2.062-.362a.5.5 0 01.626.396c.115.662.175 1.332.18 2.006-.004 9.599-5.14 18.564-13.697 23.924a.501.501 0 01-.53 0C7.178 26.564 2.042 17.599 2.039 7.984c.022-.673.1-1.343.236-2.004a.498.498 0 01.62-.382c.673.182 1.363.3 2.023.352h1.409l.323.003.613-.068c3.51-.478 6.501-2.596 7.919-5.598A.499.499 0 0115.634 0h.732zm-.311 1h-.11c-1.615 3.161-4.82 5.369-8.559 5.877l-.68.073h-.904l-.921-.001a12.1 12.1 0 01-1.719-.256c-.068.438-.11.876-.124 1.307C3.042 17.15 7.89 25.71 16 30.908 24.11 25.71 28.958 17.15 28.962 8.003a11.153 11.153 0 00-.086-1.304c-.566.128-1.142.215-1.724.26l-.038.001H25.63c-.152 0-.152 0-.36-.003l-.635-.071c-3.742-.5-6.962-2.712-8.58-5.886zm.298 3.996C18.902 7.543 22.48 8.994 26.232 9a.5.5 0 01.499.5v.42c-.004 7.337-3.929 14.188-10.466 18.284a.5.5 0 01-.53 0C9.204 24.103 5.287 17.252 5.29 9.92V9.5a.5.5 0 01.5-.5c3.744-.004 7.316-1.456 9.855-4.003a.499.499 0 01.707 0zm-.352 1.05C13.418 8.458 9.946 9.868 6.29 9.99c.022 6.857 3.647 13.273 9.71 17.196 6.068-3.92 9.7-10.336 9.73-17.196-3.662-.123-7.139-1.532-9.73-3.946z'/%3E%3C/svg%3E",
	"smiley-happy-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0c8.836 0 16 7.164 16 16 0 8.837-7.164 16-16 16S0 24.837 0 16C0 7.164 7.164 0 16 0zm0 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15 8.285 0 15-6.716 15-15 0-8.284-6.715-15-15-15zm8.852 19.176a.617.617 0 01-.013.816C23.094 22.845 19.719 24 15.994 24c-3.716 0-7.083-1.149-8.832-2.993a.62.62 0 01-.016-.817.495.495 0 01.744-.016c1.528 1.61 4.636 2.672 8.104 2.672 3.476 0 6.59-1.067 8.115-2.684a.493.493 0 01.743.014zM21 9c.552 0 1 .671 1 1.5s-.448 1.5-1 1.5-1-.671-1-1.5.448-1.5 1-1.5zM11 9c.553 0 1 .671 1 1.5s-.447 1.5-1 1.5c-.552 0-1-.671-1-1.5S10.448 9 11 9z'/%3E%3C/svg%3E",
	"smiley-sad-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm.006 18c3.716 0 7.083 1.15 8.832 2.993.21.221.217.586.015.816a.493.493 0 01-.743.017c-1.528-1.61-4.636-2.672-8.104-2.672-3.476 0-6.591 1.067-8.115 2.684a.493.493 0 01-.743-.014.618.618 0 01.012-.816C8.906 20.156 12.28 19 16.006 19zM21 9c.552 0 1 .672 1 1.5s-.448 1.5-1 1.5-1-.672-1-1.5.448-1.5 1-1.5zM11 9c.552 0 1 .672 1 1.5s-.448 1.5-1 1.5-1-.672-1-1.5.448-1.5 1-1.5z'/%3E%3C/svg%3E",
	"sms-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M26.5 5a5.5 5.5 0 015.5 5.5v11a5.5 5.5 0 01-5.5 5.5H9.499a3.497 3.497 0 01-2.186-.774 1.282 1.282 0 00-1.63.004A3.498 3.498 0 013.5 27h-3c-.505 0-.692-.663-.26-.927A5.783 5.783 0 003 21.5v-11A5.5 5.5 0 018.5 5h18zm0 1h-18A4.5 4.5 0 004 10.5v11.03A6.795 6.795 0 011.955 26h1.544a2.495 2.495 0 001.554-.546 2.279 2.279 0 012.89-.004c.442.355.991.549 1.557.55h17a4.5 4.5 0 004.5-4.5v-11A4.5 4.5 0 0026.5 6zm-1 13a.5.5 0 010 1h-16a.5.5 0 010-1h16zm0-4a.5.5 0 010 1h-16a.5.5 0 010-1h16zm0-4a.5.5 0 010 1h-16a.5.5 0 010-1h16z'/%3E%3C/svg%3E",
	"software-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M19.992.41l1.572 8.641A8.5 8.5 0 1122.5 26l-.19-.003-1.363 2.727a.499.499 0 01-.349.266l-15 3-.024.005L5.52 32l.078-.01a.54.54 0 01-.12.01c-.015-.001-.03-.002-.047-.005l-.037-.006-.05-.014-.037-.014-.03-.014-.01-.004-.043-.026.052.03a.47.47 0 01-.085-.054l-.03-.026c-.013-.011-.024-.023-.035-.035l-.025-.03a.345.345 0 01-.025-.037l-.023-.04-.018-.042-.008-.021a.477.477 0 01-.017-.065l-.002-.008-4-22a.492.492 0 01.045-.313l3-6 .006-.012c.007-.014.016-.027.024-.04l-.03.052a.518.518 0 01.053-.084l.03-.035.031-.03c.011-.01.022-.02.034-.028.01-.008.02-.014.03-.02a.476.476 0 01.049-.028l.028-.013c.016-.006.032-.012.05-.017l.03-.008.014-.003 15-3a.5.5 0 01.59.4zm-2.663 23.837l-8.492 1.695-2.433 4.867 13.758-2.751 1.075-2.151a8.458 8.458 0 01-3.908-1.66zM4.276 5.065l-2.254 4.51 3.7 20.36 2.256-4.511-3.702-20.36zM22.5 10c-.402 0-.797.032-1.182.093a.328.328 0 01-.068.019l-.09.008-.085.015a7.503 7.503 0 00-3.319 13.175.172.172 0 01.035.025A7.5 7.5 0 1022.5 10zm-3.4-8.91L5.08 3.894 8.9 24.91l7.494-1.497A8.502 8.502 0 0120.58 9.218L19.1 1.09zM22.5 15a2.5 2.5 0 010 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 10.001 3.001A1.5 1.5 0 0022.5 16z'/%3E%3C/svg%3E",
	"spanner-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M10.084.146l5.09 5.09c.128.13.177.318.126.493l-1.99 6.883 1.684 1.676.222-.22c.83-.838 3.727.707 4.928 1.909l11.211 11.23c.828.835.828 2.18-.001 3.017l-1.132 1.131a2.14 2.14 0 01-3.015-.001L15.989 20.146c-1.202-1.183-2.763-4.102-1.923-4.93l.221-.221-1.689-1.681-6.87 1.986a.503.503 0 01-.492-.126l-5.09-5.09a.502.502 0 01.708-.708l4.88 4.882 6.612-1.912 1.912-6.611L9.376.854a.502.502 0 01.708-.708zm5.842 14.625l-1.155 1.155c-.216.213 1.13 2.73 1.922 3.51l11.22 11.209c.444.44 1.16.44 1.603.001l1.129-1.128c.44-.445.44-1.161.001-1.605l-11.21-11.23c-.789-.789-3.298-2.127-3.51-1.912zM8.584 3.206l2.69 2.69c.126.126.175.31.13.482l-.98 3.69a.5.5 0 01-.356.355l-3.69.98a.498.498 0 01-.482-.13l-2.69-2.69a.5.5 0 01-.129-.483l.99-3.68a.5.5 0 01.353-.353l3.68-.99a.501.501 0 01.484.13zm-.503.912l-3.123.84-.84 3.123L6.4 10.363l3.13-.833.832-3.131L8.08 4.118z'/%3E%3C/svg%3E",
	"speaker-off-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M19 .5v31a.5.5 0 01-.812.39L8.325 24H1.5a.5.5 0 01-.5-.5v-15a.5.5 0 01.5-.5h6.825L18.188.11A.5.5 0 0119 .5zm-1 1.04L8.812 8.89A.497.497 0 018.5 9H2v14h6.5c.114 0 .224.039.312.11L18 30.46V1.54zm3.854 9.606L26 15.293l4.146-4.147a.502.502 0 01.708.708L26.707 16l4.147 4.146a.502.502 0 01-.708.708L26 16.707l-4.146 4.147a.502.502 0 01-.708-.708L25.293 16l-4.147-4.146a.502.502 0 01.708-.708z'/%3E%3C/svg%3E",
	"speaker-on-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M19 .5v31a.5.5 0 01-.812.39L8.325 24H1.5a.5.5 0 01-.5-.5v-15a.5.5 0 01.5-.5h6.825L18.188.11A.5.5 0 0119 .5zm-1 1.04L8.812 8.89A.497.497 0 018.5 9H2v14h6.5c.114 0 .224.039.312.11L18 30.46V1.54zm8.375 4.762a12.498 12.498 0 010 19.396.5.5 0 11-.63-.776 11.5 11.5 0 000-17.844.5.5 0 11.63-.776zM22.786 9.85a7.5 7.5 0 010 12.3.5.5 0 11-.572-.82 6.5 6.5 0 000-10.66.5.5 0 11.572-.82z'/%3E%3C/svg%3E",
	"speech-bubble-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M25.5 5.96a3.5 3.5 0 013.5 3.5v5.97a5.788 5.788 0 002.76 4.603c.432.264.245.927-.26.927h-3.001a3.497 3.497 0 01-2.185-.773 1.28 1.28 0 00-1.621.003 3.498 3.498 0 01-2.183.77h-.52v2.54a3.5 3.5 0 01-3.5 3.5H9.489a3.497 3.497 0 01-2.185-.773 1.28 1.28 0 00-1.621.003A3.498 3.498 0 013.5 27h-3c-.505 0-.692-.663-.26-.927A5.783 5.783 0 003 21.5v-6A3.5 3.5 0 016.5 12l3.5-.001V9.46a3.5 3.5 0 013.5-3.5h12zm-7 7.04h-12A2.5 2.5 0 004 15.5v6.03A6.795 6.795 0 011.955 26h1.544a2.494 2.494 0 001.555-.547 2.277 2.277 0 012.879-.003c.442.355.991.549 1.557.55h9a2.5 2.5 0 002.5-2.5v-8A2.5 2.5 0 0018.5 13zm7-6.04h-12a2.5 2.5 0 00-2.5 2.5v2.539l7.5.001a3.5 3.5 0 013.49 3.5v4.46h.519a2.494 2.494 0 001.555-.547 2.277 2.277 0 012.879-.003c.442.355.991.549 1.557.55h1.545A6.82 6.82 0 0128 15.46v-6a2.5 2.5 0 00-2.5-2.5z'/%3E%3C/svg%3E",
	"star-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M15.752 25.086a.499.499 0 01.496 0l8.618 4.911-2.016-9.715a.5.5 0 01.154-.472l7.34-6.675-9.859-1.088a.498.498 0 01-.4-.291L16 2.715l-4.084 9.04a.498.498 0 01-.401.292l-9.859 1.088 7.34 6.675c.131.12.19.298.154.472l-2.016 9.715 8.618-4.911zm.248 1.01l-9.332 5.318a.5.5 0 01-.738-.536l2.182-10.52L.164 13.13a.5.5 0 01.281-.867l10.677-1.179 4.422-9.79a.5.5 0 01.912 0l4.422 9.79 10.677 1.179a.5.5 0 01.281.867l-7.948 7.228 2.182 10.52a.5.5 0 01-.738.536L16 26.096z'/%3E%3C/svg%3E",
	"stop-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm5.5 8a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 019 21.5v-11A1.5 1.5 0 0110.5 9h11zm0 1h-11a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5z'/%3E%3C/svg%3E",
	"sub-repartitor-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm1.5 19a.5.5 0 01.5.5V24h1.5a.5.5 0 01.354.854l-4 4a.502.502 0 01-.708 0l-4-4A.5.5 0 0111.5 24H13v-3.5a.5.5 0 01.5-.5h4zm-.5 1h-3v3.5a.5.5 0 01-.5.5h-.793l2.793 2.793L18.293 25H17.5a.5.5 0 01-.5-.5V21zm-9-9.5V13h3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H8v1.5a.5.5 0 01-.854.354l-4-4a.502.502 0 010-.708l4-4A.5.5 0 018 11.5zm16.854-.354l4 4a.502.502 0 010 .708l-4 4A.5.5 0 0124 19.5V18h-3.5a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5H24v-1.5a.5.5 0 01.854-.354zM7 12.707L4.207 15.5 7 18.293V17.5a.5.5 0 01.5-.5H11v-3H7.5a.5.5 0 01-.5-.5v-.793zm18 0v.793a.5.5 0 01-.5.5H21v3h3.5a.5.5 0 01.5.5v.793l2.793-2.793L25 12.707zm-9.146-9.56l4 4A.5.5 0 0119.5 8H18v3.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V8h-1.5a.5.5 0 01-.354-.854l4-4a.502.502 0 01.708 0zm-.354 1.06L12.707 7h.793a.5.5 0 01.5.5V11h3V7.5a.5.5 0 01.5-.5h.793L15.5 4.207z'/%3E%3C/svg%3E",
	"tape-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M31.5 5a.5.5 0 01.5.5v21a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-21A.5.5 0 01.5 5h31zM31 6H1v20h30V6zM9.5 21a4.5 4.5 0 112.828-1h7.344a4.5 4.5 0 112.828 1h-13zm0-8a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm13 0a3.5 3.5 0 100 7 3.5 3.5 0 000-7z'/%3E%3C/svg%3E",
	"thumb-up-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M28 19h-5.53a.5.5 0 100 1H27a2 2 0 010 4h-4.55a.5.5 0 000 1h2.383a2.192 2.192 0 012.17 2.035c-.007 1.067-.9 1.96-2.004 1.965H7V9.993l2.496.017a.477.477 0 00.206-.045 4.5 4.5 0 004.293-4.283l.003-.134L14 5.53v-2.4A1.196 1.196 0 0115.206 2 2.782 2.782 0 0118 4.763V9.5a.5.5 0 00.5.5H28a2 2 0 010 4h-5.53a.5.5 0 100 1H28a2 2 0 010 4m1.656-4.499A3 3 0 0028 9.001h-9V4.76A3.78 3.78 0 0015.208 1 2.2 2.2 0 0013 3.11v2.36a3.5 3.5 0 01-3.5 3.5.474.474 0 00-.19.038L7 8.993V7.5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1H6v22H1.5a.5.5 0 000 1h5a.5.5 0 00.5-.5V30h18.1c.017 0 .035 0 .05-.004A3.012 3.012 0 0028 27.002a3.24 3.24 0 00-.874-2.005 2.999 2.999 0 001.924-5.185A3.005 3.005 0 0031 17a2.99 2.99 0 00-1.344-2.499'/%3E%3C/svg%3E",
	"todo-list-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M3.5 25a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm28 5a.5.5 0 010 1h-20a.5.5 0 010-1h20zm-28-4a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm28 1a.5.5 0 010 1h-20a.5.5 0 010-1h20zm-28-15a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm28 4a.5.5 0 010 1h-20a.5.5 0 010-1h20zm0-3a.5.5 0 010 1h-20a.5.5 0 010-1h20zM7.82.116a.5.5 0 01.064.704l-5 6a.501.501 0 01-.738.034l-2-2a.502.502 0 01.708-.708L2.466 5.76 7.116.18A.5.5 0 017.82.117zM31.5 5a.5.5 0 010 1h-20a.5.5 0 010-1h20zm0-3a.5.5 0 010 1h-20a.5.5 0 010-1h20z'/%3E%3C/svg%3E",
	"traffic-cone-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.468.324L26.846 28H31.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4.653L15.532.324a.5.5 0 01.936 0zM31 29H1v2h30v-2zm-7.847-8H8.846l-2.625 7h19.557l-2.625-7zm-1.5-4H10.346l-1.125 3h13.557l-1.125-3zm-1.5-4h-8.307l-1.125 3h10.557l-1.125-3zm-1.5-4h-5.307l-1.125 3h7.557l-1.125-3zM16 1.924L13.721 8h4.557L16 1.924z'/%3E%3C/svg%3E",
	"transfer-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20.8.033c.865 0 1.567.702 1.567 1.567v8.032l8.033.001c.865 0 1.567.702 1.567 1.567v19.2c0 .865-.702 1.567-1.567 1.567H11.2A1.568 1.568 0 019.633 30.4v-8.034H1.6c-.865 0-1.567-.7-1.567-1.566V1.6C.033.735.735.033 1.6.033h19.2zm0 1H1.6a.567.567 0 00-.567.567v19.2c0 .313.254.567.567.567h8.032l.001-4.834a.5.5 0 011 0V30.4c0 .313.254.567.567.567h19.2a.567.567 0 00.567-.567V11.2a.567.567 0 00-.567-.567H16.533a.5.5 0 010-1h4.833V1.6a.566.566 0 00-.566-.567zM10.487 9.78l13.012 13.012.001-4.125a.5.5 0 011 0v5.356l-.004.043L24.5 24a.483.483 0 01-.012.108l-.011.042-.016.044-.015.033c-.008.014-.016.03-.025.043l-.022.032-.03.035-.015.017-.016.015-.036.03.052-.045a.512.512 0 01-.083.066c-.015.01-.03.018-.045.026l-.032.015-.044.016-.042.011-.042.008-.043.003L24 24.5h-5.333a.5.5 0 010-1h4.125L9.78 10.486a.5.5 0 01.707-.707z'/%3E%3C/svg%3E",
	"trash-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M20.5 0A1.5 1.5 0 0122 1.5V4h6.5A1.5 1.5 0 0130 5.5v5a.5.5 0 01-.5.5H28v17.5a3.5 3.5 0 01-3.5 3.5h-17A3.5 3.5 0 014 28.5V11H2.5a.5.5 0 01-.5-.5v-5A1.5 1.5 0 013.5 4H10V1.5A1.5 1.5 0 0111.5 0h9zM27 11H5v17.5A2.5 2.5 0 007.5 31h17a2.5 2.5 0 002.5-2.5V11zM8.5 15a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11a.5.5 0 01.5-.5zm15 0a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11a.5.5 0 01.5-.5zm-10 0a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11a.5.5 0 01.5-.5zm5 0a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11a.5.5 0 01.5-.5zm10-10h-25a.5.5 0 00-.5.5V10h26V5.5a.5.5 0 00-.5-.5zm-8-4h-9a.5.5 0 00-.5.5V4h10V1.5a.5.5 0 00-.5-.5z'/%3E%3C/svg%3E",
	"truck-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M19.5 4A1.5 1.5 0 0121 5.5v1.499L24.087 7c.399-.002.782.154 1.067.437l6.411 6.42c.28.284.437.667.435 1.063v7.58a1.5 1.5 0 01-1.5 1.5h-1.536a3.5 3.5 0 11-6.929 0h-11.57a3.5 3.5 0 11-6.93 0H1.5A1.5 1.5 0 010 22.5v-17A1.5 1.5 0 011.5 4h18zM7 22a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm18.5 0a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM24.09 8L21 7.999V23h1.337a3.501 3.501 0 016.326-.001L30.5 23a.5.5 0 00.5-.5v-7.583a.502.502 0 00-.144-.354l-6.408-6.418A.498.498 0 0024.09 8zM19.5 5h-18a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h2.337a3.501 3.501 0 016.326 0H20V5.5a.5.5 0 00-.5-.5zm6.19 7c.332 0 .65.132.884.366l1.06 1.06c.234.234.366.552.366.884v1.19a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h1.19zm0 1H25v2h2v-.69a.243.243 0 00-.074-.176l-1.06-1.06A.245.245 0 0025.69 13z'/%3E%3C/svg%3E",
	"typing-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M23.5 5c1.274 0 2.388.68 3 1.697A3.496 3.496 0 0129.5 5h2a.5.5 0 010 1h-2A2.5 2.5 0 0027 8.5v15a2.5 2.5 0 002.5 2.5h2a.5.5 0 010 1h-2a3.496 3.496 0 01-3-1.697 3.496 3.496 0 01-3 1.697h-2a.5.5 0 010-1h2a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0023.5 6h-2a.5.5 0 010-1h2zm-7.86 8.22c2.28 0 3 1.64 3 3.7V23h-.74l-.1-1.24a5.7 5.7 0 01-3.4 1.48 2.532 2.532 0 01-2.8-2.64c0-2.12 1.94-3.14 6.2-3.62V17c0-1.46-.38-3-2.26-3a5.305 5.305 0 00-3.06 1.12l-.4-.66a6.406 6.406 0 013.56-1.24zM5.58 9.87L10.22 23h-1L7.7 18.53H2.48L.94 23H0L4.66 9.87h.92zm12.22 7.84c-3.94.46-5.28 1.38-5.28 2.9a1.799 1.799 0 002 1.92l.02-.05A5 5 0 0017.8 21v-3.29zM5.14 10.73h-.08c-.46 1.62-.92 3-1.46 4.56l-.84 2.46h4.68l-.84-2.46c-.52-1.56-1-2.94-1.46-4.56z'/%3E%3C/svg%3E",
	"upload-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M11.5 8a.5.5 0 010 1H3.124a1.114 1.114 0 00-.79.315c-.21.206-.33.487-.334.775v18.814A1.108 1.108 0 003.13 30h25.746c.295.004.578-.11.79-.315.21-.206.33-.487.334-.775V10.096A1.108 1.108 0 0028.87 9H21.5a.5.5 0 010-1h7.364A2.11 2.11 0 0131 10.09v18.826a2.11 2.11 0 01-2.13 2.085H3.136A2.113 2.113 0 011 28.91V10.084a2.11 2.11 0 012.13-2.085h8.37zm5.354-6.854l4 4a.502.502 0 01-.708.708L17 2.707V16.49a.5.5 0 01-1 0V2.707l-3.146 3.147a.502.502 0 01-.708-.708l4-4a.502.502 0 01.708 0z'/%3E%3C/svg%3E",
	"user-forbid-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M11.995 12a7.76 7.76 0 016.914 4.075A8 8 0 1112 24H4.5a.5.5 0 01-.5-.5v-3c0-4.79 3.399-8.5 7.995-8.5zm13.296 7.416l-9.875 9.875a7 7 0 009.874-9.875zM20 17c-.419 0-.83.037-1.228.107l.074-.026a.503.503 0 01-.181.048A6.998 6.998 0 0013 24c0 1.753.644 3.356 1.71 4.584l9.874-9.875A6.97 6.97 0 0020 17zm-8-4c-4.028 0-7 3.244-7 7.5V23h7.062a8.007 8.007 0 015.815-6.715A6.762 6.762 0 0012 13zm0-13a5 5 0 11-.001 10.001A5 5 0 0112 0zm0 1C9.79 1 8 2.79 8 5s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z'/%3E%3C/svg%3E",
	"user-support-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M15.23 18h1.557c4.55.153 8.155 3.86 8.214 8.374L25 31.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-4.862C6.922 22 10.577 18.156 15.23 18zm.02.999h-.003A7.503 7.503 0 008 26.63V31h16v-4.378c.069-4.093-3.156-7.485-7.23-7.622h-.02l2.212 5.308a.501.501 0 01-.078.512l-2.5 3a.5.5 0 01-.768 0l-2.5-3a.497.497 0 01-.078-.512l2.212-5.309zm.75.801l-1.922 4.613L16 26.719l1.922-2.306L16 19.8zM16.002 0A8.03 8.03 0 0124 8v3.525l-.003.033L24 11.5a.501.501 0 01-.012.11l-.012.043-.012.034-.02.044-.02.035-.023.032-.03.038-.025.025a.432.432 0 01-.039.034l-.03.022-.038.022a.41.41 0 01-.042.02c-.014.007-.028.012-.042.017l-.018.005-1.95.558C20.904 15.202 18.736 17 16 17c-3.453 0-6-2.861-6-6.71C10 6.335 12.624 3 16 3s6 3.335 6 7.29c0 .391-.026.772-.077 1.14L23 11.123v-3.12a7.029 7.029 0 00-6.998-7.002 7.03 7.03 0 00-7.002 7v3.5a.5.5 0 01-1 0V7.998A8.031 8.031 0 0116.002 0zM16 4c-2.764 0-5 2.842-5 6.29 0 3.32 2.126 5.71 5 5.71 2.053 0 3.724-1.219 4.511-3.126l-3.874 1.107a.5.5 0 11-.274-.962l4.494-1.283A7.17 7.17 0 0021 10.29C21 6.842 18.764 4 16 4z'/%3E%3C/svg%3E",
	"user-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16 14.78c6.075 0 11 4.925 11 11v5.72a.5.5 0 01-.5.5h-21a.5.5 0 01-.5-.5v-5.72c0-6.075 4.925-11 11-11zm0 1c-5.523 0-10 4.477-10 10V31h20v-5.22c0-5.523-4.477-10-10-10zM16 0a6 6 0 110 12 6 6 0 010-12zm0 1a5 5 0 10.001 10.001A5 5 0 0016 1z'/%3E%3C/svg%3E",
	"virtual-machine-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M10 8h1v2h11v11h2v1h-2v10H0V10h10V8zm11 3H1v20h20V11zm11 9v2h-2v-1h1v-1h1zm-4 1v1h-2v-1h2zm-8 0v1h-2v-1h2zm-4 0v1h-2v-1h2zm-6 1v-2h1v1h1v1h-2zm22-6v2h-1v-2h1zm-21 0v2h-1v-2h1zm21-4v2h-1v-2h1zm-21 0v2h-1v-2h1zm21-4v2h-1V8h1zm0-4v2h-1V4h1zM11 4v2h-1V4h1zm21-4v2h-1V1h-1V0h2zM12 0v1h-1v1h-1V0h2zm16 0v1h-2V0h2zm-4 0v1h-2V0h2zm-4 0v1h-2V0h2zm-4 0v1h-2V0h2z'/%3E%3C/svg%3E",
	"wallet-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M25.5 2A3.5 3.5 0 0129 5.5V9h2.5a.5.5 0 01.5.5v20a.5.5 0 01-.5.5h-28A3.5 3.5 0 010 26.5v-21A3.5 3.5 0 013.5 2h22zM1 8.95V26.5A2.5 2.5 0 003.5 29H31v-6h-9.5a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5H31v-6H3.5c-.071 0-.142-.002-.212-.006L3.5 10c-.091 0-.182-.004-.272-.01-.046-.004-.093-.008-.139-.014L3 9.965l-.13-.021-.062-.012-.126-.028-.093-.024-.092-.026c-.026-.008-.051-.015-.076-.024l-.027-.008a3.501 3.501 0 01-.36-.143l-.04-.019a3.758 3.758 0 01-.142-.071l-.046-.026a2.461 2.461 0 01-.123-.071l-.062-.038-.093-.062-.077-.054-.081-.06-.06-.047-.019-.016a3.49 3.49 0 01-.278-.252L1 8.95zM31 17h-9v5h9v-5zm-6.5 2a.5.5 0 110 1 .5.5 0 010-1zM4 5.5a.5.5 0 01.5-.5h21a.5.5 0 01.5.5V9h2V5.5A2.5 2.5 0 0025.5 3h-22A2.5 2.5 0 001 5.5v1A2.5 2.5 0 003.5 9H4V5.5zM25 8H5v1h20V8zm0-2H5v1h20V6z'/%3E%3C/svg%3E",
	"warning-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.43 3.244l15.5 26a.5.5 0 01-.43.756H.5a.5.5 0 01-.43-.756l15.5-26a.501.501 0 01.86 0zM16 4.476L1.38 29h29.24L16 4.476zm0 19.704a.91.91 0 11.001 1.819A.91.91 0 0116 24.18zM16.46 13v1.42l-.12 8.06h-.66l-.14-8.06V13h.92z'/%3E%3C/svg%3E",
	"wifi-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M18.471 22.024a3.5 3.5 0 11-4.95 4.95 3.5 3.5 0 014.95-4.95zm-4.242.707a2.5 2.5 0 103.533 3.536 2.5 2.5 0 00-3.533-3.536zm10.616-7.083l.012.012c.33.357.64.732.927 1.125a.5.5 0 01-.033.63l-4.16 4.6a.5.5 0 01-.818-.11 5.355 5.355 0 00-.906-1.291c-2.148-2.145-5.626-2.145-7.765-.01a5.47 5.47 0 00-.916 1.301.5.5 0 01-.817.11l-4.16-4.6a.5.5 0 01-.024-.642 12.442 12.442 0 0118.66-1.125zm-9.524-2.662a11.443 11.443 0 00-8.084 4.075l3.413 3.774c.215-.328.46-.639.737-.929a6.503 6.503 0 019.195.009c.27.284.514.592.728.92l3.421-3.783c-.19-.243-.392-.479-.602-.706a11.44 11.44 0 00-8.808-3.36zm.639-9.988a21.504 21.504 0 0115.204 6.298c.126.127.226.237.415.455l.043.048c.091.105.147.168.207.233.173.19.175.48.003.672l-4 4.46a.5.5 0 01-.754-.012 15.18 15.18 0 00-.831-.908c-5.662-5.66-14.838-5.66-20.5-.003l-.193.2c-.371.39-.52.542-.757.758a.5.5 0 01-.71-.035l-4-4.46a.501.501 0 01.004-.672 6.33 6.33 0 00.145-.161l.105-.12c.19-.218.289-.328.415-.455A21.506 21.506 0 0115.96 2.998zm0 1a20.495 20.495 0 00-14.496 6.006c-.099.098-.182.19-.335.364l3.357 3.742c.092-.094.2-.207.344-.358l.2-.21.006-.006c6.053-6.05 15.865-6.05 21.918 0 .17.171.341.352.511.54l3.326-3.708a6.444 6.444 0 00-.335-.364A20.5 20.5 0 0015.96 3.998z'/%3E%3C/svg%3E",
	"world-add-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M21.326 1.808a14.366 14.366 0 017.13 15.586A7.962 7.962 0 0131.966 24a7.966 7.966 0 01-14.576 4.449l.17-.036a14.328 14.328 0 01-3.099.352l-.061.002-.09-.002a14.366 14.366 0 117.016-26.957zM24 17.033a6.967 6.967 0 00-6.425 9.666l.135.3.036.058a.416.416 0 01.03.073A6.967 6.967 0 1024 17.033zM13.9 27.736V21.3l-5.776.001c1.218 3.64 3.36 6.135 5.777 6.436zm2.603-6.437h-1.604l.002 6.432a4.473 4.473 0 001.764-.62A7.929 7.929 0 0116.033 24c0-.948.166-1.857.47-2.7zM24 20.3a.5.5 0 01.5.5v2.7h2.7a.5.5 0 010 1h-2.7v2.7a.5.5 0 01-1 0v-2.7h-2.7a.5.5 0 010-1h2.7v-2.7a.5.5 0 01.5-.5zm-13.408 6.909c-1.497-1.314-2.722-3.383-3.52-5.908H2.96a13.363 13.363 0 007.633 5.908zm11.146-12.308L14.9 14.9v5.4h2.044a7.99 7.99 0 014.716-3.916l-.002.014.008-.057c.05-.404.068-.786.073-1.439zM2.412 20.3h4.374a23.466 23.466 0 01-.721-5.4H1.047c.069 1.84.518 3.68 1.365 5.4zm5.409 0h6.078v-5.4H7.065c.04 1.937.308 3.764.756 5.4zm19.942-5.4h-5.025c-.003.531-.016.898-.046 1.241a7.929 7.929 0 014.85.722c.123-.656.196-1.311.22-1.963zM26.4 8.5h-4.386c.43 1.658.683 3.483.721 5.4h5.028A13.364 13.364 0 0026.4 8.5zm-5.421 0h-6.08v5.4h6.836c-.04-1.937-.308-3.764-.756-5.4zM1.047 13.9h5.018c.038-1.917.29-3.742.72-5.401H2.41a13.385 13.385 0 00-1.362 5.4zm6.018 0H13.9V8.5H7.821c-.448 1.636-.716 3.463-.756 5.4zM18.193 1.578l.162.146c1.43 1.318 2.601 3.332 3.372 5.775h4.127a13.339 13.339 0 00-5.01-4.815 13.36 13.36 0 00-2.651-1.106zM14.9 1.065l-.002 6.434h5.776c-1.217-3.635-3.357-6.13-5.774-6.434zm-4.3.518l-.112.034A13.369 13.369 0 002.953 7.5h4.119c.798-2.533 2.028-4.605 3.53-5.918zM8.126 7.499H13.9l.001-6.434c-2.418.304-4.558 2.799-5.775 6.434z'/%3E%3C/svg%3E",
	"world-concept": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.5 0a.56.56 0 01.102.01c5.721.213 10.675 3.428 13.33 8.118a.487.487 0 01.161.289 15.93 15.93 0 011.901 8.011.56.56 0 01-.004.174 15.926 15.926 0 01-1.833 6.86.5.5 0 01-.263.48c-2.665 4.65-7.599 7.837-13.293 8.047A.474.474 0 0116.5 32l-.072-.006c-.142.004-.285.006-.428.006-5.947 0-11.136-3.244-13.894-8.06a.495.495 0 01-.266-.44l.003-.038a15.94 15.94 0 01-1.833-6.86A.587.587 0 010 16.5l.006-.07a15.928 15.928 0 011.901-8.013L1.9 8.5a.5.5 0 01.167-.373C4.815 3.275 10.025 0 16 0c.144 0 .287.002.43.006L16.5 0zM16 24l-6.754.001C10.68 28.215 13.2 31 16 31v-7zm6.754.001L17 24v6.88c2.393-.573 4.493-3.174 5.754-6.879zm-14.562 0H3.309c2 3.164 5.149 5.528 8.861 6.506-1.68-1.393-3.066-3.678-3.978-6.506zm20.499 0h-4.883c-.912 2.828-2.297 5.113-3.978 6.505A15.018 15.018 0 0028.69 24zM7.017 17H1.033c.142 2.156.74 4.188 1.697 6h5.165c-.498-1.834-.805-3.862-.878-6zM16 17H8.018c.077 2.16.4 4.19.916 6H16v-6zm7.982 0H17v6h6.066c.516-1.81.84-3.84.916-6zm6.985 0h-5.984c-.073 2.139-.38 4.167-.878 6.001h5.165a14.925 14.925 0 001.697-6zM7.895 9H2.73A14.931 14.931 0 001 16h6c0-2.506.32-4.883.895-7zM16 9H8.934C8.339 11.088 8 13.468 8 16h8V9zm7.066 0H17v7h7c0-2.533-.34-4.913-.934-7zm6.204 0h-5.165c.575 2.117.895 4.494.895 7h6c0-2.528-.625-4.91-1.73-7zm-17.1-7.506l-.11.029A15.029 15.029 0 003.31 8h4.88c.913-2.83 2.298-5.115 3.98-6.507zM16 1c-2.801 0-5.32 2.785-6.754 7H16V1zm1 .12V8h5.754c-1.26-3.706-3.36-6.306-5.753-6.88zm2.83.373l.033.028c1.666 1.395 3.04 3.67 3.946 6.48h4.882a15.03 15.03 0 00-8.861-6.508z'/%3E%3C/svg%3E",
	add: add,
	"arrow-down-right": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style=''%3E%3Crect width='100%25' height='100%25' fill='none'/%3E%3Cg class='currentLayer' style=''%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M17.364 15.95V9.88a1 1 0 012 0v9.484H9.878a1 1 0 010-2h6.071L4.93 6.344a1 1 0 011.414-1.416l11.02 11.021z' class=''/%3E%3C/g%3E%3C/svg%3E",
	"arrow-down": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 2a1 1 0 011 1l-.001 15.586 4.294-4.293a1 1 0 011.414 1.414L12 22.414l-.7-.7a1.006 1.006 0 01-.015-.014l-5.992-5.993a1 1 0 011.414-1.414L11 18.584V3a1 1 0 011-1z'/%3E%3C/svg%3E",
	"arrow-left": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M22.207 12.207a1 1 0 01-1 1H5.621L9.914 17.5A1 1 0 018.5 18.914l-6.707-6.707.7-.7.015-.015L8.5 5.5a1 1 0 011.414 1.414l-4.29 4.292 15.583.001a1 1 0 011 1z'/%3E%3C/svg%3E",
	"arrow-right": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M1.793 12.207a1 1 0 011-1l15.586.001-4.293-4.294A1 1 0 0115.5 5.5l6.707 6.707-.7.7-.015.015-5.992 5.992a1 1 0 01-1.414-1.414l4.29-4.292H2.794a1 1 0 01-1-1z'/%3E%3C/svg%3E",
	"arrow-transfer": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M8.246 20.703l-4.245-4.2 4.243-4.2a1.027 1.027 0 011.445 0c.395.393.41 1.027.034 1.438L7.98 15.468h7.995c.565.008 1.02.463 1.031 1.027v.013a1.023 1.023 0 01-1.036 1.027H7.982l1.716 1.7c.398.394.41 1.034.028 1.443a1.09 1.09 0 01-.761.322 1.009 1.009 0 01-.719-.297zm6.066-8a1.035 1.035 0 01-.029-1.444l1.742-1.727H8.03c-.568 0-1.029-.46-1.031-1.028V8.49a1.017 1.017 0 011.037-1.025h7.987l-1.716-1.7a1.027 1.027 0 01-.306-.713c-.007-.27.093-.532.279-.729a1.039 1.039 0 011.472-.031l4.245 4.2-4.243 4.2a1.027 1.027 0 01-1.442.011z'/%3E%3C/svg%3E",
	"arrow-up-right": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style=''%3E%3Crect width='100%25' height='100%25' fill='none'/%3E%3Cg class='currentLayer' style=''%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M15.95 6.636H9.88a1 1 0 010-2h9.484v9.485a1 1 0 01-2 0v-6.07L6.344 19.07a1 1 0 01-1.416-1.415L15.95 6.636z' class=''/%3E%3C/g%3E%3C/svg%3E",
	"arrow-up": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 22.414a1 1 0 01-1-1l.001-15.586-4.294 4.293a1 1 0 01-1.414-1.414L12 2l.7.7.015.015 5.992 5.992a1 1 0 01-1.414 1.414L13 5.831v15.582a1 1 0 01-1 1z'/%3E%3C/svg%3E",
	bell: bell,
	bin: bin,
	book: book,
	calendar: calendar,
	cart: cart,
	chat: chat,
	check: check,
	"chevron-down": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M17.293 9.293a1 1 0 011.414 1.414L12 17.414l-6.707-6.707a1 1 0 011.414-1.414L12 14.586l5.293-5.293z'/%3E%3C/svg%3E",
	"chevron-left": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M14.914 17.5a1 1 0 01-1.414 1.414l-6.707-6.707L13.5 5.5a1 1 0 011.414 1.414l-5.293 5.293 5.293 5.293z'/%3E%3C/svg%3E",
	"chevron-right": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M9.086 6.914A1 1 0 0110.5 5.5l6.707 6.707-6.707 6.707A1 1 0 019.086 17.5l5.293-5.293-5.293-5.293z'/%3E%3C/svg%3E",
	"chevron-up-down": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M6.707 13.707L12 19l5.293-5.293a1 1 0 011.414 1.414L12 21.828l-6.707-6.707a1 1 0 111.414-1.414zM12 3l6.707 6.707a1 1 0 11-1.414 1.414L12 5.828l-5.293 5.293a1 1 0 11-1.414-1.414L12 3z'/%3E%3C/svg%3E",
	"chevron-up": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M6.707 15.121a1 1 0 01-1.414-1.414L12 7l6.707 6.707a1 1 0 01-1.414 1.414L12 9.828l-5.293 5.293z'/%3E%3C/svg%3E",
	"clock-wait": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm0 1a1 1 0 011 1v6.586l3.707 3.707a1 1 0 01-1.414 1.414L11 12.414V5a1 1 0 011-1z'/%3E%3C/svg%3E",
	close: close,
	copy: copy,
	download: download,
	"ellipsis-vertical": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M14 12a2 2 0 11-4 0 2 2 0 014 0zm0-6a2 2 0 11-4 0 2 2 0 014 0zm0 12a2 2 0 11-4 0 2 2 0 014 0z'/%3E%3C/svg%3E",
	ellipsis: ellipsis,
	email: email,
	equal: equal,
	"error-circle": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zM8.363 6.96l.094.083 3.548 3.548 3.55-3.548a1 1 0 011.414 1.414l-3.549 3.548 3.55 3.55a1 1 0 01.083 1.32l-.083.095a1 1 0 01-1.32.083l-.095-.083-3.55-3.55-3.548 3.549a1 1 0 11-1.414-1.414l3.548-3.55-3.548-3.548a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083z'/%3E%3C/svg%3E",
	error: error,
	"external-link": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E%3Cdefs%3E%3Cpath id='a' d='M12.657 2a1 1 0 100 2l6.072.002-11.022 11.02a1 1 0 000 1.414c.391.39 1.024.39 1.415 0l11.021-11.02v6.07a.999.999 0 101.999 0V2h-9.485zM3 2.051a1 1 0 00-1 1v18c0 .551.448 1 1 1h18a1 1 0 001-1v-3.975a1 1 0 10-2 0v2.975H4v-16h3.014a1 1 0 100-2H3z'/%3E%3C/defs%3E%3Cuse fill='%23000000' fill-rule='evenodd' xlink:href='%23a'/%3E%3C/svg%3E",
	"eye-closed": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M19.778 4.222c.39.39.32 1.094-.157 1.571L5.793 19.621c-.477.477-1.18.548-1.571.157-.39-.39-.32-1.094.157-1.571L18.207 4.379c.477-.477 1.18-.548 1.571-.157zm-3.319 5.947l2.81-2.812a13.098 13.098 0 013.38 3.486 2.124 2.124 0 01-.004 2.32c-2.245 3.39-5.866 5.495-9.815 5.78-.181.022-.364.04-.55.05l-.279.008-.02-.001a6.747 6.747 0 01-.796-.055 12.719 12.719 0 01-2.943-.56l1.815-1.814A4.602 4.602 0 0012 17l.013-.001c2.632-.006 4.778-2.234 4.778-5a5.18 5.18 0 00-.331-1.83l2.81-2.812zm-4.463-5.17h.011c.006 0 .011.003.017.003.271 0 .537.022.8.055.895.063 1.774.22 2.624.466l-1.786 1.786a4.595 4.595 0 00-1.37-.3l-.29-.01c-2.638.002-4.79 2.232-4.79 5a5.2 5.2 0 00.227 1.531l-2.946 2.947a13.116 13.116 0 01-3.15-3.32 2.128 2.128 0 01.003-2.32c2.252-3.4 5.887-5.506 9.84-5.782.261-.032.525-.053.795-.054h.008L12.007 5zM5.883 8.982a11.161 11.161 0 00-2.866 2.955c-.023.037-.023.092-.003.123a11.177 11.177 0 002.87 2.96A7.139 7.139 0 015.211 12c0-1.08.246-2.102.672-3.018zm12.241.01a7.134 7.134 0 010 6.018 11.154 11.154 0 002.85-2.944.125.125 0 00.004-.124 11.17 11.17 0 00-2.854-2.95z'/%3E%3C/svg%3E",
	"eye-open": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12.016 5c.28.003.545.024.808.057 3.946.28 7.573 2.385 9.825 5.786a2.124 2.124 0 01-.004 2.32c-2.245 3.39-5.866 5.495-9.815 5.78a6.657 6.657 0 01-.829.058h-.012a6.87 6.87 0 01-.804-.056c-3.952-.276-7.587-2.382-9.843-5.787a2.128 2.128 0 01.004-2.321c2.252-3.4 5.887-5.506 9.84-5.782.261-.032.525-.053.795-.054h.035zm-.014 2c-2.638 0-4.79 2.23-4.79 5 0 2.769 2.151 4.999 4.787 5l.013-.001c2.632-.006 4.778-2.234 4.778-5 0-2.768-2.152-4.998-4.788-5zM5.883 8.98a11.161 11.161 0 00-2.866 2.956c-.023.037-.023.092-.003.123a11.177 11.177 0 002.87 2.96 7.139 7.139 0 01-.673-3.02c0-1.08.246-2.102.672-3.018zm12.241.012a7.134 7.134 0 010 6.017 11.154 11.154 0 002.85-2.944.125.125 0 00.004-.124 11.17 11.17 0 00-2.854-2.95zm-6.028.826a1.658 1.658 0 00-.095.545c0 .904.707 1.637 1.579 1.637.179 0 .358-.035.526-.099v.1c0 1.204-.942 2.181-2.105 2.181S9.896 13.205 9.896 12s.942-2.182 2.105-2.182z'/%3E%3C/svg%3E",
	file: file,
	filter: filter,
	folder: folder,
	gear: gear,
	guides: guides,
	hamburger: hamburger,
	"help-circle": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm0 13.1a1 1 0 110 2 1 1 0 010-2zm0-10.2c1.796 0 3.5 1.704 3.5 3.5 0 1.434-1.087 2.81-2.44 3.306l-.06.02v1.424c0 .41-.386.92-.883.992L12 15.15c-.513 0-.936-.481-.993-.904L11 14.15v-2c0-.29.194-.631.483-.83a.868.868 0 01.517-.17c.83 0 1.75-.92 1.75-1.75S12.83 7.65 12 7.65s-1.75.92-1.75 1.75a.875.875 0 11-1.75 0c0-1.796 1.704-3.5 3.5-3.5zm1 6.826l-.118.04.118-.04z'/%3E%3C/svg%3E",
	help: help,
	home: home,
	indeterminate: indeterminate,
	"info-circle": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm0 8a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z'/%3E%3C/svg%3E",
	info: info,
	lightbulb: lightbulb,
	list: list,
	location: location,
	lock: lock,
	minus: minus,
	ok: ok,
	ovh: ovh,
	pen: pen,
	phone: phone,
	plus: plus,
	printer: printer,
	promotion: promotion,
	refresh: refresh,
	remove: remove,
	search: search,
	settings: settings,
	"shape-circle": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm0-2c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z'/%3E%3C/svg%3E",
	"shape-dot": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='11' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E",
	"sort-down": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M6.992 17.992l4.183 4.183a1.166 1.166 0 001.65 0l4.183-4.183A1.166 1.166 0 0016.183 16H7.817a1.166 1.166 0 00-.825 1.992z'/%3E%3C/svg%3E",
	"sort-up": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M17.008 10.008l-4.183-4.183a1.166 1.166 0 00-1.65 0l-4.183 4.183A1.166 1.166 0 007.817 12h8.366a1.166 1.166 0 00.825-1.992z'/%3E%3C/svg%3E",
	sort: sort,
	"success-circle": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm5.889 5.293a1 1 0 01.083 1.32l-.083.094-7 7a.995.995 0 01-.53.277l-.118.014h-.118a.996.996 0 01-.554-.208l-.094-.083-3.182-3.182a1 1 0 011.32-1.497l.094.083 2.474 2.474 6.294-6.292a1 1 0 011.414 0z'/%3E%3C/svg%3E",
	success: success,
	time: time,
	transfer: transfer,
	trash: trash,
	"triangle-down": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M7.707 11.707l3.586 3.586a1 1 0 001.414 0l3.586-3.586A1 1 0 0015.586 10H8.414a1 1 0 00-.707 1.707z'/%3E%3C/svg%3E",
	"triangle-left": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M12.293 7.707l-3.586 3.586a1 1 0 000 1.414l3.586 3.586A1 1 0 0014 15.586V8.414a1 1 0 00-1.707-.707z'/%3E%3C/svg%3E",
	"triangle-right": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M11.707 16.293l3.586-3.586a1 1 0 000-1.414l-3.586-3.586A1 1 0 0010 8.414v7.172a1 1 0 001.707.707z'/%3E%3C/svg%3E",
	"triangle-up": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M16.293 12.293l-3.586-3.586a1 1 0 00-1.414 0l-3.586 3.586A1 1 0 008.414 14h7.172a1 1 0 00.707-1.707z'/%3E%3C/svg%3E",
	truck: truck,
	user: user,
	"warning-circle": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M13.014 3.248a2 2 0 01.71.71l8.251 14.028A2 2 0 0120.252 21H3.748a2 2 0 01-1.723-3.014l8.251-14.028a2 2 0 012.738-.71zM12 4.972L3.748 19h16.504L12 4.972zm.068 12.025h.017a1.006 1.006 0 01-.052.002L12 17l.068-.003zM12 17a1.018 1.018 0 01-.367-.07l-.056-.024a1.016 1.016 0 01-.198-.122l-.088-.079-.05-.056.048.055-.05-.055-.026-.032-.022-.029a1.045 1.045 0 01-.154-.318.959.959 0 01-.025-.116l-.008-.069L11 16a1.018 1.018 0 01.037-.27l.012-.04a.96.96 0 01.067-.158l.034-.059a1.05 1.05 0 01.063-.09l.078-.088.064-.059.011-.01.001-.001.001-.001.05-.038a1.042 1.042 0 01.32-.151.933.933 0 01.112-.024l.067-.008L12 15h.02a1.006 1.006 0 01.183.02l.058.014a1.069 1.069 0 01.106.035l.056.025a1.016 1.016 0 01.194.119l.09.08a1.008 1.008 0 01.219.329l.025.07a1.11 1.11 0 01.037.154l.008.068.002.069v-.043l.001.028v.066l-.003.051a.985.985 0 01-.033.185l-.012.04a.96.96 0 01-.164.307l-.08.09a1.008 1.008 0 01-.447.259l-.056.013a1.099 1.099 0 01-.056.01l-.066.007h-.002l-.005.001h-.007l.011-.001L12 17zm-.634-1.774l-.01.01-.063.057.06-.056.013-.011zm.553-.224l-.002.001-.006.001.008-.002zM12 15l-.069.002h.015L11.98 15H12zm0-6a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm-.622 6.217l-.01.007v.001l.01-.008z'/%3E%3C/svg%3E",
	warning: warning
};

var OdsThemeColorHue;
(function (OdsThemeColorHue) {
    OdsThemeColorHue["_000"] = "000";
    OdsThemeColorHue["_050"] = "050";
    OdsThemeColorHue["_075"] = "075";
    OdsThemeColorHue["_100"] = "100";
    OdsThemeColorHue["_200"] = "200";
    OdsThemeColorHue["_300"] = "300";
    OdsThemeColorHue["_400"] = "400";
    OdsThemeColorHue["_500"] = "500";
    OdsThemeColorHue["_600"] = "600";
    OdsThemeColorHue["_700"] = "700";
    OdsThemeColorHue["_800"] = "800";
    OdsThemeColorHue["_900"] = "900";
    OdsThemeColorHue["_1000"] = "1000";
})(OdsThemeColorHue || (OdsThemeColorHue = {}));
Object.keys(OdsThemeColorHue)
    .map((key) => OdsThemeColorHue[key]);

var OdsThemeColorIntent;
(function (OdsThemeColorIntent) {
    OdsThemeColorIntent["default"] = "default";
    OdsThemeColorIntent["primary"] = "primary";
    OdsThemeColorIntent["text"] = "text";
    OdsThemeColorIntent["accent"] = "accent";
    OdsThemeColorIntent["error"] = "error";
    OdsThemeColorIntent["warning"] = "warning";
    OdsThemeColorIntent["success"] = "success";
    OdsThemeColorIntent["info"] = "info";
    OdsThemeColorIntent["promotion"] = "promotion";
})(OdsThemeColorIntent || (OdsThemeColorIntent = {}));
Object.keys(OdsThemeColorIntent)
    .map((key) => OdsThemeColorIntent[key]);

var OdsThemeSize;
(function (OdsThemeSize) {
    OdsThemeSize["_100"] = "100";
    OdsThemeSize["_200"] = "200";
    OdsThemeSize["_300"] = "300";
    OdsThemeSize["_400"] = "400";
    OdsThemeSize["_500"] = "500";
    OdsThemeSize["_600"] = "600";
    OdsThemeSize["_700"] = "700";
    OdsThemeSize["_800"] = "800";
    OdsThemeSize["_900"] = "900";
})(OdsThemeSize || (OdsThemeSize = {}));
Object.keys(OdsThemeSize)
    .map((key) => OdsThemeSize[key]);
/*

enum MyProps {
  prop1 = 'prop1',
  prop2 = 'prop2'
}

export type MyPropsUnion = `${MyProps}`;

interface MyProps3 {
  prop1: string,
  prop2: string
}

const myProps2 =  {
  prop1:'prop1',
  prop2: 'prop2'
}


type dd = keyof MyProps3;

const dzqf:dd = MyProps.prop2;

interface MyProps2 {
  prop1: string;
}

interface MyComp extends Record<MyPropsUnion, any> {

}



type ThreeStringProps = Record<MyPropsUnion, string>
const zqf:ThreeStringProps = {
  prop1: "j",
  prop2: "j"
}
*/

var OdsThemeTypographyLevel;
(function (OdsThemeTypographyLevel) {
    OdsThemeTypographyLevel["heading"] = "heading";
    OdsThemeTypographyLevel["subheading"] = "subheading";
    OdsThemeTypographyLevel["body"] = "body";
    OdsThemeTypographyLevel["caption"] = "caption";
    OdsThemeTypographyLevel["button"] = "button";
})(OdsThemeTypographyLevel || (OdsThemeTypographyLevel = {}));
Object.keys(OdsThemeTypographyLevel)
    .map((key) => OdsThemeTypographyLevel[key]);

var OdsThemeTypographySize;
(function (OdsThemeTypographySize) {
    OdsThemeTypographySize["_100"] = "100";
    OdsThemeTypographySize["_200"] = "200";
    OdsThemeTypographySize["_300"] = "300";
    OdsThemeTypographySize["_400"] = "400";
    OdsThemeTypographySize["_500"] = "500";
    OdsThemeTypographySize["_600"] = "600";
    OdsThemeTypographySize["_700"] = "700";
    OdsThemeTypographySize["_800"] = "800";
})(OdsThemeTypographySize || (OdsThemeTypographySize = {}));
Object.keys(OdsThemeTypographySize)
    .map((key) => OdsThemeTypographySize[key]);

const DEFAULT_ATTRIBUTE$1 = Object.freeze({
  ariaName: '',
  color: OdsThemeColorIntent.default,
  contrasted: false,
  hoverable: false,
  name: undefined,
  size: ODS_ICON_SIZE.md,
});

/**
 * default `ODS` configuration applied if there no custom configuration made on client side
 */
const odsDefaultConfig = {
    id: Date.now(),
    logging: {
        active: false,
        color: true
    },
    asset: {
        path: ''
    }
};

/**
 * get the window element typed as ODS window
 */
function getOdsWindow() {
    // node protection or other env : window may not exist
    if (typeof window !== "undefined") {
        const win = window;
        win.winId = win.winId ? win.winId : Date.now();
        //console.log('want window id=', (win as any).winId, { setupId: win.ods?.setupId, config: win.ods?.config });
        return win;
    }
    return undefined;
}

class OdsLogger {
    constructor(context, prefix) {
        this.id = Math.floor(Math.random() * 10e6);
        this.prefixColor = "color: white;background:#004fd6;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px 0px 0px 5px";
        this.contextColor = "color: black;background:#d4e0e7;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 0px 5px 5px 0px";
        this.prefix = "ODS";
        this.context = "";
        this.prefix = prefix ? prefix : this.prefix;
        this.context = context;
    }
    get log() {
        return this.getConsole('log');
    }
    get warn() {
        return this.getConsole('warn');
    }
    get error() {
        return this.getConsole('error');
    }
    get info() {
        return this.getConsole('info');
    }
    get debug() {
        return this.getConsole('debug');
    }
    get trace() {
        return this.getConsole('trace');
    }
    getConsole(method) {
        if (this.logging) {
            if (this.color) {
                // eslint-disable-next-line no-console
                return console[method].bind(null, `${this.prefix ? '%c' : '%s'}${this.prefix} %c${this.context}`, this.prefix ? this.prefixColor : '', this.contextColor);
            }
            // eslint-disable-next-line no-console
            return console[method].bind(null, `[${this.prefix}${this.prefix ? '|' : ''}${this.context}]`);
        }
        else {
            // dummy function if nlog not enabled
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            return (() => {
            });
        }
    }
    get logging() {
        var _a, _b, _c;
        const win = getOdsWindow();
        const active = (_c = (_b = (_a = win === null || win === void 0 ? void 0 : win.ods) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.logging) === null || _c === void 0 ? void 0 : _c.active;
        return active === undefined ? odsDefaultConfig.logging.active : active;
    }
    get color() {
        var _a, _b, _c;
        const win = getOdsWindow();
        const color = (_c = (_b = (_a = win === null || win === void 0 ? void 0 : win.ods) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.logging) === null || _c === void 0 ? void 0 : _c.color;
        return color === undefined ? odsDefaultConfig.logging.color : color;
    }
}

// replaced on built file
const VERSION = '9.0.3';

class OdsExternalLogger extends OdsLogger {
    constructor(context, prefix) {
        super(context, prefix);
        this.prefixColor = "color: white;background:#403f3e;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px 0px 0px 5px";
        this.contextColor = "color: black;background:#d4e0e7;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 0px 5px 5px 0px";
        // specific prefix for an external logging that using this logger
        this.prefix = 'CUSTOM';
    }
}

/**
 * Main class that controls ODS :
 * - manage / create this singleton
 * - fire an event once created
 * - managing logging: enable or not
 * - managing i18n: in order to connect a translation system
 *
 * @example enable log on `ODS` initialization via javascript. make sure to execute this before any `ODS` script.
 * ```html
 * <script type="module">
 *   document.addEventListener('odsInitialized', ({detail}) => {
 *     const instance = detail.instance;
 *     instance.logging(true);
 *     const logger = new instance.logger('MY CONTEXT');
 *     logger.log('odsInitialized received');
 *   })
 * </script>
 * ```
 *
 * @example enable log on `ODS` initialization via typescript. make sure to execute this before any `ODS` script.
 * ```typescript
 * import {
 *   OdsInitializedEvent,
 *   OdsInitializedEventName
 * } from '@ovhcloud/ods-core';
 *
 * document.addEventListener(OdsInitializedEventName, (event) => {
 *   const evt = event as OdsInitializedEvent;
 *   const instance = evt.detail.instance;
 *   instance.logging(true);
 *   const logger = new instance.logger('MY CONTEXT');
 *   logger.log('odsInitialized received');
 * })
 * ```
 *
 * @example enable log on demand via typescript
 * ```typescript
 * import { Ods } from '@ovhcloud/ods-core';
 * Ods.instance().logging(true);
 * ```
 *
 * @example configure different element of `ODS`
 * ```typescript
 * import { Ods } from '@ovhcloud/ods-core';
 * const my translationCbk: OdsI18nHook = (key, values) => `${key} to be translated`;
 * Ods.instance()
 *   .logging(true)
 *   .i18n(translationCbk);
 * ```
 *
 * @example use the embedded logger of `ODS` via typescript
 * ```typescript
 * import { Ods } from '@ovhcloud/ods-core';
 *
 * Ods.instance().logging(true);
 * const myLogger = new (Ods.instance().logger)('MY CONTEXT');
 *
 * myLogger.log('my log with the same logger as ODS');
 * myLogger.error('my error log with the same logger as ODS');
 *
 * Ods.instance().logging(false);
 * myLogger.log('my log is disabled as ods log is disabled');
 * ```
 *
 */
class Ods {
    constructor(config) {
        this.config = config;
        this.version = VERSION;
        this.genericLogger = new OdsLogger('ODS', 'OVHcloud Design System');
        const winA = window;
        // console.log('ici winA', (winA as any));
        // console.log('ici winA', (winA as any).gg);
        winA.gg = 'winA';
        // console.log('ici winA', (winA as any).gg);
        this.config = config;
        this.instanceId = Ods._instanceId++;
        // console.log(`[Ods #${this.instanceId}]`, 'ods constructor');
        this.genericLogger.info('Hi! You are using OVHcloud Design System components, feel free to check out https://go/odsdoc/', {
            id: this.instanceId,
            version: this.version
        });
        const odsEvent = new CustomEvent("odsInitialized", {
            detail: {
                version: VERSION,
                instance: this,
                config
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        document.dispatchEvent(odsEvent);
    }
    /**
     * @deprecated use `Ods.instance()`
     */
    static configure() {
        return this.instance();
    }
    /**
     * get or create the ODS instance.
     * The singleton is retrieved if exist
     */
    static instance(config = odsDefaultConfig) {
        var _a, _b;
        // console.log('[Ods] static ods.instance');
        // console.log('[Ods] static ods.instance', 'already set instance number: this._instance.instanceId', this._instance?.instanceId);
        if (!this._instance) {
            const win = getOdsWindow();
            // check if an instance is already set through the window for the concerned version
            // example: if we inserted ods twice in an application or if we inserted an independent package plus le bundled package, we are in this case
            // console.log('[Ods] static ods.instance win.ods', win?.ods);
            // console.log('[Ods] static ods.instance win.ods.config', win?.ods?.config);
            if (((_a = win === null || win === void 0 ? void 0 : win.ods) === null || _a === void 0 ? void 0 : _a.versions) && ((_b = win === null || win === void 0 ? void 0 : win.ods) === null || _b === void 0 ? void 0 : _b.versions[VERSION])) {
                // console.log('[Ods] static ods.instance already set in win', win.ods.versions[ VERSION ].instanceId);
                this._instance = win.ods.versions[VERSION];
            }
            else {
                // console.log('[Ods] static ods.instance create new instance');
                // console.log('[Ods] static ods.instance', 'wanted config=', JSON.stringify(config));
                this._instance = new Ods(config);
                // console.log('[Ods] static ods.instance created with id=', this._instance.instanceId);
            }
        }
        return this._instance;
    }
    /**
     * set your custom i18n callback function that is processing translations.
     * the callback has to return the translated string processed by your translation system.
     * @param hook - function that will receive the values to translate
     */
    i18n(hook) {
        this.i18nHook = hook;
        return this;
    }
    getI18n() {
        return this.i18nHook;
    }
    /**
     * set the default asset path where to find the different assets of `ODS`.
     * @param path - path like `my-ods-svg/`
     */
    assetPath(path) {
        // console.log(`[Ods #${this.instanceId}].assetPath`, 'ods wanted path', path);
        this.config.asset.path = path;
        // console.log(`[Ods #${this.instanceId}].assetPath`, 'path set. this.config=', this.config);
        return this;
    }
    /**
     * get all the configuration of `ODS`
     */
    getConfig() {
        // console.log(`[Ods #${this.instanceId}].getCOnfig`, 'this.config=', JSON.stringify(this.config));
        return this.config;
    }
    /**
     * enable or not the logging for the `ODS` instance
     * @param enable - your boolean
     */
    logging(enable) {
        this.config.logging.active = enable;
        return this;
    }
    isLoggingActive() {
        return this.config.logging.active;
    }
    get logger() {
        return OdsExternalLogger;
    }
}
Ods._instanceId = 0;

/**
 * initialize all properties of window that are specific to `ods`.
 * initialize empty object `versions` and the setup id.
 * it gives w window object with filled `ods` properties
 * @param win - window object
 * @param baseConfig - base config to set by default
 */
function initializeProperties(win, baseConfig) {
    // initialize ods if needed
    if (!win.ods) {
        win.ods = {
            setupId: Date.now(),
            // with our own object reference
            config: baseConfig
        };
    }
    // initialize ods versions if needed
    if (!win.ods.versions) {
        win.ods.versions = {};
    }
    // initialize a setup id if needed (user made an ods setup config himself)
    win.ods.setupId = win.ods.setupId || Date.now();
    return win;
}
/**
 * initialize logging config.
 * it takes default config if not filled correctly
 * @param odsConf - config of `ods`
 */
function applyLoggingConf(odsConf) {
    odsConf.logging = odsConf.logging || odsDefaultConfig.logging;
    // make sure all props are defined and typed correctly (can be not correctly initialized on client side)
    // warn: the object reference does not have to be modified, so we have to modify only
    const formatLogging = (odsConf) => {
        var _a, _b;
        return ({
            active: typeof ((_a = odsConf === null || odsConf === void 0 ? void 0 : odsConf.logging) === null || _a === void 0 ? void 0 : _a.active) !== 'boolean' ? odsDefaultConfig.logging.active : odsConf.logging.active,
            color: typeof ((_b = odsConf === null || odsConf === void 0 ? void 0 : odsConf.logging) === null || _b === void 0 ? void 0 : _b.color) !== 'boolean' ? odsDefaultConfig.logging.color : odsConf.logging.color
        });
    };
    const formatted = formatLogging(odsConf);
    odsConf.logging.active = formatted.active;
    odsConf.logging.color = formatted.color;
}
function applyAssetConf(odsConf) {
    odsConf.asset = odsConf.asset || odsDefaultConfig.asset;
    odsConf.asset.path = odsConf.asset.path ? odsConf.asset.path : odsDefaultConfig.asset.path;
}
/**
 * create all the globals properties set up into window (when available).
 */
function odsSetup( /*userConfig?: OdsConfig*/) {
    //console.log('odsSetup');
    const win = getOdsWindow();
    if (win) {
        // make our object reference, based on default
        const configObjectRef = Object.assign(Object.assign({}, odsDefaultConfig), { id: Date.now() });
        const winFilled = initializeProperties(win, configObjectRef);
        let config;
        // take here the client object reference or our own made before
        const odsConf = winFilled.ods.config;
        if (odsConf) {
            applyLoggingConf(odsConf);
            applyAssetConf(odsConf);
            config = odsConf;
        }
        else {
            // our own
            config = configObjectRef;
        }
        // set the current ODS version into the right property and create the instance if needed
        //console.log('[odsSetup] VERSION', VERSION);
        if (!winFilled.ods.versions[VERSION]) {
            //console.log('[odsSetup] call instance');
            winFilled.ods.versions[VERSION] = Ods.instance(config);
        }
        // always set as latest the superior detected versions
        if (!winFilled.ods.latest || (winFilled.ods.latest && VERSION > winFilled.ods.latest.version)) {
            winFilled.ods.latest = winFilled.ods.versions[VERSION];
        }
    }
    //console.log('odsSetup end');
}
const win = getOdsWindow();
if (win)
    win.odsSetup = odsSetup;

var ODS_COUNTRY_ISO_CODE;
(function (ODS_COUNTRY_ISO_CODE) {
    ODS_COUNTRY_ISO_CODE["AR"] = "ar";
    ODS_COUNTRY_ISO_CODE["AS"] = "as";
    ODS_COUNTRY_ISO_CODE["AT"] = "at";
    ODS_COUNTRY_ISO_CODE["AU"] = "au";
    ODS_COUNTRY_ISO_CODE["AW"] = "aw";
    ODS_COUNTRY_ISO_CODE["AX"] = "ax";
    ODS_COUNTRY_ISO_CODE["AZ"] = "az";
    ODS_COUNTRY_ISO_CODE["BA"] = "ba";
    ODS_COUNTRY_ISO_CODE["BB"] = "bb";
    ODS_COUNTRY_ISO_CODE["BD"] = "bd";
    ODS_COUNTRY_ISO_CODE["BE"] = "be";
    ODS_COUNTRY_ISO_CODE["BF"] = "bf";
    ODS_COUNTRY_ISO_CODE["BG"] = "bg";
    ODS_COUNTRY_ISO_CODE["BH"] = "bh";
    ODS_COUNTRY_ISO_CODE["BI"] = "bi";
    ODS_COUNTRY_ISO_CODE["BJ"] = "bj";
    ODS_COUNTRY_ISO_CODE["BL"] = "bl";
    ODS_COUNTRY_ISO_CODE["BM"] = "bm";
    ODS_COUNTRY_ISO_CODE["BN"] = "bn";
    ODS_COUNTRY_ISO_CODE["BO"] = "bo";
    ODS_COUNTRY_ISO_CODE["BQ"] = "bq";
    ODS_COUNTRY_ISO_CODE["BR"] = "br";
    ODS_COUNTRY_ISO_CODE["BS"] = "bs";
    ODS_COUNTRY_ISO_CODE["BT"] = "bt";
    ODS_COUNTRY_ISO_CODE["BW"] = "bw";
    ODS_COUNTRY_ISO_CODE["BY"] = "by";
    ODS_COUNTRY_ISO_CODE["BZ"] = "bz";
    ODS_COUNTRY_ISO_CODE["CA"] = "ca";
    ODS_COUNTRY_ISO_CODE["CC"] = "cc";
    ODS_COUNTRY_ISO_CODE["CD"] = "cd";
    ODS_COUNTRY_ISO_CODE["CF"] = "cf";
    ODS_COUNTRY_ISO_CODE["CG"] = "cg";
    ODS_COUNTRY_ISO_CODE["CH"] = "ch";
    ODS_COUNTRY_ISO_CODE["CI"] = "ci";
    ODS_COUNTRY_ISO_CODE["CK"] = "ck";
    ODS_COUNTRY_ISO_CODE["CL"] = "cl";
    ODS_COUNTRY_ISO_CODE["CM"] = "cm";
    ODS_COUNTRY_ISO_CODE["CN"] = "cn";
    ODS_COUNTRY_ISO_CODE["CO"] = "co";
    ODS_COUNTRY_ISO_CODE["CR"] = "cr";
    ODS_COUNTRY_ISO_CODE["CU"] = "cu";
    ODS_COUNTRY_ISO_CODE["CV"] = "cv";
    ODS_COUNTRY_ISO_CODE["CW"] = "cw";
    ODS_COUNTRY_ISO_CODE["CX"] = "cx";
    ODS_COUNTRY_ISO_CODE["CY"] = "cy";
    ODS_COUNTRY_ISO_CODE["CZ"] = "cz";
    ODS_COUNTRY_ISO_CODE["DE"] = "de";
    ODS_COUNTRY_ISO_CODE["DJ"] = "dj";
    ODS_COUNTRY_ISO_CODE["DK"] = "dk";
    ODS_COUNTRY_ISO_CODE["DM"] = "dm";
    ODS_COUNTRY_ISO_CODE["DO"] = "do";
    ODS_COUNTRY_ISO_CODE["DZ"] = "dz";
    ODS_COUNTRY_ISO_CODE["EC"] = "ec";
    ODS_COUNTRY_ISO_CODE["EE"] = "ee";
    ODS_COUNTRY_ISO_CODE["EG"] = "eg";
    ODS_COUNTRY_ISO_CODE["EH"] = "eh";
    ODS_COUNTRY_ISO_CODE["ER"] = "er";
    ODS_COUNTRY_ISO_CODE["ES"] = "es";
    ODS_COUNTRY_ISO_CODE["ET"] = "et";
    ODS_COUNTRY_ISO_CODE["EU"] = "eu";
    ODS_COUNTRY_ISO_CODE["FI"] = "fi";
    ODS_COUNTRY_ISO_CODE["FJ"] = "fj";
    ODS_COUNTRY_ISO_CODE["FK"] = "fk";
    ODS_COUNTRY_ISO_CODE["FM"] = "fm";
    ODS_COUNTRY_ISO_CODE["FO"] = "fo";
    ODS_COUNTRY_ISO_CODE["FR"] = "fr";
    ODS_COUNTRY_ISO_CODE["GA"] = "ga";
    ODS_COUNTRY_ISO_CODE["GB"] = "gb";
    ODS_COUNTRY_ISO_CODE["GD"] = "gd";
    ODS_COUNTRY_ISO_CODE["GE"] = "ge";
    ODS_COUNTRY_ISO_CODE["GF"] = "gf";
    ODS_COUNTRY_ISO_CODE["GG"] = "gg";
    ODS_COUNTRY_ISO_CODE["GH"] = "gh";
    ODS_COUNTRY_ISO_CODE["GI"] = "gi";
    ODS_COUNTRY_ISO_CODE["GL"] = "gl";
    ODS_COUNTRY_ISO_CODE["GM"] = "gm";
    ODS_COUNTRY_ISO_CODE["GN"] = "gn";
    ODS_COUNTRY_ISO_CODE["GP"] = "gp";
    ODS_COUNTRY_ISO_CODE["GQ"] = "gq";
    ODS_COUNTRY_ISO_CODE["GR"] = "gr";
    ODS_COUNTRY_ISO_CODE["GS"] = "gs";
    ODS_COUNTRY_ISO_CODE["GT"] = "gt";
    ODS_COUNTRY_ISO_CODE["GU"] = "gu";
    ODS_COUNTRY_ISO_CODE["GW"] = "gw";
    ODS_COUNTRY_ISO_CODE["GY"] = "gy";
    ODS_COUNTRY_ISO_CODE["HK"] = "hk";
    ODS_COUNTRY_ISO_CODE["HN"] = "hn";
    ODS_COUNTRY_ISO_CODE["HR"] = "hr";
    ODS_COUNTRY_ISO_CODE["HT"] = "ht";
    ODS_COUNTRY_ISO_CODE["HU"] = "hu";
    ODS_COUNTRY_ISO_CODE["ID"] = "id";
    ODS_COUNTRY_ISO_CODE["IE"] = "ie";
    ODS_COUNTRY_ISO_CODE["IL"] = "il";
    ODS_COUNTRY_ISO_CODE["IM"] = "im";
    ODS_COUNTRY_ISO_CODE["IN"] = "in";
    ODS_COUNTRY_ISO_CODE["IO"] = "io";
    ODS_COUNTRY_ISO_CODE["IQ"] = "iq";
    ODS_COUNTRY_ISO_CODE["IR"] = "ir";
    ODS_COUNTRY_ISO_CODE["IS"] = "is";
    ODS_COUNTRY_ISO_CODE["IT"] = "it";
    ODS_COUNTRY_ISO_CODE["JE"] = "je";
    ODS_COUNTRY_ISO_CODE["JM"] = "jm";
    ODS_COUNTRY_ISO_CODE["JO"] = "jo";
    ODS_COUNTRY_ISO_CODE["JP"] = "jp";
    ODS_COUNTRY_ISO_CODE["KE"] = "ke";
    ODS_COUNTRY_ISO_CODE["KN"] = "kn";
    ODS_COUNTRY_ISO_CODE["KP"] = "kp";
    ODS_COUNTRY_ISO_CODE["KR"] = "kr";
    ODS_COUNTRY_ISO_CODE["KW"] = "kw";
    ODS_COUNTRY_ISO_CODE["KY"] = "ky";
    ODS_COUNTRY_ISO_CODE["KZ"] = "kz";
    ODS_COUNTRY_ISO_CODE["LA"] = "la";
    ODS_COUNTRY_ISO_CODE["LB"] = "lb";
    ODS_COUNTRY_ISO_CODE["LC"] = "lc";
    ODS_COUNTRY_ISO_CODE["LI"] = "li";
    ODS_COUNTRY_ISO_CODE["LR"] = "lr";
    ODS_COUNTRY_ISO_CODE["LS"] = "ls";
    ODS_COUNTRY_ISO_CODE["LT"] = "lt";
    ODS_COUNTRY_ISO_CODE["LU"] = "lu";
    ODS_COUNTRY_ISO_CODE["LV"] = "lv";
    ODS_COUNTRY_ISO_CODE["LY"] = "ly";
    ODS_COUNTRY_ISO_CODE["MA"] = "ma";
    ODS_COUNTRY_ISO_CODE["MC"] = "mc";
    ODS_COUNTRY_ISO_CODE["MD"] = "md";
    ODS_COUNTRY_ISO_CODE["ME"] = "me";
    ODS_COUNTRY_ISO_CODE["MF"] = "mf";
    ODS_COUNTRY_ISO_CODE["MG"] = "mg";
    ODS_COUNTRY_ISO_CODE["MH"] = "mh";
    ODS_COUNTRY_ISO_CODE["MK"] = "mk";
    ODS_COUNTRY_ISO_CODE["ML"] = "ml";
    ODS_COUNTRY_ISO_CODE["MM"] = "mm";
    ODS_COUNTRY_ISO_CODE["MN"] = "mn";
    ODS_COUNTRY_ISO_CODE["MO"] = "mo";
    ODS_COUNTRY_ISO_CODE["MP"] = "mp";
    ODS_COUNTRY_ISO_CODE["MQ"] = "mq";
    ODS_COUNTRY_ISO_CODE["MR"] = "mr";
    ODS_COUNTRY_ISO_CODE["MS"] = "ms";
    ODS_COUNTRY_ISO_CODE["MT"] = "mt";
    ODS_COUNTRY_ISO_CODE["MU"] = "mu";
    ODS_COUNTRY_ISO_CODE["MV"] = "mv";
    ODS_COUNTRY_ISO_CODE["MW"] = "mw";
    ODS_COUNTRY_ISO_CODE["MX"] = "mx";
    ODS_COUNTRY_ISO_CODE["MY"] = "my";
    ODS_COUNTRY_ISO_CODE["MZ"] = "mz";
    ODS_COUNTRY_ISO_CODE["NA"] = "na";
    ODS_COUNTRY_ISO_CODE["NC"] = "nc";
    ODS_COUNTRY_ISO_CODE["NE"] = "ne";
    ODS_COUNTRY_ISO_CODE["NF"] = "nf";
    ODS_COUNTRY_ISO_CODE["NG"] = "ng";
    ODS_COUNTRY_ISO_CODE["NI"] = "ni";
    ODS_COUNTRY_ISO_CODE["NL"] = "nl";
    ODS_COUNTRY_ISO_CODE["NO"] = "no";
    ODS_COUNTRY_ISO_CODE["NP"] = "np";
    ODS_COUNTRY_ISO_CODE["NR"] = "nr";
    ODS_COUNTRY_ISO_CODE["NU"] = "nu";
    ODS_COUNTRY_ISO_CODE["NZ"] = "nz";
    ODS_COUNTRY_ISO_CODE["OM"] = "om";
    ODS_COUNTRY_ISO_CODE["PA"] = "pa";
    ODS_COUNTRY_ISO_CODE["PF"] = "pf";
    ODS_COUNTRY_ISO_CODE["PG"] = "pg";
    ODS_COUNTRY_ISO_CODE["PH"] = "ph";
    ODS_COUNTRY_ISO_CODE["PK"] = "pk";
    ODS_COUNTRY_ISO_CODE["PL"] = "pl";
    ODS_COUNTRY_ISO_CODE["PM"] = "pm";
    ODS_COUNTRY_ISO_CODE["PN"] = "pn";
    ODS_COUNTRY_ISO_CODE["PR"] = "pr";
    ODS_COUNTRY_ISO_CODE["PS"] = "ps";
    ODS_COUNTRY_ISO_CODE["PT"] = "pt";
    ODS_COUNTRY_ISO_CODE["PW"] = "pw";
    ODS_COUNTRY_ISO_CODE["PY"] = "py";
    ODS_COUNTRY_ISO_CODE["QA"] = "qa";
    ODS_COUNTRY_ISO_CODE["RE"] = "re";
    ODS_COUNTRY_ISO_CODE["RO"] = "ro";
    ODS_COUNTRY_ISO_CODE["RS"] = "rs";
    ODS_COUNTRY_ISO_CODE["RU"] = "ru";
    ODS_COUNTRY_ISO_CODE["RW"] = "rw";
    ODS_COUNTRY_ISO_CODE["SA"] = "sa";
    ODS_COUNTRY_ISO_CODE["SB"] = "sb";
    ODS_COUNTRY_ISO_CODE["SC"] = "sc";
    ODS_COUNTRY_ISO_CODE["SD"] = "sd";
    ODS_COUNTRY_ISO_CODE["SE"] = "se";
    ODS_COUNTRY_ISO_CODE["SG"] = "sg";
    ODS_COUNTRY_ISO_CODE["SH"] = "sh";
    ODS_COUNTRY_ISO_CODE["SI"] = "si";
    ODS_COUNTRY_ISO_CODE["SJ"] = "sj";
    ODS_COUNTRY_ISO_CODE["SK"] = "sk";
    ODS_COUNTRY_ISO_CODE["SL"] = "sl";
    ODS_COUNTRY_ISO_CODE["SM"] = "sm";
    ODS_COUNTRY_ISO_CODE["SN"] = "sn";
    ODS_COUNTRY_ISO_CODE["SO"] = "so";
    ODS_COUNTRY_ISO_CODE["SR"] = "sr";
    ODS_COUNTRY_ISO_CODE["SS"] = "ss";
    ODS_COUNTRY_ISO_CODE["ST"] = "st";
    ODS_COUNTRY_ISO_CODE["SV"] = "sv";
    ODS_COUNTRY_ISO_CODE["SX"] = "sx";
    ODS_COUNTRY_ISO_CODE["SY"] = "sy";
    ODS_COUNTRY_ISO_CODE["SZ"] = "sz";
    ODS_COUNTRY_ISO_CODE["TC"] = "tc";
    ODS_COUNTRY_ISO_CODE["TD"] = "td";
    ODS_COUNTRY_ISO_CODE["TF"] = "tf";
    ODS_COUNTRY_ISO_CODE["TG"] = "tg";
    ODS_COUNTRY_ISO_CODE["TH"] = "th";
    ODS_COUNTRY_ISO_CODE["TJ"] = "tj";
    ODS_COUNTRY_ISO_CODE["TK"] = "tk";
    ODS_COUNTRY_ISO_CODE["TL"] = "tl";
    ODS_COUNTRY_ISO_CODE["TM"] = "tm";
    ODS_COUNTRY_ISO_CODE["TN"] = "tn";
    ODS_COUNTRY_ISO_CODE["TO"] = "to";
    ODS_COUNTRY_ISO_CODE["TR"] = "tr";
    ODS_COUNTRY_ISO_CODE["TT"] = "tt";
    ODS_COUNTRY_ISO_CODE["TV"] = "tv";
    ODS_COUNTRY_ISO_CODE["TW"] = "tw";
    ODS_COUNTRY_ISO_CODE["TZ"] = "tz";
    ODS_COUNTRY_ISO_CODE["UA"] = "ua";
    ODS_COUNTRY_ISO_CODE["UG"] = "ug";
    ODS_COUNTRY_ISO_CODE["UM"] = "um";
    ODS_COUNTRY_ISO_CODE["UN"] = "un";
    ODS_COUNTRY_ISO_CODE["UNIA"] = "unia";
    ODS_COUNTRY_ISO_CODE["US"] = "us";
    ODS_COUNTRY_ISO_CODE["UY"] = "uy";
    ODS_COUNTRY_ISO_CODE["UZ"] = "uz";
    ODS_COUNTRY_ISO_CODE["VA"] = "va";
    ODS_COUNTRY_ISO_CODE["VC"] = "vc";
    ODS_COUNTRY_ISO_CODE["VE"] = "ve";
    ODS_COUNTRY_ISO_CODE["VG"] = "vg";
    ODS_COUNTRY_ISO_CODE["VI"] = "vi";
    ODS_COUNTRY_ISO_CODE["VN"] = "vn";
    ODS_COUNTRY_ISO_CODE["VU"] = "vu";
    ODS_COUNTRY_ISO_CODE["WF"] = "wf";
    ODS_COUNTRY_ISO_CODE["WS"] = "ws";
    ODS_COUNTRY_ISO_CODE["XK"] = "xk";
    ODS_COUNTRY_ISO_CODE["YE"] = "ye";
    ODS_COUNTRY_ISO_CODE["YT"] = "yt";
    ODS_COUNTRY_ISO_CODE["ZA"] = "za";
    ODS_COUNTRY_ISO_CODE["ZM"] = "zm";
})(ODS_COUNTRY_ISO_CODE || (ODS_COUNTRY_ISO_CODE = {}));
Object.keys(ODS_COUNTRY_ISO_CODE)
    .map((key) => ODS_COUNTRY_ISO_CODE[key]);

/**
 * @param term - an enum value or a string
 * @param set - the enum reference that contains values
 */
function odsIsTermInEnum(term, set) {
    return Object.values(set).includes(term);
}

function OdsWarnComponentEnumAttribute(params) {
    if (!odsIsTermInEnum(params.attribute, params.attributeValues)) {
        params.logger.warn(`The ${params.attributeName} attribute must have a value from [${Object.values(params.attributeValues).join(', ')}]`);
    }
}
function OdsWarnComponentRangeAttribute(params) {
    if (params.attribute && (params.attribute > params.max || params.attribute < params.min)) {
        params.logger.warn(`The value attribute must be in bounds of [${[params.min, params.max].join(', ')}]`);
    }
}
function OdsWarnComponentAttribute(params, required = false) {
    if (required && !params.attribute) {
        return params.logger.warn(`Attribute ${params.attributeName} is required.`);
    }
    if (typeof params.attribute === 'number') {
        return OdsWarnComponentRangeAttribute(params);
    }
    return OdsWarnComponentEnumAttribute(params);
}

var OlesIpsumGeneration;
(function (OlesIpsumGeneration) {
    OlesIpsumGeneration["paragraphs"] = "paragraphs";
    OlesIpsumGeneration["sentences"] = "sentences";
    OlesIpsumGeneration["words"] = "words";
})(OlesIpsumGeneration || (OlesIpsumGeneration = {}));
Object.keys(OlesIpsumGeneration)
    .map((key) => OlesIpsumGeneration[key]);

/**
 * See rel attribute valid for <a> and <area> on
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
 */
var OdsHTMLAnchorElementRel;
(function (OdsHTMLAnchorElementRel) {
    OdsHTMLAnchorElementRel["alternate"] = "alternate";
    OdsHTMLAnchorElementRel["author"] = "author";
    OdsHTMLAnchorElementRel["bookmark"] = "bookmark";
    OdsHTMLAnchorElementRel["external"] = "external";
    OdsHTMLAnchorElementRel["help"] = "help";
    OdsHTMLAnchorElementRel["license"] = "license";
    OdsHTMLAnchorElementRel["me"] = "me";
    OdsHTMLAnchorElementRel["next"] = "next";
    OdsHTMLAnchorElementRel["nofollow"] = "nofollow";
    OdsHTMLAnchorElementRel["noopener"] = "noopener";
    OdsHTMLAnchorElementRel["noreferrer"] = "noreferrer";
    OdsHTMLAnchorElementRel["opener"] = "opener";
    OdsHTMLAnchorElementRel["prev"] = "prev";
    OdsHTMLAnchorElementRel["search"] = "search";
    OdsHTMLAnchorElementRel["tag"] = "tag";
})(OdsHTMLAnchorElementRel || (OdsHTMLAnchorElementRel = {}));
Object.keys(OdsHTMLAnchorElementRel).map(key => OdsHTMLAnchorElementRel[key]);

/**
 * See target attribute on
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
 */
var OdsHTMLAnchorElementTarget;
(function (OdsHTMLAnchorElementTarget) {
    OdsHTMLAnchorElementTarget["_blank"] = "_blank";
    OdsHTMLAnchorElementTarget["_self"] = "_self";
    OdsHTMLAnchorElementTarget["_parent"] = "_parent";
    OdsHTMLAnchorElementTarget["_top"] = "_top";
})(OdsHTMLAnchorElementTarget || (OdsHTMLAnchorElementTarget = {}));
Object.keys(OdsHTMLAnchorElementTarget).map(key => OdsHTMLAnchorElementTarget[key]);

/**
 * common controller logic for icon component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsIconController {
  constructor(component) {
    this.logger = new OdsLogger('OdsIconLogger');
    this.component = component;
  }
  validateAriaName(ariaName) {
    if (!ariaName) {
      this.logger.warn('The aria-name attribute must have a value');
    }
  }
  /**
   * validating that the color and the size have correct values
   * and warn the user if not
   */
  validateAttributes() {
    const logger = this.logger;
    OdsWarnComponentAttribute({
      logger,
      attributeValues: OdsThemeColorIntent,
      attributeName: 'color',
      attribute: this.component.color
    });
    OdsWarnComponentAttribute({
      logger,
      attributeValues: ODS_ICON_SIZE,
      attributeName: 'size',
      attribute: this.component.size
    });
  }
}

const osdsIconCss = ":host{display:inline-block;vertical-align:var(--ods-icon-vertical-align);-webkit-mask:center/contain no-repeat;mask:center/contain no-repeat;-webkit-mask-image:var(--icon-mask-image, url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'/%3E\"));mask-image:var(--icon-mask-image, url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'/%3E\"))}:host(:not([color])){background-color:var(--ods-color-default-500)}:host([color^=default]){background-color:var(--ods-color-default-500)}:host([color^=primary]){background-color:var(--ods-color-primary-500)}:host([color^=text]){background-color:var(--ods-color-text-500)}:host([color^=accent]){background-color:var(--ods-color-accent-500)}:host([color^=error]){background-color:var(--ods-color-error-500)}:host([color^=warning]){background-color:var(--ods-color-warning-500)}:host([color^=success]){background-color:var(--ods-color-success-500)}:host([color^=info]){background-color:var(--ods-color-info-500)}:host([color^=promotion]){background-color:var(--ods-color-promotion-500)}:host([contrasted]:not([color])){background-color:var(--ods-color-default-500-contrasted)}:host([contrasted][color^=default]){background-color:var(--ods-color-default-500-contrasted)}:host([contrasted][color^=primary]){background-color:var(--ods-color-primary-500-contrasted)}:host([contrasted][color^=text]){background-color:var(--ods-color-text-500-contrasted)}:host([contrasted][color^=accent]){background-color:var(--ods-color-accent-500-contrasted)}:host([contrasted][color^=error]){background-color:var(--ods-color-error-500-contrasted)}:host([contrasted][color^=warning]){background-color:var(--ods-color-warning-500-contrasted)}:host([contrasted][color^=success]){background-color:var(--ods-color-success-500-contrasted)}:host([contrasted][color^=info]){background-color:var(--ods-color-info-500-contrasted)}:host([contrasted][color^=promotion]){background-color:var(--ods-color-promotion-500-contrasted)}:host(:host([hoverable][color=default])){background-color:currentColor}:host(:host(:host([hoverable]:not([color=default])):not([color]):hover)){background-color:var(--ods-color-default-700)}:host(:host(:host([hoverable]:not([color=default]))[color^=default]:hover)){background-color:var(--ods-color-default-700)}:host(:host(:host([hoverable]:not([color=default]))[color^=primary]:hover)){background-color:var(--ods-color-primary-700)}:host(:host(:host([hoverable]:not([color=default]))[color^=text]:hover)){background-color:var(--ods-color-text-700)}:host(:host(:host([hoverable]:not([color=default]))[color^=accent]:hover)){background-color:var(--ods-color-accent-700)}:host(:host(:host([hoverable]:not([color=default]))[color^=error]:hover)){background-color:var(--ods-color-error-700)}:host(:host(:host([hoverable]:not([color=default]))[color^=warning]:hover)){background-color:var(--ods-color-warning-700)}:host(:host(:host([hoverable]:not([color=default]))[color^=success]:hover)){background-color:var(--ods-color-success-700)}:host(:host(:host([hoverable]:not([color=default]))[color^=info]:hover)){background-color:var(--ods-color-info-700)}:host(:host(:host([hoverable]:not([color=default]))[color^=promotion]:hover)){background-color:var(--ods-color-promotion-700)}:host([size=xxs]){height:var(--ods-size-icon-xxs-height);width:var(--ods-size-icon-xxs-width)}:host([size=xs]){height:var(--ods-size-icon-xs-height);width:var(--ods-size-icon-xs-width)}:host([size=sm]){height:var(--ods-size-icon-sm-height);width:var(--ods-size-icon-sm-width)}:host([size=md]){height:var(--ods-size-icon-md-height);width:var(--ods-size-icon-md-width)}:host([size=lg]){height:var(--ods-size-icon-lg-height);width:var(--ods-size-icon-lg-width)}:host([size=xl]){height:var(--ods-size-icon-xl-height);width:var(--ods-size-icon-xl-width)}";

const OsdsIcon$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.controller = new OdsIconController(this);
    /** @see OdsIconAttributes.ariaName */
    this.ariaName = DEFAULT_ATTRIBUTE$1.ariaName;
    /** @see OdsIconAttributes.color */
    this.color = DEFAULT_ATTRIBUTE$1.color;
    /** @see OdsIconAttributes.contrasted */
    this.contrasted = DEFAULT_ATTRIBUTE$1.contrasted;
    /** @see OdsIconAttributes.hoverable */
    this.hoverable = DEFAULT_ATTRIBUTE$1.hoverable;
    /** @see OdsIconAttributes.name */
    this.name = DEFAULT_ATTRIBUTE$1.name;
    /** @see OdsIconAttributes.size */
    this.size = DEFAULT_ATTRIBUTE$1.size;
  }
  validateAriaName(ariaName) {
    this.controller.validateAriaName(ariaName);
  }
  /**
   * @see OdsIconBehavior.beforeRender
   */
  beforeRender() {
    this.controller.validateAttributes();
  }
  componentWillRender() {
    this.beforeRender();
  }
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const base64Icon = icons[this.name];
    return (h(Host, Object.assign({}, {
      'aria-hidden': true,
      'alt': this.ariaName,
      'style': Object.assign({ '--test': this.name }, (base64Icon ? { '--icon-mask-image': `url("${base64Icon}")` } : {}))
    })));
  }
  get el() { return this; }
  static get watchers() { return {
    "ariaName": ["validateAriaName"]
  }; }
  static get style() { return osdsIconCss; }
};

class OdsCheckboxButtonController {
  computeIconName(checked = false, indeterminate = false) {
    if (indeterminate) {
      return ODS_ICON_NAME.MINUS;
    }
    else if (checked) {
      return ODS_ICON_NAME.OK;
    }
    return undefined;
  }
}

var OdsCheckboxButtonSize;
(function (OdsCheckboxButtonSize) {
  OdsCheckboxButtonSize["sm"] = "sm";
  OdsCheckboxButtonSize["md"] = "md";
})(OdsCheckboxButtonSize || (OdsCheckboxButtonSize = {}));
const OdsCheckboxButtonSizes = Object.freeze(Object.values(OdsCheckboxButtonSize));

const DEFAULT_ATTRIBUTE = Object.freeze({
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  hasFocus: false,
  indeterminate: false,
  interactive: false,
  size: OdsCheckboxButtonSize.md,
});

const osdsCheckboxButtonCss = ":host{align-items:center;display:grid;grid-template-columns:auto 1fr auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;cursor:pointer}:host .checkbox-button{border-radius:var(--ods-size-border-radius-02);border-style:solid;position:relative;text-align:center;vertical-align:middle}:host .checkbox-button osds-icon{display:none;position:absolute}:host(:is([checked],[indeterminate])) .checkbox-button osds-icon{display:block}:host([disabled]){opacity:0.5;cursor:not-allowed}slot{display:block}:host .checkbox-button{outline:none}:host(:not([color])) .checkbox-button{border-color:var(--ods-color-default-500)}:host(:not([color]):not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-default-100)}:host(:not([color]):not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-default-200)}:host([color^=default]) .checkbox-button{border-color:var(--ods-color-default-500)}:host([color^=default]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-default-100)}:host([color^=default]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-default-200)}:host([color^=primary]) .checkbox-button{border-color:var(--ods-color-primary-500)}:host([color^=primary]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-primary-100)}:host([color^=primary]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-primary-200)}:host([color^=text]) .checkbox-button{border-color:var(--ods-color-text-500)}:host([color^=text]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-text-100)}:host([color^=text]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-text-200)}:host([color^=accent]) .checkbox-button{border-color:var(--ods-color-accent-500)}:host([color^=accent]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-accent-100)}:host([color^=accent]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-accent-200)}:host([color^=error]) .checkbox-button{border-color:var(--ods-color-error-500)}:host([color^=error]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-error-100)}:host([color^=error]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-error-200)}:host([color^=warning]) .checkbox-button{border-color:var(--ods-color-warning-500)}:host([color^=warning]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-warning-100)}:host([color^=warning]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-warning-200)}:host([color^=success]) .checkbox-button{border-color:var(--ods-color-success-500)}:host([color^=success]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-success-100)}:host([color^=success]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-success-200)}:host([color^=info]) .checkbox-button{border-color:var(--ods-color-info-500)}:host([color^=info]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-info-100)}:host([color^=info]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-info-200)}:host([color^=promotion]) .checkbox-button{border-color:var(--ods-color-promotion-500)}:host([color^=promotion]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-promotion-100)}:host([color^=promotion]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-promotion-200)}:host([size=md]) .checkbox-button{border-width:var(--ods-size-checkbox-button-md-border-width);height:var(--ods-size-checkbox-button-md-height);margin:var(--ods-size-checkbox-button-md-margin);width:var(--ods-size-checkbox-button-md-width);aspect-ratio:1/1}:host([size=sm]) .checkbox-button{border-width:var(--ods-size-checkbox-button-sm-border-width);height:var(--ods-size-checkbox-button-sm-height);margin:var(--ods-size-checkbox-button-sm-margin);width:var(--ods-size-checkbox-button-sm-width);aspect-ratio:1/1}:host([size=sm]) slot{font-family:var(--ods-typography-body-600-font-family);font-size:var(--ods-typography-body-600-font-size);font-style:var(--ods-typography-body-600-font-style);font-weight:var(--ods-typography-body-600-font-weight);letter-spacing:var(--ods-typography-body-600-letter-spacing);line-height:var(--ods-typography-body-600-line-height)}:host([size=md]) slot{font-family:var(--ods-typography-body-600-font-family);font-size:var(--ods-typography-body-600-font-size);font-style:var(--ods-typography-body-600-font-style);font-weight:var(--ods-typography-body-600-font-weight);letter-spacing:var(--ods-typography-body-600-letter-spacing);line-height:var(--ods-typography-body-600-line-height)}";

const OsdsCheckboxButton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.controller = new OdsCheckboxButtonController();
    /** @see OdsCheckboxButtonAttribute.checked */
    this.checked = DEFAULT_ATTRIBUTE.checked;
    /** @see OdsCheckboxButtonAttribute.checking */
    this.checking = DEFAULT_ATTRIBUTE.checking;
    /** @see OdsCheckboxButtonAttribute.color */
    this.color = DEFAULT_ATTRIBUTE.color;
    /** @see OdsCheckboxButtonAttribute.disabled */
    this.disabled = DEFAULT_ATTRIBUTE.disabled;
    /** @see OdsCheckboxButtonAttribute.hasFocus */
    this.hasFocus = DEFAULT_ATTRIBUTE.hasFocus;
    /** @see OdsCheckboxButtonAttribute.indeterminate */
    this.indeterminate = DEFAULT_ATTRIBUTE.indeterminate;
    /** @see OdsCheckboxButtonAttribute.interactive */
    this.interactive = DEFAULT_ATTRIBUTE.interactive;
    /** @see OdsCheckboxButtonAttribute.label */
    this.size = DEFAULT_ATTRIBUTE.size;
  }
  render() {
    const { checked, color, indeterminate, size, } = this;
    const iconName = this.controller.computeIconName(checked, indeterminate);
    let iconSize;
    // make corresponding between button size and icon size
    switch (size) {
      case OdsCheckboxButtonSize.sm:
        iconSize = ODS_ICON_SIZE.sm;
        break;
      case OdsCheckboxButtonSize.md:
        iconSize = ODS_ICON_SIZE.md;
        break;
      default:
        iconSize = ODS_ICON_SIZE.sm;
        break;
    }
    return (h(Host, null, h("slot", { name: 'start' }), h("div", Object.assign({ class: 'checkbox-button' }, {
      ref: (el) => this.mainEl = el,
    }), h("osds-icon", { color: color, name: iconName, size: iconSize })), h("slot", { name: 'end' })));
  }
  get el() { return this; }
  static get style() { return osdsCheckboxButtonCss; }
};

const OsdsCheckboxButton = /*@__PURE__*/proxyCustomElement(OsdsCheckboxButton$1, [1,"osds-checkbox-button",{"checked":[516],"checking":[516],"color":[513],"disabled":[516],"hasFocus":[516,"has-focus"],"indeterminate":[516],"interactive":[516],"size":[513]}]);
const OsdsIcon = /*@__PURE__*/proxyCustomElement(OsdsIcon$1, [1,"osds-icon",{"ariaName":[513,"aria-name"],"color":[513],"contrasted":[516],"hoverable":[516],"name":[513],"size":[513]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      OsdsCheckboxButton,
  OsdsIcon
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { OdsCheckboxButtonSize, OdsCheckboxButtonSizes, OsdsCheckboxButton, OsdsIcon, defineCustomElements };
