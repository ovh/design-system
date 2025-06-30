import{r as p,e}from"./index-D_CmzhJ4.js";import{B as l,d as R,c as ge}from"./Button-CbWLwkmI.js";import{a as u,C as Me}from"./colors-DSObuHxd.js";import{I as le,a as se}from"./icon-name-BOrBmUKT.js";import{j as i}from"./jsx-runtime-VM66peLj.js";import{u as de,D as Ce,a as ye,b as Te,c as fe}from"./dialog-trigger-lgJEWCCF.js";import{c as N}from"./index-CkQHsVsO.js";import{Q as ie,R as ce,S as Oe}from"./use-locale-context-BQVaQ0H3.js";import{P as he}from"./portal-Bd62KldU.js";import{u as Ee}from"./render-strategy-D_LTfuI4.js";import{a as be}from"./use-presence-Cqrqn20p.js";import{b as Be,S as _e,a as ve}from"./SelectControl-D8g7ZA4_.js";import{T as _,a as me}from"./Text-KX3Hvvn9.js";import{b as xe,T as Re,a as Ne}from"./TooltipTrigger-DmpQ7Q38.js";import{e as Se,o as De,C as M}from"./controls-BtiQQn1l.js";import{s as S}from"./source-d0g_Nd0q.js";const ue=p.forwardRef((o,r)=>{const d=de(),c=Ee(),m=be({...c,present:d.open}),g=ie(d.getBackdropProps(),m.getPresenceProps(),o);return m.unmounted?null:i.jsx(ce.div,{...g,ref:Oe(m.ref,r)})});ue.displayName="DialogBackdrop";const pe=p.forwardRef((o,r)=>{const d=de(),c=ie(d.getCloseTriggerProps(),o);return i.jsx(ce.button,{...c,ref:r})});pe.displayName="DialogCloseTrigger";const n=({children:o,closeOnEscape:r=!0,closeOnInteractOutside:d=!0,defaultOpen:c,onOpenChange:m,open:g,...v})=>i.jsx(Ce,{closeOnEscape:r,closeOnInteractOutside:d,defaultOpen:c,onOpenChange:m,open:g,...v,children:o});n.displayName="Modal";n.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the escape key is pressed.",defaultValue:{value:"true",computed:!1}},closeOnInteractOutside:{required:!1,tsType:{name:"boolean"},description:"Whether to close the modal when the outside is clicked.",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"The initial open state of the modal. Use when you don't need to control the open state of the modal."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ModalOpenChangeDetail) => void",signature:{arguments:[{type:{name:"ModalOpenChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the modal open state changes."},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the modal."}}};const Ie={"modal-body":"_modal-body_3om6u_2"},t=p.forwardRef(({children:o,className:r,...d},c)=>i.jsx("div",{className:N(Ie["modal-body"],r),ref:c,...d,children:o}));t.displayName="ModalBody";t.__docgenInfo={description:"",methods:[],displayName:"ModalBody",composes:["ComponentPropsWithRef"]};const I={"modal-header":"_modal-header_1q85x_2","modal-header--critical":"_modal-header--critical_1q85x_14","modal-header--information":"_modal-header--information_1q85x_17","modal-header--neutral":"_modal-header--neutral_1q85x_20","modal-header--primary":"_modal-header--primary_1q85x_23","modal-header--success":"_modal-header--success_1q85x_26","modal-header--warning":"_modal-header--warning_1q85x_29"},D=({color:o,dismissible:r})=>i.jsx("div",{className:N(I["modal-header"],I[`modal-header--${o}`]),children:r&&i.jsx(pe,{asChild:!0,children:i.jsx(l,{color:u.neutral,size:ge.xs,variant:R.ghost,children:i.jsx(le,{name:se.xmark})})})});D.displayName="ModalHeader";D.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{color:{required:!0,tsType:{name:"literal",value:"`${COLOR}`"},description:""},dismissible:{required:!0,tsType:{name:"boolean"},description:""}}};const x={"modal-backdrop":"_modal-backdrop_inusz_22","modal-positioner":"_modal-positioner_inusz_29","modal-content":"_modal-content_inusz_35"},a=p.forwardRef(({children:o,className:r,color:d=u.information,createPortal:c=!0,dismissible:m=!0,...g},v)=>i.jsxs(he,{disabled:!c,children:[i.jsx(ue,{className:x["modal-backdrop"]}),i.jsx(ye,{className:x["modal-positioner"],children:i.jsxs(Te,{className:N(x["modal-content"],r),ref:v,...g,children:[i.jsx(D,{color:d,dismissible:m}),o]})})]}));a.displayName="ModalContent";a.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=MODAL_COLOR
The color preset to use.`,defaultValue:{value:"MODAL_COLOR.information",computed:!0}},createPortal:{required:!1,tsType:{name:"boolean"},description:"Whether the component should be rendered in the DOM close to the body tag.",defaultValue:{value:"true",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the remove button is displayed.",defaultValue:{value:"true",computed:!1}}},composes:["ComponentPropsWithRef"]};const s=p.forwardRef(({children:o,...r},d)=>i.jsx(fe,{ref:d,...r,children:o}));s.displayName="ModalTrigger";s.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Use the provided child element as the default rendered element, combining their props and behavior."}},composes:["ComponentPropsWithRef"]};const Pe={argTypes:Se(["defaultOpen","onOpenChange","open"]),component:n,subcomponents:{ModalBody:t,ModalContent:a,ModalTrigger:s},title:"React Components/Modal"},C={render:o=>e.createElement(n,{closeOnEscape:o.closeOnEscape,closeOnInteractOutside:o.closeOnInteractOutside},e.createElement(s,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,{color:o.color,dismissible:o.dismissible},e.createElement(t,null,o.content))),argTypes:De({closeOnEscape:{table:{category:M.general},control:{type:"boolean"}},closeOnInteractOutside:{table:{category:M.general},control:{type:"boolean"}},color:{table:{category:M.design,defaultValue:{summary:u.information},type:{summary:"MODAL_COLOR"}},control:{type:"select"},options:Me},content:{table:{category:M.slot},control:"text"},dismissible:{table:{category:M.general,defaultValue:{summary:!0},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My modal content"}},y={tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,null,e.createElement(t,{style:{display:"flex",flexDirection:"column",rowGap:"16px"}},e.createElement(_,{preset:me.heading4},"Hosting removal"),e.createElement(_,null,`You're about to remove the hosting "1 vCore 2,4 GHz, 2 Go RAM".`),e.createElement("div",{style:{display:"flex",alignSelf:"flex-end",columnGap:"8px"}},e.createElement(l,null,"Confirm"),e.createElement(l,{variant:R.outline},"Cancel")))))},T={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px"}},o())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(l,{color:u.critical},"Critical")),e.createElement(a,{color:"critical"},e.createElement(t,null,"Critical"))),e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(l,{color:u.information},"Information")),e.createElement(a,{color:"information"},e.createElement(t,null,"Information"))),e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(l,{color:u.neutral},"Neutral")),e.createElement(a,{color:"neutral"},e.createElement(t,null,"Neutral"))),e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(l,{color:u.primary},"Primary")),e.createElement(a,{color:"primary"},e.createElement(t,null,"Primary"))),e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(l,{color:u.success},"Success")),e.createElement(a,{color:"success"},e.createElement(t,null,"Success"))),e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(l,{color:u.warning},"Warning")),e.createElement(a,{color:"warning"},e.createElement(t,null,"Warning"))))},f={tags:["!dev"],parameters:{docs:{source:{...S()}}},render:({})=>{const[o,r]=p.useState(!1);function d({open:m}){r(m)}function c(){r(!0)}return e.createElement(e.Fragment,null,e.createElement(l,{onClick:c},"Trigger Modal"),e.createElement(n,{onOpenChange:d,open:o},e.createElement(a,null,e.createElement(t,null,"Content"))))}},O={tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(s,null,"Trigger Modal"),e.createElement(a,null,e.createElement(t,null,"My modal content")))},h={tags:["!dev"],parameters:{docs:{source:{...S()}}},render:({})=>e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,{dismissible:!1},e.createElement(t,null,"My modal content")))},E={tags:["!dev"],parameters:{docs:{source:{...S()}}},render:({})=>e.createElement(n,{closeOnEscape:!1,closeOnInteractOutside:!1},e.createElement(s,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,null,e.createElement(t,null,"My modal content")))},b={tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(l,null,"Trigger Modal")),e.createElement(a,null,e.createElement(t,{style:{display:"grid",columnGap:"8px",alignItems:"center",gridTemplateColumns:"1fr max-content"}},e.createElement(Be,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(_e,null),e.createElement(ve,{createPortal:!1})),e.createElement(xe,null,e.createElement(Re,{asChild:!0},e.createElement(le,{name:se.circleQuestion})),e.createElement(Ne,{createPortal:!1},"This is the tooltip content")))))},B={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(s,{asChild:!0},e.createElement(l,{variant:R.outline},"Trigger Modal")),e.createElement(a,null,e.createElement(t,null,e.createElement(_,{preset:me.heading4},"Overview"),e.createElement(_,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))};var P,L,w;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(w=(L=C.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var A,q,j;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(j=(q=y.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var G,k,U;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(k=T.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var V,W,H;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(W=f.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var Y,z,F;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(F=(z=O.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var $,Q,X;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,J,K;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(K=(J=E.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var ee,oe,ne;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var te,ae,re;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Le=["Demo","Actions","Colors","Controlled","Default","NonDismissible","NonEscapable","OverlayElements","Overview"],Ze=Object.freeze(Object.defineProperty({__proto__:null,Actions:y,Colors:T,Controlled:f,Default:O,Demo:C,NonDismissible:h,NonEscapable:E,OverlayElements:b,Overview:B,__namedExportsOrder:Le,default:Pe},Symbol.toStringTag,{value:"Module"}));export{y as A,T as C,O as D,Ze as M,h as N,B as O,f as a,E as b,b as c};
