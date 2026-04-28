import{B as l}from"./Button-B-GJ-1TA.js";import{r as E,e}from"./index-jIWwRBLr.js";import{j as p}from"./jsx-runtime-Cfl8ynUo.js";import{u as ae}from"./context-C_-r2uoG.js";import{D as oe,u as le,a as se,b as ie,c as ce}from"./dialog-trigger-CMq8CHVa.js";import{c as de}from"./index-CqY9YpN0.js";import{P as pe}from"./portal-DlVZGAaE.js";import{I as we,a as me}from"./icon-name-RfJfucZu.js";import{b as ue,S as ge,a as De}from"./index-BWF8qxTS.js";import{b as ye,T as Ce,a as fe}from"./index-Fe1E4PmL.js";import{e as he,o as Te,C as b}from"./controls-BtiQQn1l.js";import{s as Ee}from"./source-CPEZJ6oD.js";const re=E.createContext(void 0);function te({children:r,positionerStyle:s}){return p.jsx(re.Provider,{value:{positionerStyle:s},children:r})}function be(){return ae(re)}te.__docgenInfo={description:"",methods:[],displayName:"DrawerProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const _=({children:r,closeOnEscape:s=!0,closeOnInteractOutside:c=!1,defaultOpen:w,onOpenChange:d,open:B,positionerStyle:O})=>p.jsx(te,{positionerStyle:O,children:p.jsx(oe,{closeOnEscape:s,closeOnInteractOutside:c,defaultOpen:w,modal:!1,onOpenChange:d,open:B,preventScroll:!1,trapFocus:!1,children:r})});_.displayName="Drawer";_.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the outside is clicked.",defaultValue:{value:"false",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the drawer. Use when you don't need to control the open state of the drawer."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: DrawerOpenChangeDetail) => void",signature:{arguments:[{type:{name:"DrawerOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the drawer open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the drawer."},positionerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom style applied to the overlay positioner."}}};const t=E.forwardRef(({children:r,className:s,...c},w)=>p.jsx("div",{className:s,"data-ods":"drawer-body",ref:w,...c,children:r}));t.displayName="DrawerBody";t.__docgenInfo={description:"",methods:[],displayName:"DrawerBody",composes:["ComponentPropsWithRef"]};var i=(r=>(r.bottom="bottom",r.left="left",r.right="right",r.top="top",r))(i||{});const Be=Object.freeze(Object.values(i)),v={"drawer-content":"_drawer-content_14d7s_2","drawer-content--bottom":"_drawer-content--bottom_14d7s_32","drawer-open-bottom":"_drawer-open-bottom_14d7s_1","drawer-close-bottom":"_drawer-close-bottom_14d7s_1","drawer-content--left":"_drawer-content--left_14d7s_60","drawer-open-left":"_drawer-open-left_14d7s_1","drawer-close-left":"_drawer-close-left_14d7s_1","drawer-content--right":"_drawer-content--right_14d7s_88","drawer-open-right":"_drawer-open-right_14d7s_1","drawer-close-right":"_drawer-close-right_14d7s_1","drawer-content--top":"_drawer-content--top_14d7s_116","drawer-open-top":"_drawer-open-top_14d7s_1","drawer-close-top":"_drawer-close-top_14d7s_1"},n=E.forwardRef(({children:r,className:s,createPortal:c=!0,position:w=i.left,...d},B)=>{const{open:O}=le(),{positionerStyle:ne}=be();return p.jsx(pe,{disabled:!c,children:p.jsx(se,{style:ne,children:p.jsx(ie,{"aria-describedby":d["aria-describedby"]||"","aria-labelledby":d["aria-labelledby"]||"",className:de(v["drawer-content"],v[`drawer-content--${w}`],s),"data-ods":"drawer-content",ref:B,...d,style:{...d.style,...O?{}:{opacity:0}},children:r})})})});n.displayName="DrawerContent";n.__docgenInfo={description:"",methods:[],displayName:"DrawerContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"DRAWER_POSITION"},description:"The drawer position in the screen.",defaultValue:{value:"DRAWER_POSITION.left",computed:!0}}},composes:["ComponentPropsWithRef"]};const a=E.forwardRef(({children:r,...s},c)=>p.jsx(ce,{"data-ods":"drawer-trigger",ref:c,...s,children:r}));a.displayName="DrawerTrigger";a.__docgenInfo={description:"",methods:[],displayName:"DrawerTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const o=Object.assign(_,{Body:t,Content:n,Trigger:a}),Oe={argTypes:he(["defaultOpen","onOpenChange","open"]),component:o,subcomponents:{DrawerBody:t,DrawerContent:n,DrawerTrigger:a},title:"React Components/Drawer"},m={render:r=>e.createElement(o,{closeOnEscape:r.closeOnEscape,closeOnInteractOutside:r.closeOnInteractOutside},e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,{position:r.position},e.createElement(t,null,r.content))),argTypes:Te({closeOnEscape:{table:{category:b.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:b.general},control:{type:"boolean"}},content:{table:{category:b.slot},control:"text"},position:{table:{category:b.general,type:{summary:"DRAWER_POSITION"}},control:{type:"select"},options:Be}}),args:{content:"My drawer content"}},u={globals:{imports:`import { Button, Drawer, DrawerBody, DrawerContent } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Ee()}}},render:({})=>{const[r,s]=E.useState(!1);function c({open:d}){s(d)}function w(){s(!0)}return e.createElement(e.Fragment,null,e.createElement(l,{onClick:w},"Trigger Drawer"),e.createElement(o,{onOpenChange:c,open:r},e.createElement(n,null,e.createElement(t,null,"Content"))))}},g={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,null,e.createElement(t,null,"My drawer content")))},D={globals:{imports:"import { Button, Drawer, DrawerContent, DrawerBody, DrawerTrigger, ICON_NAME, Icon, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,null,e.createElement(t,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},e.createElement(ue,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(ge,null),e.createElement(De,{createPortal:!1})),e.createElement(ye,null,e.createElement(Ce,{asChild:!0},e.createElement(we,{name:me.circleQuestion,style:{fontSize:"24px"}})),e.createElement(fe,{createPortal:!1},"This is the tooltip content")))))},y={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,{position:i.left},e.createElement(t,null,"My drawer content")))},C={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",alignItems:"center",gap:"8px"}},r())],globals:{imports:"import { DRAWER_POSITION, Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Top drawer")),e.createElement(n,{position:i.top},e.createElement(t,null,"Top drawer content"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Left drawer")),e.createElement(n,{position:i.left},e.createElement(t,null,"Left drawer content"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Right Drawer")),e.createElement(n,{position:i.right},e.createElement(t,null,"Right drawer content"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Bottom Drawer")),e.createElement(n,{position:i.bottom},e.createElement(t,null,"Bottom drawer content"))))},f={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,{"aria-describedby":"drawer-content","aria-labelledby":"drawer-title"},e.createElement(t,null,e.createElement("h2",{id:"drawer-title"},"My drawer"),e.createElement("p",{id:"drawer-content"},"The drawer content"))))},h={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,{"aria-describedby":"drawer-content","aria-label":"My drawer"},e.createElement(t,{id:"drawer-content"},"The drawer content")))},T={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"12px"}},e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Left")),e.createElement(n,{createPortal:!1,position:i.left},e.createElement(t,null,"Left drawer"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Right")),e.createElement(n,{createPortal:!1,position:i.right},e.createElement(t,null,"Right drawer"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Top")),e.createElement(n,{createPortal:!1,position:i.top},e.createElement(t,null,"Top drawer"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Bottom")),e.createElement(n,{createPortal:!1,position:i.bottom},e.createElement(t,null,"Bottom drawer"))))};var R,I,S;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(S=(I=m.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var P,N,x;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(x=(N=u.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var A,W,L;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(W=g.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var M,j,G;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(j=D.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var q,F,k;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(k=(F=y.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var Y,z,V;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(V=(z=C.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var H,Q,U;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var $,J,K;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Z,ee;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const _e=["Demo","Controlled","Default","OverlayElements","Overview","Position","AccessibilityAriaLabelledBy","AccessibilityAriaLabel","ThemeGenerator"],Ge=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:h,AccessibilityAriaLabelledBy:f,Controlled:u,Default:g,Demo:m,OverlayElements:D,Overview:y,Position:C,ThemeGenerator:T,__namedExportsOrder:_e,default:Oe},Symbol.toStringTag,{value:"Module"}));export{h as A,Ge as D,y as O,C as P,f as a,g as b,D as c};
