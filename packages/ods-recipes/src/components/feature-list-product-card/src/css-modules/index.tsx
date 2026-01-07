import { BADGE_COLOR, BADGE_SIZE, Badge, CARD_COLOR, Card, ICON_NAME, Icon, Link, Select, SelectContent, SelectControl, TEXT_PRESET, Text, Tooltip, TooltipContent, TooltipTrigger, formatPrice } from '@ovhcloud/ods-react';
import { type JSX, useState } from 'react';
import style from './index.module.scss';

const FEATURES = [{
  items: [
    { label: 'Unlimited websites', tooltipContent: 'Some details.' },
    { label: 'High power level' },
    { label: '1 domain name free for the first', tooltipContent: 'Some details.' },
    { label: '500 GB SSD storage', tooltipContent: 'Some details.' },
    { label: '1,000 email addresses', tooltipContent: 'Some details.' },
  ],
  title: '',
}, {
  items: [
    { label: 'WordPress' },
    { label: 'Joomla!' },
    { label: 'Drupal' },
    { label: 'Prestashop' },
  ],
  title: '1-click CMS',
  tooltipContent: 'Some details.',
}, {
  items: [
    { label: '4 x 1 GB databases' },
    { label: '8 GB Web Cloud Databases', tooltipContent: 'Some details.' },
  ],
  title: 'Database',
  tooltipContent: 'Some details.',
}, {
  items: [
    { label: 'Unlimited free SSL', tooltipContent: 'Some details.' },
    { label: 'Anti-DDoS protection' },
    { label: 'Anti-virus and anti-spam' },
    { label: 'Daily backups', tooltipContent: 'Some details.' },
  ],
  title: 'Security',
}, {
  items: [
    { label: '99.9% observed availability' },
    { label: 'Guaranteed resources', tooltipContent: 'Some details.' },
    { label: 'Unlimited traffic' },
    { label: 'Service continuity', tooltipContent: 'Some details.' },
    { label: 'Boost option to withstand temporary traffic spikes', tooltipContent: 'Some details.' },
  ],
  title: 'Performance',
}, {
  items: [
    { label: 'Git' },
    { label: 'Standard support' },
    { label: 'SSH access' },
    { label: 'CDN Basic' },
  ],
  title: 'Support and additional services',
}];

const HOSTING_ITEMS = [
  { label: '1 vCore 2,4 GHz, 2 Go RAM', value:'hosting-1' },
  { label: '1 vCore 2,4 GHz, 4 Go RAM', value:'hosting-2' },
  { label: '2 vCores 2,4 GHz, 8 Go RAM', value:'hosting-3' },
];

const FeatureListProductCard = (): JSX.Element => {
  const [isOrderButtonFocused, setIsOrderButtonFocused] = useState(false);
  const [isOrderButtonHovered, setIsOrderButtonHovered] = useState(false);

  return (
    <Card
      className={ style['feature-list-product-card'] }
      color={ CARD_COLOR.neutral }>
      <div className={ style['feature-list-product-card__info'] }>
        <Text
          as="span"
          preset={ TEXT_PRESET.label }>
          WEB HOSTING
        </Text>

        <div className={ style['feature-list-product-card__info__badges'] }>
          <Badge
            color={ BADGE_COLOR.new }
            size={ BADGE_SIZE.sm }>
            New
          </Badge>

          <Badge
            color={ BADGE_COLOR.information }
            size={ BADGE_SIZE.sm }>
            Best seller
          </Badge>
        </div>

        <div className={ style['feature-list-product-card__info__description'] }>
          <Text
            as="span"
            preset={ TEXT_PRESET.heading2 }>
            Performance
          </Text>

          <Text preset={ TEXT_PRESET.paragraph }>
            For demanding online stores and projects.
          </Text>
        </div>

        <Select
          defaultValue={ ['hosting-1'] }
          items={ HOSTING_ITEMS }>
          <SelectControl placeholder="Select option" />

          <SelectContent />
        </Select>

        <div className={ style['feature-list-product-card__info__pricing'] }>
          <span className={ style['feature-list-product-card__info__pricing__from'] }>
            From
          </span>

          <span className={ style['feature-list-product-card__info__pricing__amount'] }>
            { formatPrice(24.46, 'en-GB', 'EUR') }
          </span>

          <Text
            as="span"
            preset={ TEXT_PRESET.small }>
            ex. VAT/month
          </Text>

          <Text
            as="span"
            preset={ TEXT_PRESET.small }>
            or €13.19 incl. VAT/month
          </Text>

          <Text
            as="span"
            preset={ TEXT_PRESET.small }>
            for a 24-month registration
          </Text>
        </div>

        <div className={ style['feature-list-product-card__info__details'] }>
          <Text
            as="span"
            preset={ TEXT_PRESET.label }>
            Minimum 2-year registration
          </Text>

          <span className={ style['feature-list-product-card__info__details__promotion'] }>
            €100 free with a 5-year registration
          </span>

          <div className={ style['feature-list-product-card__info__details__installation'] }>
            <Text
              as="span"
              preset={ TEXT_PRESET.label }>
              Installation fee:
            </Text>

            <span className={ style['feature-list-product-card__info__details__installation__fee'] }>
              Free
            </span>
          </div>
        </div>

        <button
          className={ style['feature-list-product-card__info__order'] }
          onBlur={ () => setIsOrderButtonFocused(false) }
          onFocus={ () => setIsOrderButtonFocused(true) }
          onMouseEnter={ () => setIsOrderButtonHovered(true) }
          onMouseLeave={ () => setIsOrderButtonHovered(false) }
          type="button">
          <Icon
            className={ style['feature-list-product-card__info__order__icon'] }
            name={ isOrderButtonFocused || isOrderButtonHovered ? ICON_NAME.shoppingCartPlus : ICON_NAME.shoppingCart } />
          Order now
        </button>
      </div>

      <ul className={ style['feature-list-product-card__features'] }>
        {
          FEATURES.map(({ items, title, tooltipContent }, idx) => (
            <li
              className={ style['feature-list-product-card__features__section'] }
              key={ idx }>
              {
                title &&
                <div>
                  <Text
                    as="span"
                    preset={ TEXT_PRESET.label }>
                    { title }
                  </Text>

                  {
                    !!tooltipContent &&
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Icon
                          className={ style['feature-list-product-card__features__section__tooltip-trigger'] }
                          name={ ICON_NAME.circleQuestion } />
                      </TooltipTrigger>

                      <TooltipContent>
                        { tooltipContent }
                      </TooltipContent>
                    </Tooltip>
                  }
                </div>
              }

              <ul className={ style['feature-list-product-card__features__section__items'] }>
                {
                  items.map(({ label, tooltipContent }, idx) => (
                    <li
                      className={ style['feature-list-product-card__features__section__items__item'] }
                      key={ idx }>
                      <Icon
                        className={ style['feature-list-product-card__features__section__items__item__icon'] }
                        name={ ICON_NAME.check } />

                      <Text preset={ TEXT_PRESET.span }>
                        { label }
                      </Text>

                      {
                        !!tooltipContent &&
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon
                              className={ style['feature-list-product-card__features__section__items__item__tooltip-trigger'] }
                              name={ ICON_NAME.circleQuestion } />
                          </TooltipTrigger>

                          <TooltipContent>
                            { tooltipContent }
                          </TooltipContent>
                        </Tooltip>
                      }
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>

      <div className={ style['feature-list-product-card__footer'] }>
        <Link href="#">
          View product <Icon name={ ICON_NAME.arrowRight } />
        </Link>
      </div>
    </Card>
  );
};

export {
  FeatureListProductCard,
};
