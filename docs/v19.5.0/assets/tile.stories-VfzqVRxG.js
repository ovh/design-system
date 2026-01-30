import{r as o,e}from"./index-jIWwRBLr.js";import{c as K,b as Q,C as U}from"./CheckboxLabel-D12B56tG.js";import{c as ne,b as v,a as y,R}from"./RadioLabel-eoh0KbCP.js";import{j as b}from"./jsx-runtime-Cfl8ynUo.js";import{c as X}from"./index-CqY9YpN0.js";import{C as le}from"./Card-pBUOkgnJ.js";import{a as oe}from"./colors-DSObuHxd.js";import{u as re}from"./context-C_-r2uoG.js";import{o as se,C as k}from"./controls-BtiQQn1l.js";import{s as Z}from"./source-CPEZJ6oD.js";const ee=o.createContext(void 0);function te({children:t,disabled:l,selected:n}){return b.jsx(ee.Provider,{value:{disabled:l,selected:n},children:t})}function de(){return re(ee)}te.__docgenInfo={description:"",methods:[],displayName:"TileProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const ie="_tile_16kx8_2",C={tile:ie,"tile--selected":"_tile--selected_16kx8_17","tile--disabled":"_tile--disabled_16kx8_17"},a=o.forwardRef(({className:t,children:l,disabled:n=!1,selected:g=!1,...h},f)=>b.jsx(te,{disabled:n,selected:g,children:b.jsx(le,{className:X(C.tile,{[C["tile--selected"]]:g},{[C["tile--disabled"]]:n},t),color:oe.neutral,"data-ods":"tile",ref:f,...h,children:l})}));a.displayName="Tile";a.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled.",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether the component is selected.",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const T={"tile-alt-container":"_tile-alt-container_mzuph_2","tile-alt-container--selected":"_tile-alt-container--selected_mzuph_8","tile-alt-container--disabled":"_tile-alt-container--disabled_mzuph_11"},x=o.forwardRef(({children:t,className:l,...n},g)=>{const h=de(),f=h.selected??!1,ae=h.disabled??!1;return b.jsx("div",{className:X(T["tile-alt-container"],{[T["tile-alt-container--selected"]]:f},{[T["tile-alt-container--disabled"]]:ae},l),"data-ods":"tile-alt-container",ref:g,...n,children:t})});x.displayName="TileAltContainer";x.__docgenInfo={description:"",methods:[],displayName:"TileAltContainer",composes:["ComponentPropsWithRef"]};const ce={component:a,subcomponents:{TileAltContainer:x},tags:["new"],title:"React Components/Tile"},r={render:t=>e.createElement(a,{disabled:t.disabled,selected:t.selected,style:{padding:"16px",width:"300px"}},"This is a tile content."),argTypes:se({disabled:{table:{category:k.general},control:"boolean"},selected:{table:{category:k.general},control:"boolean"}})},s={globals:{imports:"import { Tile } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,"This is a tile content.")},d={globals:{imports:"import { Tile } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{disabled:!0},"This tile is disabled.")},i={globals:{imports:"import { Tile } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{selected:!0},"This tile is selected.")},c={globals:{imports:`import { Tile, Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';
    import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Z()}}},render:({})=>{const[t,l]=o.useState(!1);return e.createElement(a,{selected:t},e.createElement(K,{checked:t,onCheckedChange:n=>l(n.checked===!0)},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(Q,null),e.createElement(U,null,"Checkbox tile"))))}},p={globals:{imports:`import { Tile, Radio, RadioGroup, RadioControl, RadioLabel } from '@ovhcloud/ods-react';
    import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Z()}}},render:({})=>{const[t,l]=o.useState("radio-1");return e.createElement(ne,{value:t,onValueChange:n=>l(n.value||"")},e.createElement("div",null,e.createElement(a,{selected:t==="radio-1"},e.createElement(v,{value:"radio-1"},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(y,null),e.createElement(R,null,"Radio 1"))))),e.createElement("div",null,e.createElement(a,{selected:t==="radio-2"},e.createElement(v,{value:"radio-2"},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(y,null),e.createElement(R,null,"Radio 2"))))))}},m={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[t,l]=o.useState(!1);return e.createElement(a,{selected:t},e.createElement(K,{checked:t,onCheckedChange:n=>l(n.checked===!0)},e.createElement("div",null,e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(Q,null),e.createElement(U,null,"Checkbox tile")),e.createElement(x,{style:{padding:"16px"}},"Additional information"))))}},u={name:"ThemeGenerator",parameters:{docs:{disable:!0},options:{showPanel:!1}},tags:["!dev","hidden"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"16px",padding:"16px"}},e.createElement(a,{style:{padding:"16px",width:"200px"}},"Default tile"),e.createElement(a,{selected:!0,style:{padding:"16px",width:"200px"}},"Selected tile"),e.createElement(a,{disabled:!0,style:{padding:"16px",width:"200px"}},"Disabled tile"))};var E,S,_;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Tile disabled={args.disabled} selected={args.selected} style={{
    padding: '16px',
    width: '300px'
  }}>
      This is a tile content.
    </Tile>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    selected: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    }
  })
}`,...(_=(S=r.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var L,O,w;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tile>
      This is a tile content.
    </Tile>
}`,...(w=(O=s.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var G,N,D;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tile disabled>
      This tile is disabled.
    </Tile>
}`,...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var I,A,j;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tile selected>
      This tile is selected.
    </Tile>
}`,...(j=(A=i.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var P,W,z;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile, Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';
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
    const [selected, setSelected] = useState(false);
    return <Tile selected={selected}>
        <Checkbox checked={selected} onCheckedChange={detail => setSelected(detail.checked === true)}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '16px'
        }}>
            <CheckboxControl />
            <CheckboxLabel>Checkbox tile</CheckboxLabel>
          </div>
        </Checkbox>
      </Tile>;
  }
}`,...(z=(W=c.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var V,q,Y;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile, Radio, RadioGroup, RadioControl, RadioLabel } from '@ovhcloud/ods-react';
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
    const [selected, setSelected] = useState('radio-1');
    return <RadioGroup value={selected} onValueChange={detail => setSelected(detail.value || '')}>
        <div>
          <Tile selected={selected === 'radio-1'}>
            <Radio value={'radio-1'}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px'
            }}>
                <RadioControl />
                <RadioLabel>
                  Radio 1
                </RadioLabel>
              </div>
            </Radio>
          </Tile>
        </div>
        <div>
          <Tile selected={selected === 'radio-2'}>
            <Radio value={'radio-2'}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px'
            }}>
                <RadioControl />
                <RadioLabel>
                  Radio 2
                </RadioLabel>
              </div>
            </Radio>
          </Tile>
        </div>
      </RadioGroup>;
  }
}`,...(Y=(q=p.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var M,$,B;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => {
    const [selected, setSelected] = useState(false);
    return <Tile selected={selected}>
        <Checkbox checked={selected} onCheckedChange={detail => setSelected(detail.checked === true)}>
          <div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px'
          }}>
              <CheckboxControl />
              <CheckboxLabel>Checkbox tile</CheckboxLabel>
            </div>

            <TileAltContainer style={{
            padding: '16px'
          }}>
              Additional information
            </TileAltContainer>
          </div>
        </Checkbox>
      </Tile>;
  }
}`,...(B=($=m.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var F,H,J;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'ThemeGenerator',
  parameters: {
    docs: {
      disable: true
    },
    options: {
      showPanel: false
    }
  },
  tags: ['!dev', 'hidden'],
  render: ({}) => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '16px'
  }}>
      <Tile style={{
      padding: '16px',
      width: '200px'
    }}>
        Default tile
      </Tile>
      <Tile selected style={{
      padding: '16px',
      width: '200px'
    }}>
        Selected tile
      </Tile>
      <Tile disabled style={{
      padding: '16px',
      width: '200px'
    }}>
        Disabled tile
      </Tile>
    </div>
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const pe=["Demo","Default","Disabled","Selected","WithCheckbox","WithRadioGroup","Overview","ThemeGenerator"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Demo:r,Disabled:d,Overview:m,Selected:i,ThemeGenerator:u,WithCheckbox:c,WithRadioGroup:p,__namedExportsOrder:pe,default:ce},Symbol.toStringTag,{value:"Module"}));export{s as D,m as O,i as S,ye as T,c as W,d as a,p as b};
