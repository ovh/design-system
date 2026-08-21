import { composeStories } from '@storybook/react';
import { type ComponentType, type ReactElement } from 'react';
import * as AccordionStories from '../../../storybook/stories/components/accordion/accordion.stories';
import * as AvatarStories from '../../../storybook/stories/components/avatar/avatar.stories';
import * as BadgeStories from '../../../storybook/stories/components/badge/badge.stories';
import * as BreadcrumbStories from '../../../storybook/stories/components/breadcrumb/breadcrumb.stories';
import * as ButtonStories from '../../../storybook/stories/components/button/button.stories';
import * as ButtonGroupStories from '../../../storybook/stories/components/button-group/button-group.stories';
import * as CardStories from '../../../storybook/stories/components/card/card.stories';
import * as CartStories from '../../../storybook/stories/components/cart/cart.stories';
import * as CheckboxStories from '../../../storybook/stories/components/checkbox/checkbox.stories';
import * as ClipboardStories from '../../../storybook/stories/components/clipboard/clipboard.stories';
import * as CodeStories from '../../../storybook/stories/components/code/code.stories';
import * as ComboboxStories from '../../../storybook/stories/components/combobox/combobox.stories';
import * as CommandStories from '../../../storybook/stories/components/command/command.stories';
import * as DataTableStories from '../../../storybook/stories/components/data-table/data-table.stories';
import * as DatepickerStories from '../../../storybook/stories/components/datepicker/datepicker.stories';
import * as DividerStories from '../../../storybook/stories/components/divider/divider.stories';
import * as DrawerStories from '../../../storybook/stories/components/drawer/drawer.stories';
import * as EditableStories from '../../../storybook/stories/components/editable/editable.stories';
import * as FileThumbnailStories from '../../../storybook/stories/components/file-thumbnail/file-thumbnail.stories';
import * as FileUploadStories from '../../../storybook/stories/components/file-upload/file-upload.stories';
import * as FormFieldStories from '../../../storybook/stories/components/form-field/form-field.stories';
import * as IconStories from '../../../storybook/stories/components/icon/icon.stories';
import * as InputStories from '../../../storybook/stories/components/input/input.stories';
import * as KbdStories from '../../../storybook/stories/components/kbd/kbd.stories';
import * as LinkStories from '../../../storybook/stories/components/link/link.stories';
import * as LogoStories from '../../../storybook/stories/components/logo/logo.stories';
import * as MarkdownStories from '../../../storybook/stories/components/markdown/markdown.stories';
import * as MediumStories from '../../../storybook/stories/components/medium/medium.stories';
import * as MenuStories from '../../../storybook/stories/components/menu/menu.stories';
import * as MessageStories from '../../../storybook/stories/components/message/message.stories';
import * as MessageBubbleStories from '../../../storybook/stories/components/message-bubble/message-bubble.stories';
import * as MeterStories from '../../../storybook/stories/components/meter/meter.stories';
import * as ModalStories from '../../../storybook/stories/components/modal/modal.stories';
import * as PaginationStories from '../../../storybook/stories/components/pagination/pagination.stories';
import * as PasswordStories from '../../../storybook/stories/components/password/password.stories';
import * as PhoneNumberStories from '../../../storybook/stories/components/phone-number/phone-number.stories';
import * as PopoverStories from '../../../storybook/stories/components/popover/popover.stories';
import * as ProgressBarStories from '../../../storybook/stories/components/progress-bar/progress-bar.stories';
import * as PromptInputStories from '../../../storybook/stories/components/prompt-input/prompt-input.stories';
import * as QuantityStories from '../../../storybook/stories/components/quantity/quantity.stories';
import * as QueryFilterStories from '../../../storybook/stories/components/query-filter/query-filter.stories';
import * as RadioGroupStories from '../../../storybook/stories/components/radio-group/radio-group.stories';
import * as RangeStories from '../../../storybook/stories/components/range/range.stories';
import * as SelectStories from '../../../storybook/stories/components/select/select.stories';
import * as SkeletonStories from '../../../storybook/stories/components/skeleton/skeleton.stories';
import * as SpinnerStories from '../../../storybook/stories/components/spinner/spinner.stories';
import * as SwitchStories from '../../../storybook/stories/components/switch/switch.stories';
import * as TableStories from '../../../storybook/stories/components/table/table.stories';
import * as TabsStories from '../../../storybook/stories/components/tabs/tabs.stories';
import * as TagStories from '../../../storybook/stories/components/tag/tag.stories';
import * as TextStories from '../../../storybook/stories/components/text/text.stories';
import * as TextareaStories from '../../../storybook/stories/components/textarea/textarea.stories';
import * as TileStories from '../../../storybook/stories/components/tile/tile.stories';
import * as TimepickerStories from '../../../storybook/stories/components/timepicker/timepicker.stories';
import * as ToasterStories from '../../../storybook/stories/components/toaster/toaster.stories';
import * as ToggleStories from '../../../storybook/stories/components/toggle/toggle.stories';
import * as TooltipStories from '../../../storybook/stories/components/tooltip/tooltip.stories';
import * as TreeViewStories from '../../../storybook/stories/components/tree-view/tree-view.stories';
import styles from './themeGeneratorPreview.module.css';

