import{B as l}from"./Button-B-GJ-1TA.js";import{r as E,e}from"./index-jIWwRBLr.js";import{j as p}from"./jsx-runtime-Cfl8ynUo.js";import{u as ne}from"./context-C_-r2uoG.js";import{D as ae,u as oe,a as le,b as se,c as ie}from"./dialog-trigger-CPz6GO76.js";import{c as ce}from"./index-CqY9YpN0.js";import{P as de}from"./portal-CJHwXgLI.js";import{I as pe,a as we}from"./icon-name-BpdEc4-2.js";import{b as me,S as ue,a as ge}from"./SelectControl-cFSNnpci.js";import{b as De,T as ye,a as fe}from"./TooltipTrigger-CRWH95NO.js";import{e as Ce,o as he,C as b}from"./controls-BtiQQn1l.js";import{s as Te}from"./source-CPEZJ6oD.js";const ee=E.createContext(void 0);function re({children:r,positionerStyle:s}){return p.jsx(ee.Provider,{value:{positionerStyle:s},children:r})}function Ee(){return ne(ee)}re.__docgenInfo={description:"",methods:[],displayName:"DrawerProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const t=({children:r,closeOnEscape:s=!0,closeOnInteractOutside:c=!1,defaultOpen:w,onOpenChange:d,open:B,positionerStyle:O})=>p.jsx(re,{positionerStyle:O,children:p.jsx(ae,{closeOnEscape:s,closeOnInteractOutside:c,defaultOpen:w,modal:!1,onOpenChange:d,open:B,preventScroll:!1,trapFocus:!1,children:r})});t.displayName="Drawer";t.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the outside is clicked.",defaultValue:{value:"false",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the drawer. Use when you don't need to control the open state of the drawer."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: DrawerOpenChangeDetail) => void",signature:{arguments:[{type:{name:"DrawerOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the drawer open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the drawer."},positionerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom style applied to the overlay positioner."}}};const n=E.forwardRef(({children:r,className:s,...c},w)=>p.jsx("div",{className:s,"data-ods":"drawer-body",ref:w,...c,children:r}));n.displayName="DrawerBody";n.__docgenInfo={description:"",methods:[],displayName:"DrawerBody",composes:["ComponentPropsWithRef"]};var i=(r=>(r.bottom="bottom",r.left="left",r.right="right",r.top="top",r))(i||{});const be=Object.freeze(Object.values(i)),_={"drawer-content":"_drawer-content_14d7s_2","drawer-content--bottom":"_drawer-content--bottom_14d7s_32","drawer-open-bottom":"_drawer-open-bottom_14d7s_1","drawer-close-bottom":"_drawer-close-bottom_14d7s_1","drawer-content--left":"_drawer-content--left_14d7s_60","drawer-open-left":"_drawer-open-left_14d7s_1","drawer-close-left":"_drawer-close-left_14d7s_1","drawer-content--right":"_drawer-content--right_14d7s_88","drawer-open-right":"_drawer-open-right_14d7s_1","drawer-close-right":"_drawer-close-right_14d7s_1","drawer-content--top":"_drawer-content--top_14d7s_116","drawer-open-top":"_drawer-open-top_14d7s_1","drawer-close-top":"_drawer-close-top_14d7s_1"},a=E.forwardRef(({children:r,className:s,createPortal:c=!0,position:w=i.left,...d},B)=>{const{open:O}=oe(),{positionerStyle:te}=Ee();return p.jsx(de,{disabled:!c,children:p.jsx(le,{style:te,children:p.jsx(se,{"aria-describedby":d["aria-describedby"]||"","aria-labelledby":d["aria-labelledby"]||"",className:ce(_["drawer-content"],_[`drawer-content--${w}`],s),"data-ods":"drawer-content",ref:B,...d,style:{...d.style,...O?{}:{opacity:0}},children:r})})})});a.displayName="DrawerContent";a.__docgenInfo={description:"",methods:[],displayName:"DrawerContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"DRAWER_POSITION"},description:"The drawer position in the screen.",defaultValue:{value:"DRAWER_POSITION.left",computed:!0}}},composes:["ComponentPropsWithRef"]};const o=E.forwardRef(({children:r,...s},c)=>p.jsx(ie,{"data-ods":"drawer-trigger",ref:c,...s,children:r}));o.displayName="DrawerTrigger";o.__docgenInfo={description:"",methods:[],displayName:"DrawerTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const Be={argTypes:Ce(["defaultOpen","onOpenChange","open"]),component:t,subcomponents:{DrawerBody:n,DrawerContent:a,DrawerTrigger:o},title:"React Components/Drawer"},m={render:r=>e.createElement(t,{closeOnEscape:r.closeOnEscape,closeOnInteractOutside:r.closeOnInteractOutside},e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{position:r.position},e.createElement(n,null,r.content))),argTypes:he({closeOnEscape:{table:{category:b.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:b.general},control:{type:"boolean"}},content:{table:{category:b.slot},control:"text"},position:{table:{category:b.general,type:{summary:"DRAWER_POSITION"}},control:{type:"select"},options:be}}),args:{content:"My drawer content"}},u={globals:{imports:`import { Button, Drawer, DrawerBody, DrawerContent } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Te()}}},render:({})=>{const[r,s]=E.useState(!1);function c({open:d}){s(d)}function w(){s(!0)}return e.createElement(e.Fragment,null,e.createElement(l,{onClick:w},"Trigger Drawer"),e.createElement(t,{onOpenChange:c,open:r},e.createElement(a,null,e.createElement(n,null,"Content"))))}},g={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,null,e.createElement(n,null,"My drawer content")))},D={globals:{imports:"import { Button, Drawer, DrawerContent, DrawerBody, DrawerTrigger, ICON_NAME, Icon, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,null,e.createElement(n,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},e.createElement(me,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(ue,null),e.createElement(ge,{createPortal:!1})),e.createElement(De,null,e.createElement(ye,{asChild:!0},e.createElement(pe,{name:we.circleQuestion,style:{fontSize:"24px"}})),e.createElement(fe,{createPortal:!1},"This is the tooltip content")))))},y={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{position:i.left},e.createElement(n,null,"My drawer content")))},f={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",alignItems:"center",gap:"8px"}},r())],globals:{imports:"import { DRAWER_POSITION, Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Top drawer")),e.createElement(a,{position:i.top},e.createElement(n,null,"Top drawer content"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Left drawer")),e.createElement(a,{position:i.left},e.createElement(n,null,"Left drawer content"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Right Drawer")),e.createElement(a,{position:i.right},e.createElement(n,null,"Right drawer content"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Bottom Drawer")),e.createElement(a,{position:i.bottom},e.createElement(n,null,"Bottom drawer content"))))},C={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{"aria-describedby":"drawer-content","aria-labelledby":"drawer-title"},e.createElement(n,null,e.createElement("h2",{id:"drawer-title"},"My drawer"),e.createElement("p",{id:"drawer-content"},"The drawer content"))))},h={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{"aria-describedby":"drawer-content","aria-label":"My drawer"},e.createElement(n,{id:"drawer-content"},"The drawer content")))},T={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"12px"}},e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Left")),e.createElement(a,{createPortal:!1,position:i.left},e.createElement(n,null,"Left drawer"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Right")),e.createElement(a,{createPortal:!1,position:i.right},e.createElement(n,null,"Right drawer"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Top")),e.createElement(a,{createPortal:!1,position:i.top},e.createElement(n,null,"Top drawer"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Bottom")),e.createElement(a,{createPortal:!1,position:i.bottom},e.createElement(n,null,"Bottom drawer"))))};var v,R,I;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(R=m.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var S,P,N;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(P=u.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var x,A,W;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(W=(A=g.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var L,M,j;D.parameters={...D.parameters,docs:{...(L=D.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Drawer, DrawerContent, DrawerBody, DrawerTrigger, ICON_NAME, Icon, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Trigger Drawer
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerBody style={{
        display: 'grid',
        columnGap: '8px',
        alignItems: 'center',
        gridTemplateColumns: '1fr max-content'
      }}>
          <Select items={[{
          label: 'Dog',
          value: 'dog'
        }, {
          label: 'Cat',
          value: 'cat'
        }, {
          label: 'Hamster',
          value: 'hamster'
        }, {
          label: 'Parrot',
          value: 'parrot'
        }, {
          label: 'Spider',
          value: 'spider'
        }, {
          label: 'Goldfish',
          value: 'goldfish'
        }]}>
            <SelectControl />

            <SelectContent createPortal={false} />
          </Select>

          <Tooltip>
            <TooltipTrigger asChild>
              <Icon name={ICON_NAME.circleQuestion} style={{
              fontSize: '24px'
            }} />
            </TooltipTrigger>

            <TooltipContent createPortal={false}>
              This is the tooltip content
            </TooltipContent>
          </Tooltip>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
}`,...(j=(M=D.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var G,q,F;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(F=(q=y.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var k,Y,z;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var V,H,Q;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Q=(H=C.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,$,J;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=($=h.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,X,Z;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Oe=["Demo","Controlled","Default","OverlayElements","Overview","Position","AccessibilityAriaLabelledBy","AccessibilityAriaLabel","ThemeGenerator"],je=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:h,AccessibilityAriaLabelledBy:C,Controlled:u,Default:g,Demo:m,OverlayElements:D,Overview:y,Position:f,ThemeGenerator:T,__namedExportsOrder:Oe,default:Be},Symbol.toStringTag,{value:"Module"}));export{h as A,je as D,y as O,f as P,C as a,g as b,D as c};
