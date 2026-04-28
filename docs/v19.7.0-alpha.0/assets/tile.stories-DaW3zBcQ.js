import{r as o,e}from"./index-jIWwRBLr.js";import{c as Q,b as U,C as X}from"./index-0OEWi4Up.js";import{c as le,b as y,a as R,R as k}from"./index-BM79Ejt2.js";import{j as x}from"./jsx-runtime-Cfl8ynUo.js";import{c as Z}from"./index-CqY9YpN0.js";import{C as oe}from"./Card-DNx-3noX.js";import{a as re}from"./colors-DSObuHxd.js";import{u as se}from"./context-C_-r2uoG.js";import{o as de,C as E}from"./controls-BtiQQn1l.js";import{s as ee}from"./source-CPEZJ6oD.js";const te=o.createContext(void 0);function ne({children:t,disabled:l,selected:n}){return x.jsx(te.Provider,{value:{disabled:l,selected:n},children:t})}function ie(){return se(te)}ne.__docgenInfo={description:"",methods:[],displayName:"TileProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const ce="_tile_16kx8_2",C={tile:ce,"tile--selected":"_tile--selected_16kx8_17","tile--disabled":"_tile--disabled_16kx8_17"},v=o.forwardRef(({className:t,children:l,disabled:n=!1,selected:h=!1,...b},f)=>x.jsx(ne,{disabled:n,selected:h,children:x.jsx(oe,{className:Z(C.tile,{[C["tile--selected"]]:h},{[C["tile--disabled"]]:n},t),color:re.neutral,"data-ods":"tile",ref:f,...b,children:l})}));v.displayName="Tile";v.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled.",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether the component is selected.",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const T={"tile-alt-container":"_tile-alt-container_mzuph_2","tile-alt-container--selected":"_tile-alt-container--selected_mzuph_8","tile-alt-container--disabled":"_tile-alt-container--disabled_mzuph_11"},g=o.forwardRef(({children:t,className:l,...n},h)=>{const b=ie(),f=b.selected??!1,ae=b.disabled??!1;return x.jsx("div",{className:Z(T["tile-alt-container"],{[T["tile-alt-container--selected"]]:f},{[T["tile-alt-container--disabled"]]:ae},l),"data-ods":"tile-alt-container",ref:h,...n,children:t})});g.displayName="TileAltContainer";g.__docgenInfo={description:"",methods:[],displayName:"TileAltContainer",composes:["ComponentPropsWithRef"]};const a=Object.assign(v,{AltContainer:g}),pe={component:a,subcomponents:{TileAltContainer:g},title:"React Components/Tile"},r={render:t=>e.createElement(a,{disabled:t.disabled,selected:t.selected,style:{padding:"16px",width:"300px"}},"This is a tile content."),argTypes:de({disabled:{table:{category:E.general},control:"boolean"},selected:{table:{category:E.general},control:"boolean"}})},s={globals:{imports:"import { Tile } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,"This is a tile content.")},d={globals:{imports:"import { Tile } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{disabled:!0},"This tile is disabled.")},i={globals:{imports:"import { Tile } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{selected:!0},"This tile is selected.")},c={globals:{imports:`import { Tile, Checkbox, CheckboxControl, CheckboxLabel } from '@ovhcloud/ods-react';
    import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...ee()}}},render:({})=>{const[t,l]=o.useState(!1);return e.createElement(a,{selected:t},e.createElement(Q,{checked:t,onCheckedChange:n=>l(n.checked===!0)},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(U,null),e.createElement(X,null,"Checkbox tile"))))}},p={globals:{imports:`import { Tile, Radio, RadioGroup, RadioControl, RadioLabel } from '@ovhcloud/ods-react';
    import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...ee()}}},render:({})=>{const[t,l]=o.useState("radio-1");return e.createElement(le,{value:t,onValueChange:n=>l(n.value||"")},e.createElement("div",null,e.createElement(a,{selected:t==="radio-1"},e.createElement(y,{value:"radio-1"},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(R,null),e.createElement(k,null,"Radio 1"))))),e.createElement("div",null,e.createElement(a,{selected:t==="radio-2"},e.createElement(y,{value:"radio-2"},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(R,null),e.createElement(k,null,"Radio 2"))))))}},m={tags:["!dev"],parameters:{layout:"centered"},render:({})=>{const[t,l]=o.useState(!1);return e.createElement(a,{selected:t},e.createElement(Q,{checked:t,onCheckedChange:n=>l(n.checked===!0)},e.createElement("div",null,e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"16px"}},e.createElement(U,null),e.createElement(X,null,"Checkbox tile")),e.createElement(g,{style:{padding:"16px"}},"Additional information"))))}},u={name:"ThemeGenerator",parameters:{docs:{disable:!0},options:{showPanel:!1}},tags:["!dev","hidden"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"16px",padding:"16px"}},e.createElement(a,{style:{padding:"16px",width:"200px"}},"Default tile"),e.createElement(a,{selected:!0,style:{padding:"16px",width:"200px"}},"Selected tile"),e.createElement(a,{disabled:!0,style:{padding:"16px",width:"200px"}},"Disabled tile"))};var S,_,O;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(_=r.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var L,w,G;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tile>
      This is a tile content.
    </Tile>
}`,...(G=(w=s.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var N,A,D;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tile disabled>
      This tile is disabled.
    </Tile>
}`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var I,j,P;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Tile } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Tile selected>
      This tile is selected.
    </Tile>
}`,...(P=(j=i.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var W,z,V;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(z=c.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var q,Y,$;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...($=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var M,B,F;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const me=["Demo","Default","Disabled","Selected","WithCheckbox","WithRadioGroup","Overview","ThemeGenerator"],Re=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Demo:r,Disabled:d,Overview:m,Selected:i,ThemeGenerator:u,WithCheckbox:c,WithRadioGroup:p,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{s as D,m as O,i as S,Re as T,c as W,d as a,p as b};
