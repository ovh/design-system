import { OdsLogger } from "@ovhcloud/ods-common-core";
import { Host, h } from "@stencil/core";
import { DEFAULT_ATTRIBUTE } from "./constants/default-attributes";
import { OdsCheckboxController } from "./core/ods-checkbox-controller";
export class OsdsCheckbox {
  constructor() {
    /** @see OdsComponent.controller */
    this.controller = new OdsCheckboxController(this);
    this.inputId = `ods-checkbox-${OsdsCheckbox.checkboxIds++}`;
    this.logger = new OdsLogger('OsdsCheckbox');
    this.checkboxableComponent = null;
    this.tabindex = 0;
    this.afterSave = DEFAULT_ATTRIBUTE.afterSave;
    this.ariaLabel = DEFAULT_ATTRIBUTE.ariaLabel;
    this.ariaLabelledby = DEFAULT_ATTRIBUTE.ariaLabelledby;
    this.beforeSave = DEFAULT_ATTRIBUTE.beforeSave;
    this.checked = DEFAULT_ATTRIBUTE.checked;
    this.disabled = DEFAULT_ATTRIBUTE.disabled;
    this.hasFocus = DEFAULT_ATTRIBUTE.hasFocus;
    this.label = undefined;
    this.name = DEFAULT_ATTRIBUTE.name;
    this.save = DEFAULT_ATTRIBUTE.save;
    this.updating = DEFAULT_ATTRIBUTE.updating;
    this.value = DEFAULT_ATTRIBUTE.value;
  }
  afterInit() {
    this.controller.afterInit();
  }
  componentDidLoad() {
    (async () => {
      this.checkboxableComponent = this.hostElement.firstElementChild;
      this.afterInit();
    })();
  }
  emitBlur() {
    this.odsBlur.emit({ value: this.value, focus: false });
  }
  emitChecked() {
    this.logger.log(`[checkbox=${this.inputId}]`, 'emit checked', { checked: this.checked });
    this.odsCheckedChange.emit({ checked: this.checked, value: this.value });
  }
  emitFocus() {
    this.odsFocus.emit({ value: this.value, focus: true });
  }
  emitUpdating() {
    this.logger.log(`[checkbox=${this.inputId}]`, 'emit updating', { updating: this.updating });
    this.odsUpdatingChange.emit({ updating: this.updating, value: this.value });
  }
  getTabIndex() {
    return this.controller.getTabIndex();
  }
  /**
   * @param event - event from mouse
   */
  async handleToggleByClick(event) {
    this.logger.log(`[checkbox=${this.inputId}]`, 'click');
    await this.controller.handleToggleByClick(event);
  }
  /**
   * using `keydown` instead of `keypress` (deprecated)
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event
   * @param event - event from keyboard
   */
  async handleToggleByKeyEvent(event) {
    this.logger.log(`[checkbox=${this.inputId}]`, 'key event', { event });
    await this.controller.handleToggleByKeyEvent(event);
  }
  onBlur() {
    this.controller.onBlur();
  }
  onFocus() {
    this.controller.onFocus();
  }
  propagateCheckedToChild(checked) {
    this.controller.propagateCheckedToChild(checked);
  }
  propagateDisabledToChild(disabled) {
    this.controller.propagateDisabledToChild(disabled);
  }
  propagateHasFocusToChild(hasFocus) {
    this.controller.propagateHasFocusToChild(hasFocus);
  }
  /**
   * @see OdsCheckboxMethod.setFocus
   */
  async setFocus() {
    this.controller.setFocus();
  }
  /**
   * @see OdsCheckboxMethod.setTabindex
   */
  async setTabindex(index) {
    this.controller.setTabindex(index);
  }
  render() {
    const { checked, disabled, inputId, name } = this;
    const { label, ariaLabelledby } = this;
    return (h(Host, { 'aria-labelledby': label ? ariaLabelledby : null,
      tabindex: this.getTabIndex(), role: "checkbox", "aria-checked": `${checked}` }, h("label", null, h("input", { 'aria-checked': `${checked}`,
      class: 'checkbox__input',
      checked,
      disabled,
      id: inputId,
      name,
      tabindex: '-1',
      type: 'checkbox',
      ref: (el) => this.inputEl = el }), h("slot", { "aria-hidden": "true" }))));
  }
  static get is() { return "osds-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["osds-checkbox.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["osds-checkbox.css"]
    };
  }
  static get properties() {
    return {
      "afterSave": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "OdsCheckboxAttributeCbk",
          "resolved": "(({ checked, value }: { checked: boolean; value: string; }) => Promise<void>) | undefined",
          "references": {
            "OdsCheckboxAttributeCbk": {
              "location": "import",
              "path": "./interfaces/attributes",
              "id": "../checkbox/src/components/osds-checkbox/interfaces/attributes.ts::OdsCheckboxAttributeCbk"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxAttribute.afterSave"
            }],
          "text": "afterSave input allows to set a function that returns a promise.\nIt is called after each time an update was performed and allowing to manage pessimistic update strategy"
        },
        "defaultValue": "DEFAULT_ATTRIBUTE.afterSave"
      },
      "ariaLabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | null",
          "resolved": "null | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxAttribute.ariaLabel"
            }],
          "text": "The corresponding aria-label describing its content"
        },
        "attribute": "aria-label",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.ariaLabel"
      },
      "ariaLabelledby": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxAttribute.ariaLabelledby"
            }],
          "text": "The id to an external description"
        },
        "attribute": "aria-labelledby",
        "reflect": false,
        "defaultValue": "DEFAULT_ATTRIBUTE.ariaLabelledby"
      },
      "beforeSave": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "OdsCheckboxAttributeCbk",
          "resolved": "(({ checked, value }: { checked: boolean; value: string; }) => Promise<void>) | undefined",
          "references": {
            "OdsCheckboxAttributeCbk": {
              "location": "import",
              "path": "./interfaces/attributes",
              "id": "../checkbox/src/components/osds-checkbox/interfaces/attributes.ts::OdsCheckboxAttributeCbk"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxAttribute.beforeSave"
            }],
          "text": "beforeSave input allows to set a function that returns a promise.\nIt is called before each time an update will be performed and allowing to manage pessimistic update strategy"
        },
        "defaultValue": "DEFAULT_ATTRIBUTE.beforeSave"
      },
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxAttribute.checked"
            }],
          "text": "The checked status of the checkbox"
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.checked"
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxAttribute.disabled"
            }],
          "text": "indicate if the checkbox is entirely disabled.\nit means no interactions (hover, click, focus, etc)"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.disabled"
      },
      "hasFocus": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxAttribute.hasFocus"
            }],
          "text": "is the checkbox is currently focused"
        },
        "attribute": "has-focus",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.hasFocus"
      },
      "label": {
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
              "text": "OdsCheckboxAttribute.label"
            }],
          "text": "The corresponding label"
        },
        "attribute": "label",
        "reflect": false
      },
      "name": {
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
              "text": "OdsCheckboxAttribute.name"
            }],
          "text": "name used for the input element.\nuseful for browser and posting forms"
        },
        "attribute": "name",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.name"
      },
      "save": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "OdsCheckboxAttributeCbk",
          "resolved": "(({ checked, value }: { checked: boolean; value: string; }) => Promise<void>) | undefined",
          "references": {
            "OdsCheckboxAttributeCbk": {
              "location": "import",
              "path": "./interfaces/attributes",
              "id": "../checkbox/src/components/osds-checkbox/interfaces/attributes.ts::OdsCheckboxAttributeCbk"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxAttribute.save"
            }],
          "text": "save input allows to set a function that returns a promise.\nIt is called before each time an update is performed and allowing to manage pessimistic update strategy.\nthe checked state will be updated just after the call."
        },
        "defaultValue": "DEFAULT_ATTRIBUTE.save"
      },
      "updating": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxAttribute.updating"
            }],
          "text": "update status indicating if the checked state is being modified.\n`updating` will be `true` until `beforeSave` or `save` are processed.\nit is used in `pessimistic` update"
        },
        "attribute": "updating",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.updating"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxAttribute.value"
            }],
          "text": "Its corresponding value"
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.value"
      }
    };
  }
  static get states() {
    return {
      "tabindex": {}
    };
  }
  static get events() {
    return [{
        "method": "odsBlur",
        "name": "odsBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxEvent.odsBlur"
            }],
          "text": "Event triggered on checkbox blur"
        },
        "complexType": {
          "original": "OdsCheckboxFocusChangeEventDetail",
          "resolved": "OdsCheckboxFocusChangeEventDetail",
          "references": {
            "OdsCheckboxFocusChangeEventDetail": {
              "location": "import",
              "path": "./interfaces/events",
              "id": "../checkbox/src/components/osds-checkbox/interfaces/events.ts::OdsCheckboxFocusChangeEventDetail"
            }
          }
        }
      }, {
        "method": "odsCheckedChange",
        "name": "odsCheckedChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxEvent.odsCheckedChange"
            }],
          "text": "the checked state changed"
        },
        "complexType": {
          "original": "OdsCheckboxCheckedChangeEventDetail",
          "resolved": "OdsCheckboxCheckedChangeEventDetail",
          "references": {
            "OdsCheckboxCheckedChangeEventDetail": {
              "location": "import",
              "path": "./interfaces/events",
              "id": "../checkbox/src/components/osds-checkbox/interfaces/events.ts::OdsCheckboxCheckedChangeEventDetail"
            }
          }
        }
      }, {
        "method": "odsFocus",
        "name": "odsFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxEvent.odsFocus"
            }],
          "text": "Event triggered on checkbox focus"
        },
        "complexType": {
          "original": "OdsCheckboxFocusChangeEventDetail",
          "resolved": "OdsCheckboxFocusChangeEventDetail",
          "references": {
            "OdsCheckboxFocusChangeEventDetail": {
              "location": "import",
              "path": "./interfaces/events",
              "id": "../checkbox/src/components/osds-checkbox/interfaces/events.ts::OdsCheckboxFocusChangeEventDetail"
            }
          }
        }
      }, {
        "method": "odsUpdatingChange",
        "name": "odsUpdatingChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxEvent.odsUpdatingChange"
            }],
          "text": "the checked state is being changed"
        },
        "complexType": {
          "original": "OdsCheckboxUpdatingChangeEventDetail",
          "resolved": "OdsCheckboxUpdatingChangeEventDetail",
          "references": {
            "OdsCheckboxUpdatingChangeEventDetail": {
              "location": "import",
              "path": "./interfaces/events",
              "id": "../checkbox/src/components/osds-checkbox/interfaces/events.ts::OdsCheckboxUpdatingChangeEventDetail"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "setFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "programmatically set the focus on the checkbox.\nthis method has to call OdsCheckboxController.setFocus",
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxMethod.setFocus"
            }]
        }
      },
      "setTabindex": {
        "complexType": {
          "signature": "(index: number) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "set the tab index.\nthis method has to call OdsCheckboxController.setTabindex",
          "tags": [{
              "name": "see",
              "text": "OdsCheckboxMethod.setTabindex"
            }]
        }
      }
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "checked",
        "methodName": "propagateCheckedToChild"
      }, {
        "propName": "disabled",
        "methodName": "propagateDisabledToChild"
      }, {
        "propName": "hasFocus",
        "methodName": "propagateHasFocusToChild"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "handleToggleByClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "handleToggleByKeyEvent",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "blur",
        "method": "onBlur",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "focus",
        "method": "onFocus",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
OsdsCheckbox.checkboxIds = 0;
