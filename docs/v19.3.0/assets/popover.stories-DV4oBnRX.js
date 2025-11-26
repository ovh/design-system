import{e,r as K}from"./index-jIWwRBLr.js";import{B as p,d as P}from"./Button-B-GJ-1TA.js";import{a as Q}from"./colors-DSObuHxd.js";import{D as X}from"./divider-color-3oJfAj5a.js";import{I as j,a as z}from"./icon-name-C581wThh.js";import{P as o,a as r,b as t}from"./PopoverTrigger-DzBDMVX4.js";import{O as Z}from"./overlay-CZHjGBMC.js";import{e as $,o as ee,C as a}from"./controls-BtiQQn1l.js";import{s as oe}from"./source-CPEZJ6oD.js";const re={argTypes:$(["autoFocus","onOpenChange","onPositionChange","open","triggerId"]),component:t,subcomponents:{PopoverContent:r,PopoverTrigger:o},title:"React Components/Popover"},i={parameters:{layout:"centered"},render:n=>e.createElement(t,{gutter:n.gutter,position:n.position,sameWidth:n.sameWidth},e.createElement(o,null,"Show popover"),e.createElement(r,{withArrow:n.withArrow},n.content)),argTypes:ee({content:{table:{category:a.slot},control:"text"},gutter:{table:{category:a.design,type:{summary:"number"}},control:"number"},position:{table:{category:a.general,type:{summary:"POPOVER_POSITION"}},control:{type:"select"},options:Z},sameWidth:{table:{category:a.design},control:{type:"boolean"}},withArrow:{table:{category:a.design,defaultValue:{summary:!1},type:{summary:"boolean"}},control:{type:"boolean"}}}),args:{content:"My popover content"}},s={decorators:[n=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},n())],globals:{imports:`import { ICON_NAME, Button, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...oe()}}},render:({})=>{const[n,q]=K.useState(!1);function H(){q(J=>!J)}return e.createElement(e.Fragment,null,e.createElement(p,{onClick:H},"Toggle popover"),e.createElement(t,{open:n},e.createElement(o,{asChild:!0},e.createElement(j,{name:z.cog})),e.createElement(r,{withArrow:!0},"This is the popover content")))}},l={globals:{imports:"import { Button, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(p,null,"Custom Trigger")),e.createElement(r,null,"This is the popover content"))},c={globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,null,"Show popover"),e.createElement(r,null,"This is the popover content"))},m={decorators:[n=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"20px",padding:"50px 150px"}},n())],globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{position:"top-start"},e.createElement(o,null,"Top Left"),e.createElement(r,{withArrow:!0},"Top Left popover")),e.createElement(t,{position:"top"},e.createElement(o,null,"Top"),e.createElement(r,{withArrow:!0},"Top popover")),e.createElement(t,{position:"top-end"},e.createElement(o,null,"Top Right"),e.createElement(r,{withArrow:!0},"Top Right popover")),e.createElement(t,{position:"left"},e.createElement(o,null,"Middle Left"),e.createElement(r,{withArrow:!0},"Middle Left popover")),e.createElement("div",null),e.createElement(t,{position:"right"},e.createElement(o,null,"Middle Right"),e.createElement(r,{withArrow:!0},"Middle Right popover")),e.createElement(t,{position:"bottom-start"},e.createElement(o,null,"Bottom Left"),e.createElement(r,{withArrow:!0},"Bottom Left popover")),e.createElement(t,{position:"bottom"},e.createElement(o,null,"Bottom"),e.createElement(r,{withArrow:!0},"Bottom popover")),e.createElement(t,{position:"bottom-end"},e.createElement(o,null,"Bottom Right"),e.createElement(r,{withArrow:!0},"Bottom Right popover")))},v={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(p,null,"Show popover")),e.createElement(r,null,"This is the popover content"))},g={globals:{imports:"import { BUTTON_COLOR, BUTTON_VARIANT, ICON_NAME, Button, Divider, Icon, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,null,e.createElement(o,{"aria-haspopup":"menu",asChild:!0},e.createElement(p,null,e.createElement(j,{name:z.ellipsisVertical}))),e.createElement(r,{"aria-label":"Profile menu",withArrow:!0},e.createElement("div",{role:"menu",style:{display:"flex",flexDirection:"column"}},e.createElement(p,{role:"menuitem",variant:P.ghost},"Information"),e.createElement(p,{role:"menuitem",variant:P.ghost},"Notifications"),e.createElement(X,{style:{width:"100%"}}),e.createElement(p,{color:Q.critical,role:"menuitem",variant:P.ghost},"Sign out"))))},d={globals:{imports:"import { Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{sameWidth:!0},e.createElement(o,null,"Show popover that will take this width as reference"),e.createElement(r,null,"The popover content"))},u={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"row wrap",gap:"12px"}},e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(p,null,"Default")),e.createElement(r,{createPortal:!1},"This is the popover content")),e.createElement(t,null,e.createElement(o,{asChild:!0},e.createElement(p,null,"With Arrow")),e.createElement(r,{createPortal:!1,withArrow:!0},"This is the popover content")))};var h,T,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(T=i.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var E,w,f;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var O,y,A;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(A=(y=l.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var b,B,R;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(R=(B=c.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var N,I,S;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(S=(I=m.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var _,x,L;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(x=v.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var M,D,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(D=g.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var W,G,U;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=(G=d.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var F,Y,k;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(k=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:k.source}}};const te=["Demo","Controlled","CustomTrigger","Default","Grid","Overview","AccessibilityWithMenu","SameWidth","ThemeGenerator"],ge=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityWithMenu:g,Controlled:s,CustomTrigger:l,Default:c,Demo:i,Grid:m,Overview:v,SameWidth:d,ThemeGenerator:u,__namedExportsOrder:te,default:re},Symbol.toStringTag,{value:"Module"}));export{g as A,l as C,c as D,m as G,v as O,ge as P,d as S,s as a};
