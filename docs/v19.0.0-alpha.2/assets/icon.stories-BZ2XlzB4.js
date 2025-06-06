import{e}from"./index-D_CmzhJ4.js";import{I as r,a as U,b as z}from"./icon-name-jL3axqAU.js";import{o as q,C as H}from"./controls-BtiQQn1l.js";const X={arrowCrossed:[],arrowDown:[],arrowDownLeft:[],arrowDownRight:[],arrowLeft:[],arrowLeftRight:[],arrowRight:[],arrowUp:[],arrowUpDown:[],arrowUpLeft:[],arrowUpRight:[],bell:["notification"],bill:["invoice"],book:[],box:["pack"],calendar:["day","month","year"],check:["validation"],chevronDoubleLeft:[],chevronDoubleRight:[],chevronDown:[],chevronLeft:[],chevronRight:[],chevronUp:[],circleCheck:["validation"],circleInfo:[],circleQuestion:[],circleThreeNodes:[],circleUser:[],circleXmark:["clear","times"],clockTimeFour:[],clockTimeNine:[],clockTimeSix:[],clockTimeThree:[],clockTimeTwelve:[],cloud:[],cloudCheck:["validation"],cloudDownload:[],cloudLock:[],cloudUpload:[],cloudXmark:["clear","times"],cog:[],columns:["filter","table"],comment:["chat","message"],creditCard:[],dPad:[],diamondExclamation:[],diamondExclamationFull:[],diamondsFull:[],download:[],ellipsisHorizontal:[],ellipsisVertical:[],email:[],emoticon:[],emoticonDizzy:[],emoticonNeutral:[],emoticonSad:[],emoticonSmile:[],emoticonWink:[],equal:[],externalLink:[],eye:[],eyeOff:[],file:[],fileCopy:[],fileMinus:[],filePlus:[],filter:[],flaskEmpty:["lab"],flaskFull:["lab"],flaskHalf:["lab"],focus:[],folder:[],folderMinus:[],folderPlus:[],gameConsole:[],gameController:[],gameControllerAlt:[],gathering:[],globe:[],grid:["apps"],gridAlt:[],hamburgerMenu:[],hexagonExclamation:[],hexagonExclamationFull:[],hierarchy:[],home:[],key:[],leaf:[],lifeBuoy:[],lightbulb:[],list:[],location:[],lockClose:[],lockOpen:[],magnifyingGlass:["search"],minus:[],money:[],monitor:["display","screen"],network:[],pen:[],phone:[],plus:[],printer:[],question:[],refresh:[],resize:[],server:["rack"],serverRack:[],shareNodes:[],shield:[],shieldCheck:["validation"],shieldExclamation:[],shieldFirewall:[],shieldLock:[],shieldMinus:[],shieldOff:[],shieldPlus:[],shieldXmark:["clear","times"],shoppingCart:[],shoppingCartError:[],shoppingCartMinus:[],shoppingCartPlus:[],shoppingCartXmark:["clear","times"],shrink:[],shutdown:[],sortAlphaDown:[],sortAlphaUp:[],sortNumericDown:[],sortNumericUp:[],star:[],starFull:[],store:[],tag:[],timer:["alarm","clock"],trafficCone:[],trash:[],triangleExclamation:[],triangleExclamationFull:[],triangleThreeNodes:[],truck:[],undo:[],upload:[],user:[],xmark:["clear","times"]},W={component:r,title:"ODS Components/Icon"},o={argTypes:q({name:{table:{category:H.general,type:{summary:"ICON_NAME"}},control:{type:"select"},options:z}}),args:{name:U.home}},n={tags:["!dev"],render:({})=>e.createElement(r,{"aria-hidden":"true",name:"cloud"})},t={tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"home",name:"home"})},s={render:p=>{const P=new RegExp(p.search),G=p.search?Object.entries(U).filter(([a,d])=>[d].concat(X[a]||[]).some(j=>P.test(j))).map(([a,d])=>d):z;return e.createElement("div",{style:{display:"flex",flexFlow:"row",flexWrap:"wrap",gap:"1rem"}},G.map(a=>e.createElement(r,{key:a,name:a,title:a})))},argTypes:{name:{table:{disable:!0}},search:{control:{type:"text"},description:"Search for a specific icon name or tag"}}},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{"aria-hidden":"true",name:"home",style:{fontSize:"2rem",color:"var(--ods-color-primary-500)"}})},l={tags:["!dev"],render:({})=>e.createElement(r,{"aria-hidden":"true",name:"home"})},i={tags:["!dev"],render:({})=>e.createElement(r,{name:"home"})},m={tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Help",name:"circle-question"})};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: orderControls({
    name: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'ICON_NAME'
        }
      },
      control: {
        type: 'select'
      },
      options: ICON_NAMES
    }
  }),
  args: {
    name: ICON_NAME.home
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Icon aria-hidden="true" name="cloud" />
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var k,b,C;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Icon aria-label="home" name="home" />
}`,...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var w,E,O;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (arg: AllArg) => {
    const regexp = new RegExp(arg.search);
    const names = arg.search ? Object.entries<string>(ICON_NAME).filter(([key, name]) => {
      return [name].concat(ODS_ICON_TAG[key as IconNameKey] || []).some(value => regexp.test(value));
    }).map(([_, name]) => name) : ICON_NAMES;
    return <div style={{
      display: 'flex',
      flexFlow: 'row',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
        {names.map(name => <Icon key={name} name={name as ICON_NAME} title={name} />)}
      </div>;
  },
  argTypes: {
    name: {
      table: {
        disable: true
      }
    },
    search: {
      control: {
        type: 'text'
      },
      description: 'Search for a specific icon name or tag'
    }
  }
}`,...(O=(E=s.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var N,I,x;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Icon aria-hidden="true" name="home" style={{
    fontSize: '2rem',
    color: 'var(--ods-color-primary-500)'
  }} />
}`,...(x=(I=c.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var A,S,D;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Icon aria-hidden="true" name="home" />
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var _,T,M;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Icon name="home" />
}`,...(M=(T=i.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var R,L,F;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Icon aria-label="Help" name="circle-question" />
}`,...(F=(L=m.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};const Y=["Demo","AccessibilityDecorative","AccessibilityInformative","All","Overview","Decorative","Default","Informative"],V=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDecorative:n,AccessibilityInformative:t,All:s,Decorative:l,Default:i,Demo:o,Informative:m,Overview:c,__namedExportsOrder:Y,default:W},Symbol.toStringTag,{value:"Module"}));export{n as A,i as D,V as I,c as O,t as a,l as b,m as c};
