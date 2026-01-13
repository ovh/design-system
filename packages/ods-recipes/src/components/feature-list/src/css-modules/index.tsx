import { ICON_NAME, Icon, TEXT_PRESET, Text, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import style from './index.module.scss';

const FEATURES = [
  { label: 'Memory: up to 1.5 TB' },
  { label: 'SLA: 99.99%' },
  { label: 'Guaranteed public bandwidth from 5 Gbps to 25 Gbps', tooltipContent: 'Except for our Asia-Pacific regions.' },
  { label: '25 Gbps private bandwidth included' },
  { label: 'OVHcloud Link Aggregation' },
];

const FeatureList = (): JSX.Element => {
  return (
    <ul className={ style['feature-list'] }>
      {
        FEATURES.map(({ label, tooltipContent }, idx) => (
          <li
            className={ style['feature-list__item'] }
            key={ idx }>
            <Icon
              className={ style['feature-list__item__icon'] }
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
                      className={ style['feature-list__item__tooltip-trigger'] }
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
};
