import { type ReactElement, useCallback, useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  BADGE_COLOR,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  CARD_COLOR,
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
  Divider,
  Icon,
  ICON_NAME,
  Link,
  Logo,
  LOGO_VARIANT,
  Quantity,
  QuantityControl,
  QuantityInput,
  Radio,
  RadioControl,
  RadioGroup,
  RadioLabel,
  Tab,
  TabContent,
  TabList,
  Tabs,
  TABS_VARIANT,
  Text,
  TEXT_PRESET,
  Tile,
} from '@ovhcloud/ods-react';
import style from './demo-order.module.scss';

const DEFAULT_OPTIONS = {
  processor: 'xeon-6226r',
  memory: '192gb',
  systemStorage: '2x480gb',
  storage: '6x384tb',
  publicBandwidth: '1gbit',
  privateBandwidth: '500mbit',
};

function DemoOrder(): ReactElement {
  const [regionChecked, setRegionChecked] = useState(true);
  const [quantity, setQuantity] = useState('1');

  const [processor, setProcessor] = useState<string | undefined>(DEFAULT_OPTIONS.processor);
  const [memory, setMemory] = useState<string | undefined>(DEFAULT_OPTIONS.memory);
  const [systemStorage, setSystemStorage] = useState<string | undefined>(DEFAULT_OPTIONS.systemStorage);
  const [storage, setStorage] = useState<string | undefined>(DEFAULT_OPTIONS.storage);
  const [publicBandwidth, setPublicBandwidth] = useState<string | undefined>(DEFAULT_OPTIONS.publicBandwidth);
  const [privateBandwidth, setPrivateBandwidth] = useState<string | undefined>(DEFAULT_OPTIONS.privateBandwidth);

  const clearAllOptions = useCallback(() => {
    setProcessor(undefined);
    setMemory(undefined);
    setSystemStorage(undefined);
    setStorage(undefined);
    setPublicBandwidth(undefined);
    setPrivateBandwidth(undefined);
  }, []);

  const restoreDefaultOptions = useCallback(() => {
    setProcessor(DEFAULT_OPTIONS.processor);
    setMemory(DEFAULT_OPTIONS.memory);
    setSystemStorage(DEFAULT_OPTIONS.systemStorage);
    setStorage(DEFAULT_OPTIONS.storage);
    setPublicBandwidth(DEFAULT_OPTIONS.publicBandwidth);
    setPrivateBandwidth(DEFAULT_OPTIONS.privateBandwidth);
  }, []);

  const handleCheckboxChange = useCallback(({ checked }: { checked: boolean | 'indeterminate' }) => {
    const isChecked = checked === true;
    setRegionChecked(isChecked);
    if (isChecked) {
      setQuantity('1');
      restoreDefaultOptions();
    } else {
      setQuantity('0');
      clearAllOptions();
    }
  }, [clearAllOptions, restoreDefaultOptions]);

  const handleQuantityChange = useCallback(({ value, valueAsNumber }: { value: string, valueAsNumber: number }) => {
    setQuantity(value);
    if (valueAsNumber <= 0) {
      setRegionChecked(false);
      clearAllOptions();
    } else if (!regionChecked) {
      setRegionChecked(true);
      restoreDefaultOptions();
    }
  }, [clearAllOptions, regionChecked, restoreDefaultOptions]);

  const isConfigured = regionChecked && parseInt(quantity, 10) > 0;

  // Price calculation
  const BASE_PRICE = 1209.99;

  const PRICE_MAP: Record<string, Record<string, number>> = {
    memory: { '192gb': 0, '384gb': 115.00 },
    storage: { '6x384tb': 0, '12x384tb': 215.00, '24x384tb': 946.00 },
    publicBandwidth: { '1gbit': 0, '4gbit': 299.00, '6gbit': 419.00, '10gbit': 598.00 },
  };

  const total = useMemo(() => {
    if (!isConfigured) return 0;
    const memoryExtra = memory ? (PRICE_MAP.memory[memory] ?? 0) : 0;
    const storageExtra = storage ? (PRICE_MAP.storage[storage] ?? 0) : 0;
    const bandwidthExtra = publicBandwidth ? (PRICE_MAP.publicBandwidth[publicBandwidth] ?? 0) : 0;
    return BASE_PRICE + memoryExtra + storageExtra + bandwidthExtra;
  }, [isConfigured, memory, storage, publicBandwidth]);

  const formatPrice = (price: number) => `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className={ style['demo-order'] }>
      {/* Top navigation bar */}
      <div className={ style['demo-order__header'] }>
        <div className={ style['demo-order__navbar'] }>
          <Link as={ RouterLink } to="/">
            <Logo variant={ LOGO_VARIANT.emblem } />
          </Link>
          <div className={ style['demo-order__navbar-right'] }>
            <Link href="#">
              <Icon name={ ICON_NAME.circleUser } />
              My customer account
            </Link>
            <Link href="#">Support</Link>
            <Icon name={ ICON_NAME.globe } />
          </div>
        </div>

        <div className={ style['demo-order__tabs'] }>
          <Tabs defaultValue="dedicated">
            <TabList>
              <Tab value="home">
                <Icon name={ ICON_NAME.home } />
              </Tab>
              <Tab value="dedicated">Dedicated servers</Tab>
              <Tab value="vps">VPS</Tab>
              <Tab value="storage">Storage &amp; Backup</Tab>
              <Tab value="network">Network</Tab>
              <Tab value="security">Security &amp; Identity</Tab>
              <Tab value="hypervisors">Hypervisors</Tab>
            </TabList>
          </Tabs>
        </div>
      </div>

      {/* Page content (with padding) */}
      <div className={ style['demo-order__page-content'] }>
      {/* Page title */}
      <Text preset={ TEXT_PRESET.heading5 }>HGR-SAP-1</Text>

      <Divider />

      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Dedicated servers</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Indus list</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">HGR-SAP-1</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Title */}
      <div className={ style['demo-order__title'] }>
        <Text preset={ TEXT_PRESET.heading2 }>HGR-SAP-1</Text>
        <div className={ style['demo-order__title-badges'] }>
          <Badge color={ BADGE_COLOR.success }>In stock</Badge>
          <Badge color={ BADGE_COLOR.information }>new installation</Badge>
        </div>
      </div>

      {/* Main content */}
      <div className={ style['demo-order__content'] }>
        {/* Left: Configuration */}
        <div className={ style['demo-order__config'] }>
          <Text preset={ TEXT_PRESET.heading3 }>Configure your server</Text>

          {/* Region location */}
          <Text preset={ TEXT_PRESET.heading5 }>Region location</Text>
          <Text preset={ TEXT_PRESET.small }>
            Renewal / Due date / Price change depending on the selected region.
          </Text>

          <Tabs defaultValue="north-america" variant={ TABS_VARIANT.switch }>
            <TabList>
              <Tab value="europe">Europe</Tab>
              <Tab value="north-america">North America</Tab>
              <Tab value="asia">Asia/Canada</Tab>
            </TabList>

            <TabContent value="north-america">
              <Tile selected={ regionChecked }>
                <div className={ style['demo-order__tile-body'] }>
                <div className={ style['demo-order__option'] }>
                  <Checkbox
                    checked={ regionChecked }
                    onCheckedChange={ handleCheckboxChange }>
                    <CheckboxControl />
                    <CheckboxLabel>North America (Canada - East - Beauharnois)</CheckboxLabel>
                  </Checkbox>
                  <Quantity
                    min={ 0 }
                    onValueChange={ handleQuantityChange }
                    value={ quantity }>
                    <QuantityControl>
                      <QuantityInput />
                    </QuantityControl>
                  </Quantity>
                </div>
                <div className={ style['demo-order__tile-info'] }>
                  <Icon name={ ICON_NAME.circleCheck } />
                  <Text preset={ TEXT_PRESET.small }>Delivery in 3 days</Text>
                </div>
                </div>
              </Tile>
            </TabContent>

            <TabContent value="europe">
              <Text preset={ TEXT_PRESET.paragraph }>European regions</Text>
            </TabContent>

            <TabContent value="asia">
              <Text preset={ TEXT_PRESET.paragraph }>Asia/Canada regions</Text>
            </TabContent>
          </Tabs>

          { isConfigured && (
          <>
          <Divider />

          {/* Processor */}
          <Text preset={ TEXT_PRESET.heading5 }>Processor</Text>
          <RadioGroup
            orientation="vertical"
            onValueChange={ ({ value }) => setProcessor(value) }
            value={ processor }>
            <Tile selected={ processor === 'xeon-6226r' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <Radio value="xeon-6226r">
                  <RadioControl />
                  <RadioLabel>Dual Intel Xeon Gold 6226R 2x16c/2x32t - 2.9Ghz/3.9Ghz</RadioLabel>
                </Radio>
              </div>
              <div className={ style['demo-order__tile-info'] }>
                <Icon name={ ICON_NAME.tag } />
                <Text preset={ TEXT_PRESET.small }>Free installation fees</Text>
              </div>
              </div>
            </Tile>
          </RadioGroup>
          <Link href="#">
            List of compatible operating systems
            <Icon name={ ICON_NAME.arrowRight } />
          </Link>

          <Divider />

          {/* Memory */}
          <Text preset={ TEXT_PRESET.heading5 }>Memory</Text>
          <RadioGroup
            orientation="vertical"
            onValueChange={ ({ value }) => setMemory(value) }
            value={ memory }>
            <Tile selected={ memory === '192gb' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <div className={ style['demo-order__option-left'] }>
                  <Radio value="192gb">
                    <RadioControl />
                    <RadioLabel>192 GB (12x16 GB) DDR4 ECC</RadioLabel>
                  </Radio>
                  <Badge color={ BADGE_COLOR.new }>new</Badge>
                </div>
                <Text preset={ TEXT_PRESET.heading6 }>Included</Text>
              </div>
              </div>
            </Tile>
            <Divider />
            <Tile selected={ memory === '384gb' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <div className={ style['demo-order__option-left'] }>
                  <Radio value="384gb">
                    <RadioControl />
                    <RadioLabel>384 GB (12x32 GB) DDR4 ECC</RadioLabel>
                  </Radio>
                  <Badge color={ BADGE_COLOR.new }>new</Badge>
                </div>
                <div className={ style['demo-order__option-right'] }>
                  <Text preset={ TEXT_PRESET.heading6 }>$115.00</Text>
                  <Text preset={ TEXT_PRESET.small }>ex. local tax/month</Text>
                </div>
              </div>
              </div>
            </Tile>
          </RadioGroup>

          <Divider />

          {/* System storage */}
          <Text preset={ TEXT_PRESET.heading5 }>System storage</Text>
          <RadioGroup
            orientation="vertical"
            onValueChange={ ({ value }) => setSystemStorage(value) }
            value={ systemStorage }>
            <Tile selected={ systemStorage === '2x480gb' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <Radio value="2x480gb">
                  <RadioControl />
                  <RadioLabel>2x 480 GB SSD SATA Soft RAID</RadioLabel>
                </Radio>
                <Text preset={ TEXT_PRESET.heading6 }>Included</Text>
              </div>
              </div>
            </Tile>
          </RadioGroup>

          <Divider />

          {/* Storage */}
          <Text preset={ TEXT_PRESET.heading5 }>Storage</Text>
          <RadioGroup
            orientation="vertical"
            onValueChange={ ({ value }) => setStorage(value) }
            value={ storage }>
            <Tile selected={ storage === '6x384tb' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <Radio value="6x384tb">
                  <RadioControl />
                  <RadioLabel>6x 3.84 TB SSD SAS Hard RAID</RadioLabel>
                </Radio>
                <Text preset={ TEXT_PRESET.heading6 }>Included</Text>
              </div>
              </div>
            </Tile>
            <Divider />
            <Tile selected={ storage === '12x384tb' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <Radio value="12x384tb">
                  <RadioControl />
                  <RadioLabel>12x 3.84 TB SSD SAS Hard RAID</RadioLabel>
                </Radio>
                <div className={ style['demo-order__option-right'] }>
                  <Text preset={ TEXT_PRESET.heading6 }>$215.00</Text>
                  <Text preset={ TEXT_PRESET.small }>ex. local tax/month</Text>
                </div>
              </div>
              </div>
            </Tile>
            <Divider />
            <Tile selected={ storage === '24x384tb' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <Radio value="24x384tb">
                  <RadioControl />
                  <RadioLabel>24x 3.84 TB SSD SAS Hard RAID</RadioLabel>
                </Radio>
                <div className={ style['demo-order__option-right'] }>
                  <Text preset={ TEXT_PRESET.heading6 }>$946.00</Text>
                  <Text preset={ TEXT_PRESET.small }>ex. local tax/month</Text>
                </div>
              </div>
              </div>
            </Tile>
          </RadioGroup>

          <Divider />

          {/* Public bandwidth */}
          <Text preset={ TEXT_PRESET.heading5 }>Public bandwidth</Text>
          <RadioGroup
            orientation="vertical"
            onValueChange={ ({ value }) => setPublicBandwidth(value) }
            value={ publicBandwidth }>
            <Tile selected={ publicBandwidth === '1gbit' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <Radio value="1gbit">
                  <RadioControl />
                  <RadioLabel>1Gbit/s unrestricted and guaranteed</RadioLabel>
                </Radio>
                <Text preset={ TEXT_PRESET.heading6 }>Included</Text>
              </div>
              </div>
            </Tile>
            <Divider />
            <Tile selected={ publicBandwidth === '4gbit' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <Radio value="4gbit">
                  <RadioControl />
                  <RadioLabel>4Gbit/s unrestricted and guaranteed</RadioLabel>
                </Radio>
                <div className={ style['demo-order__option-right'] }>
                  <Text preset={ TEXT_PRESET.heading6 }>$299.00</Text>
                  <Text preset={ TEXT_PRESET.small }>ex. local tax/month</Text>
                </div>
              </div>
              </div>
            </Tile>
            <Divider />
            <Tile selected={ publicBandwidth === '6gbit' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <Radio value="6gbit">
                  <RadioControl />
                  <RadioLabel>6Gbit/s unrestricted and guaranteed</RadioLabel>
                </Radio>
                <div className={ style['demo-order__option-right'] }>
                  <Text preset={ TEXT_PRESET.heading6 }>$419.00</Text>
                  <Text preset={ TEXT_PRESET.small }>ex. local tax/month</Text>
                </div>
              </div>
              </div>
            </Tile>
            <Divider />
            <Tile selected={ publicBandwidth === '10gbit' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <Radio value="10gbit">
                  <RadioControl />
                  <RadioLabel>10Gbit/s unrestricted and guaranteed</RadioLabel>
                </Radio>
                <div className={ style['demo-order__option-right'] }>
                  <Text preset={ TEXT_PRESET.heading6 }>$598.00</Text>
                  <Text preset={ TEXT_PRESET.small }>ex. local tax/month</Text>
                </div>
              </div>
              </div>
            </Tile>
          </RadioGroup>

          <Divider />

          {/* Private bandwidth */}
          <Text preset={ TEXT_PRESET.heading5 }>Private bandwidth</Text>
          <RadioGroup
            orientation="vertical"
            onValueChange={ ({ value }) => setPrivateBandwidth(value) }
            value={ privateBandwidth }>
            <Tile selected={ privateBandwidth === '500mbit' }>
              <div className={ style['demo-order__tile-body'] }>
              <div className={ style['demo-order__option'] }>
                <Radio value="500mbit">
                  <RadioControl />
                  <RadioLabel>500Mbit/s unrestricted and guaranteed</RadioLabel>
                </Radio>
                <Text preset={ TEXT_PRESET.heading6 }>Included</Text>
              </div>
              </div>
            </Tile>
          </RadioGroup>

          <Divider />

          {/* Add options */}
          <Text preset={ TEXT_PRESET.heading4 }>Add options</Text>

          <Text preset={ TEXT_PRESET.heading5 }>Backup Add-ons</Text>
          <Text preset={ TEXT_PRESET.small }>
            Fully managed, affordable backup solution offering automatic daily backups, precise bandwidth and centralized monitoring.
            All accessible OVHcloud OS1 via Express, on delivery of your Bare Metal. Status only on access to Table
            and partition OS/ backup Snapshot your new option.
          </Text>

          <Tile disabled>
            <div className={ style['demo-order__tile-body'] }>
            <div className={ style['demo-order__option'] }>
              <div className={ style['demo-order__tile-info'] }>
                <Checkbox disabled>
                  <CheckboxControl />
                  <CheckboxLabel>Backup Agent</CheckboxLabel>
                </Checkbox>
                <Badge color={ BADGE_COLOR.warning }>Coming soon</Badge>
              </div>
              <Text preset={ TEXT_PRESET.small }>Free Baremetal</Text>
            </div>
            </div>
          </Tile>

          <Text preset={ TEXT_PRESET.small }>
            Backup together. By using the default gratuite app. See the more informations on pricing.
          </Text>

          <Divider />
          </>
          )}

          {/* Bottom actions */}
          <div className={ style['demo-order__actions'] }>
            <Link as={ RouterLink } to="/">
              <Icon name={ ICON_NAME.arrowLeft } />
              Back
            </Link>
            <Button>
              Continue
              <Icon name={ ICON_NAME.arrowRight } />
            </Button>
          </div>
        </div>

        {/* Right: Summary */}
        <div className={ style['demo-order__summary'] }>
          <Card color={ CARD_COLOR.neutral }>
            <div className={ style['demo-order__summary-content'] }>
              <Text preset={ TEXT_PRESET.heading5 }>Dedicated Server</Text>

              { isConfigured ? (
                <>
                  <Accordion defaultValue={['hgr-sap']}>
                    <AccordionItem value="hgr-sap">
                      <AccordionTrigger>
                        <div className={ style['demo-order__summary-row'] }>
                          <Text preset={ TEXT_PRESET.label }>Hgr-sap-1</Text>
                          <Text preset={ TEXT_PRESET.heading6 }>{ formatPrice(total) }</Text>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className={ style['demo-order__summary-details'] }>
                          <Divider className={ style['demo-order__summary-divider'] } />
                          <div className={ style['demo-order__summary-row'] }>
                            <Text preset={ TEXT_PRESET.small }>Location order</Text>
                            <Text preset={ TEXT_PRESET.small }>North America (Canada - East)</Text>
                          </div>
                          <Divider className={ style['demo-order__summary-divider'] } />
                          <div className={ style['demo-order__summary-row'] }>
                            <Text preset={ TEXT_PRESET.small }>Datacenter</Text>
                            <Text preset={ TEXT_PRESET.small }>Beauharnois</Text>
                          </div>
                          <Divider className={ style['demo-order__summary-divider'] } />

                          { processor && (
                            <>
                            <div className={ style['demo-order__summary-row'] }>
                              <Text preset={ TEXT_PRESET.small }>Processor</Text>
                              <Text preset={ TEXT_PRESET.small }>Dual Intel Xeon Gold 6226R</Text>
                            </div>
                            <Divider className={ style['demo-order__summary-divider'] } />
                            </>
                          )}

                          { memory && (
                            <>
                            <div className={ style['demo-order__summary-row'] }>
                              <Text preset={ TEXT_PRESET.small }>Memory</Text>
                              <Text preset={ TEXT_PRESET.small }>
                                { memory === '192gb' ? '192 GB DDR4 ECC' : '384 GB DDR4 ECC' }
                              </Text>
                            </div>
                            <Divider className={ style['demo-order__summary-divider'] } />
                            </>
                          )}

                          { storage && (
                            <>
                            <div className={ style['demo-order__summary-row'] }>
                              <Text preset={ TEXT_PRESET.small }>Storage</Text>
                              <Text preset={ TEXT_PRESET.small }>
                                { storage === '6x384tb' ? '6x 3.84 TB SSD SAS Hard RAID'
                                  : storage === '12x384tb' ? '12x 3.84 TB SSD SAS Hard RAID'
                                    : '24x 3.84 TB SSD SAS Hard RAID' }
                              </Text>
                            </div>
                            <Divider className={ style['demo-order__summary-divider'] } />
                            </>
                          )}

                          { systemStorage && (
                            <>
                            <div className={ style['demo-order__summary-row'] }>
                              <Text preset={ TEXT_PRESET.small }>System storage</Text>
                              <Text preset={ TEXT_PRESET.small }>2x 480 GB SSD SATA Soft RAID</Text>
                            </div>
                            <Divider className={ style['demo-order__summary-divider'] } />
                            </>
                          )}

                          { publicBandwidth && (
                            <>
                            <div className={ style['demo-order__summary-row'] }>
                              <Text preset={ TEXT_PRESET.small }>Public bandwidth</Text>
                              <Text preset={ TEXT_PRESET.small }>
                                { publicBandwidth === '1gbit' ? '1Gbit/s unrestricted and guaranteed'
                                  : publicBandwidth === '4gbit' ? '4Gbit/s unrestricted and guaranteed'
                                    : publicBandwidth === '6gbit' ? '6Gbit/s unrestricted and guaranteed'
                                      : '10Gbit/s unrestricted and guaranteed' }
                              </Text>
                            </div>
                            <Divider className={ style['demo-order__summary-divider'] } />
                            </>
                          )}

                          { privateBandwidth && (
                            <>
                            <div className={ style['demo-order__summary-row'] }>
                              <Text preset={ TEXT_PRESET.small }>Private bandwidth</Text>
                              <Text preset={ TEXT_PRESET.small }>500Mbit/s unrestricted and guaranteed</Text>
                            </div>
                            <Divider className={ style['demo-order__summary-divider'] } />
                            </>
                          )}

                          <div className={ style['demo-order__summary-row'] }>
                            <Text preset={ TEXT_PRESET.small }>Server installation fees</Text>
                            <Text preset={ TEXT_PRESET.small }>free</Text>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className={ style['demo-order__summary-row'] }>
                    <Text preset={ TEXT_PRESET.heading5 }>Total</Text>
                    <div>
                      <Text preset={ TEXT_PRESET.heading3 }>{ formatPrice(total) }</Text>
                      <Text preset={ TEXT_PRESET.small }>ex. local tax/month</Text>
                    </div>
                  </div>

                  <Button>
                    <Icon name={ ICON_NAME.shoppingCart } />
                    Continue order
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Button>
                </>
              ) : (
                <>
                  <div className={ style['demo-order__summary-empty'] }>
                    <Icon name={ ICON_NAME.shoppingCart } />
                    <Text preset={ TEXT_PRESET.heading5 }>Your cart is empty</Text>
                  </div>
                  <Button disabled>
                    Continue order
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Button>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
}

export { DemoOrder };
