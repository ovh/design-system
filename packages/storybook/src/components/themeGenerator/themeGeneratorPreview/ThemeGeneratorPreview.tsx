import { composeStories } from '@storybook/react';
import React, { type ComponentType, type ReactElement } from 'react';
import * as AccordionStories from '../../../../stories/components/accordion/accordion.stories';
import * as BadgeStories from '../../../../stories/components/badge/badge.stories';
import * as BreadcrumbStories from '../../../../stories/components/breadcrumb/breadcrumb.stories';
import * as ButtonStories from '../../../../stories/components/button/button.stories';
import * as CardStories from '../../../../stories/components/card/card.stories';
import * as CheckboxStories from '../../../../stories/components/checkbox/checkbox.stories';
import * as ClipboardStories from '../../../../stories/components/clipboard/clipboard.stories';
import * as CodeStories from '../../../../stories/components/code/code.stories';
import * as ComboboxStories from '../../../../stories/components/combobox/combobox.stories';
import * as DatepickerStories from '../../../../stories/components/datepicker/datepicker.stories';
import * as DividerStories from '../../../../stories/components/divider/divider.stories';
import * as DrawerStories from '../../../../stories/components/drawer/drawer.stories';
import * as FileUploadStories from '../../../../stories/components/file-upload/file-upload.stories';
import * as FormFieldStories from '../../../../stories/components/form-field/form-field.stories';
import * as IconStories from '../../../../stories/components/icon/icon.stories';
import * as InputStories from '../../../../stories/components/input/input.stories';
import * as LinkStories from '../../../../stories/components/link/link.stories';
import * as MediumStories from '../../../../stories/components/medium/medium.stories';
import * as MessageStories from '../../../../stories/components/message/message.stories';
import * as MeterStories from '../../../../stories/components/meter/meter.stories';
import * as ModalStories from '../../../../stories/components/modal/modal.stories';
import * as PaginationStories from '../../../../stories/components/pagination/pagination.stories';
import * as PasswordStories from '../../../../stories/components/password/password.stories';
import * as PhoneNumberStories from '../../../../stories/components/phone-number/phone-number.stories';
import * as PopoverStories from '../../../../stories/components/popover/popover.stories';
import * as ProgressBarStories from '../../../../stories/components/progress-bar/progress-bar.stories';
import * as QuantityStories from '../../../../stories/components/quantity/quantity.stories';
import * as RadioGroupStories from '../../../../stories/components/radio-group/radio-group.stories';
import * as RangeStories from '../../../../stories/components/range/range.stories';
import * as SelectStories from '../../../../stories/components/select/select.stories';
import * as SkeletonStories from '../../../../stories/components/skeleton/skeleton.stories';
import * as SpinnerStories from '../../../../stories/components/spinner/spinner.stories';
import * as SwitchStories from '../../../../stories/components/switch/switch.stories';
import * as TableStories from '../../../../stories/components/table/table.stories';
import * as TabsStories from '../../../../stories/components/tabs/tabs.stories';
import * as TagStories from '../../../../stories/components/tag/tag.stories';
import * as TextStories from '../../../../stories/components/text/text.stories';
import * as TextareaStories from '../../../../stories/components/textarea/textarea.stories';
import * as TimepickerStories from '../../../../stories/components/timepicker/timepicker.stories';
import * as ToasterStories from '../../../../stories/components/toaster/toaster.stories';
import * as ToggleStories from '../../../../stories/components/toggle/toggle.stories';
import * as TooltipStories from '../../../../stories/components/tooltip/tooltip.stories';
import * as TreeViewStories from '../../../../stories/components/tree-view/tree-view.stories';
import { REACT_COMPONENTS_TITLE } from '../../../constants/meta';
import style from './themeGeneratorPreview.module.css';

const THEME_STORY_MODULES = {
  Accordion: AccordionStories,
  Badge: BadgeStories,
  Breadcrumb: BreadcrumbStories,
  Button: ButtonStories,
  Card: CardStories,
  Checkbox: CheckboxStories,
  Clipboard: ClipboardStories,
  Code: CodeStories,
  Combobox: ComboboxStories,
  Datepicker: DatepickerStories,
  Divider: DividerStories,
  Drawer: DrawerStories,
  FileUpload: FileUploadStories,
  FormField: FormFieldStories,
  Icon: IconStories,
  Input: InputStories,
  Link: LinkStories,
  Medium: MediumStories,
  Message: MessageStories,
  Meter: MeterStories,
  Modal: ModalStories,
  Pagination: PaginationStories,
  Password: PasswordStories,
  PhoneNumber: PhoneNumberStories,
  Popover: PopoverStories,
  ProgressBar: ProgressBarStories,
  Quantity: QuantityStories,
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
  Timepicker: TimepickerStories,
  Toaster: ToasterStories,
  Toggle: ToggleStories,
  Tooltip: TooltipStories,
  TreeView: TreeViewStories,
} as const;

type ThemeComponentKey = keyof typeof THEME_STORY_MODULES;

type ThemePreviewItem = {
  /** Matches the key used in THEME_STORY_MODULES / composed stories map. */
  key: ThemeComponentKey;
  /** Story `kind` used for contextual information (e.g. Storybook navigation). */
  kind: string;
  /** Human readable name displayed above the preview. */
  label: string;
};

