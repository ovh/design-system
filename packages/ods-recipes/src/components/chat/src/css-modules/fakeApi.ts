type Message = {
  author: string;
  content?: string;
  createdAt?: Date;
  files?: File[];
  processing?: boolean;
  uuid: string;
}

const DEFAULT_MESSAGES: Message[] = [{
  author: 'Assistant',
  content: 'Welcome to the Chat recipe. Feel free to test the UI behavior by typing anything on your mind below.',
  createdAt: new Date(),
  uuid: crypto.randomUUID(),
}];

async function fetch(): Promise<Message[]> {
  return Promise.resolve(DEFAULT_MESSAGES);
}

async function post(content?: string, files?: File[]): Promise<Message> {
  return Promise.resolve({
    author: 'You',
    content: content || '',
    createdAt: new Date(),
    files,
    uuid: crypto.randomUUID(),
  });
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export {
  type Message,
  fetch,
  post,
  randomInt,
};
