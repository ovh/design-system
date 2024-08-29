import{x as e}from"./lit-html-D-ZEPr28.js";import{o as f}from"./unsafe-html-HR6uCwaW.js";import{o as W,C as o}from"./control-C1r2wu67.js";const k={title:"ODS Components/Form elements/Form Field",component:"ods-form-field"},r={render:t=>e`
  <ods-form-field class="demo" error="${t.error}">
    ${f(t.label)}
    ${f(t.visualHint)}
    ${f(t.content)}
    ${f(t.helper)}
  </ods-form-field>
  <style>
    .demo ods-text[slot="label"],
    .demo ods-text[slot="helper"],
    .demo ods-text[slot="visual-hint"] {
      color: #4d5592;
    }
  </style>
    `,argTypes:W({content:{table:{category:o.slot,defaultValue:{summary:"ø"}},control:"text"},error:{table:{category:o.general,defaultValue:{summary:""},type:{summary:"string"}},control:"text"},helper:{table:{category:o.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a helper text on the bottom-left corner of the field."},label:{table:{category:o.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a label on the top-left corner of the field."},visualHint:{table:{category:o.slot,defaultValue:{summary:"ø"}},control:"text",description:"Set a visual hint on the bottom-right corner of the field."}}),args:{error:"",label:'<ods-text slot="label" preset="label">Description</ods-text>',visualHint:'<ods-text slot="visual-hint" preset="span">0/100</ods-text>',content:'<ods-input type="text" placeholder="Placeholder" clearable></ods-input>',helper:'<ods-text slot="helper" preset="span">A little helper text</ods-text>'}},l={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-form-field error="Error message">
  <ods-text id="form-field__overview-label" slot="label" preset="label">
    Description
  </ods-text>

  <ods-input id="form-field__overview-input" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text id="form-field__overview-helper" slot="helper" preset="caption">
    Helper text
  </ods-text>
</ods-form-field>
<style>
  #form-field__overview-label,
  #form-field__overview-helper {
    color: var(--ods-color-text);
  }
  #form-field__overview-helper::part(text) {
    display: inline-flex;
  }
</style>
  `},s={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>`},n={tags:["isHidden"],render:()=>e`
<ods-form-field error="Wrong format.">
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="span">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  `},a={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <ods-text slot="label" class="my-label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>

<style>
  .my-label {
    color: #b63f81;
  }
</style>
  `},d={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>
  `},i={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  `},p={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="span">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  `},c={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <div slot="label">
    <ods-text preset="label">
      Description
    </ods-text>

    <ods-icon id="tooltip-trigger" name="circle-question"></ods-icon>
  </div>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-tooltip trigger-id="tooltip-trigger">
    0/100
  </ods-tooltip>
</ods-form-field>
  `},m={tags:["isHidden"],render:()=>e`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/200
  </ods-text>

  <ods-textarea placeholder="Placeholder" is-resizable="true"></ods-textarea>
</ods-form-field>
  `};var u,x,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-form-field class="demo" error="\${arg.error}">
    \${unsafeHTML(arg.label)}
    \${unsafeHTML(arg.visualHint)}
    \${unsafeHTML(arg.content)}
    \${unsafeHTML(arg.helper)}
  </ods-form-field>
  <style>
    .demo ods-text[slot="label"],
    .demo ods-text[slot="helper"],
    .demo ods-text[slot="visual-hint"] {
      color: #4d5592;
    }
  </style>
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
    label: '<ods-text slot="label" preset="label">Description</ods-text>',
    visualHint: '<ods-text slot="visual-hint" preset="span">0/100</ods-text>',
    content: '<ods-input type="text" placeholder="Placeholder" clearable></ods-input>',
    helper: '<ods-text slot="helper" preset="span">A little helper text</ods-text>'
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,g,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-form-field error="Error message">
  <ods-text id="form-field__overview-label" slot="label" preset="label">
    Description
  </ods-text>

  <ods-input id="form-field__overview-input" type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text id="form-field__overview-helper" slot="helper" preset="caption">
    Helper text
  </ods-text>
</ods-form-field>
<style>
  #form-field__overview-label,
  #form-field__overview-helper {
    color: var(--ods-color-text);
  }
  #form-field__overview-helper::part(text) {
    display: inline-flex;
  }
</style>
  \`
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,H,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>\`
}`,...(_=(H=s.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var O,D,S;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field error="Wrong format.">
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="span">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  \`
}`,...(S=(D=n.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var T,C,P;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <ods-text slot="label" class="my-label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>

<style>
  .my-label {
    color: #b63f81;
  }
</style>
  \`
}`,...(P=(C=a.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var L,w,V;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>
</ods-form-field>
  \`
}`,...(V=(w=d.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var A,E,R;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  \`
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var F,$,G;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-text slot="helper" preset="span">
    A little helper text
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/100
  </ods-text>
</ods-form-field>
  \`
}`,...(G=($=p.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var N,Y,M;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <div slot="label">
    <ods-text preset="label">
      Description
    </ods-text>

    <ods-icon id="tooltip-trigger" name="circle-question"></ods-icon>
  </div>

  <ods-input type="text" placeholder="Placeholder" clearable></ods-input>

  <ods-tooltip trigger-id="tooltip-trigger">
    0/100
  </ods-tooltip>
</ods-form-field>
  \`
}`,...(M=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var z,j,q;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-form-field>
  <ods-text slot="label" preset="label">
    Description
  </ods-text>

  <ods-text slot="visual-hint" preset="span">
    0/200
  </ods-text>

  <ods-textarea placeholder="Placeholder" is-resizable="true"></ods-textarea>
</ods-form-field>
  \`
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const B=["Demo","Overview","Default","Error","CustomCSS","Label","LabelVisualHint","LabelVisualHintHelper","Tooltip","Textarea"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:a,Default:s,Demo:r,Error:n,Label:d,LabelVisualHint:i,LabelVisualHintHelper:p,Overview:l,Textarea:m,Tooltip:c,__namedExportsOrder:B,default:k},Symbol.toStringTag,{value:"Module"}));export{a as C,s as D,n as E,Q as F,d as L,l as O,c as T,i as a,p as b,m as c};
