import{r as y,e as n}from"./index-D_CmzhJ4.js";import{B as c,f as G,e as Re}from"./Button-BRERPjFq.js";import{I as Me,a as Oe}from"./icon-name-jL3axqAU.js";import{j as s}from"./jsx-runtime-VM66peLj.js";import{u as ke,s as we,R as Le}from"./render-strategy-C1g0moKL.js";import{s as je,P as Fe}from"./portal-BQw3bnzL.js";import{a as Te,u as q,P as Ae}from"./use-presence-BmJ92aQP.js";import{c as Ge,I as f,J as N,K as ve,P as qe,p as Ve,r as Y,t as $e}from"./index-BCxMAfLs.js";import{a as He,t as Ye,p as We}from"./index-CW0111bW.js";import{t as Ke}from"./index-BtJLK9Rv.js";import{c as Ue,a as Xe,b as Ze,u as ze,n as Qe}from"./use-locale-context-Z4fgdY29.js";import{c as R}from"./index-CkQHsVsO.js";import{c as Je,a as et,b as tt}from"./SelectLabel-B4wtfstO.js";import{T as k,a as he}from"./Text-eeWNb4Wa.js";import{b as nt,T as ot,a as rt}from"./TooltipTrigger-CUqGeRIQ.js";import{e as at,o as lt,C as M}from"./controls-BtiQQn1l.js";import{s as V}from"./source-d0g_Nd0q.js";const[st,D]=Ge({name:"DialogContext",hookName:"useDialogContext",providerName:"<DialogProvider />"}),_e=y.forwardRef((e,t)=>{const o=D(),a=ke(),r=Te({...a,present:o.open}),l=f(o.getBackdropProps(),r.getPresenceProps(),e);return r.unmounted?null:s.jsx(N.div,{...l,ref:ve(r.ref,t)})});_e.displayName="DialogBackdrop";const be=y.forwardRef((e,t)=>{const o=D(),a=f(o.getCloseTriggerProps(),e);return s.jsx(N.button,{...a,ref:t})});be.displayName="DialogCloseTrigger";const Be=y.forwardRef((e,t)=>{const o=D(),a=q(),r=f(o.getContentProps(),a.getPresenceProps(),e);return a.unmounted?null:s.jsx(N.div,{...r,ref:ve(a.ref,t)})});Be.displayName="DialogContent";const Pe=y.forwardRef((e,t)=>{const o=D(),a=f(o.getPositionerProps(),e);return q().unmounted?null:s.jsx(N.div,{...a,ref:t})});Pe.displayName="DialogPositioner";var it=qe("dialog").parts("trigger","backdrop","positioner","content","title","description","closeTrigger"),E=it.build(),xe=e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`dialog:${e.id}:positioner`},Ne=e=>{var t;return((t=e.ids)==null?void 0:t.backdrop)??`dialog:${e.id}:backdrop`},j=e=>{var t;return((t=e.ids)==null?void 0:t.content)??`dialog:${e.id}:content`},De=e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`dialog:${e.id}:trigger`},F=e=>{var t;return((t=e.ids)==null?void 0:t.title)??`dialog:${e.id}:title`},A=e=>{var t;return((t=e.ids)==null?void 0:t.description)??`dialog:${e.id}:description`},Se=e=>{var t;return((t=e.ids)==null?void 0:t.closeTrigger)??`dialog:${e.id}:close`},S=e=>e.getById(j(e)),dt=e=>e.getById(xe(e)),ct=e=>e.getById(Ne(e)),ut=e=>e.getById(De(e)),mt=e=>e.getById(F(e)),pt=e=>e.getById(A(e)),gt=e=>e.getById(Se(e));function yt(e,t){const{state:o,send:a,context:r,prop:l,scope:p}=e,H=l("aria-label"),C=o.matches("open");return{open:C,setOpen(g){o.matches("open")!==g&&a({type:g?"OPEN":"CLOSE"})},getTriggerProps(){return t.button({...E.trigger.attrs,dir:l("dir"),id:De(p),"aria-haspopup":"dialog",type:"button","aria-expanded":C,"data-state":C?"open":"closed","aria-controls":j(p),onClick(g){g.defaultPrevented||a({type:"TOGGLE"})}})},getBackdropProps(){return t.element({...E.backdrop.attrs,dir:l("dir"),hidden:!C,id:Ne(p),"data-state":C?"open":"closed"})},getPositionerProps(){return t.element({...E.positioner.attrs,dir:l("dir"),id:xe(p),style:{pointerEvents:C?void 0:"none"}})},getContentProps(){const g=r.get("rendered");return t.element({...E.content.attrs,dir:l("dir"),role:l("role"),hidden:!C,id:j(p),tabIndex:-1,"data-state":C?"open":"closed","aria-modal":!0,"aria-label":H||void 0,"aria-labelledby":H||!g.title?void 0:F(p),"aria-describedby":g.description?A(p):void 0})},getTitleProps(){return t.element({...E.title.attrs,dir:l("dir"),id:F(p)})},getDescriptionProps(){return t.element({...E.description.attrs,dir:l("dir"),id:A(p)})},getCloseTriggerProps(){return t.button({...E.closeTrigger.attrs,dir:l("dir"),id:Se(p),type:"button",onClick(g){g.defaultPrevented||(g.stopPropagation(),a({type:"CLOSE"}))}})}}}var Ct=Ve({props({props:e,scope:t}){const o=e.role==="alertdialog";return{role:"dialog",modal:!0,trapFocus:!0,preventScroll:!0,closeOnInteractOutside:!o,closeOnEscape:!0,restoreFocus:!0,initialFocusEl:o?()=>gt(t):void 0,...e}},initialState({prop:e}){return e("open")||e("defaultOpen")?"open":"closed"},context({bindable:e}){return{rendered:e(()=>({defaultValue:{title:!0,description:!0}}))}},watch({track:e,action:t,prop:o}){e([()=>o("open")],()=>{t(["toggleVisibility"])})},states:{open:{entry:["checkRenderedElements","syncZIndex"],effects:["trackDismissableElement","trapFocus","preventScroll","hideContentBelow"],on:{"CONTROLLED.CLOSE":{target:"closed"},CLOSE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}],TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnClose"]},{target:"closed",actions:["invokeOnClose"]}]}},closed:{on:{"CONTROLLED.OPEN":{target:"open"},OPEN:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}],TOGGLE:[{guard:"isOpenControlled",actions:["invokeOnOpen"]},{target:"open",actions:["invokeOnOpen"]}]}}},implementations:{guards:{isOpenControlled:({prop:e})=>e("open")!=null},effects:{trackDismissableElement({scope:e,send:t,prop:o}){return Ke(()=>S(e),{defer:!0,pointerBlocking:o("modal"),exclude:[ut(e)],onInteractOutside(r){var l;(l=o("onInteractOutside"))==null||l(r),o("closeOnInteractOutside")||r.preventDefault()},persistentElements:o("persistentElements"),onFocusOutside:o("onFocusOutside"),onPointerDownOutside:o("onPointerDownOutside"),onEscapeKeyDown(r){var l;(l=o("onEscapeKeyDown"))==null||l(r),o("closeOnEscape")||r.preventDefault()},onDismiss(){t({type:"CLOSE",src:"interact-outside"})}})},preventScroll({scope:e,prop:t}){if(t("preventScroll"))return We(e.getDoc())},trapFocus({scope:e,prop:t}){return!t("trapFocus")||!t("modal")?void 0:Ye(()=>S(e),{preventScroll:!0,returnFocusOnDeactivate:!!t("restoreFocus"),initialFocus:t("initialFocusEl"),setReturnFocus:a=>{var r;return((r=t("finalFocusEl"))==null?void 0:r())??a}})},hideContentBelow({scope:e,prop:t}){return t("modal")?He(()=>[S(e)],{defer:!0}):void 0}},actions:{checkRenderedElements({context:e,scope:t}){Y(()=>{e.set("rendered",{title:!!mt(t),description:!!pt(t)})})},syncZIndex({scope:e}){Y(()=>{const t=S(e);if(!t)return;const o=$e(t);[dt(e),ct(e)].forEach(r=>{r==null||r.style.setProperty("--z-index",o.zIndex)})})},invokeOnClose({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!1})},invokeOnOpen({prop:e}){var t;(t=e("onOpenChange"))==null||t({open:!0})},toggleVisibility({prop:e,send:t,event:o}){t({type:e("open")?"CONTROLLED.OPEN":"CONTROLLED.CLOSE",previousEvent:o})}}}});Ue()(["aria-label","closeOnEscape","closeOnInteractOutside","dir","finalFocusEl","getRootNode","getRootNode","id","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","defaultOpen","open","persistentElements","preventScroll","restoreFocus","role","trapFocus"]);const Et=e=>{const t=y.useId(),{getRootNode:o}=Xe(),{dir:a}=Ze(),r={id:t,getRootNode:o,dir:a,...e},l=ze(Ct,r);return yt(l,Qe)},ft=e=>{const[t,{children:o,...a}]=je(e),[r]=we(t),l=Et(a),p=Te(f({present:l.open},t));return s.jsx(st,{value:l,children:s.jsx(Le,{value:r,children:s.jsx(Ae,{value:p,children:o})})})},Ie=y.forwardRef((e,t)=>{const o=D(),a=q(),r=f({...o.getTriggerProps(),"aria-controls":a.unmounted?void 0:o.getTriggerProps()["aria-controls"]},e);return s.jsx(N.button,{...r,ref:t})});Ie.displayName="DialogTrigger";const i=({children:e,closeOnEscape:t=!0,closeOnInteractOutside:o=!0,defaultOpen:a,onOpenChange:r,open:l})=>s.jsx(ft,{closeOnEscape:t,closeOnInteractOutside:o,defaultOpen:a,onOpenChange:r,open:l,children:e});i.displayName="Modal";i.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ModalOpenChangeDetail) => void",signature:{arguments:[{type:{name:"ModalOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:""},open:{required:!1,tsType:{name:"boolean"},description:""}}};const Mt={"modal-body":"_modal-body_1ct2o_2"},u=y.forwardRef(({children:e,className:t,...o},a)=>s.jsx("div",{className:R(Mt["modal-body"],t),ref:a,...o,children:e}));u.displayName="ModalBody";u.__docgenInfo={description:"",methods:[],displayName:"ModalBody",composes:["ComponentPropsWithRef"]};var w=(e=>(e.critical="critical",e.information="information",e.neutral="neutral",e.success="success",e.warning="warning",e))(w||{});const Ot=Object.freeze(Object.values(w)),I={"modal-header":"_modal-header_py5gi_2","modal-header--critical":"_modal-header--critical_py5gi_14","modal-header--information":"_modal-header--information_py5gi_17","modal-header--neutral":"_modal-header--neutral_py5gi_20","modal-header--success":"_modal-header--success_py5gi_23","modal-header--warning":"_modal-header--warning_py5gi_26","modal-header__close":"_modal-header__close_py5gi_29","modal-header__close--critical":"_modal-header__close--critical_py5gi_29","modal-header__close--information":"_modal-header__close--information_py5gi_38","modal-header__close--neutral":"_modal-header__close--neutral_py5gi_47","modal-header__close--success":"_modal-header__close--success_py5gi_56","modal-header__close--warning":"_modal-header__close--warning_py5gi_65"},$=({color:e,dismissible:t})=>s.jsx("div",{className:R(I["modal-header"],I[`modal-header--${e}`]),children:t&&s.jsx(be,{asChild:!0,children:s.jsx(c,{className:R(I["modal-header__close"],I[`modal-header__close--${e}`]),size:Re.xs,variant:G.ghost,children:s.jsx(Me,{name:Oe.xmark})})})});$.displayName="ModalHeader";$.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{color:{required:!0,tsType:{name:"literal",value:"`${MODAL_COLOR}`"},description:""},dismissible:{required:!0,tsType:{name:"boolean"},description:""}}};const L={"modal-backdrop":"_modal-backdrop_18pqu_22","modal-positioner":"_modal-positioner_18pqu_29","modal-content":"_modal-content_18pqu_35"},d=y.forwardRef(({children:e,className:t,color:o=w.information,createPortal:a=!0,dismissible:r=!0,...l},p)=>s.jsxs(Fe,{disabled:!a,children:[s.jsx(_e,{className:L["modal-backdrop"]}),s.jsx(Pe,{className:L["modal-positioner"],children:s.jsxs(Be,{className:R(L["modal-content"],t),ref:p,...l,children:[s.jsx($,{color:o,dismissible:r}),e]})})]}));d.displayName="ModalContent";d.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{color:{required:!1,tsType:{name:"literal",value:"`${MODAL_COLOR}`"},description:"",defaultValue:{value:"MODAL_COLOR.information",computed:!0}},createPortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const m=y.forwardRef(({children:e,...t},o)=>s.jsx(Ie,{ref:o,...t,children:e}));m.displayName="ModalTrigger";m.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ComponentPropsWithRef"]};const Tt={argTypes:at(["defaultOpen","onOpenChange","open"]),component:i,subcomponents:{ModalContent:d,ModalTrigger:m},title:"ODS Components/Modal"},O={render:e=>n.createElement(i,{closeOnEscape:e.closeOnEscape,closeOnInteractOutside:e.closeOnInteractOutside},n.createElement(m,{asChild:!0},n.createElement(c,null,"Trigger Modal")),n.createElement(d,{color:e.color,dismissible:e.dismissible},n.createElement(u,null,e.content))),argTypes:lt({closeOnEscape:{table:{category:M.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:M.general},control:{type:"boolean"}},color:{table:{category:M.design,defaultValue:{summary:w.information},type:{summary:"MODAL_COLOR"}},control:{type:"select"},options:Ot},content:{table:{category:M.slot},control:"text"},dismissible:{table:{category:M.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My modal content"}},T={tags:["!dev"],render:({})=>n.createElement(i,null,n.createElement(m,{asChild:!0},n.createElement(c,null,"Trigger Modal")),n.createElement(d,null,n.createElement(u,{style:{display:"flex",flexDirection:"column",rowGap:"16px"}},n.createElement(k,{preset:he.heading4},"Hosting removal"),n.createElement(k,null,`You're about to remove the hosting "1 vCore 2,4 GHz, 2 Go RAM".`),n.createElement("div",{style:{display:"flex",alignSelf:"flex-end",columnGap:"8px"}},n.createElement(c,null,"Confirm"),n.createElement(c,{variant:G.outline},"Cancel")))))},v={decorators:[e=>n.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px"}},e())],tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(i,null,n.createElement(m,{asChild:!0},n.createElement(c,null,"Critical")),n.createElement(d,{color:"critical"},n.createElement(u,null,"Critical"))),n.createElement(i,null,n.createElement(m,{asChild:!0},n.createElement(c,null,"Information")),n.createElement(d,{color:"information"},n.createElement(u,null,"Information"))),n.createElement(i,null,n.createElement(m,{asChild:!0},n.createElement(c,null,"Neutral")),n.createElement(d,{color:"neutral"},n.createElement(u,null,"Neutral"))),n.createElement(i,null,n.createElement(m,{asChild:!0},n.createElement(c,null,"Success")),n.createElement(d,{color:"success"},n.createElement(u,null,"Success"))),n.createElement(i,null,n.createElement(m,{asChild:!0},n.createElement(c,null,"Warning")),n.createElement(d,{color:"warning"},n.createElement(u,null,"Warning"))))},h={tags:["!dev"],parameters:{docs:{source:{...V()}}},render:({})=>{const[e,t]=y.useState(!1);function o({open:r}){t(r)}function a(){t(!0)}return n.createElement(n.Fragment,null,n.createElement(c,{onClick:a},"Trigger Modal"),n.createElement(i,{onOpenChange:o,open:e},n.createElement(d,null,n.createElement(u,null,"Content"))))}},_={tags:["!dev"],render:({})=>n.createElement(i,null,n.createElement(m,null,"Trigger Modal"),n.createElement(d,null,n.createElement(u,null,"My modal content")))},b={tags:["!dev"],parameters:{docs:{source:{...V()}}},render:({})=>n.createElement(i,null,n.createElement(m,{asChild:!0},n.createElement(c,null,"Trigger Modal")),n.createElement(d,{dismissible:!1},n.createElement(u,null,"My modal content")))},B={tags:["!dev"],parameters:{docs:{source:{...V()}}},render:({})=>n.createElement(i,{closeOnEscape:!1,closeOnInteractOutside:!1},n.createElement(m,{asChild:!0},n.createElement(c,null,"Trigger Modal")),n.createElement(d,null,n.createElement(u,null,"My modal content")))},P={tags:["!dev"],render:({})=>n.createElement(i,null,n.createElement(m,{asChild:!0},n.createElement(c,null,"Trigger Modal")),n.createElement(d,null,n.createElement(u,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},n.createElement(Je,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},n.createElement(et,null),n.createElement(tt,{createPortal:!1})),n.createElement(nt,null,n.createElement(ot,{asChild:!0},n.createElement(Me,{name:Oe.circleQuestion})),n.createElement(rt,{createPortal:!1},"This is the tooltip content")))))},x={tags:["!dev"],parameters:{layout:"centered"},render:({})=>n.createElement(i,null,n.createElement(m,{asChild:!0},n.createElement(c,{variant:G.outline},"Trigger Modal")),n.createElement(d,null,n.createElement(u,null,n.createElement(k,{preset:he.heading4},"Overview"),n.createElement(k,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))};var W,K,U;O.parameters={...O.parameters,docs:{...(W=O.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Modal closeOnEscape={arg.closeOnEscape} closeOnInteractOutside={arg.closeOnInteractOutside}>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent color={arg.color} dismissible={arg.dismissible}>
        <ModalBody>
          {arg.content}
        </ModalBody>
      </ModalContent>
    </Modal>,
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
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: MODAL_COLOR.information
        },
        type: {
          summary: 'MODAL_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: MODAL_COLORS
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    },
    dismissible: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: true
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
    content: 'My modal content'
  }
}`,...(U=(K=O.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,Z,z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalBody style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '16px'
      }}>
          <Text preset={TEXT_PRESET.heading4}>
            Hosting removal
          </Text>

          <Text>
            You're about to remove the hosting "1 vCore 2,4 GHz, 2 Go RAM".
          </Text>

          <div style={{
          display: 'flex',
          alignSelf: 'flex-end',
          columnGap: '8px'
        }}>
            <Button>
              Confirm
            </Button>

            <Button variant={BUTTON_VARIANT.outline}>
              Cancel
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(z=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:z.source}}};var Q,J,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Modal>
        <ModalTrigger asChild>
          <Button>
            Critical
          </Button>
        </ModalTrigger>

        <ModalContent color="critical">
          <ModalBody>
            Critical
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button>
            Information
          </Button>
        </ModalTrigger>

        <ModalContent color="information">
          <ModalBody>
            Information
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button>
            Neutral
          </Button>
        </ModalTrigger>

        <ModalContent color="neutral">
          <ModalBody>
            Neutral
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button>
            Success
          </Button>
        </ModalTrigger>

        <ModalContent color="success">
          <ModalBody>
            Success
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button>
            Warning
          </Button>
        </ModalTrigger>

        <ModalContent color="warning">
          <ModalBody>
            Warning
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
}`,...(ee=(J=v.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};var te,ne,oe;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
    }: ModalOpenChangeDetail) {
      setIsOpen(open);
    }
    function openModal() {
      setIsOpen(true);
    }
    return <>
        <Button onClick={openModal}>
          Trigger Modal
        </Button>

        <Modal onOpenChange={onOpenChange} open={isOpen}>
          <ModalContent>
            <ModalBody>
              Content
            </ModalBody>
          </ModalContent>
        </Modal>
      </>;
  }
}`,...(oe=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,ae,le;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger>
        Trigger Modal
      </ModalTrigger>

      <ModalContent>
        <ModalBody>
          My modal content
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(le=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var se,ie,de;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent dismissible={false}>
        <ModalBody>
          My modal content
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(de=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,ue,me;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <Modal closeOnEscape={false} closeOnInteractOutside={false}>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalBody>
          My modal content
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(me=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,ye;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalBody style={{
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
              <Icon name={ICON_NAME.circleQuestion} />
            </TooltipTrigger>

            <TooltipContent createPortal={false}>
              This is the tooltip content
            </TooltipContent>
          </Tooltip>
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(ye=(ge=P.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var Ce,Ee,fe;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button variant={BUTTON_VARIANT.outline}>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalBody>
          <Text preset={TEXT_PRESET.heading4}>
            Overview
          </Text>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(fe=(Ee=x.parameters)==null?void 0:Ee.docs)==null?void 0:fe.source}}};const vt=["Demo","Actions","Colors","Controlled","Default","NonDismissible","NonEscapable","OverlayElements","Overview"],qt=Object.freeze(Object.defineProperty({__proto__:null,Actions:T,Colors:v,Controlled:h,Default:_,Demo:O,NonDismissible:b,NonEscapable:B,OverlayElements:P,Overview:x,__namedExportsOrder:vt,default:Tt},Symbol.toStringTag,{value:"Module"}));export{T as A,v as C,_ as D,qt as M,b as N,x as O,h as a,B as b,P as c};
