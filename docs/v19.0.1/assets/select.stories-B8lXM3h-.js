import{e}from"./index-D_CmzhJ4.js";import{c as J,F as q}from"./FormFieldLabel-DjB85afw.js";import{S as a,a as t,b as o}from"./SelectControl-D8g7ZA4_.js";import{T as v,a as h}from"./Text-KX3Hvvn9.js";import{e as B,o as K,C as n}from"./controls-BtiQQn1l.js";import{s as Q}from"./source-d0g_Nd0q.js";const Z={argTypes:B(["defaultValue","id","items","name","onValueChange","required","value"]),component:o,subcomponents:{SelectContent:t,SelectControl:a},title:"React Components/Select"},s={render:l=>e.createElement(o,{disabled:l.disabled,fitControlWidth:l.fitControlWidth,invalid:l.invalid,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],multiple:l.multiple,readOnly:l.readOnly},e.createElement(a,{multipleSelectionLabel:l.multipleSelectionLabel,placeholder:l.placeholder}),e.createElement(t,null)),argTypes:K({disabled:{table:{category:n.general},control:{type:"boolean"}},fitControlWidth:{table:{category:n.general},control:{type:"boolean"}},invalid:{table:{category:n.general},control:"boolean"},multiple:{table:{category:n.general},control:{type:"select"},options:[!0,!1,"merge"]},multipleSelectionLabel:{table:{category:n.general,type:{summary:"string"}},control:"text"},placeholder:{table:{category:n.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:n.general},control:"boolean"}})},i={tags:["!dev"],parameters:{docs:{source:{...Q()}}},render:({})=>e.createElement(o,{items:[{customRendererData:{flag:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"},label:"EU providers",options:[{customRendererData:{description:"OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers.",logo:"https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png"},label:"OVH Cloud",value:"ovh"}]},{customRendererData:{flag:"https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"},label:"US providers",options:[{customRendererData:{description:"Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.",flag:"https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States.svg",logo:"https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"},label:"Amazon Web Services",value:"aws"},{customRendererData:{description:"Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure.",flag:"https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States.svg",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"},label:"Microsoft Azure",value:"azure"},{customRendererData:{description:"Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools.",flag:"https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States.svg",logo:"https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"},label:"Google Cloud Platform",value:"gcp"}]}],multiple:!0},e.createElement(a,{customItemRenderer:({selectedItems:l})=>e.createElement("span",{style:{display:"flex",flexFlow:"row",gap:"8px",flexWrap:"wrap"}},l.map((r,X)=>{var f;return e.createElement("span",{style:{display:"flex",flexFlow:"row",gap:"4px",alignItems:"center"},key:r.value},e.createElement("img",{alt:"logo",height:15,src:(f=r.customRendererData)==null?void 0:f.logo,width:15}),e.createElement("span",null,r.label,X<l.length-1&&", "))}))}),e.createElement(t,{customGroupRenderer:({customData:l,label:r})=>e.createElement("div",{style:{display:"flex",flexFlow:"row",columnGap:"8px",alignItems:"center"}},e.createElement("img",{alt:"flag",height:20,src:l==null?void 0:l.flag,width:30}),e.createElement("span",null,r)),customOptionRenderer:({customData:l,label:r})=>e.createElement("div",{style:{display:"flex",flexFlow:"row",columnGap:"8px",alignItems:"center",padding:"8px 0"}},e.createElement("img",{alt:"logo",height:50,src:l==null?void 0:l.logo,width:50}),e.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement("span",{style:{fontWeight:"bold"}},r),e.createElement("span",null,l==null?void 0:l.description)))}))},d={tags:["!dev"],render:({})=>e.createElement(o,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(a,null),e.createElement(t,null))},c={decorators:[l=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},l())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(v,{htmlFor:"disabled",preset:h.label},"Disabled"),e.createElement(a,{id:"disabled",placeholder:"Select one or more pets"}),e.createElement(t,null)),e.createElement(o,{items:[{label:"Dog",value:"dog",disabled:!0},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot",disabled:!0},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(v,{htmlFor:"disabled-options",preset:h.label},"Disabled options"),e.createElement(a,{id:"disabled-options",placeholder:"Select one or more pets"}),e.createElement(t,null)),e.createElement(o,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de",disabled:!0},{label:"Italy",value:"it"}]},{disabled:!0,label:"Asia",options:[{label:"China",value:"cn",disabled:!0},{label:"Japan",value:"jp",disabled:!0},{label:"Russia",value:"ru",disabled:!0}]},{label:"North America",options:[{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"},{label:"United States of America",value:"us"}]}]},e.createElement(v,{htmlFor:"disabled-group",preset:h.label},"Disabled group or group option"),e.createElement(a,{id:"disabled-group"}),e.createElement(t,null)))},p={tags:["!dev"],render:({})=>e.createElement(o,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de"},{label:"Italy",value:"it"}]},{label:"Asia",options:[{label:"China",value:"cn"},{label:"Japan",value:"jp"},{label:"Russia",value:"ru"}]},{label:"North America",options:[{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"},{label:"United States of America",value:"us"}]}]},e.createElement(a,null),e.createElement(t,null))},u={tags:["!dev"],render:({})=>e.createElement(J,null,e.createElement(q,null,"Select a Web hosting"),e.createElement(o,{items:[{label:"1 vCore 2,4 GHz, 2 Go RAM",value:"hosting-1"},{label:"1 vCore 2,4 GHz, 4 Go RAM",value:"hosting-2"},{label:"2 vCores 2,4 GHz, 8 Go RAM",value:"hosting-3"}]},e.createElement(a,null),e.createElement(t,null)))},m={decorators:[l=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},l())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],multiple:!0},e.createElement(v,{htmlFor:"multiple",preset:h.label},"Default multiple selection"),e.createElement(a,{id:"multiple",placeholder:"Select one or more pets"}),e.createElement(t,null)),e.createElement(o,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],multiple:"merge"},e.createElement(v,{htmlFor:"multiple-merged",preset:h.label},"Merged multiple selection"),e.createElement(a,{id:"multiple-merged",placeholder:"Select one or more pets"}),e.createElement(t,null)))},g={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(a,{placeholder:"Select one or more pets"}),e.createElement(t,null))},b={tags:["!dev"],render:({})=>e.createElement(o,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],readOnly:!0},e.createElement(a,{placeholder:"Select one or more pets"}),e.createElement(t,null))};var S,y,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Select disabled={arg.disabled} fitControlWidth={arg.fitControlWidth} invalid={arg.invalid} items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]} multiple={arg.multiple} readOnly={arg.readOnly}>
      <SelectControl multipleSelectionLabel={arg.multipleSelectionLabel} placeholder={arg.placeholder} />

      <SelectContent />
    </Select>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'boolean'
      }
    },
    fitControlWidth: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'boolean'
      }
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    multiple: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'select'
      },
      options: [true, false, 'merge']
    },
    multipleSelectionLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    }
  })
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var E,_,x;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => <Select items={[{
    customRendererData: {
      flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg'
    },
    label: 'EU providers',
    options: [{
      customRendererData: {
        description: 'OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world\\'s largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers.',
        logo: 'https://static-00.iconduck.com/assets.00/ovh-icon-2048x2048-l4c3izvg.png'
      },
      label: 'OVH Cloud',
      value: 'ovh'
    }]
  }, {
    customRendererData: {
      flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'
    },
    label: 'US providers',
    options: [{
      customRendererData: {
        description: 'Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.',
        flag: 'https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States.svg',
        logo: 'https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png'
      },
      label: 'Amazon Web Services',
      value: 'aws'
    }, {
      customRendererData: {
        description: 'Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure.',
        flag: 'https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States.svg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png'
      },
      label: 'Microsoft Azure',
      value: 'azure'
    }, {
      customRendererData: {
        description: 'Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools.',
        flag: 'https://en.wikipedia.org/wiki/Flag_of_the_United_States#/media/File:Flag_of_the_United_States.svg',
        logo: 'https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png'
      },
      label: 'Google Cloud Platform',
      value: 'gcp'
    }]
  }]} multiple>
      <SelectControl customItemRenderer={({
      selectedItems
    }) => <span style={{
      display: 'flex',
      flexFlow: 'row',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
          {selectedItems.map((item, idx) => <span style={{
        display: 'flex',
        flexFlow: 'row',
        gap: '4px',
        alignItems: 'center'
      }} key={item.value}>
                <img alt="logo" height={15} src={item.customRendererData?.logo} width={15} />

                <span>{item.label}{idx < selectedItems.length - 1 && ', '}</span>
              </span>)}
        </span>} />

      <SelectContent customGroupRenderer={({
      customData,
      label
    }) => <div style={{
      display: 'flex',
      flexFlow: 'row',
      columnGap: '8px',
      alignItems: 'center'
    }}>
            <img alt="flag" height={20} src={customData?.flag} width={30} />

            <span>{label}</span>
          </div>} customOptionRenderer={({
      customData,
      label
    }) => <div style={{
      display: 'flex',
      flexFlow: 'row',
      columnGap: '8px',
      alignItems: 'center',
      padding: '8px 0'
    }}>
            <img alt="logo" height={50} src={customData?.logo} width={50} />
            <div style={{
        display: 'flex',
        flexFlow: 'column',
        rowGap: '8px'
      }}>
              <span style={{
          fontWeight: 'bold'
        }}>{label}</span>
              <span>{customData?.description}</span>
            </div>
          </div>} />
    </Select>
}`,...(x=(_=i.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var w,F,G;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Select items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]}>
      <SelectControl />

      <SelectContent />
    </Select>
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var R,A,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Select disabled items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }, {
      label: 'Hamster',
      value: 'hamster'
    }, {
      label: 'Parrot',
      value: 'parrot'
    }, {
      label: 'Spider',
      value: 'spider'
    }, {
      label: 'Goldfish',
      value: 'goldfish'
    }]}>
        <Text htmlFor="disabled" preset={TEXT_PRESET.label}>
          Disabled
        </Text>

        <SelectControl id="disabled" placeholder="Select one or more pets" />

        <SelectContent />
      </Select>

      <Select items={[{
      label: 'Dog',
      value: 'dog',
      disabled: true
    }, {
      label: 'Cat',
      value: 'cat'
    }, {
      label: 'Hamster',
      value: 'hamster'
    }, {
      label: 'Parrot',
      value: 'parrot',
      disabled: true
    }, {
      label: 'Spider',
      value: 'spider'
    }, {
      label: 'Goldfish',
      value: 'goldfish'
    }]}>
        <Text htmlFor="disabled-options" preset={TEXT_PRESET.label}>
          Disabled options
        </Text>

        <SelectControl id="disabled-options" placeholder="Select one or more pets" />

        <SelectContent />
      </Select>

      <Select items={[{
      label: 'Europe',
      options: [{
        label: 'France',
        value: 'fr'
      }, {
        label: 'Germany',
        value: 'de',
        disabled: true
      }, {
        label: 'Italy',
        value: 'it'
      }]
    }, {
      disabled: true,
      label: 'Asia',
      options: [{
        label: 'China',
        value: 'cn',
        disabled: true
      }, {
        label: 'Japan',
        value: 'jp',
        disabled: true
      }, {
        label: 'Russia',
        value: 'ru',
        disabled: true
      }]
    }, {
      label: 'North America',
      options: [{
        label: 'Canada',
        value: 'ca'
      }, {
        label: 'Mexico',
        value: 'mx'
      }, {
        label: 'United States of America',
        value: 'us'
      }]
    }]}>
        <Text htmlFor="disabled-group" preset={TEXT_PRESET.label}>
          Disabled group or group option
        </Text>

        <SelectControl id="disabled-group" />

        <SelectContent />
      </Select>
    </>
}`,...(T=(A=c.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var O,D,P;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Select items={[{
    label: 'Europe',
    options: [{
      label: 'France',
      value: 'fr'
    }, {
      label: 'Germany',
      value: 'de'
    }, {
      label: 'Italy',
      value: 'it'
    }]
  }, {
    label: 'Asia',
    options: [{
      label: 'China',
      value: 'cn'
    }, {
      label: 'Japan',
      value: 'jp'
    }, {
      label: 'Russia',
      value: 'ru'
    }]
  }, {
    label: 'North America',
    options: [{
      label: 'Canada',
      value: 'ca'
    }, {
      label: 'Mexico',
      value: 'mx'
    }, {
      label: 'United States of America',
      value: 'us'
    }]
  }]}>
      <SelectControl />

      <SelectContent />
    </Select>
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var k,H,z;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Select a Web hosting
      </FormFieldLabel>

      <Select items={[{
      label: '1 vCore 2,4 GHz, 2 Go RAM',
      value: 'hosting-1'
    }, {
      label: '1 vCore 2,4 GHz, 4 Go RAM',
      value: 'hosting-2'
    }, {
      label: '2 vCores 2,4 GHz, 8 Go RAM',
      value: 'hosting-3'
    }]}>
        <SelectControl />

        <SelectContent />
      </Select>
    </FormField>
}`,...(z=(H=u.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var M,I,U;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Select items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }, {
      label: 'Hamster',
      value: 'hamster'
    }, {
      label: 'Parrot',
      value: 'parrot'
    }, {
      label: 'Spider',
      value: 'spider'
    }, {
      label: 'Goldfish',
      value: 'goldfish'
    }]} multiple>
        <Text htmlFor="multiple" preset={TEXT_PRESET.label}>
          Default multiple selection
        </Text>

        <SelectControl id="multiple" placeholder="Select one or more pets" />

        <SelectContent />
      </Select>

      <Select items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }, {
      label: 'Hamster',
      value: 'hamster'
    }, {
      label: 'Parrot',
      value: 'parrot'
    }, {
      label: 'Spider',
      value: 'spider'
    }, {
      label: 'Goldfish',
      value: 'goldfish'
    }]} multiple="merge">
        <Text htmlFor="multiple-merged" preset={TEXT_PRESET.label}>
          Merged multiple selection
        </Text>

        <SelectControl id="multiple-merged" placeholder="Select one or more pets" />

        <SelectContent />
      </Select>
    </>
}`,...(U=(I=m.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var L,W,N;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Select items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]}>
      <SelectControl placeholder="Select one or more pets" />

      <SelectContent />
    </Select>
}`,...(N=(W=g.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var V,j,Y;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Select items={[{
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Hamster',
    value: 'hamster'
  }, {
    label: 'Parrot',
    value: 'parrot'
  }, {
    label: 'Spider',
    value: 'spider'
  }, {
    label: 'Goldfish',
    value: 'goldfish'
  }]} readOnly>
      <SelectControl placeholder="Select one or more pets" />

      <SelectContent />
    </Select>
}`,...(Y=(j=b.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};const $=["Demo","CustomRenderer","Default","Disabled","Group","InFormField","Multiple","Overview","Readonly"],ne=Object.freeze(Object.defineProperty({__proto__:null,CustomRenderer:i,Default:d,Demo:s,Disabled:c,Group:p,InFormField:u,Multiple:m,Overview:g,Readonly:b,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{i as C,d as D,p as G,u as I,m as M,g as O,b as R,ne as S,c as a};
