import{r as v,e as r}from"./index-D_CmzhJ4.js";import{B as _}from"./Button-BRERPjFq.js";import{I as ve,a as Pe}from"./icon-name-jL3axqAU.js";import{j as d}from"./jsx-runtime-VM66peLj.js";import{a as fe,O as Ee}from"./overlay-CZHjGBMC.js";import{g as Oe,a as j,s as Te,P as Ce}from"./portal-BQw3bnzL.js";import{u as D,a as he,P as we}from"./use-presence-BmJ92aQP.js";import{c as ye,I as O,J as R,K as Ie,P as Re,Q as Se,R as be,p as xe,r as A,S as G,T as Ae}from"./index-BCxMAfLs.js";import{t as Ne,p as Fe,a as Le}from"./index-CW0111bW.js";import{t as Be}from"./index-BtJLK9Rv.js";import{c as _e,a as De,b as ke,u as je,n as Ge}from"./use-locale-context-Z4fgdY29.js";import{c as Ve}from"./index-CkQHsVsO.js";import{e as Me,o as $e,C as N}from"./controls-BtiQQn1l.js";import{s as Ye}from"./source-d0g_Nd0q.js";const[qe,S]=ye({name:"PopoverContext",hookName:"usePopoverContext",providerName:"<PopoverProvider />"}),ie=v.forwardRef((e,o)=>{const t=S(),n=O(t.getArrowProps(),e);return d.jsx(R.div,{...n,ref:o})});ie.displayName="PopoverArrow";const ae=v.forwardRef((e,o)=>{const t=S(),n=O(t.getArrowTipProps(),e);return d.jsx(R.div,{...n,ref:o})});ae.displayName="PopoverArrowTip";const pe=v.forwardRef((e,o)=>{const t=S(),n=D(),s=O(t.getContentProps(),n.getPresenceProps(),e);return n.unmounted?null:d.jsx(R.div,{...s,ref:Ie(n.ref,o)})});pe.displayName="PopoverContent";const le=v.forwardRef((e,o)=>{const t=S(),n=D(),s=O(t.getPositionerProps(),e);return n.unmounted?null:d.jsx(R.div,{...s,ref:o})});le.displayName="PopoverPositioner";var Ke=Re("popover").parts("arrow","arrowTip","anchor","trigger","indicator","positioner","content","title","description","closeTrigger"),m=Ke.build(),ce=e=>{var o;return((o=e.ids)==null?void 0:o.anchor)??`popover:${e.id}:anchor`},de=e=>{var o;return((o=e.ids)==null?void 0:o.trigger)??`popover:${e.id}:trigger`},F=e=>{var o;return((o=e.ids)==null?void 0:o.content)??`popover:${e.id}:content`},ue=e=>{var o;return((o=e.ids)==null?void 0:o.positioner)??`popover:${e.id}:popper`},We=e=>{var o;return((o=e.ids)==null?void 0:o.arrow)??`popover:${e.id}:arrow`},L=e=>{var o;return((o=e.ids)==null?void 0:o.title)??`popover:${e.id}:title`},B=e=>{var o;return((o=e.ids)==null?void 0:o.description)??`popover:${e.id}:desc`},He=e=>{var o;return((o=e.ids)==null?void 0:o.closeTrigger)??`popover:${e.id}:close`},V=e=>e.getById(ce(e)),f=e=>e.getById(de(e)),E=e=>e.getById(F(e)),M=e=>e.getById(ue(e)),Je=e=>e.getById(L(e)),Qe=e=>e.getById(B(e));function Ue(e,o){const{state:t,context:n,send:s,computed:i,prop:a,scope:g}=e,P=t.matches("open"),b=n.get("currentPlacement"),me=i("currentPortalled"),k=n.get("renderedElements"),x=Oe({...a("positioning"),placement:b});return{portalled:me,open:P,setOpen(u){t.matches("open")!==u&&s({type:u?"OPEN":"CLOSE"})},reposition(u={}){s({type:"POSITIONING.SET",options:u})},getArrowProps(){return o.element({id:We(g),...m.arrow.attrs,dir:a("dir"),style:x.arrow})},getArrowTipProps(){return o.element({...m.arrowTip.attrs,dir:a("dir"),style:x.arrowTip})},getAnchorProps(){return o.element({...m.anchor.attrs,dir:a("dir"),id:ce(g)})},getTriggerProps(){return o.button({...m.trigger.attrs,dir:a("dir"),type:"button","data-placement":b,id:de(g),"aria-haspopup":"dialog","aria-expanded":P,"data-state":P?"open":"closed","aria-controls":F(g),onPointerDown(u){be()&&u.currentTarget.focus()},onClick(u){u.defaultPrevented||s({type:"TOGGLE"})},onBlur(u){s({type:"TRIGGER_BLUR",target:u.relatedTarget})}})},getIndicatorProps(){return o.element({...m.indicator.attrs,dir:a("dir"),"data-state":P?"open":"closed"})},getPositionerProps(){return o.element({id:ue(g),...m.positioner.attrs,dir:a("dir"),style:x.floating})},getContentProps(){return o.element({...m.content.attrs,dir:a("dir"),id:F(g),tabIndex:-1,role:"dialog",hidden:!P,"data-state":P?"open":"closed","data-expanded":Se(P),"aria-labelledby":k.title?L(g):void 0,"aria-describedby":k.description?B(g):void 0,"data-placement":b})},getTitleProps(){return o.element({...m.title.attrs,id:L(g),dir:a("dir")})},getDescriptionProps(){return o.element({...m.description.attrs,id:B(g),dir:a("dir")})},getCloseTriggerProps(){return o.button({...m.closeTrigger.attrs,dir:a("dir"),id:He(g),type:"button","aria-label":"close",onClick(u){u.defaultPrevented||s({type:"CLOSE"})}})}}}var Xe=xe({props({props:e}){return{closeOnInteractOutside:!0,closeOnEscape:!0,autoFocus:!0,modal:!1,portalled:!0,...e,positioning:{placement:"bottom",...e.positioning}}},initialState({prop:e}){return e("open")||e("defaultOpen")?"open":"closed"},context({bindable:e}){return{currentPlacement:e(()=>({defaultValue:void 0})),renderedElements:e(()=>({defaultValue:{title:!0,description:!0}}))}},computed:{currentPortalled:({prop:e})=>!!e("modal")||!!e("portalled")},watch({track:e,prop:o,action:t}){e([()=>o("open")],()=>{t(["toggleVisibility"])})},entry:["checkRenderedElements"],states:{closed:{on:{"CONTROLLED.OPEN":{target:"open",actions:["setInitialFocus"]},TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen","setInitialFocus"]}],OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen","setInitialFocus"]}]}},open:{effects:["trapFocus","preventScroll","hideContentBelow","trackPositioning","trackDismissableElement","proxyTabFocus"],on:{"CONTROLLED.CLOSE":{target:"closed",actions:["setFinalFocus"]},CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose","setFinalFocus"]}],TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"POSITIONING.SET":{actions:["reposition"]}}}},implementations:{guards:{isOpenControlled:({prop:e})=>e("open")!=null},effects:{trackPositioning({context:e,prop:o,scope:t}){e.set("currentPlacement",o("positioning").placement);const n=V(t)??f(t);return j(n,()=>M(t),{...o("positioning"),defer:!0,onComplete(i){e.set("currentPlacement",i.placement)}})},trackDismissableElement({send:e,prop:o,scope:t}){const n=()=>E(t);let s=!0;return Be(n,{pointerBlocking:o("modal"),exclude:f(t),defer:!0,onEscapeKeyDown(i){var a;(a=o("onEscapeKeyDown"))==null||a(i),!o("closeOnEscape")&&i.preventDefault()},onInteractOutside(i){var a;(a=o("onInteractOutside"))==null||a(i),!i.defaultPrevented&&(s=!(i.detail.focusable||i.detail.contextmenu),o("closeOnInteractOutside")||i.preventDefault())},onPointerDownOutside:o("onPointerDownOutside"),onFocusOutside:o("onFocusOutside"),persistentElements:o("persistentElements"),onDismiss(){e({type:"CLOSE",src:"interact-outside",restoreFocus:s})}})},proxyTabFocus({prop:e,scope:o}){return e("modal")||!e("portalled")?void 0:Ae(()=>E(o),{triggerElement:f(o),defer:!0,onFocus(n){n.focus({preventScroll:!0})}})},hideContentBelow({prop:e,scope:o}){return e("modal")?Le(()=>[E(o),f(o)],{defer:!0}):void 0},preventScroll({prop:e,scope:o}){if(e("modal"))return Fe(o.getDoc())},trapFocus({prop:e,scope:o}){return e("modal")?Ne(()=>E(o),{initialFocus:()=>G({root:E(o),getInitialEl:e("initialFocusEl"),enabled:e("autoFocus")})}):void 0}},actions:{reposition({event:e,prop:o,scope:t,context:n}){const s=V(t)??f(t);j(s,()=>M(t),{...o("positioning"),...e.options,defer:!0,listeners:!1,onComplete(a){n.set("currentPlacement",a.placement)}})},checkRenderedElements({context:e,scope:o}){A(()=>{Object.assign(e.get("renderedElements"),{title:!!Je(o),description:!!Qe(o)})})},setInitialFocus({prop:e,scope:o}){e("modal")||A(()=>{const t=G({root:E(o),getInitialEl:e("initialFocusEl"),enabled:e("autoFocus")});t==null||t.focus({preventScroll:!0})})},setFinalFocus({event:e,scope:o}){var n;const t=e.restoreFocus??((n=e.previousEvent)==null?void 0:n.restoreFocus);t!=null&&!t||A(()=>{const s=f(o);s==null||s.focus({preventScroll:!0})})},invokeOnOpen({prop:e}){var o;(o=e("onOpenChange"))==null||o({open:!0})},invokeOnClose({prop:e}){var o;(o=e("onOpenChange"))==null||o({open:!1})},toggleVisibility({event:e,send:o,prop:t}){o({type:t("open")?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:e})}}}});_e()(["autoFocus","closeOnEscape","closeOnInteractOutside","dir","getRootNode","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","defaultOpen","open","persistentElements","portalled","positioning"]);const Ze=e=>{const o=v.useId(),{getRootNode:t}=De(),{dir:n}=ke(),s={id:o,dir:n,getRootNode:t,...e},i=je(Xe,s);return Ue(i,Ge)},ze=e=>{const[o,{children:t,...n}]=Te(e),s=Ze(n),i=he(O({present:s.open},o));return d.jsx(qe,{value:s,children:d.jsx(we,{value:i,children:t})})},ge=v.forwardRef((e,o)=>{const t=S(),n=D(),s=O({...t.getTriggerProps(),"aria-controls":n.unmounted?void 0:t.getTriggerProps()["aria-controls"]},e);return d.jsx(R.button,{...s,ref:o})});ge.displayName="PopoverTrigger";const p=({children:e,open:o,position:t=fe.top})=>d.jsx(ze,{open:o,positioning:{placement:t},children:e});p.displayName="Popover";p.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{open:{required:!1,tsType:{name:"boolean"},description:""},position:{required:!1,tsType:{name:"literal",value:"`${OVERLAY_POSITION}`"},description:"@type=POPOVER_POSITION",defaultValue:{value:"POPOVER_POSITION.top",computed:!0}}}};const eo={"popover-content":"_popover-content_16myz_2"},l=v.forwardRef(({children:e,className:o,createPortal:t=!0,withArrow:n=!1,...s},i)=>d.jsx(Ce,{disabled:!t,children:d.jsx(le,{children:d.jsxs(pe,{className:Ve(eo["popover-content"],o),ref:i,...s,children:[n&&d.jsx(ie,{children:d.jsx(ae,{})}),e]})})}));l.displayName="PopoverContent";l.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},withArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["ComponentPropsWithRef"]};const c=v.forwardRef(({children:e,...o},t)=>d.jsx(ge,{ref:t,...o,children:e}));c.displayName="PopoverTrigger";c.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ComponentPropsWithRef"]};const oo={argTypes:Me(["open"]),component:p,subcomponents:{PopoverContent:l,PopoverTrigger:c},title:"ODS Components/Popover"},T={parameters:{layout:"centered"},render:e=>r.createElement(p,{position:e.position},r.createElement(c,null,"Show popover"),r.createElement(l,{withArrow:e.withArrow},e.content)),argTypes:$e({content:{table:{category:N.slot},control:"text"},position:{table:{category:N.general,type:{summary:"POPOVER_POSITION"}},control:{type:"select"},options:Ee},withArrow:{table:{category:N.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My popover content"}},C={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],parameters:{docs:{source:{...Ye()}}},render:({})=>{const[e,o]=v.useState(!1);function t(){o(n=>!n)}return r.createElement(r.Fragment,null,r.createElement(_,{onClick:t},"Toggle popover"),r.createElement(p,{open:e},r.createElement(c,{asChild:!0},r.createElement(ve,{name:Pe.cog})),r.createElement(l,{withArrow:!0},"This is the popover content")))}},h={tags:["!dev"],render:({})=>r.createElement(p,null,r.createElement(c,{asChild:!0},r.createElement(_,null,"Custom Trigger")),r.createElement(l,null,"This is the popover content"))},w={tags:["!dev"],render:({})=>r.createElement(p,null,r.createElement(c,null,"Show popover"),r.createElement(l,null,"This is the popover content"))},y={decorators:[e=>r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},e())],tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(p,{position:"top-start"},r.createElement(c,null,"Top Left"),r.createElement(l,{withArrow:!0},"Top Left popover")),r.createElement(p,{position:"top"},r.createElement(c,null,"Top"),r.createElement(l,{withArrow:!0},"Top popover")),r.createElement(p,{position:"top-end"},r.createElement(c,null,"Top Right"),r.createElement(l,{withArrow:!0},"Top Right popover")),r.createElement(p,{position:"left"},r.createElement(c,null,"Middle Left"),r.createElement(l,{withArrow:!0},"Middle Left popover")),r.createElement("div",null),r.createElement(p,{position:"right"},r.createElement(c,null,"Middle Right"),r.createElement(l,{withArrow:!0},"Middle Right popover")),r.createElement(p,{position:"bottom-start"},r.createElement(c,null,"Bottom Left"),r.createElement(l,{withArrow:!0},"Bottom Left popover")),r.createElement(p,{position:"bottom"},r.createElement(c,null,"Bottom"),r.createElement(l,{withArrow:!0},"Bottom popover")),r.createElement(p,{position:"bottom-end"},r.createElement(c,null,"Bottom Right"),r.createElement(l,{withArrow:!0},"Bottom Right popover")))},I={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(p,null,r.createElement(c,{asChild:!0},r.createElement(_,null,"Show popover")),r.createElement(l,null,"This is the popover content"))};var $,Y,q;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(q=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var K,W,H;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(H=(W=C.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var J,Q,U;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Popover>
      <PopoverTrigger>
        Show popover
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(z=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:z.source}}};var ee,oe,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const to=["Demo","Controlled","CustomTrigger","Default","Grid","Overview"],Oo=Object.freeze(Object.defineProperty({__proto__:null,Controlled:C,CustomTrigger:h,Default:w,Demo:T,Grid:y,Overview:I,__namedExportsOrder:to,default:oo},Symbol.toStringTag,{value:"Module"}));export{h as C,w as D,y as G,I as O,Oo as P,C as a};
