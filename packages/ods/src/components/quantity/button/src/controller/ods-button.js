function handleClick(type, form) {
    if (form) {
        if (type === 'submit') {
            return form.submit();
        }
        if (type === 'reset') {
            return form.reset();
        }
    }
}
export { handleClick, };
