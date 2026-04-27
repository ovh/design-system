import { type JSX, type ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { type Message, fetch, post, randomInt } from './fakeApi';

interface MessagesProviderProp {
  children: ReactNode,
}

type MessagesContextType = Omit<MessagesProviderProp, 'children'> & {
  isReplying: boolean;
  messages: Message[];
  postMessage: (content?: string, files?: File[]) => Promise<void>;
};

const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

function MessagesProvider({ children }: MessagesProviderProp): JSX.Element {
  const [isReplying, setIsReplying] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch().then(setMessages);
  }, [setMessages]);

  async function postMessage(content?: string, files?: File[]): Promise<void> {
    return post(content, files)
      .then((newMessage) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          newMessage,
        ]);
        setIsReplying(true);
        triggerAiReply();
      });
  }

  // Trying to mimic bi-directional connection with the API
  async function triggerAiReply(): Promise<void> {
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          author: 'Assistant',
          content: 'Picture this as a clever answer to your previous statements',
          createdAt: new Date(),
          uuid: crypto.randomUUID(),
        },
      ]);
      setIsReplying(false);
    }, randomInt(1000, 3000));
  }

  return (
    <MessagesContext.Provider value={{
      isReplying,
      messages,
      postMessage,
    }}>
      { children }
    </MessagesContext.Provider>
  );
}

function useMessages(): MessagesContextType {
  const contextValue = useContext(MessagesContext);

  if (!contextValue) {
    throw new Error('useMessages must be used within a MessagesProvider');
  }

  return contextValue;
}

export {
  MessagesProvider,
  useMessages,
};
