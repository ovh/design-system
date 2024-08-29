import{B as b,o as y}from"./index-DB8q6ij-.js";import{x as r}from"./lit-html-D-ZEPr28.js";import{o as X,C as n}from"./control-C1r2wu67.js";var h=Object.freeze,Z=Object.defineProperty,ee=(e,W)=>h(Z(e,"raw",{value:h(W||e.slice())})),g;const ne={title:"ODS Components/Form elements/Phone Number",component:"ods-phone-number"},a={render:e=>r`
    <ods-phone-number class="my-phone-number"
                      ariaLabel="${e.ariaLabel}"
                      ariaLabelledby="${e.ariaLabelledby}"
                      countries="${e.countries?"all":null}"
                      has-error="${e.hasError}"
                      is-clearable="${e.isClearable}"
                      is-disabled="${e.isDisabled}"
                      is-loading="${e.isLoading}"
                      is-readonly="${e.isReadonly}"
                      iso-code="${e.isoCode}"
                      locale="${e.locale}"
                      pattern="${e.pattern}">
    </ods-phone-number>
    <style>
      .my-phone-number::part(input) {
        ${e.customInputCss}
      }
      .my-phone-number::part(select) {
        ${e.customSelectCss}
      }
    </style>
  `,argTypes:X({ariaLabel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},countries:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"boolean",description:'Toggle this to demo the "all" preset. To fine-tune the list of countries, check the prop documentation.'},customInputCss:{table:{category:n.design,defaultValue:{summary:"ø"}},control:"text",description:'Set a custom style properties to apply to the input. Example: "width: 100px;"'},customSelectCss:{table:{category:n.design,defaultValue:{summary:"ø"}},control:"text",description:'Set a custom style properties to apply to the select. Example: "width: 100px;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isoCode:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:b}},control:{type:"select"},options:b},locale:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:y}},control:{type:"select"},options:y},pattern:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{countries:!1,hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isReadonly:!1}},o={tags:["isHidden"],render:()=>r`
<ods-phone-number is-clearable></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-clearable>
</ods-phone-number>
  `},s={tags:["isHidden"],render:()=>r`
<ods-phone-number class="my-phone-number"></ods-phone-number>
<style>
  .my-phone-number::part(input) {
    width: 100px;
  }
  .my-phone-number::part(select) {
    width: 100px;
  }
</style>
  `},t={tags:["isHidden"],parameters:{layout:"centered"},render:()=>r`
<ods-phone-number countries="all"></ods-phone-number>
  `},l={tags:["isHidden"],render:()=>r`
<ods-phone-number></ods-phone-number>
  `},d={tags:["isHidden"],render:()=>r`
<ods-phone-number is-disabled></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-disabled>
</ods-phone-number>
  `},u={tags:["isHidden"],render:()=>r`
    <ods-phone-number has-error></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      has-error>
    </ods-phone-number>
  `},m={tags:["isHidden"],render:()=>r`
    <ods-phone-number is-loading></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      is-loading>
    </ods-phone-number>
  `},i={tags:["isHidden"],render:()=>r`
    <ods-phone-number countries="all"
                      locale="fr">
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      locale="en">
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      locale="de">
    </ods-phone-number>
  `},c={tags:["isHidden"],render:()=>r`
    <ods-phone-number countries="all"
                      iso-code="br">
    </ods-phone-number>
  `},p={tags:["isHidden"],render:()=>r(g||(g=ee([`
    <ods-phone-number pattern="\\d*">
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      pattern="\\d*">
    </ods-phone-number>
    <script>
      (() => {
        document.querySelectorAll('ods-phone-number').forEach((el) => {
            el.addEventListener('odsChange', function(event) {
              this.hasError = !event.detail.validity.valid;
            });
        });
      })();
    <\/script>
  `],[`
    <ods-phone-number pattern="\\\\d*">
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      pattern="\\\\d*">
    </ods-phone-number>
    <script>
      (() => {
        document.querySelectorAll('ods-phone-number').forEach((el) => {
            el.addEventListener('odsChange', function(event) {
              this.hasError = !event.detail.validity.valid;
            });
        });
      })();
    <\/script>
  `])))};var O,f,C;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: arg => html\`
    <ods-phone-number class="my-phone-number"
                      ariaLabel="\${arg.ariaLabel}"
                      ariaLabelledby="\${arg.ariaLabelledby}"
                      countries="\${arg.countries ? 'all' : null}"
                      has-error="\${arg.hasError}"
                      is-clearable="\${arg.isClearable}"
                      is-disabled="\${arg.isDisabled}"
                      is-loading="\${arg.isLoading}"
                      is-readonly="\${arg.isReadonly}"
                      iso-code="\${arg.isoCode}"
                      locale="\${arg.locale}"
                      pattern="\${arg.pattern}">
    </ods-phone-number>
    <style>
      .my-phone-number::part(input) {
        \${arg.customInputCss}
      }
      .my-phone-number::part(select) {
        \${arg.customSelectCss}
      }
    </style>
  \`,
  argTypes: orderControls({
    ariaLabel: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    ariaLabelledby: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    countries: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'boolean',
      description: 'Toggle this to demo the "all" preset. To fine-tune the list of countries, check the prop documentation.'
    },
    customInputCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text',
      description: 'Set a custom style properties to apply to the input. Example: "width: 100px;"'
    },
    customSelectCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        }
      },
      control: 'text',
      description: 'Set a custom style properties to apply to the select. Example: "width: 100px;"'
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
    isoCode: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: ODS_PHONE_NUMBER_COUNTRY_ISO_CODES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_PHONE_NUMBER_COUNTRY_ISO_CODES
    },
    locale: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: ODS_PHONE_NUMBER_LOCALES
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_PHONE_NUMBER_LOCALES
    },
    pattern: {
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
    countries: false,
    hasError: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false
  }
}`,...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var E,_,S;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number is-clearable></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-clearable>
</ods-phone-number>
  \`
}`,...(S=(_=o.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var L,R,T;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number class="my-phone-number"></ods-phone-number>
<style>
  .my-phone-number::part(input) {
    width: 100px;
  }
  .my-phone-number::part(select) {
    width: 100px;
  }
</style>
  \`
}`,...(T=(R=s.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var x,N,V;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-phone-number countries="all"></ods-phone-number>
  \`
}`,...(V=(N=t.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var $,v,H;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number></ods-phone-number>
  \`
}`,...(H=(v=l.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var D,A,Y;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number is-disabled></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-disabled>
</ods-phone-number>
  \`
}`,...(Y=(A=d.parameters)==null?void 0:A.docs)==null?void 0:Y.source}}};var G,P,w;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number has-error></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      has-error>
    </ods-phone-number>
  \`
}`,...(w=(P=u.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var I,F,U;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number is-loading></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      is-loading>
    </ods-phone-number>
  \`
}`,...(U=(F=m.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var B,M,j;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number countries="all"
                      locale="fr">
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      locale="en">
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      locale="de">
    </ods-phone-number>
  \`
}`,...(j=(M=i.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var q,z,k;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number countries="all"
                      iso-code="br">
    </ods-phone-number>
  \`
}`,...(k=(z=c.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number pattern="\\\\d*">
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      pattern="\\\\d*">
    </ods-phone-number>
    <script>
      (() => {
        document.querySelectorAll('ods-phone-number').forEach((el) => {
            el.addEventListener('odsChange', function(event) {
              this.hasError = !event.detail.validity.valid;
            });
        });
      })();
    <\/script>
  \`
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const re=["Demo","Clearable","CustomCSS","Overview","Default","Disabled","Error","Loading","Locale","ISOCode","Pattern"],te=Object.freeze(Object.defineProperty({__proto__:null,Clearable:o,CustomCSS:s,Default:l,Demo:a,Disabled:d,Error:u,ISOCode:c,Loading:m,Locale:i,Overview:t,Pattern:p,__namedExportsOrder:re,default:ne},Symbol.toStringTag,{value:"Module"}));export{s as C,l as D,u as E,c as I,m as L,t as O,te as P,o as a,d as b,i as c,p as d};
