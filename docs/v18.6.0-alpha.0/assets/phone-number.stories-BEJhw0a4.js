import{M as h,F as g}from"./index-BLVG44ao.js";import{d as le}from"./ods-phone-number2-BL58mHzY.js";import{x as r,T as de,o as ie,C as n}from"./controls-DX883vx3.js";import{V as se}from"./validityState-BuENXwQ9.js";const ue=le;var f=Object.freeze,me=Object.defineProperty,ce=(e,te)=>f(me(e,"raw",{value:f(te||e.slice())})),O;ue();const pe={title:"ODS Components/Form elements/Phone Number",component:"ods-phone-number"},a={render:e=>r`
    <ods-phone-number class="my-phone-number"
                      aria-label="${e.ariaLabel}"
                      aria-labelledby="${e.ariaLabelledby}"
                      countries="${e.countries?"all":null}"
                      has-error="${e.hasError}"
                      is-clearable="${e.isClearable}"
                      is-disabled="${e.isDisabled}"
                      is-loading="${e.isLoading}"
                      is-readonly="${e.isReadonly}"
                      is-required="${e.isRequired}"
                      iso-code="${e.isoCode}"
                      locale="${e.locale}"
                      pattern="${e.pattern||de}">
    </ods-phone-number>
    ${e.validityState?se("phone-number",".my-phone-number"):""}
    <style>
      .my-phone-number::part(input) {
        ${e.customInputCss}
      }
      .my-phone-number::part(select) {
        ${e.customSelectCss}
      }
    </style>
  `,argTypes:ie({ariaLabel:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:n.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},countries:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"boolean",description:'Toggle this to demo the "all" preset. To fine-tune the list of countries, check the prop documentation.'},customInputCss:{table:{category:n.design,defaultValue:{summary:"ø"}},control:"text",description:'Set a custom style properties to apply to the input. Example: "width: 100px;"'},customSelectCss:{table:{category:n.design,defaultValue:{summary:"ø"}},control:"text",description:'Set a custom style properties to apply to the select. Example: "width: 100px;"'},hasError:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:n.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{control:"boolean",table:{category:n.general,defaultValue:{summary:"false"},type:{summary:"boolean"}}},isoCode:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:h}},control:{type:"select"},options:h},locale:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:g}},control:{type:"select"},options:g},pattern:{table:{category:n.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},validityState:{table:{category:n.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{countries:!1,hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isReadonly:!1,isRequired:!1,validityState:!1}},o={tags:["isHidden"],render:()=>r`
<ods-phone-number is-clearable value="0123456789"></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-clearable
                  value="0123456789">
</ods-phone-number>
  `},s={tags:["isHidden"],render:()=>r`
<ods-phone-number class="my-phone-number"></ods-phone-number>
<style>
  .my-phone-number {
    width: 100%;
  }

  .my-phone-number::part(input) {
    background-color: #ceffce;
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
  `},i={tags:["isHidden"],render:()=>r`
    <ods-phone-number has-error></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      has-error>
    </ods-phone-number>
  `},u={tags:["isHidden"],render:()=>r`
    <ods-phone-number is-loading></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      is-loading>
    </ods-phone-number>
  `},m={tags:["isHidden"],render:()=>r`
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
  `},p={tags:["isHidden"],render:()=>r(O||(O=ce([`
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
  `},y={tags:["isHidden"],render:()=>r`
<ods-phone-number is-required id="phone-number-validity-state-demo">
</ods-phone-number>
${se("phone-number","#phone-number-validity-state-demo")}
  `};var C,S,E;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-phone-number class="my-phone-number"
                      aria-label="\${arg.ariaLabel}"
                      aria-labelledby="\${arg.ariaLabelledby}"
                      countries="\${arg.countries ? 'all' : null}"
                      has-error="\${arg.hasError}"
                      is-clearable="\${arg.isClearable}"
                      is-disabled="\${arg.isDisabled}"
                      is-loading="\${arg.isLoading}"
                      is-readonly="\${arg.isReadonly}"
                      is-required="\${arg.isRequired}"
                      iso-code="\${arg.isoCode}"
                      locale="\${arg.locale}"
                      pattern="\${arg.pattern || nothing}">
    </ods-phone-number>
    \${arg.validityState ? ValidityStateTemplate('phone-number', '.my-phone-number') : ''}
    <style>
      .my-phone-number::part(input) {
        \${arg.customInputCss}
      }
      .my-phone-number::part(select) {
        \${arg.customSelectCss}
      }
    </style>
  \`;
  },
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
    isRequired: {
      control: 'boolean',
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      }
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
    countries: false,
    hasError: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false,
    isRequired: false,
    validityState: false
  }
}`,...(E=(S=a.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var R,_,T;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number is-clearable value="0123456789"></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-clearable
                  value="0123456789">
</ods-phone-number>
  \`
}`,...(T=(_=o.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var L,v,V;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number class="my-phone-number"></ods-phone-number>
<style>
  .my-phone-number {
    width: 100%;
  }

  .my-phone-number::part(input) {
    background-color: #ceffce;
  }
</style>
  \`
}`,...(V=(v=s.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var $,N,x;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-phone-number countries="all"></ods-phone-number>
  \`
}`,...(x=(N=t.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var H,D,A;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number></ods-phone-number>
  \`
}`,...(A=(D=l.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var Y,G,q;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number is-disabled></ods-phone-number>
<br /><br />
<ods-phone-number countries="all"
                  is-disabled>
</ods-phone-number>
  \`
}`,...(q=(G=d.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var P,F,I;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number has-error></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      has-error>
    </ods-phone-number>
  \`
}`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var w,U,M;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number is-loading></ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      is-loading>
    </ods-phone-number>
  \`
}`,...(M=(U=u.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var B,j,k;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var z,J,K;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number countries="all"
                      iso-code="br">
    </ods-phone-number>
  \`
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,ne;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
    <ods-phone-number is-readonly>
    </ods-phone-number>
    <br /><br />
    <ods-phone-number countries="all"
                      is-readonly>
    </ods-phone-number>
  \`
}`,...(ne=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,ae,oe;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-phone-number is-required id="phone-number-validity-state-demo">
</ods-phone-number>
\${ValidityStateTemplate('phone-number', '#phone-number-validity-state-demo')}
  \`
}`,...(oe=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const be=["Demo","Clearable","CustomCSS","Overview","Default","Disabled","Error","Loading","Locale","ISOCode","Pattern","Readonly","ValidityState"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Clearable:o,CustomCSS:s,Default:l,Demo:a,Disabled:d,Error:i,ISOCode:c,Loading:u,Locale:m,Overview:t,Pattern:p,Readonly:b,ValidityState:y,__namedExportsOrder:be,default:pe},Symbol.toStringTag,{value:"Module"}));export{s as C,l as D,i as E,c as I,u as L,t as O,Oe as P,b as R,y as V,o as a,d as b,m as c,p as d};
