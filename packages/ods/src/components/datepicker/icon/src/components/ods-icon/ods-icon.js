import { Host, h } from "@stencil/core";
export class OdsIcon {
    constructor() {
        this.alt = '';
        this.name = undefined;
    }
    render() {
        return (h(Host, { key: '7f1f701bf5ea3d16cafc869c764427ebed5ec31d', class: `ods-icon ods-icon__${this.name}`, alt: this.alt }));
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
                    "resolved": "\"apps\" | \"arrow-crossed\" | \"arrow-down-left\" | \"arrow-down-right\" | \"arrow-down\" | \"arrow-left-right\" | \"arrow-left\" | \"arrow-right\" | \"arrow-up-down\" | \"arrow-up-left\" | \"arrow-up-right\" | \"arrow-up\" | \"baremetal-rack\" | \"baremetal\" | \"bell\" | \"book\" | \"calendar\" | \"chat\" | \"check-circle\" | \"check-square\" | \"check\" | \"chevron-double-left\" | \"chevron-double-right\" | \"chevron-down\" | \"chevron-left\" | \"chevron-right\" | \"chevron-up\" | \"chrono\" | \"circle\" | \"clock-time-four\" | \"clock-time-nine\" | \"clock-time-six\" | \"clock-time-three\" | \"clock-time-twelve\" | \"cloud-check\" | \"cloud-download\" | \"cloud-lock\" | \"cloud-times\" | \"cloud-upload\" | \"cloud\" | \"cog\" | \"collab\" | \"component\" | \"credit-card\" | \"critical-hexagon-full\" | \"critical-hexagon\" | \"d-pad\" | \"danger-diamond-full\" | \"danger-diamond\" | \"desktop\" | \"diamond\" | \"dot-circle\" | \"download\" | \"ellipsis-horizontal\" | \"ellipsis-vertical\" | \"email\" | \"emoticon-dizzy\" | \"emoticon-neutral\" | \"emoticon-sad\" | \"emoticon-smile\" | \"emoticon-wink\" | \"emoticon\" | \"equal\" | \"error-circle\" | \"external-link\" | \"eye-off\" | \"eye\" | \"file-copy\" | \"file-minus\" | \"file-plus\" | \"file\" | \"filter\" | \"focus\" | \"folder-minus\" | \"folder-plus\" | \"folder\" | \"game-console\" | \"game-controller-alt\" | \"game-controller\" | \"gathering\" | \"globe\" | \"grid\" | \"hamburger-menu\" | \"hexagon\" | \"hierarchy\" | \"home\" | \"info-circle\" | \"key\" | \"labs-empty\" | \"labs-full\" | \"labs-half\" | \"leaf\" | \"lifebuoy\" | \"lightbulb\" | \"list\" | \"location\" | \"lock-close\" | \"lock-open\" | \"minus-square\" | \"minus\" | \"money\" | \"network\" | \"pen\" | \"phone\" | \"plus\" | \"printer\" | \"product-3az\" | \"promotion\" | \"question-circle\" | \"question\" | \"radio\" | \"refresh\" | \"resize\" | \"search\" | \"share\" | \"shield-check\" | \"shield-firewall\" | \"shield-lock\" | \"shield-minus\" | \"shield-off\" | \"shield-plus\" | \"shield-times\" | \"shield-warning\" | \"shield\" | \"shopping-cart-clear\" | \"shopping-cart-error\" | \"shopping-cart-minus\" | \"shopping-cart-plus\" | \"shopping-cart\" | \"shrink\" | \"shutdown\" | \"sort-alpha-down\" | \"sort-alpha-up\" | \"sort-numeric-down\" | \"sort-numeric-up\" | \"square\" | \"star-full\" | \"star\" | \"store\" | \"times\" | \"traffic-cone\" | \"trash\" | \"triangle\" | \"truck\" | \"undo\" | \"upload\" | \"user-circle\" | \"user\" | \"warning-triangle-full\" | \"warning-triangle\"",
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
                    "tags": [{
                            "name": "docType",
                            "text": "OdsIconName"
                        }],
                    "text": ""
                },
                "attribute": "name",
                "reflect": true
            }
        };
    }
}
