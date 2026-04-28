import{e}from"./index-jIWwRBLr.js";import{C as r,a as x,b as o,c as n}from"./index-DaUvfsZM.js";import{F as u}from"./index-B0M5RXeR.js";import{T as J,a as K}from"./Text-CAQM6i-X.js";import{e as Q,o as W,C as k}from"./controls-BtiQQn1l.js";import{s as Z}from"./source-CPEZJ6oD.js";const $={argTypes:Q(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:n,subcomponents:{CheckboxControl:o,CheckboxGroup:x,CheckboxLabel:r},title:"React Components/Checkbox"},a={render:t=>e.createElement(n,{disabled:t.disabled,invalid:t.invalid},e.createElement(o,null),e.createElement(r,null,t.label)),argTypes:W({disabled:{table:{category:k.general},control:"boolean"},invalid:{table:{category:k.general},control:"boolean"},label:{table:{category:k.slot},control:"text"}}),args:{label:"My checkbox"}},l={tags:["!dev"],render:({})=>e.createElement(x,{defaultValue:["marketing"],name:"acknowledgments"},e.createElement(n,{value:"term"},e.createElement(o,null),e.createElement(r,null,"I agree to the terms and conditions.")),e.createElement(n,{value:"marketing"},e.createElement(o,null),e.createElement(r,null,"I agree to receive marketing communications.")))},c={globals:{imports:"import { Checkbox, CheckboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(o,null))},s={globals:{imports:"import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,{disabled:!0},e.createElement(o,null),e.createElement(r,null,"Checkbox"))},d={decorators:[t=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},t())],globals:{imports:"import { TEXT_PRESET, Checkbox, CheckboxControl, CheckboxLabel, FormField, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(J,{preset:K.label},"Legal considerations:"),e.createElement(u,null,e.createElement(n,null,e.createElement(o,null),e.createElement(r,null,"I agree to the terms and conditions."))),e.createElement(u,null,e.createElement(n,null,e.createElement(o,null),e.createElement(r,null,"I agree to receive marketing communications."))))},m={globals:{imports:"import { Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(x,{defaultValue:["marketing"],name:"acknowledgments"},e.createElement(n,{value:"term"},e.createElement(o,null),e.createElement(r,null,"I agree to the terms and conditions.")),e.createElement(n,{value:"marketing"},e.createElement(o,null),e.createElement(r,null,"I agree to receive marketing communications.")))},b={globals:{imports:"import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,{invalid:!0},e.createElement(o,null),e.createElement(r,null,"Checkbox"))},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(o,null),e.createElement(r,null,"Checkbox"))},C={decorators:[t=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},t())],globals:{imports:"import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...Z()}}},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{checked:!1},e.createElement(o,null),e.createElement(r,null,"Unchecked")),e.createElement(n,{checked:!0},e.createElement(o,null),e.createElement(r,null,"Checked")),e.createElement(n,{checked:"indeterminate"},e.createElement(o,null),e.createElement(r,null,"Indeterminate")))},h={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"12px"}},e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"16px",alignItems:"center"}},e.createElement(n,null,e.createElement(o,null),e.createElement(r,null,"Unchecked")),e.createElement(n,{disabled:!0},e.createElement(o,null),e.createElement(r,null,"Unchecked disabled"))),e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"16px",alignItems:"center"}},e.createElement(n,{checked:!0},e.createElement(o,null),e.createElement(r,null,"Checked")),e.createElement(n,{checked:!0,disabled:!0},e.createElement(o,null),e.createElement(r,null,"Checked disabled"))),e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"16px",alignItems:"center"}},e.createElement(n,{checked:"indeterminate"},e.createElement(o,null),e.createElement(r,null,"Indeterminate")),e.createElement(n,{checked:"indeterminate",disabled:!0},e.createElement(o,null),e.createElement(r,null,"Indeterminate disabled"))))};var p,g,E;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(E=(g=a.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var v,f,L;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(f=l.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var y,F,T;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Checkbox, CheckboxControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Checkbox>
      <CheckboxControl />
    </Checkbox>
}`,...(T=(F=c.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var I,w,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var O,G,R;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(G=d.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var _,D,A;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(D=m.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var U,P,N;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(N=(P=b.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var V,X,Y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var M,j,q;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
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
}`,...(q=(j=C.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,B,H;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(B=h.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const ee=["Demo","AnatomyTech","Default","Disabled","InFormField","Group","Invalid","Overview","States","ThemeGenerator"],ce=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:l,Default:c,Demo:a,Disabled:s,Group:m,InFormField:d,Invalid:b,Overview:i,States:C,ThemeGenerator:h,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{l as A,ce as C,c as D,m as G,b as I,i as O,C as S,s as a,d as b};
