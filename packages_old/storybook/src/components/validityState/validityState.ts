import { type TemplateResult, html } from 'lit-html';

function hideValidityStateSource(code: string): string {
  return code
    .replace(/<ods-table\b[^<]*(?:(?!<\/ods-table>)<[^<]*)*<\/ods-table>/gi, '')
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

function ValidityStateTemplate(componentName: string, componentSelector: string): TemplateResult {
  const tableId = `validity-state-table-${Date.now()}`;

  return html`
    <ods-table size="sm">
      <table id="${tableId}"
             style="margin-top: 10px; width: 200px">
      </table>
    </ods-table>
    <script>
      (async () => {
        function buildTable(table, validity) {
          const tr = [];
          const header = '<thead><tr><th scope="col">Key</th><th scope="col">Value</th></tr></thead>';

          for (const key in validity) {
            tr.push({
              key,
              template: '<tr><th scope="row" style="text-align: initial">'+key+'</th><td>'+validity[key]+'</td></tr>',
            });
          }

          if (!tr.length) {
            table.innerHTML = header+'<tbody><tr><td colspan="2">Focus/blur the component to update.</td></tr></tbody>';
          } else {
            table.innerHTML = header+'<tbody>'+tr.sort((a, b) => a.key.localeCompare(b.key)).map(({ template }) => template).join('')+'</tbody>';
          }
        }

        await Promise.all([
          await customElements.whenDefined('ods-table'),
          await customElements.whenDefined('ods-${componentName}'),
        ]);

        const component = document.querySelector('${componentSelector}');
        const table = document.querySelector('#${tableId}');

        if (component && table) {
          component.addEventListener('odsChange', (e) => {
            buildTable(table, e.detail.validity);
          });

          component.addEventListener('odsInvalid', async() => {
            // Delay needed for composed components to wait for the validity to be updated up to the host
            setTimeout(async() => {
              buildTable(table, await component.getValidity());
            }, 0);
          });

          // TODO investigate, delay needed for checkbox/radio component, otherwise their input ref is not yet defined
          setTimeout(async() => {
            buildTable(table, await component.getValidity());
          }, 0);
        }
      })();
    </script>
  `;
}

export {
  hideValidityStateSource,
  ValidityStateTemplate,
};
