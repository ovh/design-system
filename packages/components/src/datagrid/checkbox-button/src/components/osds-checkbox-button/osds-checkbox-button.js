import { ODS_ICON_SIZE } from "../../../../icon/src";
import { Host, h } from "@stencil/core";
import { DEFAULT_ATTRIBUTE } from "./constants/default-attributes";
import { ODS_CHECKBOX_BUTTON_SIZE } from "./constants/ods-checkbox-button-size";
import { OdsCheckboxButtonController } from "./core/ods-checkbox-button-controller";
/**
 * @slot start - Fixed start checkbox button content
 * @slot end - Fixed end checkbox button content
 */
export class OsdsCheckboxButton {
  constructor() {
    this.controller = new OdsCheckboxButtonController();
    this.checked = DEFAULT_ATTRIBUTE.checked;
    this.checking = DEFAULT_ATTRIBUTE.checking;
    this.color = DEFAULT_ATTRIBUTE.color;
    this.disabled = DEFAULT_ATTRIBUTE.disabled;
    this.hasFocus = DEFAULT_ATTRIBUTE.hasFocus;
    this.indeterminate = DEFAULT_ATTRIBUTE.indeterminate;
    this.interactive = DEFAULT_ATTRIBUTE.interactive;
    this.size = DEFAULT_ATTRIBUTE.size;
  }
  render() {
    const { checked, color, indeterminate, size, } = this;
    const iconName = this.controller.computeIconName(checked, indeterminate);
    let iconSize;
    // make corresponding between button size and icon size
    switch (size) {
      case ODS_CHECKBOX_BUTTON_SIZE.sm:
        iconSize = ODS_ICON_SIZE.sm;
        break;
      case ODS_CHECKBOX_BUTTON_SIZE.md:
        iconSize = ODS_ICON_SIZE.md;
        break;
      default:
        iconSize = ODS_ICON_SIZE.sm;
        break;
    }
    return (h(Host, null, h("slot", { name: 'start' }), h("div", { class: 'checkbox-button', ref: (el) => this.mainEl = el }, h("osds-icon", { color: color, name: iconName, size: iconSize })), h("slot", { name: 'end' })));
  }
  static get is() { return "osds-checkbox-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["osds-checkbox-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["osds-checkbox-button.css"]
    };
  }
  static get properties() {
    return {
      "checked": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean | undefined",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxButtonAttribute.checked"
            }],
          "text": "The checked status of the checkbox button"
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.checked"
      },
      "checking": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean | undefined",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxButtonAttribute.checking"
            }],
          "text": ""
        },
        "attribute": "checking",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.checking"
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
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxButtonAttribute.color"
            }],
          "text": "The color theme"
        },
        "attribute": "color",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.color"
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean | undefined",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxButtonAttribute.disabled"
            }],
          "text": "Prevent the user from clicking on the radio button"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.disabled"
      },
      "hasFocus": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean | undefined",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxButtonAttribute.hasFocus"
            }],
          "text": "Display a focus style (only if interactive)"
        },
        "attribute": "has-focus",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.hasFocus"
      },
      "indeterminate": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean | undefined",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxButtonAttribute.indeterminate"
            }],
          "text": "The indeterminate status of the checkbox button (override checked status)"
        },
        "attribute": "indeterminate",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.indeterminate"
      },
      "interactive": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean | undefined",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxButtonAttribute.interactive"
            }],
          "text": "Display an interactive style when clicking or hovering the radio button"
        },
        "attribute": "interactive",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.interactive"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ODS_CHECKBOX_BUTTON_SIZE",
          "resolved": "ODS_CHECKBOX_BUTTON_SIZE.md | ODS_CHECKBOX_BUTTON_SIZE.sm | undefined",
          "references": {
            "ODS_CHECKBOX_BUTTON_SIZE": {
              "location": "import",
              "path": "./constants/ods-checkbox-button-size",
              "id": "../checkbox-button/src/components/osds-checkbox-button/constants/ods-checkbox-button-size.ts::ODS_CHECKBOX_BUTTON_SIZE"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxButtonAttribute.label"
            }],
          "text": "Size of the radio button"
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.size"
      }
    };
  }
  static get elementRef() { return "el"; }
}
