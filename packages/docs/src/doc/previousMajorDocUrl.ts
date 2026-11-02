/* Previous-major documentation link of a component identity card, gated by
   startingVersion (the major the component first shipped in): a component
   born after the previous major has no earlier doc to link to.
   v18 and below is the Stencil-era storybook: its form elements lived under a
   "form-elements" category and its ids follow the component name ("Radio").
   The React storybook ids follow the component folder ("radio-group",
   "data-table"), the last segment of githubUrl.
   Pure module: the identity card and the offline link audit
   (tests/identity-links.mjs) must share this exact logic. */
const LAST_NON_REACT_VERSION = 18;
const PREVIOUS_FORM_ELEMENTS = ['checkbox', 'clipboard', 'combobox', 'datepicker', 'file-upload', 'form-field', 'input', 'password', 'phone-number', 'quantity', 'radio', 'range', 'select', 'switch', 'textarea', 'timepicker', 'toggle'];

function previousMajorDocUrl(previousMajorFullVersion: string, name: string, githubUrl: string, startingVersion?: number): string {
  const previousMajor = parseInt(previousMajorFullVersion, 10);
  if (!previousMajorFullVersion || (startingVersion && startingVersion > previousMajor)) {
    return '';
  }
  const isStencilEra = previousMajor <= LAST_NON_REACT_VERSION;
  const uriName = isStencilEra ? name.toLowerCase().replace(' ', '-') : githubUrl.split('/').pop() ?? '';
  const suffix = isStencilEra && PREVIOUS_FORM_ELEMENTS.includes(uriName) ? '-form-elements' : '';
  const prefix = isStencilEra ? 'ods' : 'react';
  return `https://ovh.github.io/design-system/v${previousMajorFullVersion}/?path=/docs/${prefix}-components${suffix}-${uriName}--documentation`;
}

export { previousMajorDocUrl };
