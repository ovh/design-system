import{r as g,e}from"./index-jIWwRBLr.js";import{B as c,d as k,c as qe}from"./Button-B-GJ-1TA.js";import{a as y}from"./colors-DSObuHxd.js";import{I as Se,a as He}from"./icon-name-RfJfucZu.js";import{j as l}from"./jsx-runtime-Cfl8ynUo.js";import{u as Le}from"./context-C_-r2uoG.js";import{u as U,D as ke,a as Ue,b as ze,c as Ve}from"./dialog-trigger-CMq8CHVa.js";import{c as z}from"./index-CqY9YpN0.js";import{L as T,u as Ge}from"./useI18n-C0NLVYPv.js";import{L as Ae,M as Ie,a4 as Fe}from"./use-locale-context-CCZDATm7.js";import{P as We}from"./portal-DlVZGAaE.js";import{u as $e}from"./render-strategy-CCisVuOx.js";import{a as Ye}from"./use-presence-BEoh9Cc1.js";import{b as Ze,S as Qe,a as Xe}from"./index-BWF8qxTS.js";import{T as W,a as Je}from"./Text-CRk0VKg4.js";import{b as Ke,T as eo,a as oo}from"./index-Fe1E4PmL.js";import{e as to,o as ao,C as R}from"./controls-BtiQQn1l.js";import{s as V}from"./source-CPEZJ6oD.js";const Pe=g.forwardRef((o,a)=>{const n=U(),t=$e(),m=Ye({...t,present:n.open}),p=Ae(n.getBackdropProps(),m.getPresenceProps(),o);return m.unmounted?null:l.jsx(Ie.div,{...p,ref:Fe(m.ref,a)})});Pe.displayName="DialogBackdrop";const Re=g.forwardRef((o,a)=>{const n=U(),t=Ae(n.getCloseTriggerProps(),o);return l.jsx(Ie.button,{...t,ref:a})});Re.displayName="DialogCloseTrigger";const we=g.createContext(void 0);function De({backdropStyle:o,children:a,i18n:n,locale:t,positionerStyle:m}){const[p,h]=g.useState(void 0),[C,b]=g.useState(!1);return l.jsx(we.Provider,{value:{backdropStyle:o,dismissible:p,hasHeader:C,i18n:n,locale:t,positionerStyle:m,setDismissible:h,setHasHeader:b},children:a})}function G(){return Le(we)}De.__docgenInfo={description:"",methods:[],displayName:"ModalProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const F=({backdropStyle:o,children:a,closeOnEscape:n=!0,closeOnInteractOutside:t=!0,defaultOpen:m,i18n:p,initialFocusedElement:h,locale:C,onOpenChange:b,open:j,positionerStyle:q,...M})=>l.jsx(De,{backdropStyle:o,i18n:p,locale:C,positionerStyle:q,children:l.jsx(ke,{closeOnEscape:n,closeOnInteractOutside:t,defaultOpen:m,initialFocusEl:h,onOpenChange:b,open:j,...M,children:a})});F.displayName="Modal";F.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{backdropStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom style applied to the modal backdrop. Useful if you want to override the backdrop z-index."},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the outside is clicked.",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the modal. Use when you don't need to control the open state of the modal."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"MODAL_I18N"},{name:"string"}],raw:"Record<MODAL_I18N, string>"}],raw:"Partial<Record<MODAL_I18N, string>>"},description:"Internal translations override."},initialFocusedElement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}},description:"Element that receive the focus when the dialog is opened."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ModalOpenChangeDetail) => void",signature:{arguments:[{type:{name:"ModalOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the modal open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the modal."},positionerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom style applied to the overlay positioner. Useful if you want to override the overlay z-index."}}};const no={"modal-body":"_modal-body_1370a_2"},r=g.forwardRef(({children:o,className:a,...n},t)=>l.jsx("div",{className:z(no["modal-body"],a),"data-ods":"modal-body",ref:t,...n,children:o}));r.displayName="ModalBody";r.__docgenInfo={description:"",methods:[],displayName:"ModalBody",composes:["ComponentPropsWithRef"]};var f=(o=>(o[o.critical=y.critical]="critical",o[o.information=y.information]="information",o[o.neutral=y.neutral]="neutral",o[o.primary=y.primary]="primary",o[o.success=y.success]="success",o[o.warning=y.warning]="warning",o))(f||{});Object.freeze(Object.values(f));var je=(o=>(o.closeButton="modal.close.button",o))(je||{});const lo={"modal.close.button":{[T.de]:"Schließen",[T.en]:"Close",[T.es]:"Cerrar",[T.fr]:"Fermer",[T.it]:"Chiudere",[T.nl]:"Sluiten",[T.pl]:"Zamknąć",[T.pt]:"Fechar"}},D=g.forwardRef(({className:o,...a},n)=>{const{i18n:t,locale:m}=G(),{translate:p}=Ge(lo,m,t);return l.jsx(Re,{asChild:!0,children:l.jsx(c,{"aria-label":p(je.closeButton),className:o,color:y.neutral,ref:n,size:qe.xs,variant:k.ghost,...a,children:l.jsx(Se,{name:He.xmark})})})});D.displayName="ModalCloseTrigger";D.__docgenInfo={description:"",methods:[],displayName:"ModalCloseTrigger",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=BUTTON_COLOR
The color preset to use.`},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state, disabling it."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},variant:{required:!1,tsType:{name:"literal",value:"`${BUTTON_VARIANT}`"},description:"The variant preset to use."}},composes:["ComponentPropsWithRef"]};const w={"modal-backdrop":"_modal-backdrop_1wens_22","modal-positioner":"_modal-positioner_1wens_28","modal-content":"_modal-content_1wens_33","modal-content__close-trigger":"_modal-content__close-trigger_1wens_76"},d=g.forwardRef(({children:o,className:a,color:n=f.information,createPortal:t=!0,dismissible:m=!0,...p},h)=>{const{open:C}=U(),{backdropStyle:b,hasHeader:j,positionerStyle:q,setDismissible:M}=G();return g.useEffect(()=>(M==null||M(m),()=>{M==null||M(void 0)}),[m,M]),l.jsxs(We,{disabled:!t,children:[l.jsx(Pe,{className:w["modal-backdrop"],style:{zIndex:"calc(var(--ods-theme-overlay-z-index) + 1)",...b||{}}}),l.jsx(Ue,{className:w["modal-positioner"],style:{zIndex:"calc(var(--ods-theme-overlay-z-index) + 2)",...q||{}},children:l.jsxs(ze,{"aria-describedby":p["aria-describedby"]||"","aria-labelledby":p["aria-labelledby"]||"",className:z(w["modal-content"],a),"data-ods":"modal-content",ref:h,role:n===f.critical?"alertdialog":"dialog",...p,style:{...p.style,...C?{}:{display:"none"}},children:[!j&&m&&l.jsx("div",{className:w["modal-content__close-trigger"],children:l.jsx(D,{})}),o]})})]})});d.displayName="ModalContent";d.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{color:{required:!1,tsType:{name:"literal",value:"`${MODAL_COLOR}`"},description:`@deprecated
The color preset to use.
DEPRECATED: Color is no longer used and will be removed in the next major version.`,defaultValue:{value:"MODAL_COLOR.information",computed:!0}},createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the remove button is displayed.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const L={"modal-header":"_modal-header_dsbxu_2","modal-header__content":"_modal-header__content_dsbxu_14","modal-header__close":"_modal-header__close_dsbxu_17"},s=({children:o,className:a})=>{const{dismissible:n,setHasHeader:t}=G();return g.useEffect(()=>(t==null||t(!0),()=>{t==null||t(!1)}),[t]),l.jsxs("div",{className:z(L["modal-header"],a),children:[l.jsx("div",{className:L["modal-header__content"],children:o}),n&&l.jsx(D,{className:L["modal-header__close"]})]})};s.displayName="ModalHeader";s.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const i=g.forwardRef(({children:o,...a},n)=>l.jsx(Ve,{"data-ods":"modal-trigger",ref:n,...a,children:o}));i.displayName="ModalTrigger";i.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const u=Object.assign(F,{Body:r,Content:d,Header:s,Trigger:i}),ro={argTypes:to(["defaultOpen","i18n","initialFocusedElement","locale","onOpenChange","open"]),component:u,subcomponents:{ModalBody:r,ModalContent:d,ModalHeader:s,ModalTrigger:i},title:"React Components/Modal"},E={render:o=>e.createElement(u,{closeOnEscape:o.closeOnEscape,closeOnInteractOutside:o.closeOnInteractOutside},e.createElement(i,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(d,{color:o.color,dismissible:o.dismissible},e.createElement(s,null,"Modal header"),e.createElement(r,null,o.content))),argTypes:ao({closeOnEscape:{table:{category:R.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:R.general},control:{type:"boolean"}},content:{table:{category:R.slot},control:"text"},dismissible:{table:{category:R.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My modal content"}},B={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(i,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(d,{color:f.critical},e.createElement(s,null,e.createElement("span",{id:"modal-title"},"Delete item")),e.createElement(r,null,e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item?"),e.createElement("div",{style:{display:"flex",gap:"8px",justifyContent:"end"}},e.createElement(c,{variant:k.ghost},"Cancel"),e.createElement(c,{color:y.critical},"Delete")))))},v={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(i,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(d,{"aria-describedby":"modal-content","aria-labelledby":"modal-title"},e.createElement(s,null,e.createElement("span",{id:"modal-title"},"Delete item")),e.createElement(r,null,e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},O={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(i,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(d,{"aria-describedby":"modal-content","aria-label":"Modal Content"},e.createElement(s,null,"Modal header"),e.createElement(r,{id:"modal-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))},_={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(i,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(d,null,e.createElement(s,null,e.createElement("span",{id:"modal-title"},"Delete item")),e.createElement(r,null,e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},N={globals:{imports:`import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...V()}}},render:({})=>{const[o,a]=g.useState(!1);function n({open:m}){a(m)}function t(){a(!0)}return e.createElement(e.Fragment,null,e.createElement(c,{onClick:t},"Trigger Modal"),e.createElement(u,{onOpenChange:n,open:o},e.createElement(d,null,e.createElement(s,null,"Controlled modal"),e.createElement(r,null,"Content"))))}},x={globals:{imports:"import { Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(i,null,"Trigger Modal"),e.createElement(d,null,e.createElement(s,null,"My modal header"),e.createElement(r,null,"My modal content")))},S={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...V()}}},render:({})=>e.createElement(u,null,e.createElement(i,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(d,{dismissible:!1},e.createElement(s,null,"Non dismissible"),e.createElement(r,null,"My modal content")))},H={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...V()}}},render:({})=>e.createElement(u,{closeOnEscape:!1,closeOnInteractOutside:!1},e.createElement(i,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(d,null,e.createElement(s,null,"Non escapable"),e.createElement(r,null,"My modal content")))},A={globals:{imports:"import { ICON_NAME, Button, Icon, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(u,null,e.createElement(i,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(d,null,e.createElement(s,null,"Overlay elements"),e.createElement(r,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},e.createElement(Ze,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(Qe,null),e.createElement(Xe,{createPortal:!1})),e.createElement(Ke,null,e.createElement(eo,{asChild:!0},e.createElement(Se,{name:He.circleQuestion,style:{fontSize:"24px"}})),e.createElement(oo,{createPortal:!1},"This is the tooltip content")))))},I={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(u,null,e.createElement(i,{asChild:!0},e.createElement(c,{variant:k.outline},"Trigger Modal")),e.createElement(d,null,e.createElement(s,null,e.createElement(W,{as:"span",preset:Je.heading4},"Overview")),e.createElement(r,null,e.createElement(W,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))},P={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"12px"}},e.createElement(u,null,e.createElement(i,{asChild:!0},e.createElement(c,null,"Default")),e.createElement(d,{createPortal:!1},e.createElement(s,null,"Default"),e.createElement(r,null,"Default"))),e.createElement(u,null,e.createElement(i,{asChild:!0},e.createElement(c,null,"Non dismissible")),e.createElement(d,{createPortal:!1,dismissible:!1},e.createElement(s,null,"Non dismissible"),e.createElement(r,null,"Non dismissible"))),e.createElement(u,null,e.createElement(i,{asChild:!0},e.createElement(c,{color:y.critical},"Critical")),e.createElement(d,{color:f.critical,createPortal:!1},e.createElement(s,null,"Critical"),e.createElement(r,null,"Critical"))))};var $,Y,Z;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Modal closeOnEscape={arg.closeOnEscape} closeOnInteractOutside={arg.closeOnInteractOutside}>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent color={arg.color} dismissible={arg.dismissible}>
        <ModalHeader>Modal header</ModalHeader>
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
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var Q,X,J;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BUTTON_COLOR, BUTTON_VARIANT, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent color={MODAL_COLOR.critical}>
        <ModalHeader><span id="modal-title">Delete item</span></ModalHeader>
        <ModalBody>
          <p id="modal-content">
            Are you sure you want to delete this item?
          </p>

          <div style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'end'
        }}>
            <Button variant={BUTTON_VARIANT.ghost}>
              Cancel
            </Button>

            <Button color={BUTTON_COLOR.critical}>
              Delete
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(J=(X=B.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,ee,oe;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent aria-describedby="modal-content" aria-labelledby="modal-title">
        <ModalHeader><span id="modal-title">Delete item</span></ModalHeader>
        <ModalBody>
          <p id="modal-content">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(oe=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,ae,ne;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent aria-describedby="modal-content" aria-label="Modal Content">
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody id="modal-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(ne=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var le,re,de;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalHeader><span id="modal-title">Delete item</span></ModalHeader>
        <ModalBody>
          <p id="modal-content">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(de=(re=_.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var se,ie,ce;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '@ovhcloud/ods-react';
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
            <ModalHeader>Controlled modal</ModalHeader>
            <ModalBody>
              Content
            </ModalBody>
          </ModalContent>
        </Modal>
      </>;
  }
}`,...(ce=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var me,ue,pe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger>
        Trigger Modal
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>My modal header</ModalHeader>
        <ModalBody>
          My modal content
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(pe=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,Me,ye;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
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
        <ModalHeader>Non dismissible</ModalHeader>
        <ModalBody>
          My modal content
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(ye=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:ye.source}}};var Te,fe,he;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
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
        <ModalHeader>Non escapable</ModalHeader>
        <ModalBody>
          My modal content
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(he=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var Ce,be,Ee;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Button, Icon, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalHeader>Overlay elements</ModalHeader>
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
              <Icon name={ICON_NAME.circleQuestion} style={{
              fontSize: '24px'
            }} />
            </TooltipTrigger>

            <TooltipContent createPortal={false}>
              This is the tooltip content
            </TooltipContent>
          </Tooltip>
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(Ee=(be=A.parameters)==null?void 0:be.docs)==null?void 0:Ee.source}}};var Be,ve,Oe;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
        <ModalHeader>
          <Text as={'span'} preset={TEXT_PRESET.heading4}>
            Overview
          </Text>
        </ModalHeader>
        <ModalBody>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(Oe=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:Oe.source}}};var _e,Ne,xe;P.parameters={...P.parameters,docs:{...(_e=P.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '12px'
  }}>
      <Modal>
        <ModalTrigger asChild>
          <Button>Default</Button>
        </ModalTrigger>
        <ModalContent createPortal={false}>
          <ModalHeader>Default</ModalHeader>
          <ModalBody>Default</ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button>Non dismissible</Button>
        </ModalTrigger>
        <ModalContent createPortal={false} dismissible={false}>
          <ModalHeader>Non dismissible</ModalHeader>
          <ModalBody>Non dismissible</ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={BUTTON_COLOR.critical}>Critical</Button>
        </ModalTrigger>
        <ModalContent color={MODAL_COLOR.critical} createPortal={false}>
          <ModalHeader>Critical</ModalHeader>
          <ModalBody>Critical</ModalBody>
        </ModalContent>
      </Modal>
    </div>
}`,...(xe=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:xe.source}}};const so=["Demo","AccessibilityActions","AccessibilityAriaLabelledBy","AccessibilityAriaLabel","AccessibilityBadPracticesAria","Controlled","Default","NonDismissible","NonEscapable","OverlayElements","Overview","ThemeGenerator"],No=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityActions:B,AccessibilityAriaLabel:O,AccessibilityAriaLabelledBy:v,AccessibilityBadPracticesAria:_,Controlled:N,Default:x,Demo:E,NonDismissible:S,NonEscapable:H,OverlayElements:A,Overview:I,ThemeGenerator:P,__namedExportsOrder:so,default:ro},Symbol.toStringTag,{value:"Module"}));export{O as A,N as C,x as D,No as M,S as N,I as O,v as a,B as b,_ as c,H as d,A as e};
