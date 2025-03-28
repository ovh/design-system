import{d as Ze}from"./ods-form-field2-BSNGPVxz.js";import{x as e,o as Ke,C as t}from"./controls-DX883vx3.js";import{o as E}from"./unsafe-html-VJzuFJfF.js";const eo=Ze;var T=Object.freeze,oo=Object.defineProperty,A=(o,lo)=>T(oo(o,"raw",{value:T(o.slice())})),D,P,R,O;eo();const to={title:"ODS Components/Form elements/Form Field",component:"ods-form-field"},r={render:o=>e`
  <ods-form-field error="${o.error}">
    ${E(o.label)}
    ${E(o.visualHint)}
    ${E(o.content)}
    ${E(o.helper)}
  </ods-form-field>
  `,argTypes:Ke({content:{table:{category:t.slot,defaultValue:{summary:"ø"}},control:"text"},error:{table:{category:t.general,defaultValue:{summary:""},type:{summary:"string"}},control:"text"},helper:{table:{category:t.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a helper text on the bottom-left corner of the field."},label:{table:{category:t.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a label on the top-left corner of the field."},visualHint:{table:{category:t.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a visual hint on the bottom-right corner of the field."}}),args:{error:"",label:'<label slot="label">Description</label>',visualHint:'<ods-text slot="visual-hint" preset="caption">0/100</ods-text>',content:'<ods-input type="text" placeholder="Placeholder" clearable></ods-input>',helper:'<ods-text slot="helper" preset="caption">A little helper text</ods-text>'}},l={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-form-field error="Error message">
  <label for="form-field-overview" slot="label">
    Description
  </label>

  <ods-textarea id="form-field-overview" placeholder="Placeholder" is-resizable="true"></ods-textarea>

  <ods-text slot="helper" preset="caption">
    Helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="caption">
    0/200
  </ods-text>
</ods-form-field>
  `},a={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>`},n={tags:["isHidden"],render:()=>e`
<ods-form-field error="Wrong format">
  <label for="form-field-input-error" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-error" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="caption">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="caption">
    0/100
  </ods-text>
</ods-form-field>
  `},s={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-input-custom-css" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-custom-css" type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>

<style>
  .my-label {
    color: #b63f81;
  }
</style>
  `},d={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-input-label" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-label" type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>
  `},i={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-input-hint" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-hint" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="visual-hint" preset="caption">
    0/100
  </ods-text>
</ods-form-field>
  `},c={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-input-hint-helper" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-hint-helper" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="caption">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="caption">
    0/100
  </ods-text>
</ods-form-field>
  `},m={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-input-tooltip" slot="label">
    <span>
      Description
    </span>

    <ods-icon aria-labelledby="tooltip-demo" id="tooltip-trigger" name="circle-question"></ods-icon>
  </label>

  <ods-input id="form-field-input-tooltip" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-tooltip id="tooltip-demo" trigger-id="tooltip-trigger">
    0/100
  </ods-tooltip>
</ods-form-field>
  `},f={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <div class="form-field__checkbox__field">
    <ods-checkbox input-id="checkbox-terms" name="name"></ods-checkbox>

    <label class="form-field__checkbox__field__label" for="checkbox-terms">
      I agree to the terms and conditions
    </label>
  </div>
</ods-form-field>

<style>
  .form-field__checkbox__field {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .form-field__checkbox__field__label {
    color: var(--ods-color-text);
  }
</style>
  `},p={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-clipboard" slot="label">
    Text to copy
  </label>

  <ods-clipboard id="form-field-clipboard" value="Copy me"></ods-clipboard>
</ods-form-field>
  `},u={tags:["isHidden"],decorators:[o=>e`<div style="height: 220px;">${o()}</div>`],render:()=>e`
<ods-form-field>
  <label for="form-field-combobox" slot="label">
    Choose your flavor
  </label>

  <ods-combobox id="form-field-combobox">
    <ods-combobox-item value="chocolate">
      Chocolate
    </ods-combobox-item>
    <ods-combobox-item value="chocolate-with-nuts">
      Chocolate with nuts
    </ods-combobox-item>
    <ods-combobox-item value="coconut">
      Coconut
    </ods-combobox-item>
    <ods-combobox-item value="light-mint">
      Light mint
    </ods-combobox-item>
    <ods-combobox-item value="mint">
      Mint
    </ods-combobox-item>
    <ods-combobox-item value="strawberry">
      Strawberry
    </ods-combobox-item>
    <ods-combobox-item value="vanilla">
      Vanilla
    </ods-combobox-item>
    <ods-combobox-item value="white-chocolate">
      White chocolate
    </ods-combobox-item>
  </ods-combobox>
</ods-form-field>
  `},b={tags:["isHidden"],decorators:[o=>e`<div style="height: 350px;">${o()}</div>`],render:()=>e(D||(D=A([`
<ods-form-field>
  <label for="form-field-datepicker" slot="label">
    Start date
  </label>

  <ods-datepicker id="form-field-datepicker"></ods-datepicker>

  <script>
    (() => {
      const datepicker = document.querySelector('#form-field-datepicker');
      datepicker.value = new Date();
    })();
  <\/script>
</ods-form-field>
  `])))},h={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-input" slot="label">
    Name
  </label>

  <ods-input id="form-field-input" placeholder="John"></ods-input>
</ods-form-field>
  `},x={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-password" slot="label">
    Password
  </label>

  <ods-password id="form-field-password" placeholder="Password" is-clearable></ods-password>
</ods-form-field>
  `},g={tags:["isHidden"],decorators:[o=>e`<div style="height: 250px;">${o()}</div>`],render:()=>e`
<ods-form-field>
  <label for="form-field-phone-number" slot="label">
    Phone number
  </label>

  <ods-phone-number id="form-field-phone-number" countries="all" is-clearable></ods-phone-number>
</ods-form-field>
  `},_={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-quantity" slot="label">
    Number of CPUs
  </label>

  <ods-quantity id="form-field-quantity" min="0" max="10" value="0"></ods-quantity>
</ods-form-field>
  `},v={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label slot="label">
    Output file format
  </label>

  <div class="form-field__radio__field">
    <ods-radio input-id="radio-text-format" name="file-format" value="text-format" is-checked></ods-radio>

    <label class="form-field__radio__field__label" for="radio-text-format">
      Text
    </label>
  </div>

  <div class="form-field__radio__field">
    <ods-radio input-id="radio-csv-format" name="file-format" value="csv-format"></ods-radio>

    <label class="form-field__radio__field__label" for="radio-csv-format">
      CSV
    </label>
  </div>

  <div class="form-field__radio__field">
    <ods-radio input-id="radio-html-format" name="file-format" value="html-format"></ods-radio>

    <label class="form-field__radio__field__label" for="radio-html-format">
      HTML
    </label>
  </div>

</ods-form-field>
<style>
  .form-field__radio__field {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .form-field__radio__field__label {
    color: var(--ods-color-text);
  }
</style>
  `},y={tags:["isHidden"],render:()=>e(P||(P=A([`
<ods-form-field>
  <div slot="label">
    <label for="form-field-range">
      Price range
    </label>

    <ods-text class="form-field__range__sub-label" preset="caption">
      Selected values : <span id="range-min-bound">0</span> - <span id="range-max-bound">0</span>€
    </ods-text>
  </div>

  <ods-range id="form-field-range" step="10"></ods-range>

  <script>
    (() => {
      const rangeDualStep = document.querySelector('#form-field-range');
      const minBound = document.querySelector('#range-min-bound');
      const maxBound = document.querySelector('#range-max-bound');

      const updateBounds = () => {
        minBound.textContent = rangeDualStep.value[0];
        maxBound.textContent = rangeDualStep.value[1];
      };

      rangeDualStep.value = [30, 70];
      updateBounds();

      rangeDualStep.addEventListener('odsChange', updateBounds);
    })()
  <\/script>
</ods-form-field>

<style>
  .form-field__range__sub-label {
    display: block;
  }
</style>
  `])))},C={tags:["isHidden"],decorators:[o=>e`<div style="height: 150px;">${o()}</div>`],render:()=>e`
<ods-form-field>
  <label for="form-field-select" slot="label">
    Select a Web hosting
  </label>

  <ods-select class="form-field__select__field" id="form-field-select" placeholder="Select">
    <option value="hosting-1">1 vCore 2,4 GHz, 2 Go RAM</option>
    <option value="hosting-2">1 vCore 2,4 GHz, 4 Go RAM</option>
    <option value="hosting-3">2 vCores 2,4 GHz, 8 Go RAM</option>
  </ods-select>
</ods-form-field>

<style>
  .form-field__select__field {
    width: 250px;
  }
</style>
  `},S={tags:["isHidden"],decorators:[o=>e`<div style="height: 150px;">${o()}</div>`],render:()=>e`
<ods-form-field>
  <label slot="label">
    Preferred Operating System
  </label>

  <ods-switch>
    <ods-switch-item value="windows" is-checked>Windows</ods-switch-item>
    <ods-switch-item value="macos">macOS</ods-switch-item>
    <ods-switch-item value="linux">Linux</ods-switch-item>
  </ods-switch>
</ods-form-field>
  `},H={tags:["isHidden"],render:()=>e(R||(R=A([`
<ods-form-field id="textarea-form-field">
  <label for="form-field-textarea" slot="label">
    Description
  </label>

  <ods-text slot="visual-hint" preset="caption">
    <span id="textarea-character-count">0</span>/<span id="textarea-max-characters">0</span>
  </ods-text>

  <ods-textarea id="form-field-textarea" placeholder="Placeholder" is-resizable="true"></ods-textarea>
</ods-form-field>

<script>
  (() => {
    const MAX_CHARACTERS = 200;
    const formFieldElement = document.querySelector('#textarea-form-field');
    const textareaElement = document.querySelector('#form-field-textarea');
    const characterCountElement = document.querySelector('#textarea-character-count');
    const maxCharactersElement = document.querySelector('#textarea-max-characters');
    let characterCount = 0;

    characterCountElement.textContent = characterCount.toString();
    maxCharactersElement.textContent = MAX_CHARACTERS.toString();

    const updateCharacterCount = (event) => {
      characterCount = event.target.value?.length || 0;
      characterCountElement.textContent = characterCount.toString();

      if (characterCount > MAX_CHARACTERS) {
        textareaElement.hasError = true;
        formFieldElement.error = "Max number of characters exceeded";
      } else {
        textareaElement.removeAttribute("has-error");
        formFieldElement.removeAttribute("error");
      }
    };

    textareaElement.addEventListener('odsChange', updateCharacterCount);
  })();
<\/script>
  `])))},w={tags:["isHidden"],decorators:[o=>e`<div style="height: 250px;">${o()}</div>`],render:()=>e(O||(O=A([`
<ods-form-field>
  <label for="form-field-timepicker" slot="label">
    Starting time
  </label>

  <ods-timepicker id="form-field-timepicker" timezones="all" with-seconds></ods-timepicker>

  <script>
    (() => {
      const timepicker = document.querySelector('#form-field-timepicker');
      timepicker.value = new Date().toLocaleTimeString('fr-FR');
    })();
  <\/script>
</ods-form-field>
  `])))},k={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-toggle" slot="label">
    Multi-AZ mode
  </label>

  <ods-toggle id="form-field-toggle" with-label></ods-toggle>
</ods-form-field>
  `};var L,q,M;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-form-field error="\${arg.error}">
    \${unsafeHTML(arg.label)}
    \${unsafeHTML(arg.visualHint)}
    \${unsafeHTML(arg.content)}
    \${unsafeHTML(arg.helper)}
  </ods-form-field>
  \`,
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text'
    },
    error: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ''
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    helper: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text',
      description: 'Set a helper text on the bottom-left corner of the field.'
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text',
      description: 'Set a label on the top-left corner of the field.'
    },
    visualHint: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text',
      description: 'Set a visual hint on the bottom-right corner of the field.'
    }
  }),
  args: {
    error: '',
    label: '<label slot="label">Description</label>',
    visualHint: '<ods-text slot="visual-hint" preset="caption">0/100</ods-text>',
    content: '<ods-input type="text" placeholder="Placeholder" clearable></ods-input>',
    helper: '<ods-text slot="helper" preset="caption">A little helper text</ods-text>'
  }
}`,...(M=(q=r.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var $,F,G;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-form-field error="Error message">
  <label for="form-field-overview" slot="label">
    Description
  </label>

  <ods-textarea id="form-field-overview" placeholder="Placeholder" is-resizable="true"></ods-textarea>

  <ods-text slot="helper" preset="caption">
    Helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="caption">
    0/200
  </ods-text>
</ods-form-field>
  \`
}`,...(G=(F=l.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var V,z,B;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>\`
}`,...(B=(z=a.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var N,W,X;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field error="Wrong format">
  <label for="form-field-input-error" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-error" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="caption">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="caption">
    0/100
  </ods-text>
</ods-form-field>
  \`
}`,...(X=(W=n.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,j,I;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input-custom-css" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-custom-css" type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>

<style>
  .my-label {
    color: #b63f81;
  }
</style>
  \`
}`,...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var Q,J,U;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input-label" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-label" type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>
  \`
}`,...(U=(J=d.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Z,K,ee;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input-hint" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-hint" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="visual-hint" preset="caption">
    0/100
  </ods-text>
</ods-form-field>
  \`
}`,...(ee=(K=i.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};var oe,te,re;c.parameters={...c.parameters,docs:{...(oe=c.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input-hint-helper" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-hint-helper" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="caption">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="caption">
    0/100
  </ods-text>
</ods-form-field>
  \`
}`,...(re=(te=c.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var le,ae,ne;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input-tooltip" slot="label">
    <span>
      Description
    </span>

    <ods-icon aria-labelledby="tooltip-demo" id="tooltip-trigger" name="circle-question"></ods-icon>
  </label>

  <ods-input id="form-field-input-tooltip" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-tooltip id="tooltip-demo" trigger-id="tooltip-trigger">
    0/100
  </ods-tooltip>
</ods-form-field>
  \`
}`,...(ne=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,de,ie;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <div class="form-field__checkbox__field">
    <ods-checkbox input-id="checkbox-terms" name="name"></ods-checkbox>

    <label class="form-field__checkbox__field__label" for="checkbox-terms">
      I agree to the terms and conditions
    </label>
  </div>
</ods-form-field>

<style>
  .form-field__checkbox__field {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .form-field__checkbox__field__label {
    color: var(--ods-color-text);
  }
</style>
  \`
}`,...(ie=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ce,me,fe;p.parameters={...p.parameters,docs:{...(ce=p.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-clipboard" slot="label">
    Text to copy
  </label>

  <ods-clipboard id="form-field-clipboard" value="Copy me"></ods-clipboard>
</ods-form-field>
  \`
}`,...(fe=(me=p.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var pe,ue,be;u.parameters={...u.parameters,docs:{...(pe=u.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  decorators: [story => html\`<div style="height: 220px;">\${story()}</div>\`],
  render: () => html\`
<ods-form-field>
  <label for="form-field-combobox" slot="label">
    Choose your flavor
  </label>

  <ods-combobox id="form-field-combobox">
    <ods-combobox-item value="chocolate">
      Chocolate
    </ods-combobox-item>
    <ods-combobox-item value="chocolate-with-nuts">
      Chocolate with nuts
    </ods-combobox-item>
    <ods-combobox-item value="coconut">
      Coconut
    </ods-combobox-item>
    <ods-combobox-item value="light-mint">
      Light mint
    </ods-combobox-item>
    <ods-combobox-item value="mint">
      Mint
    </ods-combobox-item>
    <ods-combobox-item value="strawberry">
      Strawberry
    </ods-combobox-item>
    <ods-combobox-item value="vanilla">
      Vanilla
    </ods-combobox-item>
    <ods-combobox-item value="white-chocolate">
      White chocolate
    </ods-combobox-item>
  </ods-combobox>
</ods-form-field>
  \`
}`,...(be=(ue=u.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var he,xe,ge;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['isHidden'],
  decorators: [story => html\`<div style="height: 350px;">\${story()}</div>\`],
  render: () => html\`
<ods-form-field>
  <label for="form-field-datepicker" slot="label">
    Start date
  </label>

  <ods-datepicker id="form-field-datepicker"></ods-datepicker>

  <script>
    (() => {
      const datepicker = document.querySelector('#form-field-datepicker');
      datepicker.value = new Date();
    })();
  <\/script>
</ods-form-field>
  \`
}`,...(ge=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var _e,ve,ye;h.parameters={...h.parameters,docs:{...(_e=h.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input" slot="label">
    Name
  </label>

  <ods-input id="form-field-input" placeholder="John"></ods-input>
</ods-form-field>
  \`
}`,...(ye=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Ce,Se,He;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-password" slot="label">
    Password
  </label>

  <ods-password id="form-field-password" placeholder="Password" is-clearable></ods-password>
</ods-form-field>
  \`
}`,...(He=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:He.source}}};var we,ke,Ee;g.parameters={...g.parameters,docs:{...(we=g.parameters)==null?void 0:we.docs,source:{originalSource:`{
  tags: ['isHidden'],
  decorators: [story => html\`<div style="height: 250px;">\${story()}</div>\`],
  render: () => html\`
<ods-form-field>
  <label for="form-field-phone-number" slot="label">
    Phone number
  </label>

  <ods-phone-number id="form-field-phone-number" countries="all" is-clearable></ods-phone-number>
</ods-form-field>
  \`
}`,...(Ee=(ke=g.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Ae,Te,De;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-quantity" slot="label">
    Number of CPUs
  </label>

  <ods-quantity id="form-field-quantity" min="0" max="10" value="0"></ods-quantity>
</ods-form-field>
  \`
}`,...(De=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Pe,Re,Oe;v.parameters={...v.parameters,docs:{...(Pe=v.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label slot="label">
    Output file format
  </label>

  <div class="form-field__radio__field">
    <ods-radio input-id="radio-text-format" name="file-format" value="text-format" is-checked></ods-radio>

    <label class="form-field__radio__field__label" for="radio-text-format">
      Text
    </label>
  </div>

  <div class="form-field__radio__field">
    <ods-radio input-id="radio-csv-format" name="file-format" value="csv-format"></ods-radio>

    <label class="form-field__radio__field__label" for="radio-csv-format">
      CSV
    </label>
  </div>

  <div class="form-field__radio__field">
    <ods-radio input-id="radio-html-format" name="file-format" value="html-format"></ods-radio>

    <label class="form-field__radio__field__label" for="radio-html-format">
      HTML
    </label>
  </div>

</ods-form-field>
<style>
  .form-field__radio__field {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .form-field__radio__field__label {
    color: var(--ods-color-text);
  }
</style>
  \`
}`,...(Oe=(Re=v.parameters)==null?void 0:Re.docs)==null?void 0:Oe.source}}};var Le,qe,Me;y.parameters={...y.parameters,docs:{...(Le=y.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <div slot="label">
    <label for="form-field-range">
      Price range
    </label>

    <ods-text class="form-field__range__sub-label" preset="caption">
      Selected values : <span id="range-min-bound">0</span> - <span id="range-max-bound">0</span>€
    </ods-text>
  </div>

  <ods-range id="form-field-range" step="10"></ods-range>

  <script>
    (() => {
      const rangeDualStep = document.querySelector('#form-field-range');
      const minBound = document.querySelector('#range-min-bound');
      const maxBound = document.querySelector('#range-max-bound');

      const updateBounds = () => {
        minBound.textContent = rangeDualStep.value[0];
        maxBound.textContent = rangeDualStep.value[1];
      };

      rangeDualStep.value = [30, 70];
      updateBounds();

      rangeDualStep.addEventListener('odsChange', updateBounds);
    })()
  <\/script>
</ods-form-field>

<style>
  .form-field__range__sub-label {
    display: block;
  }
</style>
  \`
}`,...(Me=(qe=y.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var $e,Fe,Ge;C.parameters={...C.parameters,docs:{...($e=C.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  tags: ['isHidden'],
  decorators: [story => html\`<div style="height: 150px;">\${story()}</div>\`],
  render: () => html\`
<ods-form-field>
  <label for="form-field-select" slot="label">
    Select a Web hosting
  </label>

  <ods-select class="form-field__select__field" id="form-field-select" placeholder="Select">
    <option value="hosting-1">1 vCore 2,4 GHz, 2 Go RAM</option>
    <option value="hosting-2">1 vCore 2,4 GHz, 4 Go RAM</option>
    <option value="hosting-3">2 vCores 2,4 GHz, 8 Go RAM</option>
  </ods-select>
</ods-form-field>

<style>
  .form-field__select__field {
    width: 250px;
  }
</style>
  \`
}`,...(Ge=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var Ve,ze,Be;S.parameters={...S.parameters,docs:{...(Ve=S.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  tags: ['isHidden'],
  decorators: [story => html\`<div style="height: 150px;">\${story()}</div>\`],
  render: () => html\`
<ods-form-field>
  <label slot="label">
    Preferred Operating System
  </label>

  <ods-switch>
    <ods-switch-item value="windows" is-checked>Windows</ods-switch-item>
    <ods-switch-item value="macos">macOS</ods-switch-item>
    <ods-switch-item value="linux">Linux</ods-switch-item>
  </ods-switch>
</ods-form-field>
  \`
}`,...(Be=(ze=S.parameters)==null?void 0:ze.docs)==null?void 0:Be.source}}};var Ne,We,Xe;H.parameters={...H.parameters,docs:{...(Ne=H.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field id="textarea-form-field">
  <label for="form-field-textarea" slot="label">
    Description
  </label>

  <ods-text slot="visual-hint" preset="caption">
    <span id="textarea-character-count">0</span>/<span id="textarea-max-characters">0</span>
  </ods-text>

  <ods-textarea id="form-field-textarea" placeholder="Placeholder" is-resizable="true"></ods-textarea>
</ods-form-field>

<script>
  (() => {
    const MAX_CHARACTERS = 200;
    const formFieldElement = document.querySelector('#textarea-form-field');
    const textareaElement = document.querySelector('#form-field-textarea');
    const characterCountElement = document.querySelector('#textarea-character-count');
    const maxCharactersElement = document.querySelector('#textarea-max-characters');
    let characterCount = 0;

    characterCountElement.textContent = characterCount.toString();
    maxCharactersElement.textContent = MAX_CHARACTERS.toString();

    const updateCharacterCount = (event) => {
      characterCount = event.target.value?.length || 0;
      characterCountElement.textContent = characterCount.toString();

      if (characterCount > MAX_CHARACTERS) {
        textareaElement.hasError = true;
        formFieldElement.error = "Max number of characters exceeded";
      } else {
        textareaElement.removeAttribute("has-error");
        formFieldElement.removeAttribute("error");
      }
    };

    textareaElement.addEventListener('odsChange', updateCharacterCount);
  })();
<\/script>
  \`
}`,...(Xe=(We=H.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,je,Ie;w.parameters={...w.parameters,docs:{...(Ye=w.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  tags: ['isHidden'],
  decorators: [story => html\`<div style="height: 250px;">\${story()}</div>\`],
  render: () => html\`
<ods-form-field>
  <label for="form-field-timepicker" slot="label">
    Starting time
  </label>

  <ods-timepicker id="form-field-timepicker" timezones="all" with-seconds></ods-timepicker>

  <script>
    (() => {
      const timepicker = document.querySelector('#form-field-timepicker');
      timepicker.value = new Date().toLocaleTimeString('fr-FR');
    })();
  <\/script>
</ods-form-field>
  \`
}`,...(Ie=(je=w.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var Qe,Je,Ue;k.parameters={...k.parameters,docs:{...(Qe=k.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-toggle" slot="label">
    Multi-AZ mode
  </label>

  <ods-toggle id="form-field-toggle" with-label></ods-toggle>
</ods-form-field>
  \`
}`,...(Ue=(Je=k.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};const ro=["Demo","Overview","Default","Error","CustomCSS","Label","LabelVisualHint","LabelVisualHintHelper","Tooltip","Checkbox","Clipboard","Combobox","Datepicker","Input","Password","PhoneNumber","Quantity","Radio","Range","Select","Switch","Textarea","Timepicker","Toggle"],io=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:f,Clipboard:p,Combobox:u,CustomCSS:s,Datepicker:b,Default:a,Demo:r,Error:n,Input:h,Label:d,LabelVisualHint:i,LabelVisualHintHelper:c,Overview:l,Password:x,PhoneNumber:g,Quantity:_,Radio:v,Range:y,Select:C,Switch:S,Textarea:H,Timepicker:w,Toggle:k,Tooltip:m,__namedExportsOrder:ro,default:to},Symbol.toStringTag,{value:"Module"}));export{f as C,a as D,n as E,io as F,h as I,d as L,l as O,x as P,_ as Q,v as R,C as S,m as T,p as a,u as b,s as c,i as d,c as e,b as f,g,y as h,S as i,H as j,w as k,k as l};
