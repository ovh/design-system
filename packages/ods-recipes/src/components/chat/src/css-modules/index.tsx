import { FileThumbnail, type FileThumbnailRemoveDetail, PromptInput, PromptInputControls, type PromptInputFileChangeDetails, PromptInputFileUploadButton, PromptInputFiles, type PromptInputInputSubmitDetails, PromptInputSendButton, PromptInputTextControl } from '@ovhcloud/ods-react';
import { type JSX, useEffect, useRef, useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { MessagesProvider, useMessages } from './useMessages';
import style from './index.module.scss';

const PROCESSING_MESSAGE = {
  author: 'Assistant',
  processing: true,
  uuid: crypto.randomUUID(),
};

const ChatRoot = (): JSX.Element => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isReplying, messages, postMessage } = useMessages();
  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  function onFileChange({ files }: PromptInputFileChangeDetails): void {
    setFiles((currentFiles) => [...currentFiles, ...files]);
  }

  function onFileRemove({ file }: FileThumbnailRemoveDetail): void {
    setFiles((files) => files.filter((f) => f !== file));
  }

  async function onSubmit({ inputValue }: PromptInputInputSubmitDetails): Promise<void> {
    setIsSubmitting(true);

    postMessage(inputValue, files)
      .then(() => setFiles([]))
      .finally(() => setIsSubmitting(false));
  }

  return (
    <div className={ style['chat'] }>
      <div
        className={ style['chat__messages'] }
        ref={ messageContainerRef }>
        {
          messages.map((message, idx) => (
            <ChatMessage
              key={ message.uuid }
              message={ message }
              previousAuthor={ messages[idx - 1]?.author } />
          ))
        }

        {
          isReplying &&
          <ChatMessage message={ PROCESSING_MESSAGE } />
        }
      </div>

      <PromptInput
        fileCollection={ files }
        loading={ isSubmitting }
        onFileChange={ onFileChange }
        onInputSubmit={ onSubmit }>
        <PromptInputFiles>
          {
            files.map((file, idx) => (
              <FileThumbnail
                file={ file }
                key={ idx }
                onFileRemove={ onFileRemove } />
            ))
          }
        </PromptInputFiles>

        <PromptInputControls>
          <PromptInputFileUploadButton multiple />

          <PromptInputTextControl />

          <PromptInputSendButton />
        </PromptInputControls>
      </PromptInput>
    </div>
  );
};

const Chat = (): JSX.Element => {
  return (
    <MessagesProvider>
      <ChatRoot />
    </MessagesProvider>
  );
};

export {
  Chat,
};
