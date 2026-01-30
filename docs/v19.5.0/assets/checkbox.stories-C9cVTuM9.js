import{e}from"./index-jIWwRBLr.js";import{C as n,a as V,b as o,c as l}from"./CheckboxLabel-D12B56tG.js";import{F as x}from"./FormFieldLabelSubLabel-DCAb65DU.js";import{T as q,a as z}from"./Text-CW33_IfE.js";import{e as B,o as H,C as h}from"./controls-BtiQQn1l.js";const J={argTypes:B(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:l,subcomponents:{CheckboxControl:o,CheckboxGroup:V,CheckboxLabel:n},title:"React Components/Checkbox"},t={render:r=>e.createElement(l,{disabled:r.disabled,invalid:r.invalid},e.createElement(o,null),e.createElement(n,null,r.label)),argTypes:H({disabled:{table:{category:h.general},control:"boolean"},invalid:{table:{category:h.general},control:"boolean"},label:{table:{category:h.slot},control:"text"}}),args:{label:"My checkbox"}},a={globals:{imports:"import { Checkbox, CheckboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(l,null,e.createElement(o,null))},c={globals:{imports:"import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(l,{disabled:!0},e.createElement(o,null),e.createElement(n,null,"Checkbox"))},s={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},r())],globals:{imports:"import { TEXT_PRESET, Checkbox, CheckboxControl, CheckboxLabel, FormField, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(q,{preset:z.label},"Legal considerations:"),e.createElement(x,null,e.createElement(l,null,e.createElement(o,null),e.createElement(n,null,"I agree to the terms and conditions."))),e.createElement(x,null,e.createElement(l,null,e.createElement(o,null),e.createElement(n,null,"I agree to receive marketing communications."))))},d={globals:{imports:"import { Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(V,{defaultValue:["marketing"],name:"acknowledgments"},e.createElement(l,{value:"term"},e.createElement(o,null),e.createElement(n,null,"I agree to the terms and conditions.")),e.createElement(l,{value:"marketing"},e.createElement(o,null),e.createElement(n,null,"I agree to receive marketing communications.")))},b={globals:{imports:"import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(l,{invalid:!0},e.createElement(o,null),e.createElement(n,null,"Checkbox"))},m={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(l,null,e.createElement(o,null),e.createElement(n,null,"Checkbox"))},C={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},r())],globals:{imports:"import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(l,{checked:!1},e.createElement(o,null),e.createElement(n,null,"Unchecked")),e.createElement(l,{checked:!0},e.createElement(o,null),e.createElement(n,null,"Checked")),e.createElement(l,{checked:"indeterminate"},e.createElement(o,null),e.createElement(n,null,"Indeterminate")))},i={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"12px"}},e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"16px",alignItems:"center"}},e.createElement(l,null,e.createElement(o,null),e.createElement(n,null,"Unchecked")),e.createElement(l,{disabled:!0},e.createElement(o,null),e.createElement(n,null,"Unchecked disabled"))),e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"16px",alignItems:"center"}},e.createElement(l,{checked:!0},e.createElement(o,null),e.createElement(n,null,"Checked")),e.createElement(l,{checked:!0,disabled:!0},e.createElement(o,null),e.createElement(n,null,"Checked disabled"))),e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"16px",alignItems:"center"}},e.createElement(l,{checked:"indeterminate"},e.createElement(o,null),e.createElement(n,null,"Indeterminate")),e.createElement(l,{checked:"indeterminate",disabled:!0},e.createElement(o,null),e.createElement(n,null,"Indeterminate disabled"))))};var k,u,p;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Checkbox disabled={arg.disabled} invalid={arg.invalid}>
      <CheckboxControl />

      <CheckboxLabel>
        {arg.label}
      </CheckboxLabel>
    </Checkbox>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    label: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    }
  }),
  args: {
    label: 'My checkbox'
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,E,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Checkbox, CheckboxControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Checkbox>
      <CheckboxControl />
    </Checkbox>
}`,...(v=(E=a.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var f,L,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Checkbox disabled>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
}`,...(y=(L=c.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var F,T,I;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { TEXT_PRESET, Checkbox, CheckboxControl, CheckboxLabel, FormField, Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Text preset={TEXT_PRESET.label}>
        Legal considerations:
      </Text>

      <FormField>
        <Checkbox>
          <CheckboxControl />

          <CheckboxLabel>
            I agree to the terms and conditions.
          </CheckboxLabel>
        </Checkbox>
      </FormField>

      <FormField>
        <Checkbox>
          <CheckboxControl />

          <CheckboxLabel>
            I agree to receive marketing communications.
          </CheckboxLabel>
        </Checkbox>
      </FormField>
    </>
}`,...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var w,S,O;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <CheckboxGroup defaultValue={['marketing']} name="acknowledgments">
      <Checkbox value="term">
        <CheckboxControl />

        <CheckboxLabel>
          I agree to the terms and conditions.
        </CheckboxLabel>
      </Checkbox>

      <Checkbox value="marketing">
        <CheckboxControl />

        <CheckboxLabel>
          I agree to receive marketing communications.
        </CheckboxLabel>
      </Checkbox>
    </CheckboxGroup>
}`,...(O=(S=d.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var G,_,R;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Checkbox invalid>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
}`,...(R=(_=b.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var D,U,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Checkbox>
      <CheckboxControl />

      <CheckboxLabel>
        Checkbox
      </CheckboxLabel>
    </Checkbox>
}`,...(A=(U=m.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var P,N,X;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Checkbox checked={false}>
        <CheckboxControl />

        <CheckboxLabel>
          Unchecked
        </CheckboxLabel>
      </Checkbox>

      <Checkbox checked={true}>
        <CheckboxControl />

        <CheckboxLabel>
          Checked
        </CheckboxLabel>
      </Checkbox>

      <Checkbox checked="indeterminate">
        <CheckboxControl />

        <CheckboxLabel>
          Indeterminate
        </CheckboxLabel>
      </Checkbox>
    </>
}`,...(X=(N=C.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var Y,M,j;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '12px'
  }}>
      <div style={{
      display: 'flex',
      flexFlow: 'row',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Checkbox>
          <CheckboxControl />
          <CheckboxLabel>Unchecked</CheckboxLabel>
        </Checkbox>
        <Checkbox disabled>
          <CheckboxControl />
          <CheckboxLabel>Unchecked disabled</CheckboxLabel>
        </Checkbox>
      </div>

      <div style={{
      display: 'flex',
      flexFlow: 'row',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Checkbox checked>
          <CheckboxControl />
          <CheckboxLabel>Checked</CheckboxLabel>
        </Checkbox>
        <Checkbox checked disabled>
          <CheckboxControl />
          <CheckboxLabel>Checked disabled</CheckboxLabel>
        </Checkbox>
      </div>

      <div style={{
      display: 'flex',
      flexFlow: 'row',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Checkbox checked="indeterminate">
          <CheckboxControl />
          <CheckboxLabel>Indeterminate</CheckboxLabel>
        </Checkbox>
        <Checkbox checked="indeterminate" disabled>
          <CheckboxControl />
          <CheckboxLabel>Indeterminate disabled</CheckboxLabel>
        </Checkbox>
      </div>
    </div>
}`,...(j=(M=i.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};const K=["Demo","Default","Disabled","InFormField","Group","Invalid","Overview","States","ThemeGenerator"],oe=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Demo:t,Disabled:c,Group:d,InFormField:s,Invalid:b,Overview:m,States:C,ThemeGenerator:i,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{oe as C,a as D,d as G,b as I,m as O,C as S,c as a,s as b};
