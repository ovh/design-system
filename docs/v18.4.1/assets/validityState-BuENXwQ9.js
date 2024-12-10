import{x as i}from"./controls-DX883vx3.js";var a=Object.freeze,l=Object.defineProperty,d=(e,t)=>a(l(e,"raw",{value:a(e.slice())})),o;function s(e){return e.replace(/<ods-table\b[^<]*(?:(?!<\/ods-table>)<[^<]*)*<\/ods-table>/gi,"").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")}function c(e,t){const n=`validity-state-table-${Date.now()}`;return i(o||(o=d([`
    <ods-table size="sm">
      <table id="`,`"
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
          await customElements.whenDefined('ods-`,`'),
        ]);

        const component = document.querySelector('`,`');
        const table = document.querySelector('#`,`');

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
    <\/script>
  `])),n,e,t,n)}export{c as V,s as h};
