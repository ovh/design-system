import{r as g,e}from"./index-jIWwRBLr.js";import{B as c,d as k,c as je}from"./Button-B-GJ-1TA.js";import{a as y}from"./colors-DSObuHxd.js";import{I as xe,a as Se}from"./icon-name-BpdEc4-2.js";import{j as l}from"./jsx-runtime-Cfl8ynUo.js";import{u as qe}from"./context-C_-r2uoG.js";import{u as U,D as Le,a as ke,b as Ue,c as ze}from"./dialog-trigger-CPz6GO76.js";import{c as z}from"./index-CqY9YpN0.js";import{L as T,u as Ve}from"./useI18n-C0NLVYPv.js";import{L as He,M as Ae,a4 as Ge}from"./use-locale-context-kHyebpMI.js";import{P as Fe}from"./portal-CJHwXgLI.js";import{u as We}from"./render-strategy-DRJaCB2u.js";import{a as $e}from"./use-presence-C53EI5fL.js";import{b as Ye,S as Ze,a as Qe}from"./SelectControl-cFSNnpci.js";import{T as F,a as Xe}from"./Text-CW33_IfE.js";import{b as Je,T as Ke,a as eo}from"./TooltipTrigger-CRWH95NO.js";import{e as oo,o as to,C as R}from"./controls-BtiQQn1l.js";import{s as V}from"./source-CPEZJ6oD.js";const Ie=g.forwardRef((o,a)=>{const n=U(),t=We(),u=$e({...t,present:n.open}),p=He(n.getBackdropProps(),u.getPresenceProps(),o);return u.unmounted?null:l.jsx(Ae.div,{...p,ref:Ge(u.ref,a)})});Ie.displayName="DialogBackdrop";const Pe=g.forwardRef((o,a)=>{const n=U(),t=He(n.getCloseTriggerProps(),o);return l.jsx(Ae.button,{...t,ref:a})});Pe.displayName="DialogCloseTrigger";const Re=g.createContext(void 0);function we({backdropStyle:o,children:a,i18n:n,locale:t,positionerStyle:u}){const[p,h]=g.useState(void 0),[C,b]=g.useState(!1);return l.jsx(Re.Provider,{value:{backdropStyle:o,dismissible:p,hasHeader:C,i18n:n,locale:t,positionerStyle:u,setDismissible:h,setHasHeader:b},children:a})}function G(){return qe(Re)}we.__docgenInfo={description:"",methods:[],displayName:"ModalProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const r=({backdropStyle:o,children:a,closeOnEscape:n=!0,closeOnInteractOutside:t=!0,defaultOpen:u,i18n:p,initialFocusedElement:h,locale:C,onOpenChange:b,open:j,positionerStyle:q,...M})=>l.jsx(we,{backdropStyle:o,i18n:p,locale:C,positionerStyle:q,children:l.jsx(Le,{closeOnEscape:n,closeOnInteractOutside:t,defaultOpen:u,initialFocusEl:h,onOpenChange:b,open:j,...M,children:a})});r.displayName="Modal";r.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{backdropStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom style applied to the modal backdrop. Useful if you want to override the backdrop z-index."},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the outside is clicked.",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the modal. Use when you don't need to control the open state of the modal."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"MODAL_I18N"},{name:"string"}],raw:"Record<MODAL_I18N, string>"}],raw:"Partial<Record<MODAL_I18N, string>>"},description:"Internal translations override."},initialFocusedElement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}},description:"Element that receive the focus when the dialog is opened."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ModalOpenChangeDetail) => void",signature:{arguments:[{type:{name:"ModalOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the modal open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the modal."},positionerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom style applied to the overlay positioner. Useful if you want to override the overlay z-index."}}};const ao={"modal-body":"_modal-body_1370a_2"},d=g.forwardRef(({children:o,className:a,...n},t)=>l.jsx("div",{className:z(ao["modal-body"],a),"data-ods":"modal-body",ref:t,...n,children:o}));d.displayName="ModalBody";d.__docgenInfo={description:"",methods:[],displayName:"ModalBody",composes:["ComponentPropsWithRef"]};var f=(o=>(o[o.critical=y.critical]="critical",o[o.information=y.information]="information",o[o.neutral=y.neutral]="neutral",o[o.primary=y.primary]="primary",o[o.success=y.success]="success",o[o.warning=y.warning]="warning",o))(f||{});Object.freeze(Object.values(f));var De=(o=>(o.closeButton="modal.close.button",o))(De||{});const no={"modal.close.button":{[T.de]:"Schließen",[T.en]:"Close",[T.es]:"Cerrar",[T.fr]:"Fermer",[T.it]:"Chiudere",[T.nl]:"Sluiten",[T.pl]:"Zamknąć",[T.pt]:"Fechar"}},D=g.forwardRef(({className:o,...a},n)=>{const{i18n:t,locale:u}=G(),{translate:p}=Ve(no,u,t);return l.jsx(Pe,{asChild:!0,children:l.jsx(c,{"aria-label":p(De.closeButton),className:o,color:y.neutral,ref:n,size:je.xs,variant:k.ghost,...a,children:l.jsx(xe,{name:Se.xmark})})})});D.displayName="ModalCloseTrigger";D.__docgenInfo={description:"",methods:[],displayName:"ModalCloseTrigger",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=BUTTON_COLOR
The color preset to use.`},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state, disabling it."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},variant:{required:!1,tsType:{name:"literal",value:"`${BUTTON_VARIANT}`"},description:"The variant preset to use."}},composes:["ComponentPropsWithRef"]};const w={"modal-backdrop":"_modal-backdrop_1wens_22","modal-positioner":"_modal-positioner_1wens_28","modal-content":"_modal-content_1wens_33","modal-content__close-trigger":"_modal-content__close-trigger_1wens_76"},s=g.forwardRef(({children:o,className:a,color:n=f.information,createPortal:t=!0,dismissible:u=!0,...p},h)=>{const{open:C}=U(),{backdropStyle:b,hasHeader:j,positionerStyle:q,setDismissible:M}=G();return g.useEffect(()=>(M==null||M(u),()=>{M==null||M(void 0)}),[u,M]),l.jsxs(Fe,{disabled:!t,children:[l.jsx(Ie,{className:w["modal-backdrop"],style:{zIndex:"calc(var(--ods-theme-overlay-z-index) + 1)",...b||{}}}),l.jsx(ke,{className:w["modal-positioner"],style:{zIndex:"calc(var(--ods-theme-overlay-z-index) + 2)",...q||{}},children:l.jsxs(Ue,{"aria-describedby":p["aria-describedby"]||"","aria-labelledby":p["aria-labelledby"]||"",className:z(w["modal-content"],a),"data-ods":"modal-content",ref:h,role:n===f.critical?"alertdialog":"dialog",...p,style:{...p.style,...C?{}:{display:"none"}},children:[!j&&u&&l.jsx("div",{className:w["modal-content__close-trigger"],children:l.jsx(D,{})}),o]})})]})});s.displayName="ModalContent";s.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{color:{required:!1,tsType:{name:"literal",value:"`${MODAL_COLOR}`"},description:`@deprecated
The color preset to use.
DEPRECATED: Color is no longer used and will be removed in the next major version.`,defaultValue:{value:"MODAL_COLOR.information",computed:!0}},createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the remove button is displayed.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const L={"modal-header":"_modal-header_dsbxu_2","modal-header__content":"_modal-header__content_dsbxu_14","modal-header__close":"_modal-header__close_dsbxu_17"},i=({children:o,className:a})=>{const{dismissible:n,setHasHeader:t}=G();return g.useEffect(()=>(t==null||t(!0),()=>{t==null||t(!1)}),[t]),l.jsxs("div",{className:z(L["modal-header"],a),children:[l.jsx("div",{className:L["modal-header__content"],children:o}),n&&l.jsx(D,{className:L["modal-header__close"]})]})};i.displayName="ModalHeader";i.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const m=g.forwardRef(({children:o,...a},n)=>l.jsx(ze,{"data-ods":"modal-trigger",ref:n,...a,children:o}));m.displayName="ModalTrigger";m.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const lo={argTypes:oo(["defaultOpen","i18n","initialFocusedElement","locale","onOpenChange","open"]),component:r,subcomponents:{ModalBody:d,ModalContent:s,ModalHeader:i,ModalTrigger:m},title:"React Components/Modal"},E={render:o=>e.createElement(r,{closeOnEscape:o.closeOnEscape,closeOnInteractOutside:o.closeOnInteractOutside},e.createElement(m,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(s,{color:o.color,dismissible:o.dismissible},e.createElement(i,null,"Modal header"),e.createElement(d,null,o.content))),argTypes:to({closeOnEscape:{table:{category:R.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:R.general},control:{type:"boolean"}},content:{table:{category:R.slot},control:"text"},dismissible:{table:{category:R.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My modal content"}},v={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(s,{color:f.critical},e.createElement(i,null,e.createElement("span",{id:"modal-title"},"Delete item")),e.createElement(d,null,e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item?"),e.createElement("div",{style:{display:"flex",gap:"8px",justifyContent:"end"}},e.createElement(c,{variant:k.ghost},"Cancel"),e.createElement(c,{color:y.critical},"Delete")))))},B={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(s,{"aria-describedby":"modal-content","aria-labelledby":"modal-title"},e.createElement(i,null,e.createElement("span",{id:"modal-title"},"Delete item")),e.createElement(d,null,e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},O={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(s,{"aria-describedby":"modal-content","aria-label":"Modal Content"},e.createElement(i,null,"Modal header"),e.createElement(d,{id:"modal-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))},_={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(s,null,e.createElement(i,null,e.createElement("span",{id:"modal-title"},"Delete item")),e.createElement(d,null,e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},N={globals:{imports:`import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...V()}}},render:({})=>{const[o,a]=g.useState(!1);function n({open:u}){a(u)}function t(){a(!0)}return e.createElement(e.Fragment,null,e.createElement(c,{onClick:t},"Trigger Modal"),e.createElement(r,{onOpenChange:n,open:o},e.createElement(s,null,e.createElement(i,null,"Controlled modal"),e.createElement(d,null,"Content"))))}},x={globals:{imports:"import { Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(m,null,"Trigger Modal"),e.createElement(s,null,e.createElement(i,null,"My modal header"),e.createElement(d,null,"My modal content")))},S={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...V()}}},render:({})=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(s,{dismissible:!1},e.createElement(i,null,"Non dismissible"),e.createElement(d,null,"My modal content")))},H={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...V()}}},render:({})=>e.createElement(r,{closeOnEscape:!1,closeOnInteractOutside:!1},e.createElement(m,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(s,null,e.createElement(i,null,"Non escapable"),e.createElement(d,null,"My modal content")))},A={globals:{imports:"import { ICON_NAME, Button, Icon, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(c,null,"Trigger Modal")),e.createElement(s,null,e.createElement(i,null,"Overlay elements"),e.createElement(d,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},e.createElement(Ye,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(Ze,null),e.createElement(Qe,{createPortal:!1})),e.createElement(Je,null,e.createElement(Ke,{asChild:!0},e.createElement(xe,{name:Se.circleQuestion,style:{fontSize:"24px"}})),e.createElement(eo,{createPortal:!1},"This is the tooltip content")))))},I={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(c,{variant:k.outline},"Trigger Modal")),e.createElement(s,null,e.createElement(i,null,e.createElement(F,{as:"span",preset:Xe.heading4},"Overview")),e.createElement(d,null,e.createElement(F,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))},P={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"12px"}},e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(c,null,"Default")),e.createElement(s,{createPortal:!1},e.createElement(i,null,"Default"),e.createElement(d,null,"Default"))),e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(c,null,"Non dismissible")),e.createElement(s,{createPortal:!1,dismissible:!1},e.createElement(i,null,"Non dismissible"),e.createElement(d,null,"Non dismissible"))),e.createElement(r,null,e.createElement(m,{asChild:!0},e.createElement(c,{color:y.critical},"Critical")),e.createElement(s,{color:f.critical,createPortal:!1},e.createElement(i,null,"Critical"),e.createElement(d,null,"Critical"))))};var W,$,Y;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=($=E.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};var Z,Q,X;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,K,ee;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(ee=(K=B.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};var oe,te,ae;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(te=O.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,le,re;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(le=_.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var de,se,ie;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ie=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,me,ue;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,ge,Me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(Me=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:Me.source}}};var ye,Te,fe;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(fe=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:fe.source}}};var he,Ce,be;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(be=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var Ee,ve,Be;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Be=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};var Oe,_e,Ne;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ne=(_e=P.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};const ro=["Demo","AccessibilityActions","AccessibilityAriaLabelledBy","AccessibilityAriaLabel","AccessibilityBadPracticesAria","Controlled","Default","NonDismissible","NonEscapable","OverlayElements","Overview","ThemeGenerator"],_o=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityActions:v,AccessibilityAriaLabel:O,AccessibilityAriaLabelledBy:B,AccessibilityBadPracticesAria:_,Controlled:N,Default:x,Demo:E,NonDismissible:S,NonEscapable:H,OverlayElements:A,Overview:I,ThemeGenerator:P,__namedExportsOrder:ro,default:lo},Symbol.toStringTag,{value:"Module"}));export{O as A,N as C,x as D,_o as M,S as N,I as O,B as a,v as b,_ as c,H as d,A as e};
