import { type TemplateResult, html } from 'lit-html';

type OdsComponent = {
  getValidity: () => ValidityState,
} & HTMLElement

let oldIsRequired: boolean;
const odsTable = html`
<ods-table id="validity-state-table" size="sm">
  <table style="width: 200px">
    <thead>
      <tr>
        <th scope="col">Key</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</ods-table>`;

function ValidityStateTemplateDemo(hasValidityState: boolean, isRequired: boolean, componentName: string, componentSelector: string): TemplateResult | string {
  return hasValidityState ? ValidityStateTemplateExample(componentName, componentSelector) : '';
}

function ValidityStateTemplateExample(componentName: string, componentSelector: string): TemplateResult | string {
  const validityStateTemplate = html`
  ${ odsTable }
  <script>
    (async () => {
        await Promise.all([
          await customElements.whenDefined('ods-table'),
          await customElements.whenDefined('ods-${componentName}'),
        ]);
        await window.renderValidityState('${componentSelector}');
    })();
  </script>`;
  return validityStateTemplate;
}

async function renderValidityState(componentSelector: string): Promise<void> {
  const component = document.querySelector<OdsComponent>(componentSelector);
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(async(mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'is-required') {
        setTimeout(async() => await buildTable(component), 10);
      }
    });
  });

  component && observer.observe(component, {
    attributeFilter: ['is-required'],
    attributes: true,
  });

  component?.addEventListener('odsChange', async() => {
    await buildTable(component);
  });

  await buildTable(component);
}

async function buildTable(component: OdsComponent | null): Promise<void> {
  const validity = await component?.getValidity();
  const validityStateElement = document.querySelector('#validity-state-table');
  const tr = [];
  for (const key in validity) {
    tr.push({ key, template: `<tr><th scope="row" style="text-align: initial">${key}</th><td>${validity[key as keyof ValidityState]}</td></tr>` } );
  }
  const tbody = validityStateElement?.querySelector('tbody');
  if (tbody) {
    tbody.innerHTML = '';
    tbody.innerHTML = tr.sort((a, b) => a.key.localeCompare(b.key)).map(({ template }) => template).join('');
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).renderValidityState = renderValidityState;

export {
  ValidityStateTemplateDemo,
  ValidityStateTemplateExample,
};
