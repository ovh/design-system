import{B as l}from"./Button-B-GJ-1TA.js";import{r as B,e}from"./index-jIWwRBLr.js";import{j as w}from"./jsx-runtime-Cfl8ynUo.js";import{u as ie}from"./context-C_-r2uoG.js";import{D as ce,u as de,a as we,b as pe,c as me}from"./dialog-trigger-BqYWYiWM.js";import{c as ue}from"./index-CqY9YpN0.js";import{P as ge}from"./portal-DmTPQ5yQ.js";import{I as De,a as ye}from"./icon-name-D0KNfDOz.js";import{b as he,S as Ce,a as fe}from"./index-onrz60cw.js";import{b as Te,T as Ee,a as Be}from"./index-Ct9O8XVq.js";import{e as be,o as Oe,C as b}from"./controls-BtiQQn1l.js";import{s as _e}from"./source-CPEZJ6oD.js";const oe=B.createContext(void 0);function le({children:r,positionerStyle:i}){return w.jsx(oe.Provider,{value:{positionerStyle:i},children:r})}function ve(){return ie(oe)}le.__docgenInfo={description:"",methods:[],displayName:"DrawerProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const v=({children:r,closeOnEscape:i=!0,closeOnInteractOutside:c=!1,defaultOpen:p,onOpenChange:d,open:O,positionerStyle:_})=>w.jsx(le,{positionerStyle:_,children:w.jsx(ce,{closeOnEscape:i,closeOnInteractOutside:c,defaultOpen:p,modal:!1,onOpenChange:d,open:O,preventScroll:!1,trapFocus:!1,children:r})});v.displayName="Drawer";v.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the outside is clicked.",defaultValue:{value:"false",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the drawer. Use when you don't need to control the open state of the drawer."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: DrawerOpenChangeDetail) => void",signature:{arguments:[{type:{name:"DrawerOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the drawer open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the drawer."},positionerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom style applied to the overlay positioner."}}};const t=B.forwardRef(({children:r,className:i,...c},p)=>w.jsx("div",{className:i,"data-ods":"drawer-body",ref:p,...c,children:r}));t.displayName="DrawerBody";t.__docgenInfo={description:"",methods:[],displayName:"DrawerBody",composes:["ComponentPropsWithRef"]};var s=(r=>(r.bottom="bottom",r.left="left",r.right="right",r.top="top",r))(s||{});const Re=Object.freeze(Object.values(s)),R={"drawer-content":"_drawer-content_14d7s_2","drawer-content--bottom":"_drawer-content--bottom_14d7s_32","drawer-open-bottom":"_drawer-open-bottom_14d7s_1","drawer-close-bottom":"_drawer-close-bottom_14d7s_1","drawer-content--left":"_drawer-content--left_14d7s_60","drawer-open-left":"_drawer-open-left_14d7s_1","drawer-close-left":"_drawer-close-left_14d7s_1","drawer-content--right":"_drawer-content--right_14d7s_88","drawer-open-right":"_drawer-open-right_14d7s_1","drawer-close-right":"_drawer-close-right_14d7s_1","drawer-content--top":"_drawer-content--top_14d7s_116","drawer-open-top":"_drawer-open-top_14d7s_1","drawer-close-top":"_drawer-close-top_14d7s_1"},n=B.forwardRef(({children:r,className:i,createPortal:c=!0,position:p=s.left,...d},O)=>{const{open:_}=de(),{positionerStyle:se}=ve();return w.jsx(ge,{disabled:!c,children:w.jsx(we,{style:se,children:w.jsx(pe,{"aria-describedby":d["aria-describedby"]||"","aria-labelledby":d["aria-labelledby"]||"",className:ue(R["drawer-content"],R[`drawer-content--${p}`],i),"data-ods":"drawer-content",ref:O,...d,style:{...d.style,..._?{}:{opacity:0}},children:r})})})});n.displayName="DrawerContent";n.__docgenInfo={description:"",methods:[],displayName:"DrawerContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"DRAWER_POSITION"},description:"The drawer position in the screen.",defaultValue:{value:"DRAWER_POSITION.left",computed:!0}}},composes:["ComponentPropsWithRef"]};const a=B.forwardRef(({children:r,...i},c)=>w.jsx(me,{"data-ods":"drawer-trigger",ref:c,...i,children:r}));a.displayName="DrawerTrigger";a.__docgenInfo={description:"",methods:[],displayName:"DrawerTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const o=Object.assign(v,{Body:t,Content:n,Trigger:a}),Ie={argTypes:be(["defaultOpen","onOpenChange","open"]),component:o,subcomponents:{DrawerBody:t,DrawerContent:n,DrawerTrigger:a},title:"React Components/Drawer"},m={render:r=>e.createElement(o,{closeOnEscape:r.closeOnEscape,closeOnInteractOutside:r.closeOnInteractOutside},e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,{position:r.position},e.createElement(t,null,r.content))),argTypes:Oe({closeOnEscape:{table:{category:b.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:b.general},control:{type:"boolean"}},content:{table:{category:b.slot},control:"text"},position:{table:{category:b.general,type:{summary:"DRAWER_POSITION"}},control:{type:"select"},options:Re}}),args:{content:"My drawer content"}},u={tags:["!dev"],render:({})=>e.createElement(o,{open:!0},e.createElement(a,{asChild:!0},e.createElement(l,null,"Drawer trigger")),e.createElement(n,{createPortal:!1,position:s.right,style:{position:"absolute",width:"auto",height:"auto",animation:"none"}},e.createElement(t,null,"My drawer content")))},g={globals:{imports:`import { Button, Drawer, DrawerBody, DrawerContent } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{..._e()}}},render:({})=>{const[r,i]=B.useState(!1);function c({open:d}){i(d)}function p(){i(!0)}return e.createElement(e.Fragment,null,e.createElement(l,{onClick:p},"Trigger Drawer"),e.createElement(o,{onOpenChange:c,open:r},e.createElement(n,null,e.createElement(t,null,"Content"))))}},D={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,null,e.createElement(t,null,"My drawer content")))},y={globals:{imports:"import { Button, Drawer, DrawerContent, DrawerBody, DrawerTrigger, ICON_NAME, Icon, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,null,e.createElement(t,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},e.createElement(he,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(Ce,null),e.createElement(fe,{createPortal:!1})),e.createElement(Te,null,e.createElement(Ee,{asChild:!0},e.createElement(De,{name:ye.circleQuestion,style:{fontSize:"24px"}})),e.createElement(Be,{createPortal:!1},"This is the tooltip content")))))},h={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,{position:s.left},e.createElement(t,null,"My drawer content")))},C={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",alignItems:"center",gap:"8px"}},r())],globals:{imports:"import { DRAWER_POSITION, Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Top drawer")),e.createElement(n,{position:s.top},e.createElement(t,null,"Top drawer content"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Left drawer")),e.createElement(n,{position:s.left},e.createElement(t,null,"Left drawer content"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Right Drawer")),e.createElement(n,{position:s.right},e.createElement(t,null,"Right drawer content"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Bottom Drawer")),e.createElement(n,{position:s.bottom},e.createElement(t,null,"Bottom drawer content"))))},f={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,{"aria-describedby":"drawer-content","aria-labelledby":"drawer-title"},e.createElement(t,null,e.createElement("h2",{id:"drawer-title"},"My drawer"),e.createElement("p",{id:"drawer-content"},"The drawer content"))))},T={globals:{imports:"import { Button, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(n,{"aria-describedby":"drawer-content","aria-label":"My drawer"},e.createElement(t,{id:"drawer-content"},"The drawer content")))},E={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"12px"}},e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Left")),e.createElement(n,{createPortal:!1,position:s.left},e.createElement(t,null,"Left drawer"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Right")),e.createElement(n,{createPortal:!1,position:s.right},e.createElement(t,null,"Right drawer"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Top")),e.createElement(n,{createPortal:!1,position:s.top},e.createElement(t,null,"Top drawer"))),e.createElement(o,null,e.createElement(a,{asChild:!0},e.createElement(l,null,"Bottom")),e.createElement(n,{createPortal:!1,position:s.bottom},e.createElement(t,null,"Bottom drawer"))))};var I,S,P;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(S=m.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var N,x,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Drawer open>
      <DrawerTrigger asChild>
        <Button>
          Drawer trigger
        </Button>
      </DrawerTrigger>

      <DrawerContent createPortal={false} position={DRAWER_POSITION.right} style={{
      position: 'absolute',
      width: 'auto',
      height: 'auto',
      animation: 'none'
    }}>
        <DrawerBody>
          My drawer content
        </DrawerBody>
      </DrawerContent>
    </Drawer>
}`,...(A=(x=u.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var W,M,L;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(M=g.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var j,G,q;D.parameters={...D.parameters,docs:{...(j=D.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(G=D.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var F,k,Y;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Y=(k=y.parameters)==null?void 0:k.docs)==null?void 0:Y.source}}};var z,V,H;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(V=h.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var Q,U,$;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...($=(U=C.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var J,K,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(K=f.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Z,ee,re;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ne,ae;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const Se=["Demo","AnatomyTech","Controlled","Default","OverlayElements","Overview","Position","AccessibilityAriaLabelledBy","AccessibilityAriaLabel","ThemeGenerator"],Ye=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:T,AccessibilityAriaLabelledBy:f,AnatomyTech:u,Controlled:g,Default:D,Demo:m,OverlayElements:y,Overview:h,Position:C,ThemeGenerator:E,__namedExportsOrder:Se,default:Ie},Symbol.toStringTag,{value:"Module"}));export{T as A,Ye as D,h as O,C as P,f as a,u as b,D as c,y as d};
