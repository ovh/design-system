function getSelectConfig(allowMultiple, multipleSelectionLabel, renderer) {
    const plugin = { placeholder: {} };
    const template = renderer || {};
    if (allowMultiple) {
        plugin['checkbox_options'] = {
            checkedClassNames: ['ts-checked'],
            uncheckedClassNames: ['ts-unchecked'],
        };
        plugin['merge_selected_items'] = {
            label: multipleSelectionLabel,
        };
        template['item'] = () => '<div style="display: none;"></div>';
    }
    return { plugin, template };
}
function inlineValue(value) {
    if (Array.isArray(value)) {
        return value.join(',');
    }
    return value !== null && value !== void 0 ? value : '';
}
function moveSlottedElements(targetElement, slottedElements) {
    // clean-up target
    targetElement.replaceChildren();
    slottedElements.forEach((element) => {
        targetElement.appendChild(element);
    });
}
function setFormValue(internals, value) {
    internals.setFormValue(inlineValue(value));
}
function setSelectValue(select, value, defaultValue, isSilent = false) {
    if (select) {
        if (value || defaultValue) {
            select.setValue(value || defaultValue || '', isSilent);
        }
        else {
            select.clear(isSilent);
        }
    }
}
export { getSelectConfig, inlineValue, moveSlottedElements, setFormValue, setSelectValue, };
