import{r as M,e}from"./index-jIWwRBLr.js";import{B as l,d as S,c as we}from"./Button-B-GJ-1TA.js";import{a as d,C as je}from"./colors-DSObuHxd.js";import{I as Be,a as be}from"./icon-name-BpdEc4-2.js";import{j as c}from"./jsx-runtime-Cfl8ynUo.js";import{u as ke}from"./context-C_-r2uoG.js";import{u as ve,D as Ue,a as qe,b as Ve,c as Fe}from"./dialog-trigger-DE3he7pi.js";import{c as I}from"./index-CqY9YpN0.js";import{L as p,u as Ge}from"./useI18n-C0NLVYPv.js";import{P as _e,Q as Le,a4 as We}from"./use-locale-context-Da8UBLVe.js";import{P as ze}from"./portal-Dz6APLpY.js";import{u as He}from"./render-strategy-B1QpILkn.js";import{a as Ye}from"./use-presence-BpdcDhnz.js";import{b as $e,S as Qe,a as Xe}from"./SelectControl-CraFX6-V.js";import{T as j,a as Ze}from"./Text-CW33_IfE.js";import{b as Je,T as Ke,a as eo}from"./TooltipTrigger-Bh-jDz_G.js";import{e as oo,o as to,C}from"./controls-BtiQQn1l.js";import{s as P}from"./source-CPEZJ6oD.js";const Ne=M.forwardRef((o,i)=>{const s=ve(),m=He(),u=Ye({...m,present:s.open}),g=_e(s.getBackdropProps(),u.getPresenceProps(),o);return u.unmounted?null:c.jsx(Le.div,{...g,ref:We(u.ref,i)})});Ne.displayName="DialogBackdrop";const Re=M.forwardRef((o,i)=>{const s=ve(),m=_e(s.getCloseTriggerProps(),o);return c.jsx(Le.button,{...m,ref:i})});Re.displayName="DialogCloseTrigger";const Ae=M.createContext(void 0);function xe({children:o,i18n:i,locale:s}){return c.jsx(Ae.Provider,{value:{i18n:i,locale:s},children:o})}function no(){return ke(Ae)}xe.__docgenInfo={description:"",methods:[],displayName:"ModalProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const t=({children:o,closeOnEscape:i=!0,closeOnInteractOutside:s=!0,defaultOpen:m,i18n:u,initialFocusedElement:g,locale:A,onOpenChange:Se,open:Ie,...Pe})=>c.jsx(xe,{i18n:u,locale:A,children:c.jsx(Ue,{closeOnEscape:i,closeOnInteractOutside:s,defaultOpen:m,initialFocusEl:g,onOpenChange:Se,open:Ie,...Pe,children:o})});t.displayName="Modal";t.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the outside is clicked.",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the modal. Use when you don't need to control the open state of the modal."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"MODAL_I18N"},{name:"string"}],raw:"Record<MODAL_I18N, string>"}],raw:"Partial<Record<MODAL_I18N, string>>"},description:"Internal translations override."},initialFocusedElement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}},description:"Element that receive the focus when the dialog is opened."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ModalOpenChangeDetail) => void",signature:{arguments:[{type:{name:"ModalOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the modal open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the modal."}}};const ao={"modal-body":"_modal-body_17jys_2"},n=M.forwardRef(({children:o,className:i,...s},m)=>c.jsx("div",{className:I(ao["modal-body"],i),"data-ods":"modal-body",ref:m,...s,children:o}));n.displayName="ModalBody";n.__docgenInfo={description:"",methods:[],displayName:"ModalBody",composes:["ComponentPropsWithRef"]};var De=(o=>(o.closeButton="modal.close.button",o))(De||{});const lo={"modal.close.button":{[p.de]:"Schließen",[p.en]:"Close",[p.es]:"Cerrar",[p.fr]:"Fermer",[p.it]:"Chiudere",[p.nl]:"Sluiten",[p.pl]:"Zamknąć",[p.pt]:"Fechar"}},x={"modal-header":"_modal-header_7pkdv_2","modal-header--critical":"_modal-header--critical_7pkdv_15","modal-header--information":"_modal-header--information_7pkdv_18","modal-header--neutral":"_modal-header--neutral_7pkdv_21","modal-header--primary":"_modal-header--primary_7pkdv_24","modal-header__close":"_modal-header__close_7pkdv_27","modal-header--success":"_modal-header--success_7pkdv_30","modal-header--warning":"_modal-header--warning_7pkdv_33"},w=({color:o,dismissible:i})=>{const{i18n:s,locale:m}=no(),{translate:u}=Ge(lo,m,s);return c.jsx("div",{className:I(x["modal-header"],x[`modal-header--${o}`]),children:i&&c.jsx(Re,{asChild:!0,children:c.jsx(l,{"aria-label":u(De.closeButton),className:x["modal-header__close"],color:d.neutral,size:we.xs,variant:S.ghost,children:c.jsx(Be,{name:be.xmark})})})})};w.displayName="ModalHeader";w.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{color:{required:!0,tsType:{name:"literal",value:"`${COLOR}`"},description:""},dismissible:{required:!0,tsType:{name:"boolean"},description:""}}};const D={"modal-backdrop":"_modal-backdrop_11des_22","modal-positioner":"_modal-positioner_11des_28","modal-content":"_modal-content_11des_33"},a=M.forwardRef(({children:o,className:i,color:s=d.information,createPortal:m=!0,dismissible:u=!0,...g},A)=>c.jsxs(ze,{disabled:!m,children:[c.jsx(Ne,{className:D["modal-backdrop"],style:{zIndex:"calc(var(--ods-theme-overlay-z-index) - 2)"}}),c.jsx(qe,{className:D["modal-positioner"],style:{zIndex:"calc(var(--ods-theme-overlay-z-index) - 1)"},children:c.jsxs(Ve,{"aria-describedby":g["aria-describedby"]||"","aria-labelledby":g["aria-labelledby"]||"",className:I(D["modal-content"],i),"data-ods":"modal-content",ref:A,role:s===d.critical?"alertdialog":"dialog",...g,children:[c.jsx(w,{color:s,dismissible:u}),o]})})]}));a.displayName="ModalContent";a.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=MODAL_COLOR
The color preset to use.`,defaultValue:{value:"MODAL_COLOR.information",computed:!0}},createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the remove button is displayed.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const r=M.forwardRef(({children:o,...i},s)=>c.jsx(Fe,{"data-ods":"modal-trigger",ref:s,...i,children:o}));r.displayName="ModalTrigger";r.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const ro={argTypes:oo(["defaultOpen","i18n","initialFocusedElement","locale","onOpenChange","open"]),component:t,subcomponents:{ModalBody:n,ModalContent:a,ModalTrigger:r},title:"React Components/Modal"},y={render:o=>e.createElement(t,{closeOnEscape:o.closeOnEscape,closeOnInteractOutside:o.closeOnInteractOutside},e.createElement(r,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,{color:o.color,dismissible:o.dismissible},e.createElement(n,null,o.content))),argTypes:to({closeOnEscape:{table:{category:C.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:C.general},control:{type:"boolean"}},color:{table:{category:C.design,defaultValue:{summary:d.information},type:{summary:"MODAL_COLOR"}},control:{type:"select"},options:je},content:{table:{category:C.slot},control:"text"},dismissible:{table:{category:C.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My modal content"}},T={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,{color:d.critical},e.createElement(n,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item?"),e.createElement("div",{style:{display:"flex",gap:"8px",justifyContent:"end"}},e.createElement(l,{variant:S.ghost},"Cancel"),e.createElement(l,{color:d.critical},"Delete")))))},h={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,{"aria-describedby":"modal-content","aria-labelledby":"modal-title"},e.createElement(n,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},O={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,{"aria-describedby":"modal-content","aria-label":"Modal Content"},e.createElement(n,{id:"modal-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))},f={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,null,e.createElement(n,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},E={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px"}},o())],globals:{imports:"import { BUTTON_COLOR, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,{color:d.critical},"Critical")),e.createElement(a,{color:d.critical},e.createElement(n,null,"Critical"))),e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,{color:d.information},"Information")),e.createElement(a,{color:d.information},e.createElement(n,null,"Information"))),e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,{color:d.neutral},"Neutral")),e.createElement(a,{color:d.neutral},e.createElement(n,null,"Neutral"))),e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,{color:d.primary},"Primary")),e.createElement(a,{color:d.primary},e.createElement(n,null,"Primary"))),e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,{color:d.success},"Success")),e.createElement(a,{color:d.success},e.createElement(n,null,"Success"))),e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,{color:d.warning},"Warning")),e.createElement(a,{color:d.warning},e.createElement(n,null,"Warning"))))},B={globals:{imports:`import { Button, Modal, ModalBody, ModalContent } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>{const[o,i]=M.useState(!1);function s({open:u}){i(u)}function m(){i(!0)}return e.createElement(e.Fragment,null,e.createElement(l,{onClick:m},"Trigger Modal"),e.createElement(t,{onOpenChange:s,open:o},e.createElement(a,null,e.createElement(n,null,"Content"))))}},b={globals:{imports:"import { Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(r,null,"Trigger Modal"),e.createElement(a,null,e.createElement(n,null,"My modal content")))},v={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,{dismissible:!1},e.createElement(n,null,"My modal content")))},_={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...P()}}},render:({})=>e.createElement(t,{closeOnEscape:!1,closeOnInteractOutside:!1},e.createElement(r,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,null,e.createElement(n,null,"My modal content")))},L={globals:{imports:"import { ICON_NAME, Button, Icon, Modal, ModalBody, ModalContent, ModalTrigger, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,null,e.createElement(n,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},e.createElement($e,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(Qe,null),e.createElement(Xe,{createPortal:!1})),e.createElement(Je,null,e.createElement(Ke,{asChild:!0},e.createElement(Be,{name:be.circleQuestion,style:{fontSize:"24px"}})),e.createElement(eo,{createPortal:!1},"This is the tooltip content")))))},N={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,{variant:S.outline},"Trigger Modal")),e.createElement(a,null,e.createElement(n,null,e.createElement(j,{preset:Ze.heading4},"Overview"),e.createElement(j,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))},R={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"12px"}},e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,null,"Default")),e.createElement(a,{createPortal:!1},e.createElement(n,null,"Default"))),e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,null,"Non dismissible")),e.createElement(a,{createPortal:!1,dismissible:!1},e.createElement(n,null,"Non dismissible"))),e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(l,{color:d.critical},"Critical")),e.createElement(a,{color:d.critical,createPortal:!1},e.createElement(n,null,"Critical"))))};var k,U,q;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(q=(U=y.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var V,F,G;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(F=T.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var W,z,H;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(z=h.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var Y,$,Q;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=($=O.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var X,Z,J;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,ee,oe;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(oe=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,ne,ae;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var le,re,de;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(re=b.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var se,ie,ce;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var me,ue,pe;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,Me,Ce;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Ce=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};var ye,Te,he;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(he=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};var Oe,fe,Ee;R.parameters={...R.parameters,docs:{...(Oe=R.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ee=(fe=R.parameters)==null?void 0:fe.docs)==null?void 0:Ee.source}}};const so=["Demo","AccessibilityActions","AccessibilityAriaLabelledBy","AccessibilityAriaLabel","AccessibilityBadPracticesAria","Colors","Controlled","Default","NonDismissible","NonEscapable","OverlayElements","Overview","ThemeGenerator"],Lo=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityActions:T,AccessibilityAriaLabel:O,AccessibilityAriaLabelledBy:h,AccessibilityBadPracticesAria:f,Colors:E,Controlled:B,Default:b,Demo:y,NonDismissible:v,NonEscapable:_,OverlayElements:L,Overview:N,ThemeGenerator:R,__namedExportsOrder:so,default:ro},Symbol.toStringTag,{value:"Module"}));export{O as A,E as C,b as D,Lo as M,v as N,N as O,h as a,T as b,f as c,B as d,_ as e,L as f};
