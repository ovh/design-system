import { Host, h } from "@stencil/core";
import TomSelect from "tom-select";
import { getElementPosition } from "../../../../../utils/overlay";
import { mergeSelectedItemPlugin, placeholderPlugin } from "../../../../../utils/select";
import { getSelectConfig, inlineValue, moveSlottedElements, setFormValue, setSelectValue } from "../../controller/ods-select";
TomSelect.define('merge_selected_items', mergeSelectedItemPlugin);
TomSelect.define('placeholder', placeholderPlugin);
export class OdsSelect {
    constructor() {
        this.hasMovedNodes = false;
        this.isSelectSync = false;
        this.isValueSync = false;
        this.allowMultiple = false;
        this.ariaLabel = null;
        this.ariaLabelledby = undefined;
        this.borderRounded = 'all';
        this.customRenderer = undefined;
        this.defaultValue = undefined;
        this.dropdownWidth = 'input-based';
        this.hasError = false;
        this.isDisabled = false;
        this.isReadonly = false;
        this.isRequired = false;
        this.multipleSelectionLabel = 'Selected item';
        this.name = undefined;
        this.placeholder = undefined;
        this.value = null;
    }
    async clear() {
        var _a;
        this.odsClear.emit();
        if (this.value !== null) {
            this.isValueSync = true;
        }
        this.value = null;
        (_a = this.select) === null || _a === void 0 ? void 0 : _a.focus();
    }
    async close() {
        var _a;
        (_a = this.select) === null || _a === void 0 ? void 0 : _a.close();
    }
    async getValidity() {
        var _a;
        return (_a = this.selectElement) === null || _a === void 0 ? void 0 : _a.validity;
    }
    async open() {
        var _a;
        (_a = this.select) === null || _a === void 0 ? void 0 : _a.open();
    }
    async reset() {
        var _a, _b;
        this.odsReset.emit();
        if (this.value !== ((_a = this.defaultValue) !== null && _a !== void 0 ? _a : null)) {
            this.isValueSync = true;
        }
        this.updateValue((_b = this.defaultValue) !== null && _b !== void 0 ? _b : null);
    }
    onIsDisabledChange(newValue) {
        var _a, _b;
        newValue ? (_a = this.select) === null || _a === void 0 ? void 0 : _a.disable() : (_b = this.select) === null || _b === void 0 ? void 0 : _b.enable();
    }
    onIsReadonlyChange(newValue) {
        var _a;
        // TODO this seems to prevent focusing on next element
        // TODO use same still as input readonly (focused)
        (_a = this.select) === null || _a === void 0 ? void 0 : _a.setReadOnly(newValue);
    }
    onMultipleSelectionLabelChange(newValue) {
        var _a;
        (_a = this.select) === null || _a === void 0 ? void 0 : _a.control.dispatchEvent(new CustomEvent('ods-select-multiple-selection-label-change', {
            detail: newValue,
        }));
    }
    onPlaceholderChange(newValue) {
        var _a;
        (_a = this.select) === null || _a === void 0 ? void 0 : _a.control.dispatchEvent(new CustomEvent('ods-select-placeholder-change', {
            detail: newValue,
        }));
    }
    onValueChange(value, previousValue) {
        var _a;
        // Value change can be triggered from either value attribute change or select change
        // For the latter, we don't want to trigger a new change (as it may causes loop)
        if (!this.isSelectSync) {
            setSelectValue(this.select, value);
        }
        this.isSelectSync = false;
        setFormValue(this.internals, value);
        this.odsChange.emit({
            name: this.name,
            previousValue: inlineValue(previousValue) || null,
            validity: (_a = this.selectElement) === null || _a === void 0 ? void 0 : _a.validity,
            value: inlineValue(value) || null,
        });
    }
    componentWillLoad() {
        var _a;
        if (!this.value) {
            this.value = (_a = this.defaultValue) !== null && _a !== void 0 ? _a : null;
        }
        setFormValue(this.internals, this.value);
    }
    componentDidLoad() {
        this.observer = new MutationObserver((mutations) => {
            var _a, _b, _c, _d, _e;
            // We only care about mutations on child element (attributes or content changes)
            // as mutations on root element is managed by the onSlotChange
            const childrenMutations = mutations.filter((mutation) => mutation.target !== this.selectElement && mutation.type !== 'childList');
            if (childrenMutations.length) {
                const currentValue = ((_a = this.select) === null || _a === void 0 ? void 0 : _a.getValue()) || '';
                (_b = this.select) === null || _b === void 0 ? void 0 : _b.clear(); // reset the current selection
                (_c = this.select) === null || _c === void 0 ? void 0 : _c.clearOptions(); // reset the tom-select options
                (_d = this.select) === null || _d === void 0 ? void 0 : _d.sync(); // get updated options
                (_e = this.select) === null || _e === void 0 ? void 0 : _e.setValue(currentValue); // set the value back
            }
        });
        this.observer.observe(this.selectElement, {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true,
        });
    }
    async formResetCallback() {
        await this.reset();
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    bindSelectControl() {
        var _a, _b, _c;
        // By setting the lib "openOnFocus" to false, the dropdown doesn't open anymore on click
        // So we need to manually add our own open handler
        (_a = this.select) === null || _a === void 0 ? void 0 : _a.control.addEventListener('click', () => {
            var _a, _b;
            if (this.isDisabled) {
                return;
            }
            // BUT the dropdown still get closed on click if open, and this close click is triggered before
            // this listener, which means we can't use the select "isOpen" state here as it is always false
            //
            // "ignoreFocus" is only set in the lib between the node focus() and the focus event trigger call
            // so we can use this moment to know that our click needs to open the dropdown
            // and it will be ignored on close clicks
            if ((_a = this.select) === null || _a === void 0 ? void 0 : _a.ignoreFocus) {
                (_b = this.select) === null || _b === void 0 ? void 0 : _b.open();
            }
        });
        (_b = this.select) === null || _b === void 0 ? void 0 : _b.control.addEventListener('keydown', (event) => {
            // This prevents Space key to scroll the window down
            if (event.key === ' ') {
                event.preventDefault();
            }
        });
        (_c = this.select) === null || _c === void 0 ? void 0 : _c.control.addEventListener('keyup', (event) => {
            var _a;
            if (!this.isDisabled && event.key === ' ') {
                (_a = this.select) === null || _a === void 0 ? void 0 : _a.open();
            }
        });
    }
    onSlotChange(event) {
        var _a;
        // The initial slot nodes move will trigger this callback again
        // but we want to avoid a second select initialisation
        if (this.hasMovedNodes) {
            this.hasMovedNodes = false;
            return;
        }
        if (this.selectElement) {
            moveSlottedElements(this.selectElement, event.currentTarget.assignedElements());
            this.hasMovedNodes = true;
            const { plugin, template } = getSelectConfig(this.allowMultiple, this.multipleSelectionLabel, this.customRenderer);
            (_a = this.select) === null || _a === void 0 ? void 0 : _a.destroy();
            this.select = new TomSelect(this.selectElement, {
                allowEmptyOption: true,
                closeAfterSelect: !this.allowMultiple,
                controlInput: undefined,
                create: false,
                maxOptions: undefined,
                onBlur: () => {
                    this.odsBlur.emit();
                },
                onChange: (value) => {
                    if (!this.isValueSync) {
                        this.isSelectSync = true;
                        this.updateValue(value);
                    }
                    this.isValueSync = false;
                },
                onDropdownClose: (dropdown) => {
                    dropdown.classList.remove('ods-select__dropdown--bottom', 'ods-select__dropdown--top');
                    this.select.control.style.removeProperty('border-top-right-radius');
                    this.select.control.style.removeProperty('border-top-left-radius');
                    this.select.control.style.removeProperty('border-bottom-right-radius');
                    this.select.control.style.removeProperty('border-bottom-left-radius');
                },
                onDropdownOpen: async (dropdown) => {
                    // Delay the position computing at the end of the stack to ensure floating element has its final height
                    setTimeout(async () => {
                        var _a;
                        const { placement, y } = await getElementPosition('bottom', {
                            popper: dropdown,
                            trigger: (_a = this.select) === null || _a === void 0 ? void 0 : _a.control,
                        }, {
                            offset: -1, // offset the border-width size as we want it merged with the trigger.
                        });
                        Object.assign(dropdown.style, {
                            left: '0',
                            top: `${y}px`,
                        });
                        dropdown.classList.add(`ods-select__dropdown--${placement}`);
                        if (placement === 'top') {
                            this.select.control.style.borderTopRightRadius = '0';
                            this.select.control.style.borderTopLeftRadius = '0';
                        }
                        else {
                            this.select.control.style.borderBottomRightRadius = '0';
                            this.select.control.style.borderBottomLeftRadius = '0';
                        }
                    }, 0);
                },
                onFocus: () => {
                    this.odsFocus.emit();
                },
                openOnFocus: false,
                placeholder: this.placeholder,
                plugins: plugin,
                render: template,
                selectOnTab: true,
            });
            this.bindSelectControl();
            this.onIsReadonlyChange(this.isReadonly);
            setSelectValue(this.select, this.value, this.defaultValue, true);
        }
    }
    updateValue(newValue) {
        if (Array.isArray(newValue)) {
            this.value = [...newValue]; // to enforce Stencil @Watch trigger
        }
        else {
            this.value = newValue;
        }
    }
    render() {
        return (h(Host, { key: 'b266248118e494cb22ea31b6c887a7526efe73ac', class: {
                'ods-select': true,
                'ods-select--disabled': this.isDisabled,
                'ods-select--dropdown-width-auto': this.dropdownWidth === 'auto',
                'ods-select--error': this.hasError,
                [`ods-select--border-rounded-${this.borderRounded}`]: true,
            } }, h("select", { key: '64706da1e14074b8c46b6003745cf1d539f59dc8', "aria-label": this.ariaLabel, "aria-labelledby": this.ariaLabelledby, disabled: this.isDisabled, multiple: this.allowMultiple, ref: (el) => this.selectElement = el, required: this.isRequired }), h("slot", { key: 'b9b5c405a1d524103bdeadc238adb3f9f9b00b18', onSlotchange: (e) => this.onSlotChange(e) })));
    }
    static get is() { return "ods-select"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["ods-select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ods-select.css"]
        };
    }
    static get properties() {
        return {
            "allowMultiple": {
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
                "attribute": "allow-multiple",
                "reflect": true,
                "defaultValue": "false"
            },
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
            "borderRounded": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'all' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right' | 'top' | 'top-left' | 'top-right'",
                    "resolved": "\"all\" | \"bottom\" | \"bottom-left\" | \"bottom-right\" | \"left\" | \"right\" | \"top\" | \"top-left\" | \"top-right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "border-rounded",
                "reflect": false,
                "defaultValue": "'all'"
            },
            "customRenderer": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "OdsSelectCustomRenderer",
                    "resolved": "undefined | ({ item?: ((data: OdsSelectCustomRendererData) => string) | undefined; option?: ((data: OdsSelectCustomRendererData) => string) | undefined; })",
                    "references": {
                        "OdsSelectCustomRenderer": {
                            "location": "import",
                            "path": "../../interfaces/options",
                            "id": "../select/src/interfaces/options.ts::OdsSelectCustomRenderer"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "defaultValue": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | string []",
                    "resolved": "string | string[] | undefined",
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
            "dropdownWidth": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'auto' | 'input-based'",
                    "resolved": "\"auto\" | \"input-based\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "internal",
                            "text": undefined
                        }],
                    "text": ""
                },
                "attribute": "dropdown-width",
                "reflect": false,
                "defaultValue": "'input-based'"
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
            "multipleSelectionLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "multiple-selection-label",
                "reflect": true,
                "defaultValue": "'Selected item'"
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
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | string [] | null",
                    "resolved": "null | string | string[]",
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
                    "original": "OdsSelectEventChangeDetail",
                    "resolved": "OdsSelectEventChangeDetail",
                    "references": {
                        "OdsSelectEventChangeDetail": {
                            "location": "import",
                            "path": "../../interfaces/events",
                            "id": "../select/src/interfaces/events.ts::OdsSelectEventChangeDetail"
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
            "close": {
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
            "open": {
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
                "propName": "isDisabled",
                "methodName": "onIsDisabledChange"
            }, {
                "propName": "isReadonly",
                "methodName": "onIsReadonlyChange"
            }, {
                "propName": "multipleSelectionLabel",
                "methodName": "onMultipleSelectionLabelChange"
            }, {
                "propName": "placeholder",
                "methodName": "onPlaceholderChange"
            }, {
                "propName": "value",
                "methodName": "onValueChange"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
