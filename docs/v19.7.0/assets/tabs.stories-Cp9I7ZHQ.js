import{e,r as re}from"./index-jIWwRBLr.js";import{T as t,a,b,c as l,d as Te,e as oe,f as E,g}from"./index-CCHHLgPu.js";import{e as se,o as ue,C as S}from"./controls-BtiQQn1l.js";import{s as ce}from"./source-CPEZJ6oD.js";const me={component:l,subcomponents:{TabList:b,Tab:a,TabContent:t},argTypes:se(["defaultValue","onValueChange","value"]),title:"React Components/Tabs"},n={render:C=>e.createElement(l,{defaultValue:"tab1",...C},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3"),e.createElement(a,{value:"tab4"},"Tab 4"),e.createElement(a,{value:"tab5"},"Tab 5"),e.createElement(a,{value:"tab6"},"Tab 6")),e.createElement(t,{value:"tab1"},e.createElement("p",null,"Tab 1 Content")),e.createElement(t,{value:"tab2"},e.createElement("p",null,"Tab 2 Content")),e.createElement(t,{value:"tab3"},e.createElement("p",null,"Tab 3 Content")),e.createElement(t,{value:"tab4"},e.createElement("p",null,"Tab 4 Content")),e.createElement(t,{value:"tab5"},e.createElement("p",null,"Tab 5 Content")),e.createElement(t,{value:"tab6"},e.createElement("p",null,"Tab 6 Content"))),argTypes:ue({size:{table:{category:S.design,type:{summary:"TABS_SIZE"}},control:{type:"select"},options:oe},variant:{table:{category:S.design,type:{summary:"TABS_VARIANT"}},control:{type:"select"},options:Te},withArrows:{table:{category:S.design},control:{type:"boolean"}}})},r={tags:["!dev"],render:({})=>e.createElement(l,{defaultValue:"tab1"},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3")),e.createElement(t,{value:"tab1"},e.createElement("p",null,"Content 1")),e.createElement(t,{value:"tab2"},e.createElement("p",null,"Content 2")),e.createElement(t,{value:"tab3"},e.createElement("p",null,"Content 3")))},T={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(l,{defaultValue:"tab1"},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3")))},o={globals:{imports:`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...ce()}}},render:({})=>{const[C,be]=re.useState("tab1"),le=ne=>{be(ne.value)};return e.createElement(l,{onValueChange:le,value:C},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3")))}},s={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(l,{defaultValue:"tab1"},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3")))},u={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(l,{defaultValue:"tab1"},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2",disabled:!0},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3")))},c={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{style:{width:"300px"}},e.createElement(l,{defaultValue:"tab1"},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3"),e.createElement(a,{value:"tab4"},"Tab 4"),e.createElement(a,{value:"tab5"},"Tab 5"),e.createElement(a,{value:"tab6"},"Tab 6"))))},m={globals:{imports:"import { TABS_SIZE, TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"MD"),e.createElement(l,{defaultValue:"tab1",size:g.md,variant:E.switch},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3"))),e.createElement("p",null,"SM"),e.createElement(l,{defaultValue:"tab1",size:g.sm,variant:E.switch},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3"))),e.createElement("p",null,"XS"),e.createElement(l,{defaultValue:"tab1",size:g.xs,variant:E.switch},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3"))))},v={globals:{imports:"import { TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(l,{defaultValue:"tab1",variant:E.switch},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3")))},p={globals:{imports:"import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(l,{defaultValue:"tab1",withArrows:!0},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3"),e.createElement(a,{value:"tab4"},"Tab 4"),e.createElement(a,{value:"tab5"},"Tab 5"),e.createElement(a,{value:"tab6"},"Tab 6"),e.createElement(a,{value:"tab7"},"Tab 7"),e.createElement(a,{value:"tab8"},"Tab 8"),e.createElement(a,{value:"tab9"},"Tab 9"),e.createElement(a,{value:"tab10"},"Tab 10"),e.createElement(a,{value:"tab11"},"Tab 11"),e.createElement(a,{value:"tab12"},"Tab 12"),e.createElement(a,{value:"tab13"},"Tab 13"),e.createElement(a,{value:"tab14"},"Tab 14"),e.createElement(a,{value:"tab15"},"Tab 15")))},d={globals:{imports:"import { Tabs, TabContent, TabList, Tab } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(l,{defaultValue:"tab1"},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2"},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3")),e.createElement(t,{value:"tab1"},e.createElement("p",null,"Content 1")),e.createElement(t,{value:"tab2"},e.createElement("p",null,"Content 2")),e.createElement(t,{value:"tab3"},e.createElement("p",null,"Content 3")))},i={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(l,{withArrows:!0,defaultValue:"tab1"},e.createElement(b,null,e.createElement(a,{value:"tab1"},"Tab 1"),e.createElement(a,{value:"tab2",disabled:!0},"Tab 2"),e.createElement(a,{value:"tab3"},"Tab 3"),e.createElement(a,{value:"tab4"},"Tab 4"),e.createElement(a,{value:"tab5"},"Tab 5"),e.createElement(a,{value:"tab6"},"Tab 6"),e.createElement(a,{value:"tab7"},"Tab 7"),e.createElement(a,{value:"tab8"},"Tab 8"),e.createElement(a,{value:"tab9"},"Tab 9"),e.createElement(a,{value:"tab10"},"Tab 10"),e.createElement(a,{value:"tab11"},"Tab 11"),e.createElement(a,{value:"tab12"},"Tab 12"),e.createElement(a,{value:"tab13"},"Tab 13"),e.createElement(a,{value:"tab14"},"Tab 14"),e.createElement(a,{value:"tab15"},"Tab 15")),e.createElement(t,{value:"tab1"},e.createElement("p",null,"Content 1")),e.createElement(t,{value:"tab2"},e.createElement("p",null,"Content 2")),e.createElement(t,{value:"tab3"},e.createElement("p",null,"Content 3")),e.createElement(t,{value:"tab4"},e.createElement("p",null,"Content 4")),e.createElement(t,{value:"tab5"},e.createElement("p",null,"Content 5")),e.createElement(t,{value:"tab6"},e.createElement("p",null,"Content 6")),e.createElement(t,{value:"tab7"},e.createElement("p",null,"Content 7")),e.createElement(t,{value:"tab8"},e.createElement("p",null,"Content 8")),e.createElement(t,{value:"tab9"},e.createElement("p",null,"Content 9")),e.createElement(t,{value:"tab10"},e.createElement("p",null,"Content 10")),e.createElement(t,{value:"tab11"},e.createElement("p",null,"Content 11")),e.createElement(t,{value:"tab12"},e.createElement("p",null,"Content 12")),e.createElement(t,{value:"tab13"},e.createElement("p",null,"Content 13")),e.createElement(t,{value:"tab14"},e.createElement("p",null,"Content 14")),e.createElement(t,{value:"tab15"},e.createElement("p",null,"Content 15")))};var A,f,V;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: arg => <Tabs defaultValue="tab1" {...arg}>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
      </TabList>

      <TabContent value="tab1">
        <p>Tab 1 Content</p>
      </TabContent>

      <TabContent value="tab2">
        <p>Tab 2 Content</p>
      </TabContent>

      <TabContent value="tab3">
        <p>Tab 3 Content</p>
      </TabContent>

      <TabContent value="tab4">
        <p>Tab 4 Content</p>
      </TabContent>

      <TabContent value="tab5">
        <p>Tab 5 Content</p>
      </TabContent>

      <TabContent value="tab6">
        <p>Tab 6 Content</p>
      </TabContent>
    </Tabs>,
  argTypes: orderControls({
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'TABS_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: TABS_SIZES
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'TABS_VARIANT'
        }
      },
      control: {
        type: 'select'
      },
      options: TABS_VARIANTS
    },
    withArrows: {
      table: {
        category: CONTROL_CATEGORY.design
      },
      control: {
        type: 'boolean'
      }
    }
  })
}`,...(V=(f=n.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var h,L,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>

      <TabContent value="tab1">
        <p>Content 1</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Content 2</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Content 3</p>
      </TabContent>
    </Tabs>
}`,...(y=(L=r.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var _,w,R;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(R=(w=T.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var B,I,O;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';
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
    const [value, setValue] = useState('tab1');
    const handleValueChange = (event: TabsValueChangeEvent) => {
      setValue(event.value);
    };
    return <Tabs onValueChange={handleValueChange} value={value}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>;
  }
}`,...(O=(I=o.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var N,z,D;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(D=(z=s.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var Z,x,G;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2" disabled>Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(G=(x=u.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var M,W,Y;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    width: '300px'
  }}>
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
          <Tab value="tab4">Tab 4</Tab>
          <Tab value="tab5">Tab 5</Tab>
          <Tab value="tab6">Tab 6</Tab>
        </TabList>
      </Tabs>
    </div>
}`,...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var j,F,X;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TABS_SIZE, TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <p>MD</p>
      <Tabs defaultValue="tab1" size={TABS_SIZE.md} variant={TABS_VARIANT.switch}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>

      <p>SM</p>
      <Tabs defaultValue="tab1" size={TABS_SIZE.sm} variant={TABS_VARIANT.switch}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>

      <p>XS</p>
      <Tabs defaultValue="tab1" size={TABS_SIZE.xs} variant={TABS_VARIANT.switch}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>
    </>
}`,...(X=(F=m.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var P,k,q;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TABS_VARIANT, Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1" variant={TABS_VARIANT.switch}>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
    </Tabs>
}`,...(q=(k=v.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var H,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1" withArrows>
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
        <Tab value="tab7">Tab 7</Tab>
        <Tab value="tab8">Tab 8</Tab>
        <Tab value="tab9">Tab 9</Tab>
        <Tab value="tab10">Tab 10</Tab>
        <Tab value="tab11">Tab 11</Tab>
        <Tab value="tab12">Tab 12</Tab>
        <Tab value="tab13">Tab 13</Tab>
        <Tab value="tab14">Tab 14</Tab>
        <Tab value="tab15">Tab 15</Tab>
      </TabList>
    </Tabs>
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,$;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tabs, TabContent, TabList, Tab } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tabs defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabList>
      <TabContent value="tab1">
        <p>Content 1</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Content 2</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Content 3</p>
      </TabContent>
    </Tabs>
}`,...($=(U=d.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var ee,ae,te;i.parameters={...i.parameters,docs:{...(ee=i.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <Tabs withArrows defaultValue="tab1">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2" disabled>Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
        <Tab value="tab4">Tab 4</Tab>
        <Tab value="tab5">Tab 5</Tab>
        <Tab value="tab6">Tab 6</Tab>
        <Tab value="tab7">Tab 7</Tab>
        <Tab value="tab8">Tab 8</Tab>
        <Tab value="tab9">Tab 9</Tab>
        <Tab value="tab10">Tab 10</Tab>
        <Tab value="tab11">Tab 11</Tab>
        <Tab value="tab12">Tab 12</Tab>
        <Tab value="tab13">Tab 13</Tab>
        <Tab value="tab14">Tab 14</Tab>
        <Tab value="tab15">Tab 15</Tab>
      </TabList>
      <TabContent value="tab1"><p>Content 1</p></TabContent>
      <TabContent value="tab2"><p>Content 2</p></TabContent>
      <TabContent value="tab3"><p>Content 3</p></TabContent>
      <TabContent value="tab4"><p>Content 4</p></TabContent>
      <TabContent value="tab5"><p>Content 5</p></TabContent>
      <TabContent value="tab6"><p>Content 6</p></TabContent>
      <TabContent value="tab7"><p>Content 7</p></TabContent>
      <TabContent value="tab8"><p>Content 8</p></TabContent>
      <TabContent value="tab9"><p>Content 9</p></TabContent>
      <TabContent value="tab10"><p>Content 10</p></TabContent>
      <TabContent value="tab11"><p>Content 11</p></TabContent>
      <TabContent value="tab12"><p>Content 12</p></TabContent>
      <TabContent value="tab13"><p>Content 13</p></TabContent>
      <TabContent value="tab14"><p>Content 14</p></TabContent>
      <TabContent value="tab15"><p>Content 15</p></TabContent>
    </Tabs>
}`,...(te=(ae=i.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const ve=["Demo","AnatomyTech","Overview","Controlled","Default","Disabled","Overflow","Size","Variant","WithArrows","WithContent","ThemeGenerator"],Ce=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:r,Controlled:o,Default:s,Demo:n,Disabled:u,Overflow:c,Overview:T,Size:m,ThemeGenerator:i,Variant:v,WithArrows:p,WithContent:d,__namedExportsOrder:ve,default:me},Symbol.toStringTag,{value:"Module"}));export{r as A,o as C,s as D,T as O,m as S,Ce as T,v as V,d as W,u as a,c as b,p as c};
