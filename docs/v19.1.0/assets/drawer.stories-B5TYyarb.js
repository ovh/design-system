import{B as l}from"./Button-Cu9Xbu09.js";import{r as C,e}from"./index-D_CmzhJ4.js";import{j as w}from"./jsx-runtime-VM66peLj.js";import{D as z,a as U,b as $,c as H}from"./dialog-trigger-BvXFYgVb.js";import{c as J}from"./index-CkQHsVsO.js";import{P as K}from"./portal-CjJhVgfZ.js";import{e as Q,o as X,C as f}from"./controls-BtiQQn1l.js";import{s as Z}from"./source-d0g_Nd0q.js";const t=({children:r,closeOnEscape:s=!0,closeOnInteractOutside:i=!1,defaultOpen:d,onOpenChange:p,open:O})=>w.jsx(z,{closeOnEscape:s,closeOnInteractOutside:i,defaultOpen:d,modal:!1,onOpenChange:p,open:O,preventScroll:!1,trapFocus:!1,children:r});t.displayName="Drawer";t.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the drawer when the outside is clicked.",defaultValue:{value:"false",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the drawer. Use when you don't need to control the open state of the drawer."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: DrawerOpenChangeDetail) => void",signature:{arguments:[{type:{name:"DrawerOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the drawer open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the drawer."}}};const n=C.forwardRef(({children:r,className:s,...i},d)=>w.jsx("div",{className:s,"data-ods":"drawer-body",ref:d,...i,children:r}));n.displayName="DrawerBody";n.__docgenInfo={description:"",methods:[],displayName:"DrawerBody",composes:["ComponentPropsWithRef"]};var c=(r=>(r.bottom="bottom",r.left="left",r.right="right",r.top="top",r))(c||{});const ee=Object.freeze(Object.values(c)),E={"drawer-positioner__content":"_drawer-positioner__content_19s0u_2","drawer-positioner__content--bottom":"_drawer-positioner__content--bottom_19s0u_29","drawer-open-bottom":"_drawer-open-bottom_19s0u_1","drawer-close-bottom":"_drawer-close-bottom_19s0u_1","drawer-positioner__content--left":"_drawer-positioner__content--left_19s0u_57","drawer-open-left":"_drawer-open-left_19s0u_1","drawer-close-left":"_drawer-close-left_19s0u_1","drawer-positioner__content--right":"_drawer-positioner__content--right_19s0u_85","drawer-open-right":"_drawer-open-right_19s0u_1","drawer-close-right":"_drawer-close-right_19s0u_1","drawer-positioner__content--top":"_drawer-positioner__content--top_19s0u_113","drawer-open-top":"_drawer-open-top_19s0u_1","drawer-close-top":"_drawer-close-top_19s0u_1"},a=C.forwardRef(({children:r,className:s,createPortal:i=!0,position:d=c.left,...p},O)=>w.jsx(K,{disabled:!i,children:w.jsx(U,{className:E["drawer-positioner"],children:w.jsx($,{"aria-describedby":p["aria-describedby"]||"","aria-labelledby":p["aria-labelledby"]||"",className:J(E["drawer-positioner__content"],E[`drawer-positioner__content--${d}`],s),"data-ods":"drawer-content",ref:O,...p,children:r})})}));a.displayName="DrawerContent";a.__docgenInfo={description:"",methods:[],displayName:"DrawerContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"DRAWER_POSITION"},description:"The drawer position in the screen.",defaultValue:{value:"DRAWER_POSITION.left",computed:!0}}},composes:["ComponentPropsWithRef"]};const o=C.forwardRef(({children:r,...s},i)=>w.jsx(H,{"data-ods":"drawer-trigger",ref:i,...s,children:r}));o.displayName="DrawerTrigger";o.__docgenInfo={description:"",methods:[],displayName:"DrawerTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const re={argTypes:Q(["defaultOpen","onOpenChange","open"]),component:t,subcomponents:{DrawerBody:n,DrawerContent:a,DrawerTrigger:o},title:"React Components/Drawer"},m={render:r=>e.createElement(t,{closeOnEscape:r.closeOnEscape,closeOnInteractOutside:r.closeOnInteractOutside},e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{position:r.position},e.createElement(n,null,r.content))),argTypes:X({closeOnEscape:{table:{category:f.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:f.general},control:{type:"boolean"}},content:{table:{category:f.slot},control:"text"},position:{table:{category:f.general,type:{summary:"DRAWER_POSITION"}},control:{type:"select"},options:ee}}),args:{content:"My drawer content"}},u={tags:["!dev"],parameters:{docs:{source:{...Z()}}},render:({})=>{const[r,s]=C.useState(!1);function i({open:p}){s(p)}function d(){s(!0)}return e.createElement(e.Fragment,null,e.createElement(l,{onClick:d},"Trigger Drawer"),e.createElement(t,{onOpenChange:i,open:r},e.createElement(a,null,e.createElement(n,null,"Content"))))}},g={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,null,e.createElement(n,null,"My drawer content")))},D={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{position:c.left},e.createElement(n,null,"My drawer content")))},y={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",alignItems:"center",gap:"8px"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Top drawer")),e.createElement(a,{position:c.top},e.createElement(n,null,"Top drawer content"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Left drawer")),e.createElement(a,{position:c.left},e.createElement(n,null,"Left drawer content"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Right Drawer")),e.createElement(a,{position:c.right},e.createElement(n,null,"Right drawer content"))),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Bottom Drawer")),e.createElement(a,{position:c.bottom},e.createElement(n,null,"Bottom drawer content"))))},h={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{"aria-describedby":"drawer-content","aria-labelledby":"drawer-title"},e.createElement(n,null,e.createElement("h2",{id:"drawer-title"},"My drawer"),e.createElement("p",{id:"drawer-content"},"The drawer content"))))},_={tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(l,null,"Trigger Drawer")),e.createElement(a,{"aria-describedby":"drawer-content","aria-label":"My drawer"},e.createElement(n,{id:"drawer-content"},"The drawer content")))};var T,b,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(b=m.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var R,I,v;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(v=(I=u.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var N,S,A;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(S=g.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var x,P,W;D.parameters={...D.parameters,docs:{...(x=D.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(W=(P=D.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var L,j,M;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(j=y.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var q,F,k;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(k=(F=h.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var G,Y,V;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(V=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};const te=["Demo","Controlled","Default","Overview","Position","AccessibilityAriaLabelledBy","AccessibilityAriaLabel"],pe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:_,AccessibilityAriaLabelledBy:h,Controlled:u,Default:g,Demo:m,Overview:D,Position:y,__namedExportsOrder:te,default:re},Symbol.toStringTag,{value:"Module"}));export{_ as A,pe as D,D as O,y as P,h as a,g as b};
