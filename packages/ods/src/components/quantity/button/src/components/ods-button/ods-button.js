import { Host, h } from "@stencil/core";
import { ODS_SPINNER_COLOR, ODS_SPINNER_SIZE } from "../../../../spinner/src";
import { ODS_BUTTON_COLOR } from "../../constants/button-color";
import { ODS_BUTTON_SIZE } from "../../constants/button-size";
import { ODS_BUTTON_VARIANT } from "../../constants/button-variant";
import { handleClick } from "../../controller/ods-button";
export class OdsButton {
    constructor() {
        this.color = ODS_BUTTON_COLOR.primary;
        this.icon = undefined;
        this.isDisabled = false;
        this.isLoading = false;
        this.label = undefined;
        this.size = ODS_BUTTON_SIZE.md;
        this.type = 'button';
        this.variant = ODS_BUTTON_VARIANT.default;
    }
    onClick() {
        handleClick(this.type, this.internals.form);
    }
    render() {
<<<<<<< HEAD
        return (h(Host, { key: '29159f98c0b202359e2417fd5ba71d5ae002f3a4', class: "ods-button", disabled: this.isDisabled || this.isLoading }, h("button", { key: '44007207b7e1e7bc2d9a74e8ec3a212e36e8f228', class: `
=======
        return (h(Host, { key: 'c682ec22fdf6f7a2982aef9d9ed6bd8246c34469', disabled: this.isDisabled || this.isLoading }, h("button", { key: 'f7544bae0c5a10049440c1bc13b8412a6f4f31c8', class: `
>>>>>>> a160577f0 (refactor(toggle): implementation component)
            ods-button__button
            ods-button__button--${this.color}
            ods-button__button--${this.size}
            ods-button__button--${this.variant}
          `, disabled: this.isDisabled || this.isLoading, part: "button", type: this.type }, this.isLoading &&
            h("ods-spinner", { class: "ods-button__button__spinner", color: ODS_SPINNER_COLOR.neutral, size: ODS_SPINNER_SIZE.sm }), !!this.icon &&
            h("ods-icon", { class: "ods-button__button__icon", name: this.icon }), this.label)));
    }
    static get is() { return "ods-button"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["ods-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ods-button.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsButtonColor",
                    "resolved": "\"critical\" | \"primary\"",
                    "references": {
                        "OdsButtonColor": {
                            "location": "import",
                            "path": "../../constants/button-color",
                            "id": "../button/src/constants/button-color.ts::OdsButtonColor"
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
                "defaultValue": "ODS_BUTTON_COLOR.primary"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsIconName",
<<<<<<< HEAD
                    "resolved": "\"apps\" | \"arrow-crossed\" | \"arrow-down-left\" | \"arrow-down-right\" | \"arrow-down\" | \"arrow-left-right\" | \"arrow-left\" | \"arrow-right\" | \"arrow-up-down\" | \"arrow-up-left\" | \"arrow-up-right\" | \"arrow-up\" | \"baremetal-rack\" | \"baremetal\" | \"bell\" | \"book\" | \"calendar\" | \"chat\" | \"check-circle\" | \"check-square\" | \"check\" | \"chevron-double-left\" | \"chevron-double-right\" | \"chevron-down\" | \"chevron-left\" | \"chevron-right\" | \"chevron-up\" | \"chrono\" | \"circle\" | \"clock-time-four\" | \"clock-time-nine\" | \"clock-time-six\" | \"clock-time-three\" | \"clock-time-twelve\" | \"cloud-check\" | \"cloud-download\" | \"cloud-lock\" | \"cloud-times\" | \"cloud-upload\" | \"cloud\" | \"cog\" | \"collab\" | \"component\" | \"credit-card\" | \"critical-hexagon-full\" | \"critical-hexagon\" | \"d-pad\" | \"danger-diamond-full\" | \"danger-diamond\" | \"desktop\" | \"diamond\" | \"dot-circle\" | \"download\" | \"ellipsis-horizontal\" | \"ellipsis-vertical\" | \"email\" | \"emoticon-dizzy\" | \"emoticon-neutral\" | \"emoticon-sad\" | \"emoticon-smile\" | \"emoticon-wink\" | \"emoticon\" | \"equal\" | \"error-circle\" | \"external-link\" | \"eye-off\" | \"eye\" | \"file-copy\" | \"file-minus\" | \"file-plus\" | \"file\" | \"filter\" | \"focus\" | \"folder-minus\" | \"folder-plus\" | \"folder\" | \"game-console\" | \"game-controller-alt\" | \"game-controller\" | \"gathering\" | \"globe\" | \"grid\" | \"hamburger-menu\" | \"hexagon\" | \"hierarchy\" | \"home\" | \"info-circle\" | \"key\" | \"labs-empty\" | \"labs-full\" | \"labs-half\" | \"leaf\" | \"lifebuoy\" | \"lightbulb\" | \"list\" | \"location\" | \"lock-close\" | \"lock-open\" | \"minus-square\" | \"minus\" | \"money\" | \"network\" | \"pen\" | \"phone\" | \"plus\" | \"printer\" | \"product-3az\" | \"promotion\" | \"question-circle\" | \"question\" | \"radio\" | \"refresh\" | \"resize\" | \"search\" | \"share\" | \"shield-check\" | \"shield-firewall\" | \"shield-lock\" | \"shield-minus\" | \"shield-off\" | \"shield-plus\" | \"shield-times\" | \"shield-warning\" | \"shield\" | \"shopping-cart-clear\" | \"shopping-cart-error\" | \"shopping-cart-minus\" | \"shopping-cart-plus\" | \"shopping-cart\" | \"shrink\" | \"shutdown\" | \"sort-alpha-down\" | \"sort-alpha-up\" | \"sort-numeric-down\" | \"sort-numeric-up\" | \"square\" | \"star-full\" | \"star\" | \"store\" | \"times\" | \"traffic-cone\" | \"trash\" | \"triangle\" | \"truck\" | \"undo\" | \"upload\" | \"user-circle\" | \"user\" | \"warning-triangle-full\" | \"warning-triangle\" | undefined",
=======
                    "resolved": "\"help\" | \"filter\" | \"circle\" | \"download\" | \"square\" | \"location\" | \"screen\" | \"status\" | \"focus\" | \"key\" | \"critical\" | \"add\" | \"apps\" | \"arrow-crossed\" | \"arrow-down-left\" | \"arrow-down-right\" | \"arrow-down\" | \"arrow-left-right\" | \"arrow-left\" | \"arrow-right\" | \"arrow-up-down\" | \"arrow-up-left\" | \"arrow-up-right\" | \"arrow-up\" | \"baremetal-rack\" | \"baremetal\" | \"bell\" | \"book\" | \"calendar\" | \"chat\" | \"check\" | \"checkbox-indeterminate\" | \"checkbox\" | \"chevron-down\" | \"chevron-left\" | \"chevron-right\" | \"chevron-up\" | \"chrono\" | \"cloud-check\" | \"cloud-cross\" | \"cloud-down\" | \"cloud-lock-fill\" | \"cloud-up\" | \"cloud\" | \"collab\" | \"component\" | \"critical-full\" | \"cross\" | \"d-pad\" | \"danger-full\" | \"danger\" | \"delivery\" | \"diamond\" | \"double-chevron-left\" | \"double-chevron-right\" | \"email\" | \"equal\" | \"error-circle\" | \"external-link\" | \"eye-close\" | \"eye-open\" | \"face-activated\" | \"face-dissatisfied\" | \"face-dizzy\" | \"face-neutral\" | \"face-satisfied\" | \"face-wink\" | \"file-minus\" | \"file-plus\" | \"file\" | \"files-copy\" | \"folder-minus\" | \"folder-plus\" | \"folder\" | \"game-controler-a\" | \"game-controler-b\" | \"gameboy\" | \"gathering\" | \"gear\" | \"globe\" | \"grid\" | \"help-circle\" | \"hexagon\" | \"hierarchy\" | \"home\" | \"info-circle\" | \"labs-between\" | \"labs-empty\" | \"labs-full\" | \"leaf\" | \"life-buoy\" | \"lightbulb\" | \"list\" | \"menu-ellipsis-horizontal\" | \"menu-ellipsis-vertical\" | \"menu-hamburger\" | \"minus\" | \"money\" | \"network\" | \"padlock-close\" | \"padlock-open\" | \"pen\" | \"phone\" | \"printer\" | \"product-3az\" | \"promotion\" | \"purchase\" | \"radio\" | \"refresh\" | \"resize\" | \"search\" | \"share\" | \"shield-check\" | \"shield-cross\" | \"shield-firewall\" | \"shield-lock-fill\" | \"shield-minus\" | \"shield-off\" | \"shield-plus\" | \"shield-warning\" | \"shield\" | \"shopping-cart-add\" | \"shopping-cart-clear\" | \"shopping-cart-error\" | \"shopping-cart-minus\" | \"shopping-cart\" | \"shrink\" | \"shutdown\" | \"sort-alpha-down\" | \"sort-alpha-up\" | \"sort-num-down\" | \"sort-num-up\" | \"star-filled\" | \"star\" | \"store\" | \"success-circle\" | \"time-0am\" | \"time-3am\" | \"time-4am\" | \"time-6am\" | \"time-9am\" | \"traffic-cone\" | \"trash\" | \"triangle\" | \"undo\" | \"upload\" | \"user-circle\" | \"user\" | \"warning-triangle-full\" | \"warning-triangle\" | undefined",
>>>>>>> a160577f0 (refactor(toggle): implementation component)
                    "references": {
                        "OdsIconName": {
                            "location": "import",
                            "path": "../../../../icon/src",
                            "id": "../icon/src/index.ts::OdsIconName"
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
            "isLoading": {
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
                "attribute": "is-loading",
                "reflect": true,
                "defaultValue": "false"
            },
            "label": {
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
                "attribute": "label",
                "reflect": true
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsButtonSize",
                    "resolved": "\"md\" | \"sm\"",
                    "references": {
                        "OdsButtonSize": {
                            "location": "import",
                            "path": "../../constants/button-size",
                            "id": "../button/src/constants/button-size.ts::OdsButtonSize"
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
                "defaultValue": "ODS_BUTTON_SIZE.md"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "HTMLButtonElement['type']",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {
                        "HTMLButtonElement": {
                            "location": "global",
                            "id": "global::HTMLButtonElement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'button'"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsButtonVariant",
                    "resolved": "\"default\" | \"ghost\" | \"outline\"",
                    "references": {
                        "OdsButtonVariant": {
                            "location": "import",
                            "path": "../../constants/button-variant",
                            "id": "../button/src/constants/button-variant.ts::OdsButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variant",
                "reflect": true,
                "defaultValue": "ODS_BUTTON_VARIANT.default"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
