import{d as ne}from"./ods-checkbox2-B2XbvOPY.js";import{x as e,o as se,C as n}from"./controls-DX883vx3.js";import{V as ae}from"./validityState-BuENXwQ9.js";const re=ne;re();const oe={title:"ODS Components/Form elements/Checkbox",component:"ods-checkbox"},s={render:a=>e`
    <ods-checkbox
      aria-label="${a.ariaLabel}"
      aria-labelledby="${a.ariaLabelledby}"
      class="my-checkbox-demo"
      has-error="${a.hasError}"
      is-disabled="${a.isDisabled}"
      is-indeterminate="${a.isIndeterminate}"
      is-required="${a.isRequired}"
    ></ods-checkbox>
    ${a.validityState?ae("checkbox",".my-checkbox-demo"):""}
    <style>
      .my-checkbox-demo > input[type="checkbox"]:not(:disabled):checked {
        ${a.customCss}
      }
    </style>`,argTypes:se({ariaLabel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},customCss:{table:{category:n.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set a custom style properties. Example: "background-color: red; border-color: red;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isIndeterminate:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},validityState:{table:{category:n.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isDisabled:!1,isIndeterminate:!1,isRequired:!1,validityState:!1}},r={tags:["isHidden"],render:()=>e`
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
  `},c={tags:["isHidden"],render:()=>e`
<ods-checkbox has-error></ods-checkbox>
  `},d={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
    <ods-checkbox is-checked></ods-checkbox>
  `},i={tags:["isHidden"],render:()=>e`
<ods-checkbox></ods-checkbox>
  `},l={tags:["isHidden"],render:()=>e`
<ods-checkbox is-disabled></ods-checkbox>
  `},m={tags:["isHidden"],render:()=>e`
<ods-checkbox is-disabled is-checked></ods-checkbox>
  `},b={tags:["isHidden"],render:()=>e`
<ods-checkbox is-disabled is-indeterminate></ods-checkbox>
  `},u={tags:["isHidden"],render:()=>e`
  <ods-checkbox input-id="input-id-example" name="name" value="huey"></ods-checkbox>
  <label for="input-id-example">Example</label>
 `},y={tags:["isHidden"],render:()=>e`
<ods-checkbox is-indeterminate></ods-checkbox>
  `},p={tags:["isHidden"],render:()=>e`
<ods-checkbox is-required id="checkbox-validity-state-demo">
</ods-checkbox>
${ae("checkbox","#checkbox-validity-state-demo")}
  `};var h,g,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-checkbox
      aria-label="\${arg.ariaLabel}"
      aria-labelledby="\${arg.ariaLabelledby}"
      class="my-checkbox-demo"
      has-error="\${arg.hasError}"
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
    hasError: {
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
    hasError: false,
    isDisabled: false,
    isIndeterminate: false,
    isRequired: false,
    validityState: false
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var k,f,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 5px;">
    <ods-checkbox input-id="alignment" value="alignment"></ods-checkbox>
    <label for="alignment" style="font-size: 2rem;">Alignment</label>
    <ods-checkbox input-id="alignment2" value="alignment2"></ods-checkbox>
    <label for="alignment2" style="">Alignment2</label>
  </div>
 \`
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,O,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(O=o.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var T,E,H;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-checked></ods-checkbox>
  \`
}`,...(H=(E=t.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var R,V,$;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox has-error></ods-checkbox>
  \`
}`,...($=(V=c.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var D,L,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
    <ods-checkbox is-checked></ods-checkbox>
  \`
}`,...(A=(L=d.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var I,_,q;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox></ods-checkbox>
  \`
}`,...(q=(_=i.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var G,N,Y;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-disabled></ods-checkbox>
  \`
}`,...(Y=(N=l.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var j,F,z;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-disabled is-checked></ods-checkbox>
  \`
}`,...(z=(F=m.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var w,M,P;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-disabled is-indeterminate></ods-checkbox>
  \`
}`,...(P=(M=b.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var B,J,K;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
  <ods-checkbox input-id="input-id-example" name="name" value="huey"></ods-checkbox>
  <label for="input-id-example">Example</label>
 \`
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-indeterminate></ods-checkbox>
  \`
}`,...(W=(U=y.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-checkbox is-required id="checkbox-validity-state-demo">
</ods-checkbox>
\${ValidityStateTemplate('checkbox', '#checkbox-validity-state-demo')}
  \`
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const te=["Demo","Alignment","CustomCSS","Checked","Error","Overview","Default","Disabled","DisabledChecked","DisabledIndeterminate","InputId","Indeterminate","ValidityState"],le=Object.freeze(Object.defineProperty({__proto__:null,Alignment:r,Checked:t,CustomCSS:o,Default:i,Demo:s,Disabled:l,DisabledChecked:m,DisabledIndeterminate:b,Error:c,Indeterminate:y,InputId:u,Overview:d,ValidityState:p,__namedExportsOrder:te,default:oe},Symbol.toStringTag,{value:"Module"}));export{r as A,le as C,i as D,c as E,u as I,d as O,p as V,o as a,t as b,l as c,m as d,b as e,y as f};
