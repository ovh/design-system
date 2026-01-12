import { TEXT_PRESET, Text, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import classNames from 'classnames';
import React from 'react';
import styles from './roadmapItem.module.css';

type RoadmapItemData = {
  description?: string,
  label?: string,
  range?: number[],
}

type Props = {
  className?: string,
  item: RoadmapItemData,
}

const ROADMAP_ITEM_HEIGHT = 40;

function getItemStyle(range?: number[]): Record<string, string> {
  if (!range || range.length < 2) {
    return {
      height: `${ROADMAP_ITEM_HEIGHT}px`,
      width: '100%' };
  }

  return {
    height: `${ROADMAP_ITEM_HEIGHT}px`,
    marginLeft: `${range[0] * 100}%`,
    width: `${(range[1] - range[0]) * 100}%`
  };
}

const RoadmapItem = ({ className, item }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={ classNames(styles['roadmap-item'], className) }
          style={ getItemStyle(item.range) }>
          <span className={ styles['roadmap-item__label'] }>
            { item.label }
          </span>
        </div>
      </TooltipTrigger>

      {
        (!!item.label || !!item.description) &&
        <TooltipContent withArrow>
          {
            item.label &&
            <Text
              as="span"
              preset={ TEXT_PRESET.heading6 }>
              { item.label }
            </Text>
          }

          {
            item.description &&
            <Text preset={ TEXT_PRESET.paragraph }>
              { item.description }
            </Text>
          }
        </TooltipContent>
      }
    </Tooltip>
  );
};

export {
  ROADMAP_ITEM_HEIGHT,
  RoadmapItem,
  type RoadmapItemData,
};
