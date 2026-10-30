import { ICON_NAME, Icon, TEXT_PRESET, Text, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import style from './index.module.scss';

const FEATURES = {
  items: [
    { label: '4 x 1 GB databases' },
    { label: '8 GB Web Cloud Databases', tooltipContent: 'Some details.' },
  ],
  title: 'Database',
  tooltipContent: 'Some details.',
};

const FeatureList = (): JSX.Element => {
  return (
    <div className={ style['feature-list'] }>
      <div>
        <Text
          as="span"
          preset={ TEXT_PRESET.label }>
          { FEATURES.title }
        </Text>

        {
          !!FEATURES.tooltipContent &&
          <Tooltip>
            <TooltipTrigger asChild>
              <Icon
                aria-label={ `More information about ${FEATURES.title}` }
                className={ style['feature-list__tooltip-trigger'] }
                name={ ICON_NAME.circleQuestion } />
            </TooltipTrigger>

            <TooltipContent>
              { FEATURES.tooltipContent }
            </TooltipContent>
          </Tooltip>
        }
      </div>

      <ul className={ style['feature-list__items'] }>
        {
          FEATURES.items.map(({ label, tooltipContent }, idx) => (
            <li
              className={ style['feature-list__items__item'] }
              key={ idx }>
              <Icon
                className={ style['feature-list__items__item__icon'] }
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
                        aria-label={ `More information about ${label}` }
                        className={ style['feature-list__tooltip-trigger'] }
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
    </div>
  );
};

export {
  FeatureList,
};
