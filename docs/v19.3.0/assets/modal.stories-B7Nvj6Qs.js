import{r as g,e}from"./index-jIWwRBLr.js";import{B as t,d as S,c as qe}from"./Button-B-GJ-1TA.js";import{a as d,C as Ve}from"./colors-DSObuHxd.js";import{I as Ne,a as Re}from"./icon-name-C581wThh.js";import{j as c}from"./jsx-runtime-Cfl8ynUo.js";import{u as xe,D as Fe,a as He,b as We,c as ze}from"./dialog-trigger-xjfEa5BB.js";import{c as w}from"./index-CqY9YpN0.js";import{L as p,u as Ye}from"./useI18n-C0NLVYPv.js";import{T as Ae,U as Le,V as $e}from"./use-locale-context-6s5qsrWI.js";import{P as Xe}from"./portal--PO1aV1j.js";import{u as Qe}from"./render-strategy-BOAyFnMW.js";import{a as Ze}from"./use-presence-Dwt5F0sJ.js";import{b as Je,S as Ke,a as eo}from"./SelectControl-BYYgJB15.js";import{T as L,a as Se}from"./Text-DyiJ5nHV.js";import{b as oo,T as to,a as no}from"./TooltipTrigger-CtwhYrHp.js";import{e as ao,o as lo,C}from"./controls-BtiQQn1l.js";import{s as U}from"./source-CPEZJ6oD.js";const De=g.forwardRef((o,i)=>{const s=xe(),m=Qe(),u=Ze({...m,present:s.open}),M=Ae(s.getBackdropProps(),u.getPresenceProps(),o);return u.unmounted?null:c.jsx(Le.div,{...M,ref:$e(u.ref,i)})});De.displayName="DialogBackdrop";const Ie=g.forwardRef((o,i)=>{const s=xe(),m=Ae(s.getCloseTriggerProps(),o);return c.jsx(Le.button,{...m,ref:i})});Ie.displayName="DialogCloseTrigger";const Pe=g.createContext({});function we({children:o,i18n:i,locale:s}){return c.jsx(Pe.Provider,{value:{i18n:i,locale:s},children:o})}function ro(){return g.useContext(Pe)}we.__docgenInfo={description:"",methods:[],displayName:"ModalProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ModalContextType"]};const n=({children:o,closeOnEscape:i=!0,closeOnInteractOutside:s=!0,defaultOpen:m,i18n:u,initialFocusedElement:M,locale:D,onOpenChange:je,open:ke,...Ge})=>c.jsx(we,{i18n:u,locale:D,children:c.jsx(Fe,{closeOnEscape:i,closeOnInteractOutside:s,defaultOpen:m,initialFocusEl:M,onOpenChange:je,open:ke,...Ge,children:o})});n.displayName="Modal";n.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the outside is clicked.",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the modal. Use when you don't need to control the open state of the modal."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"MODAL_I18N"},{name:"string"}],raw:"Record<MODAL_I18N, string>"}],raw:"Partial<Record<MODAL_I18N, string>>"},description:"Internal translations override."},initialFocusedElement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}},description:"Element that receive the focus when the dialog is opened."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ModalOpenChangeDetail) => void",signature:{arguments:[{type:{name:"ModalOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the modal open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the modal."}}};const so={"modal-body":"_modal-body_17jys_2"},a=g.forwardRef(({children:o,className:i,...s},m)=>c.jsx("div",{className:w(so["modal-body"],i),"data-ods":"modal-body",ref:m,...s,children:o}));a.displayName="ModalBody";a.__docgenInfo={description:"",methods:[],displayName:"ModalBody",composes:["ComponentPropsWithRef"]};var Ue=(o=>(o.closeButton="modal.close.button",o))(Ue||{});const io={"modal.close.button":{[p.de]:"Schließen",[p.en]:"Close",[p.es]:"Cerrar",[p.fr]:"Fermer",[p.it]:"Chiudere",[p.nl]:"Sluiten",[p.pl]:"Zamknąć",[p.pt]:"Fechar"}},I={"modal-header":"_modal-header_7pkdv_2","modal-header--critical":"_modal-header--critical_7pkdv_15","modal-header--information":"_modal-header--information_7pkdv_18","modal-header--neutral":"_modal-header--neutral_7pkdv_21","modal-header--primary":"_modal-header--primary_7pkdv_24","modal-header__close":"_modal-header__close_7pkdv_27","modal-header--success":"_modal-header--success_7pkdv_30","modal-header--warning":"_modal-header--warning_7pkdv_33"},j=({color:o,dismissible:i})=>{const{i18n:s,locale:m}=ro(),{translate:u}=Ye(io,m,s);return c.jsx("div",{className:w(I["modal-header"],I[`modal-header--${o}`]),children:i&&c.jsx(Ie,{asChild:!0,children:c.jsx(t,{"aria-label":u(Ue.closeButton),className:I["modal-header__close"],color:d.neutral,size:qe.xs,variant:S.ghost,children:c.jsx(Ne,{name:Re.xmark})})})})};j.displayName="ModalHeader";j.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{color:{required:!0,tsType:{name:"literal",value:"`${COLOR}`"},description:""},dismissible:{required:!0,tsType:{name:"boolean"},description:""}}};const P={"modal-backdrop":"_modal-backdrop_11des_22","modal-positioner":"_modal-positioner_11des_28","modal-content":"_modal-content_11des_33"},l=g.forwardRef(({children:o,className:i,color:s=d.information,createPortal:m=!0,dismissible:u=!0,...M},D)=>c.jsxs(Xe,{disabled:!m,children:[c.jsx(De,{className:P["modal-backdrop"],style:{zIndex:"calc(var(--ods-theme-overlay-z-index) - 2)"}}),c.jsx(He,{className:P["modal-positioner"],style:{zIndex:"calc(var(--ods-theme-overlay-z-index) - 1)"},children:c.jsxs(We,{"aria-describedby":M["aria-describedby"]||"","aria-labelledby":M["aria-labelledby"]||"",className:w(P["modal-content"],i),"data-ods":"modal-content",ref:D,role:s===d.critical?"alertdialog":"dialog",...M,children:[c.jsx(j,{color:s,dismissible:u}),o]})})]}));l.displayName="ModalContent";l.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=MODAL_COLOR
The color preset to use.`,defaultValue:{value:"MODAL_COLOR.information",computed:!0}},createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the remove button is displayed.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const r=g.forwardRef(({children:o,...i},s)=>c.jsx(ze,{"data-ods":"modal-trigger",ref:s,...i,children:o}));r.displayName="ModalTrigger";r.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const co={argTypes:ao(["defaultOpen","i18n","initialFocusedElement","locale","onOpenChange","open"]),component:n,subcomponents:{ModalBody:a,ModalContent:l,ModalTrigger:r},title:"React Components/Modal"},T={render:o=>e.createElement(n,{closeOnEscape:o.closeOnEscape,closeOnInteractOutside:o.closeOnInteractOutside},e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,{color:o.color,dismissible:o.dismissible},e.createElement(a,null,o.content))),argTypes:lo({closeOnEscape:{table:{category:C.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:C.general},control:{type:"boolean"}},color:{table:{category:C.design,defaultValue:{summary:d.information},type:{summary:"MODAL_COLOR"}},control:{type:"select"},options:Ve},content:{table:{category:C.slot},control:"text"},dismissible:{table:{category:C.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My modal content"}},y={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,{color:d.critical},e.createElement(a,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item?"),e.createElement("div",{style:{display:"flex",gap:"8px",justifyContent:"end"}},e.createElement(t,{variant:S.ghost},"Cancel"),e.createElement(t,{color:d.critical},"Delete")))))},h={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,{"aria-describedby":"modal-content","aria-labelledby":"modal-title"},e.createElement(a,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},f={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,{"aria-describedby":"modal-content","aria-label":"Modal Content"},e.createElement(a,{id:"modal-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))},O={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,null,e.createElement(a,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},E={globals:{imports:"import { BUTTON_VARIANT, TEXT_PRESET, Button, Modal, ModalBody, ModalContent, ModalTrigger, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,null,e.createElement(a,{style:{display:"flex",flexDirection:"column",rowGap:"16px"}},e.createElement(L,{preset:Se.heading4},"Hosting removal"),e.createElement(L,null,`You're about to remove the hosting "1 vCore 2,4 GHz, 2 Go RAM".`),e.createElement("div",{style:{display:"flex",alignSelf:"flex-end",columnGap:"8px"}},e.createElement(t,null,"Confirm"),e.createElement(t,{variant:S.outline},"Cancel")))))},B={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px"}},o())],globals:{imports:"import { BUTTON_COLOR, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:d.critical},"Critical")),e.createElement(l,{color:d.critical},e.createElement(a,null,"Critical"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:d.information},"Information")),e.createElement(l,{color:d.information},e.createElement(a,null,"Information"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:d.neutral},"Neutral")),e.createElement(l,{color:d.neutral},e.createElement(a,null,"Neutral"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:d.primary},"Primary")),e.createElement(l,{color:d.primary},e.createElement(a,null,"Primary"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:d.success},"Success")),e.createElement(l,{color:d.success},e.createElement(a,null,"Success"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:d.warning},"Warning")),e.createElement(l,{color:d.warning},e.createElement(a,null,"Warning"))))},b={globals:{imports:`import { Button, Modal, ModalBody, ModalContent } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...U()}}},render:({})=>{const[o,i]=g.useState(!1);function s({open:u}){i(u)}function m(){i(!0)}return e.createElement(e.Fragment,null,e.createElement(t,{onClick:m},"Trigger Modal"),e.createElement(n,{onOpenChange:s,open:o},e.createElement(l,null,e.createElement(a,null,"Content"))))}},v={globals:{imports:"import { Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,null,"Trigger Modal"),e.createElement(l,null,e.createElement(a,null,"My modal content")))},_={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...U()}}},render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,{dismissible:!1},e.createElement(a,null,"My modal content")))},N={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...U()}}},render:({})=>e.createElement(n,{closeOnEscape:!1,closeOnInteractOutside:!1},e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,null,e.createElement(a,null,"My modal content")))},R={globals:{imports:"import { ICON_NAME, Button, Icon, Modal, ModalBody, ModalContent, ModalTrigger, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,null,e.createElement(a,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},e.createElement(Je,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(Ke,null),e.createElement(eo,{createPortal:!1})),e.createElement(oo,null,e.createElement(to,{asChild:!0},e.createElement(Ne,{name:Re.circleQuestion,style:{fontSize:"24px"}})),e.createElement(no,{createPortal:!1},"This is the tooltip content")))))},x={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{variant:S.outline},"Trigger Modal")),e.createElement(l,null,e.createElement(a,null,e.createElement(L,{preset:Se.heading4},"Overview"),e.createElement(L,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))},A={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"12px"}},e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Default")),e.createElement(l,{createPortal:!1},e.createElement(a,null,"Default"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Non dismissible")),e.createElement(l,{createPortal:!1,dismissible:!1},e.createElement(a,null,"Non dismissible"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:d.critical},"Critical")),e.createElement(l,{color:d.critical,createPortal:!1},e.createElement(a,null,"Critical"))))};var k,G,q;T.parameters={...T.parameters,docs:{...(k=T.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(q=(G=T.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var V,F,H;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BUTTON_COLOR, BUTTON_VARIANT, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent color={MODAL_COLOR.critical}>
        <ModalBody>
          <h2 id="modal-title">
            Delete item
          </h2>

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
}`,...(H=(F=y.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var W,z,Y;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent aria-describedby="modal-content" aria-labelledby="modal-title">
        <ModalBody>
          <h2 id="modal-title">
            Delete item
          </h2>

          <p id="modal-content">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(Y=(z=h.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var $,X,Q;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent aria-describedby="modal-content" aria-label="Modal Content">
        <ModalBody id="modal-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(Q=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Z,J,K;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Modal>
      <ModalTrigger asChild>
        <Button>
          Trigger Modal
        </Button>
      </ModalTrigger>

      <ModalContent>
        <ModalBody>
          <h2 id="modal-title">
            Delete item
          </h2>

          <p id="modal-content">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(K=(J=O.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var ee,oe,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BUTTON_VARIANT, TEXT_PRESET, Button, Modal, ModalBody, ModalContent, ModalTrigger, Text } from '@ovhcloud/ods-react';\`
  },
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
}`,...(te=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,ae,le;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { BUTTON_COLOR, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Modal>
        <ModalTrigger asChild>
          <Button color={BUTTON_COLOR.critical}>
            Critical
          </Button>
        </ModalTrigger>

        <ModalContent color={MODAL_COLOR.critical}>
          <ModalBody>
            Critical
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={BUTTON_COLOR.information}>
            Information
          </Button>
        </ModalTrigger>

        <ModalContent color={MODAL_COLOR.information}>
          <ModalBody>
            Information
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={BUTTON_COLOR.neutral}>
            Neutral
          </Button>
        </ModalTrigger>

        <ModalContent color={MODAL_COLOR.neutral}>
          <ModalBody>
            Neutral
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={BUTTON_COLOR.primary}>
            Primary
          </Button>
        </ModalTrigger>

        <ModalContent color={MODAL_COLOR.primary}>
          <ModalBody>
            Primary
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={BUTTON_COLOR.success}>
            Success
          </Button>
        </ModalTrigger>

        <ModalContent color={MODAL_COLOR.success}>
          <ModalBody>
            Success
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={BUTTON_COLOR.warning}>
            Warning
          </Button>
        </ModalTrigger>

        <ModalContent color={MODAL_COLOR.warning}>
          <ModalBody>
            Warning
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
}`,...(le=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var re,de,se;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent } from '@ovhcloud/ods-react';
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
            <ModalBody>
              Content
            </ModalBody>
          </ModalContent>
        </Modal>
      </>;
  }
}`,...(se=(de=b.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var ie,ce,me;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';\`
  },
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
}`,...(me=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,pe,ge;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';\`
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
        <ModalBody>
          My modal content
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(ge=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var Me,Ce,Te;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';\`
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
        <ModalBody>
          My modal content
        </ModalBody>
      </ModalContent>
    </Modal>
}`,...(Te=(Ce=N.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var ye,he,fe;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Button, Icon, Modal, ModalBody, ModalContent, ModalTrigger, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';\`
  },
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
}`,...(fe=(he=R.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var Oe,Ee,Be;x.parameters={...x.parameters,docs:{...(Oe=x.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Be=(Ee=x.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var be,ve,_e;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
          <ModalBody>Default</ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button>Non dismissible</Button>
        </ModalTrigger>
        <ModalContent createPortal={false} dismissible={false}>
          <ModalBody>Non dismissible</ModalBody>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button color={BUTTON_COLOR.critical}>Critical</Button>
        </ModalTrigger>
        <ModalContent color={MODAL_COLOR.critical} createPortal={false}>
          <ModalBody>Critical</ModalBody>
        </ModalContent>
      </Modal>
    </div>
}`,...(_e=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:_e.source}}};const mo=["Demo","AccessibilityActions","AccessibilityAriaLabelledBy","AccessibilityAriaLabel","AccessibilityBadPracticesAria","Actions","Colors","Controlled","Default","NonDismissible","NonEscapable","OverlayElements","Overview","ThemeGenerator"],xo=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityActions:y,AccessibilityAriaLabel:f,AccessibilityAriaLabelledBy:h,AccessibilityBadPracticesAria:O,Actions:E,Colors:B,Controlled:b,Default:v,Demo:T,NonDismissible:_,NonEscapable:N,OverlayElements:R,Overview:x,ThemeGenerator:A,__namedExportsOrder:mo,default:co},Symbol.toStringTag,{value:"Module"}));export{f as A,B as C,v as D,xo as M,_ as N,x as O,h as a,y as b,O as c,b as d,N as e,E as f,R as g};
