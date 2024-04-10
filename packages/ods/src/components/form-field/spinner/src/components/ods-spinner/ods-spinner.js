import { Host, h } from "@stencil/core";
import SpinnerSVG from "../../assets/default.svg";
import { ODS_SPINNER_COLOR } from "../../constants/spinner-color";
import { ODS_SPINNER_SIZE } from "../../constants/spinner-size";
export class OdsSpinner {
    constructor() {
        this.color = ODS_SPINNER_COLOR.primary;
        this.size = ODS_SPINNER_SIZE.md;
    }
    render() {
        return (h(Host, { key: 'af3ec6419b1912212979a6707f0e1522e27fc3e0', class: "ods-spinner", role: "progressbar" }, h("div", { key: 'b265de096a84aee42060a533f56a5d23da70fc8b', class: {
                'ods-spinner__container': true,
                [`ods-spinner__container--${this.color}`]: !!this.color,
                [`ods-spinner__container--${this.size}`]: !!this.size,
            }, innerHTML: SpinnerSVG, part: "spinner" })));
    }
    static get is() { return "ods-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ods-spinner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ods-spinner.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsSpinnerColor",
                    "resolved": "\"neutral\" | \"primary\" | \"white\"",
                    "references": {
                        "OdsSpinnerColor": {
                            "location": "import",
                            "path": "../../constants/spinner-color",
                            "id": "../spinner/src/constants/spinner-color.ts::OdsSpinnerColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "docType",
                            "text": "OdsSpinnerColor"
                        }],
                    "text": ""
                },
                "attribute": "color",
                "reflect": true,
                "defaultValue": "ODS_SPINNER_COLOR.primary"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsSpinnerSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "OdsSpinnerSize": {
                            "location": "import",
                            "path": "../../constants/spinner-size",
                            "id": "../spinner/src/constants/spinner-size.ts::OdsSpinnerSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "docType",
                            "text": "OdsSpinnerSize"
                        }],
                    "text": ""
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "ODS_SPINNER_SIZE.md"
            }
        };
    }
}