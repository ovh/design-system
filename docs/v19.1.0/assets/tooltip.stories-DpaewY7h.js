import{e,r as Q}from"./index-D_CmzhJ4.js";import{B as Y}from"./Button-Cu9Xbu09.js";import{I as g,a as d}from"./icon-name-CL_C5kfn.js";import{T as t,a as o,b as n}from"./TooltipTrigger--1kPNsOd.js";import{O as F}from"./overlay-CZHjGBMC.js";import{e as V,o as j,C as l}from"./controls-BtiQQn1l.js";import{s as k}from"./source-d0g_Nd0q.js";const q={argTypes:V(["onOpenChange","open"]),component:n,subcomponents:{TooltipContent:o,TooltipTrigger:t},title:"React Components/Tooltip"},i={parameters:{layout:"centered"},render:r=>e.createElement(n,{closeDelay:r.closeDelay,openDelay:r.openDelay,position:r.position},e.createElement(t,{asChild:!0},e.createElement(g,{name:d.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:r.withArrow},r.content)),argTypes:j({closeDelay:{table:{category:l.general},control:"number"},content:{table:{category:l.slot},control:"text"},openDelay:{table:{category:l.general},control:"number"},position:{table:{category:l.general,type:{summary:"TOOLTIP_POSITION"}},control:{type:"select"},options:F},withArrow:{table:{category:l.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My tooltip content"}},a={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],parameters:{docs:{source:{...k()}}},render:({})=>{const[r,z]=Q.useState(!1);function G(){z(P=>!P)}return e.createElement(e.Fragment,null,e.createElement(Y,{onClick:G},"Toggle tooltip"),e.createElement(n,{open:r},e.createElement(t,{asChild:!0},e.createElement(g,{name:d.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,{withArrow:!0},"This is the tooltip content")))}},p={tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(g,{name:d.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,null,"This is the tooltip content"))},s={tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(t,null,"Show tooltip"),e.createElement(o,null,"This is the tooltip content"))},c={decorators:[r=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{position:"top-start"},e.createElement(t,null,"Top Left"),e.createElement(o,{withArrow:!0},"Top Left tooltip")),e.createElement(n,{position:"top"},e.createElement(t,null,"Top"),e.createElement(o,{withArrow:!0},"Top tooltip")),e.createElement(n,{position:"top-end"},e.createElement(t,null,"Top Right"),e.createElement(o,{withArrow:!0},"Top Right tooltip")),e.createElement(n,{position:"left"},e.createElement(t,null,"Middle Left"),e.createElement(o,{withArrow:!0},"Middle Left tooltip")),e.createElement("div",null),e.createElement(n,{position:"right"},e.createElement(t,null,"Middle Right"),e.createElement(o,{withArrow:!0},"Middle Right tooltip")),e.createElement(n,{position:"bottom-start"},e.createElement(t,null,"Bottom Left"),e.createElement(o,{withArrow:!0},"Bottom Left tooltip")),e.createElement(n,{position:"bottom"},e.createElement(t,null,"Bottom"),e.createElement(o,{withArrow:!0},"Bottom tooltip")),e.createElement(n,{position:"bottom-end"},e.createElement(t,null,"Bottom Right"),e.createElement(o,{withArrow:!0},"Bottom Right tooltip")))},T={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(g,{name:d.circleQuestion,style:{fontSize:"24px"}})),e.createElement(o,null,"This is the tooltip content"))},m={tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(t,{asChild:!0},e.createElement(g,{"aria-label":"Open tooltip",name:d.circleInfo,role:"img",style:{fontSize:"24px"}})),e.createElement(o,null,"Some additional context."))};var u,C,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: (arg: DemoArg) => <Tooltip closeDelay={arg.closeDelay} openDelay={arg.openDelay} position={arg.position}>
      <TooltipTrigger asChild>
        <Icon name={ICON_NAME.circleQuestion} style={{
        fontSize: '24px'
      }} />
      </TooltipTrigger>

      <TooltipContent withArrow={arg.withArrow}>
        {arg.content}
      </TooltipContent>
    </Tooltip>,
  argTypes: orderControls({
    closeDelay: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'number'
    },
    content: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    },
    openDelay: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'number'
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'TOOLTIP_POSITION'
        }
      },
      control: {
        type: 'select'
      },
      options: TOOLTIP_POSITIONS
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
    content: 'My tooltip content'
  }
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var E,h,w;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    function toggleTooltip() {
      setIsOpen(isOpen => !isOpen);
    }
    return <>
        <Button onClick={toggleTooltip}>
          Toggle tooltip
        </Button>

        <Tooltip open={isOpen}>
          <TooltipTrigger asChild>
            <Icon name={ICON_NAME.circleQuestion} style={{
            fontSize: '24px'
          }} />
          </TooltipTrigger>

          <TooltipContent withArrow>
            This is the tooltip content
          </TooltipContent>
        </Tooltip>
      </>;
  }
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var O,f,A;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tooltip>
      <TooltipTrigger asChild>
        <Icon name={ICON_NAME.circleQuestion} style={{
        fontSize: '24px'
      }} />
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
}`,...(A=(f=p.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var S,b,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tooltip>
      <TooltipTrigger>
        Show tooltip
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
}`,...(I=(b=s.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var x,R,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      <Tooltip position="top-start">
        <TooltipTrigger>
          Top Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top Left tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="top">
        <TooltipTrigger>
          Top
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="top-end">
        <TooltipTrigger>
          Top Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Top Right tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="left">
        <TooltipTrigger>
          Middle Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Middle Left tooltip
        </TooltipContent>
      </Tooltip>

      <div />

      <Tooltip position="right">
        <TooltipTrigger>
          Middle Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Middle Right tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="bottom-start">
        <TooltipTrigger>
          Bottom Left
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom Left tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="bottom">
        <TooltipTrigger>
          Bottom
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip position="bottom-end">
        <TooltipTrigger>
          Bottom Right
        </TooltipTrigger>
        <TooltipContent withArrow>
          Bottom Right tooltip
        </TooltipContent>
      </Tooltip>
    </>
}`,...(v=(R=c.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var L,N,_;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tooltip>
      <TooltipTrigger asChild>
        <Icon name={ICON_NAME.circleQuestion} style={{
        fontSize: '24px'
      }} />
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
}`,...(_=(N=T.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var D,M,B;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tooltip>
      <TooltipTrigger asChild>
        <Icon aria-label="Open tooltip" name={ICON_NAME.circleInfo} role="img" style={{
        fontSize: '24px'
      }} />
      </TooltipTrigger>

      <TooltipContent>
        Some additional context.
      </TooltipContent>
    </Tooltip>
}`,...(B=(M=m.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const H=["Demo","Controlled","CustomTrigger","Default","Grid","Overview","AccessibilityTooltip"],ee=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityTooltip:m,Controlled:a,CustomTrigger:p,Default:s,Demo:i,Grid:c,Overview:T,__namedExportsOrder:H,default:q},Symbol.toStringTag,{value:"Module"}));export{m as A,p as C,s as D,c as G,T as O,ee as T,a};
