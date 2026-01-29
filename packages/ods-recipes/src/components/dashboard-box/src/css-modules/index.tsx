import { BADGE_SIZE, Badge, Button, ICON_NAME, Icon, Link, Popover, PopoverContent, PopoverTrigger, ProgressBar, Table, Text, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import { DashboardBox } from '../namespace';
import './index.module.scss';

const ActionMenu = (): JSX.Element => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icon name={ICON_NAME.ellipsisVertical} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <ul>
          <li>
            <Link href="#">Action 1</Link>
          </li>
          <li>
            <Link href="#">Action 2</Link>
          </li>
          <li>
            <Link href="#">Action 3</Link>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

const DashboardBoxComponent = (): JSX.Element => {
  return (
    <DashboardBox.Root title="Tile Card">
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Label title" />
        <DashboardBox.Item.Description label="">
          <div style={{ alignItems: 'end', display: 'flex' }}>
            <span>
              <Text preset="span">Label title&nbsp;</Text>
            </span>
            <span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icon
                    name={ICON_NAME.circleQuestion}
                    style={{ color: 'var(--ods-theme-anchor-text-color)' }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <Text preset="paragraph">Lorem ipsum dolor sit amet</Text>
                </TooltipContent>
              </Tooltip>
            </span>
            <span>
              &nbsp;
              <Badge size={BADGE_SIZE.sm} >Badge Text</Badge>
            </span>
          </div>
          <div>
            <Link href="#" style={{ paddingTop: '8px' }}>
              <span>Im a link</span>
              <Icon name={ICON_NAME.arrowRight} />
            </Link>
          </div>
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Edit Desription" tooltip="Lorem ipsum dolor sit amet." />
        <DashboardBox.Item.Description>
          <div className="flex justify-between">
            <Text preset="span">Sample Description</Text>
            <Button variant="ghost" size="xs">
              <Icon name={ICON_NAME.pen}></Icon>
            </Button>
          </div>
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Label title" />
        <DashboardBox.Item.Description>
          <div>
            <Text preset="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Text>
          </div>
          <div>
            <Link href="#" style={{ paddingTop: '8px' }}>
              <span>Im a link</span>
              <Icon name={ICON_NAME.arrowRight} />
            </Link>
          </div>
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Label title" />
        <DashboardBox.Item.Description>
          <div>
            <ProgressBar value="50" />
            <Text preset="span">50%</Text>
          </div>
          <div>
            <Link href="#" style={{ paddingTop: '8px' }}>
              <span>Im a link</span>
              <Icon name={ICON_NAME.arrowRight} />
            </Link>
          </div>
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Item with Badge" />
        <DashboardBox.Item.Description>
          <Badge>Coming Soon</Badge>
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term label="Label title" actions={<ActionMenu />} />
        <DashboardBox.Item.Description>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>25</td>
                <td>New York</td>
              </tr>
              <tr>
                <td>Jane</td>
                <td>30</td>
                <td>Los Angeles</td>
              </tr>
              <tr>
                <td>Jim</td>
                <td>35</td>
                <td>Chicago</td>
              </tr>
            </tbody>
          </Table>
          <div style={{ paddingTop: '8px' }}>
            <Link href="#" style={{ paddingTop: '8px' }}>
              <span>Im a link</span>
              <Icon name={ICON_NAME.arrowRight} />
            </Link>
          </div>
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
      <DashboardBox.Item.Root>
        <DashboardBox.Item.Term actionPrimary={<Button variant="ghost" color="primary">Action Primary</Button>} actions={<ActionMenu />} />
        <DashboardBox.Item.Description divider={false}>
          <Button variant="ghost" color="critical">
            Critical link
          </Button>
        </DashboardBox.Item.Description>
      </DashboardBox.Item.Root>
    </DashboardBox.Root>
  );
};

export { DashboardBoxComponent as DashboardBox };
