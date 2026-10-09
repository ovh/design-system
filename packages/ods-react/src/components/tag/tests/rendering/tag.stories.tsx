import { TAG_COLOR, TAG_SIZE, TAG_STATUS, TAG_STATUSES, Tag, type TagStatus } from '../../src';

export default {
  component: Tag,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Tag
    data-testid="custom-style"
    style={{ height: '42px' }}>
    Custom style
  </Tag>
);

export const render = () => (
  <Tag
    data-testid="render">
    Render
  </Tag>
);

export const sizes = () => (
  <>
    <Tag data-testid="size-md" size={ TAG_SIZE.md }>MD</Tag>
    <Tag data-testid="size-lg" size={ TAG_SIZE.lg }>LG</Tag>
  </>
);

export const deprecatedColor = () => (
  <>
    <Tag color={ TAG_COLOR.primary } data-testid="color-primary">Primary</Tag>
    <Tag data-testid="status-accent" status={ TAG_STATUS.accent }>Accent</Tag>
    <Tag color={ TAG_COLOR.critical } data-testid="color-critical-status-success" status={ TAG_STATUS.success }>Both</Tag>
    <Tag data-testid="status-success" status={ TAG_STATUS.success }>Success</Tag>
  </>
);

export const statuses = () => (
  <>
    <Tag
      data-testid="status-none"
      status={ 'none' as TagStatus }>
      None
    </Tag>

    {
      TAG_STATUSES.map((status) => (
        <Tag
          data-testid={ `status-${status}` }
          key={ status }
          status={ status }>
          { status }
        </Tag>
      ))
    }
  </>
);
