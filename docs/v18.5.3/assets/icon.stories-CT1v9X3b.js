import{b as _,k as b}from"./index-DCBH0_Tl.js";import{d as T}from"./ods-icon-DOZBIEJb.js";import{o as A,C as c,x as s}from"./controls-DX883vx3.js";T();const R={arrowCrossed:[],arrowDown:[],arrowDownLeft:[],arrowDownRight:[],arrowLeft:[],arrowLeftRight:[],arrowRight:[],arrowUp:[],arrowUpDown:[],arrowUpLeft:[],arrowUpRight:[],bell:["notification"],bill:["invoice"],book:[],box:["pack"],calendar:["day","month","year"],check:["validation"],chevronDoubleLeft:[],chevronDoubleRight:[],chevronDown:[],chevronLeft:[],chevronRight:[],chevronUp:[],circleCheck:["validation"],circleInfo:[],circleQuestion:[],circleThreeNodes:[],circleUser:[],circleXmark:["clear","times"],clockTimeFour:[],clockTimeNine:[],clockTimeSix:[],clockTimeThree:[],clockTimeTwelve:[],cloud:[],cloudCheck:["validation"],cloudDownload:[],cloudLock:[],cloudUpload:[],cloudXmark:["clear","times"],cog:[],columns:["filter","table"],comment:["chat","message"],creditCard:[],dPad:[],diamondExclamation:[],diamondExclamationFull:[],diamondsFull:[],download:[],ellipsisHorizontal:[],ellipsisVertical:[],email:[],emoticon:[],emoticonDizzy:[],emoticonNeutral:[],emoticonSad:[],emoticonSmile:[],emoticonWink:[],equal:[],externalLink:[],eye:[],eyeOff:[],file:[],fileCopy:[],fileMinus:[],filePlus:[],filter:[],flaskEmpty:["lab"],flaskFull:["lab"],flaskHalf:["lab"],focus:[],folder:[],folderMinus:[],folderPlus:[],gameConsole:[],gameController:[],gameControllerAlt:[],gathering:[],globe:[],grid:["apps"],gridAlt:[],hamburgerMenu:[],hexagonExclamation:[],hexagonExclamationFull:[],hierarchy:[],home:[],key:[],leaf:[],lifeBuoy:[],lightbulb:[],list:[],location:[],lockClose:[],lockOpen:[],magnifyingGlass:["search"],minus:[],money:[],monitor:["display","screen"],network:[],pen:[],phone:[],plus:[],printer:[],question:[],refresh:[],resize:[],server:["rack"],serverRack:[],shareNodes:[],shield:[],shieldCheck:["validation"],shieldExclamation:[],shieldFirewall:[],shieldLock:[],shieldMinus:[],shieldOff:[],shieldPlus:[],shieldXmark:["clear","times"],shoppingCart:[],shoppingCartError:[],shoppingCartMinus:[],shoppingCartPlus:[],shoppingCartXmark:["clear","times"],shrink:[],shutdown:[],sortAlphaDown:[],sortAlphaUp:[],sortNumericDown:[],sortNumericUp:[],star:[],starFull:[],store:[],tag:[],timer:["alarm","clock"],trafficCone:[],trash:[],triangleExclamation:[],triangleExclamationFull:[],triangleThreeNodes:[],truck:[],undo:[],upload:[],user:[],xmark:["clear","times"]},I={title:"ODS Components/Icon",component:"ods-icon"},o={argTypes:A({alt:{table:{category:c.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:{type:"text"},description:"Optional alternate text for the icon"},name:{table:{category:c.general,defaultValue:{summary:"ø"}},control:{type:"select"},options:_}}),args:{name:b.home,alt:"home icon"}},r={render:l=>{const D=new RegExp(l.search),S=l.search?Object.entries(b).filter(([e,i])=>[i].concat(R[e]||[]).some(E=>D.test(E))).map(([e,i])=>i):_;return s`
      <div style="display: flex; flex-flow: row; flex-wrap: wrap; gap: 1rem;">
        ${S.map(e=>s`<ods-icon name="${e}" title="${e}"></ods-icon>`)}
      </div>
    `},argTypes:{search:{control:{type:"text"},description:"Search for a specific icon name or tag"}}},n={tags:["isHidden"],parameters:{layout:"centered"},render:()=>s`
<ods-icon id="icon-overview" name="home" size="lg"></ods-icon>
<style>
  #icon-overview {
    font-size: 2rem;
    color: var(--ods-color-primary-500);
  }
</style>
  `},a={tags:["isHidden"],render:()=>s`
<ods-icon name="home"></ods-icon>
  `},t={tags:["isHidden"],render:()=>s`
<ods-icon name="home"></ods-icon>
<ods-icon name="plus"></ods-icon>
  `};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  argTypes: orderControls({
    alt: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: {
        type: 'text'
      },
      description: 'Optional alternate text for the icon'
    },
    name: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_ICON_NAMES
    }
  }),
  args: {
    name: ODS_ICON_NAME.home,
    alt: 'home icon'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const regexp = new RegExp(args.search);
    const names = args.search ? Object.entries<string>(ODS_ICON_NAME).filter(([key, name]) => {
      return [name].concat(ODS_ICON_TAG[key as IconNameKey] || []).some(value => regexp.test(value));
    }).map(([_, name]) => name) : ODS_ICON_NAMES;
    return html\`
      <div style="display: flex; flex-flow: row; flex-wrap: wrap; gap: 1rem;">
        \${names.map(name => html\`<ods-icon name="\${name}" title="\${name}"></ods-icon>\`)}
      </div>
    \`;
  },
  argTypes: {
    search: {
      control: {
        type: 'text'
      },
      description: 'Search for a specific icon name or tag'
    }
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-icon id="icon-overview" name="home" size="lg"></ods-icon>
<style>
  #icon-overview {
    font-size: 2rem;
    color: var(--ods-color-primary-500);
  }
</style>
  \`
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var O,k,v;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-icon name="home"></ods-icon>
  \`
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var x,C,N;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-icon name="home"></ods-icon>
<ods-icon name="plus"></ods-icon>
  \`
}`,...(N=(C=t.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const L=["Demo","All","Overview","Default","Name"],U=Object.freeze(Object.defineProperty({__proto__:null,All:r,Default:a,Demo:o,Name:t,Overview:n,__namedExportsOrder:L,default:I},Symbol.toStringTag,{value:"Module"}));export{a as D,U as I,t as N,n as O};
