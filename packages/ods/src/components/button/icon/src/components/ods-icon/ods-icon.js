import { Host, h } from "@stencil/core";
import icons from "../../assets/icons.data.json"; // TODO replace with dedicated icon font when file server get available
export class OdsIcon {
    constructor() {
        this.alt = '';
        this.name = undefined;
    }
    render() {
        const base64Icon = icons[this.name];
        return (h(Host, { key: '27d5d10767805aab9a2ac37006374103428f581e', class: "ods-icon", alt: this.alt, style: (base64Icon ? { '--ods-icon-mask-image': `url("${base64Icon}")` } : {}) }));
    }
    static get is() { return "ods-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ods-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ods-icon.css"]
        };
    }
    static get properties() {
        return {
            "alt": {
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
                    "tags": [],
                    "text": ""
                },
                "attribute": "alt",
                "reflect": true,
                "defaultValue": "''"
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsIconName",
                    "resolved": "\"arrow-left\" | \"warning\"",
                    "references": {
                        "OdsIconName": {
                            "location": "import",
                            "path": "../../constants/icon-name",
                            "id": "../icon/src/constants/icon-name.ts::OdsIconName"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "name",
                "reflect": true
            }
        };
    }
}
