import * as ODSReact from '@ovhcloud/ods-react';
import { type StoryObj } from '@storybook/react';
import { type StoryState, makeLiveEditStory } from 'storybook-addon-code-editor';

function addLiveEditorToStory(story: StoryObj, code: string) {
  makeLiveEditStory(story, {
    ...getEditorConfig(),
    code: code,
  });
}

function getEditorConfig(): Omit<StoryState, 'code'> {
  return {
    availableImports: {
      '@ovhcloud/ods-react': ODSReact,
    },
    defaultEditorOptions: {
      fontFamily: 'Source Code Pro',
      fontSize: 14,
      minimap: { enabled: false },
      padding: { bottom: 8, top: 8 },
      scrollBeyondLastLine: false,
    },
    modifyEditor: (monaco) => {
      monaco.editor.setTheme('vs-dark');
    },
  };
}

export {
  addLiveEditorToStory,
  getEditorConfig,
};
