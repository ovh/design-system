import type { OdsSearchBarAttribute } from '../interfaces/attributes';

const DEFAULT_ATTRIBUTE: OdsSearchBarAttribute = Object.freeze({
    contrasted: false,
    disabled: false,
    loading: false,
    options: [] as { label: string; value: string; }[],
    placeholder: undefined,
    value: ''
});

export {
    DEFAULT_ATTRIBUTE,
};