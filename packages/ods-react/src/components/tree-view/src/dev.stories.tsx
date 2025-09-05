import { TreeView, TreeViewNodes, type TreeViewValueChangeDetail } from '.';
import { TreeViewNode } from './components/tree-view-node/TreeViewNode';
import { useMemo, useRef, useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { Icon, ICON_NAME } from '../../icon/src';
import { Button } from '../../button/src';

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
      items={ collection }
      >
      { collection.map((item) => (
        <TreeViewNode key={ item.id } item={ item } />
      )) }
    </TreeView>
  );
};

export const Disabled = () => {
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
      disabled
      items={ collection }
      >
      <TreeViewNodes>
        { collection.map((item) => (
          <TreeViewNode key={ item.id } item={ item } />
        )) }
      </TreeViewNodes>
    </TreeView>
  );
};

export const MultipleSelection = () => {
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
      multiple
      items={ collection }
      >
      <TreeViewNodes>
        { collection.map((item) => (
          <TreeViewNode key={ item.id } item={ item } />
        )) }
      </TreeViewNodes>
    </TreeView>
  );
};

export const DisabledItems = () => {
  const collection = [
    {
      id: 'src',
      name: 'src',
      children: [
        { id: 'app.tsx', name: 'app.tsx' },
        { id: 'index.ts', name: 'index.ts', disabled: true },
        {
          id: 'components',
          name: 'components',
          disabled: true,
          children: [
            { id: 'Button.tsx', name: 'Button.tsx' },
            { id: 'Card.tsx', name: 'Card.tsx', disabled: true },
          ],
        },
      ],
    },
    { id: 'package.json', name: 'package.json', disabled: true },
    { id: 'readme.md', name: 'README.md' },
  ];

  return (
    <TreeView
      items={ collection }
      >
      <TreeViewNodes>
        { collection.map((item) => (
          <TreeViewNode key={ item.id } item={ item } />
        )) }
      </TreeViewNodes>
    </TreeView>
  );
};

export const DefaultExpandAll = () => {
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
      items={ collection }
      defaultExpandAll
      >
      <TreeViewNodes>
        { collection.map((item) => (
          <TreeViewNode key={ item.id } item={ item } />
        )) }
      </TreeViewNodes>
    </TreeView>
  );
};

export const WithIcons = () => {
  const FileIcon = () => (
      <Icon name={ ICON_NAME.file } />
  );
  const FolderIcon = () => (
      <Icon name={ ICON_NAME.folder } />
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
      items={ collection }
      >
      <TreeViewNodes>
        { collection.map((item) => (
          <TreeViewNode key={ item.id } item={ item } />
        )) }
      </TreeViewNodes>
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
        items={ collection }
        >
        <TreeViewNodes>
          { collection.map((item) => (
            <TreeViewNode key={ item.id } item={ item } />
          )) }
        </TreeViewNodes>
      </TreeView>
    </>
  );
};

