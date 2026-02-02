import { BADGE_COLOR, BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Badge, Button, CARD_COLOR, Card, Clipboard, ClipboardControl, ClipboardTrigger, Divider, Editable, EditableActions, EditableDisplay, EditableDisplayEmpty, EditableInput, ICON_NAME, Icon, Input, Link, Popover, PopoverContent, PopoverTrigger, TEXT_PRESET, Text, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import { type JSX, type PropsWithChildren, useRef, useState } from 'react';
import style from './index.module.scss';

const ActionMenu = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <Popover>
      <PopoverTrigger
        aria-haspopup="menu"
        asChild>
        <Button
          size={ BUTTON_SIZE.sm }
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.ellipsisVertical } />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        aria-label="Action menu"
        withArrow>
        <div
          className={ style['action-menu'] }
          role="menu">
          { children }
        </div>
      </PopoverContent>
    </Popover>
  );
};

const DashboardCard = (): JSX.Element => {
  const [clusterName, setClusterName] = useState('MyCluster');
  const bufferClusterNameRef = useRef(clusterName);

  return (
    <Card
      className={ style['dashboard-card'] }
      color={ CARD_COLOR.neutral }>
      <Text preset={ TEXT_PRESET.heading4 }>
        Cluster Information
      </Text>

      <Divider className={ style['dashboard-card__divider'] } />

      <div className={ style['dashboard-card__name'] }>
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

      <Divider className={ style['dashboard-card__divider'] } />

      <div className={ style['dashboard-card__id'] }>
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

      <Divider className={ style['dashboard-card__divider'] } />

      <div className={ style['dashboard-card__region'] }>
        <Text
          as="span"
          preset={ TEXT_PRESET.label }>
          Region
        </Text>

        <div className={ style['dashboard-card__region__content'] }>
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

      <Divider className={ style['dashboard-card__divider'] } />

      <div className={ style['dashboard-card__plugins'] }>
        <Text
          as="span"
          preset={ TEXT_PRESET.label }>
          Admission plugins
        </Text>

        <div className={ style['dashboard-card__plugins__content'] }>
          <div className={ style['dashboard-card__plugins__content__plugin'] }>
            Always Pull Images Plugin
            <Badge color={ BADGE_COLOR.success }>
              Enable
            </Badge>
          </div>

          <div className={ style['dashboard-card__plugins__content__plugin'] }>
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

      <Divider className={ style['dashboard-card__divider'] } />

      <div className={ style['dashboard-card__footer'] }>
        <div className={ style['dashboard-card__footer__actions'] }>
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

        <ActionMenu>
          <Button
            role="menuitem"
            size={ BUTTON_SIZE.sm }
            variant={ BUTTON_VARIANT.ghost }>
            Change Deployment Strategy
          </Button>

          <Button
            role="menuitem"
            size={ BUTTON_SIZE.sm }
            variant={ BUTTON_VARIANT.ghost }>
            View Cluster Logs
          </Button>
        </ActionMenu>
      </div>
    </Card>
  );
};

export {
  DashboardCard,
};
