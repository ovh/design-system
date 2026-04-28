import{e}from"./index-jIWwRBLr.js";import{F as K,a as Q}from"./index-B0M5RXeR.js";import{R as a,a as l,b as o,c as t}from"./index-DrSf431n.js";import{e as U,o as W,C as b}from"./controls-BtiQQn1l.js";const X={argTypes:U(["defaultValue","name","onValueChange","value"]),component:t,subcomponents:{Radio:o,RadioControl:l,RadioLabel:a},title:"React Components/Radio Group"},i={render:r=>e.createElement(t,{disabled:r.disabled,orientation:r.orientation},e.createElement(o,{invalid:r.invalid,value:"html"},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{invalid:r.invalid,value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{invalid:r.invalid,value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript"))),argTypes:W({disabled:{table:{category:b.general},control:{type:"boolean"}},invalid:{table:{category:b.general,type:{summary:"boolean"}},control:"boolean"},orientation:{table:{category:b.general,type:{summary:["horizontal","vertical"]}},control:{type:"select"},options:["horizontal","vertical"]}})},d={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{value:"html"},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript")))},n={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{value:"html"},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript")))},c={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{disabled:!0},e.createElement(o,{value:"html"},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript")))},s={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{value:"html"},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{disabled:!0,value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript")))},m={globals:{imports:"import { FormField, FormFieldLabel, Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(K,null,e.createElement(Q,null,"Pick a language:"),e.createElement(t,null,e.createElement(o,{value:"html"},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript"))))},u={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{defaultValue:"html"},e.createElement(o,{value:"html",invalid:!0},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{invalid:!0,value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript")))},R={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{orientation:"horizontal"},e.createElement(o,{value:"html"},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript")))},p={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,e.createElement(o,{value:"html"},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript")))},v={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"24px"}},e.createElement(t,null,e.createElement(o,{value:"html"},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript"))),e.createElement(t,{disabled:!0},e.createElement(o,{value:"html"},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript"))),e.createElement(t,null,e.createElement(o,{disabled:!0,value:"html"},e.createElement(l,null),e.createElement(a,null,"HTML")),e.createElement(o,{value:"css"},e.createElement(l,null),e.createElement(a,null,"CSS")),e.createElement(o,{value:"js"},e.createElement(l,null),e.createElement(a,null,"JavaScript"))))};var E,L,C;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(L=i.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var S,g,h;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var G,T,y;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var f,j,F;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(F=(j=c.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var M,H,J;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(J=(H=s.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var O,D,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var A,x,z;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(x=u.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var I,N,V;R.parameters={...R.parameters,docs:{...(I=R.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(N=R.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var Y,P,k;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(k=(P=p.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var w,q,B;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(q=v.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const Z=["Demo","AnatomyTech","Default","DisabledGroup","DisabledItem","InFormField","Invalid","Orientation","Overview","ThemeGenerator"],oe=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:d,Default:n,Demo:i,DisabledGroup:c,DisabledItem:s,InFormField:m,Invalid:u,Orientation:R,Overview:p,ThemeGenerator:v,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{d as A,n as D,u as I,p as O,oe as R,c as a,s as b,R as c,m as d};
