import { ICON_NAME, Icon, TEXT_PRESET, Text, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import styles from './FeatureList.module.css';

type FeatureListItem = {
  label: string,
  tooltipContent?: string,
}

type FeatureListProp = {
  items: FeatureListItem[],
}

const FeatureList = ({ items }: FeatureListProp): JSX.Element => {
  return (
    <ul className={ styles['feature-list'] }>
      {
        items.map(({ label, tooltipContent }, idx) => (
          <li
            className={ styles['feature-list__item'] }
            key={ idx }>
            <Icon
              className={ styles['feature-list__item__icon'] }
              name={ ICON_NAME.check } />

            <div>
              <Text preset={ TEXT_PRESET.span }>
                { label }
              </Text>

              {
                !!tooltipContent &&
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Icon
                      className={ styles['feature-list__item__tooltip-trigger'] }
                      name={ ICON_NAME.circleQuestion } />
                  </TooltipTrigger>

                  <TooltipContent>
                    { tooltipContent }
                  </TooltipContent>
                </Tooltip>
              }
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export {
  FeatureList,
  type FeatureListItem,
  type FeatureListProp,
};

