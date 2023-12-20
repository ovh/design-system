import { ocdkDefineCustomElements, ocdkIsSurface } from "@ovhcloud/ods-cdk";
import { Host, h } from "@stencil/core";
import { OdsPopoverController } from "./core/controller";
ocdkDefineCustomElements();
/**
 * @slot (unnamed) - Popover content
 */
export class OsdsPopover {
  constructor() {
    this.controller = new OdsPopoverController(this);
    this.surface = undefined;
  }
  checkForClickOutside(event) {
    this.controller.checkForClickOutside(event);
  }
  /**
   * @internal
   * @see OdsPopoverMethods.closeSurface
   */
  async closeSurface() {
    this.controller.closeSurface();
  }
  handleTriggerClick() {
    this.controller.handleTriggerClick();
  }
  handleTriggerKey(event) {
    this.controller.handleTriggerKey(event);
  }
  handleSurfaceKey(event) {
    this.controller.handleSurfaceKey(event);
  }
  syncReferences() {
    this.controller.syncReferences();
  }
  render() {
    return (h(Host, { role: 'dialog' }, h("div", { class: "trigger", onClick: this.handleTriggerClick.bind(this), onKeyUp: this.handleTriggerKey.bind(this), ref: (el) => {
        this.anchor = el;
        this.syncReferences();
      } }, h("slot", { name: 'popover-trigger' })), h("ocdk-surface", { onKeyUp: this.handleSurfaceKey.bind(this), ref: (el) => {
        if (ocdkIsSurface(el)) {
          this.surface = el;
          this.syncReferences();
        }
      } }, h("slot", null))));
  }
  static get is() { return "osds-popover"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["osds-popover.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["osds-popover.css"]
    };
  }
  static get methods() {
    return {
      "closeSurface": {
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
          "text": "Close the surface",
          "tags": [{
              "name": "internal",
              "text": undefined
            }, {
              "name": "see",
              "text": "OdsPopoverMethods.closeSurface"
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
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
