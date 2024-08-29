import{x as e}from"./lit-html-D-ZEPr28.js";import{o as J,C as a}from"./control-C1r2wu67.js";const K={title:"ODS Components/Form elements/Checkbox",component:"ods-checkbox"},n={render:s=>e`
    <ods-checkbox
      ariaLabel="${s.ariaLabel}"
      ariaLabelledby="${s.ariaLabelledby}"
      class="my-checkbox-demo"
      is-disabled="${s.isDisabled}"
      is-indeterminate="${s.isIndeterminate}"
    ></ods-checkbox>
    <style>
      .my-checkbox-demo > input[type="checkbox"]:not(:disabled):checked {
        ${s.customCss}
      }
    </style>`,argTypes:J({ariaLabel:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:a.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:a.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "background-color: red; border-color: red;"'},isDisabled:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isIndeterminate:{table:{category:a.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"}}),args:{isDisabled:!1,isIndeterminate:!1}},r={tags:["isHidden"],render:()=>e`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-checkbox input-id="alignment" value="alignment"></ods-checkbox>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>
    <ods-checkbox input-id="alignment2" value="alignment2"></ods-checkbox>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 `},o={tags:["isHidden"],render:()=>e`
<ods-checkbox class="my-checkbox"></ods-checkbox>
<style>
  .my-checkbox > input[type="checkbox"]:not(:disabled):checked {
    background-color: red;
    border-color: red;
  }
</style>
  `},t={tags:["isHidden"],render:()=>e`
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
  `};var p,h,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => html\`
    <ods-checkbox
      ariaLabel="\${args.ariaLabel}"
      ariaLabelledby="\${args.ariaLabelledby}"
      class="my-checkbox-demo"
      is-disabled="\${args.isDisabled}"
      is-indeterminate="\${args.isIndeterminate}"
    ></ods-checkbox>
    <style>
      .my-checkbox-demo > input[type="checkbox"]:not(:disabled):checked {
        \${args.customCss}
      }
    </style>\`,
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
    }
  }),
  args: {
    isDisabled: false,
    isIndeterminate: false
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,x,k;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-checkbox input-id="alignment" value="alignment"></ods-checkbox>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>
    <ods-checkbox input-id="alignment2" value="alignment2"></ods-checkbox>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 \`
}`,...(k=(x=r.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var f,C,O;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var S,H,D;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-checked></ods-checkbox>
  \`
}`,...(D=(H=t.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var L,v,I;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-checkbox is-checked></ods-checkbox>
  \`
}`,...(I=(v=c.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var T,A,R;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox></ods-checkbox>
  \`
}`,...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var _,E,V;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-disabled></ods-checkbox>
  \`
}`,...(V=(E=i.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var $,G,N;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(M=(w=b.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var P,q,B;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-indeterminate></ods-checkbox>
  \`
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const Q=["Demo","Alignment","CustomCSS","Checked","Overview","Default","Disabled","DisabledChecked","DisabledIndeterminate","InputId","Indeterminate"],X=Object.freeze(Object.defineProperty({__proto__:null,Alignment:r,Checked:t,CustomCSS:o,Default:d,Demo:n,Disabled:i,DisabledChecked:l,DisabledIndeterminate:m,Indeterminate:u,InputId:b,Overview:c,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{r as A,X as C,d as D,b as I,c as O,o as a,t as b,i as c,l as d,m as e,u as f};
