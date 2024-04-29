import { Host, h } from "@stencil/core";
export class OdsIcon {
    constructor() {
        this.alt = '';
        this.name = undefined;
    }
    render() {
<<<<<<< HEAD
        return (h(Host, { key: 'cd390c78bf5d9156308e947e7c45b3b44b0e7686', class: `ods-icon ods-icon__${this.name}`, alt: this.alt }));
=======
        return (h(Host, { key: '1985a26ae1e758ee0f7b7e471253a784988b0cae', class: `ods-icon ods-icon__${this.name}`, alt: this.alt }));
>>>>>>> a160577f0 (refactor(toggle): implementation component)
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
<<<<<<< HEAD
                    "resolved": "\"apps\" | \"arrow-crossed\" | \"arrow-down-left\" | \"arrow-down-right\" | \"arrow-down\" | \"arrow-left-right\" | \"arrow-left\" | \"arrow-right\" | \"arrow-up-down\" | \"arrow-up-left\" | \"arrow-up-right\" | \"arrow-up\" | \"baremetal-rack\" | \"baremetal\" | \"bell\" | \"book\" | \"calendar\" | \"chat\" | \"check-circle\" | \"check-square\" | \"check\" | \"chevron-double-left\" | \"chevron-double-right\" | \"chevron-down\" | \"chevron-left\" | \"chevron-right\" | \"chevron-up\" | \"chrono\" | \"circle\" | \"clock-time-four\" | \"clock-time-nine\" | \"clock-time-six\" | \"clock-time-three\" | \"clock-time-twelve\" | \"cloud-check\" | \"cloud-download\" | \"cloud-lock\" | \"cloud-times\" | \"cloud-upload\" | \"cloud\" | \"cog\" | \"collab\" | \"component\" | \"credit-card\" | \"critical-hexagon-full\" | \"critical-hexagon\" | \"d-pad\" | \"danger-diamond-full\" | \"danger-diamond\" | \"desktop\" | \"diamond\" | \"dot-circle\" | \"download\" | \"ellipsis-horizontal\" | \"ellipsis-vertical\" | \"email\" | \"emoticon-dizzy\" | \"emoticon-neutral\" | \"emoticon-sad\" | \"emoticon-smile\" | \"emoticon-wink\" | \"emoticon\" | \"equal\" | \"error-circle\" | \"external-link\" | \"eye-off\" | \"eye\" | \"file-copy\" | \"file-minus\" | \"file-plus\" | \"file\" | \"filter\" | \"focus\" | \"folder-minus\" | \"folder-plus\" | \"folder\" | \"game-console\" | \"game-controller-alt\" | \"game-controller\" | \"gathering\" | \"globe\" | \"grid\" | \"hamburger-menu\" | \"hexagon\" | \"hierarchy\" | \"home\" | \"info-circle\" | \"key\" | \"labs-empty\" | \"labs-full\" | \"labs-half\" | \"leaf\" | \"lifebuoy\" | \"lightbulb\" | \"list\" | \"location\" | \"lock-close\" | \"lock-open\" | \"minus-square\" | \"minus\" | \"money\" | \"network\" | \"pen\" | \"phone\" | \"plus\" | \"printer\" | \"product-3az\" | \"promotion\" | \"question-circle\" | \"question\" | \"radio\" | \"refresh\" | \"resize\" | \"search\" | \"share\" | \"shield-check\" | \"shield-firewall\" | \"shield-lock\" | \"shield-minus\" | \"shield-off\" | \"shield-plus\" | \"shield-times\" | \"shield-warning\" | \"shield\" | \"shopping-cart-clear\" | \"shopping-cart-error\" | \"shopping-cart-minus\" | \"shopping-cart-plus\" | \"shopping-cart\" | \"shrink\" | \"shutdown\" | \"sort-alpha-down\" | \"sort-alpha-up\" | \"sort-numeric-down\" | \"sort-numeric-up\" | \"square\" | \"star-full\" | \"star\" | \"store\" | \"times\" | \"traffic-cone\" | \"trash\" | \"triangle\" | \"truck\" | \"undo\" | \"upload\" | \"user-circle\" | \"user\" | \"warning-triangle-full\" | \"warning-triangle\"",
=======
                    "resolved": "\"help\" | \"filter\" | \"circle\" | \"download\" | \"square\" | \"location\" | \"screen\" | \"status\" | \"focus\" | \"key\" | \"critical\" | \"add\" | \"apps\" | \"arrow-crossed\" | \"arrow-down-left\" | \"arrow-down-right\" | \"arrow-down\" | \"arrow-left-right\" | \"arrow-left\" | \"arrow-right\" | \"arrow-up-down\" | \"arrow-up-left\" | \"arrow-up-right\" | \"arrow-up\" | \"baremetal-rack\" | \"baremetal\" | \"bell\" | \"book\" | \"calendar\" | \"chat\" | \"check\" | \"checkbox-indeterminate\" | \"checkbox\" | \"chevron-down\" | \"chevron-left\" | \"chevron-right\" | \"chevron-up\" | \"chrono\" | \"cloud-check\" | \"cloud-cross\" | \"cloud-down\" | \"cloud-lock-fill\" | \"cloud-up\" | \"cloud\" | \"collab\" | \"component\" | \"critical-full\" | \"cross\" | \"d-pad\" | \"danger-full\" | \"danger\" | \"delivery\" | \"diamond\" | \"double-chevron-left\" | \"double-chevron-right\" | \"email\" | \"equal\" | \"error-circle\" | \"external-link\" | \"eye-close\" | \"eye-open\" | \"face-activated\" | \"face-dissatisfied\" | \"face-dizzy\" | \"face-neutral\" | \"face-satisfied\" | \"face-wink\" | \"file-minus\" | \"file-plus\" | \"file\" | \"files-copy\" | \"folder-minus\" | \"folder-plus\" | \"folder\" | \"game-controler-a\" | \"game-controler-b\" | \"gameboy\" | \"gathering\" | \"gear\" | \"globe\" | \"grid\" | \"help-circle\" | \"hexagon\" | \"hierarchy\" | \"home\" | \"info-circle\" | \"labs-between\" | \"labs-empty\" | \"labs-full\" | \"leaf\" | \"life-buoy\" | \"lightbulb\" | \"list\" | \"menu-ellipsis-horizontal\" | \"menu-ellipsis-vertical\" | \"menu-hamburger\" | \"minus\" | \"money\" | \"network\" | \"padlock-close\" | \"padlock-open\" | \"pen\" | \"phone\" | \"printer\" | \"product-3az\" | \"promotion\" | \"purchase\" | \"radio\" | \"refresh\" | \"resize\" | \"search\" | \"share\" | \"shield-check\" | \"shield-cross\" | \"shield-firewall\" | \"shield-lock-fill\" | \"shield-minus\" | \"shield-off\" | \"shield-plus\" | \"shield-warning\" | \"shield\" | \"shopping-cart-add\" | \"shopping-cart-clear\" | \"shopping-cart-error\" | \"shopping-cart-minus\" | \"shopping-cart\" | \"shrink\" | \"shutdown\" | \"sort-alpha-down\" | \"sort-alpha-up\" | \"sort-num-down\" | \"sort-num-up\" | \"star-filled\" | \"star\" | \"store\" | \"success-circle\" | \"time-0am\" | \"time-3am\" | \"time-4am\" | \"time-6am\" | \"time-9am\" | \"traffic-cone\" | \"trash\" | \"triangle\" | \"undo\" | \"upload\" | \"user-circle\" | \"user\" | \"warning-triangle-full\" | \"warning-triangle\"",
>>>>>>> a160577f0 (refactor(toggle): implementation component)
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
