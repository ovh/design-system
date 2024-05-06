async function copyToClipboard(value) {
    return navigator.clipboard.writeText(value || '');
}
function getRandomHTMLId() {
    return `id-${Date.now()}-${Math.random().toString(36).replace('0.', '')}`;
}
export { copyToClipboard, getRandomHTMLId, };
