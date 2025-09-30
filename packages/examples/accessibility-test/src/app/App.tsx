import {
  BUTTON_COLOR,
  BUTTON_VARIANT,
  CARD_COLOR,
  DIVIDER_COLOR,
  DRAWER_POSITION,
  ICON_NAME,
  MESSAGE_COLOR,
  TAG_COLOR,
  TEXT_PRESET,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
  Clipboard,
  ClipboardControl,
  ClipboardTrigger,
  Code,
  Combobox,
  ComboboxContent,
  ComboboxControl,
  Datepicker,
  DatepickerContent,
  DatepickerControl,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerTrigger,
  FormField,
  FormFieldError,
  FormFieldHelper,
  FormFieldLabel,
  FileUpload,
  FileUploadItem,
  FileUploadList,
  Icon,
  Input,
  Link,
  Medium,
  Meter,
  Message, MessageBody, MessageIcon,
  Modal, ModalBody, ModalContent, ModalTrigger,
  Pagination,
  Password,
  PhoneNumber,
  PhoneNumberControl,
  PhoneNumberCountryList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ProgressBar,
  Quantity,
  QuantityControl,
  QuantityInput,
  Radio,
  RadioControl,
  RadioGroup,
  RadioLabel,
  Range,
  Select,
  SelectContent,
  SelectControl,
  Skeleton,
  Spinner,
  Switch,
  SwitchItem,
  Table,
  Tabs,
  TabContent,
  TabList,
  Tab,
  Tag,
  Text,
  Textarea,
  Timepicker,
  TimepickerControl,
  TimepickerTimezoneList,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TreeView,
  TreeViewNode,
  TreeViewNodes,
} from '@ovhcloud/ods-react';
import { type ReactElement, useState } from 'react';
import { AccessibilityControl } from './components/accessibilityControl/AccessibilityControl';
import style from './app.module.scss';

