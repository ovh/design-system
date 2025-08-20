import { TreeView, type TreeViewValueChangeDetail } from '.';
import { TreeViewNode } from './components/tree-view-node/TreeViewNode';
import type { TreeViewItem, TreeViewCustomRendererArg } from './components/tree-view-node/TreeViewNode';
import { useMemo, useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { Icon, ICON_NAME } from '../../icon/src';

export default {
  component: TreeView,
  title: 'TreeView dev',
};

export const Default = () => {
  const collection = [
    {
      id: 'src',
      name: 'src',
      children: [
        { id: 'app.tsx', name: 'app.tsx' },
        { id: 'index.ts', name: 'index.ts' },
        {
          id: 'components',
          name: 'components',
          children: [
            { id: 'Button.tsx', name: 'Button.tsx' },
            { id: 'Card.tsx', name: 'Card.tsx' },
          ],
        },
      ],
    },
    { id: 'package.json', name: 'package.json' },
    { id: 'readme.md', name: 'README.md' },
  ];

  return (
    <TreeView
      onValueChange={(d: TreeViewValueChangeDetail) => console.log('onValueChange', d)}>
      { collection.map((item) => (
        <TreeViewNode key={ item.id } item={ item } />
      )) }
    </TreeView>
  );
};

export const WithIcons = () => {
  const FileIcon = () => (
    <span aria-hidden style={{ display: 'inline-flex', alignItems: 'center' }}>
      <Icon name={ ICON_NAME.file } />
    </span>
  );
  const FolderIcon = () => (
    <span aria-hidden style={{ display: 'inline-flex', alignItems: 'center' }}>
      <Icon name={ ICON_NAME.folder } />
    </span>
  );

  const collection = [
    {
      id: 'src',
      name: 'src',
      icon: <FolderIcon />,
      children: [
        { id: 'app.tsx', name: 'app.tsx', icon: <FileIcon /> },
        { id: 'index.ts', name: 'index.ts', icon: <FileIcon /> },
        {
          id: 'components',
          name: 'components',
          icon: <FolderIcon />,
          children: [
            { id: 'Button.tsx', name: 'Button.tsx', icon: <FileIcon /> },
            { id: 'Card.tsx', name: 'Card.tsx', icon: <FileIcon /> },
          ],
        },
      ],
    },
    { id: 'package.json', name: 'package.json', icon: <FileIcon /> },
    { id: 'readme.md', name: 'README.md', icon: <FileIcon /> },
  ];

  return (
    <TreeView
      onValueChange={(d: TreeViewValueChangeDetail) => console.log('onValueChange', d)}>
      { collection.map((item) => (
        <TreeViewNode key={ item.id } item={ item } />
      )) }
    </TreeView>
  );
};

export const Uncontrolled = () => {
  const collection = [
    {
      id: 'src',
      name: 'src',
      children: [
        { id: 'app.tsx', name: 'app.tsx' },
        { id: 'index.ts', name: 'index.ts' },
        {
          id: 'components',
          name: 'components',
          children: [
            { id: 'Button.tsx', name: 'Button.tsx' },
            { id: 'Card.tsx', name: 'Card.tsx' },
          ],
        },
      ],
    },
    { id: 'package.json', name: 'package.json' },
    { id: 'readme.md', name: 'README.md' },
  ];

  return (
    <>
      <TreeView
        onValueChange={(d: TreeViewValueChangeDetail) => console.log('onValueChange', d)}>
        { collection.map((item) => (
          <TreeViewNode key={ item.id } item={ item } />
        )) }
      </TreeView>
    </>
  );
};

export const Controlled = () => {
  const items = useMemo(() => ([
    {
      id: 'src',
      name: 'src',
      children: [
        { id: 'app.tsx', name: 'app.tsx' },
        { id: 'index.ts', name: 'index.ts' },
        {
          id: 'components',
          name: 'components',
          children: [
            { id: 'Button.tsx', name: 'Button.tsx' },
            { id: 'Card.tsx', name: 'Card.tsx' },
          ],
        },
      ],
    },
    { id: 'package.json', name: 'package.json' },
    { id: 'readme.md', name: 'README.md' },
  ]), []);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <>
      <TreeView
        onValueChange={ (d: TreeViewValueChangeDetail) => { console.log('onValueChange', d); setSelectedId((Array.isArray(d.selectedValue) ? d.selectedValue[0] : d.selectedValue) ?? null); } }>
        { items.map((item) => (
          <TreeViewNode
            key={ item.id }
            item={ item }
            customBranchRenderer={ ({ item }) => (<span>{ item.name }</span>) }
            customItemRenderer={ ({ item }) => (<span>{ item.name }</span>) }
          />
        )) }
      </TreeView>
      <div style={{ marginTop: 8 }}>Selected: { selectedId ?? 'None' }</div>
    </>
  );
};

