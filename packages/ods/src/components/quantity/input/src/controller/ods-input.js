async function handleKeySpace(event, isDisabled, callback) {
    event.preventDefault();
    if (event.key === ' ' && !isDisabled) {
        await callback();
    }
}
function setFormValue(internals, value) {
    var _a;
    internals.setFormValue((_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : '');
}
function isPassword(isMasked) {
    return isMasked !== undefined;
}
export { handleKeySpace, isPassword, setFormValue, };
