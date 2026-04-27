# Chat

The Chat recipe is used to display a complete chat interface, combining user and assistant messages with contextual information and input capabilities.

The Chat is composed of multiple components: Message Bubble, Avatar, and Prompt Input.
It structures messages in a vertical flow, where each message is associated with metadata such as author and timestamp.

Contextual action buttons positioned below the Message Bubble allow users to quickly interact with the content (e.g. copy, react, reply).

Use this recipe when building chat-based experiences such as AI assistants, support conversations, or messaging interfaces.
It is suited for scenarios where users need to exchange messages, understand context through metadata, and interact efficiently within a continuous conversation flow.

## Do's & don'ts

### Do

- Clearly keep differentiation between user and assistant messages.
- Provide quick actions (copy, react) where they add value, especially for AI-generated content.
- Keep the Prompt Input always accessible so users can quickly continue the conversation without losing context.
- Handle long content.
- Preserve chronological order and spacing between messages.

### Don't

- Mix messages styles inconsistently (changing alignement, spacing within the same conversation).
- Overload messages with actions. Limit actions to the most relevant ones.
- Avoid removing author names.
- Break the conversation flow by inserting unrelated UI elements between messages that disrupt reading.
- Make the Prompt Input hard to find or access.