const THEME_PREVIEW_COMPONENTS: ThemePreviewItem[] = [
  { key: 'Accordion', kind: REACT_COMPONENTS_TITLE.accordion, label: 'Accordion' },
  { key: 'Badge', kind: REACT_COMPONENTS_TITLE.badge, label: 'Badge' },
  { key: 'Breadcrumb', kind: REACT_COMPONENTS_TITLE.breadcrumb, label: 'Breadcrumb' },
  { key: 'Button', kind: REACT_COMPONENTS_TITLE.button, label: 'Button' },
  { key: 'Card', kind: REACT_COMPONENTS_TITLE.card, label: 'Card' },
  { key: 'Checkbox', kind: REACT_COMPONENTS_TITLE.checkbox, label: 'Checkbox' },
  { key: 'Clipboard', kind: REACT_COMPONENTS_TITLE.clipboard, label: 'Clipboard' },
  { key: 'Code', kind: REACT_COMPONENTS_TITLE.code, label: 'Code' },
  { key: 'Combobox', kind: REACT_COMPONENTS_TITLE.combobox, label: 'Combobox' },
  { key: 'Datepicker', kind: REACT_COMPONENTS_TITLE.datepicker, label: 'Datepicker' },
  { key: 'Divider', kind: REACT_COMPONENTS_TITLE.divider, label: 'Divider' },
  { key: 'Drawer', kind: REACT_COMPONENTS_TITLE.drawer, label: 'Drawer' },
  { key: 'FileUpload', kind: REACT_COMPONENTS_TITLE.fileUpload, label: 'File Upload' },
  { key: 'FormField', kind: REACT_COMPONENTS_TITLE.formField, label: 'Form Field' },
  { key: 'Icon', kind: REACT_COMPONENTS_TITLE.icon, label: 'Icon' },
  { key: 'Input', kind: REACT_COMPONENTS_TITLE.input, label: 'Input' },
  { key: 'Link', kind: REACT_COMPONENTS_TITLE.link, label: 'Link' },
  { key: 'Medium', kind: REACT_COMPONENTS_TITLE.medium, label: 'Medium' },
  { key: 'Message', kind: REACT_COMPONENTS_TITLE.message, label: 'Message' },
  { key: 'Meter', kind: REACT_COMPONENTS_TITLE.meter, label: 'Meter' },
  { key: 'Modal', kind: REACT_COMPONENTS_TITLE.modal, label: 'Modal' },
  { key: 'Pagination', kind: REACT_COMPONENTS_TITLE.pagination, label: 'Pagination' },
  { key: 'Password', kind: REACT_COMPONENTS_TITLE.password, label: 'Password' },
  { key: 'PhoneNumber', kind: REACT_COMPONENTS_TITLE.phoneNumber, label: 'Phone Number' },
  { key: 'Popover', kind: REACT_COMPONENTS_TITLE.popover, label: 'Popover' },
  { key: 'ProgressBar', kind: REACT_COMPONENTS_TITLE.progressBar, label: 'Progress Bar' },
  { key: 'Quantity', kind: REACT_COMPONENTS_TITLE.quantity, label: 'Quantity' },
  { key: 'RadioGroup', kind: REACT_COMPONENTS_TITLE.radioGroup, label: 'RadioGroup' },
  { key: 'Range', kind: REACT_COMPONENTS_TITLE.range, label: 'Range' },
  { key: 'Select', kind: REACT_COMPONENTS_TITLE.select, label: 'Select' },
  { key: 'Skeleton', kind: REACT_COMPONENTS_TITLE.skeleton, label: 'Skeleton' },
  { key: 'Spinner', kind: REACT_COMPONENTS_TITLE.spinner, label: 'Spinner' },
  { key: 'Switch', kind: REACT_COMPONENTS_TITLE.switch, label: 'Switch' },
  { key: 'Table', kind: REACT_COMPONENTS_TITLE.table, label: 'Table' },
  { key: 'Tabs', kind: REACT_COMPONENTS_TITLE.tabs, label: 'Tabs' },
  { key: 'Tag', kind: REACT_COMPONENTS_TITLE.tag, label: 'Tag' },
  { key: 'Text', kind: REACT_COMPONENTS_TITLE.text, label: 'Text' },
  { key: 'Textarea', kind: REACT_COMPONENTS_TITLE.textarea, label: 'Textarea' },
  { key: 'Timepicker', kind: REACT_COMPONENTS_TITLE.timepicker, label: 'Timepicker' },
  { key: 'Toaster', kind: REACT_COMPONENTS_TITLE.toaster, label: 'Toaster' },
  { key: 'Toggle', kind: REACT_COMPONENTS_TITLE.toggle, label: 'Toggle' },
  { key: 'Tooltip', kind: REACT_COMPONENTS_TITLE.tooltip, label: 'Tooltip' },
  { key: 'TreeView', kind: REACT_COMPONENTS_TITLE.treeView, label: 'Tree View' },
];

const COMPOSED_THEME_STORIES: Partial<Record<ThemeComponentKey, ComponentType>> = Object.entries(THEME_STORY_MODULES)
  .reduce((acc, [key, module]) => {
    const composedStories = composeStories(module as Parameters<typeof composeStories>[0]) as Record<string, ComponentType>;
    const story = composedStories.ThemeGenerator as ComponentType | undefined;

    if (story) {
      acc[key as ThemeComponentKey] = story;
    }

    return acc;
  }, {} as Partial<Record<ThemeComponentKey, ComponentType>>);

const ThemeGeneratorPreview = (): ReactElement => {
  return (
    <section className={ style['theme-generator-preview'] }>
      <h3>
        Theme previews
      </h3>

      <div className={ style['theme-generator-preview__component'] }>
        {
          THEME_PREVIEW_COMPONENTS.map(({ key, label }) => {
            const Composed = COMPOSED_THEME_STORIES[key];

            if (!Composed) {
              return null;
            }

            return (
              <div key={ key }>
                <h4 className={ style['theme-generator-preview__component__name'] }>
                  { label }
                </h4>

                <div className={ style['theme-generator-preview__component__preview'] }>
                  <Composed />
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};

export { ThemeGeneratorPreview };
