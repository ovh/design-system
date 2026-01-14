import{B as l}from"./Button-B-GJ-1TA.js";import{r as T,e}from"./index-jIWwRBLr.js";import{j as p}from"./jsx-runtime-Cfl8ynUo.js";import{D as K,u as Q,a as X,b as Z,c as ee}from"./dialog-trigger-DE3he7pi.js";import{c as re}from"./index-CqY9YpN0.js";import{P as te}from"./portal-Dz6APLpY.js";import{e as ne,o as ae,C as E}from"./controls-BtiQQn1l.js";import{s as oe}from"./source-CPEZJ6oD.js";const t=({children:r,closeOnEscape:i=!0,closeOnInteractOutside:d=!1,defaultOpen:w,onOpenChange:c,open:_})=>p.jsx(K,{closeOnEscape:i,closeOnInteractOutside:d,defaultOpen:w,modal:!1,onOpenChange:c,open:_,preventScroll:!1,trapFocus:!1,children:r});t.displayName="Drawer";t.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the outside is clicked.",defaultValue:{value:"false",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the drawer. Use when you don't need to control the open state of the drawer."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: DrawerOpenChangeDetail) => void",signature:{arguments:[{type:{name:"DrawerOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the drawer open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the drawer."}}};const n=T.forwardRef(({children:r,className:i,...d},w)=>p.jsx("div",{className:i,"data-ods":"drawer-body",ref:w,...d,children:r}));n.displayName="DrawerBody";n.__docgenInfo={description:"",methods:[],displayName:"DrawerBody",composes:["ComponentPropsWithRef"]};var s=(r=>(r.bottom="bottom",r.left="left",r.right="right",r.top="top",r))(s||{});const le=Object.freeze(Object.values(s)),B={"drawer-positioner__content":"_drawer-positioner__content_1px2j_2","drawer-positioner__content--bottom":"_drawer-positioner__content--bottom_1px2j_32","drawer-open-bottom":"_drawer-open-bottom_1px2j_1","drawer-close-bottom":"_drawer-close-bottom_1px2j_1","drawer-positioner__content--left":"_drawer-positioner__content--left_1px2j_60","drawer-open-left":"_drawer-open-left_1px2j_1","drawer-close-left":"_drawer-close-left_1px2j_1","drawer-positioner__content--right":"_drawer-positioner__content--right_1px2j_88","drawer-open-right":"_drawer-open-right_1px2j_1","drawer-close-right":"_drawer-close-right_1px2j_1","drawer-positioner__content--top":"_drawer-positioner__content--top_1px2j_116","drawer-open-top":"_drawer-open-top_1px2j_1","drawer-close-top":"_drawer-close-top_1px2j_1"},a=T.forwardRef(({children:r,className:i,createPortal:d=!0,position:w=s.left,...c},_)=>{const{open:J}=Q();return p.jsx(te,{disabled:!d,children:p.jsx(X,{className:B["drawer-positioner"],children:p.jsx(Z,{"aria-describedby":c["aria-describedby"]||"","aria-labelledby":c["aria-labelledby"]||"",className:re(B["drawer-positioner__content"],B[`drawer-positioner__content--${w}`],i),"data-ods":"drawer-content",ref:_,...c,style:{...c.style,...J?{}:{opacity:0}},children:r})})})});a.displayName="DrawerContent";a.__docgenInfo={description:"",methods:[],displayName:"DrawerContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"DRAWER_POSITION"},description:"The drawer position in the screen.",defaultValue:{value:"DRAWER_POSITION.left",computed:!0}}},composes:["ComponentPropsWithRef"]};const o=T.forwardRef(({children:r,...i},d)=>p.jsx(ee,{"data-ods":"drawer-trigger",ref:d,...i,children:r}));o.displayName="DrawerTrigger";o.__docgenInfo={description:"",methods:[],displayName:"DrawerTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const se={argTypes:ne(["defaultOpen","onOpenChange","open"]),component:t,subcomponents:{DrawerBody:n,DrawerContent:a,DrawerTrigger:o},title:"React Components/Drawer"},m={render:r=>e.createElement(t,{closeOnEscape:r.closeOnEscape,closeOnInteractOutside:r.closeOnInteractOutside},e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{position:r.position},e.createElement(n,null,r.content))),argTypes:ae({closeOnEscape:{table:{category:E.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:E.general},control:{type:"boolean"}},content:{table:{category:E.slot},control:"text"},position:{table:{category:E.general,type:{summary:"DRAWER_POSITION"}},control:{type:"select"},options:le}}),args:{content:"My drawer content"}},u={globals:{imports:`import { Button, Drawer, DrawerBody, DrawerContent } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...oe()}}},render:({})=>{const[r,i]=T.useState(!1);function d({open:c}){i(c)}function w(){i(!0)}return e.createElement(e.Fragment,null,e.createElement(l,{onClick:w},"Trigger Drawer"),e.createElement(t,{onOpenChange:d,open:r},e.createElement(a,null,e.createElement(n,null,"Content"))))}},D={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,null,e.createElement(n,null,"My drawer content")))},g={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{position:s.left},e.createElement(n,null,"My drawer content")))},y={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",alignItems:"center",gap:"8px"}},r())],globals:{imports:"import { DRAWER_POSITION, Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Top drawer")),e.createElement(a,{position:s.top},e.createElement(n,null,"Top drawer content"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Left drawer")),e.createElement(a,{position:s.left},e.createElement(n,null,"Left drawer content"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Right Drawer")),e.createElement(a,{position:s.right},e.createElement(n,null,"Right drawer content"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Bottom Drawer")),e.createElement(a,{position:s.bottom},e.createElement(n,null,"Bottom drawer content"))))},f={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{"aria-describedby":"drawer-content","aria-labelledby":"drawer-title"},e.createElement(n,null,e.createElement("h2",{id:"drawer-title"},"My drawer"),e.createElement("p",{id:"drawer-content"},"The drawer content"))))},h={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{"aria-describedby":"drawer-content","aria-label":"My drawer"},e.createElement(n,{id:"drawer-content"},"The drawer content")))},C={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"12px"}},e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Left")),e.createElement(a,{createPortal:!1,position:s.left},e.createElement(n,null,"Left drawer"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Right")),e.createElement(a,{createPortal:!1,position:s.right},e.createElement(n,null,"Right drawer"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Top")),e.createElement(a,{createPortal:!1,position:s.top},e.createElement(n,null,"Top drawer"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Bottom")),e.createElement(a,{createPortal:!1,position:s.bottom},e.createElement(n,null,"Bottom drawer"))))};var O,b,R;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Drawer closeOnEscape={arg.closeOnEscape} closeOnInteractOutside={arg.closeOnInteractOutside}>
      <DrawerTrigger asChild>
        <Button>
          Trigger Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={arg.position}>
        <DrawerBody>
          {arg.content}
        </DrawerBody>
      </DrawerContent>
    </Drawer>,
  argTypes: orderControls({
    closeOnEscape: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'boolean'
      }
    },
    closeOnInteractOutside: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'boolean'
      }
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'DRAWER_POSITION'
        }
      },
      control: {
        type: 'select'
      },
      options: DRAWER_POSITIONS
    }
  }),
  args: {
    content: 'My drawer content'
  }
}`,...(R=(b=m.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var v,I,x;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Drawer, DrawerBody, DrawerContent } from '@ovhcloud/ods-react';
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
    const [isOpen, setIsOpen] = useState(false);
    function onOpenChange({
      open
    }: DrawerOpenChangeDetail) {
      setIsOpen(open);
    }
    function openDrawer() {
      setIsOpen(true);
    }
    return <>
        <Button onClick={openDrawer}>
          Trigger Drawer
        </Button>

        <Drawer onOpenChange={onOpenChange} open={isOpen}>
          <DrawerContent>
            <DrawerBody>
              Content
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>;
  }
}`,...(x=(I=u.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var S,P,N;D.parameters={...D.parameters,docs:{...(S=D.parameters)==null?void 0:S.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Trigger Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerBody>
          My drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>
}`,...(N=(P=D.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var A,j,W;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Trigger Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={DRAWER_POSITION.left}>
        <DrawerBody>
          My drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>
}`,...(W=(j=g.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var L,M,F;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { DRAWER_POSITION, Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Top drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={DRAWER_POSITION.top}>
        <DrawerBody>
          Top drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>

   <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Left drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={DRAWER_POSITION.left}>
        <DrawerBody>
          Left drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>

   <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Right Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={DRAWER_POSITION.right}>
        <DrawerBody>
          Right drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>

   <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Bottom Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent position={DRAWER_POSITION.bottom}>
        <DrawerBody>
          Bottom drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    </>
}`,...(F=(M=y.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var q,G,k;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Trigger Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent aria-describedby="drawer-content" aria-labelledby="drawer-title">
        <DrawerBody>
          <h2 id="drawer-title">
            My drawer
          </h2>

          <p id="drawer-content">
            The drawer content
          </p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
}`,...(k=(G=f.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var Y,V,z;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Trigger Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent aria-describedby="drawer-content" aria-label="My drawer">
        <DrawerBody id="drawer-content">
          The drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>
}`,...(z=(V=h.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var U,$,H;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '12px'
  }}>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Left</Button>
        </DrawerTrigger>
        <DrawerContent createPortal={false} position={DRAWER_POSITION.left}>
          <DrawerBody>Left drawer</DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer>
        <DrawerTrigger asChild>
          <Button>Right</Button>
        </DrawerTrigger>
        <DrawerContent createPortal={false} position={DRAWER_POSITION.right}>
          <DrawerBody>Right drawer</DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer>
        <DrawerTrigger asChild>
          <Button>Top</Button>
        </DrawerTrigger>
        <DrawerContent createPortal={false} position={DRAWER_POSITION.top}>
          <DrawerBody>Top drawer</DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer>
        <DrawerTrigger asChild>
          <Button>Bottom</Button>
        </DrawerTrigger>
        <DrawerContent createPortal={false} position={DRAWER_POSITION.bottom}>
          <DrawerBody>Bottom drawer</DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
}`,...(H=($=C.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};const ie=["Demo","Controlled","Default","Overview","Position","AccessibilityAriaLabelledBy","AccessibilityAriaLabel","ThemeGenerator"],ye=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:h,AccessibilityAriaLabelledBy:f,Controlled:u,Default:D,Demo:m,Overview:g,Position:y,ThemeGenerator:C,__namedExportsOrder:ie,default:se},Symbol.toStringTag,{value:"Module"}));export{h as A,ye as D,g as O,y as P,f as a,D as b};
