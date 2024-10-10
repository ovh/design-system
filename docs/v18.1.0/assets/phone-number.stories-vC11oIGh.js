import{F as y,q as h}from"./index-BNPjhb5w.js";import{x as r}from"./lit-html-D-ZEPr28.js";import{o as re,C as n}from"./controls-DpsgTNdU.js";var g=Object.freeze,oe=Object.defineProperty,ae=(e,ne)=>g(oe(e,"raw",{value:g(ne||e.slice())})),O;const se={title:"ODS Components/Form elements/Phone Number",component:"ods-phone-number"},o={render:e=>r`
    <ods-phone-number class="my-phone-number"
                      aria-label="${e.ariaLabel}"
                      aria-labelledby="${e.ariaLabelledby}"
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
  `,argTypes:re({ariaLabel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},countries:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"boolean",description:'Toggle this to demo the "all" preset. To fine-tune the list of countries, check the prop documentation.'},customInputCss:{table:{category:n.design,defaultValue:{summary:"ø"}},control:"text",description:'Set a custom style properties to apply to the input. Example: "width: 100px;"'},customSelectCss:{table:{category:n.design,defaultValue:{summary:"ø"}},control:"text",description:'Set a custom style properties to apply to the select. Example: "width: 100px;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isoCode:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:y}},control:{type:"select"},options:y},locale:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:h}},control:{type:"select"},options:h},pattern:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"}}),args:{countries:!1,hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isReadonly:!1}},a={tags:["isHidden"],render:()=>r`
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
  `},p={tags:["isHidden"],render:()=>r(O||(O=ae([`
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
  `])))},b={tags:["isHidden"],render:()=>r`
    <ods-phone-number is-readonly>
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      is-readonly>
    </ods-phone-number>
  `};var f,C,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: arg => html\`
    <ods-phone-number class="my-phone-number"
                      aria-label="\${arg.ariaLabel}"
                      aria-labelledby="\${arg.ariaLabelledby}"
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
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var _,S,R;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number is-clearable></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-clearable>
</ods-phone-number>
  \`
}`,...(R=(S=a.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var L,T,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var N,H,V;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-phone-number countries="all"></ods-phone-number>
  \`
}`,...(V=(H=t.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var $,v,D;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number></ods-phone-number>
  \`
}`,...(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var A,Y,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number is-disabled></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-disabled>
</ods-phone-number>
  \`
}`,...(G=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var P,w,F;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number has-error></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      has-error>
    </ods-phone-number>
  \`
}`,...(F=(w=u.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var I,U,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number is-loading></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      is-loading>
    </ods-phone-number>
  \`
}`,...(M=(U=m.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var B,j,q;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,k,J;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number countries="all"
                      iso-code="br">
    </ods-phone-number>
  \`
}`,...(J=(k=c.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};var K,Q,W;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number is-readonly>
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      is-readonly>
    </ods-phone-number>
  \`
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const te=["Demo","Clearable","CustomCSS","Overview","Default","Disabled","Error","Loading","Locale","ISOCode","Pattern","Readonly"],me=Object.freeze(Object.defineProperty({__proto__:null,Clearable:a,CustomCSS:s,Default:l,Demo:o,Disabled:d,Error:u,ISOCode:c,Loading:m,Locale:i,Overview:t,Pattern:p,Readonly:b,__namedExportsOrder:te,default:se},Symbol.toStringTag,{value:"Module"}));export{s as C,l as D,u as E,c as I,m as L,t as O,me as P,b as R,a,d as b,i as c,p as d};
