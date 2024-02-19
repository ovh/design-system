import { Host, h } from "@stencil/core";
import { ODS_ICON_NAME } from "../../../../icon/src";
import { ODS_SPINNER_COLOR } from "../../../../spinner/src";
import { ODS_INPUT_TYPE } from "../../constants/input-type";
import { handleKeySpace, isPassword, setFormValue } from "../../controller/ods-input";
export class OdsInput {
    constructor() {
        this.isPassword = false;
        this.ariaLabel = null;
        this.ariaLabelledby = undefined;
        this.defaultValue = undefined;
        this.hasError = false;
        this.isClearable = false;
        this.isDisabled = false;
        this.isLoading = false;
        this.isMasked = undefined;
        this.isReadonly = false;
        this.isRequired = false;
        this.max = undefined;
        this.maxlength = undefined;
        this.min = undefined;
        this.minlength = undefined;
        this.name = undefined;
        this.pattern = undefined;
        this.placeholder = undefined;
        this.step = undefined;
        this.type = ODS_INPUT_TYPE.text;
        this.value = null;
    }
    async clear() {
        var _a;
        this.value = null;
        (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.focus();
        this.odsClear.emit();
    }
    async getValidity() {
        var _a;
        return (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.validity;
    }
    async toggleMask() {
        this.isMasked = !this.isMasked;
        this.odsToggleMask.emit();
    }
    async reset() {
        var _a;
        this.value = (_a = this.defaultValue) !== null && _a !== void 0 ? _a : null;
        this.odsReset.emit();
    }
    onMaskedChange() {
        this.isPassword = isPassword(this.isMasked);
    }
    onValueChange(value, oldValue) {
        var _a;
        setFormValue(this.internals, this.value);
        this.odsChange.emit({
            name: this.name,
            oldValue: oldValue,
            validity: (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.validity,
            value: value !== null && value !== void 0 ? value : null,
        });
    }
    componentWillLoad() {
        var _a;
        this.onMaskedChange();
        if (!this.value && this.value !== 0) {
            this.value = (_a = this.defaultValue) !== null && _a !== void 0 ? _a : null;
        }
        setFormValue(this.internals, this.value);
    }
    async formResetCallback() {
        await this.reset();
    }
    onInput() {
        var _a, _b;
        if (this.isDisabled) {
            return;
        }
        this.value = (_b = (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;
        return;
    }
    render() {
        var _a;
        const hasClearableIcon = this.isClearable && !this.isLoading && !!this.value;
        const hasToggleMaskIcon = this.isPassword && !this.isLoading;
        return (h(Host, { key: 'cdeab76a4c7d2d0ccaf781bcf59b86dfeeea27f7', class: "ods-input" }, h("input", { key: '77e2f95eee86d557cdd46be14225e6635547785a', "aria-label": this.ariaLabel, "aria-labelledby": this.ariaLabelledby, class: {
                'ods-input__input': true,
                'ods-input__input--clearable': hasClearableIcon,
                'ods-input__input--error': this.hasError,
                'ods-input__input--loading': this.isLoading,
                'ods-input__input--toggle-mask': hasToggleMaskIcon,
            }, disabled: this.isDisabled, max: this.max, maxlength: this.maxlength, min: this.min, minlength: this.minlength, name: this.name, onBlur: () => this.odsBlur.emit(), onFocus: () => this.odsFocus.emit(), onInput: () => this.onInput(), pattern: this.pattern, part: "input", placeholder: this.placeholder, readonly: this.isReadonly, ref: (el) => this.inputEl = el, required: this.isRequired, step: this.step, type: this.isPassword && this.isMasked ? ODS_INPUT_TYPE.password : this.type, value: ((_a = this.value) === null || _a === void 0 ? void 0 : _a.toString()) || '' }), h("div", { key: '31d4d7621b2d16f1693b771183130ce5e20b8d95', class: "ods-input__actions" }, this.isLoading && h("ods-spinner", { class: "ods-input__actions__spinner", color: this.isDisabled ? ODS_SPINNER_COLOR.neutral : ODS_SPINNER_COLOR.primary }), hasClearableIcon &&
            h("button", { class: {
                    'ods-input__actions__clearable': true,
                    'ods-input__actions__clearable--readonly': this.isReadonly,
                }, disabled: this.isDisabled || this.isReadonly, onClick: this.clear.bind(this), onKeyUp: (event) => handleKeySpace(event, this.isDisabled, this.clear.bind(this)) }, h("ods-icon", { name: ODS_ICON_NAME.times })), hasToggleMaskIcon &&
            h("button", { class: {
                    'ods-input__actions__toggle-mask': true,
                    'ods-input__actions__toggle-mask--readonly': this.isReadonly,
                }, disabled: this.isDisabled, onClick: this.toggleMask.bind(this), onKeyUp: (event) => handleKeySpace(event, this.isDisabled, this.toggleMask.bind(this)) }, h("ods-icon", { name: this.isMasked ? ODS_ICON_NAME.eyeOff : ODS_ICON_NAME.eye })))));
    }
    static get is() { return "ods-input"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["ods-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ods-input.css"]
        };
    }
    static get properties() {
        return {
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "HTMLElement['ariaLabel']",
                    "resolved": "null | string",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "aria-label",
                "reflect": true,
                "defaultValue": "null"
            },
            "ariaLabelledby": {
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
                "attribute": "aria-labelledby",
                "reflect": true
            },
            "defaultValue": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "default-value",
                "reflect": true
            },
            "hasError": {
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
                "attribute": "has-error",
                "reflect": true,
                "defaultValue": "false"
            },
            "isClearable": {
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
                "attribute": "is-clearable",
                "reflect": true,
                "defaultValue": "false"
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
            "isMasked": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-masked",
                "reflect": true
            },
            "isReadonly": {
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
                "attribute": "is-readonly",
                "reflect": true,
                "defaultValue": "false"
            },
            "isRequired": {
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
                "attribute": "is-required",
                "reflect": true,
                "defaultValue": "false"
            },
            "max": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "max",
                "reflect": true
            },
            "maxlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "maxlength",
                "reflect": true
            },
            "min": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "min",
                "reflect": true
            },
            "minlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "minlength",
                "reflect": true
            },
            "name": {
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
                "attribute": "name",
                "reflect": true
            },
            "pattern": {
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
                "attribute": "pattern",
                "reflect": true
            },
            "placeholder": {
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
                "attribute": "placeholder",
                "reflect": true
            },
            "step": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "step",
                "reflect": true
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "OdsInputType",
                    "resolved": "\"email\" | \"number\" | \"password\" | \"text\" | \"url\"",
                    "references": {
                        "OdsInputType": {
                            "location": "import",
                            "path": "../../constants/input-type",
                            "id": "../input/src/constants/input-type.ts::OdsInputType"
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
                "defaultValue": "ODS_INPUT_TYPE.text"
            },
            "value": {
                "type": "any",
                "mutable": true,
                "complexType": {
                    "original": "string | number | null",
                    "resolved": "null | number | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "value",
                "reflect": true,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "isPassword": {}
        };
    }
    static get events() {
        return [{
                "method": "odsBlur",
                "name": "odsBlur",
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
                "method": "odsClear",
                "name": "odsClear",
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
                "method": "odsFocus",
                "name": "odsFocus",
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
                "method": "odsToggleMask",
                "name": "odsToggleMask",
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
                "method": "odsReset",
                "name": "odsReset",
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
                "method": "odsChange",
                "name": "odsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "OdsInputValueChangeEventDetail",
                    "resolved": "OdsInputValueChangeEventDetail",
                    "references": {
                        "OdsInputValueChangeEventDetail": {
                            "location": "import",
                            "path": "../../interfaces/events",
                            "id": "../input/src/interfaces/events.ts::OdsInputValueChangeEventDetail"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "clear": {
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
            "getValidity": {
                "complexType": {
                    "signature": "() => Promise<ValidityState | undefined>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "ValidityState": {
                            "location": "global",
                            "id": "global::ValidityState"
                        }
                    },
                    "return": "Promise<ValidityState | undefined>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "toggleMask": {
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
            "reset": {
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
    static get watchers() {
        return [{
                "propName": "isMasked",
                "methodName": "onMaskedChange"
            }, {
                "propName": "value",
                "methodName": "onValueChange"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
