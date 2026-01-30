import{e,r as ee}from"./index-jIWwRBLr.js";import{B as a,d as C}from"./Button-B-GJ-1TA.js";import{a as oe}from"./colors-DSObuHxd.js";import{D as re}from"./divider-color-CxuCs_uS.js";import{I as p,a as i}from"./icon-name-BpdEc4-2.js";import{P as o,a as r,b as t}from"./PopoverTrigger-CBYmsU80.js";import{O as te,a as E}from"./overlay-CZHjGBMC.js";import{e as ne,o as ae,C as s}from"./controls-BtiQQn1l.js";import{s as pe}from"./source-CPEZJ6oD.js";const ie={argTypes:ne(["autoFocus","onOpenChange","onPositionChange","open","triggerId"]),component:t,subcomponents:{PopoverContent:r,PopoverTrigger:o},title:"React Components/Popover"},l={parameters:{layout:"centered"},render:n=>e.createElement(t,{gutter:n.gutter,position:n.position,sameWidth:n.sameWidth},e.createElement(o,null,"Show popover"),e.createElement(r,{withArrow:n.withArrow},n.content)),argTypes:ae({content:{table:{category:s.slot},control:"text"},gutter:{table:{category:s.design,type:{summary:"number"}},control:"number"},position:{table:{category:s.general,type:{summary:"POPOVER_POSITION"}},control:{type:"select"},options:te},sameWidth:{table:{category:s.design},control:{type:"boolean"}},withArrow:{table:{category:s.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My popover content"}},c={decorators:[n=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},n())],globals:{imports:`import { ICON_NAME, Button, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...pe()}}},render:({})=>{const[n,Q]=ee.useState(!1);function X(){Q($=>!$)}return e.createElement(e.Fragment,null,e.createElement(a,{onClick:X},"Toggle popover"),e.createElement(t,{open:n},e.createElement(o,{asChild:!0},e.createElement(p,{name:i.cog})),e.createElement(r,{withArrow:!0},"This is the popover content")))}},m={globals:{imports:"import { Button, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(a,null,"Custom Trigger")),e.createElement(r,null,"This is the popover content"))},v={globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,null,"Show popover"),e.createElement(r,null,"This is the popover content"))},g={decorators:[n=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},n())],globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{position:"top-start"},e.createElement(o,null,"Top Left"),e.createElement(r,{withArrow:!0},"Top Left popover")),e.createElement(t,{position:"top"},e.createElement(o,null,"Top"),e.createElement(r,{withArrow:!0},"Top popover")),e.createElement(t,{position:"top-end"},e.createElement(o,null,"Top Right"),e.createElement(r,{withArrow:!0},"Top Right popover")),e.createElement(t,{position:"left"},e.createElement(o,null,"Middle Left"),e.createElement(r,{withArrow:!0},"Middle Left popover")),e.createElement("div",null),e.createElement(t,{position:"right"},e.createElement(o,null,"Middle Right"),e.createElement(r,{withArrow:!0},"Middle Right popover")),e.createElement(t,{position:"bottom-start"},e.createElement(o,null,"Bottom Left"),e.createElement(r,{withArrow:!0},"Bottom Left popover")),e.createElement(t,{position:"bottom"},e.createElement(o,null,"Bottom"),e.createElement(r,{withArrow:!0},"Bottom popover")),e.createElement(t,{position:"bottom-end"},e.createElement(o,null,"Bottom Right"),e.createElement(r,{withArrow:!0},"Bottom Right popover")))},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(a,null,"Show popover")),e.createElement(r,null,"This is the popover content"))},u={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, ICON_NAME, Button, Divider, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{"aria-haspopup":"menu",asChild:!0},e.createElement(a,null,e.createElement(p,{name:i.ellipsisVertical}))),e.createElement(r,{"aria-label":"Profile menu",withArrow:!0},e.createElement("div",{role:"menu",style:{display:"flex",flexDirection:"column"}},e.createElement(a,{role:"menuitem",variant:C.ghost},"Information"),e.createElement(a,{role:"menuitem",variant:C.ghost},"Notifications"),e.createElement(re,{style:{width:"100%"}}),e.createElement(a,{color:oe.critical,role:"menuitem",variant:C.ghost},"Sign out"))))},P={globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{sameWidth:!0},e.createElement(o,null,"Show popover that will take this width as reference"),e.createElement(r,null,"The popover content"))},h={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"12px"}},e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(a,null,"Default")),e.createElement(r,{createPortal:!1},"This is the popover content")),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(a,null,"With Arrow")),e.createElement(r,{createPortal:!1,withArrow:!0},"This is the popover content")))},T={globals:{imports:"import { ICON_NAME, Icon, POPOVER_POSITION, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("span",null,"Default Z-axis order:"),e.createElement(t,{open:!0},e.createElement(o,{asChild:!0},e.createElement(p,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(r,{withArrow:!0},"Back")),e.createElement(t,{open:!0},e.createElement(o,{asChild:!0},e.createElement(p,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(r,{withArrow:!0},"Front")),e.createElement("br",null),e.createElement("span",null,"Custom Z-axis order:"),e.createElement(t,{open:!0,position:E.bottom,positionerStyle:{zIndex:"calc(var(--ods-theme-overlay-z-index) + 1)"}},e.createElement(o,{asChild:!0},e.createElement(p,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(r,{withArrow:!0},"Front")),e.createElement(t,{open:!0,position:E.bottom},e.createElement(o,{asChild:!0},e.createElement(p,{name:i.circleInfo,style:{fontSize:"24px"}})),e.createElement(r,{withArrow:!0},"Back")))};var f,w,O;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: (arg: DemoArg) => <Popover gutter={arg.gutter} position={arg.position} sameWidth={arg.sameWidth}>
      <PopoverTrigger>
        Show popover
      </PopoverTrigger>

      <PopoverContent withArrow={arg.withArrow}>
        {arg.content}
      </PopoverContent>
    </Popover>,
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    },
    gutter: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    position: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'POPOVER_POSITION'
        }
      },
      control: {
        type: 'select'
      },
      options: POPOVER_POSITIONS
    },
    sameWidth: {
      table: {
        category: CONTROL_CATEGORY.design
      },
      control: {
        type: 'boolean'
      }
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
    content: 'My popover content'
  }
}`,...(O=(w=l.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var y,A,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { ICON_NAME, Button, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';
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
    function togglePopover() {
      setIsOpen(isOpen => !isOpen);
    }
    return <>
        <Button onClick={togglePopover}>
          Toggle popover
        </Button>

        <Popover open={isOpen}>
          <PopoverTrigger asChild>
            <Icon name={ICON_NAME.cog} />
          </PopoverTrigger>

          <PopoverContent withArrow>
            This is the popover content
          </PopoverContent>
        </Popover>
      </>;
  }
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var N,b,S;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Button, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Popover>
      <PopoverTrigger asChild>
        <Button>
          Custom Trigger
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(S=(b=m.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var B,R,x;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Popover>
      <PopoverTrigger>
        Show popover
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(x=(R=v.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var _,M,L;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '50px 150px'
  }}>
      {story()}
    </div>],
  globals: {
    imports: \`import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Popover position="top-start">
        <PopoverTrigger>
          Top Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top Left popover
        </PopoverContent>
      </Popover>

      <Popover position="top">
        <PopoverTrigger>
          Top
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top popover
        </PopoverContent>
      </Popover>

      <Popover position="top-end">
        <PopoverTrigger>
          Top Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Top Right popover
        </PopoverContent>
      </Popover>

      <Popover position="left">
        <PopoverTrigger>
          Middle Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Middle Left popover
        </PopoverContent>
      </Popover>

      <div />

      <Popover position="right">
        <PopoverTrigger>
          Middle Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Middle Right popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom-start">
        <PopoverTrigger>
          Bottom Left
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom Left popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom">
        <PopoverTrigger>
          Bottom
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom popover
        </PopoverContent>
      </Popover>

      <Popover position="bottom-end">
        <PopoverTrigger>
          Bottom Right
        </PopoverTrigger>
        <PopoverContent withArrow>
          Bottom Right popover
        </PopoverContent>
      </Popover>
    </>
}`,...(L=(M=g.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var V,D,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Popover>
      <PopoverTrigger asChild>
        <Button>
          Show popover
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        This is the popover content
      </PopoverContent>
    </Popover>
}`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var z,F,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BUTTON_COLOR, BUTTON_VARIANT, ICON_NAME, Button, Divider, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Popover>
      <PopoverTrigger aria-haspopup="menu" asChild>
        <Button>
          <Icon name={ICON_NAME.ellipsisVertical} />
        </Button>
      </PopoverTrigger>

      <PopoverContent aria-label="Profile menu" withArrow>
        <div role="menu" style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
          <Button role="menuitem" variant={BUTTON_VARIANT.ghost}>
            Information
          </Button>

          <Button role="menuitem" variant={BUTTON_VARIANT.ghost}>
            Notifications
          </Button>

          <Divider style={{
          width: '100%'
        }} />

          <Button color={BUTTON_COLOR.critical} role="menuitem" variant={BUTTON_VARIANT.ghost}>
            Sign out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var U,k,Y;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Popover sameWidth>
      <PopoverTrigger>
        Show popover that will take this width as reference
      </PopoverTrigger>

      <PopoverContent>
        The popover content
      </PopoverContent>
    </Popover>
}`,...(Y=(k=P.parameters)==null?void 0:k.docs)==null?void 0:Y.source}}};var Z,j,q;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '12px'
  }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Default</Button>
        </PopoverTrigger>
        <PopoverContent createPortal={false}>This is the popover content</PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button>With Arrow</Button>
        </PopoverTrigger>
        <PopoverContent createPortal={false} withArrow>This is the popover content</PopoverContent>
      </Popover>
    </div>
}`,...(q=(j=h.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var H,J,K;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Icon, POPOVER_POSITION, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <span>Default Z-axis order:</span>

      <Popover open>
        <PopoverTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </PopoverTrigger>

        <PopoverContent withArrow>
          Back
        </PopoverContent>
      </Popover>

      <Popover open>
        <PopoverTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </PopoverTrigger>

        <PopoverContent withArrow>
          Front
        </PopoverContent>
      </Popover>

      <br />

      <span>Custom Z-axis order:</span>

      <Popover open position={POPOVER_POSITION.bottom} positionerStyle={{
      zIndex: 'calc(var(--ods-theme-overlay-z-index) + 1)'
    }}>
        <PopoverTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </PopoverTrigger>

        <PopoverContent withArrow>
          Front
        </PopoverContent>
      </Popover>

      <Popover open position={POPOVER_POSITION.bottom}>
        <PopoverTrigger asChild>
          <Icon name={ICON_NAME.circleInfo} style={{
          fontSize: '24px'
        }} />
        </PopoverTrigger>

        <PopoverContent withArrow>
          Back
        </PopoverContent>
      </Popover>
    </>
}`,...(K=(J=T.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const se=["Demo","Controlled","CustomTrigger","Default","Grid","Overview","AccessibilityWithMenu","SameWidth","ThemeGenerator","ZIndex"],Te=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityWithMenu:u,Controlled:c,CustomTrigger:m,Default:v,Demo:l,Grid:g,Overview:d,SameWidth:P,ThemeGenerator:h,ZIndex:T,__namedExportsOrder:se,default:ie},Symbol.toStringTag,{value:"Module"}));export{u as A,m as C,v as D,g as G,d as O,Te as P,P as S,T as Z,c as a};