export const ControlledMultiple = () => {
  const items = useMemo(() => ([
    {
      id: 'src',
      name: 'src',
      children: [
        { id: 'app.tsx', name: 'app.tsx' },
        { id: 'index.ts', name: 'index.ts' },
        {
          id: 'components',
          name: 'components',
          children: [
            { id: 'Button.tsx', name: 'Button.tsx' },
            { id: 'Card.tsx', name: 'Card.tsx' },
          ],
        },
      ],
    },
    { id: 'package.json', name: 'package.json' },
    { id: 'readme.md', name: 'README.md' },
  ]), []);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  return (
    <>
      <TreeView
        multiple
        onValueChange={ (d: TreeViewValueChangeDetail) => { console.log('onValueChange', d); setSelectedIds(Array.isArray(d.selectedValue) ? d.selectedValue : [d.selectedValue].filter(Boolean)); } }>
        { items.map((item) => (
          <TreeViewNode key={ item.id } item={ item } />
        )) }
      </TreeView>
      <div style={{ marginTop: 8 }}>
        Selected: { selectedIds.length ? selectedIds.join(', ') : 'None' }
      </div>
    </>
  );
};

export const UncontrolledMultiple = () => {
  const collection = [
    {
      id: 'src',
      name: 'src',
      children: [
        { id: 'app.tsx', name: 'app.tsx' },
        { id: 'index.ts', name: 'index.ts' },
        {
          id: 'components',
          name: 'components',
          children: [
            { id: 'Button.tsx', name: 'Button.tsx' },
            { id: 'Card.tsx', name: 'Card.tsx' },
          ],
        },
      ],
    },
    { id: 'package.json', name: 'package.json' },
    { id: 'readme.md', name: 'README.md' },
  ];

  // Display selection without controlling the component:
  // listen to onCheckedChange and mirror values in local state for display only.
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  return (
    <>
      <TreeView
        multiple
        onValueChange={ (d: TreeViewValueChangeDetail) => { console.log('onValueChange', d); setSelectedIds(Array.isArray(d.selectedValue) ? d.selectedValue : [d.selectedValue].filter(Boolean)); } }>
        { collection.map((item) => (
          <TreeViewNode key={ item.id } item={ item } />
        )) }
      </TreeView>
      <div style={{ marginTop: 8 }}>
        Selected: { selectedIds.length ? selectedIds.join(', ') : 'None' }
      </div>
    </>
  );
};

export const InFormField = () => {
  const items = useMemo(() => ([
    {
      id: 'src',
      name: 'src',
      children: [
        { id: 'app.tsx', name: 'app.tsx' },
        { id: 'index.ts', name: 'index.ts' },
        {
          id: 'components',
          name: 'components',
          children: [
            { id: 'Button.tsx', name: 'Button.tsx' },
            { id: 'Card.tsx', name: 'Card.tsx' },
          ],
        },
      ],
    },
    { id: 'package.json', name: 'package.json' },
    { id: 'readme.md', name: 'README.md' },
  ]), []);
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <>
      <button onClick={ () => setIsInvalid((v) => !v) }>
        Toggle validity
      </button>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          Choose a file
        </FormFieldLabel>

        <TreeView
          onValueChange={(d: TreeViewValueChangeDetail) => console.log('onValueChange', d)}>
          { items.map((item) => (
            <TreeViewNode key={ item.id } item={ item } />
          )) }
        </TreeView>

        <FormFieldHelper>
          TreeView inside a form field
        </FormFieldHelper>

        { isInvalid && (
          <FormFieldError>
            Please select a file
          </FormFieldError>
        ) }
      </FormField>
    </>
  );
};

export const CustomRenderer = () => {
  type CustomFileMeta = {
    ext: string,
    size?: number,
  };

  const items: TreeViewItem<CustomFileMeta>[] = [
    {
      id: 'src',
      name: 'src',
      customRendererData: { ext: 'dir' },
      children: [
        { id: 'app.tsx', name: 'app.tsx', customRendererData: { ext: 'tsx', size: 2048 } },
        { id: 'index.ts', name: 'index.ts', customRendererData: { ext: 'ts', size: 512 } },
        {
          id: 'components',
          name: 'components',
          customRendererData: { ext: 'dir' },
          children: [
            { id: 'Button.tsx', name: 'Button.tsx', customRendererData: { ext: 'tsx', size: 1234 } },
            { id: 'Card.tsx', name: 'Card.tsx', customRendererData: { ext: 'tsx', size: 1536 } },
          ],
        },
      ],
    },
    { id: 'package.json', name: 'package.json', customRendererData: { ext: 'json', size: 321 } },
    { id: 'readme.md', name: 'README.md', customRendererData: { ext: 'md', size: 789 } },
  ];

  function renderBranch({ name, customData }: TreeViewCustomRendererArg<CustomFileMeta>) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
        <Icon name={ ICON_NAME.folder } />
        <b>{ name }</b>
        { customData?.size ? <em style={{ opacity: .7 }}>({ customData.size } bytes)</em> : null }
      </span>
    );
  }

  function renderItem({ name, customData }: TreeViewCustomRendererArg<CustomFileMeta>) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
        <Icon name={ ICON_NAME.file } />
        <span>{ name }</span>
        { customData?.ext ? <code style={{ opacity: .7 }}>.{ customData.ext }</code> : null }
        { typeof customData?.size === 'number' ? <em style={{ opacity: .7 }}>({ customData.size } bytes)</em> : null }
      </span>
    );
  }

  return (
    <TreeView
      onValueChange={(d: TreeViewValueChangeDetail) => console.log('onValueChange', d)}>
      { items.map((item) => (
        <TreeViewNode
          key={ item.id }
          item={ item }
          customBranchRenderer={ renderBranch }
          customItemRenderer={ renderItem }
        />
      )) }
    </TreeView>
  );
};
