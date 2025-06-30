import{e as t,r as M}from"./index-D_CmzhJ4.js";import{B as G}from"./Button-CbWLwkmI.js";import{I as m,a as g}from"./icon-name-BOrBmUKT.js";import{T as e,a as o,b as n}from"./TooltipTrigger-DmpQ7Q38.js";import{O as P}from"./overlay-CZHjGBMC.js";import{e as Q,o as Y,C as l}from"./controls-BtiQQn1l.js";import{s as F}from"./source-d0g_Nd0q.js";const V={argTypes:Q(["onOpenChange","open"]),component:n,subcomponents:{TooltipContent:o,TooltipTrigger:e},title:"React Components/Tooltip"},i={parameters:{layout:"centered"},render:r=>t.createElement(n,{closeDelay:r.closeDelay,openDelay:r.openDelay,position:r.position},t.createElement(e,{asChild:!0},t.createElement(m,{name:g.circleQuestion})),t.createElement(o,{withArrow:r.withArrow},r.content)),argTypes:Y({closeDelay:{table:{category:l.general},control:"number"},content:{table:{category:l.slot},control:"text"},openDelay:{table:{category:l.general},control:"number"},position:{table:{category:l.general,type:{summary:"TOOLTIP_POSITION"}},control:{type:"select"},options:P},withArrow:{table:{category:l.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My tooltip content"}},a={decorators:[r=>t.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},r())],tags:["!dev"],parameters:{docs:{source:{...F()}}},render:({})=>{const[r,D]=M.useState(!1);function x(){D(B=>!B)}return t.createElement(t.Fragment,null,t.createElement(G,{onClick:x},"Toggle tooltip"),t.createElement(n,{open:r},t.createElement(e,{asChild:!0},t.createElement(m,{name:g.circleQuestion})),t.createElement(o,{withArrow:!0},"This is the tooltip content")))}},p={tags:["!dev"],render:({})=>t.createElement(n,null,t.createElement(e,{asChild:!0},t.createElement(m,{name:g.circleQuestion})),t.createElement(o,null,"This is the tooltip content"))},s={tags:["!dev"],render:({})=>t.createElement(n,null,t.createElement(e,null,"Show tooltip"),t.createElement(o,null,"This is the tooltip content"))},c={decorators:[r=>t.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},r())],tags:["!dev"],render:({})=>t.createElement(t.Fragment,null,t.createElement(n,{position:"top-start"},t.createElement(e,null,"Top Left"),t.createElement(o,{withArrow:!0},"Top Left tooltip")),t.createElement(n,{position:"top"},t.createElement(e,null,"Top"),t.createElement(o,{withArrow:!0},"Top tooltip")),t.createElement(n,{position:"top-end"},t.createElement(e,null,"Top Right"),t.createElement(o,{withArrow:!0},"Top Right tooltip")),t.createElement(n,{position:"left"},t.createElement(e,null,"Middle Left"),t.createElement(o,{withArrow:!0},"Middle Left tooltip")),t.createElement("div",null),t.createElement(n,{position:"right"},t.createElement(e,null,"Middle Right"),t.createElement(o,{withArrow:!0},"Middle Right tooltip")),t.createElement(n,{position:"bottom-start"},t.createElement(e,null,"Bottom Left"),t.createElement(o,{withArrow:!0},"Bottom Left tooltip")),t.createElement(n,{position:"bottom"},t.createElement(e,null,"Bottom"),t.createElement(o,{withArrow:!0},"Bottom tooltip")),t.createElement(n,{position:"bottom-end"},t.createElement(e,null,"Bottom Right"),t.createElement(o,{withArrow:!0},"Bottom Right tooltip")))},T={tags:["!dev"],parameters:{layout:"centered"},render:({})=>t.createElement(n,null,t.createElement(e,{asChild:!0},t.createElement(m,{name:g.circleQuestion})),t.createElement(o,null,"This is the tooltip content"))};var d,u,C;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: (arg: DemoArg) => <Tooltip closeDelay={arg.closeDelay} openDelay={arg.openDelay} position={arg.position}>
      <TooltipTrigger asChild>
        <Icon name={ICON_NAME.circleQuestion} />
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
}`,...(C=(u=i.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var h,E,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
            <Icon name={ICON_NAME.circleQuestion} />
          </TooltipTrigger>

          <TooltipContent withArrow>
            This is the tooltip content
          </TooltipContent>
        </Tooltip>
      </>;
  }
}`,...(y=(E=a.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var w,O,f;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tooltip>
      <TooltipTrigger asChild>
        <Icon name={ICON_NAME.circleQuestion} />
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
}`,...(f=(O=p.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var A,R,b;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Tooltip>
      <TooltipTrigger>
        Show tooltip
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
}`,...(b=(R=s.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var I,v,L;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(L=(v=c.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var S,_,N;T.parameters={...T.parameters,docs:{...(S=T.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Tooltip>
      <TooltipTrigger asChild>
        <Icon name={ICON_NAME.circleQuestion} />
      </TooltipTrigger>

      <TooltipContent>
        This is the tooltip content
      </TooltipContent>
    </Tooltip>
}`,...(N=(_=T.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const j=["Demo","Controlled","CustomTrigger","Default","Grid","Overview"],W=Object.freeze(Object.defineProperty({__proto__:null,Controlled:a,CustomTrigger:p,Default:s,Demo:i,Grid:c,Overview:T,__namedExportsOrder:j,default:V},Symbol.toStringTag,{value:"Module"}));export{p as C,s as D,c as G,T as O,W as T,a};
