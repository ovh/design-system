import{B as i}from"./Button-CbWLwkmI.js";import{r as h,e}from"./index-D_CmzhJ4.js";import{j as p}from"./jsx-runtime-VM66peLj.js";import{D as L,a as q,b as M,c as F}from"./dialog-trigger-lgJEWCCF.js";import{c as k}from"./index-CkQHsVsO.js";import{P as G}from"./portal-Bd62KldU.js";import{e as Y,o as V,C as f}from"./controls-BtiQQn1l.js";import{s as z}from"./source-d0g_Nd0q.js";const n=({children:r,closeOnEscape:a=!0,closeOnInteractOutside:l=!1,defaultOpen:d,onOpenChange:w,open:O})=>p.jsx(L,{closeOnEscape:a,closeOnInteractOutside:l,defaultOpen:d,modal:!1,onOpenChange:w,open:O,preventScroll:!1,trapFocus:!1,children:r});n.displayName="Drawer";n.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the outside is clicked.",defaultValue:{value:"false",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the drawer. Use when you don't need to control the open state of the drawer."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: DrawerOpenChangeDetail) => void",signature:{arguments:[{type:{name:"DrawerOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the drawer open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the drawer."}}};const t=h.forwardRef(({children:r,className:a,...l},d)=>p.jsx("div",{className:a,ref:d,...l,children:r}));t.displayName="DrawerBody";t.__docgenInfo={description:"",methods:[],displayName:"DrawerBody",composes:["ComponentPropsWithRef"]};var c=(r=>(r.bottom="bottom",r.left="left",r.right="right",r.top="top",r))(c||{});const U=Object.freeze(Object.values(c)),y={"drawer-positioner__content":"_drawer-positioner__content_19s0u_2","drawer-positioner__content--bottom":"_drawer-positioner__content--bottom_19s0u_29","drawer-open-bottom":"_drawer-open-bottom_19s0u_1","drawer-close-bottom":"_drawer-close-bottom_19s0u_1","drawer-positioner__content--left":"_drawer-positioner__content--left_19s0u_57","drawer-open-left":"_drawer-open-left_19s0u_1","drawer-close-left":"_drawer-close-left_19s0u_1","drawer-positioner__content--right":"_drawer-positioner__content--right_19s0u_85","drawer-open-right":"_drawer-open-right_19s0u_1","drawer-close-right":"_drawer-close-right_19s0u_1","drawer-positioner__content--top":"_drawer-positioner__content--top_19s0u_113","drawer-open-top":"_drawer-open-top_19s0u_1","drawer-close-top":"_drawer-close-top_19s0u_1"},o=h.forwardRef(({children:r,className:a,createPortal:l=!0,position:d=c.left,...w},O)=>p.jsx(G,{disabled:!l,children:p.jsx(q,{className:y["drawer-positioner"],children:p.jsx(M,{className:k(y["drawer-positioner__content"],y[`drawer-positioner__content--${d}`],a),ref:O,...w,children:r})})}));o.displayName="DrawerContent";o.__docgenInfo={description:"",methods:[],displayName:"DrawerContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"DRAWER_POSITION"},description:"The drawer position in the screen.",defaultValue:{value:"DRAWER_POSITION.left",computed:!0}}},composes:["ComponentPropsWithRef"]};const s=h.forwardRef(({children:r,...a},l)=>p.jsx(F,{ref:l,...a,children:r}));s.displayName="DrawerTrigger";s.__docgenInfo={description:"",methods:[],displayName:"DrawerTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Use the provided child element as the default rendered element, combining their props and behavior."}},composes:["ComponentPropsWithRef"]};const $={argTypes:Y(["defaultOpen","onOpenChange","open"]),component:n,subcomponents:{DrawerBody:t,DrawerContent:o,DrawerTrigger:s},title:"React Components/Drawer"},m={render:r=>e.createElement(n,{closeOnEscape:r.closeOnEscape,closeOnInteractOutside:r.closeOnInteractOutside},e.createElement(s,{asChild:!0},e.createElement(i,null,"Trigger Drawer")),e.createElement(o,{position:r.position},e.createElement(t,null,r.content))),argTypes:V({closeOnEscape:{table:{category:f.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:f.general},control:{type:"boolean"}},content:{table:{category:f.slot},control:"text"},position:{table:{category:f.general,type:{summary:"DRAWER_POSITION"}},control:{type:"select"},options:U}}),args:{content:"My drawer content"}},u={tags:["!dev"],parameters:{docs:{source:{...z()}}},render:({})=>{const[r,a]=h.useState(!1);function l({open:w}){a(w)}function d(){a(!0)}return e.createElement(e.Fragment,null,e.createElement(i,{onClick:d},"Trigger Drawer"),e.createElement(n,{onOpenChange:l,open:r},e.createElement(o,null,e.createElement(t,null,"Content"))))}},g={tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(i,null,"Trigger Drawer")),e.createElement(o,null,e.createElement(t,null,"My drawer content")))},D={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(i,null,"Trigger Drawer")),e.createElement(o,{position:c.left},e.createElement(t,null,"My drawer content")))},_={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",alignItems:"center",gap:"8px"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(i,null,"Top drawer")),e.createElement(o,{position:c.top},e.createElement(t,null,"Top drawer content"))),e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(i,null,"Left drawer")),e.createElement(o,{position:c.left},e.createElement(t,null,"Left drawer content"))),e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(i,null,"Right Drawer")),e.createElement(o,{position:c.right},e.createElement(t,null,"Right drawer content"))),e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(i,null,"Bottom Drawer")),e.createElement(o,{position:c.bottom},e.createElement(t,null,"Bottom drawer content"))))};var C,E,T;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(E=m.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var b,B,R;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(R=(B=u.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var I,v,N;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(v=g.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var S,x,P;D.parameters={...D.parameters,docs:{...(S=D.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(x=D.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var A,W,j;_.parameters={..._.parameters,docs:{...(A=_.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    gap: '8px'
  }}>{story()}</div>],
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
}`,...(j=(W=_.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const H=["Demo","Controlled","Default","Overview","Position"],te=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:g,Demo:m,Overview:D,Position:_,__namedExportsOrder:H,default:$},Symbol.toStringTag,{value:"Module"}));export{te as D,D as O,_ as P,g as a};
