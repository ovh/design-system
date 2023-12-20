import { Host, h } from "@stencil/core";
import { DEFAULT_ATTRIBUTE } from "./constants/default-attributes";
import { OdsButtonController } from "./core/controller";
/**
 * @slot start - Fixed start button content
 * @slot (unnamed) - Button content
 * @slot end - Fixed end button content
 */
export class OsdsButton {
  constructor() {
    this.controller = new OdsButtonController(this);
    this.color = DEFAULT_ATTRIBUTE.color;
    this.contrasted = DEFAULT_ATTRIBUTE.contrasted;
    this.disabled = DEFAULT_ATTRIBUTE.disabled;
    this.download = DEFAULT_ATTRIBUTE.download;
    this.inline = DEFAULT_ATTRIBUTE.inline;
    this.href = undefined;
    this.rel = DEFAULT_ATTRIBUTE.rel;
    this.size = DEFAULT_ATTRIBUTE.size;
    this.target = DEFAULT_ATTRIBUTE.target;
    this.type = DEFAULT_ATTRIBUTE.type;
    this.variant = DEFAULT_ATTRIBUTE.variant;
    this.textAlign = DEFAULT_ATTRIBUTE.textAlign;
    this.circle = DEFAULT_ATTRIBUTE.circle;
  }
  handleKey(event) {
    this.controller.handleKey(event);
  }
  handleClick(event) {
    this.controller.handleClick(event);
  }
  /** @see OdsButtonBehavior.beforeRender */
  beforeRender() {
    this.controller.validateAttributes();
    this.controller.mutateAttributes();
  }
  componentWillRender() {
    this.beforeRender();
  }
  render() {
    const content = (h("span", { class: 'button__text-container' }, h("slot", { name: 'start' }), h("span", null, h("slot", null)), h("slot", { name: 'end' })));
    let template;
    if (this.href) {
      template = (h("a", { class: 'button',
        href: this.href,
        part: 'button',
        role: 'link',
        tabindex: -1,
        target: this.target,
        rel: this.rel,
        download: this.download,
        textAlign: this.textAlign }, content));
    }
    else {
      template = (h("button", { class: 'button',
        type: this.type,
        disabled: this.disabled,
        part: 'button',
        role: 'button',
        tabindex: -1 }, content));
    }
    return (h(Host, { tabindex: this.disabled ? -1 : 0 }, template));
  }
  static get is() { return "osds-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["osds-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["osds-button.css"]
    };
  }
  static get properties() {
    return {
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
              "text": "OdsButtonAttributes.color"
            }],
          "text": "main color: see component principles"
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
              "text": "OdsButtonAttributes.contrasted"
            }],
          "text": "contrasted or not: see component principles"
        },
        "attribute": "contrasted",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.contrasted"
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
              "text": "OdsButtonAttributes.disabled"
            }],
          "text": "disabled or not: see component principles"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.disabled"
      },
      "download": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "HTMLAnchorElement['download']",
          "resolved": "string | undefined",
          "references": {
            "HTMLAnchorElement": {
              "location": "global",
              "id": "global::HTMLAnchorElement"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsButtonAttributes.rel"
            }],
          "text": "Button with href as download source"
        },
        "attribute": "download",
        "reflect": false,
        "defaultValue": "DEFAULT_ATTRIBUTE.download"
      },
      "inline": {
        "type": "boolean",
        "mutable": true,
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
              "text": "OdsButtonAttributes.inline"
            }],
          "text": "inline or not: see component principles"
        },
        "attribute": "inline",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.inline"
      },
      "href": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsButtonAttributes.href"
            }],
          "text": "use a button as a link with `<a>` element"
        },
        "attribute": "href",
        "reflect": true
      },
      "rel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "OdsHTMLAnchorElementRel",
          "resolved": "OdsHTMLAnchorElementRel.alternate | OdsHTMLAnchorElementRel.author | OdsHTMLAnchorElementRel.bookmark | OdsHTMLAnchorElementRel.external | OdsHTMLAnchorElementRel.help | OdsHTMLAnchorElementRel.license | OdsHTMLAnchorElementRel.me | OdsHTMLAnchorElementRel.next | OdsHTMLAnchorElementRel.nofollow | OdsHTMLAnchorElementRel.noopener | OdsHTMLAnchorElementRel.noreferrer | OdsHTMLAnchorElementRel.opener | OdsHTMLAnchorElementRel.prev | OdsHTMLAnchorElementRel.search | OdsHTMLAnchorElementRel.tag | undefined",
          "references": {
            "OdsHTMLAnchorElementRel": {
              "location": "import",
              "path": "@ovhcloud/ods-common-core",
              "id": "../../../common/core/dist/cjs/index.d.ts::OdsHTMLAnchorElementRel"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsButtonAttributes.rel"
            }],
          "text": "Button with href relationship"
        },
        "attribute": "rel",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.rel"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ODS_BUTTON_SIZE",
          "resolved": "ODS_BUTTON_SIZE.md | ODS_BUTTON_SIZE.sm | undefined",
          "references": {
            "ODS_BUTTON_SIZE": {
              "location": "import",
              "path": "./constants/button-size",
              "id": "../button/src/components/osds-button/constants/button-size.ts::ODS_BUTTON_SIZE"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsButtonAttributes.size"
            }],
          "text": "size: see component principles"
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.size"
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "OdsHTMLAnchorElementTarget",
          "resolved": "OdsHTMLAnchorElementTarget._blank | OdsHTMLAnchorElementTarget._parent | OdsHTMLAnchorElementTarget._self | OdsHTMLAnchorElementTarget._top | undefined",
          "references": {
            "OdsHTMLAnchorElementTarget": {
              "location": "import",
              "path": "@ovhcloud/ods-common-core",
              "id": "../../../common/core/dist/cjs/index.d.ts::OdsHTMLAnchorElementTarget"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsButtonAttributes.target"
            }],
          "text": "link target if we are in a link-mode (using `href` attribute)"
        },
        "attribute": "target",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.target"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ODS_BUTTON_TYPE",
          "resolved": "ODS_BUTTON_TYPE.button | ODS_BUTTON_TYPE.reset | ODS_BUTTON_TYPE.submit | undefined",
          "references": {
            "ODS_BUTTON_TYPE": {
              "location": "import",
              "path": "./constants/button-type",
              "id": "../button/src/components/osds-button/constants/button-type.ts::ODS_BUTTON_TYPE"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsButtonAttributes.type"
            }],
          "text": ""
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.type"
      },
      "variant": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "ODS_BUTTON_VARIANT",
          "resolved": "ODS_BUTTON_VARIANT.flat | ODS_BUTTON_VARIANT.ghost | ODS_BUTTON_VARIANT.stroked | undefined",
          "references": {
            "ODS_BUTTON_VARIANT": {
              "location": "import",
              "path": "./constants/button-variant",
              "id": "../button/src/components/osds-button/constants/button-variant.ts::ODS_BUTTON_VARIANT"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsButtonAttributes.variant"
            }],
          "text": "used design aspect"
        },
        "attribute": "variant",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.variant"
      },
      "textAlign": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "ODS_BUTTON_TEXT_ALIGN",
          "resolved": "ODS_BUTTON_TEXT_ALIGN.center | ODS_BUTTON_TEXT_ALIGN.end | ODS_BUTTON_TEXT_ALIGN.start | undefined",
          "references": {
            "ODS_BUTTON_TEXT_ALIGN": {
              "location": "import",
              "path": "./constants/button-text-align",
              "id": "../button/src/components/osds-button/constants/button-text-align.ts::ODS_BUTTON_TEXT_ALIGN"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsButtonAttributes.textAlign"
            }],
          "text": "type of the vanilla button"
        },
        "attribute": "text-align",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.textAlign"
      },
      "circle": {
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
              "text": "OdsButtonAttributes.circle"
            }],
          "text": "use a circle shape"
        },
        "attribute": "circle",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.circle"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "keyup",
        "method": "handleKey",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "click",
        "method": "handleClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
