import{e}from"./index-jIWwRBLr.js";import{C as r,a as Y,b as o,c as n}from"./CheckboxLabel-C4xYBMGE.js";import{F as i}from"./FormFieldLabel-DW-nAxje.js";import{T as M,a as j}from"./Text-vMb3-i8V.js";import{e as U,o as V,C as h}from"./controls-BtiQQn1l.js";const q={argTypes:U(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:n,subcomponents:{CheckboxControl:o,CheckboxGroup:Y,CheckboxLabel:r},title:"React Components/Checkbox"},t={render:a=>e.createElement(n,{disabled:a.disabled,invalid:a.invalid},e.createElement(o,null),e.createElement(r,null,a.label)),argTypes:V({disabled:{table:{category:h.general},control:"boolean"},invalid:{table:{category:h.general},control:"boolean"},label:{table:{category:h.slot},control:"text"}}),args:{label:"My checkbox"}},l={globals:{imports:"import { Checkbox, CheckboxControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(o,null))},c={globals:{imports:"import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,{disabled:!0},e.createElement(o,null),e.createElement(r,null,"Checkbox"))},s={decorators:[a=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},a())],globals:{imports:"import { TEXT_PRESET, Checkbox, CheckboxControl, CheckboxLabel, FormField, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(M,{preset:j.label},"Legal considerations:"),e.createElement(i,null,e.createElement(n,null,e.createElement(o,null),e.createElement(r,null,"I agree to the terms and conditions."))),e.createElement(i,null,e.createElement(n,null,e.createElement(o,null),e.createElement(r,null,"I agree to receive marketing communications."))))},b={globals:{imports:"import { Checkbox, CheckboxControl, CheckboxGroup, CheckboxLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(Y,{defaultValue:["marketing"],name:"acknowledgments"},e.createElement(n,{value:"term"},e.createElement(o,null),e.createElement(r,null,"I agree to the terms and conditions.")),e.createElement(n,{value:"marketing"},e.createElement(o,null),e.createElement(r,null,"I agree to receive marketing communications.")))},m={globals:{imports:"import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,{invalid:!0},e.createElement(o,null),e.createElement(r,null,"Checkbox"))},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(o,null),e.createElement(r,null,"Checkbox"))},C={decorators:[a=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},a())],globals:{imports:"import { Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{checked:!1},e.createElement(o,null),e.createElement(r,null,"Unchecked")),e.createElement(n,{checked:!0},e.createElement(o,null),e.createElement(r,null,"Checked")),e.createElement(n,{checked:"indeterminate"},e.createElement(o,null),e.createElement(r,null,"Indeterminate")))};var k,x,u;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var p,g,E;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Checkbox, CheckboxControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Checkbox>
      <CheckboxControl />
    </Checkbox>
}`,...(E=(g=l.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var v,L,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(L=c.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var T,y,F;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(y=s.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var O,S,I;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(S=b.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var _,R,G;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(R=m.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var D,w,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var P,N,X;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(X=(N=C.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};const z=["Demo","Default","Disabled","InFormField","Group","Invalid","Overview","States"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Demo:t,Disabled:c,Group:b,InFormField:s,Invalid:m,Overview:d,States:C,__namedExportsOrder:z,default:q},Symbol.toStringTag,{value:"Module"}));export{W as C,l as D,b as G,m as I,d as O,C as S,c as a,s as b};
