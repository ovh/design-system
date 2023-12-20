import { ocdkDefineCustomElements, ocdkIsSurface } from "@ovhcloud/ods-cdk";
import { Host, h } from "@stencil/core";
import { DEFAULT_ATTRIBUTE } from "./constants/default-attributes";
import { OdsMenuController } from "./core/controller";
ocdkDefineCustomElements();
export class OsdsMenu {
  constructor() {
    this.controller = new OdsMenuController(this);
    this.surface = undefined;
    this.disabled = DEFAULT_ATTRIBUTE.disabled;
  }
  get title() {
    return this.el.querySelector('[slot=menu-title]');
  }
  componentDidLoad() {
    this.setMenuItemsButtons();
    this.controller.afterInit();
  }
  propagateDisabledToChild(disabled) {
    this.controller.propagateDisabledToChild(disabled);
  }
  checkForClickOutside(event) {
    this.controller.checkForClickOutside(event);
  }
  getMenuItemButtonList() {
    return Array.from(this.el.querySelectorAll('osds-menu-item > osds-button'));
  }
  handleKeyDown(event) {
    event.stopPropagation();
    this.controller.handleKeyDown(event);
  }
  handleTriggerClick() {
    this.controller.handleTriggerClick();
  }
  setMenuItemsButtons() {
    this.controller.menuItems = this.getMenuItemButtonList();
  }
  syncReferences() {
    this.controller.syncReferences();
  }
  render() {
    return (h(Host, null, h("div", { class: "trigger", onClick: this.handleTriggerClick.bind(this), onKeyDown: this.handleKeyDown.bind(this), ref: (el) => {
        this.anchor = el;
        this.syncReferences();
      } }, h("slot", { name: 'menu-title' })), h("ocdk-surface", { onKeyDown: this.handleKeyDown.bind(this), ref: (el) => {
        if (ocdkIsSurface(el)) {
          this.surface = el;
          this.syncReferences();
        }
      } }, h("slot", null))));
  }
  static get is() { return "osds-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["osds-menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["osds-menu.css"]
    };
  }
  static get properties() {
    return {
      "disabled": {
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
          "text": "Menu is disabled or not"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "DEFAULT_ATTRIBUTE.disabled"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "disabled",
        "methodName": "propagateDisabledToChild"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "checkForClickOutside",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
