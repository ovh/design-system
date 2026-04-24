import { type Meta, type StoryObj } from "@storybook/react";
import React, { useState } from "react";
import {
  FormField,
  FormFieldError,
  FormFieldHelper,
  FormFieldLabel,
} from "../../../../ods-react/src/components/form-field/src";
import { FileThumbnail } from "../../../../ods-react/src/components/file-thumbnail/src";
import {
  PromptInput,
  PromptInputControls,
  PromptInputFiles,
  PromptInputFileUploadButton,
  type PromptInputProp,
  PromptInputSendButton,
  PromptInputTextControl,
} from "../../../../ods-react/src/components/prompt-input/src";
import { TEXT_PRESET, Text } from "../../../../ods-react/src/components/text/src";
import { CONTROL_CATEGORY } from "../../../src/constants/controls";
import { excludeFromDemoControls, orderControls } from "../../../src/helpers/controls";
import { staticSourceRenderConfig } from "../../../src/helpers/source";
import { Divider } from "../../../../ods-react/src/components/divider/src";

type Story = StoryObj<PromptInputProp>;

const meta: Meta<PromptInputProp> = {
  argTypes: excludeFromDemoControls([
    "defaultValue",
    "fileCollection",
    "name",
    "onInputSubmit",
    "onValueChange",
    "onFileChange",
  ]),
  component: PromptInput,
  subcomponents: {
    PromptInputControls,
    PromptInputFiles,
    PromptInputFileUploadButton,
    PromptInputSendButton,
    PromptInputTextControl,
  },
  tags: ["new"],
  title: "React Components/Prompt Input",
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    disabled: {
      control: "boolean",
      table: {
        category: CONTROL_CATEGORY.general,
      },
    },
    loading: {
      control: "boolean",
      table: {
        category: CONTROL_CATEGORY.general,
      },
    },
    readOnly: {
      control: "boolean",
      table: {
        category: CONTROL_CATEGORY.general,
      },
    },
  }),
  render: (arg) => (
    <PromptInput loading={arg.loading} readOnly={arg.readOnly} disabled={arg.disabled}>
      <PromptInputControls>
        <PromptInputFileUploadButton />
        <PromptInputTextControl placeholder="Type your message here..." />
        <PromptInputSendButton />
      </PromptInputControls>
    </PromptInput>
  ),
};

export const AnatomyTech: Story = {
  tags: ["!dev"],
  render: ({}) => {
    const uploadedFile = new File(["foo"], "a-default-text-file.txt", { type: "text/plain" });

    return (
      <div style={{minWidth: '500px'}}>
        <PromptInput>
          <PromptInputFiles>
            <FileThumbnail file={uploadedFile} />
          </PromptInputFiles>
          <PromptInputControls>
            <PromptInputFileUploadButton />
            <PromptInputTextControl placeholder="This is where you can ask about something…" />
            <PromptInputSendButton />
          </PromptInputControls>
        </PromptInput>
      </div>
    );
  },
};

export const Default: Story = {
  tags: ["!dev"],
  globals: {
    imports:
      "import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';",
  },
  render: ({}) => (
    <PromptInput>
      <PromptInputControls>
        <PromptInputFileUploadButton />
        <PromptInputTextControl />
        <PromptInputSendButton />
      </PromptInputControls>
    </PromptInput>
  ),
};

