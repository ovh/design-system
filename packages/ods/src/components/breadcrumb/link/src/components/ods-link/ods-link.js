import { Host, h } from "@stencil/core";
import { ODS_LINK_COLOR } from "../../constant/link-color";
export class OdsLink {
    constructor() {
        this.color = ODS_LINK_COLOR.primary;
        this.download = undefined;
        this.href = undefined;
        this.icon = undefined;
        this.isDisabled = false;
        this.label = undefined;
        this.referrerpolicy = undefined;
        this.rel = undefined;
        this.target = undefined;
    }
    onClick(event) {
        if (this.isDisabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    render() {
        var _a;
        return (h(Host, { key: '1c8a90c09dc46a1d7eb17247f86f51af4e4f42b4', class: "ods-link" }, h("a", { key: '0a2b8aa97b2aa1ead4c80af99ed5720d643601f0', class: {
                'ods-link__link': true,
                'ods-link__link--disabled': (_a = this.isDisabled) !== null && _a !== void 0 ? _a : false,
                [`ods-link__link--${this.color}`]: true,
            }, download: this.download, href: this.href, part: "link", referrerPolicy: this.referrerpolicy, rel: this.rel, tabindex: this.isDisabled ? -1 : 0, target: this.target }, !!this.label &&
            h("span", null, this.label), !!this.icon &&
            h("div", { class: "ods-link__link__icon" }, !this.label &&
                h("span", null, "\u200B"), h("ods-icon", { name: this.icon })))));
    }
    static get is() { return "ods-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ods-link.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ods-link.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsLinkColor",
                    "resolved": "\"primary\"",
                    "references": {
                        "OdsLinkColor": {
                            "location": "import",
                            "path": "../../constant/link-color",
                            "id": "../link/src/constant/link-color.ts::OdsLinkColor"
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
                "defaultValue": "ODS_LINK_COLOR.primary"
            },
            "download": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "HTMLAnchorElement['download']",
                    "resolved": "string | undefined",
                    "references": {
                        "HTMLAnchorElement": {
                            "location": "global",
                            "id": "global::HTMLAnchorElement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "download",
                "reflect": true
            },
            "href": {
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
                "attribute": "href",
                "reflect": true
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsIconName",
                    "resolved": "\"apps\" | \"arrow-crossed\" | \"arrow-down-left\" | \"arrow-down-right\" | \"arrow-down\" | \"arrow-left-right\" | \"arrow-left\" | \"arrow-right\" | \"arrow-up-down\" | \"arrow-up-left\" | \"arrow-up-right\" | \"arrow-up\" | \"baremetal-rack\" | \"baremetal\" | \"bell\" | \"book\" | \"calendar\" | \"chat\" | \"check-circle\" | \"check-square\" | \"check\" | \"chevron-double-left\" | \"chevron-double-right\" | \"chevron-down\" | \"chevron-left\" | \"chevron-right\" | \"chevron-up\" | \"chrono\" | \"circle\" | \"clock-time-four\" | \"clock-time-nine\" | \"clock-time-six\" | \"clock-time-three\" | \"clock-time-twelve\" | \"cloud-check\" | \"cloud-download\" | \"cloud-lock\" | \"cloud-times\" | \"cloud-upload\" | \"cloud\" | \"cog\" | \"collab\" | \"component\" | \"credit-card\" | \"critical-hexagon-full\" | \"critical-hexagon\" | \"d-pad\" | \"danger-diamond-full\" | \"danger-diamond\" | \"desktop\" | \"diamond\" | \"dot-circle\" | \"download\" | \"ellipsis-horizontal\" | \"ellipsis-vertical\" | \"email\" | \"emoticon-dizzy\" | \"emoticon-neutral\" | \"emoticon-sad\" | \"emoticon-smile\" | \"emoticon-wink\" | \"emoticon\" | \"equal\" | \"error-circle\" | \"external-link\" | \"eye-off\" | \"eye\" | \"file-copy\" | \"file-minus\" | \"file-plus\" | \"file\" | \"filter\" | \"focus\" | \"folder-minus\" | \"folder-plus\" | \"folder\" | \"game-console\" | \"game-controller-alt\" | \"game-controller\" | \"gathering\" | \"globe\" | \"grid\" | \"hamburger-menu\" | \"hexagon\" | \"hierarchy\" | \"home\" | \"info-circle\" | \"key\" | \"labs-empty\" | \"labs-full\" | \"labs-half\" | \"leaf\" | \"lifebuoy\" | \"lightbulb\" | \"list\" | \"location\" | \"lock-close\" | \"lock-open\" | \"minus-square\" | \"minus\" | \"money\" | \"network\" | \"pen\" | \"phone\" | \"plus\" | \"printer\" | \"product-3az\" | \"promotion\" | \"question-circle\" | \"question\" | \"radio\" | \"refresh\" | \"resize\" | \"search\" | \"share\" | \"shield-check\" | \"shield-firewall\" | \"shield-lock\" | \"shield-minus\" | \"shield-off\" | \"shield-plus\" | \"shield-times\" | \"shield-warning\" | \"shield\" | \"shopping-cart-clear\" | \"shopping-cart-error\" | \"shopping-cart-minus\" | \"shopping-cart-plus\" | \"shopping-cart\" | \"shrink\" | \"shutdown\" | \"sort-alpha-down\" | \"sort-alpha-up\" | \"sort-numeric-down\" | \"sort-numeric-up\" | \"square\" | \"star-full\" | \"star\" | \"store\" | \"times\" | \"traffic-cone\" | \"trash\" | \"triangle\" | \"truck\" | \"undo\" | \"upload\" | \"user-circle\" | \"user\" | \"warning-triangle-full\" | \"warning-triangle\" | undefined",
                    "references": {
                        "OdsIconName": {
                            "location": "import",
                            "path": "../../../../icon/src/constants/icon-name",
                            "id": "../icon/src/constants/icon-name.ts::OdsIconName"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "icon",
                "reflect": true
            },
            "isDisabled": {
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
                "attribute": "is-disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "label": {
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
                "attribute": "label",
                "reflect": true
            },
            "referrerpolicy": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ReferrerPolicy",
                    "resolved": "\"\" | \"no-referrer\" | \"no-referrer-when-downgrade\" | \"origin\" | \"origin-when-cross-origin\" | \"same-origin\" | \"strict-origin\" | \"strict-origin-when-cross-origin\" | \"unsafe-url\" | undefined",
                    "references": {
                        "ReferrerPolicy": {
                            "location": "global",
                            "id": "global::ReferrerPolicy"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "referrerpolicy",
                "reflect": true
            },
            "rel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "HTMLAnchorElement['rel']",
                    "resolved": "string | undefined",
                    "references": {
                        "HTMLAnchorElement": {
                            "location": "global",
                            "id": "global::HTMLAnchorElement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "rel",
                "reflect": true
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "HTMLAnchorElement['target']",
                    "resolved": "string | undefined",
                    "references": {
                        "HTMLAnchorElement": {
                            "location": "global",
                            "id": "global::HTMLAnchorElement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "target",
                "reflect": true
            }
        };
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
