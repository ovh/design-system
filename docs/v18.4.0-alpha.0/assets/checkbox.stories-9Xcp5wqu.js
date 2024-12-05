import{x as e}from"./lit-html-D-ZEPr28.js";import{V as W}from"./validityState-ExJ3RVbh.js";import{o as X,C as n}from"./controls-D697y8_r.js";const Z={title:"ODS Components/Form elements/Checkbox",component:"ods-checkbox"},s={render:a=>e`
    <ods-checkbox
      aria-label="${a.ariaLabel}"
      aria-labelledby="${a.ariaLabelledby}"
      class="my-checkbox-demo"
      is-disabled="${a.isDisabled}"
      is-indeterminate="${a.isIndeterminate}"
      is-required="${a.isRequired}"
    ></ods-checkbox>
    ${a.validityState?W("checkbox",".my-checkbox-demo"):""}
    <style>
      .my-checkbox-demo > input[type="checkbox"]:not(:disabled):checked {
        ${a.customCss}
      }
    </style>`,argTypes:X({ariaLabel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "background-color: red; border-color: red;"'},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isIndeterminate:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},validityState:{table:{category:n.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{isDisabled:!1,isIndeterminate:!1,isRequired:!1,validityState:!1}},o={tags:["isHidden"],render:()=>e`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-checkbox input-id="alignment" value="alignment"></ods-checkbox>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>
    <ods-checkbox input-id="alignment2" value="alignment2"></ods-checkbox>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 `},t={tags:["isHidden"],render:()=>e`
<ods-checkbox class="my-checkbox"></ods-checkbox>
<style>
  .my-checkbox > input[type="checkbox"]:not(:disabled):checked {
    background-color: red;
    border-color: red;
  }
</style>
  `},r={tags:["isHidden"],render:()=>e`
<ods-checkbox is-checked></ods-checkbox>
  `},c={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
    <ods-checkbox is-checked></ods-checkbox>
  `},d={tags:["isHidden"],render:()=>e`
<ods-checkbox></ods-checkbox>
  `},i={tags:["isHidden"],render:()=>e`
<ods-checkbox is-disabled></ods-checkbox>
  `},l={tags:["isHidden"],render:()=>e`
<ods-checkbox is-disabled is-checked></ods-checkbox>
  `},m={tags:["isHidden"],render:()=>e`
<ods-checkbox is-disabled is-indeterminate></ods-checkbox>
  `},b={tags:["isHidden"],render:()=>e`
  <ods-checkbox input-id="input-id-example" name="name" value="huey"></ods-checkbox>
  <label for="input-id-example">Example</label>
 `},u={tags:["isHidden"],render:()=>e`
<ods-checkbox is-indeterminate></ods-checkbox>
  `},y={tags:["isHidden"],render:()=>e`
<ods-checkbox is-required id="checkbox-validity-state-demo">
</ods-checkbox>
${W("checkbox","#checkbox-validity-state-demo")}
  `};var p,h,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-checkbox
      aria-label="\${arg.ariaLabel}"
      aria-labelledby="\${arg.ariaLabelledby}"
      class="my-checkbox-demo"
      is-disabled="\${arg.isDisabled}"
      is-indeterminate="\${arg.isIndeterminate}"
      is-required="\${arg.isRequired}"
    ></ods-checkbox>
    \${arg.validityState ? ValidityStateTemplate('checkbox', '.my-checkbox-demo') : ''}
    <style>
      .my-checkbox-demo > input[type="checkbox"]:not(:disabled):checked {
        \${arg.customCss}
      }
    </style>\`;
  },
  argTypes: orderControls({
    ariaLabel: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    ariaLabelledby: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'Set a custom style properties. Example: "background-color: red; border-color: red;"'
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isIndeterminate: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isRequired: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      }
    },
    validityState: {
      table: {
        category: CONTROL_CATEGORY.validation,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState'
    }
  }),
  args: {
    isDisabled: false,
    isIndeterminate: false,
    isRequired: false,
    validityState: false
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,k,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-checkbox input-id="alignment" value="alignment"></ods-checkbox>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>
    <ods-checkbox input-id="alignment2" value="alignment2"></ods-checkbox>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 \`
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var C,S,O;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox class="my-checkbox"></ods-checkbox>
<style>
  .my-checkbox > input[type="checkbox"]:not(:disabled):checked {
    background-color: red;
    border-color: red;
  }
</style>
  \`
}`,...(O=(S=t.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var v,T,H;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-checked></ods-checkbox>
  \`
}`,...(H=(T=r.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var R,V,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-checkbox is-checked></ods-checkbox>
  \`
}`,...(D=(V=c.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var L,$,A;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox></ods-checkbox>
  \`
}`,...(A=($=d.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var I,_,E;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-disabled></ods-checkbox>
  \`
}`,...(E=(_=i.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var q,G,N;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-disabled is-checked></ods-checkbox>
  \`
}`,...(N=(G=l.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Y,j,F;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-disabled is-indeterminate></ods-checkbox>
  \`
}`,...(F=(j=m.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var z,w,M;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <ods-checkbox input-id="input-id-example" name="name" value="huey"></ods-checkbox>
  <label for="input-id-example">Example</label>
 \`
}`,...(M=(w=b.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var P,B,J;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-indeterminate></ods-checkbox>
  \`
}`,...(J=(B=u.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-required id="checkbox-validity-state-demo">
</ods-checkbox>
\${ValidityStateTemplate('checkbox', '#checkbox-validity-state-demo')}
  \`
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ee=["Demo","Alignment","CustomCSS","Checked","Overview","Default","Disabled","DisabledChecked","DisabledIndeterminate","InputId","Indeterminate","ValidityState"],oe=Object.freeze(Object.defineProperty({__proto__:null,Alignment:o,Checked:r,CustomCSS:t,Default:d,Demo:s,Disabled:i,DisabledChecked:l,DisabledIndeterminate:m,Indeterminate:u,InputId:b,Overview:c,ValidityState:y,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{o as A,oe as C,d as D,b as I,c as O,y as V,t as a,r as b,i as c,l as d,m as e,u as f};
