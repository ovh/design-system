import classNames from 'classnames';
import React, { type JSX } from 'react';
import { StoryGrid } from '../../storyGrid/StoryGrid';
import { REACT_COMPONENTS_TITLE } from '../../../constants/meta';
import styles from './themePreview.module.scss';

interface ThemePreviewProps {
  className?: string;
}

const ThemePreview = ({ className }: ThemePreviewProps): JSX.Element => {
  return (
    <div className={ classNames(styles['theme-preview'], className) }>
      <div className={ styles['theme-preview__content'] }>
        <StoryGrid components={ [
          { kind: REACT_COMPONENTS_TITLE.accordion, name: 'Accordion', stories: [ { id: 'react-components-accordion--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.badge, name: 'Badge', stories: [ { id: 'react-components-badge--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.breadcrumb, name: 'Breadcrumb', stories: [ { id: 'react-components-breadcrumb--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.button, name: 'Button', stories: [ { id: 'react-components-button--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.card, name: 'Card', stories: [ { id: 'react-components-card--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.checkbox, name: 'Checkbox', stories: [ { id: 'react-components-checkbox--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.clipboard, name: 'Clipboard', stories: [ { id: 'react-components-clipboard--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.code, name: 'Code', stories: [ { id: 'react-components-code--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.combobox, name: 'Combobox', stories: [ { id: 'react-components-combobox--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.datepicker, name: 'Datepicker', stories: [ { id: 'react-components-datepicker--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.divider, name: 'Divider', stories: [ { id: 'react-components-divider--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.drawer, name: 'Drawer', stories: [ { id: 'react-components-drawer--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.fileUpload, name: 'File Upload', stories: [ { id: 'react-components-file-upload--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.formField, name: 'Form Field', stories: [ { id: 'react-components-form-field--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.icon, name: 'Icon', stories: [ { id: 'react-components-icon--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.input, name: 'Input', stories: [ { id: 'react-components-input--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.link, name: 'Link', stories: [ { id: 'react-components-link--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.medium, name: 'Medium', stories: [ { id: 'react-components-medium--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.message, name: 'Message', stories: [ { id: 'react-components-message--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.meter, name: 'Meter', stories: [ { id: 'react-components-meter--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.modal, name: 'Modal', stories: [ { id: 'react-components-modal--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.pagination, name: 'Pagination', stories: [ { id: 'react-components-pagination--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.password, name: 'Password', stories: [ { id: 'react-components-password--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.phoneNumber, name: 'Phone Number', stories: [ { id: 'react-components-phone-number--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.popover, name: 'Popover', stories: [ { id: 'react-components-popover--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.progressBar, name: 'Progress Bar', stories: [ { id: 'react-components-progress-bar--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.quantity, name: 'Quantity', stories: [ { id: 'react-components-quantity--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.radioGroup, name: 'RadioGroup', stories: [ { id: 'react-components-radio-group--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.range, name: 'Range', stories: [ { id: 'react-components-range--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.select, name: 'Select', stories: [ { id: 'react-components-select--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.skeleton, name: 'Skeleton', stories: [ { id: 'react-components-skeleton--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.spinner, name: 'Spinner', stories: [ { id: 'react-components-spinner--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.switch, name: 'Switch', stories: [ { id: 'react-components-switch--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.table, name: 'Table', stories: [ { id: 'react-components-table--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.tabs, name: 'Tabs', stories: [ { id: 'react-components-tabs--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.tag, name: 'Tag', stories: [ { id: 'react-components-tag--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.text, name: 'Text', stories: [ { id: 'react-components-text--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.textarea, name: 'Textarea', stories: [ { id: 'react-components-textarea--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.timepicker, name: 'Timepicker', stories: [ { id: 'react-components-timepicker--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.toggle, name: 'Toggle', stories: [ { id: 'react-components-toggle--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.tooltip, name: 'Tooltip', stories: [ { id: 'react-components-tooltip--theme-generator', label: 'ThemeGenerator' } ] },
          { kind: REACT_COMPONENTS_TITLE.treeView, name: 'Tree View', stories: [ { id: 'react-components-tree-view--theme-generator', label: 'ThemeGenerator' } ] },
        ] } />
      </div>
    </div>
  );
};

export {
  ThemePreview,
};