export const Overview: Story = {
  tags: ["!dev"],
  render: ({}) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([
      new File(["foo"], "a-default-text-file.txt", { type: "text/plain" }),
      new File(["foo"], "another-default-text-file.txt", { type: "text/plain" }),
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = ({ files }: { files: File[] }): void => {
      setUploadedFiles((prev) => [...prev, ...files]);
    };

    const handleFileRemove = (fileToRemove: File): void => {
      setUploadedFiles((prev) => prev.filter((file) => file !== fileToRemove));
    };

    const handleInputSubmit = (): void => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    return (
      <PromptInput
        loading={isLoading}
        onFileChange={handleFileChange}
        onInputSubmit={handleInputSubmit}
        fileCollection={uploadedFiles}
      >
        {Boolean(uploadedFiles?.length) && (
          <PromptInputFiles>
            {uploadedFiles.map((file, index) => (
              <FileThumbnail key={index} file={file} onFileRemove={() => handleFileRemove(file)} />
            ))}
          </PromptInputFiles>
        )}
        <PromptInputControls>
          <PromptInputFileUploadButton multiple aria-description="description" aria-label="label" />
          <PromptInputTextControl
            aria-label="Ask someone about something…"
            placeholder="Ask someone about something…"
          />
          <PromptInputSendButton aria-label={isLoading ? "Sending message…" : "Send message"} />
        </PromptInputControls>
      </PromptInput>
    );
  },
};

export const Disabled: Story = {
  tags: ["!dev"],
  globals: {
    imports:
      "import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';",
  },
  render: ({}) => (
    <PromptInput disabled defaultValue="Nobody’s here to answer…">
      <PromptInputControls>
        <PromptInputFileUploadButton aria-label="Attach a file" />
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton aria-label="Send message" />
      </PromptInputControls>
    </PromptInput>
  ),
};

export const ReadOnly: Story = {
  tags: ["!dev"],
  globals: {
    imports:
      "import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';",
  },
  render: ({}) => (
    <PromptInput readOnly defaultValue="This is a read-only prompt input.">
      <PromptInputControls>
        <PromptInputFileUploadButton aria-label="Attach a file" />
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton aria-label="Send message" />
      </PromptInputControls>
    </PromptInput>
  ),
};

export const Loading: Story = {
  tags: ["!dev"],
  globals: {
    imports:
      "import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';",
  },
  render: ({}) => (
    <PromptInput defaultValue="“Someone” is processing your request…" loading>
      <PromptInputControls>
        <PromptInputFileUploadButton aria-label="Attach a file" />
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton aria-label="Send message" />
      </PromptInputControls>
    </PromptInput>
  ),
};

export const WithFiles: Story = {
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  globals: {
    imports:
      "import { FileThumbnail, PromptInput, PromptInputControls, PromptInputFiles, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';",
  },
  tags: ["!dev"],
  render: ({}) => {
    const fakePdfFile = new File(["foo"], "loading-pdf-file.pdf", { type: "application/pdf" });
    const fakeTextFile = new File(["bar"], "text-file.txt", { type: "text/plain" });

    return (
      <PromptInput fileCollection={[fakePdfFile, fakeTextFile]}>
        <PromptInputFiles>
          <FileThumbnail file={fakePdfFile} progress={45} />
          <FileThumbnail file={fakeTextFile} />
        </PromptInputFiles>
        <PromptInputControls>
          <PromptInputFileUploadButton aria-label="Attach a file" />
          <PromptInputTextControl aria-label="Ask someone about something…" />
          <PromptInputSendButton aria-label="Send message" />
        </PromptInputControls>
      </PromptInput>
    );
  },
};

export const InFormField: Story = {
  globals: {
    imports: `import { Divider, FormField, FormFieldError, FormFieldHelper, FormFieldLabel, PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton, Text, TEXT_PRESET } from '@ovhcloud/ods-react';
import { useState } from 'react';`,
  },
  tags: ["!dev"],
  parameters: {
    docs: {
      source: { ...staticSourceRenderConfig() },
    },
  },
  render: ({}) => {
    const maxLength = 60;
    const [inputValue, setInputValue] = useState("Some text that is almost hitting the length limit...");

    return (
      <FormField invalid={inputValue?.length > maxLength}>
        <FormFieldLabel>Here is a prompt input inside a form field:</FormFieldLabel>
        <PromptInput
          defaultValue={inputValue}
          name="prompt-input-textArea"
          onValueChange={({ inputValue }) => setInputValue(inputValue)}
        >
          <PromptInputControls>
            <PromptInputFileUploadButton aria-label="Attach a file" />
            <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, rowGap: "var(--ods-theme-row-gap)" }}>
              <PromptInputTextControl aria-label="Ask someone about something…" />
              <Divider style={{ width: "100%" }} />
              <FormFieldHelper>
                <Text preset={TEXT_PRESET.caption}>
                  {inputValue?.length} / {maxLength}
                </Text>
              </FormFieldHelper>
            </div>
            <PromptInputSendButton aria-label="Send message" />
          </PromptInputControls>
        </PromptInput>
        <FormFieldError>Character limit exceeded</FormFieldError>
      </FormField>
    );
  },
};

