import{d as G,a as M}from"./ods-tabs2-BNbhFfmR.js";import{x as e,o as N,C as V}from"./controls-DX883vx3.js";import{o as Y}from"./unsafe-html-VJzuFJfF.js";const F=G,B=M;var c=Object.freeze,I=Object.defineProperty,t=(n,k)=>c(I(n,"raw",{value:c(k||n.slice())})),i,u,T,m,v,f;F();B();const J={title:"ODS Components/Tabs",component:"ods-tabs"},s={render:n=>e`
<ods-tabs>
  ${Y(n.content)}
</ods-tabs>
  `,argTypes:N({content:{table:{category:V.slot,defaultValue:{summary:"ø"}},control:"text",description:"Add `is-selected` or `is-disabled` on `ods-tab` to see the state change"}}),args:{content:"<ods-tab>Tab 1</ods-tab><ods-tab>Tab 2</ods-tab><ods-tab>Tab 3</ods-tab>"}},a={tags:["isHidden"],render:()=>e(i||(i=t([`
<ods-tabs class="my-tabs" id="css-tabs">
  <ods-tab class="my-tab" id="css-tab-1">Tab 1</ods-tab>
  <ods-tab id="css-tab-2">Tab 2</ods-tab>
  <ods-tab id="css-tab-3">Tab 3</ods-tab>
</ods-tabs>
<style>
  .my-tabs {
    background-color: #e2e2e2;
  }
  .my-tab {
    color: #ffa500;
  }
</style>
<script>
  (() => {
    const cssTabs = document.querySelector('#css-tabs');
    const allCssTabs = cssTabs.querySelectorAll('ods-tab');

    cssTabs.addEventListener('odsTabSelected', (event) => {
      allCssTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `],[`
<ods-tabs class="my-tabs" id="css-tabs">
  <ods-tab class="my-tab" id="css-tab-1">Tab 1</ods-tab>
  <ods-tab id="css-tab-2">Tab 2</ods-tab>
  <ods-tab id="css-tab-3">Tab 3</ods-tab>
</ods-tabs>
<style>
  .my-tabs {
    background-color: #e2e2e2;
  }
  .my-tab {
    color: #ffa500;
  }
</style>
<script>
  (() => {
    const cssTabs = document.querySelector('#css-tabs');
    const allCssTabs = cssTabs.querySelectorAll('ods-tab');

    cssTabs.addEventListener('odsTabSelected', (event) => {
      allCssTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `])))},d={tags:["isHidden"],render:()=>e(u||(u=t([`
<ods-tabs id="default-tabs">
  <ods-tab id="default-1">Tab 1</ods-tab>
  <ods-tab id="default-2">Tab 2</ods-tab>
  <ods-tab id="default-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const defaultTabs = document.querySelector('#default-tabs');
    const allDefaults = defaultTabs.querySelectorAll('ods-tab');

    defaultTabs.addEventListener('odsTabSelected', (event) => {
      allDefaults.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `],[`
<ods-tabs id="default-tabs">
  <ods-tab id="default-1">Tab 1</ods-tab>
  <ods-tab id="default-2">Tab 2</ods-tab>
  <ods-tab id="default-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const defaultTabs = document.querySelector('#default-tabs');
    const allDefaults = defaultTabs.querySelectorAll('ods-tab');

    defaultTabs.addEventListener('odsTabSelected', (event) => {
      allDefaults.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `])))},b={tags:["isHidden"],render:()=>e(T||(T=t([`
<ods-tabs id="disabled-tabs">
  <ods-tab id="disabled-tab-1">Tab 1</ods-tab>
  <ods-tab id="disabled-tab-2" is-disabled>Tab 2</ods-tab>
  <ods-tab id="disabled-tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const disabledTabs = document.querySelector('#disabled-tabs');
    const allDisabledTabs = disabledTabs.querySelectorAll('ods-tab');

    disabledTabs.addEventListener('odsTabSelected', (event) => {
      allDisabledTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `],[`
<ods-tabs id="disabled-tabs">
  <ods-tab id="disabled-tab-1">Tab 1</ods-tab>
  <ods-tab id="disabled-tab-2" is-disabled>Tab 2</ods-tab>
  <ods-tab id="disabled-tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const disabledTabs = document.querySelector('#disabled-tabs');
    const allDisabledTabs = disabledTabs.querySelectorAll('ods-tab');

    disabledTabs.addEventListener('odsTabSelected', (event) => {
      allDisabledTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `])))},o={tags:["isHidden"],render:()=>e(m||(m=t([`
<div class="my-container">
  <ods-tabs id="overflow-tabs">
    <ods-tab id="overflow-tab-1">Tab 1</ods-tab>
    <ods-tab id="overflow-tab-2">Tab 2</ods-tab>
    <ods-tab id="overflow-tab-3">Tab 3</ods-tab>
    <ods-tab id="overflow-tab-4">Tab 4</ods-tab>
    <ods-tab id="overflow-tab-5">Tab 5</ods-tab>
    <ods-tab id="overflow-tab-6">Tab 6</ods-tab>
  </ods-tabs>
</div>
<style>
  .my-container {
    width: 300px;
  }
</style>
<script>
  (() => {
    const overflowTabs = document.querySelector('#overflow-tabs');
    const allOverflowTabs = overflowTabs.querySelectorAll('ods-tab');

    overflowTabs.addEventListener('odsTabSelected', (event) => {
      allOverflowTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `],[`
<div class="my-container">
  <ods-tabs id="overflow-tabs">
    <ods-tab id="overflow-tab-1">Tab 1</ods-tab>
    <ods-tab id="overflow-tab-2">Tab 2</ods-tab>
    <ods-tab id="overflow-tab-3">Tab 3</ods-tab>
    <ods-tab id="overflow-tab-4">Tab 4</ods-tab>
    <ods-tab id="overflow-tab-5">Tab 5</ods-tab>
    <ods-tab id="overflow-tab-6">Tab 6</ods-tab>
  </ods-tabs>
</div>
<style>
  .my-container {
    width: 300px;
  }
</style>
<script>
  (() => {
    const overflowTabs = document.querySelector('#overflow-tabs');
    const allOverflowTabs = overflowTabs.querySelectorAll('ods-tab');

    overflowTabs.addEventListener('odsTabSelected', (event) => {
      allOverflowTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `])))},r={tags:["isHidden"],parameters:{layout:"centered"},render:()=>e(v||(v=t([`
<ods-tabs id="tabs">
  <ods-tab id="tab-1" is-selected>Tab 1</ods-tab>
  <ods-tab id="tab-2">Tab 2</ods-tab>
  <ods-tab id="tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const tabs = document.querySelector('#tabs');
    const allTabs = tabs.querySelectorAll('ods-tab');

    tabs.addEventListener('odsTabSelected', (event) => {
      allTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `],[`
<ods-tabs id="tabs">
  <ods-tab id="tab-1" is-selected>Tab 1</ods-tab>
  <ods-tab id="tab-2">Tab 2</ods-tab>
  <ods-tab id="tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const tabs = document.querySelector('#tabs');
    const allTabs = tabs.querySelectorAll('ods-tab');

    tabs.addEventListener('odsTabSelected', (event) => {
      allTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `])))},l={tags:["isHidden"],render:()=>e(f||(f=t([`
<ods-tabs id="selected-tabs">
  <ods-tab id="selected-tab-1" is-selected>Tab 1</ods-tab>
  <ods-tab id="selected-tab-2">Tab 2</ods-tab>
  <ods-tab id="selected-tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const selectedTabs = document.querySelector('#selected-tabs');
    const allSelectedTabs = selectedTabs.querySelectorAll('ods-tab');

    selectedTabs.addEventListener('odsTabSelected', (event) => {
      allSelectedTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\`#\${event.target.id}\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `],[`
<ods-tabs id="selected-tabs">
  <ods-tab id="selected-tab-1" is-selected>Tab 1</ods-tab>
  <ods-tab id="selected-tab-2">Tab 2</ods-tab>
  <ods-tab id="selected-tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const selectedTabs = document.querySelector('#selected-tabs');
    const allSelectedTabs = selectedTabs.querySelectorAll('ods-tab');

    selectedTabs.addEventListener('odsTabSelected', (event) => {
      allSelectedTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  `])))};var S,y,p;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => html\`
<ods-tabs>
  \${unsafeHTML(args.content)}
</ods-tabs>
  \`,
  argTypes: orderControls({
    content: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text',
      description: 'Add \`is-selected\` or \`is-disabled\` on \`ods-tab\` to see the state change'
    }
  }),
  args: {
    content: '<ods-tab>Tab 1</ods-tab><ods-tab>Tab 2</ods-tab><ods-tab>Tab 3</ods-tab>'
  }
}`,...(p=(y=s.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var A,q,g;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-tabs class="my-tabs" id="css-tabs">
  <ods-tab class="my-tab" id="css-tab-1">Tab 1</ods-tab>
  <ods-tab id="css-tab-2">Tab 2</ods-tab>
  <ods-tab id="css-tab-3">Tab 3</ods-tab>
</ods-tabs>
<style>
  .my-tabs {
    background-color: #e2e2e2;
  }
  .my-tab {
    color: #ffa500;
  }
</style>
<script>
  (() => {
    const cssTabs = document.querySelector('#css-tabs');
    const allCssTabs = cssTabs.querySelectorAll('ods-tab');

    cssTabs.addEventListener('odsTabSelected', (event) => {
      allCssTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  \`
}`,...(g=(q=a.parameters)==null?void 0:q.docs)==null?void 0:g.source}}};var w,E,h;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-tabs id="default-tabs">
  <ods-tab id="default-1">Tab 1</ods-tab>
  <ods-tab id="default-2">Tab 2</ods-tab>
  <ods-tab id="default-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const defaultTabs = document.querySelector('#default-tabs');
    const allDefaults = defaultTabs.querySelectorAll('ods-tab');

    defaultTabs.addEventListener('odsTabSelected', (event) => {
      allDefaults.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  \`
}`,...(h=(E=d.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var C,O,$;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-tabs id="disabled-tabs">
  <ods-tab id="disabled-tab-1">Tab 1</ods-tab>
  <ods-tab id="disabled-tab-2" is-disabled>Tab 2</ods-tab>
  <ods-tab id="disabled-tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const disabledTabs = document.querySelector('#disabled-tabs');
    const allDisabledTabs = disabledTabs.querySelectorAll('ods-tab');

    disabledTabs.addEventListener('odsTabSelected', (event) => {
      allDisabledTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  \`
}`,...($=(O=b.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var L,D,_;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<div class="my-container">
  <ods-tabs id="overflow-tabs">
    <ods-tab id="overflow-tab-1">Tab 1</ods-tab>
    <ods-tab id="overflow-tab-2">Tab 2</ods-tab>
    <ods-tab id="overflow-tab-3">Tab 3</ods-tab>
    <ods-tab id="overflow-tab-4">Tab 4</ods-tab>
    <ods-tab id="overflow-tab-5">Tab 5</ods-tab>
    <ods-tab id="overflow-tab-6">Tab 6</ods-tab>
  </ods-tabs>
</div>
<style>
  .my-container {
    width: 300px;
  }
</style>
<script>
  (() => {
    const overflowTabs = document.querySelector('#overflow-tabs');
    const allOverflowTabs = overflowTabs.querySelectorAll('ods-tab');

    overflowTabs.addEventListener('odsTabSelected', (event) => {
      allOverflowTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  \`
}`,...(_=(D=o.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var H,x,j;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-tabs id="tabs">
  <ods-tab id="tab-1" is-selected>Tab 1</ods-tab>
  <ods-tab id="tab-2">Tab 2</ods-tab>
  <ods-tab id="tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const tabs = document.querySelector('#tabs');
    const allTabs = tabs.querySelectorAll('ods-tab');

    tabs.addEventListener('odsTabSelected', (event) => {
      allTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  \`
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var R,z,P;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-tabs id="selected-tabs">
  <ods-tab id="selected-tab-1" is-selected>Tab 1</ods-tab>
  <ods-tab id="selected-tab-2">Tab 2</ods-tab>
  <ods-tab id="selected-tab-3">Tab 3</ods-tab>
</ods-tabs>
<script>
  (() => {
    const selectedTabs = document.querySelector('#selected-tabs');
    const allSelectedTabs = selectedTabs.querySelectorAll('ods-tab');

    selectedTabs.addEventListener('odsTabSelected', (event) => {
      allSelectedTabs.forEach((tab) => {
        tab.removeAttribute('is-selected');
      });
      document.querySelector(\\\`#\\\${event.target.id}\\\`).setAttribute('is-selected', 'true');
    });
  })();
<\/script>
  \`
}`,...(P=(z=l.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const K=["Demo","CustomCSS","Default","Disabled","Overflow","Overview","Selected"],X=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:a,Default:d,Demo:s,Disabled:b,Overflow:o,Overview:r,Selected:l,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{a as C,d as D,r as O,l as S,X as T,b as a,o as b};
