import{d as Ie}from"./ods-form-field2-BDYkM6lU.js";import{x as e,o as Qe,C as t}from"./controls-DX883vx3.js";import{o as w}from"./unsafe-html-VJzuFJfF.js";const Je=Ie;var A=Object.freeze,Ue=Object.defineProperty,E=(o,eo)=>A(Ue(o,"raw",{value:A(o.slice())})),T,D,P,R;Je();const Ze={title:"ODS Components/Form elements/Form Field",component:"ods-form-field"},r={render:o=>e`
  <ods-form-field error="${o.error}">
    ${w(o.label)}
    ${w(o.visualHint)}
    ${w(o.content)}
    ${w(o.helper)}
  </ods-form-field>
  `,argTypes:Qe({content:{table:{category:t.slot,defaultValue:{summary:"ø"}},control:"text"},error:{table:{category:t.general,defaultValue:{summary:""},type:{summary:"string"}},control:"text"},helper:{table:{category:t.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a helper text on the bottom-left corner of the field."},label:{table:{category:t.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a label on the top-left corner of the field."},visualHint:{table:{category:t.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a visual hint on the bottom-right corner of the field."}}),args:{error:"",label:'<label slot="label">Description</label>',visualHint:'<ods-text slot="visual-hint" preset="caption">0/100</ods-text>',content:'<ods-input type="text" placeholder="Placeholder" clearable></ods-input>',helper:'<ods-text slot="helper" preset="caption">A little helper text</ods-text>'}},l={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
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
  `},p={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-clipboard" slot="label">
    Text to copy
  </label>

  <ods-clipboard id="form-field-clipboard" value="Copy me"></ods-clipboard>
</ods-form-field>
  `},u={tags:["isHidden"],decorators:[o=>e`<div style="height: 350px;">${o()}</div>`],render:()=>e(T||(T=E([`
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
  `])))},b={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-input" slot="label">
    Name
  </label>

  <ods-input id="form-field-input" placeholder="John"></ods-input>
</ods-form-field>
  `},h={tags:["isHidden"],render:()=>e`
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
  `},x={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <label for="form-field-quantity" slot="label">
    Number of CPUs
  </label>

  <ods-quantity id="form-field-quantity" min="0" max="10" value="0"></ods-quantity>
</ods-form-field>
  `},_={tags:["isHidden"],render:()=>e`
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
  `},v={tags:["isHidden"],render:()=>e(D||(D=E([`
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
  `])))},y={tags:["isHidden"],decorators:[o=>e`<div style="height: 150px;">${o()}</div>`],render:()=>e`
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
  `},C={tags:["isHidden"],render:()=>e(P||(P=E([`
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
  `])))},H={tags:["isHidden"],decorators:[o=>e`<div style="height: 250px;">${o()}</div>`],render:()=>e(R||(R=E([`
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
  `};var O,q,L;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(q=r.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var M,$,F;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=($=l.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var G,V,z;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>\`
}`,...(z=(V=a.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,N,W;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(N=n.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var X,Y,j;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(j=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var I,Q,J;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input-label" slot="label">
    Description
  </label>

  <ods-input id="form-field-input-label" type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>
  \`
}`,...(J=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var U,Z,K;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var ee,oe,te;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,le,ae;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ne,se,de;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(de=(se=m.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ie,ce,fe;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-clipboard" slot="label">
    Text to copy
  </label>

  <ods-clipboard id="form-field-clipboard" value="Copy me"></ods-clipboard>
</ods-form-field>
  \`
}`,...(fe=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:fe.source}}};var me,pe,ue;u.parameters={...u.parameters,docs:{...(me=u.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,he,ge;b.parameters={...b.parameters,docs:{...(be=b.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-input" slot="label">
    Name
  </label>

  <ods-input id="form-field-input" placeholder="John"></ods-input>
</ods-form-field>
  \`
}`,...(ge=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var xe,_e,ve;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-password" slot="label">
    Password
  </label>

  <ods-password id="form-field-password" placeholder="Password" is-clearable></ods-password>
</ods-form-field>
  \`
}`,...(ve=(_e=h.parameters)==null?void 0:_e.docs)==null?void 0:ve.source}}};var ye,Se,Ce;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ce=(Se=g.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var He,ke,we;x.parameters={...x.parameters,docs:{...(He=x.parameters)==null?void 0:He.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-quantity" slot="label">
    Number of CPUs
  </label>

  <ods-quantity id="form-field-quantity" min="0" max="10" value="0"></ods-quantity>
</ods-form-field>
  \`
}`,...(we=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};var Ee,Ae,Te;_.parameters={..._.parameters,docs:{...(Ee=_.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Te=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var De,Pe,Re;v.parameters={...v.parameters,docs:{...(De=v.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Re=(Pe=v.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Oe,qe,Le;y.parameters={...y.parameters,docs:{...(Oe=y.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Le=(qe=y.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var Me,$e,Fe;S.parameters={...S.parameters,docs:{...(Me=S.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Fe=($e=S.parameters)==null?void 0:$e.docs)==null?void 0:Fe.source}}};var Ge,Ve,ze;C.parameters={...C.parameters,docs:{...(Ge=C.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(ze=(Ve=C.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var Be,Ne,We;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(We=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};var Xe,Ye,je;k.parameters={...k.parameters,docs:{...(Xe=k.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <label for="form-field-toggle" slot="label">
    Multi-AZ mode
  </label>

  <ods-toggle id="form-field-toggle" with-label></ods-toggle>
</ods-form-field>
  \`
}`,...(je=(Ye=k.parameters)==null?void 0:Ye.docs)==null?void 0:je.source}}};const Ke=["Demo","Overview","Default","Error","CustomCSS","Label","LabelVisualHint","LabelVisualHintHelper","Tooltip","Checkbox","Clipboard","Datepicker","Input","Password","PhoneNumber","Quantity","Radio","Range","Select","Switch","Textarea","Timepicker","Toggle"],lo=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:m,Clipboard:p,CustomCSS:s,Datepicker:u,Default:a,Demo:r,Error:n,Input:b,Label:d,LabelVisualHint:i,LabelVisualHintHelper:c,Overview:l,Password:h,PhoneNumber:g,Quantity:x,Radio:_,Range:v,Select:y,Switch:S,Textarea:C,Timepicker:H,Toggle:k,Tooltip:f,__namedExportsOrder:Ke,default:Ze},Symbol.toStringTag,{value:"Module"}));export{m as C,a as D,n as E,lo as F,b as I,d as L,l as O,h as P,x as Q,_ as R,y as S,f as T,p as a,s as b,i as c,c as d,u as e,g as f,v as g,S as h,C as i,H as j,k};
