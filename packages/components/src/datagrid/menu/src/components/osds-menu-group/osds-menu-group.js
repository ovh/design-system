import { Host, h } from "@stencil/core";
export class OsdsMenuGroup {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "osds-menu-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["osds-menu-group.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["osds-menu-group.css"]
    };
  }
}
