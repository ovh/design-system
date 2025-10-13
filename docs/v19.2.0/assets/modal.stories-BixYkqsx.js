import{r as g,e}from"./index-jIWwRBLr.js";import{B as t,d as x,c as qe}from"./Button-Dwx1IzdD.js";import{a as i,C as Ue}from"./colors-DSObuHxd.js";import{I as Be,a as be}from"./icon-name-C581wThh.js";import{j as c}from"./jsx-runtime-Cfl8ynUo.js";import{u as _e,D as je,a as Ge,b as Ve,c as ke}from"./dialog-trigger-Ktc66hDn.js";import{c as P}from"./index-CqY9YpN0.js";import{L as p,u as He}from"./useI18n-C0NLVYPv.js";import{T as ve,U as Re,V as Fe}from"./use-locale-context-BIV2aQtl.js";import{P as We}from"./portal-QnUqvOWs.js";import{u as ze}from"./render-strategy-CGQK92zh.js";import{a as Ye}from"./use-presence-BC2E-XtL.js";import{b as $e,S as Xe,a as Qe}from"./SelectControl-TvkHg2JI.js";import{T as L,a as Ae}from"./Text-vMb3-i8V.js";import{b as Ze,T as Je,a as Ke}from"./TooltipTrigger-CjaENt2x.js";import{e as eo,o as oo,C as T}from"./controls-BtiQQn1l.js";import{s as w}from"./source-CPEZJ6oD.js";const Ne=g.forwardRef((o,s)=>{const d=_e(),m=ze(),u=Ye({...m,present:d.open}),M=ve(d.getBackdropProps(),u.getPresenceProps(),o);return u.unmounted?null:c.jsx(Re.div,{...M,ref:Fe(u.ref,s)})});Ne.displayName="DialogBackdrop";const Le=g.forwardRef((o,s)=>{const d=_e(),m=ve(d.getCloseTriggerProps(),o);return c.jsx(Re.button,{...m,ref:s})});Le.displayName="DialogCloseTrigger";const xe=g.createContext({});function Se({children:o,i18n:s,locale:d}){return c.jsx(xe.Provider,{value:{i18n:s,locale:d},children:o})}function to(){return g.useContext(xe)}Se.__docgenInfo={description:"",methods:[],displayName:"ModalProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ModalContextType"]};const n=({children:o,closeOnEscape:s=!0,closeOnInteractOutside:d=!0,defaultOpen:m,i18n:u,initialFocusedElement:M,locale:S,onOpenChange:Ie,open:Pe,...we})=>c.jsx(Se,{i18n:u,locale:S,children:c.jsx(je,{closeOnEscape:s,closeOnInteractOutside:d,defaultOpen:m,initialFocusEl:M,onOpenChange:Ie,open:Pe,...we,children:o})});n.displayName="Modal";n.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the outside is clicked.",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the modal. Use when you don't need to control the open state of the modal."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"MODAL_I18N"},{name:"string"}],raw:"Record<MODAL_I18N, string>"}],raw:"Partial<Record<MODAL_I18N, string>>"},description:"Internal translations override."},initialFocusedElement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}},description:"Element that receive the focus when the dialog is opened."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ModalOpenChangeDetail) => void",signature:{arguments:[{type:{name:"ModalOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the modal open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the modal."}}};const no={"modal-body":"_modal-body_3om6u_2"},a=g.forwardRef(({children:o,className:s,...d},m)=>c.jsx("div",{className:P(no["modal-body"],s),"data-ods":"modal-body",ref:m,...d,children:o}));a.displayName="ModalBody";a.__docgenInfo={description:"",methods:[],displayName:"ModalBody",composes:["ComponentPropsWithRef"]};var De=(o=>(o.closeButton="modal.close.button",o))(De||{});const ao={"modal.close.button":{[p.de]:"Schließen",[p.en]:"Close",[p.es]:"Cerrar",[p.fr]:"Fermer",[p.it]:"Chiudere",[p.nl]:"Sluiten",[p.pl]:"Zamknąć",[p.pt]:"Fechar"}},D={"modal-header":"_modal-header_1qhu0_2","modal-header--critical":"_modal-header--critical_1qhu0_14","modal-header--information":"_modal-header--information_1qhu0_17","modal-header--neutral":"_modal-header--neutral_1qhu0_20","modal-header--primary":"_modal-header--primary_1qhu0_23","modal-header__close":"_modal-header__close_1qhu0_26","modal-header--success":"_modal-header--success_1qhu0_29","modal-header--warning":"_modal-header--warning_1qhu0_32"},q=({color:o,dismissible:s})=>{const{i18n:d,locale:m}=to(),{translate:u}=He(ao,m,d);return c.jsx("div",{className:P(D["modal-header"],D[`modal-header--${o}`]),children:s&&c.jsx(Le,{asChild:!0,children:c.jsx(t,{"aria-label":u(De.closeButton),className:D["modal-header__close"],color:i.neutral,size:qe.xs,variant:x.ghost,children:c.jsx(Be,{name:be.xmark})})})})};q.displayName="ModalHeader";q.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{color:{required:!0,tsType:{name:"literal",value:"`${COLOR}`"},description:""},dismissible:{required:!0,tsType:{name:"boolean"},description:""}}};const I={"modal-backdrop":"_modal-backdrop_inusz_22","modal-positioner":"_modal-positioner_inusz_29","modal-content":"_modal-content_inusz_35"},l=g.forwardRef(({children:o,className:s,color:d=i.information,createPortal:m=!0,dismissible:u=!0,...M},S)=>c.jsxs(We,{disabled:!m,children:[c.jsx(Ne,{className:I["modal-backdrop"]}),c.jsx(Ge,{className:I["modal-positioner"],children:c.jsxs(Ve,{"aria-describedby":M["aria-describedby"]||"","aria-labelledby":M["aria-labelledby"]||"",className:P(I["modal-content"],s),"data-ods":"modal-content",ref:S,role:d===i.critical?"alertdialog":"dialog",...M,children:[c.jsx(q,{color:d,dismissible:u}),o]})})]}));l.displayName="ModalContent";l.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=MODAL_COLOR
The color preset to use.`,defaultValue:{value:"MODAL_COLOR.information",computed:!0}},createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the remove button is displayed.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const r=g.forwardRef(({children:o,...s},d)=>c.jsx(ke,{"data-ods":"modal-trigger",ref:d,...s,children:o}));r.displayName="ModalTrigger";r.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const lo={argTypes:eo(["defaultOpen","i18n","initialFocusedElement","locale","onOpenChange","open"]),component:n,subcomponents:{ModalBody:a,ModalContent:l,ModalTrigger:r},title:"React Components/Modal"},C={render:o=>e.createElement(n,{closeOnEscape:o.closeOnEscape,closeOnInteractOutside:o.closeOnInteractOutside},e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,{color:o.color,dismissible:o.dismissible},e.createElement(a,null,o.content))),argTypes:oo({closeOnEscape:{table:{category:T.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:T.general},control:{type:"boolean"}},color:{table:{category:T.design,defaultValue:{summary:i.information},type:{summary:"MODAL_COLOR"}},control:{type:"select"},options:Ue},content:{table:{category:T.slot},control:"text"},dismissible:{table:{category:T.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My modal content"}},y={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,{color:i.critical},e.createElement(a,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item?"),e.createElement("div",{style:{display:"flex",gap:"8px",justifyContent:"end"}},e.createElement(t,{variant:x.ghost},"Cancel"),e.createElement(t,{color:i.critical},"Delete")))))},h={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,{"aria-describedby":"modal-content","aria-labelledby":"modal-title"},e.createElement(a,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},O={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,{"aria-describedby":"modal-content","aria-label":"Modal Content"},e.createElement(a,{id:"modal-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))},f={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,null,e.createElement(a,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},E={globals:{imports:"import { BUTTON_VARIANT, TEXT_PRESET, Button, Modal, ModalBody, ModalContent, ModalTrigger, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,null,e.createElement(a,{style:{display:"flex",flexDirection:"column",rowGap:"16px"}},e.createElement(L,{preset:Ae.heading4},"Hosting removal"),e.createElement(L,null,`You're about to remove the hosting "1 vCore 2,4 GHz, 2 Go RAM".`),e.createElement("div",{style:{display:"flex",alignSelf:"flex-end",columnGap:"8px"}},e.createElement(t,null,"Confirm"),e.createElement(t,{variant:x.outline},"Cancel")))))},B={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px"}},o())],globals:{imports:"import { BUTTON_COLOR, MODAL_COLOR, Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:i.critical},"Critical")),e.createElement(l,{color:i.critical},e.createElement(a,null,"Critical"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:i.information},"Information")),e.createElement(l,{color:i.information},e.createElement(a,null,"Information"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:i.neutral},"Neutral")),e.createElement(l,{color:i.neutral},e.createElement(a,null,"Neutral"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:i.primary},"Primary")),e.createElement(l,{color:i.primary},e.createElement(a,null,"Primary"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:i.success},"Success")),e.createElement(l,{color:i.success},e.createElement(a,null,"Success"))),e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{color:i.warning},"Warning")),e.createElement(l,{color:i.warning},e.createElement(a,null,"Warning"))))},b={globals:{imports:`import { Button, Modal, ModalBody, ModalContent } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...w()}}},render:({})=>{const[o,s]=g.useState(!1);function d({open:u}){s(u)}function m(){s(!0)}return e.createElement(e.Fragment,null,e.createElement(t,{onClick:m},"Trigger Modal"),e.createElement(n,{onOpenChange:d,open:o},e.createElement(l,null,e.createElement(a,null,"Content"))))}},_={globals:{imports:"import { Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,null,"Trigger Modal"),e.createElement(l,null,e.createElement(a,null,"My modal content")))},v={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...w()}}},render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,{dismissible:!1},e.createElement(a,null,"My modal content")))},R={globals:{imports:"import { Button, Modal, ModalBody, ModalContent, ModalTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...w()}}},render:({})=>e.createElement(n,{closeOnEscape:!1,closeOnInteractOutside:!1},e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,null,e.createElement(a,null,"My modal content")))},A={globals:{imports:"import { ICON_NAME, Button, Icon, Modal, ModalBody, ModalContent, ModalTrigger, Select, SelectContent, SelectControl, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,null,"Trigger Modal")),e.createElement(l,null,e.createElement(a,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},e.createElement($e,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(Xe,null),e.createElement(Qe,{createPortal:!1})),e.createElement(Ze,null,e.createElement(Je,{asChild:!0},e.createElement(Be,{name:be.circleQuestion,style:{fontSize:"24px"}})),e.createElement(Ke,{createPortal:!1},"This is the tooltip content")))))},N={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{variant:x.outline},"Trigger Modal")),e.createElement(l,null,e.createElement(a,null,e.createElement(L,{preset:Ae.heading4},"Overview"),e.createElement(L,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))};var U,j,G;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(j=C.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var V,k,H;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(k=y.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var F,W,z;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(W=h.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var Y,$,X;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=($=O.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var Q,Z,J;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(oe=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,ne,ae;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var le,re,de;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(re=b.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var se,ie,ce;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var me,ue,pe;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,Me,Te;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Te=(Me=R.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var Ce,ye,he;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(he=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var Oe,fe,Ee;N.parameters={...N.parameters,docs:{...(Oe=N.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ee=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:Ee.source}}};const ro=["Demo","AccessibilityActions","AccessibilityAriaLabelledBy","AccessibilityAriaLabel","AccessibilityBadPracticesAria","Actions","Colors","Controlled","Default","NonDismissible","NonEscapable","OverlayElements","Overview"],_o=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityActions:y,AccessibilityAriaLabel:O,AccessibilityAriaLabelledBy:h,AccessibilityBadPracticesAria:f,Actions:E,Colors:B,Controlled:b,Default:_,Demo:C,NonDismissible:v,NonEscapable:R,OverlayElements:A,Overview:N,__namedExportsOrder:ro,default:lo},Symbol.toStringTag,{value:"Module"}));export{O as A,B as C,_ as D,_o as M,v as N,N as O,h as a,y as b,f as c,b as d,R as e,E as f,A as g};
