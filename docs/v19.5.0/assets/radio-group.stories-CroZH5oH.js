import{e}from"./index-jIWwRBLr.js";import{F as k,a as w}from"./FormFieldLabelSubLabel-DCAb65DU.js";import{R as a,a as o,b as l,c as t}from"./RadioLabel-eoh0KbCP.js";import{e as q,o as B,C as v}from"./controls-BtiQQn1l.js";const K={argTypes:q(["defaultValue","name","onValueChange","value"]),component:t,subcomponents:{Radio:l,RadioControl:o,RadioLabel:a},title:"React Components/Radio Group"},i={render:r=>e.createElement(t,{disabled:r.disabled,orientation:r.orientation},e.createElement(l,{invalid:r.invalid,value:"html"},e.createElement(o,null),e.createElement(a,null,"HTML")),e.createElement(l,{invalid:r.invalid,value:"css"},e.createElement(o,null),e.createElement(a,null,"CSS")),e.createElement(l,{invalid:r.invalid,value:"js"},e.createElement(o,null),e.createElement(a,null,"JavaScript"))),argTypes:B({disabled:{table:{category:v.general},control:{type:"boolean"}},invalid:{table:{category:v.general,type:{summary:"boolean"}},control:"boolean"},orientation:{table:{category:v.general,type:{summary:["horizontal","vertical"]}},control:{type:"select"},options:["horizontal","vertical"]}})},d={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(l,{value:"html"},e.createElement(o,null),e.createElement(a,null,"HTML")),e.createElement(l,{value:"css"},e.createElement(o,null),e.createElement(a,null,"CSS")),e.createElement(l,{value:"js"},e.createElement(o,null),e.createElement(a,null,"JavaScript")))},n={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{disabled:!0},e.createElement(l,{value:"html"},e.createElement(o,null),e.createElement(a,null,"HTML")),e.createElement(l,{value:"css"},e.createElement(o,null),e.createElement(a,null,"CSS")),e.createElement(l,{value:"js"},e.createElement(o,null),e.createElement(a,null,"JavaScript")))},c={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(l,{value:"html"},e.createElement(o,null),e.createElement(a,null,"HTML")),e.createElement(l,{disabled:!0,value:"css"},e.createElement(o,null),e.createElement(a,null,"CSS")),e.createElement(l,{value:"js"},e.createElement(o,null),e.createElement(a,null,"JavaScript")))},s={globals:{imports:"import { FormField, FormFieldLabel, Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(k,null,e.createElement(w,null,"Pick a language:"),e.createElement(t,null,e.createElement(l,{value:"html"},e.createElement(o,null),e.createElement(a,null,"HTML")),e.createElement(l,{value:"css"},e.createElement(o,null),e.createElement(a,null,"CSS")),e.createElement(l,{value:"js"},e.createElement(o,null),e.createElement(a,null,"JavaScript"))))},m={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{defaultValue:"html"},e.createElement(l,{value:"html",invalid:!0},e.createElement(o,null),e.createElement(a,null,"HTML")),e.createElement(l,{invalid:!0,value:"css"},e.createElement(o,null),e.createElement(a,null,"CSS")),e.createElement(l,{value:"js"},e.createElement(o,null),e.createElement(a,null,"JavaScript")))},u={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{orientation:"horizontal"},e.createElement(l,{value:"html"},e.createElement(o,null),e.createElement(a,null,"HTML")),e.createElement(l,{value:"css"},e.createElement(o,null),e.createElement(a,null,"CSS")),e.createElement(l,{value:"js"},e.createElement(o,null),e.createElement(a,null,"JavaScript")))},R={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,e.createElement(l,{value:"html"},e.createElement(o,null),e.createElement(a,null,"HTML")),e.createElement(l,{value:"css"},e.createElement(o,null),e.createElement(a,null,"CSS")),e.createElement(l,{value:"js"},e.createElement(o,null),e.createElement(a,null,"JavaScript")))},p={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"24px"}},e.createElement(t,null,e.createElement(l,{value:"html"},e.createElement(o,null),e.createElement(a,null,"HTML")),e.createElement(l,{value:"css"},e.createElement(o,null),e.createElement(a,null,"CSS")),e.createElement(l,{value:"js"},e.createElement(o,null),e.createElement(a,null,"JavaScript"))),e.createElement(t,{disabled:!0},e.createElement(l,{value:"html"},e.createElement(o,null),e.createElement(a,null,"HTML")),e.createElement(l,{value:"css"},e.createElement(o,null),e.createElement(a,null,"CSS")),e.createElement(l,{value:"js"},e.createElement(o,null),e.createElement(a,null,"JavaScript"))),e.createElement(t,null,e.createElement(l,{disabled:!0,value:"html"},e.createElement(o,null),e.createElement(a,null,"HTML")),e.createElement(l,{value:"css"},e.createElement(o,null),e.createElement(a,null,"CSS")),e.createElement(l,{value:"js"},e.createElement(o,null),e.createElement(a,null,"JavaScript"))))};var b,E,L;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <RadioGroup disabled={arg.disabled} orientation={arg.orientation}>
      <Radio invalid={arg.invalid} value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio invalid={arg.invalid} value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio invalid={arg.invalid} value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'boolean'
      }
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    orientation: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: ['horizontal', 'vertical']
        }
      },
      control: {
        type: 'select'
      },
      options: ['horizontal', 'vertical']
    }
  })
}`,...(L=(E=i.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var C,S,g;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(g=(S=d.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var h,G,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <RadioGroup disabled>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(T=(G=n.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var y,f,F;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio disabled value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(F=(f=c.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var j,M,H;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Pick a language:
      </FormFieldLabel>

      <RadioGroup>
        <Radio value="html">
          <RadioControl />

          <RadioLabel>HTML</RadioLabel>
        </Radio>

        <Radio value="css">
          <RadioControl />

          <RadioLabel>CSS</RadioLabel>
        </Radio>

        <Radio value="js">
          <RadioControl />

          <RadioLabel>JavaScript</RadioLabel>
        </Radio>
      </RadioGroup>
    </FormField>
}`,...(H=(M=s.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var J,O,D;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <RadioGroup defaultValue="html">
      <Radio value="html" invalid>
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio invalid value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var _,x,z;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <RadioGroup orientation="horizontal">
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(z=(x=u.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var I,A,N;R.parameters={...R.parameters,docs:{...(I=R.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(N=(A=R.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var V,Y,P;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    gap: '24px'
  }}>
      <RadioGroup>
        <Radio value="html"><RadioControl /><RadioLabel>HTML</RadioLabel></Radio>
        <Radio value="css"><RadioControl /><RadioLabel>CSS</RadioLabel></Radio>
        <Radio value="js"><RadioControl /><RadioLabel>JavaScript</RadioLabel></Radio>
      </RadioGroup>

      <RadioGroup disabled>
        <Radio value="html"><RadioControl /><RadioLabel>HTML</RadioLabel></Radio>
        <Radio value="css"><RadioControl /><RadioLabel>CSS</RadioLabel></Radio>
        <Radio value="js"><RadioControl /><RadioLabel>JavaScript</RadioLabel></Radio>
      </RadioGroup>

      <RadioGroup>
        <Radio disabled value="html"><RadioControl /><RadioLabel>HTML</RadioLabel></Radio>
        <Radio value="css"><RadioControl /><RadioLabel>CSS</RadioLabel></Radio>
        <Radio value="js"><RadioControl /><RadioLabel>JavaScript</RadioLabel></Radio>
      </RadioGroup>
    </div>
}`,...(P=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};const Q=["Demo","Default","DisabledGroup","DisabledItem","InFormField","Invalid","Orientation","Overview","ThemeGenerator"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Demo:i,DisabledGroup:n,DisabledItem:c,InFormField:s,Invalid:m,Orientation:u,Overview:R,ThemeGenerator:p,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{d as D,m as I,R as O,$ as R,n as a,c as b,u as c,s as d};
