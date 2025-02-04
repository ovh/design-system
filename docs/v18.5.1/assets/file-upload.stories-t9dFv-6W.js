import{d as oe}from"./ods-file-upload2-CPd6D9Z5.js";import{x as a,o as te,C as l}from"./controls-DX883vx3.js";const ne=oe;var F=Object.freeze,re=Object.defineProperty,i=(e,se)=>F(re(e,"raw",{value:F(se||e.slice())})),g,U,x,y,b,v,L,E,C,h;ne();const pe={title:"ODS Components/Form elements/File Upload",component:"ods-file-upload"},d={render:e=>a(g||(g=i([`
  <ods-file-upload class="my-file-upload"
                   accept="`,`"
                   accepted-file-label="`,`"
                   browse-file-label="`,`"
                   dropzone-label="`,`"
                   error="`,`"
                   id="demo-file-upload"
                   is-disabled="`,`"
                   max-file="`,`"
                   max-file-label="`,`"
                   max-size="`,`"
                   max-size-label="`,`"
                   upload-success-label="`,`">
  </ods-file-upload>
  <style>
    .my-file-upload {
      `,`
    }

    .my-file-upload::part(dropzone) {
      `,`
    }

    .my-file-upload::part(file-list) {
      `,`
    }
  </style>
  <script>
    (() => {
      const demoFileUpload = document.querySelector('#demo-file-upload');

      demoFileUpload.addEventListener('odsChange', ({ detail }) => {
        demoFileUpload.files = (demoFileUpload.files || []).concat(detail.files.map((file) => {
            file.isUploaded = true;
            return file;
        }));
      });

      demoFileUpload.addEventListener('odsCancel', ({ detail }) => {
        demoFileUpload.files = demoFileUpload.files.filter((file) => file.odsId !== detail.odsId);
      });
    })();
  <\/script>
  `])),e.accept,e.acceptedFileLabel,e.browseFileLabel,e.dropzoneLabel,e.error,e.isDisabled,e.maxFile,e.maxFileLabel,e.maxSize,e.maxSizeLabel,e.uploadSuccessLabel,e.customCss,e.customCssPartDropzone,e.customCssPartFileList),argTypes:te({accept:{table:{category:l.general,defaultValue:{summary:""},type:{summary:"string"}},control:"text",description:"Same as native input file `accept`, use the `acceptedFileLabel` attribute to display a label to the user"},acceptedFileLabel:{table:{category:l.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},browseFileLabel:{table:{category:l.general,defaultValue:{summary:"Browse files"},type:{summary:"string"}},control:"text"},customCss:{table:{category:l.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set custom style properties. Example: "width: 500px;"'},customCssPartDropzone:{table:{category:l.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set custom style properties. Example: "width: 500px;"'},customCssPartFileList:{table:{category:l.design,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text",description:'Set custom style properties. Example: "width: 500px;"'},dropzoneLabel:{table:{category:l.general,defaultValue:{summary:"Drag & drop a file"},type:{summary:"string"}},control:"text"},error:{table:{category:l.general,defaultValue:{summary:""},type:{summary:"string"}},control:"text"},isDisabled:{table:{category:l.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},maxFile:{table:{category:l.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},maxFileLabel:{table:{category:l.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},maxSize:{table:{category:l.general,defaultValue:{summary:"ø"},type:{summary:"number"}},control:"number"},maxSizeLabel:{table:{category:l.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},uploadSuccessLabel:{table:{category:l.general,defaultValue:{summary:"File uploaded"},type:{summary:"string"}},control:"text"}}),args:{accept:"",browseFileLabel:"Browse files",dropzoneLabel:"Drag & drop a file",error:"",isDisabled:!1,uploadSuccessLabel:"File uploaded"}},s={tags:["isHidden"],render:()=>a(U||(U=i([`
<ods-file-upload accept="image/png"
                 accepted-file-label="Png file only"
                 id="accept-file-upload">
</ods-file-upload>
<script>
  (() => {
    const acceptFileUpload = document.querySelector('#accept-file-upload');

    acceptFileUpload.addEventListener('odsChange', ({ detail }) => {
      acceptFileUpload.files = (acceptFileUpload.files || []).concat(detail.files);
      if (detail.noError) {
        acceptFileUpload.error = '';
      }
    });

    acceptFileUpload.addEventListener('odsCancel', ({ detail }) => {
      acceptFileUpload.files = acceptFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });

    acceptFileUpload.addEventListener('odsRejected', ({ detail }) => {
      const filesName = detail.files.map((file) => file.name).join(', ');
      acceptFileUpload.error = detail.files.length > 1 ?
        \`Files "\${filesName}" are not of the expected format\` :
        \`File "\${filesName}" is not of the expected format\`;
    });
  })();
<\/script>
  `],[`
<ods-file-upload accept="image/png"
                 accepted-file-label="Png file only"
                 id="accept-file-upload">
</ods-file-upload>
<script>
  (() => {
    const acceptFileUpload = document.querySelector('#accept-file-upload');

    acceptFileUpload.addEventListener('odsChange', ({ detail }) => {
      acceptFileUpload.files = (acceptFileUpload.files || []).concat(detail.files);
      if (detail.noError) {
        acceptFileUpload.error = '';
      }
    });

    acceptFileUpload.addEventListener('odsCancel', ({ detail }) => {
      acceptFileUpload.files = acceptFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });

    acceptFileUpload.addEventListener('odsRejected', ({ detail }) => {
      const filesName = detail.files.map((file) => file.name).join(', ');
      acceptFileUpload.error = detail.files.length > 1 ?
        \\\`Files "\\\${filesName}" are not of the expected format\\\` :
        \\\`File "\\\${filesName}" is not of the expected format\\\`;
    });
  })();
<\/script>
  `])))},o={tags:["isHidden"],render:()=>a(x||(x=i([`
<ods-file-upload class="custom-file-upload"
                 id="css-file-upload">
</ods-file-upload>
<style>
  .custom-file-upload {
    width: 300px;
  }

  .custom-file-upload::part(file-list) {
    max-height: 75px;
    overflow: scroll;
  }
</style>
<script>
  (() => {
    const cssFileUpload = document.querySelector('#css-file-upload');

    cssFileUpload.addEventListener('odsChange', ({ detail }) => {
      cssFileUpload.files = (cssFileUpload.files || []).concat(detail.files);
    });

    cssFileUpload.addEventListener('odsCancel', ({ detail }) => {
      cssFileUpload.files = cssFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });
  })();
<\/script>
  `])))},t={tags:["isHidden"],render:()=>a(y||(y=i([`
<ods-file-upload accept="image/*"
                 accepted-file-label="Formats acceptés : images"
                 browse-file-label="Parcourir les fichiers"
                 dropzone-label="Glisser-déposer des fichiers"
                 id="labels-file-upload"
                 max-file="3"
                 max-file-label="Nombre maximal de fichiers :"
                 max-size="524288000"
                 max-size-label="Taille de fichier max :"
                 upload-success-label="Fichier uploadé">
</ods-file-upload>
<script>
  (() => {
    const labelsFileUpload = document.querySelector('#labels-file-upload');

    labelsFileUpload.addEventListener('odsChange', ({ detail }) => {
      labelsFileUpload.files = (labelsFileUpload.files || []).concat(detail.files).map((file) => {
        file.isUploaded = true;
        return file;
      });
      if (detail.noError) {
        labelsFileUpload.error = '';
      }
    });

    labelsFileUpload.addEventListener('odsCancel', ({ detail }) => {
      labelsFileUpload.files = labelsFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });

    labelsFileUpload.addEventListener('odsRejected', () => {
      labelsFileUpload.error = 'Les fichiers doivent être de type image';
    });
  })();
<\/script>
  `])))},n={tags:["isHidden"],render:()=>a(b||(b=i([`
<ods-file-upload id="default-file-upload"></ods-file-upload>
<script>
  (() => {
    const defaultFileUpload = document.querySelector('#default-file-upload');

    defaultFileUpload.addEventListener('odsChange', ({ detail }) => {
      defaultFileUpload.files = (defaultFileUpload.files || []).concat(detail.files);
    });

    defaultFileUpload.addEventListener('odsCancel', ({ detail }) => {
      defaultFileUpload.files = defaultFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });
  })();
<\/script>
  `])))},r={tags:["isHidden"],render:()=>a`
<ods-file-upload is-disabled></ods-file-upload>
  `},p={tags:["isHidden"],render:()=>a(v||(v=i([`
<ods-file-upload id="inverse-file-upload"></ods-file-upload>
<script>
  (() => {
    const inverseFileUpload = document.querySelector('#inverse-file-upload');

    inverseFileUpload.addEventListener('odsChange', ({ detail }) => {
      inverseFileUpload.files = detail.files.concat(inverseFileUpload.files || []);
    });

    inverseFileUpload.addEventListener('odsCancel', ({ detail }) => {
      inverseFileUpload.files = inverseFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });
  })();
<\/script>
  `])))},c={tags:["isHidden"],render:()=>a(L||(L=i([`
<ods-file-upload id="max-file-upload"
                 max-file="2"
                 max-file-label="Maximum file allowed:">
</ods-file-upload>
<script>
  (() => {
    const maxFileUpload = document.querySelector('#max-file-upload');

    maxFileUpload.addEventListener('odsChange', ({ detail }) => {
      maxFileUpload.files = (maxFileUpload.files || []).concat(detail.files);
      if (detail.noError) {
        maxFileUpload.error = '';
      }
    });

    maxFileUpload.addEventListener('odsCancel', ({ detail }) => {
      maxFileUpload.files = maxFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });

    maxFileUpload.addEventListener('odsRejected', ({ detail }) => {
      maxFileUpload.error = \`Max file reached, \${detail.files.length} file(s) rejected\`;
    });
  })();
<\/script>
  `],[`
<ods-file-upload id="max-file-upload"
                 max-file="2"
                 max-file-label="Maximum file allowed:">
</ods-file-upload>
<script>
  (() => {
    const maxFileUpload = document.querySelector('#max-file-upload');

    maxFileUpload.addEventListener('odsChange', ({ detail }) => {
      maxFileUpload.files = (maxFileUpload.files || []).concat(detail.files);
      if (detail.noError) {
        maxFileUpload.error = '';
      }
    });

    maxFileUpload.addEventListener('odsCancel', ({ detail }) => {
      maxFileUpload.files = maxFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });

    maxFileUpload.addEventListener('odsRejected', ({ detail }) => {
      maxFileUpload.error = \\\`Max file reached, \\\${detail.files.length} file(s) rejected\\\`;
    });
  })();
<\/script>
  `])))},f={tags:["isHidden"],render:()=>a(E||(E=i([`
<ods-file-upload id="max-size-upload"
                 max-size="1048576"
                 max-size-label="No file larger than:">
</ods-file-upload>
<script>
  (() => {
    const maxSizeUpload = document.querySelector('#max-size-upload');

    maxSizeUpload.addEventListener('odsChange', ({ detail }) => {
      maxSizeUpload.files = (maxSizeUpload.files || []).concat(detail.files);
      if (detail.noError) {
        maxSizeUpload.error = '';
      }
    });

    maxSizeUpload.addEventListener('odsCancel', ({ detail }) => {
      maxSizeUpload.files = maxSizeUpload.files.filter((file) => file.odsId !== detail.odsId);
    });

    maxSizeUpload.addEventListener('odsRejected', ({ detail }) => {
      maxSizeUpload.error = \`\${detail.files.length} file(s) too large\`;
    });
  })();
<\/script>
  `],[`
<ods-file-upload id="max-size-upload"
                 max-size="1048576"
                 max-size-label="No file larger than:">
</ods-file-upload>
<script>
  (() => {
    const maxSizeUpload = document.querySelector('#max-size-upload');

    maxSizeUpload.addEventListener('odsChange', ({ detail }) => {
      maxSizeUpload.files = (maxSizeUpload.files || []).concat(detail.files);
      if (detail.noError) {
        maxSizeUpload.error = '';
      }
    });

    maxSizeUpload.addEventListener('odsCancel', ({ detail }) => {
      maxSizeUpload.files = maxSizeUpload.files.filter((file) => file.odsId !== detail.odsId);
    });

    maxSizeUpload.addEventListener('odsRejected', ({ detail }) => {
      maxSizeUpload.error = \\\`\\\${detail.files.length} file(s) too large\\\`;
    });
  })();
<\/script>
  `])))},u={tags:["isHidden"],parameters:{layout:"centered"},decorators:[e=>a`<div style="text-align: center;">${e()}</div>`],render:()=>a(C||(C=i([`
<ods-file-upload id="overview-file-upload"></ods-file-upload>
<script>
  (() => {
    const overviewFileUpload = document.querySelector('#overview-file-upload');

    overviewFileUpload.addEventListener('odsChange', ({ detail }) => {
      overviewFileUpload.files = (overviewFileUpload.files || []).concat(detail.files);
    });

    overviewFileUpload.addEventListener('odsCancel', ({ detail }) => {
      overviewFileUpload.files = overviewFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });
  })();
<\/script>
  `])))},m={tags:["isHidden"],render:()=>a(h||(h=i([`
<ods-file-upload id="progress-file-upload"></ods-file-upload>
<script>
  (() => {
    const progressFileUpload = document.querySelector('#progress-file-upload');
    const openRequests = {};

    function updateFile(file, { propertyName, value }) {
      progressFileUpload.files = progressFileUpload.files.map((currentFile) => {
        if (currentFile.odsId === file.odsId) {
          currentFile[propertyName] = value;
        }
        return currentFile;
      });
    }

    progressFileUpload.addEventListener('odsChange', ({ detail }) => {
      detail.files.forEach((file) => {
        let data = new FormData();
        let request = new XMLHttpRequest();

        file.progress = 0;
        data.append('file', file);
        openRequests[file.odsId] = request;

        request.open('POST', 'http://httpbin.org/post');

        request.onprogress = function(e) {
          const progress = Math.round((e.loaded / e.total) * 100);
          updateFile(file, { propertyName: 'progress', value: progress });
        };

        request.onerror = function() {
          updateFile(file, { propertyName: 'progress', value: undefined });
          updateFile(file, { propertyName: 'error', value: 'Error while uploading' });
        };

        request.onload = function() {
          updateFile(file, { propertyName: 'progress', value: 100 });
          updateFile(file, { propertyName: 'isUploaded', value: true });
        };

        request.send(data);
      });

      progressFileUpload.files = (progressFileUpload.files || []).concat(detail.files);
    });

    progressFileUpload.addEventListener('odsCancel', ({ detail }) => {
      const request = openRequests[detail.odsId];

      if (request.status === 200) {
        request.open('DELETE', 'http://httpbin.org/delete');
        request.send(detail);
      } else {
        request.abort();
      }

      progressFileUpload.files = progressFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });
  })();
<\/script>
  `])))};var S,z,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: arg => html\`
  <ods-file-upload class="my-file-upload"
                   accept="\${arg.accept}"
                   accepted-file-label="\${arg.acceptedFileLabel}"
                   browse-file-label="\${arg.browseFileLabel}"
                   dropzone-label="\${arg.dropzoneLabel}"
                   error="\${arg.error}"
                   id="demo-file-upload"
                   is-disabled="\${arg.isDisabled}"
                   max-file="\${arg.maxFile}"
                   max-file-label="\${arg.maxFileLabel}"
                   max-size="\${arg.maxSize}"
                   max-size-label="\${arg.maxSizeLabel}"
                   upload-success-label="\${arg.uploadSuccessLabel}">
  </ods-file-upload>
  <style>
    .my-file-upload {
      \${arg.customCss}
    }

    .my-file-upload::part(dropzone) {
      \${arg.customCssPartDropzone}
    }

    .my-file-upload::part(file-list) {
      \${arg.customCssPartFileList}
    }
  </style>
  <script>
    (() => {
      const demoFileUpload = document.querySelector('#demo-file-upload');

      demoFileUpload.addEventListener('odsChange', ({ detail }) => {
        demoFileUpload.files = (demoFileUpload.files || []).concat(detail.files.map((file) => {
            file.isUploaded = true;
            return file;
        }));
      });

      demoFileUpload.addEventListener('odsCancel', ({ detail }) => {
        demoFileUpload.files = demoFileUpload.files.filter((file) => file.odsId !== detail.odsId);
      });
    })();
  <\/script>
  \`,
  argTypes: orderControls({
    accept: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ''
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'Same as native input file \`accept\`, use the \`acceptedFileLabel\` attribute to display a label to the user'
    },
    acceptedFileLabel: {
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
    browseFileLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Browse files'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'Set custom style properties. Example: "width: 500px;"'
    },
    customCssPartDropzone: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'Set custom style properties. Example: "width: 500px;"'
    },
    customCssPartFileList: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text',
      description: 'Set custom style properties. Example: "width: 500px;"'
    },
    dropzoneLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'Drag & drop a file'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    error: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ''
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
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
    maxFile: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    maxFileLabel: {
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
    maxSize: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    maxSizeLabel: {
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
    uploadSuccessLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'File uploaded'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    }
  }),
  args: {
    accept: '',
    browseFileLabel: 'Browse files',
    dropzoneLabel: 'Drag & drop a file',
    error: '',
    isDisabled: false,
    uploadSuccessLabel: 'File uploaded'
  }
}`,...(I=(z=d.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var O,q,w;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-file-upload accept="image/png"
                 accepted-file-label="Png file only"
                 id="accept-file-upload">
</ods-file-upload>
<script>
  (() => {
    const acceptFileUpload = document.querySelector('#accept-file-upload');

    acceptFileUpload.addEventListener('odsChange', ({ detail }) => {
      acceptFileUpload.files = (acceptFileUpload.files || []).concat(detail.files);
      if (detail.noError) {
        acceptFileUpload.error = '';
      }
    });

    acceptFileUpload.addEventListener('odsCancel', ({ detail }) => {
      acceptFileUpload.files = acceptFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });

    acceptFileUpload.addEventListener('odsRejected', ({ detail }) => {
      const filesName = detail.files.map((file) => file.name).join(', ');
      acceptFileUpload.error = detail.files.length > 1 ?
        \\\`Files "\\\${filesName}" are not of the expected format\\\` :
        \\\`File "\\\${filesName}" is not of the expected format\\\`;
    });
  })();
<\/script>
  \`
}`,...(w=(q=s.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var R,N,T;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-file-upload class="custom-file-upload"
                 id="css-file-upload">
</ods-file-upload>
<style>
  .custom-file-upload {
    width: 300px;
  }

  .custom-file-upload::part(file-list) {
    max-height: 75px;
    overflow: scroll;
  }
</style>
<script>
  (() => {
    const cssFileUpload = document.querySelector('#css-file-upload');

    cssFileUpload.addEventListener('odsChange', ({ detail }) => {
      cssFileUpload.files = (cssFileUpload.files || []).concat(detail.files);
    });

    cssFileUpload.addEventListener('odsCancel', ({ detail }) => {
      cssFileUpload.files = cssFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });
  })();
<\/script>
  \`
}`,...(T=(N=o.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var _,$,V;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-file-upload accept="image/*"
                 accepted-file-label="Formats acceptés : images"
                 browse-file-label="Parcourir les fichiers"
                 dropzone-label="Glisser-déposer des fichiers"
                 id="labels-file-upload"
                 max-file="3"
                 max-file-label="Nombre maximal de fichiers :"
                 max-size="524288000"
                 max-size-label="Taille de fichier max :"
                 upload-success-label="Fichier uploadé">
</ods-file-upload>
<script>
  (() => {
    const labelsFileUpload = document.querySelector('#labels-file-upload');

    labelsFileUpload.addEventListener('odsChange', ({ detail }) => {
      labelsFileUpload.files = (labelsFileUpload.files || []).concat(detail.files).map((file) => {
        file.isUploaded = true;
        return file;
      });
      if (detail.noError) {
        labelsFileUpload.error = '';
      }
    });

    labelsFileUpload.addEventListener('odsCancel', ({ detail }) => {
      labelsFileUpload.files = labelsFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });

    labelsFileUpload.addEventListener('odsRejected', () => {
      labelsFileUpload.error = 'Les fichiers doivent être de type image';
    });
  })();
<\/script>
  \`
}`,...(V=($=t.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var D,j,H;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-file-upload id="default-file-upload"></ods-file-upload>
<script>
  (() => {
    const defaultFileUpload = document.querySelector('#default-file-upload');

    defaultFileUpload.addEventListener('odsChange', ({ detail }) => {
      defaultFileUpload.files = (defaultFileUpload.files || []).concat(detail.files);
    });

    defaultFileUpload.addEventListener('odsCancel', ({ detail }) => {
      defaultFileUpload.files = defaultFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });
  })();
<\/script>
  \`
}`,...(H=(j=n.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var P,A,G;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-file-upload is-disabled></ods-file-upload>
  \`
}`,...(G=(A=r.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var M,Y,B;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-file-upload id="inverse-file-upload"></ods-file-upload>
<script>
  (() => {
    const inverseFileUpload = document.querySelector('#inverse-file-upload');

    inverseFileUpload.addEventListener('odsChange', ({ detail }) => {
      inverseFileUpload.files = detail.files.concat(inverseFileUpload.files || []);
    });

    inverseFileUpload.addEventListener('odsCancel', ({ detail }) => {
      inverseFileUpload.files = inverseFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });
  })();
<\/script>
  \`
}`,...(B=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var X,J,K;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-file-upload id="max-file-upload"
                 max-file="2"
                 max-file-label="Maximum file allowed:">
</ods-file-upload>
<script>
  (() => {
    const maxFileUpload = document.querySelector('#max-file-upload');

    maxFileUpload.addEventListener('odsChange', ({ detail }) => {
      maxFileUpload.files = (maxFileUpload.files || []).concat(detail.files);
      if (detail.noError) {
        maxFileUpload.error = '';
      }
    });

    maxFileUpload.addEventListener('odsCancel', ({ detail }) => {
      maxFileUpload.files = maxFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });

    maxFileUpload.addEventListener('odsRejected', ({ detail }) => {
      maxFileUpload.error = \\\`Max file reached, \\\${detail.files.length} file(s) rejected\\\`;
    });
  })();
<\/script>
  \`
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-file-upload id="max-size-upload"
                 max-size="1048576"
                 max-size-label="No file larger than:">
</ods-file-upload>
<script>
  (() => {
    const maxSizeUpload = document.querySelector('#max-size-upload');

    maxSizeUpload.addEventListener('odsChange', ({ detail }) => {
      maxSizeUpload.files = (maxSizeUpload.files || []).concat(detail.files);
      if (detail.noError) {
        maxSizeUpload.error = '';
      }
    });

    maxSizeUpload.addEventListener('odsCancel', ({ detail }) => {
      maxSizeUpload.files = maxSizeUpload.files.filter((file) => file.odsId !== detail.odsId);
    });

    maxSizeUpload.addEventListener('odsRejected', ({ detail }) => {
      maxSizeUpload.error = \\\`\\\${detail.files.length} file(s) too large\\\`;
    });
  })();
<\/script>
  \`
}`,...(Z=(W=f.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var k,ee,le;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  decorators: [story => html\`<div style="text-align: center;">\${story()}</div>\`],
  render: () => html\`
<ods-file-upload id="overview-file-upload"></ods-file-upload>
<script>
  (() => {
    const overviewFileUpload = document.querySelector('#overview-file-upload');

    overviewFileUpload.addEventListener('odsChange', ({ detail }) => {
      overviewFileUpload.files = (overviewFileUpload.files || []).concat(detail.files);
    });

    overviewFileUpload.addEventListener('odsCancel', ({ detail }) => {
      overviewFileUpload.files = overviewFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });
  })();
<\/script>
  \`
}`,...(le=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var ae,ie,de;m.parameters={...m.parameters,docs:{...(ae=m.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-file-upload id="progress-file-upload"></ods-file-upload>
<script>
  (() => {
    const progressFileUpload = document.querySelector('#progress-file-upload');
    const openRequests = {};

    function updateFile(file, { propertyName, value }) {
      progressFileUpload.files = progressFileUpload.files.map((currentFile) => {
        if (currentFile.odsId === file.odsId) {
          currentFile[propertyName] = value;
        }
        return currentFile;
      });
    }

    progressFileUpload.addEventListener('odsChange', ({ detail }) => {
      detail.files.forEach((file) => {
        let data = new FormData();
        let request = new XMLHttpRequest();

        file.progress = 0;
        data.append('file', file);
        openRequests[file.odsId] = request;

        request.open('POST', 'http://httpbin.org/post');

        request.onprogress = function(e) {
          const progress = Math.round((e.loaded / e.total) * 100);
          updateFile(file, { propertyName: 'progress', value: progress });
        };

        request.onerror = function() {
          updateFile(file, { propertyName: 'progress', value: undefined });
          updateFile(file, { propertyName: 'error', value: 'Error while uploading' });
        };

        request.onload = function() {
          updateFile(file, { propertyName: 'progress', value: 100 });
          updateFile(file, { propertyName: 'isUploaded', value: true });
        };

        request.send(data);
      });

      progressFileUpload.files = (progressFileUpload.files || []).concat(detail.files);
    });

    progressFileUpload.addEventListener('odsCancel', ({ detail }) => {
      const request = openRequests[detail.odsId];

      if (request.status === 200) {
        request.open('DELETE', 'http://httpbin.org/delete');
        request.send(detail);
      } else {
        request.abort();
      }

      progressFileUpload.files = progressFileUpload.files.filter((file) => file.odsId !== detail.odsId);
    });
  })();
<\/script>
  \`
}`,...(de=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const ce=["Demo","Accept","CustomCSS","CustomLabels","Default","Disabled","InverseFileList","MaxFile","MaxSize","Overview","Progress"],me=Object.freeze(Object.defineProperty({__proto__:null,Accept:s,CustomCSS:o,CustomLabels:t,Default:n,Demo:d,Disabled:r,InverseFileList:p,MaxFile:c,MaxSize:f,Overview:u,Progress:m,__namedExportsOrder:ce,default:pe},Symbol.toStringTag,{value:"Module"}));export{s as A,o as C,n as D,me as F,p as I,c as M,u as O,m as P,r as a,t as b,f as c};
