import { Host, h } from "@stencil/core";
import { setFormValue } from "../../controller/ods-textarea";
export class OdsTextarea {
    constructor() {
        this.ariaLabel = null;
        this.ariaLabelledby = undefined;
        this.cols = undefined;
        this.defaultValue = undefined;
        this.hasError = false;
        this.hasSpellcheck = false;
        this.isDisabled = false;
        this.isReadonly = false;
        this.isRequired = false;
        this.isResizable = false;
        this.name = undefined;
        this.placeholder = undefined;
        this.rows = undefined;
        this.value = null;
    }
    async clear() {
        this.value = null;
        this.odsClear.emit();
    }
    async getValidity() {
        var _a;
        return (_a = this.textareaElement) === null || _a === void 0 ? void 0 : _a.validity;
    }
    async reset() {
        var _a;
        this.value = (_a = this.defaultValue) !== null && _a !== void 0 ? _a : null;
        this.odsReset.emit();
    }
    onValueChange(value, previousValue) {
        var _a;
        setFormValue(this.internals, this.value);
        this.odsChange.emit({
            name: this.name,
            previousValue,
            validity: (_a = this.textareaElement) === null || _a === void 0 ? void 0 : _a.validity,
            value: value !== null && value !== void 0 ? value : '',
        });
    }
    componentWillLoad() {
        var _a;
        if (!this.value) {
            this.value = (_a = this.defaultValue) !== null && _a !== void 0 ? _a : null;
        }
        setFormValue(this.internals, this.value);
    }
    async formResetCallback() {
        await this.reset();
    }
    onBlur() {
        this.odsBlur.emit();
    }
    onFocus() {
        this.odsFocus.emit();
    }
    onInput() {
        var _a, _b;
        if (this.isDisabled) {
            return;
        }
        this.value = (_b = (_a = this.textareaElement) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;
    }
    render() {
        return (h(Host, { key: 'd6374c1cff33fa48bf5e49ebfa546795a6081e9f', class: "ods-textarea" }, h("textarea", { key: '8c7e8e01a1cd8e758929c70da395814563d81104', "aria-label": this.ariaLabel, "aria-labelledby": this.ariaLabelledby, "aria-multiline": true, class: {
                'ods-textarea__textarea': true,
                'ods-textarea__textarea--error': this.hasError,
                'ods-textarea__textarea--resizable': this.isResizable,
            }, cols: this.cols, disabled: this.isDisabled, name: this.name, onBlur: () => this.onBlur(), onFocus: () => this.onFocus(), onInput: () => this.onInput(), part: "textarea", placeholder: this.placeholder, readOnly: this.isReadonly, ref: (el) => this.textareaElement = el, required: this.isRequired, role: "textbox", rows: this.rows, spellcheck: this.hasSpellcheck, value: this.value || '' })));
    }
    static get is() { return "ods-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["ods-textarea.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ods-textarea.css"]
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
            "cols": {
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
                "attribute": "cols",
                "reflect": true
            },
            "defaultValue": {
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
            "hasSpellcheck": {
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
                "attribute": "has-spellcheck",
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
            "isResizable": {
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
                "attribute": "is-resizable",
                "reflect": true,
                "defaultValue": "false"
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
            "rows": {
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
                "attribute": "rows",
                "reflect": true
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | null",
                    "resolved": "null | string",
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
                    "original": "OdsTextareaEventChangeDetail",
                    "resolved": "OdsTextareaEventChangeDetail",
                    "references": {
                        "OdsTextareaEventChangeDetail": {
                            "location": "import",
                            "path": "../../interfaces/events",
                            "id": "../textarea/src/interfaces/events.ts::OdsTextareaEventChangeDetail"
                        }
                    }
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
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "onValueChange"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
