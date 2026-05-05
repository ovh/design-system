import{r as g,e}from"./index-jIWwRBLr.js";import{B as u,d as j,c as We}from"./Button-B-GJ-1TA.js";import{a as y}from"./colors-DSObuHxd.js";import{I as Ie,a as Re}from"./icon-name-D0KNfDOz.js";import{j as l}from"./jsx-runtime-Cfl8ynUo.js";import{u as ze}from"./context-C_-r2uoG.js";import{u as W,D as Ge,a as Fe,b as $e,c as Ye}from"./dialog-trigger-BqYWYiWM.js";import{c as z}from"./index-CqY9YpN0.js";import{L as T,u as Xe}from"./useI18n-C0NLVYPv.js";import{M as Pe,N as De,a4 as Ze}from"./use-locale-context-CGqEQCyU.js";import{P as Qe}from"./portal-DmTPQ5yQ.js";import{u as Je}from"./render-strategy-CleMi1sB.js";import{a as Ke}from"./use-presence-D0Br6WHR.js";import{b as eo,S as oo,a as to}from"./index-onrz60cw.js";import{T as V,a as je}from"./Text-CAQM6i-X.js";import{b as ao,T as no,a as lo}from"./index-Ct9O8XVq.js";import{e as ro,o as so,C as P}from"./controls-BtiQQn1l.js";import{s as G}from"./source-CPEZJ6oD.js";const Le=g.forwardRef((o,t)=>{const a=W(),c=Je(),m=Ke({...c,present:a.open}),n=Pe(a.getBackdropProps(),m.getPresenceProps(),o);return m.unmounted?null:l.jsx(De.div,{...n,ref:Ze(m.ref,t)})});Le.displayName="DialogBackdrop";const qe=g.forwardRef((o,t)=>{const a=W(),c=Pe(a.getCloseTriggerProps(),o);return l.jsx(De.button,{...c,ref:t})});qe.displayName="DialogCloseTrigger";const ke=g.createContext(void 0);function Ue({backdropStyle:o,children:t,i18n:a,locale:c,positionerStyle:m}){const[n,h]=g.useState(void 0),[C,b]=g.useState(!1);return l.jsx(ke.Provider,{value:{backdropStyle:o,dismissible:n,hasHeader:C,i18n:a,locale:c,positionerStyle:m,setDismissible:h,setHasHeader:b},children:t})}function F(){return ze(ke)}Ue.__docgenInfo={description:"",methods:[],displayName:"ModalProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const $=({backdropStyle:o,children:t,closeOnEscape:a=!0,closeOnInteractOutside:c=!0,defaultOpen:m,i18n:n,initialFocusedElement:h,locale:C,onOpenChange:b,open:q,positionerStyle:k,...M})=>l.jsx(Ue,{backdropStyle:o,i18n:n,locale:C,positionerStyle:k,children:l.jsx(Ge,{closeOnEscape:a,closeOnInteractOutside:c,defaultOpen:m,initialFocusEl:h,onOpenChange:b,open:q,...M,children:t})});$.displayName="Modal";$.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{backdropStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom style applied to the modal backdrop. Useful if you want to override the backdrop z-index."},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the outside is clicked.",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the modal. Use when you don't need to control the open state of the modal."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"MODAL_I18N"},{name:"string"}],raw:"Record<MODAL_I18N, string>"}],raw:"Partial<Record<MODAL_I18N, string>>"},description:"Internal translations override."},initialFocusedElement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}},description:"Element that receive the focus when the dialog is opened."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ModalOpenChangeDetail) => void",signature:{arguments:[{type:{name:"ModalOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the modal open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the modal."},positionerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom style applied to the overlay positioner. Useful if you want to override the overlay z-index."}}};const io={"modal-body":"_modal-body_1370a_2"},r=g.forwardRef(({children:o,className:t,...a},c)=>l.jsx("div",{className:z(io["modal-body"],t),"data-ods":"modal-body",ref:c,...a,children:o}));r.displayName="ModalBody";r.__docgenInfo={description:"",methods:[],displayName:"ModalBody",composes:["ComponentPropsWithRef"]};var f=(o=>(o[o.critical=y.critical]="critical",o[o.information=y.information]="information",o[o.neutral=y.neutral]="neutral",o[o.primary=y.primary]="primary",o[o.success=y.success]="success",o[o.warning=y.warning]="warning",o))(f||{});Object.freeze(Object.values(f));var Ve=(o=>(o.closeButton="modal.close.button",o))(Ve||{});const co={"modal.close.button":{[T.de]:"Schließen",[T.en]:"Close",[T.es]:"Cerrar",[T.fr]:"Fermer",[T.it]:"Chiudere",[T.nl]:"Sluiten",[T.pl]:"Zamknąć",[T.pt]:"Fechar"}},L=g.forwardRef(({className:o,...t},a)=>{const{i18n:c,locale:m}=F(),{translate:n}=Xe(co,m,c);return l.jsx(qe,{asChild:!0,children:l.jsx(u,{"aria-label":n(Ve.closeButton),className:o,color:y.neutral,ref:a,size:We.xs,variant:j.ghost,...t,children:l.jsx(Ie,{name:Re.xmark})})})});L.displayName="ModalCloseTrigger";L.__docgenInfo={description:"",methods:[],displayName:"ModalCloseTrigger",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=BUTTON_COLOR
The color preset to use.`},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state, disabling it."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},variant:{required:!1,tsType:{name:"literal",value:"`${BUTTON_VARIANT}`"},description:"The variant preset to use."}},composes:["ComponentPropsWithRef"]};const D={"modal-backdrop":"_modal-backdrop_1wens_22","modal-positioner":"_modal-positioner_1wens_28","modal-content":"_modal-content_1wens_33","modal-content__close-trigger":"_modal-content__close-trigger_1wens_76"},d=g.forwardRef(({children:o,className:t,color:a=f.information,createPortal:c=!0,dismissible:m=!0,...n},h)=>{const{open:C}=W(),{backdropStyle:b,hasHeader:q,positionerStyle:k,setDismissible:M}=F();return g.useEffect(()=>(M==null||M(m),()=>{M==null||M(void 0)}),[m,M]),l.jsxs(Qe,{disabled:!c,children:[l.jsx(Le,{className:D["modal-backdrop"],style:{zIndex:"calc(var(--ods-theme-overlay-z-index) + 1)",...b||{}}}),l.jsx(Fe,{className:D["modal-positioner"],style:{zIndex:"calc(var(--ods-theme-overlay-z-index) + 2)",...k||{}},children:l.jsxs($e,{"aria-describedby":n["aria-describedby"]||"","aria-labelledby":n["aria-labelledby"]||"",className:z(D["modal-content"],t),"data-ods":"modal-content",ref:h,role:a===f.critical?"alertdialog":"dialog",...n,style:{...n.style,...C?{}:{display:"none"}},children:[!q&&m&&l.jsx("div",{className:D["modal-content__close-trigger"],children:l.jsx(L,{})}),o]})})]})});d.displayName="ModalContent";d.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{color:{required:!1,tsType:{name:"literal",value:"`${MODAL_COLOR}`"},description:`@deprecated
The color preset to use.
DEPRECATED: Color is no longer used and will be removed in the next major version.`,defaultValue:{value:"MODAL_COLOR.information",computed:!0}},createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the remove button is displayed.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const U={"modal-header":"_modal-header_dsbxu_2","modal-header__content":"_modal-header__content_dsbxu_14","modal-header__close":"_modal-header__close_dsbxu_17"},s=g.forwardRef(({children:o,className:t,...a},c)=>{const{dismissible:m,setHasHeader:n}=F();return g.useEffect(()=>(n==null||n(!0),()=>{n==null||n(!1)}),[n]),l.jsxs("div",{className:z(U["modal-header"],t),"data-ods":"modal-header",ref:c,...a,children:[l.jsx("div",{className:U["modal-header__content"],children:o}),m&&l.jsx(L,{className:U["modal-header__close"]})]})});s.displayName="ModalHeader";s.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",composes:["ComponentPropsWithRef"]};const i=g.forwardRef(({children:o,...t},a)=>l.jsx(Ye,{"data-ods":"modal-trigger",ref:a,...t,children:o}));i.displayName="ModalTrigger";i.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const p=Object.assign($,{Body:r,Content:d,Header:s,Trigger:i}),mo={argTypes:ro(["defaultOpen","i18n","initialFocusedElement","locale","onOpenChange","open"]),component:p,subcomponents:{ModalBody:r,ModalContent:d,ModalHeader:s,ModalTrigger:i},title:"React Components/Modal"},E={render:o=>e.createElement(p,{closeOnEscape:o.closeOnEscape,closeOnInteractOutside:o.closeOnInteractOutside},e.createElement(i,{asChild:!0},e.createElement(u,null,"Trigger Modal")),e.createElement(d,{color:o.color,dismissible:o.dismissible},e.createElement(s,null,"Modal header"),e.createElement(r,null,o.content))),argTypes:so({closeOnEscape:{table:{category:P.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:P.general},control:{type:"boolean"}},content:{table:{category:P.slot},control:"text"},dismissible:{table:{category:P.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My modal content"}},v={tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"var(--ods-theme-row-gap)",alignItems:"start"}},e.createElement("div",{style:{position:"relative",minWidth:"320px",minHeight:"140px"}},e.createElement(p,{backdropStyle:{position:"absolute"},modal:!1,open:!0,positionerStyle:{position:"absolute"}},e.createElement(d,{createPortal:!1,style:{width:"280px",minWidth:"auto",animation:"none"}},e.createElement(s,null,e.createElement(V,{as:"span",preset:je.heading4},"Overview")),e.createElement(r,null,"Lorem ipsum dolor sit amet ...")))),e.createElement(p,null,e.createElement(i,{asChild:!0},e.createElement(u,{variant:j.outline},"Trigger Modal"))))},B={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,null,e.createElement(i,{asChild:!0},e.createElement(u,null,"Trigger Modal")),e.createElement(d,{color:f.critical},e.createElement(s,null,e.createElement("span",{id:"modal-title"},"Delete item")),e.createElement(r,null,e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item?"),e.createElement("div",{style:{display:"flex",gap:"8px",justifyContent:"end"}},e.createElement(u,{variant:j.ghost},"Cancel"),e.createElement(u,{color:y.critical},"Delete")))))},O={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,null,e.createElement(i,{asChild:!0},e.createElement(u,null,"Trigger Modal")),e.createElement(d,{"aria-describedby":"modal-content","aria-labelledby":"modal-title"},e.createElement(s,null,e.createElement("span",{id:"modal-title"},"Delete item")),e.createElement(r,null,e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},_={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,null,e.createElement(i,{asChild:!0},e.createElement(u,null,"Trigger Modal")),e.createElement(d,{"aria-describedby":"modal-content","aria-label":"Modal Content"},e.createElement(s,null,"Modal header"),e.createElement(r,{id:"modal-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))},N={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,null,e.createElement(i,{asChild:!0},e.createElement(u,null,"Trigger Modal")),e.createElement(d,null,e.createElement(s,null,e.createElement("span",{id:"modal-title"},"Delete item")),e.createElement(r,null,e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},x={globals:{imports:`import { Button, Modal, ModalBody, ModalContent, ModalHeader } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...G()}}},render:({})=>{const[o,t]=g.useState(!1);function a({open:m}){t(m)}function c(){t(!0)}return e.createElement(e.Fragment,null,e.createElement(u,{onClick:c},"Trigger Modal"),e.createElement(p,{onOpenChange:a,open:o},e.createElement(d,null,e.createElement(s,null,"Controlled modal"),e.createElement(r,null,"Content"))))}},S={globals:{imports:"import { Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,null,e.createElement(i,null,"Trigger Modal"),e.createElement(d,null,e.createElement(s,null,"My modal header"),e.createElement(r,null,"My modal content")))},H={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...G()}}},render:({})=>e.createElement(p,null,e.createElement(i,{asChild:!0},e.createElement(u,null,"Trigger Modal")),e.createElement(d,{dismissible:!1},e.createElement(s,null,"Non dismissible"),e.createElement(r,null,"My modal content")))},A={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...G()}}},render:({})=>e.createElement(p,{closeOnEscape:!1,closeOnInteractOutside:!1},e.createElement(i,{asChild:!0},e.createElement(u,null,"Trigger Modal")),e.createElement(d,null,e.createElement(s,null,"Non escapable"),e.createElement(r,null,"My modal content")))},w={globals:{imports:"import { ICON_NAME, Button, Icon, Modal, ModalBody, ModalContent, ModalHeader, ModalTrigger, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(p,null,e.createElement(i,{asChild:!0},e.createElement(u,null,"Trigger Modal")),e.createElement(d,null,e.createElement(s,null,"Overlay elements"),e.createElement(r,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},e.createElement(eo,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(oo,null),e.createElement(to,{createPortal:!1})),e.createElement(ao,null,e.createElement(no,{asChild:!0},e.createElement(Ie,{name:Re.circleQuestion,style:{fontSize:"24px"}})),e.createElement(lo,{createPortal:!1},"This is the tooltip content")))))},I={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(p,null,e.createElement(i,{asChild:!0},e.createElement(u,{variant:j.outline},"Trigger Modal")),e.createElement(d,null,e.createElement(s,null,e.createElement(V,{as:"span",preset:je.heading4},"Overview")),e.createElement(r,null,e.createElement(V,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))},R={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"12px"}},e.createElement(p,null,e.createElement(i,{asChild:!0},e.createElement(u,null,"Default")),e.createElement(d,{createPortal:!1},e.createElement(s,null,"Default"),e.createElement(r,null,"Default"))),e.createElement(p,null,e.createElement(i,{asChild:!0},e.createElement(u,null,"Non dismissible")),e.createElement(d,{createPortal:!1,dismissible:!1},e.createElement(s,null,"Non dismissible"),e.createElement(r,null,"Non dismissible"))),e.createElement(p,null,e.createElement(i,{asChild:!0},e.createElement(u,{color:y.critical},"Critical")),e.createElement(d,{color:f.critical,createPortal:!1},e.createElement(s,null,"Critical"),e.createElement(r,null,"Critical"))))};var Y,X,Z;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Z=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Q,J,K;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: 'var(--ods-theme-row-gap)',
    alignItems: 'start'
  }}>
      <div style={{
      position: 'relative',
      minWidth: '320px',
      minHeight: '140px'
    }}>
        <Modal backdropStyle={{
        position: 'absolute'
      }}
      // @ts-ignore force ark attribute to avoid inert on page
      modal={false} open positionerStyle={{
        position: 'absolute'
      }}>
          <ModalContent createPortal={false} style={{
          width: '280px',
          minWidth: 'auto',
          animation: 'none'
        }}>
            <ModalHeader>
              <Text as="span" preset={TEXT_PRESET.heading4}>
                Overview
              </Text>
            </ModalHeader>

            <ModalBody>
                Lorem ipsum dolor sit amet ...
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>

      <Modal>
        <ModalTrigger asChild>
          <Button variant={BUTTON_VARIANT.outline}>
            Trigger Modal
          </Button>
        </ModalTrigger>
      </Modal>
    </div>
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var ee,oe,te;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ae,ne,le;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var re,de,se;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(de=_.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var ie,ce,me;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(me=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,pe,ge;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var Me,ye,Te;S.parameters={...S.parameters,docs:{...(Me=S.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Te=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var fe,he,Ce;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ce=(he=H.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var be,Ee,ve;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ve=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};var Be,Oe,_e;w.parameters={...w.parameters,docs:{...(Be=w.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(_e=(Oe=w.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var Ne,xe,Se;I.parameters={...I.parameters,docs:{...(Ne=I.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
          <Text as="span" preset={TEXT_PRESET.heading4}>
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
}`,...(Se=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var He,Ae,we;R.parameters={...R.parameters,docs:{...(He=R.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(we=(Ae=R.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};const uo=["Demo","AnatomyTech","AccessibilityActions","AccessibilityAriaLabelledBy","AccessibilityAriaLabel","AccessibilityBadPracticesAria","Controlled","Default","NonDismissible","NonEscapable","OverlayElements","Overview","ThemeGenerator"],Ao=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityActions:B,AccessibilityAriaLabel:_,AccessibilityAriaLabelledBy:O,AccessibilityBadPracticesAria:N,AnatomyTech:v,Controlled:x,Default:S,Demo:E,NonDismissible:H,NonEscapable:A,OverlayElements:w,Overview:I,ThemeGenerator:R,__namedExportsOrder:uo,default:mo},Symbol.toStringTag,{value:"Module"}));export{_ as A,x as C,S as D,Ao as M,H as N,I as O,O as a,B as b,N as c,v as d,A as e,w as f};
