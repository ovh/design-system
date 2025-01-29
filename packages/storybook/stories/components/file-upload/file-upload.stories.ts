import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-file-upload';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Form elements/File Upload',
  component: 'ods-file-upload',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg) => html`
  <ods-file-upload class="my-file-upload"
                   accept="${arg.accept}"
                   accepted-file-label="${arg.acceptedFileLabel}"
                   browse-file-label="${arg.browseFileLabel}"
                   dropzone-label="${arg.dropzoneLabel}"
                   error="${arg.error}"
                   id="demo-file-upload"
                   is-disabled="${arg.isDisabled}"
                   max-file="${arg.maxFile}"
                   max-file-label="${arg.maxFileLabel}"
                   max-size="${arg.maxSize}"
                   max-size-label="${arg.maxSizeLabel}"
                   upload-success-label="${arg.uploadSuccessLabel}">
  </ods-file-upload>
  <style>
    .my-file-upload {
      ${arg.customCss}
    }

    .my-file-upload::part(dropzone) {
      ${arg.customCssPartDropzone}
    }

    .my-file-upload::part(file-list) {
      ${arg.customCssPartFileList}
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
  </script>
  `,
  argTypes: orderControls({
    accept: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      control: 'text',
      description: 'Same as native input file `accept`, use the `acceptedFileLabel` attribute to display a label to the user'
    },
    acceptedFileLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    browseFileLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Browse files' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    customCss: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set custom style properties. Example: "width: 500px;"',
    },
    customCssPartDropzone: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set custom style properties. Example: "width: 500px;"',
    },
    customCssPartFileList: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
      description: 'Set custom style properties. Example: "width: 500px;"',
    },
    dropzoneLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Drag & drop a file' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    error: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' }
      },
      control: 'boolean',
    },
    maxFile: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' }
      },
      control: 'number',
    },
    maxFileLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    maxSize: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' }
      },
      control: 'number',
    },
    maxSizeLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    uploadSuccessLabel: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'File uploaded' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
  }),
  args: {
    accept: '',
    browseFileLabel: 'Browse files',
    dropzoneLabel: 'Drag & drop a file',
    error: '',
    isDisabled: false,
    uploadSuccessLabel: 'File uploaded',
  },
};

export const Accept: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
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
</script>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
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
</script>
  `,
};

export const CustomLabels: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
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
</script>
  `,
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
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
</script>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-file-upload is-disabled></ods-file-upload>
  `,
};

export const InverseFileList: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
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
</script>
  `,
};

export const MaxFile: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
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
</script>
  `,
};

export const MaxSize: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
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
</script>
  `,
};

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  decorators: [(story) => html`<div style="text-align: center;">${story()}</div>`],
  render: () => html`
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
</script>
  `,
};

export const Progress: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
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
</script>
  `,
};
