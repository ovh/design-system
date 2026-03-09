import { BADGE_COLOR, BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Badge, Button, CARD_COLOR, Card, Clipboard, ClipboardControl, ClipboardTrigger, Divider, Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, ICON_NAME, Icon, Input, Link, Menu, MenuContent, MenuItem, MenuTrigger, TEXT_PRESET, Text, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import { type JSX, useRef, useState } from 'react';
import './index.module.css';

const DashboardCard = (): JSX.Element => {
  const [clusterName, setClusterName] = useState('MyCluster');
  const bufferClusterNameRef = useRef(clusterName);

  return (
    <Card
      className="flex flex-col gap-y-[calc(var(--ods-theme-row-gap)_*_1.25)] py-[calc(var(--ods-theme-padding-vertical)_*_2)] px-[calc(var(--ods-theme-padding-horizontal)_*_2)] text-[var(--ods-theme-text-color)]"
      color={ CARD_COLOR.neutral }>
      <Text preset={ TEXT_PRESET.heading4 }>
        Cluster Information
      </Text>

      <Divider className="w-full" />

      <div className="flex flex-col gap-y-[var(--ods-theme-row-gap)]">
        <Text
          as="span"
          id="cluster-name"
          preset={ TEXT_PRESET.label }>
          Name
        </Text>

        <Editable
          onCancel={ () => bufferClusterNameRef.current = clusterName }
          onSubmit={ () => setClusterName(bufferClusterNameRef.current) }>
          <EditableDisplay>
            { clusterName || <EditableDisplayEmpty>Empty value</EditableDisplayEmpty> }
          </EditableDisplay>

          <EditableInput>
            <Input
              aria-labelledby="cluster-name"
              autoFocus
              defaultValue={ clusterName }
              onChange={ (e) => bufferClusterNameRef.current = e.target.value } />
          </EditableInput>

          <EditableActions />
        </Editable>
      </div>

      <Divider className="w-full" />

      <div className="flex flex-col gap-y-[var(--ods-theme-row-gap)]">
        <Text
          as="span"
          id="cluster-id"
          preset={ TEXT_PRESET.label }>
          ID
        </Text>

        <Clipboard
          aria-labelledby="cluster-id"
          value="b50879e0-735e-44f5-8ff9-d563303039f0">
          <ClipboardControl />

          <ClipboardTrigger />
        </Clipboard>
      </div>

      <Divider className="w-full" />

      <div className="flex flex-col gap-y-[var(--ods-theme-row-gap)]">
        <Text
          as="span"
          preset={ TEXT_PRESET.label }>
          Region
        </Text>

        <div className="flex flex-row gap-x-[calc(var(--ods-theme-column-gap)_/_2)] items-center">
          GRA9
          <Badge>
            1-AZ
            <Tooltip>
              <TooltipTrigger asChild>
                <Icon
                  aria-label="Open tooltip"
                  name={ ICON_NAME.circleQuestion } />
              </TooltipTrigger>

              <TooltipContent withArrow>
                Single-zone region, ideal for workloads where cost optimisation is a priority.
              </TooltipContent>
            </Tooltip>
          </Badge>
        </div>
      </div>

      <Divider className="w-full" />

      <div className="flex flex-col gap-y-[var(--ods-theme-row-gap)]">
        <Text
          as="span"
          preset={ TEXT_PRESET.label }>
          Admission plugins
        </Text>

        <div className="flex flex-col gap-y-[var(--ods-theme-row-gap)]">
          <div className="inline-flex flex-row gap-x-[calc(var(--ods-theme-column-gap)_/_2)] items-center">
            Always Pull Images Plugin
            <Badge color={ BADGE_COLOR.success }>
              Enable
            </Badge>
          </div>

          <div className="inline-flex flex-row gap-x-[calc(var(--ods-theme-column-gap)_/_2)] items-center">
            Plugin Node Restriction
            <Badge color={ BADGE_COLOR.success }>
              Enable
            </Badge>
          </div>

          <Link>
            Enable/Disable plugins <Icon name={ ICON_NAME.arrowRight } />
          </Link>
        </div>
      </div>

      <Divider className="w-full" />

      <div className="flex flex-row gap-x-[var(--ods-theme-column-gap)] items-start justify-between">
        <div className="flex flex-col gap-y-[var(--ods-theme-row-gap)] items-start">
          <Button
            size={ BUTTON_SIZE.sm }
            variant={ BUTTON_VARIANT.ghost }>
            Reset Cluster
          </Button>

          <Button
            color={ BUTTON_COLOR.critical }
            size={ BUTTON_SIZE.sm }
            variant={ BUTTON_VARIANT.ghost }>
            Delete Cluster
          </Button>
        </div>

        <Menu>
          <MenuTrigger asChild>
            <Button
              size={ BUTTON_SIZE.sm }
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.ellipsisVertical } />
            </Button>
          </MenuTrigger>

          <MenuContent withArrow>
            <MenuItem value="strategy">
              Change Deployment Strategy
            </MenuItem>

            <MenuItem value="logs">
              View Cluster Logs
            </MenuItem>
          </MenuContent>
        </Menu>
      </div>
    </Card>
  );
};

export {
  DashboardCard,
};
