import { Host, h } from "@stencil/core";
import { ODS_TEXT_PRESET } from "../../constants/text-preset";
export class OdsText {
    constructor() {
        this.preset = ODS_TEXT_PRESET.paragraph;
    }
    getTag() {
        switch (this.preset) {
            case ODS_TEXT_PRESET.paragraph:
                return 'p';
            case ODS_TEXT_PRESET.caption:
                return 'caption';
            case ODS_TEXT_PRESET.code:
                return 'code';
            case ODS_TEXT_PRESET.span:
                return 'span';
            case ODS_TEXT_PRESET.label:
                return 'label';
            case ODS_TEXT_PRESET.heading1:
                return 'h1';
            case ODS_TEXT_PRESET.heading2:
                return 'h2';
            case ODS_TEXT_PRESET.heading3:
                return 'h3';
            case ODS_TEXT_PRESET.heading4:
                return 'h4';
            case ODS_TEXT_PRESET.heading5:
                return 'h5';
            case ODS_TEXT_PRESET.heading6:
                return 'h6';
            default:
                return 'p';
        }
    }
    render() {
        const Tag = this.getTag();
        return (h(Host, { key: '63830075acc2939888e44052db8303cdf761447d', class: "ods-text" }, h(Tag, { key: '2cf9d5823b29b0d7162e53a69e7884c51212c245', class: `ods-text--${this.preset}`, part: "text" }, h("slot", { key: 'fec93d54cd3fd9e7023f1193a47af7d1e77151d9' }))));
    }
    static get is() { return "ods-text"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ods-text.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ods-text.css"]
        };
    }
    static get properties() {
        return {
            "preset": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsTextPreset",
                    "resolved": "\"caption\" | \"code\" | \"heading-1\" | \"heading-2\" | \"heading-3\" | \"heading-4\" | \"heading-5\" | \"heading-6\" | \"label\" | \"paragraph\" | \"span\" | undefined",
                    "references": {
                        "OdsTextPreset": {
                            "location": "import",
                            "path": "../../constants/text-preset",
                            "id": "../text/src/constants/text-preset.ts::OdsTextPreset"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "preset",
                "reflect": true,
                "defaultValue": "ODS_TEXT_PRESET.paragraph"
            }
        };
    }
}
