import { type CommandProp, Command as CommandRoot } from './components/command/Command';
import { CommandContent, type CommandContentProp } from './components/command-content/CommandContent';
import { CommandEmpty, type CommandEmptyProp } from './components/command-empty/CommandEmpty';
import { CommandFilter, type CommandFilterProp } from './components/command-filter/CommandFilter';
import { CommandGroup, type CommandGroupProp } from './components/command-group/CommandGroup';
import { CommandList, type CommandListProp } from './components/command-list/CommandList';
import { CommandOption, type CommandOptionProp } from './components/command-option/CommandOption';
import { CommandTrigger, type CommandTriggerProp } from './components/command-trigger/CommandTrigger';

const Command = Object.assign(CommandRoot, {
  Content: CommandContent,
  Empty: CommandEmpty,
  Filter: CommandFilter,
  Group: CommandGroup,
  List: CommandList,
  Option: CommandOption,
  Trigger: CommandTrigger,
});

export { Command };
export { CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandList, CommandOption, CommandTrigger };
export type { CommandProp, CommandContentProp, CommandEmptyProp, CommandFilterProp, CommandGroupProp, CommandListProp, CommandOptionProp, CommandTriggerProp };
