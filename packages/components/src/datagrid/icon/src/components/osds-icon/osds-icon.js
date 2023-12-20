import icons from "@ovhcloud/ods-common-theming/icons/icons.data.json";
import { Host, h } from "@stencil/core";
import { DEFAULT_ATTRIBUTE } from "./constants/default-attributes";
import { OdsIconController } from "./core/controller";
export class OsdsIcon {
  constructor() {
    this.controller = new OdsIconController(this);
    this.ariaName = DEFAULT_ATTRIBUTE.ariaName;
    this.color = DEFAULT_ATTRIBUTE.color;
    this.contrasted = DEFAULT_ATTRIBUTE.contrasted;
    this.hoverable = DEFAULT_ATTRIBUTE.hoverable;
    this.name = DEFAULT_ATTRIBUTE.name;
    this.size = DEFAULT_ATTRIBUTE.size;
  }
  validateAriaName(ariaName) {
    this.controller.validateAriaName(ariaName);
  }
  beforeRender() {
    this.controller.validateAttributes();
  }
  componentWillRender() {
    this.beforeRender();
  }
  render() {
    var _a, _b;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const base64Icon = icons[this.name];
    return (h(Host, { class: {
        'ods-icon': true,
        'ods-icon--contrasted': (_a = this.contrasted) !== null && _a !== void 0 ? _a : false,
        'ods-icon--hoverable': (_b = this.hoverable) !== null && _b !== void 0 ? _b : false,
      }, "aria-hidden": true, alt: this.ariaName, style: (base64Icon ? { '--icon-mask-image': `url("${base64Icon}")` } : {}) }));
  }
  static get is() { return "osds-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["osds-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["osds-icon.css"]
    };
  }
  static get properties() {
    return {
      "ariaName": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Icon ARIA name"
        },
        "attribute": "aria-name",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.ariaName"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ODS_THEME_COLOR_INTENT",
          "resolved": "ODS_THEME_COLOR_INTENT.accent | ODS_THEME_COLOR_INTENT.default | ODS_THEME_COLOR_INTENT.error | ODS_THEME_COLOR_INTENT.info | ODS_THEME_COLOR_INTENT.primary | ODS_THEME_COLOR_INTENT.promotion | ODS_THEME_COLOR_INTENT.success | ODS_THEME_COLOR_INTENT.text | ODS_THEME_COLOR_INTENT.warning | undefined",
          "references": {
            "ODS_THEME_COLOR_INTENT": {
              "location": "import",
              "path": "@ovhcloud/ods-common-theming",
              "id": "../../../common/theming/dist/cjs/index.d.ts::ODS_THEME_COLOR_INTENT"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon color theme"
        },
        "attribute": "color",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.color"
      },
      "contrasted": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon if contrasted or not"
        },
        "attribute": "contrasted",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.contrasted"
      },
      "hoverable": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon if hoverabled or not"
        },
        "attribute": "hoverable",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.hoverable"
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ODS_ICON_NAME",
          "resolved": "ODS_ICON_NAME | undefined",
          "references": {
            "ODS_ICON_NAME": {
              "location": "import",
              "path": "./constants/icon-name",
              "id": "../icon/src/components/osds-icon/constants/icon-name.ts::ODS_ICON_NAME"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon name"
        },
        "attribute": "name",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.name"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ODS_ICON_SIZE",
          "resolved": "ODS_ICON_SIZE.lg | ODS_ICON_SIZE.md | ODS_ICON_SIZE.sm | ODS_ICON_SIZE.xl | ODS_ICON_SIZE.xs | ODS_ICON_SIZE.xxs | undefined",
          "references": {
            "ODS_ICON_SIZE": {
              "location": "import",
              "path": "./constants/icon-size",
              "id": "../icon/src/components/osds-icon/constants/icon-size.ts::ODS_ICON_SIZE"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Icon size"
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.size"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "ariaName",
        "methodName": "validateAriaName"
      }];
  }
}
