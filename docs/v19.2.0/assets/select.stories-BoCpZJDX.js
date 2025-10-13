import{e}from"./index-jIWwRBLr.js";import{F as Q,a as Z}from"./FormFieldLabel-DW-nAxje.js";import{S as l,a,b as t}from"./SelectControl-TvkHg2JI.js";import{T as S,a as f}from"./Text-vMb3-i8V.js";import{e as ee,o as le,C as s}from"./controls-BtiQQn1l.js";import{s as ae}from"./source-CPEZJ6oD.js";const te={argTypes:ee(["defaultValue","id","items","name","onValueChange","required","value"]),component:t,subcomponents:{SelectContent:a,SelectControl:l},title:"React Components/Select"},i={render:o=>e.createElement(t,{disabled:o.disabled,fitControlWidth:o.fitControlWidth,invalid:o.invalid,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],multiple:o.multiple,readOnly:o.readOnly},e.createElement(l,{multipleSelectionLabel:o.multipleSelectionLabel,placeholder:o.placeholder}),e.createElement(a,null)),argTypes:le({disabled:{table:{category:s.general},control:{type:"boolean"}},fitControlWidth:{table:{category:s.general},control:{type:"boolean"}},invalid:{table:{category:s.general},control:"boolean"},multiple:{table:{category:s.general},control:{type:"select"},options:[!0,!1,"merge"]},multipleSelectionLabel:{table:{category:s.general,type:{summary:"string"}},control:"text"},placeholder:{table:{category:s.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:s.general},control:"boolean"}})},d={globals:{imports:"import { FormField, FormFieldLabel, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(Q,null,e.createElement(Z,null,"Select a Web hosting"),e.createElement(t,{items:[{label:"1 vCore 2,4 GHz, 2 Go RAM",value:"hosting-1"},{label:"1 vCore 2,4 GHz, 4 Go RAM",value:"hosting-2"},{label:"2 vCores 2,4 GHz, 8 Go RAM",value:"hosting-3"}]},e.createElement(l,null),e.createElement(a,null)))},c={globals:{imports:"import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...ae()}}},render:({})=>{const o=[{customRendererData:{flag:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"},label:"EU providers",options:[{customRendererData:{description:"OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers.",logo:"https://ovh.github.io/manager/ovhcloud-logo.webp"},label:"OVH Cloud",value:"ovh"}]},{customRendererData:{flag:"https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"},label:"US providers",options:[{customRendererData:{description:"Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.",logo:"https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"},label:"Amazon Web Services",value:"aws"},{customRendererData:{description:"Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure.",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"},label:"Microsoft Azure",value:"azure"},{customRendererData:{description:"Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools.",logo:"https://upload.wikimedia.org/wikipedia/commons/0/01/Google-cloud-platform.svg"},label:"Google Cloud Platform",value:"gcp"}]}];return e.createElement(t,{items:o,multiple:!0},e.createElement(l,{customItemRenderer:({selectedItems:r})=>e.createElement("span",{style:{display:"flex",flexFlow:"row",gap:"8px",flexWrap:"wrap"}},r.map((n,$)=>{var C;return e.createElement("span",{style:{display:"flex",flexFlow:"row",gap:"4px",alignItems:"center"},key:n.value},e.createElement("img",{alt:n.label,height:15,src:(C=n.customRendererData)==null?void 0:C.logo,width:15}),e.createElement("span",null,n.label,$<r.length-1&&", "))}))}),e.createElement(a,{customGroupRenderer:({customData:r,label:n})=>e.createElement("div",{style:{display:"flex",flexFlow:"row",columnGap:"8px",alignItems:"center"}},e.createElement("img",{alt:"flag",height:20,src:r==null?void 0:r.flag,width:30}),e.createElement("span",null,n)),customOptionRenderer:({customData:r,label:n})=>e.createElement("div",{style:{display:"flex",flexFlow:"row",columnGap:"8px",alignItems:"center",padding:"8px 0"}},e.createElement("img",{alt:n,height:50,src:r==null?void 0:r.logo,width:50}),e.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement("span",{style:{fontWeight:"bold"}},n),e.createElement("span",null,r==null?void 0:r.description)))}))}},m={globals:{imports:"import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(l,null),e.createElement(a,null))},u={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { TEXT_PRESET, Select, SelectContent, SelectControl, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(S,{htmlFor:"disabled",preset:f.label},"Disabled"),e.createElement(l,{id:"disabled",placeholder:"Select one or more pets"}),e.createElement(a,null)),e.createElement(t,{items:[{label:"Dog",value:"dog",disabled:!0},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot",disabled:!0},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(S,{htmlFor:"disabled-options",preset:f.label},"Disabled options"),e.createElement(l,{id:"disabled-options",placeholder:"Select one or more pets"}),e.createElement(a,null)),e.createElement(t,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de",disabled:!0},{label:"Italy",value:"it"}]},{disabled:!0,label:"Asia",options:[{label:"China",value:"cn",disabled:!0},{label:"Japan",value:"jp",disabled:!0},{label:"Russia",value:"ru",disabled:!0}]},{label:"North America",options:[{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"},{label:"United States of America",value:"us"}]}]},e.createElement(S,{htmlFor:"disabled-group",preset:f.label},"Disabled group or group option"),e.createElement(l,{id:"disabled-group"}),e.createElement(a,null)))},p={globals:{imports:"import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de"},{label:"Italy",value:"it"}]},{label:"Asia",options:[{label:"China",value:"cn"},{label:"Japan",value:"jp"},{label:"Russia",value:"ru"}]},{label:"North America",options:[{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"},{label:"United States of America",value:"us"}]}]},e.createElement(l,null),e.createElement(a,null))},b={globals:{imports:"import { FormField, FormFieldLabel, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(Q,null,e.createElement(Z,null,"Select a Web hosting"),e.createElement(t,{items:[{label:"1 vCore 2,4 GHz, 2 Go RAM",value:"hosting-1"},{label:"1 vCore 2,4 GHz, 4 Go RAM",value:"hosting-2"},{label:"2 vCores 2,4 GHz, 8 Go RAM",value:"hosting-3"}]},e.createElement(l,null),e.createElement(a,null)))},g={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { TEXT_PRESET, Select, SelectContent, SelectControl, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],multiple:!0},e.createElement(S,{htmlFor:"multiple",preset:f.label},"Default multiple selection"),e.createElement(l,{id:"multiple",placeholder:"Select one or more pets"}),e.createElement(a,null)),e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],multiple:"merge"},e.createElement(S,{htmlFor:"multiple-merged",preset:f.label},"Merged multiple selection"),e.createElement(l,{id:"multiple-merged",placeholder:"Select one or more pets"}),e.createElement(a,null)))},v={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(l,{placeholder:"Select one or more pets"}),e.createElement(a,null))},h={globals:{imports:"import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],readOnly:!0},e.createElement(l,{placeholder:"Select one or more pets"}),e.createElement(a,null))};var E,y,F;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(y=i.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var x,G,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(w=(G=d.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var R,T,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    type CustomData = {
      description?: string;
      flag?: string;
      logo?: string;
    };
    const items: SelectItem<CustomData>[] = [{
      customRendererData: {
        flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg'
      },
      label: 'EU providers',
      options: [{
        customRendererData: {
          description: 'OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world\\'s largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers.',
          logo: 'https://ovh.github.io/manager/ovhcloud-logo.webp'
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
          logo: 'https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png'
        },
        label: 'Amazon Web Services',
        value: 'aws'
      }, {
        customRendererData: {
          description: 'Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure.',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png'
        },
        label: 'Microsoft Azure',
        value: 'azure'
      }, {
        customRendererData: {
          description: 'Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools.',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Google-cloud-platform.svg'
        },
        label: 'Google Cloud Platform',
        value: 'gcp'
      }]
    }];
    return <Select items={items} multiple>
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
                <img alt={item.label} height={15} src={item.customRendererData?.logo} width={15} />

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
              <img alt={label} height={50} src={customData?.logo} width={50} />
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
      </Select>;
  }
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var O,_,D;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(D=(_=m.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var P,H,M;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { TEXT_PRESET, Select, SelectContent, SelectControl, Text } from '@ovhcloud/ods-react';\`
  },
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
}`,...(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var z,I,L;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var k,W,N;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(N=(W=b.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var V,U,X;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { TEXT_PRESET, Select, SelectContent, SelectControl, Text } from '@ovhcloud/ods-react';\`
  },
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
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var j,Y,J;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(J=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var q,B,K;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';\`
  },
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
}`,...(K=(B=h.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};const oe=["Demo","AccessibilityFormField","CustomRenderer","Default","Disabled","Group","InFormField","Multiple","Overview","Readonly"],me=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:d,CustomRenderer:c,Default:m,Demo:i,Disabled:u,Group:p,InFormField:b,Multiple:g,Overview:v,Readonly:h,__namedExportsOrder:oe,default:te},Symbol.toStringTag,{value:"Module"}));export{d as A,c as C,m as D,p as G,b as I,g as M,v as O,h as R,me as S,u as a};
