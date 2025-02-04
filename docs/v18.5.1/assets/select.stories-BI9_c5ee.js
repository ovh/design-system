import{d as ue}from"./ods-select2-B4wr0dem.js";import{x as o,o as de,C as n}from"./controls-DX883vx3.js";import{V as h}from"./validityState-BuENXwQ9.js";const me=ue;var y=Object.freeze,ge=Object.defineProperty,pe=(e,ce)=>y(ge(e,"raw",{value:y(ce||e.slice())})),b,S;me();const ve={title:"ODS Components/Form elements/Select",component:"ods-select",decorators:[e=>o`<div style="min-height: 200px;">${e()}</div>`]},t={render:e=>o`
    <ods-select class="my-select-demo"
                has-error="${e.hasError}"
                is-disabled="${e.isDisabled}"
                is-readonly="${e.isReadonly}"
                is-required="${e.isRequired}"
                placeholder="${e.placeholder}">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </ods-select>
    ${e.validityState?h("select",".my-select-demo"):""}
  `,argTypes:de({hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}}},placeholder:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},validityState:{table:{category:n.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isDisabled:!1,isReadonly:!1,isRequired:!1,validityState:!1}},a={render:e=>o`
    <ods-select allow-multiple
                class="my-select-demo-multiple"
                has-error="${e.hasError}"
                is-disabled="${e.isDisabled}"
                is-readonly="${e.isReadonly}"
                is-required="${e.isRequired}"
                multiple-selection-label="${e.multipleSelectionLabel}"
                placeholder="${e.placeholder}">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </ods-select>
    ${e.validityState?h("select",".my-select-demo-multiple"):""}
  `,argTypes:de({hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}}},multipleSelectionLabel:{table:{category:n.general,defaultValue:{summary:"Selected item"},type:{summary:"string"}},control:"text"},placeholder:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},validityState:{table:{category:n.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isDisabled:!1,isReadonly:!1,isRequired:!1,multipleSelectionLabel:"Selected item",validityState:!1}},s={tags:["isHidden"],render:()=>o`
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
  `},i={tags:["isHidden"],render:()=>o(b||(b=pe([`
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
  `])))},l={tags:["isHidden"],render:()=>o(S||(S=pe([`
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
  `])))},r={tags:["isHidden"],render:()=>o`
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
  `},f={tags:["isHidden"],render:()=>o`
<ods-select is-required id="select-validity-state-demo">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
${h("select","#select-validity-state-demo")}
  `};var C,w,A;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-select class="my-select-demo"
                has-error="\${arg.hasError}"
                is-disabled="\${arg.isDisabled}"
                is-readonly="\${arg.isReadonly}"
                is-required="\${arg.isRequired}"
                placeholder="\${arg.placeholder}">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </ods-select>
    \${arg.validityState ? ValidityStateTemplate('select', '.my-select-demo') : ''}
  \`;
  },
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
    isReadonly: {
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
    isRequired: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      }
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
    },
    validityState: {
      table: {
        category: CONTROL_CATEGORY.validation,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState'
    }
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
    validityState: false
  }
}`,...(A=(w=t.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var x,O,R;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-select allow-multiple
                class="my-select-demo-multiple"
                has-error="\${arg.hasError}"
                is-disabled="\${arg.isDisabled}"
                is-readonly="\${arg.isReadonly}"
                is-required="\${arg.isRequired}"
                multiple-selection-label="\${arg.multipleSelectionLabel}"
                placeholder="\${arg.placeholder}">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </ods-select>
    \${arg.validityState ? ValidityStateTemplate('select', '.my-select-demo-multiple') : ''}
  \`;
  },
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
    isReadonly: {
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
    isRequired: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      }
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
    },
    validityState: {
      table: {
        category: CONTROL_CATEGORY.validation,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState'
    }
  }),
  args: {
    hasError: false,
    isDisabled: false,
    isReadonly: false,
    isRequired: false,
    multipleSelectionLabel: 'Selected item',
    validityState: false
  }
}`,...(R=(O=a.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var z,G,H;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(G=s.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var V,_,$;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(_=i.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var P,M,D;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(D=(M=l.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var T,E,k;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(E=r.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var q,N,j;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var I,L,Y;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(Y=(L=p.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var F,W,J;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(J=(W=c.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var U,B,K;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select is-disabled placeholder="Disabled select">
  <option value="cat">Cat</option>
</ods-select>
  \`
}`,...(K=(B=u.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var Q,X,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,oe,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var te,ae,se;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select is-readonly placeholder="Readonly select">
  <option value="cat">Cat</option>
</ods-select>
  \`
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,le,re;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-select is-required id="select-validity-state-demo">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</ods-select>
\${ValidityStateTemplate('select', '#select-validity-state-demo')}
  \`
}`,...(re=(le=f.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};const fe=["Demo","DemoMultiple","CustomCSS","CustomRenderer","CustomRendererMultiple","Overview","Default","Multiple","Optgroup","Disabled","DisabledOption","DisabledGroupOfOptions","Readonly","ValidityState"],Se=Object.freeze(Object.defineProperty({__proto__:null,CustomCSS:s,CustomRenderer:i,CustomRendererMultiple:l,Default:d,Demo:t,DemoMultiple:a,Disabled:u,DisabledGroupOfOptions:g,DisabledOption:m,Multiple:p,Optgroup:c,Overview:r,Readonly:v,ValidityState:f,__namedExportsOrder:fe,default:ve},Symbol.toStringTag,{value:"Module"}));export{s as C,d as D,p as M,r as O,v as R,Se as S,f as V,c as a,u as b,m as c,g as d,i as e,l as f};
