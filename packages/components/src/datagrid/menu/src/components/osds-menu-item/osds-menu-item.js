import { Host, h } from "@stencil/core";
export class OsdsMenuItem {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "osds-menu-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["osds-menu-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["osds-menu-item.css"]
    };
  }
}
