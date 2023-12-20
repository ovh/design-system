import { odsGenerateColorVariable } from "@ovhcloud/ods-common-theming";
import { Host, h } from "@stencil/core";
import { DEFAULT_ATTRIBUTE } from "./constants/default-attributes";
/**
 * @slot (unnamed) - Text content
 */
export class OsdsText {
  constructor() {
    this.breakSpaces = DEFAULT_ATTRIBUTE.breakSpaces;
    this.color = DEFAULT_ATTRIBUTE.color;
    this.contrasted = DEFAULT_ATTRIBUTE.contrasted;
    this.size = DEFAULT_ATTRIBUTE.size;
    this.level = DEFAULT_ATTRIBUTE.level;
    this.hue = DEFAULT_ATTRIBUTE.hue;
  }
  render() {
    return (h(Host, { style: { '--osds-text-color-specific-hue': this.color && this.hue ? `var(${odsGenerateColorVariable(this.color, this.hue)})` : '' } }, h("slot", null)));
  }
  static get is() { return "osds-text"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["osds-text.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["osds-text.css"]
    };
  }
  static get properties() {
    return {
      "breakSpaces": {
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
              "text": "OdsTextAttribute.breakSpaces"
            }],
          "text": "If text handles break spaces or not"
        },
        "attribute": "break-spaces",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.breakSpaces"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ODS_TEXT_COLOR_INTENT",
          "resolved": "ODS_THEME_COLOR_INTENT.accent | ODS_THEME_COLOR_INTENT.default | ODS_THEME_COLOR_INTENT.error | ODS_THEME_COLOR_INTENT.info | ODS_THEME_COLOR_INTENT.primary | ODS_THEME_COLOR_INTENT.promotion | ODS_THEME_COLOR_INTENT.success | ODS_THEME_COLOR_INTENT.text | ODS_THEME_COLOR_INTENT.warning | undefined",
          "references": {
            "ODS_TEXT_COLOR_INTENT": {
              "location": "import",
              "path": "./constants/text-color",
              "id": "../text/src/components/osds-text/constants/text-color.ts::ODS_THEME_COLOR_INTENT"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsTextAttribute.color"
            }],
          "text": "Text contrasted theme"
        },
        "attribute": "color",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.color"
      },
      "contrasted": {
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
              "text": "OdsTextAttribute.contrasted"
            }],
          "text": "Text design as contrasted version"
        },
        "attribute": "contrasted",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.contrasted"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ODS_TEXT_SIZE",
          "resolved": "ODS_THEME_TYPOGRAPHY_SIZE._100 | ODS_THEME_TYPOGRAPHY_SIZE._200 | ODS_THEME_TYPOGRAPHY_SIZE._300 | ODS_THEME_TYPOGRAPHY_SIZE._400 | ODS_THEME_TYPOGRAPHY_SIZE._500 | ODS_THEME_TYPOGRAPHY_SIZE._600 | ODS_THEME_TYPOGRAPHY_SIZE._700 | ODS_THEME_TYPOGRAPHY_SIZE._800 | undefined",
          "references": {
            "ODS_TEXT_SIZE": {
              "location": "import",
              "path": "./constants/text-size",
              "id": "../text/src/components/osds-text/constants/text-size.ts::ODS_THEME_TYPOGRAPHY_SIZE"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsTextAttribute.size"
            }],
          "text": "Text size"
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.size"
      },
      "level": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ODS_TEXT_LEVEL",
          "resolved": "ODS_THEME_TYPOGRAPHY_LEVEL.body | ODS_THEME_TYPOGRAPHY_LEVEL.button | ODS_THEME_TYPOGRAPHY_LEVEL.caption | ODS_THEME_TYPOGRAPHY_LEVEL.heading | ODS_THEME_TYPOGRAPHY_LEVEL.subheading | undefined",
          "references": {
            "ODS_TEXT_LEVEL": {
              "location": "import",
              "path": "./constants/text-level",
              "id": "../text/src/components/osds-text/constants/text-level.ts::ODS_THEME_TYPOGRAPHY_LEVEL"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsTextAttribute.level"
            }],
          "text": "Text level"
        },
        "attribute": "level",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.level"
      },
      "hue": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ODS_TEXT_COLOR_HUE",
          "resolved": "ODS_THEME_COLOR_HUE._000 | ODS_THEME_COLOR_HUE._050 | ODS_THEME_COLOR_HUE._075 | ODS_THEME_COLOR_HUE._100 | ODS_THEME_COLOR_HUE._1000 | ODS_THEME_COLOR_HUE._200 | ODS_THEME_COLOR_HUE._300 | ODS_THEME_COLOR_HUE._400 | ODS_THEME_COLOR_HUE._500 | ODS_THEME_COLOR_HUE._600 | ODS_THEME_COLOR_HUE._700 | ODS_THEME_COLOR_HUE._800 | ODS_THEME_COLOR_HUE._900 | undefined",
          "references": {
            "ODS_TEXT_COLOR_HUE": {
              "location": "import",
              "path": "./constants/text-color",
              "id": "../text/src/components/osds-text/constants/text-color.ts::ODS_THEME_COLOR_HUE"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsTextAttribute.hue"
            }],
          "text": "Text hue"
        },
        "attribute": "hue",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.hue"
      }
    };
  }
}