export const Controlled = () => {
  const items = useMemo(() => ([
    {
      id: 'src',
      name: 'src',
      expanded: true,
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
  const [selectedId, setSelectedId] = useState<string | undefined>('package.json');
  return (
    <>
      <TreeView
        items={ items }
        value={ selectedId }
        onValueChange={ (d: TreeViewValueChangeDetail) => {
          console.log('onValueChange', d);
          const next = Array.isArray(d.selectedValue) ? d.selectedValue[0] : d.selectedValue;
          setSelectedId(next || undefined);
        } }>
        <TreeViewNodes>
          { items.map((item) => (
            <TreeViewNode key={ item.id } item={ item } />
          )) }
        </TreeViewNodes>
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
  const [selectedIds, setSelectedIds] = useState<string[]>(['package.json', 'index.ts']);
  return (
    <>
      <TreeView
        items={ items }
        multiple
        value={ selectedIds }
        onValueChange={ (d: TreeViewValueChangeDetail) => {
          console.log('onValueChange', d);
          setSelectedIds(Array.isArray(d.selectedValue) ? d.selectedValue : [d.selectedValue].filter(Boolean));
        } }>
        <TreeViewNodes>
          { items.map((item) => (
            <TreeViewNode key={ item.id } item={ item } />
          )) }
        </TreeViewNodes>
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

  return (
    <>
      <TreeView
        items={ collection }
        multiple
        >
        <TreeViewNodes>
          { collection.map((item) => (
            <TreeViewNode key={ item.id } item={ item } />
          )) }
        </TreeViewNodes>
      </TreeView>
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
      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          Choose a file
        </FormFieldLabel>

        <TreeView
          items={ items }
          >
          <TreeViewNodes>
            { items.map((item) => (
              <TreeViewNode key={ item.id } item={ item } />
            )) }
          </TreeViewNodes>
        </TreeView>

        <FormFieldHelper>
          My TreeView
        </FormFieldHelper>

        { isInvalid && (
          <FormFieldError>
            Please select a file
          </FormFieldError>
        ) }
      </FormField>
      <Button onClick={ () => setIsInvalid((v) => !v) }>
        Toggle validity
      </Button>
    </>
  );
};

export const CustomRender = () => {
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

  return (
    <TreeView
      items={ items }
      >
      <TreeViewNodes>
        { items.map((item) => (
          <TreeViewNode key={ item.id } item={ item }>
            { ({ item, isBranch, isExpanded }) => (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                { isBranch ? isExpanded ? <Icon name={ ICON_NAME.folderMinus } /> : <Icon name={ ICON_NAME.folderPlus } /> : <Icon name={ ICON_NAME.file } /> }
                <span>{ item.name }</span>
              </span>
            ) }
          </TreeViewNode>
        )) }
      </TreeViewNodes>
    </TreeView>
  );
};

export const CustomRenderMultiple = () => {
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

  return (
    <TreeView
      items={ items }
      multiple
      >
      <TreeViewNodes>
        { items.map((item) => (
          <TreeViewNode key={ item.id } item={ item }>
            { ({ item, isBranch, isExpanded }) => (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                { isBranch ? (isExpanded ? <Icon name={ ICON_NAME.folderMinus } /> : <Icon name={ ICON_NAME.folderPlus } />) : <Icon name={ ICON_NAME.file } /> }
                <span>{ item.name }</span>
              </span>
            ) }
          </TreeViewNode>
        )) }
      </TreeViewNodes>
    </TreeView>
  );
};

export const DynamicChildren = () => {
  type Item = { id: string, name: string, children?: Item[] };
  const [items, setItems] = useState<Item[]>([
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
          ],
        },
      ],
    },
    { id: 'package.json', name: 'package.json' },
    { id: 'readme.md', name: 'README.md' },
  ]);
  const counter = useRef(1);

  function addChildTo(collection: Item[], parentId: string, newNode: Item): Item[] {
    return collection.map((node) => {
      if (node.id === parentId) {
        const nextChildren = Array.isArray(node.children) ? [...node.children, newNode] : [newNode];
        return { ...node, children: nextChildren };
      }
      if (node.children?.length) {
        return { ...node, children: addChildTo(node.children, parentId, newNode) };
      }
      return node;
    });
  }

  function removeNodeFrom(collection: Item[], nodeId: string): Item[] {
    return collection
      .filter((node) => node.id !== nodeId)
      .map((node) => node.children?.length ? { ...node, children: removeNodeFrom(node.children, nodeId) } : node);
  }

  function handleAddChild(parentId: string): void {
    const id = `new-file-${counter.current++}.txt`;
    const newNode = { id, name: id };
    setItems((prev) => addChildTo(prev, parentId, newNode));
  }

  function handleDelete(nodeId: string): void {
    setItems((prev) => removeNodeFrom(prev, nodeId));
  }

  return (
    <TreeView
      multiple
      items={ items }
      defaultExpandAll
      >
      <TreeViewNodes>
        { items.map((item) => (
          <TreeViewNode key={ item.id } item={ item }>
            { ({ item, isBranch }) => (
              <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  { isBranch ? <Icon name={ ICON_NAME.folder } /> : <Icon name={ ICON_NAME.file } /> }
                  <span>{ item.name }</span>
                </span>
                <span style={{ display: 'inline-flex', marginLeft: 'auto', alignItems: 'center', gap: 8 }}>
                  { isBranch ? (
                    <button
                      type="button"
                      aria-label="Add child"
                      onClick={(e) => { e.stopPropagation(); handleAddChild(item.id); }}
                      style={{ background: 'transparent', border: 'none', padding: 2, cursor: 'pointer' }}>
                      <Icon name={ ICON_NAME.plus } />
                    </button>
                  ) : null }
                  <button
                    type="button"
                    aria-label="Delete"
                    onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                    style={{ background: 'transparent', border: 'none', padding: 2, cursor: 'pointer' }}>
                    <Icon name={ ICON_NAME.xmark } />
                  </button>
                </span>
              </div>
            ) }
          </TreeViewNode>
        )) }
      </TreeViewNodes>
    </TreeView>
  );
};