export const AccessibilityAriaLabel: Story = {
  tags: ["!dev"],
  globals: {
    imports:
      "import { PromptInput, PromptInputControls, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';",
  },
  render: ({}) => (
    <PromptInput>
      <PromptInputControls>
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton />
      </PromptInputControls>
    </PromptInput>
  ),
};

export const AccessibilityButtonsLabels: Story = {
  tags: ["!dev"],
  globals: {
    imports:
      "import { PromptInput, PromptInputControls, PromptInputFileUploadButton, PromptInputTextControl, PromptInputSendButton } from '@ovhcloud/ods-react';",
  },
  render: ({}) => (
    <PromptInput>
      <PromptInputControls>
        <PromptInputFileUploadButton aria-label="Attach file" />
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton aria-label="Send request" />
      </PromptInputControls>
    </PromptInput>
  ),
};

export const AccessibilityLoadingState: Story = {
  tags: ["!dev"],
  globals: {
    imports:
      "import { PromptInput, PromptInputControls, PromptInputTextControl, PromptInputSendButton, PromptInputFileUploadButton } from '@ovhcloud/ods-react';",
  },
  render: ({}) => (
    <PromptInput loading>
      <PromptInputControls>
        <PromptInputFileUploadButton aria-label="Attach file" />
        <PromptInputTextControl aria-label="Ask someone about something…" />
        <PromptInputSendButton aria-label="Request is processing" />
      </PromptInputControls>
    </PromptInput>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: "fullscreen",
  },
  tags: ["!dev"],
  render: ({}) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <PromptInput>
        <PromptInputFiles>
          <FileThumbnail file={new File(["foo"], "file1.pdf", { type: "application/pdf" })} progress={45} />
          <FileThumbnail file={new File(["bar"], "file2.txt", { type: "text/plain" })} />
        </PromptInputFiles>
        <PromptInputControls>
          <PromptInputFileUploadButton aria-label="Attach file" />
          <PromptInputTextControl
            aria-label="Ask someone about something…"
            placeholder="Ask someone about something…"
          />
          <PromptInputSendButton aria-label="Send request" />
        </PromptInputControls>
      </PromptInput>
      <PromptInput defaultValue="This is a default value">
        <PromptInputControls>
          <PromptInputFileUploadButton aria-label="Attach file" />
          <PromptInputTextControl
            aria-label="Ask someone about something…"
            placeholder="Ask someone about something…"
          />
          <PromptInputSendButton aria-label="Send request" />
        </PromptInputControls>
      </PromptInput>
      <PromptInput disabled defaultValue="This is a default value in a disabled prompt input.">
        <PromptInputControls>
          <PromptInputFileUploadButton aria-label="Attach file" />
          <PromptInputTextControl
            aria-label="Ask someone about something…"
            placeholder="Ask someone about something…"
          />
          <PromptInputSendButton aria-label="Request is processing" />
        </PromptInputControls>
      </PromptInput>
      <PromptInput loading>
        <PromptInputControls>
          <PromptInputFileUploadButton aria-label="Attach file" />
          <PromptInputTextControl
            aria-label="Ask someone about something…"
            placeholder="Placeholder in loading prompt input…"
          />
          <PromptInputSendButton aria-label="Request is processing" />
        </PromptInputControls>
      </PromptInput>
      <PromptInput readOnly defaultValue="This is a read-only prompt input.">
        <PromptInputControls>
          <PromptInputTextControl
            aria-label="Ask someone about something…"
            placeholder="Ask someone about something…"
          />
          <PromptInputSendButton aria-label="Request is processing" />
        </PromptInputControls>
      </PromptInput>
    </div>
  ),
};
