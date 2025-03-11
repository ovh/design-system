import{b as L,k as z}from"./index-BLVG44ao.js";import{d as $}from"./ods-icon-DTp5PnPI.js";import{o as G,C as j,x as e}from"./controls-DX883vx3.js";$();const q={arrowCrossed:[],arrowDown:[],arrowDownLeft:[],arrowDownRight:[],arrowLeft:[],arrowLeftRight:[],arrowRight:[],arrowUp:[],arrowUpDown:[],arrowUpLeft:[],arrowUpRight:[],bell:["notification"],bill:["invoice"],book:[],box:["pack"],calendar:["day","month","year"],check:["validation"],chevronDoubleLeft:[],chevronDoubleRight:[],chevronDown:[],chevronLeft:[],chevronRight:[],chevronUp:[],circleCheck:["validation"],circleInfo:[],circleQuestion:[],circleThreeNodes:[],circleUser:[],circleXmark:["clear","times"],clockTimeFour:[],clockTimeNine:[],clockTimeSix:[],clockTimeThree:[],clockTimeTwelve:[],cloud:[],cloudCheck:["validation"],cloudDownload:[],cloudLock:[],cloudUpload:[],cloudXmark:["clear","times"],cog:[],columns:["filter","table"],comment:["chat","message"],creditCard:[],dPad:[],diamondExclamation:[],diamondExclamationFull:[],diamondsFull:[],download:[],ellipsisHorizontal:[],ellipsisVertical:[],email:[],emoticon:[],emoticonDizzy:[],emoticonNeutral:[],emoticonSad:[],emoticonSmile:[],emoticonWink:[],equal:[],externalLink:[],eye:[],eyeOff:[],file:[],fileCopy:[],fileMinus:[],filePlus:[],filter:[],flaskEmpty:["lab"],flaskFull:["lab"],flaskHalf:["lab"],focus:[],folder:[],folderMinus:[],folderPlus:[],gameConsole:[],gameController:[],gameControllerAlt:[],gathering:[],globe:[],grid:["apps"],gridAlt:[],hamburgerMenu:[],hexagonExclamation:[],hexagonExclamationFull:[],hierarchy:[],home:[],key:[],leaf:[],lifeBuoy:[],lightbulb:[],list:[],location:[],lockClose:[],lockOpen:[],magnifyingGlass:["search"],minus:[],money:[],monitor:["display","screen"],network:[],pen:[],phone:[],plus:[],printer:[],question:[],refresh:[],resize:[],server:["rack"],serverRack:[],shareNodes:[],shield:[],shieldCheck:["validation"],shieldExclamation:[],shieldFirewall:[],shieldLock:[],shieldMinus:[],shieldOff:[],shieldPlus:[],shieldXmark:["clear","times"],shoppingCart:[],shoppingCartError:[],shoppingCartMinus:[],shoppingCartPlus:[],shoppingCartXmark:["clear","times"],shrink:[],shutdown:[],sortAlphaDown:[],sortAlphaUp:[],sortNumericDown:[],sortNumericUp:[],star:[],starFull:[],store:[],tag:[],timer:["alarm","clock"],trafficCone:[],trash:[],triangleExclamation:[],triangleExclamationFull:[],triangleThreeNodes:[],truck:[],undo:[],upload:[],user:[],xmark:["clear","times"]},X={title:"ODS Components/Icon",component:"ods-icon"},r={argTypes:G({name:{table:{category:j.general,defaultValue:{summary:"ø"}},control:{type:"select"},options:L}}),args:{name:z.home}},a={tags:["isHidden"],render:()=>e`
<ods-icon aria-hidden="true"
          name="cloud">
</ods-icon>
  `},n={tags:["isHidden"],render:()=>e`
<ods-icon aria-label="home"
          name="home">
</ods-icon>
  `},s={render:m=>{const F=new RegExp(m.search),U=m.search?Object.entries(z).filter(([o,d])=>[d].concat(q[o]||[]).some(P=>F.test(P))).map(([o,d])=>d):L;return e`
      <div style="display: flex; flex-flow: row; flex-wrap: wrap; gap: 1rem;">
        ${U.map(o=>e`<ods-icon name="${o}" title="${o}"></ods-icon>`)}
      </div>
    `},argTypes:{search:{control:{type:"text"},description:"Search for a specific icon name or tag"}}},i={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e`
<ods-icon aria-hidden="true" id="icon-overview" name="home" size="lg"></ods-icon>
<style>
  #icon-overview {
    font-size: 2rem;
    color: var(--ods-color-primary-500);
  }
</style>
  `},t={tags:["isHidden"],render:()=>e`
    <ods-icon aria-hidden="true" name="home"></ods-icon>
  `},c={tags:["isHidden"],render:()=>e`
<ods-icon name="home"></ods-icon>
  `},l={tags:["isHidden"],render:()=>e`
    <ods-icon aria-label="Help" name="circle-question"></ods-icon>
  `};var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: orderControls({
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
    name: ODS_ICON_NAME.home
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-icon aria-hidden="true"
          name="cloud">
</ods-icon>
  \`
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,w,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-icon aria-label="home"
          name="home">
</ods-icon>
  \`
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var O,C,b;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var x,D,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-icon aria-hidden="true" id="icon-overview" name="home" size="lg"></ods-icon>
<style>
  #icon-overview {
    font-size: 2rem;
    color: var(--ods-color-primary-500);
  }
</style>
  \`
}`,...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var _,N,A;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-icon aria-hidden="true" name="home"></ods-icon>
  \`
}`,...(A=(N=t.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var E,T,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-icon name="home"></ods-icon>
  \`
}`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var H,R,M;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-icon aria-label="Help" name="circle-question"></ods-icon>
  \`
}`,...(M=(R=l.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};const V=["Demo","AccessibilityDecorative","AccessibilityInformative","All","Overview","Decorative","Default","Informative"],Q=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDecorative:a,AccessibilityInformative:n,All:s,Decorative:t,Default:c,Demo:r,Informative:l,Overview:i,__namedExportsOrder:V,default:X},Symbol.toStringTag,{value:"Module"}));export{a as A,c as D,Q as I,i as O,n as a,t as b,l as c};
