import{e,r as k}from"./index-jIWwRBLr.js";import{A as r,a as t,b as n,c,E as T}from"./AccordionTrigger-CN-xz2wZ.js";import{T as o}from"./Text-CW33_IfE.js";import{e as J,o as K,C as E}from"./controls-BtiQQn1l.js";import{s as w}from"./source-CPEZJ6oD.js";const Q={component:c,argTypes:J(["defaultValue","onChange","value"]),subcomponents:{AccordionContent:n,AccordionItem:t,AccordionTrigger:r},title:"React Components/Accordion"},i={tags:["!dev"],render:({})=>e.createElement(c,null,e.createElement(t,{value:"0"},e.createElement(r,null,e.createElement(o,{preset:"paragraph"},"Hello World!")),e.createElement(n,null,e.createElement(o,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))))},a={render:A=>e.createElement(c,{disabled:A.disabled,multiple:A.multiple},e.createElement(t,{value:"0"},e.createElement(r,null,e.createElement(o,{preset:"paragraph"},"Hello World!")),e.createElement(n,null,e.createElement(o,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))),e.createElement(t,{value:"1"},e.createElement(r,null,e.createElement(o,{preset:"paragraph"},"Bye World!")),e.createElement(n,null,e.createElement(o,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.")))),argTypes:K({multiple:{table:{category:E.general},control:"boolean"},disabled:{table:{category:E.general},control:"boolean"}})},l={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(c,null,e.createElement(t,{value:"0"},e.createElement(r,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")))},d={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Text } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...w()}}},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement(t,{value:"1"},e.createElement(r,null,e.createElement(o,{preset:"heading-4"},"Multiple")),e.createElement(n,null,e.createElement(o,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),e.createElement(t,{value:"2"},e.createElement(r,null,e.createElement(o,{preset:"heading-4"},"Multiple")),e.createElement(n,null,e.createElement(o,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),e.createElement("br",null),e.createElement(c,{multiple:!1},e.createElement(t,{value:"3"},e.createElement(r,null,e.createElement(o,{preset:"heading-4"},"Non-multiple")),e.createElement(n,null,e.createElement(o,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),e.createElement(t,{value:"4"},e.createElement(r,null,e.createElement(o,{preset:"heading-4"},"Non-multiple")),e.createElement(n,null,e.createElement(o,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))))},m={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(c,{disabled:!0},e.createElement(t,{value:"0"},e.createElement(r,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")))},s={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(c,null,e.createElement(t,{value:"0",disabled:!0},e.createElement(r,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")),e.createElement(t,{value:"1"},e.createElement(r,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")))},u={globals:{imports:`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...w()}}},render:({})=>{const[A,B]=k.useState(["0"]);return e.createElement(c,{value:A,onChange:z=>B(z.value)},e.createElement(t,{value:"0"},e.createElement(r,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")),e.createElement(t,{value:"1"},e.createElement(r,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")))}},p={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, EXPAND_ICON_POSITION } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement(t,{value:"0"},e.createElement(r,{expandIconPosition:T.right},"Icon on the right (default)"),e.createElement(n,null,"Lorem ipsum dolor sit amet."))),e.createElement("br",null),e.createElement(c,null,e.createElement(t,{value:"1"},e.createElement(r,{expandIconPosition:T.left},"Icon on the left"),e.createElement(n,null,"Lorem ipsum dolor sit amet."))))},g={parameters:{layout:"fullscreen"},render:({})=>e.createElement(c,null,e.createElement(t,{value:"0"},e.createElement(r,null,e.createElement(o,{preset:"paragraph"},"Hello World!")),e.createElement(n,null,e.createElement(o,{preset:"paragraph"},"Lorem ipsum dolor sit amet."))),e.createElement(t,{value:"1",disabled:!0},e.createElement(r,null,e.createElement(o,{preset:"paragraph"},"Disabled item")),e.createElement(n,null,e.createElement(o,{preset:"paragraph"},"This item is disabled.")))),tags:["!dev"]};var v,I,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Accordion>
      <AccordionItem value="0">
        <AccordionTrigger>
          <Text preset="paragraph">
            Hello World!
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var h,x,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (arg: AccordionProp) => <Accordion disabled={arg.disabled} multiple={arg.multiple}>
      <AccordionItem value="0">
        <AccordionTrigger>
          <Text preset="paragraph">
            Hello World!
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="1">
        <AccordionTrigger>
          <Text preset="paragraph">
            Bye World!
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>,
  argTypes: orderControls({
    multiple: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    }
  })
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,L,O;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Accordion>
      <AccordionItem value="0">
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(O=(L=l.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var q,S,D;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Text } from '@ovhcloud/ods-react';\`
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
      <Accordion>
        <AccordionItem value="1">
          <AccordionTrigger>
            <Text preset="heading-4">Multiple</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text preset="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>
            <Text preset="heading-4">Multiple</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text preset="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <br />
      <Accordion multiple={false}>
        <AccordionItem value="3">
          <AccordionTrigger>
            <Text preset="heading-4">Non-multiple</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text preset="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="4">
          <AccordionTrigger>
            <Text preset="heading-4">Non-multiple</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text preset="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var N,W,_;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Accordion disabled>
      <AccordionItem value="0">
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var H,P,y;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Accordion>
      <AccordionItem value="0" disabled>
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="1">
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(y=(P=s.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var R,M,U;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [value, setValue] = useState(['0']);
    return <Accordion value={value} onChange={detail => setValue(detail.value)}>
        <AccordionItem value="0">
          <AccordionTrigger>
            Hello World!
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="1">
          <AccordionTrigger>
            Hello World!
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet.
          </AccordionContent>
        </AccordionItem>
      </Accordion>;
  }
}`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var G,X,V;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, EXPAND_ICON_POSITION } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Accordion>
        <AccordionItem value="0">
          <AccordionTrigger expandIconPosition={EXPAND_ICON_POSITION.right}>
            Icon on the right (default)
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <br />
      <Accordion>
        <AccordionItem value="1">
          <AccordionTrigger expandIconPosition={EXPAND_ICON_POSITION.left}>
            Icon on the left
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
}`,...(V=(X=p.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var F,Y,j;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: ({}) => <Accordion>
      <AccordionItem value="0">
        <AccordionTrigger>
          <Text preset="paragraph">Hello World!</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">Lorem ipsum dolor sit amet.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="1" disabled>
        <AccordionTrigger>
          <Text preset="paragraph">Disabled item</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text preset="paragraph">This item is disabled.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>,
  tags: ['!dev']
}`,...(j=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};const Z=["Overview","Demo","Default","Multiple","Disabled","ItemDisabled","Controlled","ExpandIconPositionExample","ThemeGenerator"],ne=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:l,Demo:a,Disabled:m,ExpandIconPositionExample:p,ItemDisabled:s,Multiple:d,Overview:i,ThemeGenerator:g,__namedExportsOrder:Z,default:Q},Symbol.toStringTag,{value:"Module"}));export{ne as A,u as C,l as D,p as E,s as I,d as M,i as O,m as a};
