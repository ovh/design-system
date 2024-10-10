import{x as e}from"./lit-html-D-ZEPr28.js";import{o as k}from"./unsafe-html-HR6uCwaW.js";import{o as Xe,C as r}from"./controls-DpsgTNdU.js";var E=Object.freeze,Ye=Object.defineProperty,w=(t,We)=>E(Ye(t,"raw",{value:E(We||t.slice())})),A,D,P,T;const je={title:"ODS Components/Form elements/Form Field",component:"ods-form-field"},o={render:t=>e`
  <ods-form-field error="${t.error}">
    ${k(t.label)}
    ${k(t.visualHint)}
    ${k(t.content)}
    ${k(t.helper)}
  </ods-form-field>
  `,argTypes:Xe({content:{table:{category:r.slot,defaultValue:{summary:"ø"}},control:"text"},error:{table:{category:r.general,defaultValue:{summary:""},type:{summary:"string"}},control:"text"},helper:{table:{category:r.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a helper text on the bottom-left corner of the field."},label:{table:{category:r.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a label on the top-left corner of the field."},visualHint:{table:{category:r.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a visual hint on the bottom-right corner of the field."}}),args:{error:"",label:'<label slot="label">Description</label>',visualHint:'<ods-text slot="visual-hint" preset="span">0/100</ods-text>',content:'<ods-input type="text" placeholder="Placeholder" clearable></ods-input>',helper:'<ods-text slot="helper" preset="span">A little helper text</ods-text>'}},l={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-form-field error="Error message">
  <label for="form-field-overview" slot="label">
    Description
  </label>

  <ods-textarea id="form-field-overview" placeholder="Placeholder" is-resizable="true"></ods-textarea>

  <ods-text slot="helper" preset="span">
    Helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/200
  </ods-text>
</ods-form-field>
  `},n={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>`},a={tags:["isHidden"],render:()=>e`
<ods-form-field error="Wrong format">
  <label for="form-field-input-error" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-error" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="span">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
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

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  `},c={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-input-hint-helper" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-hint-helper" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="span">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  `},f={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-input-tooltip" slot="label">
    <span>
      Description
    </span>

    <ods-icon id="tooltip-trigger" name="circle-question"></ods-icon>
  </label>

  <ods-input id="form-field-input-tooltip" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-tooltip trigger-id="tooltip-trigger">
    0/100
  </ods-tooltip>
</ods-form-field>
  `},m={tags:["isHidden"],render:()=>e`
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
  `},p={tags:["isHidden"],decorators:[t=>e`<div style="height: 350px;">${t()}</div>`],render:()=>e(A||(A=w([`
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
  `])))},u={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-input" slot="label">
    Name
  </label>

  <ods-input id="form-field-input" placeholder="John"></ods-input>
</ods-form-field>
  `},b={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-password" slot="label">
    Password
  </label>

  <ods-password id="form-field-password" placeholder="Password" is-clearable></ods-password>
</ods-form-field>
  `},h={tags:["isHidden"],decorators:[t=>e`<div style="height: 250px;">${t()}</div>`],render:()=>e`
<ods-form-field>
  <label for="form-field-phone-number" slot="label">
    Phone number
  </label>

  <ods-phone-number id="form-field-phone-number" countries="all" is-clearable></ods-phone-number>
</ods-form-field>
  `},g={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-quantity" slot="label">
    Number of CPUs
  </label>

  <ods-quantity id="form-field-quantity" min="0" max="10" value="0"></ods-quantity>
</ods-form-field>
  `},x={tags:["isHidden"],render:()=>e`
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
  `},_={tags:["isHidden"],render:()=>e(D||(D=w([`
<ods-form-field>
  <div slot="label">
    <label for="form-field-range">
      Price range
    </label>

    <ods-text class="form-field__range__sub-label" preset="span">
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

  .form-field__range__sub-label::part(text) {
    color: var(--ods-color-text);
    font-size: 12px;
  }
</style>
  `])))},v={tags:["isHidden"],decorators:[t=>e`<div style="height: 150px;">${t()}</div>`],render:()=>e`
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
  `},y={tags:["isHidden"],decorators:[t=>e`<div style="height: 150px;">${t()}</div>`],render:()=>e`
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
  `},S={tags:["isHidden"],render:()=>e(P||(P=w([`
<ods-form-field id="textarea-form-field">
  <label for="form-field-textarea" slot="label">
    Description
  </label>

  <ods-text slot="visual-hint" preset="span">
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
      characterCount = event.target.value.length;
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
  `])))},C={tags:["isHidden"],decorators:[t=>e`<div style="height: 250px;">${t()}</div>`],render:()=>e(T||(T=w([`
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
  `])))},H={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-toggle" slot="label">
    Multi-AZ mode
  </label>

  <ods-toggle id="form-field-toggle" with-label></ods-toggle>
</ods-form-field>
  `};var R,O,q;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    visualHint: '<ods-text slot="visual-hint" preset="span">0/100</ods-text>',
    content: '<ods-input type="text" placeholder="Placeholder" clearable></ods-input>',
    helper: '<ods-text slot="helper" preset="span">A little helper text</ods-text>'
  }
}`,...(q=(O=o.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var L,M,$;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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

  <ods-text slot="helper" preset="span">
    Helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/200
  </ods-text>
</ods-form-field>
  \`
}`,...($=(M=l.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var F,G,z;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>\`
}`,...(z=(G=n.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var V,B,N;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field error="Wrong format">
  <label for="form-field-input-error" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-error" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="span">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  \`
}`,...(N=(B=a.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var W,X,Y;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=s.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var j,I,Q;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input-label" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-label" type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>
  \`
}`,...(Q=(I=d.parameters)==null?void 0:I.docs)==null?void 0:Q.source}}};var J,U,Z;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input-hint" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-hint" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  \`
}`,...(Z=(U=i.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var K,ee,te;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input-hint-helper" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-hint-helper" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="span">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  \`
}`,...(te=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,oe,le;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input-tooltip" slot="label">
    <span>
      Description
    </span>

    <ods-icon id="tooltip-trigger" name="circle-question"></ods-icon>
  </label>

  <ods-input id="form-field-input-tooltip" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-tooltip trigger-id="tooltip-trigger">
    0/100
  </ods-tooltip>
</ods-form-field>
  \`
}`,...(le=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ne,ae,se;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var de,ie,ce;p.parameters={...p.parameters,docs:{...(de=p.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var fe,me,pe;u.parameters={...u.parameters,docs:{...(fe=u.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input" slot="label">
    Name
  </label>

  <ods-input id="form-field-input" placeholder="John"></ods-input>
</ods-form-field>
  \`
}`,...(pe=(me=u.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,be,he;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-password" slot="label">
    Password
  </label>

  <ods-password id="form-field-password" placeholder="Password" is-clearable></ods-password>
</ods-form-field>
  \`
}`,...(he=(be=b.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ge,xe,_e;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(_e=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:_e.source}}};var ve,ye,Se;g.parameters={...g.parameters,docs:{...(ve=g.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-quantity" slot="label">
    Number of CPUs
  </label>

  <ods-quantity id="form-field-quantity" min="0" max="10" value="0"></ods-quantity>
</ods-form-field>
  \`
}`,...(Se=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Ce,He,ke;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(ke=(He=x.parameters)==null?void 0:He.docs)==null?void 0:ke.source}}};var we,Ee,Ae;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <div slot="label">
    <label for="form-field-range">
      Price range
    </label>

    <ods-text class="form-field__range__sub-label" preset="span">
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

  .form-field__range__sub-label::part(text) {
    color: var(--ods-color-text);
    font-size: 12px;
  }
</style>
  \`
}`,...(Ae=(Ee=_.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var De,Pe,Te;v.parameters={...v.parameters,docs:{...(De=v.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Te=(Pe=v.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};var Re,Oe,qe;y.parameters={...y.parameters,docs:{...(Re=y.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(qe=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Le,Me,$e;S.parameters={...S.parameters,docs:{...(Le=S.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field id="textarea-form-field">
  <label for="form-field-textarea" slot="label">
    Description
  </label>

  <ods-text slot="visual-hint" preset="span">
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
      characterCount = event.target.value.length;
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
}`,...($e=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:$e.source}}};var Fe,Ge,ze;C.parameters={...C.parameters,docs:{...(Fe=C.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(ze=(Ge=C.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Ve,Be,Ne;H.parameters={...H.parameters,docs:{...(Ve=H.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-toggle" slot="label">
    Multi-AZ mode
  </label>

  <ods-toggle id="form-field-toggle" with-label></ods-toggle>
</ods-form-field>
  \`
}`,...(Ne=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:Ne.source}}};const Ie=["Demo","Overview","Default","Error","CustomCSS","Label","LabelVisualHint","LabelVisualHintHelper","Tooltip","Checkbox","Datepicker","Input","Password","PhoneNumber","Quantity","Radio","Range","Select","Switch","Textarea","Timepicker","Toggle"],Ze=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:m,CustomCSS:s,Datepicker:p,Default:n,Demo:o,Error:a,Input:u,Label:d,LabelVisualHint:i,LabelVisualHintHelper:c,Overview:l,Password:b,PhoneNumber:h,Quantity:g,Radio:x,Range:_,Select:v,Switch:y,Textarea:S,Timepicker:C,Toggle:H,Tooltip:f,__namedExportsOrder:Ie,default:je},Symbol.toStringTag,{value:"Module"}));export{m as C,p as D,a as E,Ze as F,u as I,d as L,l as O,b as P,g as Q,x as R,v as S,f as T,s as a,n as b,i as c,c as d,h as e,_ as f,y as g,S as h,C as i,H as j};
