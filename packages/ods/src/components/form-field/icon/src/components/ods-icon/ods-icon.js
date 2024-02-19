import { Host, h } from "@stencil/core";
export class OdsIcon {
    constructor() {
        this.alt = '';
        this.name = undefined;
    }
    render() {
        return (h(Host, { key: '80aae3c54f564863d6038de8a27df782909de083', class: `ods-icon ods-icon__${this.name}`, alt: this.alt }));
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
                    "resolved": "\"arrow-crossed\" | \"arrow-down\" | \"arrow-down-left\" | \"arrow-down-right\" | \"arrow-left\" | \"arrow-left-right\" | \"arrow-right\" | \"arrow-up\" | \"arrow-up-down\" | \"arrow-up-left\" | \"arrow-up-right\" | \"bell\" | \"book\" | \"calendar\" | \"check\" | \"chevron-double-left\" | \"chevron-double-right\" | \"chevron-down\" | \"chevron-left\" | \"chevron-right\" | \"chevron-up\" | \"circle-check\" | \"circle-info\" | \"circle-question\" | \"circle-three-nodes\" | \"circle-user\" | \"circle-xmark\" | \"clock-time-four\" | \"clock-time-nine\" | \"clock-time-six\" | \"clock-time-three\" | \"clock-time-twelve\" | \"cloud\" | \"cloud-check\" | \"cloud-download\" | \"cloud-lock\" | \"cloud-upload\" | \"cloud-xmark\" | \"cog\" | \"comment\" | \"credit-card\" | \"d-pad\" | \"diamond-exclamation\" | \"diamond-exclamation-full\" | \"diamonds-full\" | \"download\" | \"ellipsis-horizontal\" | \"ellipsis-vertical\" | \"email\" | \"emoticon\" | \"emoticon-dizzy\" | \"emoticon-neutral\" | \"emoticon-sad\" | \"emoticon-smile\" | \"emoticon-wink\" | \"equal\" | \"external-link\" | \"eye\" | \"eye-off\" | \"file\" | \"file-copy\" | \"file-minus\" | \"file-plus\" | \"filter\" | \"flask-empty\" | \"flask-full\" | \"flask-half\" | \"focus\" | \"folder\" | \"folder-minus\" | \"folder-plus\" | \"game-console\" | \"game-controller\" | \"game-controller-alt\" | \"gathering\" | \"globe\" | \"grid\" | \"grid-alt\" | \"hamburger-menu\" | \"hexagon-exclamation\" | \"hexagon-exclamation-full\" | \"hierarchy\" | \"home\" | \"key\" | \"leaf\" | \"lifebuoy\" | \"lightbulb\" | \"list\" | \"location\" | \"lock-close\" | \"lock-open\" | \"magnifying-glass\" | \"minus\" | \"money\" | \"monitor\" | \"network\" | \"pen\" | \"phone\" | \"plus\" | \"printer\" | \"question\" | \"refresh\" | \"resize\" | \"server\" | \"server-rack\" | \"share-nodes\" | \"shield\" | \"shield-check\" | \"shield-exclamation\" | \"shield-firewall\" | \"shield-lock\" | \"shield-minus\" | \"shield-off\" | \"shield-plus\" | \"shield-xmark\" | \"shopping-cart\" | \"shopping-cart-error\" | \"shopping-cart-minus\" | \"shopping-cart-plus\" | \"shopping-cart-xmark\" | \"shrink\" | \"shutdown\" | \"sort-alpha-down\" | \"sort-alpha-up\" | \"sort-numeric-down\" | \"sort-numeric-up\" | \"star\" | \"star-full\" | \"store\" | \"tag\" | \"timer\" | \"traffic-cone\" | \"trash\" | \"triangle-exclamation\" | \"triangle-exclamation-full\" | \"triangle-three-nodes\" | \"truck\" | \"undo\" | \"upload\" | \"user\" | \"xmark\"",
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
