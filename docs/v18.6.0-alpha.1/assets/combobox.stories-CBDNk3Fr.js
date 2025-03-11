import{d as eo}from"./ods-combobox2-BXJ8jrhz.js";import{x as t,T as n,o as oo,C as e}from"./controls-DX883vx3.js";import{V as to}from"./validityState-BuENXwQ9.js";const no=eo;var g=Object.freeze,ao=Object.defineProperty,mo=(o,io)=>g(ao(o,"raw",{value:g(o.slice())})),v;no();const so={title:"ODS Components/Form elements/Combobox",component:"ods-combobox",decorators:[o=>t`<div style="min-height: 200px;">${o()}</div>`]},a={render:o=>t`
      <ods-combobox
        add-new-element-label="${o.addNewElementLabel||n}"
        has-error="${o.hasError}"
        highlight-results="${o.highlightResults}"
        is-clearable="${o.isClearable}"
        is-disabled="${o.isDisabled}"
        is-loading="${o.isLoading}"
        is-readonly="${o.isReadonly}"
        no-result-label="${o.noResultLabel||n}"
        placeholder="${o.placeholder||n}">
        <ods-combobox-item value="chocolate">
          Chocolate
        </ods-combobox-item>
        <ods-combobox-item value="chocolate-with-nuts">
          Chocolate with nuts
        </ods-combobox-item>
        <ods-combobox-item value="coconut">
          Coconut
        </ods-combobox-item>
        <ods-combobox-item value="light-mint">
          Light mint
        </ods-combobox-item>
        <ods-combobox-item value="mint">
          Mint
        </ods-combobox-item>
        <ods-combobox-item value="strawberry">
          Strawberry
        </ods-combobox-item>
        <ods-combobox-item value="vanilla">
          Vanilla
        </ods-combobox-item>
        <ods-combobox-item value="white-chocolate">
          White chocolate
        </ods-combobox-item>
      </ods-combobox>
    `,argTypes:oo({addNewElementLabel:{table:{category:e.general,defaultValue:{summary:"Add"},type:{summary:"string"}},control:"text"},hasError:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},highlightResults:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},noResultLabel:{table:{category:e.general,defaultValue:{summary:"No results found"},type:{summary:"string"}},control:"text"},placeholder:{table:{category:e.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{hasError:!1,highlightResults:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isReadonly:!1}},m={render:o=>t`
      <ods-combobox
        add-new-element-label="${o.addNewElementLabel||n}"
        allow-multiple
        has-error="${o.hasError}"
        highlight-results="${o.highlightResults}"
        is-clearable="${o.isClearable}"
        is-disabled="${o.isDisabled}"
        is-loading="${o.isLoading}"
        is-readonly="${o.isReadonly}"
        no-result-label="${o.noResultLabel||n}"
        placeholder="${o.placeholder||n}">
        <ods-combobox-item value="chocolate">
          Chocolate
        </ods-combobox-item>
        <ods-combobox-item value="chocolate-with-nuts">
          Chocolate with nuts
        </ods-combobox-item>
        <ods-combobox-item value="coconut">
          Coconut
        </ods-combobox-item>
        <ods-combobox-item value="light-mint">
          Light mint
        </ods-combobox-item>
        <ods-combobox-item value="mint">
          Mint
        </ods-combobox-item>
        <ods-combobox-item value="strawberry">
          Strawberry
        </ods-combobox-item>
        <ods-combobox-item value="vanilla">
          Vanilla
        </ods-combobox-item>
        <ods-combobox-item value="white-chocolate">
          White chocolate
        </ods-combobox-item>
      </ods-combobox>
    `,argTypes:oo({addNewElementLabel:{table:{category:e.general,defaultValue:{summary:"Add"},type:{summary:"string"}},control:"text"},hasError:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},highlightResults:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:e.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},noResultLabel:{table:{category:e.general,defaultValue:{summary:"No results found"},type:{summary:"string"}},control:"text"},placeholder:{table:{category:e.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{hasError:!1,highlightResults:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isReadonly:!1}},s={tags:["isHidden"],render:()=>t`
<label for="combobox-clearable-single">Single</label>
<ods-combobox id="combobox-clearable-single" is-clearable>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>

<br /><br />

<label for="combobox-clearable-multiple">Multiple</label>
<ods-combobox allow-multiple id="combobox-clearable-multiple" is-clearable>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `},l={tags:["isHidden"],render:()=>t`
<ods-combobox allow-multiple style="width: 100%;">
  <ods-combobox-item selection-label="OVH" value="ovh">
    <div class="custom-item">
      <img alt="logo"
           src="https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">OVH Cloud</span>
        <span>OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers.</span>
      </div>
    </div>
  </ods-combobox-item>
  <ods-combobox-item selection-label="AWS" value="aws">
    <div class="custom-item">
      <img alt="logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/langfr-2560px-Amazon_Web_Services_Logo.svg.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">Amazon Web Services</span>
        <span>Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.</span>
      </div>
    </div>
  </ods-combobox-item>
  <ods-combobox-item selection-label="Azure" value="azure">
    <div class="custom-item">
      <img alt="logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">Microsoft Azure</span>
        <span>Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure.</span>
      </div>
    </div>
  </ods-combobox-item>
  <ods-combobox-item selection-label="GCP" value="gcp">
    <div class="custom-item">
      <img alt="logo"
           src="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">Google Cloud Platform</span>
        <span>Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools.</span>
      </div>
    </div>
  </ods-combobox-item>
</ods-combobox>
<style>
  .custom-item {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 8px;
    padding: 8px;
  }

  .custom-item__content {
    display: flex;
    flex-flow: column;
    row-gap: 8px;
  }

  .custom-item__content__title {
    font-weight: bold;
  }
</style>
  `},i={tags:["isHidden"],render:()=>t`
<ods-combobox>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `},b={tags:["isHidden"],render:()=>t`
<ods-combobox is-disabled>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `},c={tags:["isHidden"],render:()=>t(v||(v=mo([`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-combobox">
  <div class="combobox-container">
    <ods-combobox class="combobox" strategy="fixed">
      <ods-combobox-item value="chocolate">
        Chocolate
      </ods-combobox-item>
      <ods-combobox-item value="chocolate-with-nuts">
        Chocolate with nuts
      </ods-combobox-item>
      <ods-combobox-item value="coconut">
        Coconut
      </ods-combobox-item>
      <ods-combobox-item value="light-mint">
        Light mint
      </ods-combobox-item>
      <ods-combobox-item value="mint">
        Mint
      </ods-combobox-item>
      <ods-combobox-item value="strawberry">
        Strawberry
      </ods-combobox-item>
      <ods-combobox-item value="vanilla">
        Vanilla
      </ods-combobox-item>
      <ods-combobox-item value="white-chocolate">
        White chocolate
      </ods-combobox-item>
    </ods-combobox>
  </div>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-combobox');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
<\/script>

<style>
  .combobox,
  .combobox-container {
    width: 200px;
    height: var(--ods-form-element-input-height);
  }
</style>
  `])))},d={tags:["isHidden"],render:()=>t`
<ods-combobox id="group">
  <ods-combobox-group>
    <span slot="title">Flavours</span>

    <ods-combobox-item value="chocolate">
      Chocolate
    </ods-combobox-item>
    <ods-combobox-item value="chocolate-with-nuts">
      Chocolate with nuts
    </ods-combobox-item>
    <ods-combobox-item value="coconut">
      Coconut
    </ods-combobox-item>
    <ods-combobox-item value="light-mint">
      Light mint
    </ods-combobox-item>
    <ods-combobox-item value="mint">
      Mint
    </ods-combobox-item>
    <ods-combobox-item value="strawberry">
      Strawberry
    </ods-combobox-item>
    <ods-combobox-item value="vanilla">
      Vanilla
    </ods-combobox-item>
    <ods-combobox-item value="white-chocolate">
      White chocolate
    </ods-combobox-item>
  </ods-combobox-group>

  <ods-combobox-group>
    <span slot="title">Animals</span>

    <ods-combobox-item value="dog">
      Dog
    </ods-combobox-item>
    <ods-combobox-item value="cat">
      Cat
    </ods-combobox-item>
    <ods-combobox-item value="hamster">
      Hamster
    </ods-combobox-item>
    <ods-combobox-item value="parrot">
      Parrot
    </ods-combobox-item>
    <ods-combobox-item value="spider">
      Spider
    </ods-combobox-item>
    <ods-combobox-item value="goldfish">
      Goldfish
    </ods-combobox-item>
  </ods-combobox-group>

  <ods-combobox-item value="some-item">
    Some non grouped item
  </ods-combobox-item>
  <ods-combobox-item value="other-item">
    Other non grouped item
  </ods-combobox-item>
</ods-combobox>
  `},r={tags:["isHidden"],render:()=>t`
<ods-combobox allow-multiple>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `},u={tags:["isHidden"],parameters:{layout:"centered"},render:()=>t`
<ods-combobox placeholder="Combobox">
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `},x={tags:["isHidden"],render:()=>t`
<ods-combobox is-readonly>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  `},h={tags:["isHidden"],render:()=>t`
<ods-combobox is-required id="combobox-validity-state-demo">
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
${to("combobox","#combobox-validity-state-demo")}
  `};var p,y,w;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: arg => {
    return html\`
      <ods-combobox
        add-new-element-label="\${arg.addNewElementLabel || nothing}"
        has-error="\${arg.hasError}"
        highlight-results="\${arg.highlightResults}"
        is-clearable="\${arg.isClearable}"
        is-disabled="\${arg.isDisabled}"
        is-loading="\${arg.isLoading}"
        is-readonly="\${arg.isReadonly}"
        no-result-label="\${arg.noResultLabel || nothing}"
        placeholder="\${arg.placeholder || nothing}">
        <ods-combobox-item value="chocolate">
          Chocolate
        </ods-combobox-item>
        <ods-combobox-item value="chocolate-with-nuts">
          Chocolate with nuts
        </ods-combobox-item>
        <ods-combobox-item value="coconut">
          Coconut
        </ods-combobox-item>
        <ods-combobox-item value="light-mint">
          Light mint
        </ods-combobox-item>
        <ods-combobox-item value="mint">
          Mint
        </ods-combobox-item>
        <ods-combobox-item value="strawberry">
          Strawberry
        </ods-combobox-item>
        <ods-combobox-item value="vanilla">
          Vanilla
        </ods-combobox-item>
        <ods-combobox-item value="white-chocolate">
          White chocolate
        </ods-combobox-item>
      </ods-combobox>
    \`;
  },
  argTypes: orderControls({
    addNewElementLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Add'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
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
    highlightResults: {
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
    isClearable: {
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
    isLoading: {
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
    noResultLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'No results found'
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
    highlightResults: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false
  }
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var f,C,_;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: arg => {
    return html\`
      <ods-combobox
        add-new-element-label="\${arg.addNewElementLabel || nothing}"
        allow-multiple
        has-error="\${arg.hasError}"
        highlight-results="\${arg.highlightResults}"
        is-clearable="\${arg.isClearable}"
        is-disabled="\${arg.isDisabled}"
        is-loading="\${arg.isLoading}"
        is-readonly="\${arg.isReadonly}"
        no-result-label="\${arg.noResultLabel || nothing}"
        placeholder="\${arg.placeholder || nothing}">
        <ods-combobox-item value="chocolate">
          Chocolate
        </ods-combobox-item>
        <ods-combobox-item value="chocolate-with-nuts">
          Chocolate with nuts
        </ods-combobox-item>
        <ods-combobox-item value="coconut">
          Coconut
        </ods-combobox-item>
        <ods-combobox-item value="light-mint">
          Light mint
        </ods-combobox-item>
        <ods-combobox-item value="mint">
          Mint
        </ods-combobox-item>
        <ods-combobox-item value="strawberry">
          Strawberry
        </ods-combobox-item>
        <ods-combobox-item value="vanilla">
          Vanilla
        </ods-combobox-item>
        <ods-combobox-item value="white-chocolate">
          White chocolate
        </ods-combobox-item>
      </ods-combobox>
    \`;
  },
  argTypes: orderControls({
    addNewElementLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Add'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
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
    highlightResults: {
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
    isClearable: {
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
    isLoading: {
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
    noResultLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'No results found'
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
    highlightResults: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false
  }
}`,...(_=(C=m.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var O,V,L;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<label for="combobox-clearable-single">Single</label>
<ods-combobox id="combobox-clearable-single" is-clearable>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>

<br /><br />

<label for="combobox-clearable-multiple">Multiple</label>
<ods-combobox allow-multiple id="combobox-clearable-multiple" is-clearable>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  \`
}`,...(L=(V=s.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var R,S,A;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-combobox allow-multiple style="width: 100%;">
  <ods-combobox-item selection-label="OVH" value="ovh">
    <div class="custom-item">
      <img alt="logo"
           src="https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">OVH Cloud</span>
        <span>OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers.</span>
      </div>
    </div>
  </ods-combobox-item>
  <ods-combobox-item selection-label="AWS" value="aws">
    <div class="custom-item">
      <img alt="logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/langfr-2560px-Amazon_Web_Services_Logo.svg.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">Amazon Web Services</span>
        <span>Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.</span>
      </div>
    </div>
  </ods-combobox-item>
  <ods-combobox-item selection-label="Azure" value="azure">
    <div class="custom-item">
      <img alt="logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">Microsoft Azure</span>
        <span>Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure.</span>
      </div>
    </div>
  </ods-combobox-item>
  <ods-combobox-item selection-label="GCP" value="gcp">
    <div class="custom-item">
      <img alt="logo"
           src="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
           width="50" />
      <div class="custom-item__content">
        <span class="custom-item__content__title">Google Cloud Platform</span>
        <span>Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools.</span>
      </div>
    </div>
  </ods-combobox-item>
</ods-combobox>
<style>
  .custom-item {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 8px;
    padding: 8px;
  }

  .custom-item__content {
    display: flex;
    flex-flow: column;
    row-gap: 8px;
  }

  .custom-item__content__title {
    font-weight: bold;
  }
</style>
  \`
}`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var E,T,M;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-combobox>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  \`
}`,...(M=(T=i.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var $,G,W;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-combobox is-disabled>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  \`
}`,...(W=(G=b.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var H,z,N;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-button id="modal-button"
            label="Open Modal">
</ods-button>
<ods-modal id="modal-combobox">
  <div class="combobox-container">
    <ods-combobox class="combobox" strategy="fixed">
      <ods-combobox-item value="chocolate">
        Chocolate
      </ods-combobox-item>
      <ods-combobox-item value="chocolate-with-nuts">
        Chocolate with nuts
      </ods-combobox-item>
      <ods-combobox-item value="coconut">
        Coconut
      </ods-combobox-item>
      <ods-combobox-item value="light-mint">
        Light mint
      </ods-combobox-item>
      <ods-combobox-item value="mint">
        Mint
      </ods-combobox-item>
      <ods-combobox-item value="strawberry">
        Strawberry
      </ods-combobox-item>
      <ods-combobox-item value="vanilla">
        Vanilla
      </ods-combobox-item>
      <ods-combobox-item value="white-chocolate">
        White chocolate
      </ods-combobox-item>
    </ods-combobox>
  </div>
</ods-modal>

<script>
  (() => {
    const modalButton = document.querySelector('#modal-button');
    const modalElement = document.querySelector('#modal-combobox');

    modalButton.addEventListener('click', () => {
      modalElement.open();
    });
  })();
<\/script>

<style>
  .combobox,
  .combobox-container {
    width: 200px;
    height: var(--ods-form-element-input-height);
  }
</style>
  \`
}`,...(N=(z=c.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var D,Y,P;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-combobox id="group">
  <ods-combobox-group>
    <span slot="title">Flavours</span>

    <ods-combobox-item value="chocolate">
      Chocolate
    </ods-combobox-item>
    <ods-combobox-item value="chocolate-with-nuts">
      Chocolate with nuts
    </ods-combobox-item>
    <ods-combobox-item value="coconut">
      Coconut
    </ods-combobox-item>
    <ods-combobox-item value="light-mint">
      Light mint
    </ods-combobox-item>
    <ods-combobox-item value="mint">
      Mint
    </ods-combobox-item>
    <ods-combobox-item value="strawberry">
      Strawberry
    </ods-combobox-item>
    <ods-combobox-item value="vanilla">
      Vanilla
    </ods-combobox-item>
    <ods-combobox-item value="white-chocolate">
      White chocolate
    </ods-combobox-item>
  </ods-combobox-group>

  <ods-combobox-group>
    <span slot="title">Animals</span>

    <ods-combobox-item value="dog">
      Dog
    </ods-combobox-item>
    <ods-combobox-item value="cat">
      Cat
    </ods-combobox-item>
    <ods-combobox-item value="hamster">
      Hamster
    </ods-combobox-item>
    <ods-combobox-item value="parrot">
      Parrot
    </ods-combobox-item>
    <ods-combobox-item value="spider">
      Spider
    </ods-combobox-item>
    <ods-combobox-item value="goldfish">
      Goldfish
    </ods-combobox-item>
  </ods-combobox-group>

  <ods-combobox-item value="some-item">
    Some non grouped item
  </ods-combobox-item>
  <ods-combobox-item value="other-item">
    Other non grouped item
  </ods-combobox-item>
</ods-combobox>
  \`
}`,...(P=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var k,F,j;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-combobox allow-multiple>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  \`
}`,...(j=(F=r.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var I,q,B;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-combobox placeholder="Combobox">
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  \`
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-combobox is-readonly>
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
  \`
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-combobox is-required id="combobox-validity-state-demo">
  <ods-combobox-item value="chocolate">
    Chocolate
  </ods-combobox-item>
  <ods-combobox-item value="chocolate-with-nuts">
    Chocolate with nuts
  </ods-combobox-item>
  <ods-combobox-item value="coconut">
    Coconut
  </ods-combobox-item>
  <ods-combobox-item value="light-mint">
    Light mint
  </ods-combobox-item>
  <ods-combobox-item value="mint">
    Mint
  </ods-combobox-item>
  <ods-combobox-item value="strawberry">
    Strawberry
  </ods-combobox-item>
  <ods-combobox-item value="vanilla">
    Vanilla
  </ods-combobox-item>
  <ods-combobox-item value="white-chocolate">
    White chocolate
  </ods-combobox-item>
</ods-combobox>
\${ValidityStateTemplate('combobox', '#combobox-validity-state-demo')}
  \`
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const lo=["Demo","DemoMultiple","Clearable","CustomItems","Default","Disabled","FixedContext","Group","Multiple","Overview","Readonly","ValidityState"],uo=Object.freeze(Object.defineProperty({__proto__:null,Clearable:s,CustomItems:l,Default:i,Demo:a,DemoMultiple:m,Disabled:b,FixedContext:c,Group:d,Multiple:r,Overview:u,Readonly:x,ValidityState:h,__namedExportsOrder:lo,default:so},Symbol.toStringTag,{value:"Module"}));export{uo as C,i as D,c as F,d as G,r as M,u as O,x as R,h as V,s as a,b,l as c};