function App(): ReactElement {
  const [files, setFiles] = useState<File[]>([]);
  const collection = [
    {
      id: 'src',
      name: 'src',
      expanded: true,
      children: [
        { id: 'app.tsx', name: 'app.tsx' },
        { id: 'index.ts', name: 'index.ts' },
        {
          id: 'components',
          name: 'components',
          children: [
            { id: 'Button.tsx', name: 'Button.tsx' },
            { id: 'Card.tsx', name: 'Card.tsx' },
          ],
        },
      ],
    },
    { id: 'package.json', name: 'package.json' },
    { id: 'readme.md', name: 'README.md' },
  ];

  return (
    <div className={ style.app }>
      <header className={ style['app__header'] }>
        <AccessibilityControl />
      </header>

      <main>
        <section>
          <h1>Accordion</h1>

          <Accordion>
            <AccordionItem value="0">
              <AccordionTrigger>
                Hello World!
              </AccordionTrigger>

              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h1>Badge</h1>

          <Badge size="sm">
            Small badge
          </Badge>

          <Badge>
            <Icon
              aria-label="Promotion"
              name={ ICON_NAME.tag }
              role="img" />
          </Badge>
        </section>

        <section>
          <h1>Breadcrumb</h1>

          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Hosting
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Servers
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Dedicated
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Rise
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                RISE-2
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <br /><br />

          <Breadcrumb aria-label="Breadcrumb">
            <BreadcrumbItem>
              <BreadcrumbLink aria-label="Home" href="#">
                <Icon name={ ICON_NAME.home } />
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Category
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Subcategory
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Current page
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </section>

        <section>
          <h1>Button</h1>

          <Button>
            Clear
          </Button>

          <Button loading>
            Loading
          </Button>

          <Button aria-label='Clear'>
            <Icon name={ ICON_NAME.xmark } />
          </Button>

          <Button aria-labelledby="filter-btn">
            <Icon name={ICON_NAME.filter} />
          </Button>
          <span id="filter-btn">Filter your search results</span>
          <br /><br />
          <Button color={ BUTTON_COLOR.critical }>Critical</Button>
          <Button color={ BUTTON_COLOR.information }>Information</Button>
          <Button color={ BUTTON_COLOR.neutral }>Neutral</Button>
          <Button color={ BUTTON_COLOR.primary }>Primary</Button>
          <Button color={ BUTTON_COLOR.success }>Success</Button>
          <Button color={ BUTTON_COLOR.warning }>Warning</Button>
          <br /><br />
          <Button color={ BUTTON_COLOR.critical } variant={ BUTTON_VARIANT.ghost }>Critical</Button>
          <Button color={ BUTTON_COLOR.information } variant={ BUTTON_VARIANT.ghost }>Information</Button>
          <Button color={ BUTTON_COLOR.neutral } variant={ BUTTON_VARIANT.ghost }>Neutral</Button>
          <Button color={ BUTTON_COLOR.primary } variant={ BUTTON_VARIANT.ghost }>Primary</Button>
          <Button color={ BUTTON_COLOR.success } variant={ BUTTON_VARIANT.ghost }>Success</Button>
          <Button color={ BUTTON_COLOR.warning } variant={ BUTTON_VARIANT.ghost }>Warning</Button>
          <br /><br />
          <Button color={ BUTTON_COLOR.critical } variant={ BUTTON_VARIANT.outline }>Critical</Button>
          <Button color={ BUTTON_COLOR.information } variant={ BUTTON_VARIANT.outline }>Information</Button>
          <Button color={ BUTTON_COLOR.neutral } variant={ BUTTON_VARIANT.outline }>Neutral</Button>
          <Button color={ BUTTON_COLOR.primary } variant={ BUTTON_VARIANT.outline }>Primary</Button>
          <Button color={ BUTTON_COLOR.success } variant={ BUTTON_VARIANT.outline }>Success</Button>
          <Button color={ BUTTON_COLOR.warning } variant={ BUTTON_VARIANT.outline }>Warning</Button>
          <br /><br />
          <Button color={ BUTTON_COLOR.critical } size="sm">Critical</Button>
          <Button color={ BUTTON_COLOR.information } size="sm">Information</Button>
          <Button color={ BUTTON_COLOR.neutral } size="sm">Neutral</Button>
          <Button color={ BUTTON_COLOR.primary } size="sm">Primary</Button>
          <Button color={ BUTTON_COLOR.success } size="sm">Success</Button>
          <Button color={ BUTTON_COLOR.warning } size="sm">Warning</Button>
          <br /><br />
          <Button color={ BUTTON_COLOR.critical } size="sm" variant={ BUTTON_VARIANT.ghost }>Critical</Button>
          <Button color={ BUTTON_COLOR.information } size="sm" variant={ BUTTON_VARIANT.ghost }>Information</Button>
          <Button color={ BUTTON_COLOR.neutral } size="sm" variant={ BUTTON_VARIANT.ghost }>Neutral</Button>
          <Button color={ BUTTON_COLOR.primary } size="sm" variant={ BUTTON_VARIANT.ghost }>Primary</Button>
          <Button color={ BUTTON_COLOR.success } size="sm" variant={ BUTTON_VARIANT.ghost }>Success</Button>
          <Button color={ BUTTON_COLOR.warning } size="sm" variant={ BUTTON_VARIANT.ghost }>Warning</Button>
          <br /><br />
          <Button color={ BUTTON_COLOR.critical } size="sm" variant={ BUTTON_VARIANT.outline }>Critical</Button>
          <Button color={ BUTTON_COLOR.information } size="sm" variant={ BUTTON_VARIANT.outline }>Information</Button>
          <Button color={ BUTTON_COLOR.neutral } size="sm" variant={ BUTTON_VARIANT.outline }>Neutral</Button>
          <Button color={ BUTTON_COLOR.primary } size="sm" variant={ BUTTON_VARIANT.outline }>Primary</Button>
          <Button color={ BUTTON_COLOR.success } size="sm" variant={ BUTTON_VARIANT.outline }>Success</Button>
          <Button color={ BUTTON_COLOR.warning } size="sm" variant={ BUTTON_VARIANT.outline }>Warning</Button>
        </section>

        <section>
          <h1>Card</h1>

          <div role="list" style={{ display: 'flex', gap: '16px' }}>
            <Card role="listitem" style={{ padding: '8px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </Card>
            <Card role="listitem" style={{ padding: '8px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </Card>
          </div>

          <Card color={ CARD_COLOR.critical }>
            <p>Critical</p>
          </Card>

          <Card color={ CARD_COLOR.information }>
            <p>Information</p>
          </Card>

          <Card color={ CARD_COLOR.neutral }>
            <p>Neutral</p>
          </Card>

          <Card color={ CARD_COLOR.primary }>
            <p>Primary</p>
          </Card>

          <Card color={ CARD_COLOR.success }>
            <p>Success</p>
          </Card>

          <Card color={ CARD_COLOR.warning }>
            <p>Warning</p>
          </Card>
        </section>

        <section>
          <h1>Checkbox</h1>

          <Checkbox>
            <CheckboxControl />

            <CheckboxLabel>
              I agree to the terms
            </CheckboxLabel>
          </Checkbox>

          <Checkbox invalid>
            <CheckboxControl />

            <CheckboxLabel>
              Invalid
            </CheckboxLabel>
          </Checkbox>
        </section>

        <section>
          <h1>Clipboard</h1>

          <FormField>
            <FormFieldLabel>Clipboard:</FormFieldLabel>

            <Clipboard value="Clipboard">
              <ClipboardControl />
              <ClipboardTrigger />
            </Clipboard>
          </FormField>
        </section>

        <section>
          <h1>Code</h1>

          <Code canCopy>
            { `import { Text } from '@ovhcloud/ods-react';` }
          </Code>
        </section>

        <section>
          <h1>Combobox</h1>

          <FormField>
            <FormFieldLabel>Select a pet:</FormFieldLabel>

            <Combobox
              items={[
                { label: 'Dog', value: 'dog' },
                { label: 'Cat', value: 'cat' },
                { label: 'Hamster', value: 'hamster' },
                { label: 'Parrot', value: 'parrot' },
                { label: 'Spider', value: 'spider' },
                { label: 'Goldfish', value: 'goldfish' },
              ]}>
              <ComboboxControl placeholder="Combobox" />
              <ComboboxContent />
            </Combobox>
          </FormField>

          <FormField invalid>
            <FormFieldLabel>Select a pet:</FormFieldLabel>

            <Combobox
              items={[
                { label: 'Dog', value: 'dog' },
                { label: 'Cat', value: 'cat' },
                { label: 'Hamster', value: 'hamster' },
                { label: 'Parrot', value: 'parrot' },
                { label: 'Spider', value: 'spider' },
                { label: 'Goldfish', value: 'goldfish' },
              ]}>
              <ComboboxControl placeholder="Combobox" />
              <ComboboxContent />
            </Combobox>
          </FormField>

          <FormField>
            <FormFieldLabel>Select some pets:</FormFieldLabel>

            <Combobox
              items={[
                { label: 'Dog', value: 'dog' },
                { label: 'Cat', value: 'cat' },
                { label: 'Hamster', value: 'hamster' },
                { label: 'Parrot', value: 'parrot' },
                { label: 'Spider', value: 'spider' },
                { label: 'Goldfish', value: 'goldfish' },
              ]}
              multiple>
              <ComboboxControl placeholder="Combobox" />
              <ComboboxContent />
            </Combobox>
          </FormField>
        </section>

        <section>
          <h1>Datepicker</h1>

          <FormField>
            <FormFieldLabel>
              Select a date:
            </FormFieldLabel>

            <Datepicker>
              <DatepickerControl />

              <DatepickerContent />
            </Datepicker>
          </FormField>

          <FormField invalid>
            <FormFieldLabel>
              Select a date:
            </FormFieldLabel>

            <Datepicker>
              <DatepickerControl />

              <DatepickerContent />
            </Datepicker>
          </FormField>
        </section>

        <section>
          <h1>Divider</h1>

          <Divider color={ DIVIDER_COLOR.primary } />
        </section>

        <section>
          <h1>Drawer</h1>

          <Drawer>
            <DrawerTrigger id="drawer-id">
              Trigger Drawer
            </DrawerTrigger>

            <DrawerContent
              aria-labelledby="drawer-id"
              position={ DRAWER_POSITION.left}>
              <DrawerBody>
                My drawer content
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          <Drawer>
            <DrawerTrigger>
              Trigger Drawer
            </DrawerTrigger>

            <DrawerContent
              aria-label="Some drawer label"
              position={ DRAWER_POSITION.right}>
              <DrawerBody>
                My drawer content
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </section>

        <section>
          <h1>File Upload</h1>

          <FormField>
            <FormFieldLabel>Select file(s):</FormFieldLabel>

            <FileUpload onFileAccept={ ({ files }) => setFiles(files) }>
              <FileUploadList>
                {
                  files.map((file: File, idx) => (
                    <FileUploadItem
                      file={ file }
                      key={ idx } />
                  ))
                }
              </FileUploadList>
            </FileUpload>
          </FormField>

          <FormField invalid>
            <FormFieldLabel>Select file(s):</FormFieldLabel>

            <FileUpload onFileAccept={ ({ files }) => setFiles(files) }>
              <FileUploadList>
                {
                  files.map((file: File, idx) => (
                    <FileUploadItem
                      file={ file }
                      key={ idx } />
                  ))
                }
              </FileUploadList>
            </FileUpload>
          </FormField>

          <FormField>
            <FormFieldLabel>Select file(s):</FormFieldLabel>

            <FileUpload
              maxFile={ 3 }
              maxFileLabel="3 files max"
              onFileAccept={ ({ files }) => setFiles(files) }>
              <FileUploadList>
                {
                  files.map((file: File, idx) => (
                    <FileUploadItem
                      file={ file }
                      key={ idx } />
                  ))
                }
              </FileUploadList>
            </FileUpload>
          </FormField>
        </section>

        <section>
          <h1>Form Field</h1>

          <FormField invalid>
            <FormFieldLabel>
              Description:
            </FormFieldLabel>

            <Textarea />

            <FormFieldHelper style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text preset={ TEXT_PRESET.caption }>
                Helper text
              </Text>

              <Text preset={ TEXT_PRESET.caption }>
                0 out of 200
              </Text>
            </FormFieldHelper>

            <FormFieldError>
              Error message
            </FormFieldError>
          </FormField>
        </section>

        <section>
          <h1>Icon</h1>

          <Icon name="cloud" />

          <Icon
            aria-label="home"
            name="home"
            role="img" />
        </section>

        <section>
          <h1>Input</h1>

          <FormField>
            <FormFieldLabel>
              Name:
            </FormFieldLabel>

            <Input />
          </FormField>

          <FormField>
            <FormFieldLabel>
              Name:
            </FormFieldLabel>

            <Input disabled />
          </FormField>

          <FormField>
            <FormFieldLabel>
              Name:
            </FormFieldLabel>

            <Input readOnly />
          </FormField>

          <FormField>
            <FormFieldLabel>
              Name:
            </FormFieldLabel>

            <Input loading />
          </FormField>

          <FormField>
            <FormFieldLabel>
              Name:
            </FormFieldLabel>

            <Input
              clearable
              value="Clear me" />
          </FormField>

          <FormField>
            <FormFieldLabel>
              Name:
            </FormFieldLabel>

            <Input maskOption={{ enable: true }} />
          </FormField>

          <FormField invalid>
            <FormFieldLabel>
              Invalid:
            </FormFieldLabel>

            <Input />
          </FormField>
        </section>

        <section>
          <h1>Link</h1>

          <Link aria-label="Go to homepage" href="https://www.ovhcloud.com">
            <Icon name="home" />
          </Link>

          <Link
            aria-label="Visit Example (opens in a new tab)"
            href="https://www.ovhcloud.com"
            target="_blank">
            <Icon name="external-link" />
          </Link>

          <Link
            href="https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf">
            <Icon name="download" />
            <span>Download WCAG20 Guidelines (PDF, 481 KB)</span>
          </Link>
        </section>

        <section>
          <h1>Medium</h1>

          <Medium
            alt="OVHcloud logo"
            src="https://images.crunchbase.com/image/upload/c_pad,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4" />
        </section>

        <section>
          <h1>Meter</h1>

          <Meter
            aria-label="normal color"
            value={ 50 } />

          <Meter
            aria-label="warning color"
            low={ 30 }
            value={ 10 } />

          <Meter
            aria-label="critical color"
            high={ 70 }
            low={ 30 }
            optimum={ 20 }
            value={ 90 } />
        </section>

        <section>
          <h1>Message</h1>

          <Message color={ MESSAGE_COLOR.critical }>
            <MessageIcon name={ ICON_NAME.hexagonExclamation } />
            <MessageBody>Critical message</MessageBody>
          </Message>

          <Message color={ MESSAGE_COLOR.information }>
            <MessageIcon name={ ICON_NAME.circleInfo } />
            <MessageBody>Information message</MessageBody>
          </Message>

          <Message color={ MESSAGE_COLOR.neutral }>
            <MessageIcon name={ ICON_NAME.email } />
            <MessageBody>Neutral message</MessageBody>
          </Message>

          <Message color={ MESSAGE_COLOR.primary }>
            <MessageIcon name={ ICON_NAME.lightbulb } />
            <MessageBody>Primary message</MessageBody>
          </Message>

          <Message color={ MESSAGE_COLOR.success }>
            <MessageIcon name={ ICON_NAME.circleCheck } />
            <MessageBody>Success message</MessageBody>
          </Message>

          <Message color={ MESSAGE_COLOR.warning }>
            <MessageIcon name={ ICON_NAME.triangleExclamation } />
            <MessageBody>Warning message</MessageBody>
          </Message>

          <div role="alert">
            <Message color="critical">
              <MessageIcon name="hexagon-exclamation" />

              <MessageBody >
                Alert
              </MessageBody>
            </Message>
          </div>

          <div role="status">
            <Message>
              <MessageIcon name="circle-info" />

              <MessageBody >
                Status
              </MessageBody>
            </Message>
          </div>
        </section>

        <section>
          <h1>Modal</h1>

          <Modal>
            <ModalTrigger>
              Trigger Modal
            </ModalTrigger>

            <ModalContent
              aria-describedby="modal-content"
              aria-labelledby="modal-title">
              <ModalBody>
                <h2 id="modal-title">
                  Delete item
                </h2>

                <p id="modal-content">
                  Are you sure you want to delete this item? This action cannot be undone.
                </p>
              </ModalBody>
            </ModalContent>
          </Modal>
        </section>

        <section>
          <h1>Pagination</h1>

          <Pagination
            aria-label="Pagination"
            totalItems={ 5000 } />
        </section>

        <section>
          <h1>Password</h1>

          <FormField>
            <FormFieldLabel>
              Password:
            </FormFieldLabel>

            <Password />
          </FormField>

          <FormField invalid>
            <FormFieldLabel>
              Password:
            </FormFieldLabel>

            <Password />
          </FormField>
        </section>

        <section>
          <h1>Phone Number</h1>

          <FormField>
            <FormFieldLabel>
              Phone number:
            </FormFieldLabel>

            <PhoneNumber>
              <PhoneNumberControl />
            </PhoneNumber>
          </FormField>

          <FormField>
            <FormFieldLabel>
              Phone number with countries:
            </FormFieldLabel>

            <PhoneNumber>
              <PhoneNumberCountryList />

              <PhoneNumberControl />
            </PhoneNumber>
          </FormField>

          <FormField invalid>
            <FormFieldLabel>
              Phone number with countries:
            </FormFieldLabel>

            <PhoneNumber>
              <PhoneNumberCountryList />

              <PhoneNumberControl />
            </PhoneNumber>
          </FormField>
        </section>

        <section>
          <h1>Popover</h1>

          <Popover>
            <PopoverTrigger asChild>
              <Button aria-label="Open menu">
                <Icon name={ ICON_NAME.ellipsisVertical } />
              </Button>
            </PopoverTrigger>

            <PopoverContent
              aria-label="I am the menu"
              withArrow>
              <div
                role="menu"
                style={{ display: 'flex', flexDirection: 'column' }}>
                <Button role="menuitem" variant={BUTTON_VARIANT.ghost}>Button</Button>
                <Button role="menuitem" variant={BUTTON_VARIANT.ghost}>Button</Button>
                <Divider style={{ width: '100%' }} />
                <Button color={BUTTON_COLOR.critical} role="menuitem" variant={BUTTON_VARIANT.ghost}>Button</Button>
              </div>
            </PopoverContent>
          </Popover>
        </section>

        <section>
          <h1>Progress Bar</h1>

          <ProgressBar aria-label="Converting" />
        </section>

        <section>
          <h1>Quantity</h1>

          <FormField>
            <FormFieldLabel>
              Number of CPUs:
            </FormFieldLabel>

            <Quantity
              max={ 10 }
              min={ 0 }>
              <QuantityControl>
                <QuantityInput />
              </QuantityControl>
            </Quantity>
          </FormField>

          <FormField invalid>
            <FormFieldLabel>
              Number of CPUs:
            </FormFieldLabel>

            <Quantity
              max={ 10 }
              min={ 0 }>
              <QuantityControl>
                <QuantityInput />
              </QuantityControl>
            </Quantity>
          </FormField>
        </section>

        <section>
          <h1>Radio Group</h1>

          <FormField>
            <FormFieldLabel>
              Pick a language:
            </FormFieldLabel>

            <RadioGroup>
              <Radio value="html">
                <RadioControl />

                <RadioLabel>HTML</RadioLabel>
              </Radio>

              <Radio value="css">
                <RadioControl />

                <RadioLabel>CSS</RadioLabel>
              </Radio>

              <Radio value="js">
                <RadioControl />

                <RadioLabel>JavaScript</RadioLabel>
              </Radio>
            </RadioGroup>
          </FormField>

          <FormField invalid>
            <FormFieldLabel>
              Pick a language:
            </FormFieldLabel>

            <RadioGroup>
              <Radio value="html">
                <RadioControl />

                <RadioLabel>HTML</RadioLabel>
              </Radio>

              <Radio value="css">
                <RadioControl />

                <RadioLabel>CSS</RadioLabel>
              </Radio>

              <Radio value="js">
                <RadioControl />

                <RadioLabel>JavaScript</RadioLabel>
              </Radio>
            </RadioGroup>
          </FormField>
        </section>

        <section>
          <h1>Range</h1>

          <FormField>
            <FormFieldLabel>Volume</FormFieldLabel>

            <Range defaultValue={[50]} />
          </FormField>

          <FormField invalid>
            <FormFieldLabel>Volume</FormFieldLabel>

            <Range defaultValue={[50]} />
          </FormField>

          <FormField>
            <FormFieldLabel id="range-label">
              Price range
            </FormFieldLabel>

            <Text
              preset="caption"
              id="range-sublabel"
              aria-live="polite">
              Selected values: 10 - 20€
            </Text>

            <Range
              aria-labelledby={['range-label', 'range-sublabel']}
              value={ [10, 20] } />
          </FormField>
        </section>

        <section>
          <h1>Select</h1>

          <FormField>
            <FormFieldLabel>
              Select a Web hosting
            </FormFieldLabel>

            <Select
              items={[
                { label: '1 vCore 2,4 GHz, 2 Go RAM', value:'hosting-1' },
                { label: '1 vCore 2,4 GHz, 4 Go RAM', value:'hosting-2' },
                { label: '2 vCores 2,4 GHz, 8 Go RAM', value:'hosting-3' },
              ]}>
              <SelectControl />

              <SelectContent />
            </Select>
          </FormField>

          <FormField invalid>
            <FormFieldLabel>
              Select a Web hosting
            </FormFieldLabel>

            <Select
              items={[
                { label: '1 vCore 2,4 GHz, 2 Go RAM', value:'hosting-1' },
                { label: '1 vCore 2,4 GHz, 4 Go RAM', value:'hosting-2' },
                { label: '2 vCores 2,4 GHz, 8 Go RAM', value:'hosting-3' },
              ]}>
              <SelectControl />

              <SelectContent />
            </Select>
          </FormField>
        </section>

        <section>
          <h1>Skeleton</h1>

          <div aria-busy="true">
            <Skeleton />
          </div>
        </section>

        <section>
          <h1>Spinner</h1>

          <Spinner aria-label="Loading user profile" />

          <div>
            <span id="loading-text">Loading user profile</span>
            <Spinner aria-labelledby="loading-text" />
          </div>
        </section>

        <section>
          <h1>Switch</h1>

          <Switch aria-label="Select an item">
            <SwitchItem value="item-1">Item 1</SwitchItem>
            <SwitchItem value="item-2">Item 2</SwitchItem>
            <SwitchItem value="item-3">Item 3</SwitchItem>
          </Switch>

          <Text
            id="switch-label"
            preset={ TEXT_PRESET.label }>
            Select an item:
          </Text>

          <Switch aria-labelledby="switch-label">
            <SwitchItem value="item-1">Item 1</SwitchItem>
            <SwitchItem value="item-2">Item 2</SwitchItem>
            <SwitchItem value="item-3">Item 3</SwitchItem>
          </Switch>

          <Switch
            aria-label="Select an item"
            size="sm">
            <SwitchItem value="item-1">
              Item 1
            </SwitchItem>
            <SwitchItem value="item-2">
              Item 2
            </SwitchItem>
            <SwitchItem value="item-3">
              Item 3
            </SwitchItem>
          </Switch>
        </section>

        <section>
          <h1>Table</h1>

          <Table>
            <caption>
              Front-end web developer course 2021
            </caption>
            <thead>
            <tr>
              <th scope="col">Person</th>
              <th scope="col">Most interest in</th>
              <th scope="col">Age</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">Chris</th>
              <td>HTML tables</td>
              <td>22</td>
            </tr>
            <tr>
              <th scope="row">Dennis</th>
              <td>Web accessibility</td>
              <td>45</td>
            </tr>
            <tr>
              <th scope="row">Sarah</th>
              <td>JavaScript frameworks</td>
              <td>29</td>
            </tr>
            <tr>
              <th scope="row">Karen</th>
              <td>Web performance</td>
              <td>36</td>
            </tr>
            </tbody>
          </Table>
        </section>

        <section>
          <h1>Tabs</h1>

          <Tabs defaultValue="tab1">
            <TabList>
              <Tab value="tab1">Tab 1</Tab>
              <Tab value="tab2">Tab 2</Tab>
              <Tab value="tab3">Tab 3</Tab>
            </TabList>

            <TabContent value="tab1">
              Tab content 1
            </TabContent>

            <TabContent value="tab2">
              Tab content 2
            </TabContent>

            <TabContent value="tab3">
              Tab content 3
            </TabContent>
          </Tabs>
        </section>

        <section>
          <h1>Tag</h1>

          <Tag color={ TAG_COLOR.critical }>Critical</Tag>
          <Tag color={ TAG_COLOR.information }>Information</Tag>
          <Tag color={ TAG_COLOR.neutral }>Neutral</Tag>
          <Tag color={ TAG_COLOR.primary }>Primary</Tag>
          <Tag color={ TAG_COLOR.success }>Success</Tag>
          <Tag color={ TAG_COLOR.warning }>Warning</Tag>

          <Tag aria-label="Remove my tag">My tag</Tag>

          <div role="list">
            <div role="listitem">
              <Tag>Design</Tag>
            </div>
            <div role="listitem">
              <Tag>Development</Tag>
            </div>
            <div role="listitem">
              <Tag>Accessibility</Tag>
            </div>
          </div>
        </section>

        <section>
          <h1>Text</h1>

          <Text preset="caption">Caption</Text><br />
          <Text preset="code">Code</Text><br />
          <Text preset="label">Label</Text>
          <Text preset="paragraph">Paragraph</Text>
          <Text preset="span">Span</Text><br />
          <Text preset="heading-1">Heading-1</Text>
          <Text preset="heading-2">Heading-2</Text>
          <Text preset="heading-3">Heading-3</Text>
          <Text preset="heading-4">Heading-4</Text>
          <Text preset="heading-5">Heading-5</Text>
          <Text preset="heading-6">Heading-6</Text>
        </section>

        <section>
          <h1>Textarea</h1>

          <FormField>
            <FormFieldLabel>
              Description:
            </FormFieldLabel>

            <Textarea />
          </FormField>

          <FormField invalid>
            <FormFieldLabel>
              Description:
            </FormFieldLabel>

            <Textarea />
          </FormField>

          <FormField>
            <FormFieldLabel>
              Description:
            </FormFieldLabel>

            <Textarea />

            <FormFieldHelper>
              Enter a brief description
            </FormFieldHelper>
          </FormField>
        </section>

        <section>
          <h1>Timepicker</h1>

          <FormField>
            <FormFieldLabel>
              Starting time:
            </FormFieldLabel>

            <Timepicker withSeconds>
              <TimepickerControl />

              <TimepickerTimezoneList />
            </Timepicker>
          </FormField>

          <FormField invalid>
            <FormFieldLabel>
              Starting time:
            </FormFieldLabel>

            <Timepicker withSeconds>
              <TimepickerControl />

              <TimepickerTimezoneList />
            </Timepicker>
          </FormField>
        </section>

        <section>
          <h1>Toggle</h1>

          <Toggle aria-label="Enable dark mode" />

          <FormField>
            <FormFieldLabel>
              Dark mode
            </FormFieldLabel>

            <Toggle />
          </FormField>

          <FormField invalid>
            <FormFieldLabel>
              Dark mode
            </FormFieldLabel>

            <Toggle />
          </FormField>
        </section>

        <section>
          <h1>Tooltip</h1>

          <Tooltip>
            <TooltipTrigger asChild>
              <Icon
                aria-label="Open the tooltip"
                name={ ICON_NAME.circleInfo }
                role="img" />
            </TooltipTrigger>

            <TooltipContent>
              Some additional context.
            </TooltipContent>
          </Tooltip>
        </section>

        <section>
          <h1>TreeView</h1>

          <TreeView items={ collection }>
            <TreeViewNodes>
              { collection.map((item) => (
                <TreeViewNode key={ item.id } item={ item } />
              )) }
            </TreeViewNodes>
          </TreeView>
        </section>
      </main>
    </div>
  );
}

export { App };
