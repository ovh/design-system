import{a as Re}from"./ods-react222-B9lkGKUh.js";import{t as B}from"./ods-react66-BIRpP5yN.js";import{f as xe}from"./Divider-DwZugXnI-RR--JbES.js";import{r as g,e as o}from"./index-D_CmzhJ4.js";import{B as f}from"./Button-Cu9Xbu09.js";import{I as de,a as ue}from"./icon-name-CL_C5kfn.js";import{j as d}from"./jsx-runtime-VM66peLj.js";import{a as Ae,O as be}from"./overlay-CZHjGBMC.js";import{s as Ne,P as Se}from"./portal-CjJhVgfZ.js";import{u as j,a as Be,P as Le}from"./use-presence-BH5ft0ba.js";import{c as Fe,Q as T,R as A,S as _e,H as De,r as L,at as ke,T as je,W as Ve,Z as Me,au as M,K as Ge,u as $e,U as qe,L as Ue,V as We}from"./use-locale-context-DLC4Hyvy.js";import{g as G,a as Ye}from"./index-inT8qsA6.js";import{a as Ke}from"./index-DninfMAu.js";import{t as He}from"./index-EI2n6HsL.js";import{t as Qe,p as Ze}from"./index-2YjOWgCH.js";import{c as ge}from"./index-CkQHsVsO.js";import{e as Je,o as Xe,C as F}from"./controls-BtiQQn1l.js";import{s as ze}from"./source-d0g_Nd0q.js";const[et,b]=Fe({name:"PopoverContext",hookName:"usePopoverContext",providerName:"<PopoverProvider />"}),me=g.forwardRef((e,t)=>{const r=b(),n=T(r.getArrowProps(),e);return d.jsx(A.div,{...n,ref:t})});me.displayName="PopoverArrow";const ve=g.forwardRef((e,t)=>{const r=b(),n=T(r.getArrowTipProps(),e);return d.jsx(A.div,{...n,ref:t})});ve.displayName="PopoverArrowTip";const Pe=g.forwardRef((e,t)=>{const r=b(),n=j(),s=T(r.getContentProps(),n.getPresenceProps(),e);return n.unmounted?null:d.jsx(A.div,{...s,ref:_e(n.ref,t)})});Pe.displayName="PopoverContent";const fe=g.forwardRef((e,t)=>{const r=b(),n=j(),s=T(r.getPositionerProps(),e);return n.unmounted?null:d.jsx(A.div,{...s,ref:t})});fe.displayName="PopoverPositioner";var tt=je("popover").parts("arrow","arrowTip","anchor","trigger","indicator","positioner","content","title","description","closeTrigger"),v=tt.build(),he=e=>{var t;return((t=e.ids)==null?void 0:t.anchor)??`popover:${e.id}:anchor`},Ee=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`popover:${e.id}:trigger`},_=e=>{var t;return((t=e.ids)==null?void 0:t.content)??`popover:${e.id}:content`},Te=e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`popover:${e.id}:popper`},ot=e=>{var t;return((t=e.ids)==null?void 0:t.arrow)??`popover:${e.id}:arrow`},D=e=>{var t;return((t=e.ids)==null?void 0:t.title)??`popover:${e.id}:title`},k=e=>{var t;return((t=e.ids)==null?void 0:t.description)??`popover:${e.id}:desc`},rt=e=>{var t;return((t=e.ids)==null?void 0:t.closeTrigger)??`popover:${e.id}:close`},$=e=>e.getById(he(e)),h=e=>e.getById(Ee(e)),E=e=>e.getById(_(e)),q=e=>e.getById(Te(e)),nt=e=>e.getById(D(e)),st=e=>e.getById(k(e));function it(e,t){const{state:r,context:n,send:s,computed:i,prop:a,scope:m}=e,P=r.matches("open"),N=n.get("currentPlacement"),Ie=i("currentPortalled"),V=n.get("renderedElements"),S=Ye({...a("positioning"),placement:N});return{portalled:Ie,open:P,setOpen(u){r.matches("open")!==u&&s({type:u?"OPEN":"CLOSE"})},reposition(u={}){s({type:"POSITIONING.SET",options:u})},getArrowProps(){return t.element({id:ot(m),...v.arrow.attrs,dir:a("dir"),style:S.arrow})},getArrowTipProps(){return t.element({...v.arrowTip.attrs,dir:a("dir"),style:S.arrowTip})},getAnchorProps(){return t.element({...v.anchor.attrs,dir:a("dir"),id:he(m)})},getTriggerProps(){return t.button({...v.trigger.attrs,dir:a("dir"),type:"button","data-placement":N,id:Ee(m),"aria-haspopup":"dialog","aria-expanded":P,"data-state":P?"open":"closed","aria-controls":_(m),onPointerDown(u){Me()&&u.currentTarget.focus()},onClick(u){u.defaultPrevented||s({type:"TOGGLE"})},onBlur(u){s({type:"TRIGGER_BLUR",target:u.relatedTarget})}})},getIndicatorProps(){return t.element({...v.indicator.attrs,dir:a("dir"),"data-state":P?"open":"closed"})},getPositionerProps(){return t.element({id:Te(m),...v.positioner.attrs,dir:a("dir"),style:S.floating})},getContentProps(){return t.element({...v.content.attrs,dir:a("dir"),id:_(m),tabIndex:-1,role:"dialog",hidden:!P,"data-state":P?"open":"closed","data-expanded":Ve(P),"aria-labelledby":V.title?D(m):void 0,"aria-describedby":V.description?k(m):void 0,"data-placement":N})},getTitleProps(){return t.element({...v.title.attrs,id:D(m),dir:a("dir")})},getDescriptionProps(){return t.element({...v.description.attrs,id:k(m),dir:a("dir")})},getCloseTriggerProps(){return t.button({...v.closeTrigger.attrs,dir:a("dir"),id:rt(m),type:"button","aria-label":"close",onClick(u){u.defaultPrevented||(u.stopPropagation(),s({type:"CLOSE"}))}})}}}var at=De({props({props:e}){return{closeOnInteractOutside:!0,closeOnEscape:!0,autoFocus:!0,modal:!1,portalled:!0,...e,positioning:{placement:"bottom",...e.positioning}}},initialState({prop:e}){return e("open")||e("defaultOpen")?"open":"closed"},context({bindable:e}){return{currentPlacement:e(()=>({defaultValue:void 0})),renderedElements:e(()=>({defaultValue:{title:!0,description:!0}}))}},computed:{currentPortalled:({prop:e})=>!!e("modal")||!!e("portalled")},watch({track:e,prop:t,action:r}){e([()=>t("open")],()=>{r(["toggleVisibility"])})},entry:["checkRenderedElements"],states:{closed:{on:{"CONTROLLED.OPEN":{target:"open",actions:["setInitialFocus"]},TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen","setInitialFocus"]}],OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen","setInitialFocus"]}]}},open:{effects:["trapFocus","preventScroll","hideContentBelow","trackPositioning","trackDismissableElement","proxyTabFocus"],on:{"CONTROLLED.CLOSE":{target:"closed",actions:["setFinalFocus"]},CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose","setFinalFocus"]}],TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],"POSITIONING.SET":{actions:["reposition"]}}}},implementations:{guards:{isOpenControlled:({prop:e})=>e("open")!=null},effects:{trackPositioning({context:e,prop:t,scope:r}){e.set("currentPlacement",t("positioning").placement);const n=$(r)??h(r);return G(n,()=>q(r),{...t("positioning"),defer:!0,onComplete(i){e.set("currentPlacement",i.placement)}})},trackDismissableElement({send:e,prop:t,scope:r}){const n=()=>E(r);let s=!0;return He(n,{pointerBlocking:t("modal"),exclude:h(r),defer:!0,onEscapeKeyDown(i){var a;(a=t("onEscapeKeyDown"))==null||a(i),!t("closeOnEscape")&&i.preventDefault()},onInteractOutside(i){var a;(a=t("onInteractOutside"))==null||a(i),!i.defaultPrevented&&(s=!(i.detail.focusable||i.detail.contextmenu),t("closeOnInteractOutside")||i.preventDefault())},onPointerDownOutside:t("onPointerDownOutside"),onFocusOutside:t("onFocusOutside"),persistentElements:t("persistentElements"),onDismiss(){e({type:"CLOSE",src:"interact-outside",restoreFocus:s})}})},proxyTabFocus({prop:e,scope:t}){return e("modal")||!e("portalled")?void 0:ke(()=>E(t),{triggerElement:h(t),defer:!0,onFocus(n){n.focus({preventScroll:!0})}})},hideContentBelow({prop:e,scope:t}){return e("modal")?Ke(()=>[E(t),h(t)],{defer:!0}):void 0},preventScroll({prop:e,scope:t}){if(e("modal"))return Ze(t.getDoc())},trapFocus({prop:e,scope:t}){return e("modal")?Qe(()=>E(t),{initialFocus:()=>M({root:E(t),getInitialEl:e("initialFocusEl"),enabled:e("autoFocus")})}):void 0}},actions:{reposition({event:e,prop:t,scope:r,context:n}){const s=$(r)??h(r);G(s,()=>q(r),{...t("positioning"),...e.options,defer:!0,listeners:!1,onComplete(a){n.set("currentPlacement",a.placement)}})},checkRenderedElements({context:e,scope:t}){L(()=>{Object.assign(e.get("renderedElements"),{title:!!nt(t),description:!!st(t)})})},setInitialFocus({prop:e,scope:t}){e("modal")||L(()=>{const r=M({root:E(t),getInitialEl:e("initialFocusEl"),enabled:e("autoFocus")});r==null||r.focus({preventScroll:!0})})},setFinalFocus({event:e,scope:t}){var n;const r=e.restoreFocus??((n=e.previousEvent)==null?void 0:n.restoreFocus);r!=null&&!r||L(()=>{const s=h(t);s==null||s.focus({preventScroll:!0})})},invokeOnOpen({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!0})},invokeOnClose({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!1})},toggleVisibility({event:e,send:t,prop:r}){t({type:r("open")?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:e})}}}});Ge()(["autoFocus","closeOnEscape","closeOnInteractOutside","dir","getRootNode","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","defaultOpen","open","persistentElements","portalled","positioning"]);const pt=e=>{const t=g.useId(),{getRootNode:r}=$e(),{dir:n}=qe(),s={id:t,dir:n,getRootNode:r,...e},i=Ue(at,s);return it(i,We)},lt=e=>{const[t,{children:r,...n}]=Ne(e),s=pt(n),i=Be(T({present:s.open},t));return d.jsx(et,{value:s,children:d.jsx(Le,{value:i,children:r})})},Oe=g.forwardRef((e,t)=>{const r=b(),n=j(),s=T({...r.getTriggerProps(),"aria-controls":n.unmounted?void 0:r.getTriggerProps()["aria-controls"]},e);return d.jsx(A.button,{...s,ref:t})});Oe.displayName="PopoverTrigger";const Ce=g.createContext({});function ye({children:e}){const[t,r]=g.useState();return d.jsx(Ce.Provider,{value:{setTriggerId:r,triggerId:t},children:e})}function we(){return g.useContext(Ce)}ye.__docgenInfo={description:"",methods:[],displayName:"PopoverProvider",props:{triggerId:{required:!1,tsType:{name:"string"},description:""},setTriggerId:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ct=({children:e,onOpenChange:t,open:r,position:n=Ae.top,...s})=>{const{triggerId:i}=we();return d.jsx(lt,{ids:{trigger:i},onOpenChange:t,open:r,positioning:{placement:n},...s,children:e})},p=e=>d.jsx(ye,{children:d.jsx(ct,{...e})});p.displayName="Popover";p.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: PopoverOpenChangeDetail) => void",signature:{arguments:[{type:{name:"PopoverOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the popover open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the popover."},position:{required:!1,tsType:{name:"literal",value:"`${OVERLAY_POSITION}`"},description:`@type=POPOVER_POSITION
The popover position around the trigger.`}}};const dt={"popover-content":"_popover-content_6kx3n_2"},l=g.forwardRef(({children:e,className:t,createPortal:r=!0,withArrow:n=!1,...s},i)=>d.jsx(Se,{disabled:!r,children:d.jsx(fe,{children:d.jsxs(Pe,{className:ge(dt["popover-content"],t),"data-ods":"popover-content",ref:i,...s,children:[n&&d.jsx(me,{children:d.jsx(ve,{})}),e]})})}));l.displayName="PopoverContent";l.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},withArrow:{required:!1,tsType:{name:"boolean"},description:"Whether the component displays an arrow pointing to the trigger.",defaultValue:{value:"false",computed:!1}}},composes:["ComponentPropsWithRef"]};const ut={"popover-trigger":"_popover-trigger_a014q_2"},c=g.forwardRef(({asChild:e,children:t,className:r,...n},s)=>{const{setTriggerId:i}=we();return g.useEffect(()=>{var a;if(!e&&n.id){i==null||i(n.id);return}t&&((a=t.props)!=null&&a.id)&&(i==null||i(t.props.id))},[e,t,n,i]),d.jsx(Oe,{asChild:e,className:ge(ut["popover-trigger"],r),"data-ods":"popover-trigger",ref:s,role:"button",tabIndex:0,...n,children:t})});c.displayName="PopoverTrigger";c.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const gt={argTypes:Je(["onOpenChange","open"]),component:p,subcomponents:{PopoverContent:l,PopoverTrigger:c},title:"React Components/Popover"},O={parameters:{layout:"centered"},render:e=>o.createElement(p,{position:e.position},o.createElement(c,null,"Show popover"),o.createElement(l,{withArrow:e.withArrow},e.content)),argTypes:Xe({content:{table:{category:F.slot},control:"text"},position:{table:{category:F.general,type:{summary:"POPOVER_POSITION"}},control:{type:"select"},options:be},withArrow:{table:{category:F.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My popover content"}},C={decorators:[e=>o.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},e())],tags:["!dev"],parameters:{docs:{source:{...ze()}}},render:({})=>{const[e,t]=g.useState(!1);function r(){t(n=>!n)}return o.createElement(o.Fragment,null,o.createElement(f,{onClick:r},"Toggle popover"),o.createElement(p,{open:e},o.createElement(c,{asChild:!0},o.createElement(de,{name:ue.cog})),o.createElement(l,{withArrow:!0},"This is the popover content")))}},y={tags:["!dev"],render:({})=>o.createElement(p,null,o.createElement(c,{asChild:!0},o.createElement(f,null,"Custom Trigger")),o.createElement(l,null,"This is the popover content"))},w={tags:["!dev"],render:({})=>o.createElement(p,null,o.createElement(c,null,"Show popover"),o.createElement(l,null,"This is the popover content"))},I={decorators:[e=>o.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},e())],tags:["!dev"],render:({})=>o.createElement(o.Fragment,null,o.createElement(p,{position:"top-start"},o.createElement(c,null,"Top Left"),o.createElement(l,{withArrow:!0},"Top Left popover")),o.createElement(p,{position:"top"},o.createElement(c,null,"Top"),o.createElement(l,{withArrow:!0},"Top popover")),o.createElement(p,{position:"top-end"},o.createElement(c,null,"Top Right"),o.createElement(l,{withArrow:!0},"Top Right popover")),o.createElement(p,{position:"left"},o.createElement(c,null,"Middle Left"),o.createElement(l,{withArrow:!0},"Middle Left popover")),o.createElement("div",null),o.createElement(p,{position:"right"},o.createElement(c,null,"Middle Right"),o.createElement(l,{withArrow:!0},"Middle Right popover")),o.createElement(p,{position:"bottom-start"},o.createElement(c,null,"Bottom Left"),o.createElement(l,{withArrow:!0},"Bottom Left popover")),o.createElement(p,{position:"bottom"},o.createElement(c,null,"Bottom"),o.createElement(l,{withArrow:!0},"Bottom popover")),o.createElement(p,{position:"bottom-end"},o.createElement(c,null,"Bottom Right"),o.createElement(l,{withArrow:!0},"Bottom Right popover")))},R={tags:["!dev"],parameters:{layout:"centered"},render:({})=>o.createElement(p,null,o.createElement(c,{asChild:!0},o.createElement(f,null,"Show popover")),o.createElement(l,null,"This is the popover content"))},x={tags:["!dev"],render:({})=>o.createElement(p,null,o.createElement(c,{"aria-haspopup":"menu",asChild:!0},o.createElement(f,null,o.createElement(de,{name:ue.ellipsisVertical}))),o.createElement(l,{withArrow:!0,"aria-label":"Profile menu"},o.createElement("div",{role:"menu",style:{display:"flex",flexDirection:"column"}},o.createElement(f,{role:"menuitem",variant:B.ghost},"Information"),o.createElement(f,{role:"menuitem",variant:B.ghost},"Notifications"),o.createElement(xe,{style:{width:"100%"}}),o.createElement(f,{color:Re.critical,role:"menuitem",variant:B.ghost},"Sign out"))))};var U,W,Y;O.parameters={...O.parameters,docs:{...(U=O.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(W=O.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var K,H,Q;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(H=C.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var Z,J,X;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(X=(J=y.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var z,ee,te;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Popover>
      <PopoverTrigger>
        Show popover
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ne;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ie,ae;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ae=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var pe,le,ce;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Popover>
      <PopoverTrigger aria-haspopup="menu" asChild>
        <Button>
          <Icon name={ICON_NAME.ellipsisVertical} />
        </Button>
      </PopoverTrigger>

      <PopoverContent withArrow={true} aria-label="Profile menu">
        <div role="menu" style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
          <Button role="menuitem" variant={BUTTON_VARIANT.ghost}>Information</Button>
          <Button role="menuitem" variant={BUTTON_VARIANT.ghost}>Notifications</Button>
          <Divider style={{
          width: '100%'
        }} />
          <Button color={BUTTON_COLOR.critical} role="menuitem" variant={BUTTON_VARIANT.ghost}>Sign out</Button>
        </div>
      </PopoverContent>
    </Popover>
}`,...(ce=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const mt=["Demo","Controlled","CustomTrigger","Default","Grid","Overview","AccessibilityWithMenu"],Ft=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityWithMenu:x,Controlled:C,CustomTrigger:y,Default:w,Demo:O,Grid:I,Overview:R,__namedExportsOrder:mt,default:gt},Symbol.toStringTag,{value:"Module"}));export{x as A,y as C,w as D,I as G,R as O,Ft as P,C as a};
