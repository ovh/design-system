import{e}from"./index-jIWwRBLr.js";import{F as re,a as ne}from"./index-B0M5RXeR.js";import{S as l,a,b as t}from"./index-onrz60cw.js";import{T as C,a as y}from"./Text-CAQM6i-X.js";import{e as ie,o as ce,C as s}from"./controls-BtiQQn1l.js";import{s as de}from"./source-CPEZJ6oD.js";const me={argTypes:ie(["defaultOpen","defaultValue","fitControlWidth","id","items","name","onOpenChange","onValueChange","open","overlayConfig","positionerStyle","required","value"]),component:t,subcomponents:{SelectContent:a,SelectControl:l},title:"React Components/Select"},i={render:o=>e.createElement(t,{disabled:o.disabled,invalid:o.invalid,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],multiple:o.multiple,overlayConfig:{sameWidth:o.sameWidth},readOnly:o.readOnly},e.createElement(l,{multipleSelectionLabel:o.multipleSelectionLabel,placeholder:o.placeholder}),e.createElement(a,null)),argTypes:ce({disabled:{table:{category:s.general},control:{type:"boolean"}},invalid:{table:{category:s.general},control:"boolean"},multiple:{table:{category:s.general},control:{type:"select"},options:[!0,!1,"merge"]},multipleSelectionLabel:{table:{category:s.general,type:{summary:"string"}},control:"text"},placeholder:{table:{category:s.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:s.general},control:"boolean"},sameWidth:{table:{category:s.general},control:{type:"boolean"}}})},c={parameters:{layout:"start"},tags:["!dev"],render:({})=>e.createElement("div",{style:{height:"230px"}},e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],open:!0,overlayConfig:{flip:!1}},e.createElement(l,{placeholder:"Select one or more pets",style:{width:"230px"}}),e.createElement(a,{createPortal:!1})))},d={globals:{imports:"import { FormField, FormFieldLabel, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(re,null,e.createElement(ne,null,"Select a Web hosting"),e.createElement(t,{items:[{label:"1 vCore 2,4 GHz, 2 Go RAM",value:"hosting-1"},{label:"1 vCore 2,4 GHz, 4 Go RAM",value:"hosting-2"},{label:"2 vCores 2,4 GHz, 8 Go RAM",value:"hosting-3"}]},e.createElement(l,null),e.createElement(a,null)))},m={globals:{imports:"import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{docs:{source:{...de()}}},render:({})=>{const o=[{customRendererData:{flag:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"},label:"EU providers",options:[{customRendererData:{description:"OVH, legally OVH Groupe SA, is a French cloud computing company which offers VPS, dedicated servers and other web services. As of 2016 OVH owned the world's largest data center in surface area. As of 2019, it was the largest hosting provider in Europe, and the third largest in the world based on physical servers.",logo:"https://ovh.github.io/manager/ovhcloud-logo.webp"},label:"OVH Cloud",value:"ovh"}]},{customRendererData:{flag:"https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"},label:"US providers",options:[{customRendererData:{description:"Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.",logo:"https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png"},label:"Amazon Web Services",value:"aws"},{customRendererData:{description:"Microsoft Azure, often referred to as just Azure, is a cloud computing platform developed by Microsoft. It offers management, access and development of applications and services through its global infrastructure.",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"},label:"Microsoft Azure",value:"azure"},{customRendererData:{description:"Google Cloud Platform, offered by Google, is a suite of cloud computing services that provides a series of modular cloud services including computing, data storage, data analytics, and machine learning, alongside a set of management tools.",logo:"https://upload.wikimedia.org/wikipedia/commons/0/01/Google-cloud-platform.svg"},label:"Google Cloud Platform",value:"gcp"}]}];return e.createElement(t,{items:o,multiple:!0},e.createElement(l,{customItemRenderer:({selectedItems:r})=>e.createElement("span",{style:{display:"flex",flexFlow:"row",gap:"8px",flexWrap:"wrap"}},r.map((n,se)=>{var E;return e.createElement("span",{style:{display:"flex",flexFlow:"row",gap:"4px",alignItems:"center"},key:n.value},e.createElement("img",{alt:n.label,height:15,src:(E=n.customRendererData)==null?void 0:E.logo,width:15}),e.createElement("span",null,n.label,se<r.length-1&&", "))}))}),e.createElement(a,{customGroupRenderer:({customData:r,label:n})=>e.createElement("div",{style:{display:"flex",flexFlow:"row",columnGap:"8px",alignItems:"center"}},e.createElement("img",{alt:"flag",height:20,src:r==null?void 0:r.flag,width:30}),e.createElement("span",null,n)),customOptionRenderer:({customData:r,label:n})=>e.createElement("div",{style:{display:"flex",flexFlow:"row",columnGap:"8px",alignItems:"center",padding:"8px 0"}},e.createElement("img",{alt:n,height:50,src:r==null?void 0:r.logo,width:50}),e.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement("span",{style:{fontWeight:"bold"}},n),e.createElement("span",null,r==null?void 0:r.description)))}))}},u={globals:{imports:"import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(l,null),e.createElement(a,null))},p={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { TEXT_PRESET, Select, SelectContent, SelectControl, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(C,{htmlFor:"disabled",preset:y.label},"Disabled"),e.createElement(l,{id:"disabled",placeholder:"Select one or more pets"}),e.createElement(a,null)),e.createElement(t,{items:[{label:"Dog",value:"dog",disabled:!0},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot",disabled:!0},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(C,{htmlFor:"disabled-options",preset:y.label},"Disabled options"),e.createElement(l,{id:"disabled-options",placeholder:"Select one or more pets"}),e.createElement(a,null)),e.createElement(t,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de",disabled:!0},{label:"Italy",value:"it"}]},{disabled:!0,label:"Asia",options:[{label:"China",value:"cn",disabled:!0},{label:"Japan",value:"jp",disabled:!0},{label:"Russia",value:"ru",disabled:!0}]},{label:"North America",options:[{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"},{label:"United States of America",value:"us"}]}]},e.createElement(C,{htmlFor:"disabled-group",preset:y.label},"Disabled group or group option"),e.createElement(l,{id:"disabled-group"}),e.createElement(a,null)))},b={globals:{imports:"import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{items:[{label:"Europe",options:[{label:"France",value:"fr"},{label:"Germany",value:"de"},{label:"Italy",value:"it"}]},{label:"Asia",options:[{label:"China",value:"cn"},{label:"Japan",value:"jp"},{label:"Russia",value:"ru"}]},{label:"North America",options:[{label:"Canada",value:"ca"},{label:"Mexico",value:"mx"},{label:"United States of America",value:"us"}]}]},e.createElement(l,null),e.createElement(a,null))},g={globals:{imports:"import { FormField, FormFieldLabel, Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(re,null,e.createElement(ne,null,"Select a Web hosting"),e.createElement(t,{items:[{label:"1 vCore 2,4 GHz, 2 Go RAM",value:"hosting-1"},{label:"1 vCore 2,4 GHz, 4 Go RAM",value:"hosting-2"},{label:"2 vCores 2,4 GHz, 8 Go RAM",value:"hosting-3"}]},e.createElement(l,null),e.createElement(a,null)))},v={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { TEXT_PRESET, Select, SelectContent, SelectControl, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],multiple:!0},e.createElement(C,{htmlFor:"multiple",preset:y.label},"Default multiple selection"),e.createElement(l,{id:"multiple",placeholder:"Select one or more pets"}),e.createElement(a,null)),e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],multiple:"merge"},e.createElement(C,{htmlFor:"multiple-merged",preset:y.label},"Merged multiple selection"),e.createElement(l,{id:"multiple-merged",placeholder:"Select one or more pets"}),e.createElement(a,null)))},h={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}]},e.createElement(l,{placeholder:"Select one or more pets"}),e.createElement(a,null))},S={globals:{imports:"import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Hamster",value:"hamster"},{label:"Parrot",value:"parrot"},{label:"Spider",value:"spider"},{label:"Goldfish",value:"goldfish"}],readOnly:!0},e.createElement(l,{placeholder:"Select one or more pets"}),e.createElement(a,null))},f={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(t,{items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(l,{placeholder:"Default"}),e.createElement(a,{createPortal:!1})),e.createElement(t,{multiple:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(l,{placeholder:"Multiple"}),e.createElement(a,{createPortal:!1})),e.createElement(t,{disabled:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(l,{placeholder:"Disabled"}),e.createElement(a,{createPortal:!1})),e.createElement(t,{readOnly:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(l,{placeholder:"Read only"}),e.createElement(a,{createPortal:!1})),e.createElement(t,{invalid:!0,items:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}]},e.createElement(l,{placeholder:"Invalid"}),e.createElement(a,{createPortal:!1})))};var x,F,G;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Select disabled={arg.disabled} invalid={arg.invalid} items={[{
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
  }]} multiple={arg.multiple} overlayConfig={{
    sameWidth: arg.sameWidth
  }} readOnly={arg.readOnly}>
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
    },
    sameWidth: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'boolean'
      }
    }
  })
}`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var w,R,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    layout: 'start'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    height: '230px'
  }}>
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
    }]} open overlayConfig={{
      flip: false
    }}>
        <SelectControl placeholder="Select one or more pets" style={{
        width: '230px'
      }} />

        <SelectContent createPortal={false} />
      </Select>
    </div>
}`,...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var A,D,O;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var P,_,H;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var M,z,I;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var L,W,k;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(W=p.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var N,V,U;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=(V=b.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var X,j,Y;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(j=g.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};var J,q,B;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(B=(q=v.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var K,Q,Z;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,le;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(le=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var ae,te,oe;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
      <Select items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]}>
        <SelectControl placeholder="Default" />
        <SelectContent createPortal={false} />
      </Select>

      <Select multiple items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]}>
        <SelectControl placeholder="Multiple" />
        <SelectContent createPortal={false} />
      </Select>

      <Select disabled items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]}>
        <SelectControl placeholder="Disabled" />
        <SelectContent createPortal={false} />
      </Select>

      <Select readOnly items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]}>
        <SelectControl placeholder="Read only" />
        <SelectContent createPortal={false} />
      </Select>

      <Select invalid items={[{
      label: 'Dog',
      value: 'dog'
    }, {
      label: 'Cat',
      value: 'cat'
    }]}>
        <SelectControl placeholder="Invalid" />
        <SelectContent createPortal={false} />
      </Select>
    </div>
}`,...(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const ue=["Demo","AnatomyTech","AccessibilityFormField","CustomRenderer","Default","Disabled","Group","InFormField","Multiple","Overview","Readonly","ThemeGenerator"],fe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFormField:d,AnatomyTech:c,CustomRenderer:m,Default:u,Demo:i,Disabled:p,Group:b,InFormField:g,Multiple:v,Overview:h,Readonly:S,ThemeGenerator:f,__namedExportsOrder:ue,default:me},Symbol.toStringTag,{value:"Module"}));export{d as A,m as C,u as D,b as G,g as I,v as M,h as O,S as R,fe as S,c as a,p as b};
