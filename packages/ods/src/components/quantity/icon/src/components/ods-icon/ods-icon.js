import { Host, h } from "@stencil/core";
export class OdsIcon {
    constructor() {
        this.alt = '';
        this.name = undefined;
    }
    render() {
        return (h(Host, { key: '1985a26ae1e758ee0f7b7e471253a784988b0cae', class: `ods-icon ods-icon__${this.name}`, alt: this.alt }));
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
                    "resolved": "\"help\" | \"filter\" | \"circle\" | \"download\" | \"square\" | \"location\" | \"screen\" | \"status\" | \"focus\" | \"key\" | \"critical\" | \"add\" | \"apps\" | \"arrow-crossed\" | \"arrow-down-left\" | \"arrow-down-right\" | \"arrow-down\" | \"arrow-left-right\" | \"arrow-left\" | \"arrow-right\" | \"arrow-up-down\" | \"arrow-up-left\" | \"arrow-up-right\" | \"arrow-up\" | \"baremetal-rack\" | \"baremetal\" | \"bell\" | \"book\" | \"calendar\" | \"chat\" | \"check\" | \"checkbox-indeterminate\" | \"checkbox\" | \"chevron-down\" | \"chevron-left\" | \"chevron-right\" | \"chevron-up\" | \"chrono\" | \"cloud-check\" | \"cloud-cross\" | \"cloud-down\" | \"cloud-lock-fill\" | \"cloud-up\" | \"cloud\" | \"collab\" | \"component\" | \"critical-full\" | \"cross\" | \"d-pad\" | \"danger-full\" | \"danger\" | \"delivery\" | \"diamond\" | \"double-chevron-left\" | \"double-chevron-right\" | \"email\" | \"equal\" | \"error-circle\" | \"external-link\" | \"eye-close\" | \"eye-open\" | \"face-activated\" | \"face-dissatisfied\" | \"face-dizzy\" | \"face-neutral\" | \"face-satisfied\" | \"face-wink\" | \"file-minus\" | \"file-plus\" | \"file\" | \"files-copy\" | \"folder-minus\" | \"folder-plus\" | \"folder\" | \"game-controler-a\" | \"game-controler-b\" | \"gameboy\" | \"gathering\" | \"gear\" | \"globe\" | \"grid\" | \"help-circle\" | \"hexagon\" | \"hierarchy\" | \"home\" | \"info-circle\" | \"labs-between\" | \"labs-empty\" | \"labs-full\" | \"leaf\" | \"life-buoy\" | \"lightbulb\" | \"list\" | \"menu-ellipsis-horizontal\" | \"menu-ellipsis-vertical\" | \"menu-hamburger\" | \"minus\" | \"money\" | \"network\" | \"padlock-close\" | \"padlock-open\" | \"pen\" | \"phone\" | \"printer\" | \"product-3az\" | \"promotion\" | \"purchase\" | \"radio\" | \"refresh\" | \"resize\" | \"search\" | \"share\" | \"shield-check\" | \"shield-cross\" | \"shield-firewall\" | \"shield-lock-fill\" | \"shield-minus\" | \"shield-off\" | \"shield-plus\" | \"shield-warning\" | \"shield\" | \"shopping-cart-add\" | \"shopping-cart-clear\" | \"shopping-cart-error\" | \"shopping-cart-minus\" | \"shopping-cart\" | \"shrink\" | \"shutdown\" | \"sort-alpha-down\" | \"sort-alpha-up\" | \"sort-num-down\" | \"sort-num-up\" | \"star-filled\" | \"star\" | \"store\" | \"success-circle\" | \"time-0am\" | \"time-3am\" | \"time-4am\" | \"time-6am\" | \"time-9am\" | \"traffic-cone\" | \"trash\" | \"triangle\" | \"undo\" | \"upload\" | \"user-circle\" | \"user\" | \"warning-triangle-full\" | \"warning-triangle\"",
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