/* Every component's dedicated ThemeGenerator story (a static, portal-free
   fixture authored for this preview), composed via portable-stories. This
   module is heavy on purpose (all public CSF) and only ever loads through the
   lazy /tools/theme-generator route. */

const THEME_STORY_MODULES: Record<string, Record<string, unknown>> = {
  Accordion: AccordionStories,
  Avatar: AvatarStories,
  Badge: BadgeStories,
  Breadcrumb: BreadcrumbStories,
  Button: ButtonStories,
  ButtonGroup: ButtonGroupStories,
  Card: CardStories,
  Cart: CartStories,
  Checkbox: CheckboxStories,
  Clipboard: ClipboardStories,
  Code: CodeStories,
  Combobox: ComboboxStories,
  Command: CommandStories,
  DataTable: DataTableStories,
  Datepicker: DatepickerStories,
  Divider: DividerStories,
  Drawer: DrawerStories,
  Editable: EditableStories,
  FileThumbnail: FileThumbnailStories,
  FileUpload: FileUploadStories,
  FormField: FormFieldStories,
  Icon: IconStories,
  Input: InputStories,
  Kbd: KbdStories,
  Link: LinkStories,
  Logo: LogoStories,
  Markdown: MarkdownStories,
  Medium: MediumStories,
  Menu: MenuStories,
  Message: MessageStories,
  MessageBubble: MessageBubbleStories,
  Meter: MeterStories,
  Modal: ModalStories,
  Pagination: PaginationStories,
  Password: PasswordStories,
  PhoneNumber: PhoneNumberStories,
  Popover: PopoverStories,
  ProgressBar: ProgressBarStories,
  PromptInput: PromptInputStories,
  Quantity: QuantityStories,
  QueryFilter: QueryFilterStories,
  RadioGroup: RadioGroupStories,
  Range: RangeStories,
  Select: SelectStories,
  Skeleton: SkeletonStories,
  Spinner: SpinnerStories,
  Switch: SwitchStories,
  Table: TableStories,
  Tabs: TabsStories,
  Tag: TagStories,
  Text: TextStories,
  Textarea: TextareaStories,
  Tile: TileStories,
  Timepicker: TimepickerStories,
  Toaster: ToasterStories,
  Toggle: ToggleStories,
  Tooltip: TooltipStories,
  TreeView: TreeViewStories,
};

const humanize = (name: string): string => name.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

const COMPOSED_THEME_STORIES: [string, ComponentType][] = Object.entries(THEME_STORY_MODULES)
  .flatMap(([key, module]) => {
    const composed = composeStories(module as Parameters<typeof composeStories>[0]) as Record<string, ComponentType>;
    return composed.ThemeGenerator ? [[key, composed.ThemeGenerator] as [string, ComponentType]] : [];
  });

const ThemeGeneratorPreview = (): ReactElement => (
  <section className={ styles['theme-generator-preview'] }>
    <h3>
      Theme previews
    </h3>

    <div className={ styles['theme-generator-preview__component'] }>
      { COMPOSED_THEME_STORIES.map(([key, Composed]) => (
        <div key={ key }>
          <h4 className={ styles['theme-generator-preview__component__name'] }>
            { humanize(key) }
          </h4>

          <div className={ styles['theme-generator-preview__component__preview'] }>
            <Composed />
          </div>
        </div>
      )) }
    </div>
  </section>
);

export { ThemeGeneratorPreview };
