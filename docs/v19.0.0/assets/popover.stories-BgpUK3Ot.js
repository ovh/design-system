import{r as v,e as r}from"./index-D_CmzhJ4.js";import{B as D}from"./Button-CbWLwkmI.js";import{I as ve,a as Pe}from"./icon-name-BOrBmUKT.js";import{j as d}from"./jsx-runtime-VM66peLj.js";import{a as fe,O as Oe}from"./overlay-CZHjGBMC.js";import{s as he,P as Ee}from"./portal-Bd62KldU.js";import{u as _,a as Te,P as Ce}from"./use-presence-Cqrqn20p.js";import{c as we,Q as h,R,S as ye,T as Ie,W as Re,Z as be,K as xe,H as Se,r as A,ae as j,af as Ae,u as Ne,U as Le,L as Fe,V as Be}from"./use-locale-context-BQVaQ0H3.js";import{g as De,a as V}from"./index-xSrPfE2G.js";import{a as _e}from"./index-DninfMAu.js";import{t as ke}from"./index-DHCC0GIt.js";import{t as je,p as Ve}from"./index-hWLJHUef.js";import{c as Ge}from"./index-CkQHsVsO.js";import{e as Me,o as $e,C as N}from"./controls-BtiQQn1l.js";import{s as Ye}from"./source-d0g_Nd0q.js";const[qe,b]=we({name:"PopoverContext",hookName:"usePopoverContext",providerName:"<PopoverProvider />"}),ie=v.forwardRef((e,o)=>{const t=b(),n=h(t.getArrowProps(),e);return d.jsx(R.div,{...n,ref:o})});ie.displayName="PopoverArrow";const ae=v.forwardRef((e,o)=>{const t=b(),n=h(t.getArrowTipProps(),e);return d.jsx(R.div,{...n,ref:o})});ae.displayName="PopoverArrowTip";const pe=v.forwardRef((e,o)=>{const t=b(),n=_(),s=h(t.getContentProps(),n.getPresenceProps(),e);return n.unmounted?null:d.jsx(R.div,{...s,ref:ye(n.ref,o)})});pe.displayName="PopoverContent";const le=v.forwardRef((e,o)=>{const t=b(),n=_(),s=h(t.getPositionerProps(),e);return n.unmounted?null:d.jsx(R.div,{...s,ref:o})});le.displayName="PopoverPositioner";var We=Ie("popover").parts("arrow","arrowTip","anchor","trigger","indicator","positioner","content","title","description","closeTrigger"),m=We.build(),ce=e=>{var o;return((o=e.ids)==null?void 0:o.anchor)??`popover:${e.id}:anchor`},de=e=>{var o;return((o=e.ids)==null?void 0:o.trigger)??`popover:${e.id}:trigger`},L=e=>{var o;return((o=e.ids)==null?void 0:o.content)??`popover:${e.id}:content`},ue=e=>{var o;return((o=e.ids)==null?void 0:o.positioner)??`popover:${e.id}:popper`},Ke=e=>{var o;return((o=e.ids)==null?void 0:o.arrow)??`popover:${e.id}:arrow`},F=e=>{var o;return((o=e.ids)==null?void 0:o.title)??`popover:${e.id}:title`},B=e=>{var o;return((o=e.ids)==null?void 0:o.description)??`popover:${e.id}:desc`},Ue=e=>{var o;return((o=e.ids)==null?void 0:o.closeTrigger)??`popover:${e.id}:close`},G=e=>e.getById(ce(e)),f=e=>e.getById(de(e)),O=e=>e.getById(L(e)),M=e=>e.getById(ue(e)),He=e=>e.getById(F(e)),Qe=e=>e.getById(B(e));function Ze(e,o){const{state:t,context:n,send:s,computed:i,prop:a,scope:g}=e,P=t.matches("open"),x=n.get("currentPlacement"),me=i("currentPortalled"),k=n.get("renderedElements"),S=De({...a("positioning"),placement:x});return{portalled:me,open:P,setOpen(u){t.matches("open")!==u&&s({type:u?"OPEN":"CLOSE"})},reposition(u={}){s({type:"POSITIONING.SET",options:u})},getArrowProps(){return o.element({id:Ke(g),...m.arrow.attrs,dir:a("dir"),style:S.arrow})},getArrowTipProps(){return o.element({...m.arrowTip.attrs,dir:a("dir"),style:S.arrowTip})},getAnchorProps(){return o.element({...m.anchor.attrs,dir:a("dir"),id:ce(g)})},getTriggerProps(){return o.button({...m.trigger.attrs,dir:a("dir"),type:"button","data-placement":x,id:de(g),"aria-haspopup":"dialog","aria-expanded":P,"data-state":P?"open":"closed","aria-controls":L(g),onPointerDown(u){be()&&u.currentTarget.focus()},onClick(u){u.defaultPrevented||s({type:"TOGGLE"})},onBlur(u){s({type:"TRIGGER_BLUR",target:u.relatedTarget})}})},getIndicatorProps(){return o.element({...m.indicator.attrs,dir:a("dir"),"data-state":P?"open":"closed"})},getPositionerProps(){return o.element({id:ue(g),...m.positioner.attrs,dir:a("dir"),style:S.floating})},getContentProps(){return o.element({...m.content.attrs,dir:a("dir"),id:L(g),tabIndex:-1,role:"dialog",hidden:!P,"data-state":P?"open":"closed","data-expanded":Re(P),"aria-labelledby":k.title?F(g):void 0,"aria-describedby":k.description?B(g):void 0,"data-placement":x})},getTitleProps(){return o.element({...m.title.attrs,id:F(g),dir:a("dir")})},getDescriptionProps(){return o.element({...m.description.attrs,id:B(g),dir:a("dir")})},getCloseTriggerProps(){return o.button({...m.closeTrigger.attrs,dir:a("dir"),id:Ue(g),type:"button","aria-label":"close",onClick(u){u.defaultPrevented||(u.stopPropagation(),s({type:"CLOSE"}))}})}}}var Je=Se({props({props:e}){return{closeOnInteractOutside:!0,closeOnEscape:!0,autoFocus:!0,modal:!1,portalled:!0,...e,positioning:{placement:"bottom",...e.positioning}}},initialState({prop:e}){return e("open")||e("defaultOpen")?"open":"closed"},context({bindable:e}){return{currentPlacement:e(()=>({defaultValue:void 0})),renderedElements:e(()=>({defaultValue:{title:!0,description:!0}}))}},computed:{currentPortalled:({prop:e})=>!!e("modal")||!!e("portalled")},watch({track:e,prop:o,action:t}){e([()=>o("open")],()=>{t(["toggleVisibility"])})},entry:["checkRenderedElements"],states:{closed:{on:{"CONTROLLED.OPEN":{target:"open",actions:["setInitialFocus"]},TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen","setInitialFocus"]}],OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen","setInitialFocus"]}]}},open:{effects:["trapFocus","preventScroll","hideContentBelow","trackPositioning","trackDismissableElement","proxyTabFocus"],on:{"CONTROLLED.CLOSE":{target:"closed",actions:["setFinalFocus"]},CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose","setFinalFocus"]}],TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"POSITIONING.SET":{actions:["reposition"]}}}},implementations:{guards:{isOpenControlled:({prop:e})=>e("open")!=null},effects:{trackPositioning({context:e,prop:o,scope:t}){e.set("currentPlacement",o("positioning").placement);const n=G(t)??f(t);return V(n,()=>M(t),{...o("positioning"),defer:!0,onComplete(i){e.set("currentPlacement",i.placement)}})},trackDismissableElement({send:e,prop:o,scope:t}){const n=()=>O(t);let s=!0;return ke(n,{pointerBlocking:o("modal"),exclude:f(t),defer:!0,onEscapeKeyDown(i){var a;(a=o("onEscapeKeyDown"))==null||a(i),!o("closeOnEscape")&&i.preventDefault()},onInteractOutside(i){var a;(a=o("onInteractOutside"))==null||a(i),!i.defaultPrevented&&(s=!(i.detail.focusable||i.detail.contextmenu),o("closeOnInteractOutside")||i.preventDefault())},onPointerDownOutside:o("onPointerDownOutside"),onFocusOutside:o("onFocusOutside"),persistentElements:o("persistentElements"),onDismiss(){e({type:"CLOSE",src:"interact-outside",restoreFocus:s})}})},proxyTabFocus({prop:e,scope:o}){return e("modal")||!e("portalled")?void 0:Ae(()=>O(o),{triggerElement:f(o),defer:!0,onFocus(n){n.focus({preventScroll:!0})}})},hideContentBelow({prop:e,scope:o}){return e("modal")?_e(()=>[O(o),f(o)],{defer:!0}):void 0},preventScroll({prop:e,scope:o}){if(e("modal"))return Ve(o.getDoc())},trapFocus({prop:e,scope:o}){return e("modal")?je(()=>O(o),{initialFocus:()=>j({root:O(o),getInitialEl:e("initialFocusEl"),enabled:e("autoFocus")})}):void 0}},actions:{reposition({event:e,prop:o,scope:t,context:n}){const s=G(t)??f(t);V(s,()=>M(t),{...o("positioning"),...e.options,defer:!0,listeners:!1,onComplete(a){n.set("currentPlacement",a.placement)}})},checkRenderedElements({context:e,scope:o}){A(()=>{Object.assign(e.get("renderedElements"),{title:!!He(o),description:!!Qe(o)})})},setInitialFocus({prop:e,scope:o}){e("modal")||A(()=>{const t=j({root:O(o),getInitialEl:e("initialFocusEl"),enabled:e("autoFocus")});t==null||t.focus({preventScroll:!0})})},setFinalFocus({event:e,scope:o}){var n;const t=e.restoreFocus??((n=e.previousEvent)==null?void 0:n.restoreFocus);t!=null&&!t||A(()=>{const s=f(o);s==null||s.focus({preventScroll:!0})})},invokeOnOpen({prop:e}){var o;(o=e("onOpenChange"))==null||o({open:!0})},invokeOnClose({prop:e}){var o;(o=e("onOpenChange"))==null||o({open:!1})},toggleVisibility({event:e,send:o,prop:t}){o({type:t("open")?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:e})}}}});xe()(["autoFocus","closeOnEscape","closeOnInteractOutside","dir","getRootNode","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","defaultOpen","open","persistentElements","portalled","positioning"]);const Xe=e=>{const o=v.useId(),{getRootNode:t}=Ne(),{dir:n}=Le(),s={id:o,dir:n,getRootNode:t,...e},i=Fe(Je,s);return Ze(i,Be)},ze=e=>{const[o,{children:t,...n}]=he(e),s=Xe(n),i=Te(h({present:s.open},o));return d.jsx(qe,{value:s,children:d.jsx(Ce,{value:i,children:t})})},ge=v.forwardRef((e,o)=>{const t=b(),n=_(),s=h({...t.getTriggerProps(),"aria-controls":n.unmounted?void 0:t.getTriggerProps()["aria-controls"]},e);return d.jsx(R.button,{...s,ref:o})});ge.displayName="PopoverTrigger";const p=({children:e,onOpenChange:o,open:t,position:n=fe.top,...s})=>d.jsx(ze,{onOpenChange:o,open:t,positioning:{placement:n},...s,children:e});p.displayName="Popover";p.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PopoverOpenChangeDetail) => void",signature:{arguments:[{type:{name:"PopoverOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the popover open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the popover."},position:{required:!1,tsType:{name:"literal",value:"`${OVERLAY_POSITION}`"},description:`@type=POPOVER_POSITION
The popover position around the trigger.`,defaultValue:{value:"POPOVER_POSITION.top",computed:!0}}}};const eo={"popover-content":"_popover-content_6kx3n_2"},l=v.forwardRef(({children:e,className:o,createPortal:t=!0,withArrow:n=!1,...s},i)=>d.jsx(Ee,{disabled:!t,children:d.jsx(le,{children:d.jsxs(pe,{className:Ge(eo["popover-content"],o),ref:i,...s,children:[n&&d.jsx(ie,{children:d.jsx(ae,{})}),e]})})}));l.displayName="PopoverContent";l.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},withArrow:{required:!1,tsType:{name:"boolean"},description:"Whether the component displays an arrow pointing to the trigger.",defaultValue:{value:"false",computed:!1}}},composes:["ComponentPropsWithRef"]};const c=v.forwardRef(({children:e,...o},t)=>d.jsx(ge,{ref:t,...o,children:e}));c.displayName="PopoverTrigger";c.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Use the provided child element as the default rendered element, combining their props and behavior."}},composes:["ComponentPropsWithRef"]};const oo={argTypes:Me(["onOpenChange","open"]),component:p,subcomponents:{PopoverContent:l,PopoverTrigger:c},title:"React Components/Popover"},E={parameters:{layout:"centered"},render:e=>r.createElement(p,{position:e.position},r.createElement(c,null,"Show popover"),r.createElement(l,{withArrow:e.withArrow},e.content)),argTypes:$e({content:{table:{category:N.slot},control:"text"},position:{table:{category:N.general,type:{summary:"POPOVER_POSITION"}},control:{type:"select"},options:Oe},withArrow:{table:{category:N.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My popover content"}},T={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],parameters:{docs:{source:{...Ye()}}},render:({})=>{const[e,o]=v.useState(!1);function t(){o(n=>!n)}return r.createElement(r.Fragment,null,r.createElement(D,{onClick:t},"Toggle popover"),r.createElement(p,{open:e},r.createElement(c,{asChild:!0},r.createElement(ve,{name:Pe.cog})),r.createElement(l,{withArrow:!0},"This is the popover content")))}},C={tags:["!dev"],render:({})=>r.createElement(p,null,r.createElement(c,{asChild:!0},r.createElement(D,null,"Custom Trigger")),r.createElement(l,null,"This is the popover content"))},w={tags:["!dev"],render:({})=>r.createElement(p,null,r.createElement(c,null,"Show popover"),r.createElement(l,null,"This is the popover content"))},y={decorators:[e=>r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},e())],tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(p,{position:"top-start"},r.createElement(c,null,"Top Left"),r.createElement(l,{withArrow:!0},"Top Left popover")),r.createElement(p,{position:"top"},r.createElement(c,null,"Top"),r.createElement(l,{withArrow:!0},"Top popover")),r.createElement(p,{position:"top-end"},r.createElement(c,null,"Top Right"),r.createElement(l,{withArrow:!0},"Top Right popover")),r.createElement(p,{position:"left"},r.createElement(c,null,"Middle Left"),r.createElement(l,{withArrow:!0},"Middle Left popover")),r.createElement("div",null),r.createElement(p,{position:"right"},r.createElement(c,null,"Middle Right"),r.createElement(l,{withArrow:!0},"Middle Right popover")),r.createElement(p,{position:"bottom-start"},r.createElement(c,null,"Bottom Left"),r.createElement(l,{withArrow:!0},"Bottom Left popover")),r.createElement(p,{position:"bottom"},r.createElement(c,null,"Bottom"),r.createElement(l,{withArrow:!0},"Bottom popover")),r.createElement(p,{position:"bottom-end"},r.createElement(c,null,"Bottom Right"),r.createElement(l,{withArrow:!0},"Bottom Right popover")))},I={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(p,null,r.createElement(c,{asChild:!0},r.createElement(D,null,"Show popover")),r.createElement(l,null,"This is the popover content"))};var $,Y,q;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: (arg: DemoArg) => <Popover position={arg.position}>
      <PopoverTrigger>
        Show popover
      </PopoverTrigger>

      <PopoverContent withArrow={arg.withArrow}>
        {arg.content}
      </PopoverContent>
    </Popover>,
  argTypes: orderControls({
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
          summary: 'POPOVER_POSITION'
        }
      },
      control: {
        type: 'select'
      },
      options: POPOVER_POSITIONS
    },
    withArrow: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: {
        type: 'boolean'
      }
    }
  }),
  args: {
    content: 'My popover content'
  }
}`,...(q=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var W,K,U;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
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
    function togglePopover() {
      setIsOpen(isOpen => !isOpen);
    }
    return <>
        <Button onClick={togglePopover}>
          Toggle popover
        </Button>

        <Popover open={isOpen}>
          <PopoverTrigger asChild>
            <Icon name={ICON_NAME.cog} />
          </PopoverTrigger>

          <PopoverContent withArrow>
            This is the popover content
          </PopoverContent>
        </Popover>
      </>;
  }
}`,...(U=(K=T.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var H,Q,Z;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Popover>
      <PopoverTrigger asChild>
        <Button>
          Custom Trigger
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(Z=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var J,X,z;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Popover>
      <PopoverTrigger>
        Show popover
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var ee,oe,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '50px 150px'
  }}>
      {story()}
    </div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Popover position="top-start">
        <PopoverTrigger>
          Top Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top Left popover
        </PopoverContent>
      </Popover>

      <Popover position="top">
        <PopoverTrigger>
          Top
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top popover
        </PopoverContent>
      </Popover>

      <Popover position="top-end">
        <PopoverTrigger>
          Top Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top Right popover
        </PopoverContent>
      </Popover>

      <Popover position="left">
        <PopoverTrigger>
          Middle Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Middle Left popover
        </PopoverContent>
      </Popover>

      <div />

      <Popover position="right">
        <PopoverTrigger>
          Middle Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Middle Right popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom-start">
        <PopoverTrigger>
          Bottom Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom Left popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom">
        <PopoverTrigger>
          Bottom
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom-end">
        <PopoverTrigger>
          Bottom Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom Right popover
        </PopoverContent>
      </Popover>
    </>
}`,...(te=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,ne,se;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Popover>
      <PopoverTrigger asChild>
        <Button>
          Show popover
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(se=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const to=["Demo","Controlled","CustomTrigger","Default","Grid","Overview"],Eo=Object.freeze(Object.defineProperty({__proto__:null,Controlled:T,CustomTrigger:C,Default:w,Demo:E,Grid:y,Overview:I,__namedExportsOrder:to,default:oo},Symbol.toStringTag,{value:"Module"}));export{C,w as D,y as G,I as O,Eo as P,T as a};
