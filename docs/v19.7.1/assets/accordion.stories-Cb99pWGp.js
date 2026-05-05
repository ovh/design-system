import{e,r as Z}from"./index-jIWwRBLr.js";import{A as o,a as t,b as n,c as i,E}from"./index-B-w1UZkk.js";import{T as r}from"./Text-CAQM6i-X.js";import{e as $,o as ee,C as v}from"./controls-BtiQQn1l.js";import{s as J}from"./source-CPEZJ6oD.js";const re={component:i,argTypes:$(["defaultValue","onChange","value"]),subcomponents:{AccordionContent:n,AccordionItem:t,AccordionTrigger:o},title:"React Components/Accordion"},c={render:T=>e.createElement(i,{disabled:T.disabled,multiple:T.multiple},e.createElement(t,{value:"0"},e.createElement(o,null,e.createElement(r,{preset:"paragraph"},"Hello World!")),e.createElement(n,null,e.createElement(r,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))),e.createElement(t,{value:"1"},e.createElement(o,null,e.createElement(r,{preset:"paragraph"},"Bye World!")),e.createElement(n,null,e.createElement(r,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.")))),argTypes:ee({multiple:{table:{category:v.general},control:"boolean"},disabled:{table:{category:v.general},control:"boolean"}})},a={tags:["!dev"],render:({})=>e.createElement(i,{defaultValue:["0"],style:{width:"100%"}},e.createElement(t,{value:"0"},e.createElement(o,null,e.createElement(r,{preset:"paragraph"},"Item number 1")),e.createElement(n,null,e.createElement(r,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))),e.createElement(t,{value:"1"},e.createElement(o,null,e.createElement(r,{preset:"paragraph"},"Item number 2")),e.createElement(n,null,e.createElement(r,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))))},l={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(i,null,e.createElement(t,{value:"0"},e.createElement(o,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")))},d={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Text } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...J()}}},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(i,null,e.createElement(t,{value:"1"},e.createElement(o,null,e.createElement(r,{preset:"heading-4"},"Multiple")),e.createElement(n,null,e.createElement(r,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),e.createElement(t,{value:"2"},e.createElement(o,null,e.createElement(r,{preset:"heading-4"},"Multiple")),e.createElement(n,null,e.createElement(r,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),e.createElement("br",null),e.createElement(i,{multiple:!1},e.createElement(t,{value:"3"},e.createElement(o,null,e.createElement(r,{preset:"heading-4"},"Non-multiple")),e.createElement(n,null,e.createElement(r,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),e.createElement(t,{value:"4"},e.createElement(o,null,e.createElement(r,{preset:"heading-4"},"Non-multiple")),e.createElement(n,null,e.createElement(r,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))))},m={tags:["!dev"],render:({})=>e.createElement(i,null,e.createElement(t,{value:"0"},e.createElement(o,null,e.createElement(r,{preset:"paragraph"},"Hello World!")),e.createElement(n,null,e.createElement(r,{preset:"paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."))))},s={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(i,{disabled:!0},e.createElement(t,{value:"0"},e.createElement(o,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")))},u={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(i,null,e.createElement(t,{value:"0",disabled:!0},e.createElement(o,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")),e.createElement(t,{value:"1"},e.createElement(o,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")))},p={globals:{imports:`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...J()}}},render:({})=>{const[T,K]=Z.useState(["0"]);return e.createElement(i,{value:T,onChange:Q=>K(Q.value)},e.createElement(t,{value:"0"},e.createElement(o,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")),e.createElement(t,{value:"1"},e.createElement(o,null,"Hello World!"),e.createElement(n,null,"Lorem ipsum dolor sit amet.")))}},g={globals:{imports:"import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, EXPAND_ICON_POSITION } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(i,null,e.createElement(t,{value:"0"},e.createElement(o,{expandIconPosition:E.right},"Icon on the right (default)"),e.createElement(n,null,"Lorem ipsum dolor sit amet."))),e.createElement("br",null),e.createElement(i,null,e.createElement(t,{value:"1"},e.createElement(o,{expandIconPosition:E.left},"Icon on the left"),e.createElement(n,null,"Lorem ipsum dolor sit amet."))))},A={parameters:{layout:"fullscreen"},render:({})=>e.createElement(i,null,e.createElement(t,{value:"0"},e.createElement(o,null,e.createElement(r,{preset:"paragraph"},"Hello World!")),e.createElement(n,null,e.createElement(r,{preset:"paragraph"},"Lorem ipsum dolor sit amet."))),e.createElement(t,{value:"1",disabled:!0},e.createElement(o,null,e.createElement(r,{preset:"paragraph"},"Disabled item")),e.createElement(n,null,e.createElement(r,{preset:"paragraph"},"This item is disabled.")))),tags:["!dev"]};var h,I,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(I=c.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var C,b,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Accordion defaultValue={['0']} style={{
    width: '100%'
  }}>
      <AccordionItem value="0">
        <AccordionTrigger>
          <Text preset="paragraph">
            Item number 1
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
            Item number 2
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
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var q,L,O;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(L=l.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var D,S,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(S=d.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var W,_,H;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var P,y,R;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(y=s.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var U,M,V;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(V=(M=u.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var G,X,w;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(w=(X=p.parameters)==null?void 0:X.docs)==null?void 0:w.source}}};var F,Y,j;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(j=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var B,z,k;A.parameters={...A.parameters,docs:{...(B=A.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(z=A.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const oe=["Demo","AnatomyTech","Default","Multiple","Overview","Disabled","ItemDisabled","Controlled","ExpandIconPositionExample","ThemeGenerator"],le=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:a,Controlled:p,Default:l,Demo:c,Disabled:s,ExpandIconPositionExample:g,ItemDisabled:u,Multiple:d,Overview:m,ThemeGenerator:A,__namedExportsOrder:oe,default:re},Symbol.toStringTag,{value:"Module"}));export{le as A,p as C,l as D,g as E,u as I,d as M,m as O,a,s as b};
