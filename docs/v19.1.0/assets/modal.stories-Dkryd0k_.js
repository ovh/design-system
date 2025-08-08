import{r as g,e}from"./index-D_CmzhJ4.js";import{B as o,d as S,c as qe}from"./Button-Cu9Xbu09.js";import{a as m,C as je}from"./colors-DSObuHxd.js";import{I as be,a as Be}from"./icon-name-CL_C5kfn.js";import{j as i}from"./jsx-runtime-VM66peLj.js";import{u as _e,D as Ge,a as ke,b as Ue,c as Ve}from"./dialog-trigger-BvXFYgVb.js";import{c as P}from"./index-CkQHsVsO.js";import{L as p,u as He}from"./useI18n-CFuCjRRO.js";import{Q as ve,R as xe,S as Fe}from"./use-locale-context-DLC4Hyvy.js";import{P as We}from"./portal-CjJhVgfZ.js";import{u as ze}from"./render-strategy-sz9fehwg.js";import{a as Ye}from"./use-presence-BH5ft0ba.js";import{b as $e,S as Qe,a as Xe}from"./SelectControl-CmmZyh2D.js";import{T as A,a as Ne}from"./Text-B1XN51Xz.js";import{b as Ze,T as Je,a as Ke}from"./TooltipTrigger--1kPNsOd.js";import{e as et,o as tt,C as y}from"./controls-BtiQQn1l.js";import{s as w}from"./source-d0g_Nd0q.js";const Re=g.forwardRef((t,d)=>{const s=_e(),c=ze(),u=Ye({...c,present:s.open}),M=ve(s.getBackdropProps(),u.getPresenceProps(),t);return u.unmounted?null:i.jsx(xe.div,{...M,ref:Fe(u.ref,d)})});Re.displayName="DialogBackdrop";const Ae=g.forwardRef((t,d)=>{const s=_e(),c=ve(s.getCloseTriggerProps(),t);return i.jsx(xe.button,{...c,ref:d})});Ae.displayName="DialogCloseTrigger";const Se=g.createContext({});function Le({children:t,i18n:d,locale:s}){return i.jsx(Se.Provider,{value:{i18n:d,locale:s},children:t})}function ot(){return g.useContext(Se)}Le.__docgenInfo={description:"",methods:[],displayName:"ModalProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ModalContextType"]};const a=({children:t,closeOnEscape:d=!0,closeOnInteractOutside:s=!0,defaultOpen:c,i18n:u,initialFocusedElement:M,locale:L,onOpenChange:Ie,open:Pe,...we})=>i.jsx(Le,{i18n:u,locale:L,children:i.jsx(Ge,{closeOnEscape:d,closeOnInteractOutside:s,defaultOpen:c,initialFocusEl:M,onOpenChange:Ie,open:Pe,...we,children:t})});a.displayName="Modal";a.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the outside is clicked.",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the modal. Use when you don't need to control the open state of the modal."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"MODAL_I18N"},{name:"string"}],raw:"Record<MODAL_I18N, string>"}],raw:"Partial<Record<MODAL_I18N, string>>"},description:"Internal translations override."},initialFocusedElement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | null",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}}},description:"Element that receive the focus when the dialog is opened."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ModalOpenChangeDetail) => void",signature:{arguments:[{type:{name:"ModalOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the modal open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the modal."}}};const at={"modal-body":"_modal-body_3om6u_2"},n=g.forwardRef(({children:t,className:d,...s},c)=>i.jsx("div",{className:P(at["modal-body"],d),"data-ods":"modal-body",ref:c,...s,children:t}));n.displayName="ModalBody";n.__docgenInfo={description:"",methods:[],displayName:"ModalBody",composes:["ComponentPropsWithRef"]};var De=(t=>(t.closeButton="modal.close.button",t))(De||{});const nt={"modal.close.button":{[p.de]:"Schließen",[p.en]:"Close",[p.es]:"Cerrar",[p.fr]:"Fermer",[p.it]:"Chiudere",[p.nl]:"Sluiten",[p.pl]:"Zamknąć",[p.pt]:"Fechar"}},D={"modal-header":"_modal-header_1qhu0_2","modal-header--critical":"_modal-header--critical_1qhu0_14","modal-header--information":"_modal-header--information_1qhu0_17","modal-header--neutral":"_modal-header--neutral_1qhu0_20","modal-header--primary":"_modal-header--primary_1qhu0_23","modal-header__close":"_modal-header__close_1qhu0_26","modal-header--success":"_modal-header--success_1qhu0_29","modal-header--warning":"_modal-header--warning_1qhu0_32"},q=({color:t,dismissible:d})=>{const{i18n:s,locale:c}=ot(),{translate:u}=He(nt,c,s);return i.jsx("div",{className:P(D["modal-header"],D[`modal-header--${t}`]),children:d&&i.jsx(Ae,{asChild:!0,children:i.jsx(o,{"aria-label":u(De.closeButton),className:D["modal-header__close"],color:m.neutral,size:qe.xs,variant:S.ghost,children:i.jsx(be,{name:Be.xmark})})})})};q.displayName="ModalHeader";q.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{color:{required:!0,tsType:{name:"literal",value:"`${COLOR}`"},description:""},dismissible:{required:!0,tsType:{name:"boolean"},description:""}}};const I={"modal-backdrop":"_modal-backdrop_inusz_22","modal-positioner":"_modal-positioner_inusz_29","modal-content":"_modal-content_inusz_35"},r=g.forwardRef(({children:t,className:d,color:s=m.information,createPortal:c=!0,dismissible:u=!0,...M},L)=>i.jsxs(We,{disabled:!c,children:[i.jsx(Re,{className:I["modal-backdrop"]}),i.jsx(ke,{className:I["modal-positioner"],children:i.jsxs(Ue,{"aria-describedby":M["aria-describedby"]||"","aria-labelledby":M["aria-labelledby"]||"",className:P(I["modal-content"],d),"data-ods":"modal-content",ref:L,role:s===m.critical?"alertdialog":"dialog",...M,children:[i.jsx(q,{color:s,dismissible:u}),t]})})]}));r.displayName="ModalContent";r.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=MODAL_COLOR
The color preset to use.`,defaultValue:{value:"MODAL_COLOR.information",computed:!0}},createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the remove button is displayed.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const l=g.forwardRef(({children:t,...d},s)=>i.jsx(Ve,{"data-ods":"modal-trigger",ref:s,...d,children:t}));l.displayName="ModalTrigger";l.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Use the provided child element as the default rendered element, combining their props and behavior.
Be careful to pass an actual Node, not a Fragment.`}},composes:["ComponentPropsWithRef"]};const rt={argTypes:et(["defaultOpen","i18n","initialFocusedElement","locale","onOpenChange","open"]),component:a,subcomponents:{ModalBody:n,ModalContent:r,ModalTrigger:l},title:"React Components/Modal"},C={render:t=>e.createElement(a,{closeOnEscape:t.closeOnEscape,closeOnInteractOutside:t.closeOnInteractOutside},e.createElement(l,{asChild:!0},e.createElement(o,null,"Trigger Modal")),e.createElement(r,{color:t.color,dismissible:t.dismissible},e.createElement(n,null,t.content))),argTypes:tt({closeOnEscape:{table:{category:y.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:y.general},control:{type:"boolean"}},color:{table:{category:y.design,defaultValue:{summary:m.information},type:{summary:"MODAL_COLOR"}},control:{type:"select"},options:je},content:{table:{category:y.slot},control:"text"},dismissible:{table:{category:y.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My modal content"}},h={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,null,"Trigger Modal")),e.createElement(r,{color:m.critical},e.createElement(n,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item?"),e.createElement("div",{style:{display:"flex",gap:"8px",justifyContent:"end"}},e.createElement(o,{variant:S.ghost},"Cancel"),e.createElement(o,{color:m.critical},"Delete")))))},T={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,null,"Trigger Modal")),e.createElement(r,{"aria-describedby":"modal-content","aria-labelledby":"modal-title"},e.createElement(n,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},E={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,null,"Trigger Modal")),e.createElement(r,{"aria-describedby":"modal-content","aria-label":"Modal Content"},e.createElement(n,{id:"modal-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))},f={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,null,"Trigger Modal")),e.createElement(r,null,e.createElement(n,null,e.createElement("h2",{id:"modal-title"},"Delete item"),e.createElement("p",{id:"modal-content"},"Are you sure you want to delete this item? This action cannot be undone."))))},O={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,null,"Trigger Modal")),e.createElement(r,null,e.createElement(n,{style:{display:"flex",flexDirection:"column",rowGap:"16px"}},e.createElement(A,{preset:Ne.heading4},"Hosting removal"),e.createElement(A,null,`You're about to remove the hosting "1 vCore 2,4 GHz, 2 Go RAM".`),e.createElement("div",{style:{display:"flex",alignSelf:"flex-end",columnGap:"8px"}},e.createElement(o,null,"Confirm"),e.createElement(o,{variant:S.outline},"Cancel")))))},b={decorators:[t=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px"}},t())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,{color:m.critical},"Critical")),e.createElement(r,{color:"critical"},e.createElement(n,null,"Critical"))),e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,{color:m.information},"Information")),e.createElement(r,{color:"information"},e.createElement(n,null,"Information"))),e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,{color:m.neutral},"Neutral")),e.createElement(r,{color:"neutral"},e.createElement(n,null,"Neutral"))),e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,{color:m.primary},"Primary")),e.createElement(r,{color:"primary"},e.createElement(n,null,"Primary"))),e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,{color:m.success},"Success")),e.createElement(r,{color:"success"},e.createElement(n,null,"Success"))),e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,{color:m.warning},"Warning")),e.createElement(r,{color:"warning"},e.createElement(n,null,"Warning"))))},B={tags:["!dev"],parameters:{docs:{source:{...w()}}},render:({})=>{const[t,d]=g.useState(!1);function s({open:u}){d(u)}function c(){d(!0)}return e.createElement(e.Fragment,null,e.createElement(o,{onClick:c},"Trigger Modal"),e.createElement(a,{onOpenChange:s,open:t},e.createElement(r,null,e.createElement(n,null,"Content"))))}},_={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(l,null,"Trigger Modal"),e.createElement(r,null,e.createElement(n,null,"My modal content")))},v={tags:["!dev"],parameters:{docs:{source:{...w()}}},render:({})=>e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,null,"Trigger Modal")),e.createElement(r,{dismissible:!1},e.createElement(n,null,"My modal content")))},x={tags:["!dev"],parameters:{docs:{source:{...w()}}},render:({})=>e.createElement(a,{closeOnEscape:!1,closeOnInteractOutside:!1},e.createElement(l,{asChild:!0},e.createElement(o,null,"Trigger Modal")),e.createElement(r,null,e.createElement(n,null,"My modal content")))},N={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,null,"Trigger Modal")),e.createElement(r,null,e.createElement(n,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},e.createElement($e,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(Qe,null),e.createElement(Xe,{createPortal:!1})),e.createElement(Ze,null,e.createElement(Je,{asChild:!0},e.createElement(be,{name:Be.circleQuestion,style:{fontSize:"24px"}})),e.createElement(Ke,{createPortal:!1},"This is the tooltip content")))))},R={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null,e.createElement(l,{asChild:!0},e.createElement(o,{variant:S.outline},"Trigger Modal")),e.createElement(r,null,e.createElement(n,null,e.createElement(A,{preset:Ne.heading4},"Overview"),e.createElement(A,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))};var j,G,k;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(k=(G=C.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var U,V,H;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(V=h.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var F,W,z;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(W=T.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var Y,$,Q;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=($=E.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var X,Z,J;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,ee,te;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(te=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ae,ne;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Modal>
        <ModalTrigger asChild>
          <Button color={BUTTON_COLOR.critical}>
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
          <Button color={BUTTON_COLOR.information}>
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
          <Button color={BUTTON_COLOR.neutral}>
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
          <Button color={BUTTON_COLOR.primary}>
            Primary
          </Button>
        </ModalTrigger>

        <ModalContent color="primary">
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

        <ModalContent color="success">
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

        <ModalContent color="warning">
          <ModalBody>
            Warning
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
}`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,le,se;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(le=B.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var de,ie,ce;_.parameters={..._.parameters,docs:{...(de=_.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,Me,ye;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(Me=x.parameters)==null?void 0:Me.docs)==null?void 0:ye.source}}};var Ce,he,Te;N.parameters={...N.parameters,docs:{...(Ce=N.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Te=(he=N.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var Ee,fe,Oe;R.parameters={...R.parameters,docs:{...(Ee=R.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Oe=(fe=R.parameters)==null?void 0:fe.docs)==null?void 0:Oe.source}}};const lt=["Demo","AccessibilityActions","AccessibilityAriaLabelledBy","AccessibilityAriaLabel","AccessibilityBadPracticesAria","Actions","Colors","Controlled","Default","NonDismissible","NonEscapable","OverlayElements","Overview"],Bt=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityActions:h,AccessibilityAriaLabel:E,AccessibilityAriaLabelledBy:T,AccessibilityBadPracticesAria:f,Actions:O,Colors:b,Controlled:B,Default:_,Demo:C,NonDismissible:v,NonEscapable:x,OverlayElements:N,Overview:R,__namedExportsOrder:lt,default:rt},Symbol.toStringTag,{value:"Module"}));export{E as A,b as C,_ as D,Bt as M,v as N,R as O,T as a,h as b,B as c,x as d,O as e,N as f,f as g};
