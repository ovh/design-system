async function copyToClipboard(value) {
    return navigator.clipboard.writeText(value || '');
}
function getRandomHTMLId() {
    return `id-${Date.now()}-${Math.random().toString(36).replace('0.', '')}`;
}
<<<<<<< HEAD
function isTargetInElement(event, element) {
    if (!element) {
        return false;
    }
    return element.contains(event.target) || event.composedPath().includes(element);
}
export { copyToClipboard, getRandomHTMLId, isTargetInElement, };
=======
export { copyToClipboard, getRandomHTMLId, };
>>>>>>> 18555ebcb (feat(clipboard): implement component)
