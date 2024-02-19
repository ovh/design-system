import { Host, h } from "@stencil/core";
import { findTriggerElement, hideOverlay, showOverlay } from "../../../../../utils/overlay";
import { ODS_TOOLTIP_POSITION } from "../../constants/tooltip-position";
export class OdsTooltip {
    constructor() {
        this.cleanUpCallback = () => { };
        this.boundHide = this.hide.bind(this);
        this.boundShow = this.show.bind(this);
        this.position = ODS_TOOLTIP_POSITION.top;
        this.shadowDomTriggerId = undefined;
        this.triggerId = undefined;
        this.withArrow = false;
    }
    async hide() {
        hideOverlay(this.el, this.cleanUpCallback);
        this.odsTooltipHide.emit();
    }
    async show() {
        this.cleanUpCallback = showOverlay(this.position, {
            arrow: this.arrowElement,
            popper: this.el,
            trigger: this.triggerElement,
        }, {
            offset: 8,
            shift: { padding: 5 },
        });
        this.odsTooltipShow.emit();
    }
    connectedCallback() {
        var _a, _b, _c, _d;
        this.triggerElement = findTriggerElement(this.triggerId, this.shadowDomTriggerId);
        (_a = this.triggerElement) === null || _a === void 0 ? void 0 : _a.addEventListener('blur', this.boundHide);
        (_b = this.triggerElement) === null || _b === void 0 ? void 0 : _b.addEventListener('focus', this.boundShow);
        (_c = this.triggerElement) === null || _c === void 0 ? void 0 : _c.addEventListener('mouseenter', this.boundShow);
        (_d = this.triggerElement) === null || _d === void 0 ? void 0 : _d.addEventListener('mouseleave', this.boundHide);
    }
    disconnectedCallback() {
        var _a, _b, _c, _d;
        (_a = this.triggerElement) === null || _a === void 0 ? void 0 : _a.removeEventListener('blur', this.boundHide);
        (_b = this.triggerElement) === null || _b === void 0 ? void 0 : _b.removeEventListener('focus', this.boundShow);
        (_c = this.triggerElement) === null || _c === void 0 ? void 0 : _c.removeEventListener('mouseenter', this.boundShow);
        (_d = this.triggerElement) === null || _d === void 0 ? void 0 : _d.removeEventListener('mouseleave', this.boundHide);
    }
    render() {
        return (h(Host, { key: 'bc5f0a653f99dfe5302a2d0958159ecae389571e', class: "ods-tooltip" }, h("slot", { key: '05f51eb1b140897f8e0395150505d7667bb99def' }), h("div", { key: 'ad6e383378bb394d4c1fed912e1841b17a1cf65c', class: {
                'ods-tooltip__arrow': true,
                'ods-tooltip__arrow--hidden': !this.withArrow,
            }, ref: (el) => el && (this.arrowElement = el) })));
    }
    static get is() { return "ods-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ods-tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ods-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsTooltipPosition",
                    "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "OdsTooltipPosition": {
                            "location": "import",
                            "path": "../../constants/tooltip-position",
                            "id": "../tooltip/src/constants/tooltip-position.ts::OdsOverlayPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "docType",
                            "text": "OdsTooltipPosition"
                        }],
                    "text": ""
                },
                "attribute": "position",
                "reflect": true,
                "defaultValue": "ODS_TOOLTIP_POSITION.top"
            },
            "shadowDomTriggerId": {
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
                "attribute": "shadow-dom-trigger-id",
                "reflect": true
            },
            "triggerId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "trigger-id",
                "reflect": true
            },
            "withArrow": {
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
                    "tags": [],
                    "text": ""
                },
                "attribute": "with-arrow",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "odsTooltipHide",
                "name": "odsTooltipHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "odsTooltipShow",
                "name": "odsTooltipShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "hide": {
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
                    "text": "",
                    "tags": []
                }
            },
            "show": {
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
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
