import { Host, h } from "@stencil/core";
/**
 * @slot (unnamed) - PopoverContent content
 */
export class OsdsPopoverContent {
  render() {
    return (h(Host, null, h("div", null, h("slot", { name: 'popover-header' })), h("div", null, h("slot", null)), h("div", null, h("slot", { name: 'popover-footer' }))));
  }
  static get is() { return "osds-popover-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["osds-popover-content.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["osds-popover-content.css"]
    };
  }
}
