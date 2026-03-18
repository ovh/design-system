import { MESSAGE_BUBBLE_VARIANT, MessageBubble } from '.';
import styles from './dev.module.css';

export default {
  component: MessageBubble,
  title: 'MessageBubble dev',
};

export const Default = () => (
  <MessageBubble />
);

export const Typing = () => (
  <MessageBubble typing />
);

export const Variant = () => (
  <>
  <MessageBubble variant={ MESSAGE_BUBBLE_VARIANT.ai } />
  <MessageBubble variant={ MESSAGE_BUBBLE_VARIANT.human } />
  </>
);

export const Error = () => (
  <MessageBubble error>An error occured</MessageBubble>
);

export const Conversation = () => (
  <div className={styles['conversation']}>
    <MessageBubble variant={MESSAGE_BUBBLE_VARIANT.ai}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut  erat feugiat, dictum elit sit amet, aliquet lectus. Orci varius natoque  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </MessageBubble>
    <MessageBubble error>An error occured</MessageBubble>
    <MessageBubble>How are you?</MessageBubble>
    <MessageBubble typing />
  </div>
)
