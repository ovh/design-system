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
        return (h(Host, { key: 'b1b6ba2ed3b5ca4abacc5e5c58079c272484457d', class: "ods-spinner", role: "progressbar" }, h("div", { key: '09f63651555964fcbb178c0a4ecf8c015fd3e9bc', class: {
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
                    "tags": [],
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
                    "tags": [],
                    "text": ""
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "ODS_SPINNER_SIZE.md"
            }
        };
    }
}
