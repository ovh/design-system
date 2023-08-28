import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-component-file/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-file/CHANGELOG.md';
// @ts-ignore
import page from './file.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  errorMessage: {
    category: 'Misc',
    defaultValue: '',
  },
  acceptedTypes: {
    category: 'Misc',
    defaultValue: 'image/jpg, image/png, application/pdf, image/jpeg',
  },
  files: {
    category: 'Misc',
    defaultValue: [],
  },
  maxFiles: {
    category: 'Misc',
    defaultValue: 5,
  },
  headerTitle: {
    category: 'Misc',
    defaultValue: 'Drag and drop a file',
  },
  dividerLabel: {
    category: 'Misc',
    defaultValue: 'or',
  },
  selectFilesLabel: {
    category: 'Misc',
    defaultValue: 'select files',
  }
};

export default {
  title: 'UI Components/File [atom]/Web Component',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <script>
      const odsUpload = document.querySelector('osds-file');

      let requests = {};

      const updateFile = (file, { propertyName, value }) => {
        const files = [...odsUpload.files]
        const fileToUpdate = files.find((f) => f.id === file.id)
        if (!fileToUpdate) return

        fileToUpdate[propertyName] = value;
        // Need reassign to trigger change, we cant use odsUpload.files.find directly
        odsUpload.files = files;
      }

      odsUpload.addEventListener('odsRejectedFile', (event) => {
        alert(\`File ${event?.detail?.name} rejected\`)
      })

      odsUpload.addEventListener('odsMaxFilesReached', () => {
        alert('Max files reached')
      })

      odsUpload.addEventListener('odsFilesChange', (event) => {
        if(!event) return;

        odsUpload.files = [...odsUpload.files, ...event.detail]

        event.detail.forEach((file, index) => {
          // Generate a unique id for each file
          file.id = Math.random().toString(36).substr(2, 9);

          console.log(file)

          if (!file.progress) {
            file.progress = 0
          }

          let data = new FormData();
          data.append('file', file);

          let request = new XMLHttpRequest();
          requests[file.name] = request;
          request.open('POST', 'http://httpbin.org/post');

          request.onprogress = function(e) {
            const progress = Math.round((e.loaded / e.total) * 100);
            updateFile(file, { propertyName: 'progress', value: progress })
          }

          request.onerror = function() {
            updateFile(file, { propertyName: 'progress', value: undefined })
            updateFile(file, { propertyName: 'error', value: true })
          }

          request.onload = function() {
            updateFile(file, { propertyName: 'progress', value: 100 })
          }

          request.send(data)
        })
      })

      odsUpload.addEventListener('odsCancel', (event) => {
        if(!event) return;
        const request = requests[event.detail.name];
        if (request.status === 200) { // 200 is the default status for a request done
          request.open('DELETE', 'http://httpbin.org/delete');
          request.send(event.detail);
        } else {
          request.abort();
        }
        odsUpload.files = odsUpload.files.filter((file) => file.id !== event.detail.id);
      })
    </script>

    <osds-file ...=${getTagAttributes(args)}>
      File
    </osds-file>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
