import {
  ICON_NAME,
  Icon,
  TEXT_PRESET,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@ovhcloud/ods-react';
import { type JSX } from 'react';
import styles from './DefinitionList.module.css';

type DefinitionListItem = {
  label: string,
  tooltipContent?: string,
  value?: JSX.Element | string | number | null,
}

type DefinitionListProp = {
  emptyValueLabel?: string,
  items: DefinitionListItem[],
}

const DEFAULT_EMPTY_VALUE = '-';

const DefinitionList = ({
  emptyValueLabel = DEFAULT_EMPTY_VALUE,
  items,
}: DefinitionListProp): JSX.Element => {
  return (
    <dl className={ styles['definition-list'] }>
      {
        items.map(({ label, tooltipContent, value }, idx) => (
          <div
            className={ styles['definition-list__item'] }
            key={ idx }>
            <dt className={ styles['definition-list__item__term'] }>
              <Text
                as="span"
                preset={ TEXT_PRESET.label }>
                { label }
              </Text>

              {
                !!tooltipContent &&
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Icon
                      className={ styles['definition-list__item__term__tooltip-trigger'] }
                      name={ ICON_NAME.circleQuestion }
                      tabIndex={ 0 } />
                  </TooltipTrigger>

                  <TooltipContent>
                    { tooltipContent }
                  </TooltipContent>
                </Tooltip>
              }
            </dt>

            <dd className={ styles['definition-list__item__definition'] }>
              <span className={ styles['definition-list__item__definition__value'] }>
                { value ?? emptyValueLabel }
              </span>
            </dd>
          </div>
        ))
      }
    </dl>
  );
};

export {
  DefinitionList,
  type DefinitionListItem,
  type DefinitionListProp,
};



