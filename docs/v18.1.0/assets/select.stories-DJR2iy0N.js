import{x as o}from"./lit-html-D-ZEPr28.js";import{o as ao,C as n}from"./controls-DpsgTNdU.js";var h=Object.freeze,ro=Object.defineProperty,so=(e,io)=>h(ro(e,"raw",{value:h(io||e.slice())})),f,y;const lo={title:"ODS Components/Form elements/Select",component:"ods-select",decorators:[e=>o`<div style="height: 200px;">${e()}</div>`]},t={render:e=>o`
  <ods-select has-error="${e.hasError}"
              is-disabled="${e.isDisabled}"
              placeholder="${e.placeholder}">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </ods-select>
  `,argTypes:ao({hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},placeholder:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{hasError:!1,isDisabled:!1}},a={render:e=>o`
  <ods-select allow-multiple
              has-error="${e.hasError}"
              is-disabled="${e.isDisabled}"
              multiple-selection-label="${e.multipleSelectionLabel}"
              placeholder="${e.placeholder}">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </ods-select>
  `,argTypes:ao({hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},multipleSelectionLabel:{table:{category:n.general,defaultValue:{summary:"Selected item"},type:{summary:"string"}},control:"text"},placeholder:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{hasError:!1,isDisabled:!1,multipleSelectionLabel:"Selected item"}},s={tags:["isHidden"],render:()=>o`
<ods-select class="my-select"
            placeholder="Select one pet">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
<style>
  .my-select {
    display: inline-block;
    width: 200px;
  }
</style>
  `},i={tags:["isHidden"],render:()=>o(f||(f=so([`
<ods-select id="select-custom-renderer"
            placeholder="Select a Cloud provider">
  <option data-description="OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers."
          data-logo="https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"
          value="ovh">
    OVH Cloud
  </option>
  <option data-description="Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling."
          data-logo="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"
          value="aws">
    Amazon Web Services
  </option>
  <option data-description="Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure."
          data-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
          value="azure">
    Microsoft Azure
  </option>
  <option data-description="Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools."
          data-logo="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
          value="gcp">
    Google Cloud Platform
  </option>
</ods-select>
<script>
  (() => {
    const selectCustomRenderer = document.querySelector('#select-custom-renderer');

    selectCustomRenderer.customRenderer = {
      item: (data) => {
        return \`<div><ods-icon name="check"></ods-icon>&nbsp;\${data.text}</div>\`;
      },
      option: (data) => {
        return \`
  <div style="display: grid; grid-template-columns: max-content 1fr; column-gap: 8px; padding: 8px;">
  <img alt="logo"
     height="50"
     src="\${data.logo}"
     width="50" />
  <div style="display: flex; flex-flow: column; row-gap: 8px;">
    <span style="font-weight: bold;">\${data.text}</span>
    <span>\${data.description}</span>
  </div>
  </div>\`;
      },
    }
  })();
<\/script>
  `],[`
<ods-select id="select-custom-renderer"
            placeholder="Select a Cloud provider">
  <option data-description="OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers."
          data-logo="https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"
          value="ovh">
    OVH Cloud
  </option>
  <option data-description="Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling."
          data-logo="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"
          value="aws">
    Amazon Web Services
  </option>
  <option data-description="Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure."
          data-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
          value="azure">
    Microsoft Azure
  </option>
  <option data-description="Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools."
          data-logo="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
          value="gcp">
    Google Cloud Platform
  </option>
</ods-select>
<script>
  (() => {
    const selectCustomRenderer = document.querySelector('#select-custom-renderer');

    selectCustomRenderer.customRenderer = {
      item: (data) => {
        return \\\`<div><ods-icon name="check"></ods-icon>&nbsp;\\\${data.text}</div>\\\`;
      },
      option: (data) => {
        return \\\`
  <div style="display: grid; grid-template-columns: max-content 1fr; column-gap: 8px; padding: 8px;">
  <img alt="logo"
     height="50"
     src="\\\${data.logo}"
     width="50" />
  <div style="display: flex; flex-flow: column; row-gap: 8px;">
    <span style="font-weight: bold;">\\\${data.text}</span>
    <span>\\\${data.description}</span>
  </div>
  </div>\\\`;
      },
    }
  })();
<\/script>
  `])))},r={tags:["isHidden"],render:()=>o(y||(y=so([`
<ods-select allow-multiple
            id="select-custom-renderer-multiple"
            multiple-selection-label="Selected provider"
            placeholder="Select a Cloud provider">
  <option data-description="OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers."
          data-logo="https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"
          value="ovh">
    OVH Cloud
  </option>
  <option data-description="Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling."
          data-logo="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"
          value="aws">
    Amazon Web Services
  </option>
  <option data-description="Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure."
          data-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
          value="azure">
    Microsoft Azure
  </option>
  <option data-description="Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools."
          data-logo="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
          value="gcp">
    Google Cloud Platform
  </option>
</ods-select>
<script>
  (() => {
    const selectCustomRendererMultiple = document.querySelector('#select-custom-renderer-multiple');

    selectCustomRendererMultiple.customRenderer = {
      option: (data) => {
        return \`
  <div style="display: grid; grid-template-columns: max-content max-content 1fr; column-gap: 8px; padding: 8px;">
  <!-- checkbox will get injected here as first child -->
  <img alt="logo"
     height="50"
     src="\${data.logo}"
     width="50" />
  <div style="display: flex; flex-flow: column; row-gap: 8px;">
    <span style="font-weight: bold;">\${data.text}</span>
    <span>\${data.description}</span>
  </div>
  </div>\`;
      },
    }
  })();
<\/script>
  `],[`
<ods-select allow-multiple
            id="select-custom-renderer-multiple"
            multiple-selection-label="Selected provider"
            placeholder="Select a Cloud provider">
  <option data-description="OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers."
          data-logo="https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"
          value="ovh">
    OVH Cloud
  </option>
  <option data-description="Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling."
          data-logo="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"
          value="aws">
    Amazon Web Services
  </option>
  <option data-description="Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure."
          data-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
          value="azure">
    Microsoft Azure
  </option>
  <option data-description="Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools."
          data-logo="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
          value="gcp">
    Google Cloud Platform
  </option>
</ods-select>
<script>
  (() => {
    const selectCustomRendererMultiple = document.querySelector('#select-custom-renderer-multiple');

    selectCustomRendererMultiple.customRenderer = {
      option: (data) => {
        return \\\`
  <div style="display: grid; grid-template-columns: max-content max-content 1fr; column-gap: 8px; padding: 8px;">
  <!-- checkbox will get injected here as first child -->
  <img alt="logo"
     height="50"
     src="\\\${data.logo}"
     width="50" />
  <div style="display: flex; flex-flow: column; row-gap: 8px;">
    <span style="font-weight: bold;">\\\${data.text}</span>
    <span>\\\${data.description}</span>
  </div>
  </div>\\\`;
      },
    }
  })();
<\/script>
  `])))},l={tags:["isHidden"],render:()=>o`
<ods-select placeholder="Select">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  `},d={tags:["isHidden"],render:()=>o`
<ods-select>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  `},p={tags:["isHidden"],render:()=>o`
<ods-select allow-multiple
            placeholder="Select one or more pets">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  `},c={tags:["isHidden"],render:()=>o`
<ods-select placeholder="Select a country">
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="it">Italy</option>
    <option value="de">Germany</option>
  </optgroup>
  <optgroup label="Asia">
    <option value="cn">China</option>
    <option value="jp">Japan</option>
    <option value="ru">Russia</option>
  </optgroup>
  <optgroup label="North America">
    <option value="ca">Canada</option>
    <option value="mx">Mexico</option>
    <option value="us">United States of America</option>
  </optgroup>
</ods-select>
  `},u={tags:["isHidden"],render:()=>o`
<ods-select is-disabled placeholder="Disabled select">
  <option value="cat">Cat</option>
</ods-select>
  `},m={tags:["isHidden"],render:()=>o`
<ods-select placeholder="Disabled select">
  <option value="dog">Dog</option>
  <option value="cat" disabled>Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  `},g={tags:["isHidden"],render:()=>o`
<ods-select placeholder="Select a country">
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="it">Italy</option>
    <option value="de">Germany</option>
  </optgroup>
  <optgroup label="Asia" disabled>
    <option value="cn">China</option>
    <option value="jp">Japan</option>
    <option value="ru">Russia</option>
  </optgroup>
  <optgroup label="North America">
    <option value="ca">Canada</option>
    <option value="mx">Mexico</option>
    <option value="us">United States of America</option>
  </optgroup>
</ods-select>
  `},v={tags:["isHidden"],render:()=>o`
<ods-select is-readonly placeholder="Readonly select">
  <option value="cat">Cat</option>
</ods-select>
  `};var b,w,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-select has-error="\${arg.hasError}"
              is-disabled="\${arg.isDisabled}"
              placeholder="\${arg.placeholder}">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </ods-select>
  \`,
  argTypes: orderControls({
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    }
  }),
  args: {
    hasError: false,
    isDisabled: false
  }
}`,...(S=(w=t.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,x,A;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-select allow-multiple
              has-error="\${arg.hasError}"
              is-disabled="\${arg.isDisabled}"
              multiple-selection-label="\${arg.multipleSelectionLabel}"
              placeholder="\${arg.placeholder}">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </ods-select>
  \`,
  argTypes: orderControls({
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    multipleSelectionLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Selected item'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    }
  }),
  args: {
    hasError: false,
    isDisabled: false,
    multipleSelectionLabel: 'Selected item'
  }
}`,...(A=(x=a.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var z,O,H;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select class="my-select"
            placeholder="Select one pet">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
<style>
  .my-select {
    display: inline-block;
    width: 200px;
  }
</style>
  \`
}`,...(H=(O=s.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var G,M,P;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select id="select-custom-renderer"
            placeholder="Select a Cloud provider">
  <option data-description="OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers."
          data-logo="https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"
          value="ovh">
    OVH Cloud
  </option>
  <option data-description="Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling."
          data-logo="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"
          value="aws">
    Amazon Web Services
  </option>
  <option data-description="Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure."
          data-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
          value="azure">
    Microsoft Azure
  </option>
  <option data-description="Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools."
          data-logo="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
          value="gcp">
    Google Cloud Platform
  </option>
</ods-select>
<script>
  (() => {
    const selectCustomRenderer = document.querySelector('#select-custom-renderer');

    selectCustomRenderer.customRenderer = {
      item: (data) => {
        return \\\`<div><ods-icon name="check"></ods-icon>&nbsp;\\\${data.text}</div>\\\`;
      },
      option: (data) => {
        return \\\`
  <div style="display: grid; grid-template-columns: max-content 1fr; column-gap: 8px; padding: 8px;">
  <img alt="logo"
     height="50"
     src="\\\${data.logo}"
     width="50" />
  <div style="display: flex; flex-flow: column; row-gap: 8px;">
    <span style="font-weight: bold;">\\\${data.text}</span>
    <span>\\\${data.description}</span>
  </div>
  </div>\\\`;
      },
    }
  })();
<\/script>
  \`
}`,...(P=(M=i.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var R,_,D;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select allow-multiple
            id="select-custom-renderer-multiple"
            multiple-selection-label="Selected provider"
            placeholder="Select a Cloud provider">
  <option data-description="OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers."
          data-logo="https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"
          value="ovh">
    OVH Cloud
  </option>
  <option data-description="Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling."
          data-logo="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"
          value="aws">
    Amazon Web Services
  </option>
  <option data-description="Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure."
          data-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
          value="azure">
    Microsoft Azure
  </option>
  <option data-description="Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools."
          data-logo="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
          value="gcp">
    Google Cloud Platform
  </option>
</ods-select>
<script>
  (() => {
    const selectCustomRendererMultiple = document.querySelector('#select-custom-renderer-multiple');

    selectCustomRendererMultiple.customRenderer = {
      option: (data) => {
        return \\\`
  <div style="display: grid; grid-template-columns: max-content max-content 1fr; column-gap: 8px; padding: 8px;">
  <!-- checkbox will get injected here as first child -->
  <img alt="logo"
     height="50"
     src="\\\${data.logo}"
     width="50" />
  <div style="display: flex; flex-flow: column; row-gap: 8px;">
    <span style="font-weight: bold;">\\\${data.text}</span>
    <span>\\\${data.description}</span>
  </div>
  </div>\\\`;
      },
    }
  })();
<\/script>
  \`
}`,...(D=(_=r.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var V,$,k;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select placeholder="Select">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  \`
}`,...(k=($=l.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var E,j,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  \`
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var T,N,L;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select allow-multiple
            placeholder="Select one or more pets">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  \`
}`,...(L=(N=p.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var F,W,Y;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select placeholder="Select a country">
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="it">Italy</option>
    <option value="de">Germany</option>
  </optgroup>
  <optgroup label="Asia">
    <option value="cn">China</option>
    <option value="jp">Japan</option>
    <option value="ru">Russia</option>
  </optgroup>
  <optgroup label="North America">
    <option value="ca">Canada</option>
    <option value="mx">Mexico</option>
    <option value="us">United States of America</option>
  </optgroup>
</ods-select>
  \`
}`,...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var q,J,U;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select is-disabled placeholder="Disabled select">
  <option value="cat">Cat</option>
</ods-select>
  \`
}`,...(U=(J=u.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var B,K,Q;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select placeholder="Disabled select">
  <option value="dog">Dog</option>
  <option value="cat" disabled>Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
  \`
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,oo;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select placeholder="Select a country">
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="it">Italy</option>
    <option value="de">Germany</option>
  </optgroup>
  <optgroup label="Asia" disabled>
    <option value="cn">China</option>
    <option value="jp">Japan</option>
    <option value="ru">Russia</option>
  </optgroup>
  <optgroup label="North America">
    <option value="ca">Canada</option>
    <option value="mx">Mexico</option>
    <option value="us">United States of America</option>
  </optgroup>
</ods-select>
  \`
}`,...(oo=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:oo.source}}};var eo,no,to;v.parameters={...v.parameters,docs:{...(eo=v.parameters)==null?void 0:eo.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select is-readonly placeholder="Readonly select">
  <option value="cat">Cat</option>
</ods-select>
  \`
}`,...(to=(no=v.parameters)==null?void 0:no.docs)==null?void 0:to.source}}};const po=["Demo","DemoMultiple","CustomCSS","CustomRenderer","CustomRendererMultiple","Overview","Default","Multiple","Optgroup","Disabled","DisabledOption","DisabledGroupOfOptions","Readonly"],mo=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:s,CustomRenderer:i,CustomRendererMultiple:r,Default:d,Demo:t,DemoMultiple:a,Disabled:u,DisabledGroupOfOptions:g,DisabledOption:m,Multiple:p,Optgroup:c,Overview:l,Readonly:v,__namedExportsOrder:po,default:lo},Symbol.toStringTag,{value:"Module"}));export{s as C,d as D,p as M,l as O,v as R,mo as S,c as a,u as b,m as c,g as d,i as e,r as f};
