import { type ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeSwitcher } from '../../themes/ThemeSwitcher';
import {
  Badge,
  BADGE_COLOR,
  Button,
  BUTTON_COLOR,
  BUTTON_VARIANT,
  Card,
  CARD_COLOR,
  Divider,
  Icon,
  ICON_NAME,
  Link,
  Logo,
  LOGO_VARIANT,
  Message,
  MESSAGE_COLOR,
  MessageBody,
  MessageIcon,
  Meter,
  BADGE_SIZE,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectControl,
  Tab,
  TabContent,
  TabList,
  Tabs,
  TABS_VARIANT,
  Table,
  Text,
  TEXT_PRESET,
} from '@ovhcloud/ods-react';
import style from './demo-manager.module.scss';

function DemoManager(): ReactElement {
  return (
    <div className={ style['demo-manager'] }>
      {/* Top navigation bar */}
      <div className={ style['demo-manager__navbar'] }>
        <div className={ style['demo-manager__navbar-left'] }>
          <Link as={ RouterLink } to="/">
            <Logo variant={ LOGO_VARIANT.emblem } />
          </Link>

          <Tabs defaultValue="manager" variant={ TABS_VARIANT.switch }>
            <TabList>
              <Tab value="manager">
                <Link as={ RouterLink } to="/manager">Manager</Link>
              </Tab>
              <Tab value="order">
                <Link as={ RouterLink } to="/order">Order</Link>
              </Tab>
            </TabList>
          </Tabs>
        </div>

        <div className={ style['demo-manager__navbar-right'] }>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Page tabs */}
      <div className={ style['demo-manager__tabs'] }>
      <Tabs defaultValue="dashboard" variant={ TABS_VARIANT.switch }>
        <TabList>
          <Tab value="dashboard">Prise en main</Tab>
          <Tab value="account">Mon compte</Tab>
          <Tab value="billing">Facturation</Tab>
          <Tab value="payment">Moyens de paiement</Tab>
          <Tab value="carbon">Carbon Calculator</Tab>
          <Tab value="support">Support</Tab>
          <Tab value="api">API</Tab>
        </TabList>

        <TabContent value="dashboard">
          <div className={ style['demo-manager__dashboard'] }>

            {/* Welcome */}
            <Text preset={ TEXT_PRESET.heading2 }>
              Bienvenue Squad QA LS !
            </Text>

            {/* Info Message */}
            <Message color={ MESSAGE_COLOR.information } dismissible={ false }>
              <MessageIcon name={ ICON_NAME.circleInfo } />
              <MessageBody>
                <Text preset={ TEXT_PRESET.paragraph }>
                  Dans le cadre de l&apos;amélioration de la qualité des données, nous avons besoin de mettre à jour le numéro SIRET de votre entreprise.
                  Cette mise à jour ne prendra que quelques secondes, munissez-vous de votre KBIS et <Link href="#">cliquez-ici pour la mise à jour</Link>.
                </Text>
              </MessageBody>
            </Message>

            {/* Activity overview */}
            <Text preset={ TEXT_PRESET.heading3 }>
              Vue d&apos;ensemble de mon activité
            </Text>

            <div className={ style['demo-manager__activity'] }>
              {/* Left column: Payment statuses */}
              <div className={ style['demo-manager__activity-left'] }>
                <Card color={ CARD_COLOR.neutral }>
                  <div className={ style['demo-manager__card-body'] }>
                    <div className={ style['demo-manager__card-header'] }>
                      <div className={ style['demo-manager__card-title'] }>
                        <Text preset={ TEXT_PRESET.heading5 }>
                          Derniers statuts de paiement des services
                        </Text>
                        <Badge color={ BADGE_COLOR.information }>4</Badge>
                      </div>
                      <Link href="#">
                        Voir tout
                        <Icon name={ ICON_NAME.arrowRight } />
                      </Link>
                    </div>

                    <Table className={ style['demo-manager__payment-table'] }>
                      <colgroup>
                        <col style={{ width: '40%' }} />
                        <col style={{ width: '30%' }} />
                        <col />
                        <col style={{ width: '48px' }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>Service</th>
                          <th>Date</th>
                          <th>Statut</th>
                          <th aria-label="Actions" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className={ style['demo-manager__service-cell'] }>
                              <Text preset={ TEXT_PRESET.label }>agoralg.cluster025.hosting.ovh.net</Text>
                              <Text preset={ TEXT_PRESET.caption }>Hébergement Web</Text>
                            </div>
                          </td>
                          <td>
                            <Text preset={ TEXT_PRESET.small }>
                              <Icon name={ ICON_NAME.calendar } /> Paid on: 30/03/2026
                            </Text>
                          </td>
                          <td>
                            <Badge color={ BADGE_COLOR.warning }>Renouvellement manuel</Badge>
                          </td>
                          <td>
                            <Popover position="bottom">
                              <PopoverTrigger asChild>
                                <Button variant={ BUTTON_VARIANT.ghost }>
                                  <Icon name={ ICON_NAME.ellipsisVertical } />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                <div className={ style['demo-manager__popover-menu'] }>
                                  <Button color={ BUTTON_COLOR.neutral } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.circleInfo } />
                                    Détail
                                  </Button>
                                  <Button color={ BUTTON_COLOR.neutral } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.cog } />
                                    Configurer
                                  </Button>
                                  <Button color={ BUTTON_COLOR.primary } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.refresh } />
                                    Renouveler
                                  </Button>
                                  <Button color={ BUTTON_COLOR.critical } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.trash } />
                                    Résilier
                                  </Button>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={ style['demo-manager__service-cell'] }>
                              <Text preset={ TEXT_PRESET.label }>elidomtest.com</Text>
                              <Text preset={ TEXT_PRESET.caption }>Email Domain</Text>
                            </div>
                          </td>
                          <td>
                            <Text preset={ TEXT_PRESET.small }>
                              <Icon name={ ICON_NAME.calendar } /> Paid on: 15/02/2026
                            </Text>
                          </td>
                          <td>
                            <Badge color={ BADGE_COLOR.success }>Actif</Badge>
                          </td>
                          <td>
                            <Popover position="bottom">
                              <PopoverTrigger asChild>
                                <Button variant={ BUTTON_VARIANT.ghost }>
                                  <Icon name={ ICON_NAME.ellipsisVertical } />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                <div className={ style['demo-manager__popover-menu'] }>
                                  <Button color={ BUTTON_COLOR.neutral } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.circleInfo } />
                                    Détail
                                  </Button>
                                  <Button color={ BUTTON_COLOR.neutral } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.cog } />
                                    Configurer
                                  </Button>
                                  <Button color={ BUTTON_COLOR.primary } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.refresh } />
                                    Renouveler
                                  </Button>
                                  <Button color={ BUTTON_COLOR.critical } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.trash } />
                                    Résilier
                                  </Button>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={ style['demo-manager__service-cell'] }>
                              <Text preset={ TEXT_PRESET.label }>elidomtest.info</Text>
                              <Text preset={ TEXT_PRESET.caption }>Email Domain</Text>
                            </div>
                          </td>
                          <td>
                            <Text preset={ TEXT_PRESET.small }>
                              <Icon name={ ICON_NAME.calendar } /> Expired on: 10/01/2026
                            </Text>
                          </td>
                          <td>
                            <Badge color={ BADGE_COLOR.critical }>Expiré</Badge>
                          </td>
                          <td>
                            <Popover position="bottom">
                              <PopoverTrigger asChild>
                                <Button variant={ BUTTON_VARIANT.ghost }>
                                  <Icon name={ ICON_NAME.ellipsisVertical } />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                <div className={ style['demo-manager__popover-menu'] }>
                                  <Button color={ BUTTON_COLOR.neutral } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.circleInfo } />
                                    Détail
                                  </Button>
                                  <Button color={ BUTTON_COLOR.neutral } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.cog } />
                                    Configurer
                                  </Button>
                                  <Button color={ BUTTON_COLOR.primary } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.refresh } />
                                    Renouveler
                                  </Button>
                                  <Button color={ BUTTON_COLOR.critical } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.trash } />
                                    Résilier
                                  </Button>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={ style['demo-manager__service-cell'] }>
                              <Text preset={ TEXT_PRESET.label }>ihoh.shop</Text>
                              <Text preset={ TEXT_PRESET.caption }>Email Domain</Text>
                            </div>
                          </td>
                          <td>
                            <Text preset={ TEXT_PRESET.small }>
                              <Icon name={ ICON_NAME.calendar } /> Paid on: 25/12/2025
                            </Text>
                          </td>
                          <td>
                            <Badge color={ BADGE_COLOR.information }>Renouvellement auto</Badge>
                          </td>
                          <td>
                            <Popover position="bottom">
                              <PopoverTrigger asChild>
                                <Button variant={ BUTTON_VARIANT.ghost }>
                                  <Icon name={ ICON_NAME.ellipsisVertical } />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                <div className={ style['demo-manager__popover-menu'] }>
                                  <Button color={ BUTTON_COLOR.neutral } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.circleInfo } />
                                    Détail
                                  </Button>
                                  <Button color={ BUTTON_COLOR.neutral } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.cog } />
                                    Configurer
                                  </Button>
                                  <Button color={ BUTTON_COLOR.primary } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.refresh } />
                                    Renouveler
                                  </Button>
                                  <Button color={ BUTTON_COLOR.critical } variant={ BUTTON_VARIANT.ghost }>
                                    <Icon name={ ICON_NAME.trash } />
                                    Résilier
                                  </Button>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card>
              </div>

              {/* Right column */}
              <div className={ style['demo-manager__activity-right'] }>
                {/* Invoices card */}
                <Card color={ CARD_COLOR.neutral }>
                  <div className={ style['demo-manager__invoices'] }>
                    <Text preset={ TEXT_PRESET.heading5 }>
                      Montant total des factures
                    </Text>

                    <Select
                      items={[
                        { label: 'Le mois dernier', value: 'last-month' },
                        { label: 'Les 3 derniers mois', value: 'last-3-months' },
                        { label: 'Les 6 derniers mois', value: 'last-6-months' },
                      ]}
                      defaultValue="last-month"
                    >
                      <SelectControl placeholder="Le mois dernier" />
                      <SelectContent />
                    </Select>

                    <Text preset={ TEXT_PRESET.heading2 }>
                      94 117,99 €
                    </Text>

                    <Link href="#">
                      Voir les factures
                      <Icon name={ ICON_NAME.arrowRight } />
                    </Link>
                  </div>
                </Card>

                {/* Recent orders card */}
                <Card className={ style['demo-manager__orders-card'] } color={ CARD_COLOR.primary }>
                  <div className={ style['demo-manager__orders'] }>
                    <Text preset={ TEXT_PRESET.heading5 }>
                      Commandes récentes
                    </Text>

                    <div className={ style['demo-manager__order-row'] }>
                      <Link href="#">N° 94440627</Link>
                      <div className={ style['demo-manager__order-meta'] }>
                        <Badge color={ BADGE_COLOR.warning }>Paiement en vérification</Badge>
                        <Text preset={ TEXT_PRESET.small }>28/02/2025</Text>
                      </div>
                    </div>

                    <Link href="#">
                      Voir toutes les commandes
                      <Icon name={ ICON_NAME.arrowRight } />
                    </Link>
                  </div>
                </Card>
              </div>
            </div>

            {/* Tickets & Support row */}
            <div className={ style['demo-manager__support-row'] }>
              {/* Last tickets */}
              <Card color={ CARD_COLOR.neutral }>
                <div className={ style['demo-manager__card-body'] }>
                  <div className={ style['demo-manager__card-header'] }>
                    <div className={ style['demo-manager__card-title'] }>
                      <Text preset={ TEXT_PRESET.heading5 }>
                        Derniers tickets
                      </Text>
                      <Badge color={ BADGE_COLOR.information }>4</Badge>
                    </div>
                    <Link href="#">
                      Voir tout
                      <Icon name={ ICON_NAME.arrowRight } />
                    </Link>
                  </div>

                  <Table className={ style['demo-manager__ticket-table'] }>
                  <tbody>
                    <tr>
                      <td>
                        <Text preset={ TEXT_PRESET.small }>#11505251</Text>
                      </td>
                      <td className={ style['demo-manager__ticket-desc'] }>
                        <Text preset={ TEXT_PRESET.small }>OVHcloud | Action planned on your Public Cloud Gateway</Text>
                      </td>
                      <td>
                        <Badge color={ BADGE_COLOR.warning }>attente client</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Text preset={ TEXT_PRESET.small }>#14905727</Text>
                      </td>
                      <td className={ style['demo-manager__ticket-desc'] }>
                        <Text preset={ TEXT_PRESET.small }>Upgrade Hardware sur serveur actif</Text>
                      </td>
                      <td>
                        <Badge color={ BADGE_COLOR.warning }>attente client</Badge>
                      </td>
                    </tr>
                  </tbody>
                  </Table>
                </div>
              </Card>

              {/* Support card */}
              <Card color={ CARD_COLOR.neutral }>
                <div className={ style['demo-manager__support'] }>
                  <Text preset={ TEXT_PRESET.heading5 }>
                    Support OVHcloud
                  </Text>

                  <div className={ style['demo-manager__support-level'] }>
                    <Badge color={ BADGE_COLOR.information } size={ BADGE_SIZE.lg }>Standard</Badge>
                  </div>

                  <div className={ style['demo-manager__support-meter'] }>
                    <Meter value={ 1 } min={ 0 } max={ 3 } low={ 1 } high={ 2 } optimum={ 3 } />
                    <div className={ style['demo-manager__support-meter-legend'] }>
                      <Text preset={ TEXT_PRESET.small }>Standard</Text>
                      <Text preset={ TEXT_PRESET.small }>Premium</Text>
                      <Text preset={ TEXT_PRESET.small }>Business</Text>
                    </div>
                  </div>

                  <div className={ style['demo-manager__support-features'] }>
                    <div className={ style['demo-manager__support-feature'] }>
                      <Icon name={ ICON_NAME.clockTimeThree } />
                      <Text preset={ TEXT_PRESET.small }>Temps de réponse estimé: 24h</Text>
                    </div>
                    <div className={ style['demo-manager__support-feature'] }>
                      <Icon name={ ICON_NAME.email } />
                      <Text preset={ TEXT_PRESET.small }>Canal: Ticket uniquement</Text>
                    </div>
                    <div className={ style['demo-manager__support-feature'] }>
                      <Icon name={ ICON_NAME.circleXmark } />
                      <Text preset={ TEXT_PRESET.small }>Incidents critiques: Non inclus</Text>
                    </div>
                  </div>

                  <Link href="#">
                    Upgrade
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Link>

                  <Link href="#">
                    Consulter la documentation
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Link>
                </div>
              </Card>
            </div>

            {/* Offers & Services */}
            <Divider />

            <Text preset={ TEXT_PRESET.heading3 }>
              Mes Offres et Services
            </Text>

            <div className={ style['demo-manager__services'] }>
              <Card>
                <div className={ style['demo-manager__service-card'] }>
                  <div className={ style['demo-manager__card-title'] }>
                    <Icon name={ ICON_NAME.grid } />
                    <Text preset={ TEXT_PRESET.heading6 }>Vrack</Text>
                    <Badge color={ BADGE_COLOR.information }>188</Badge>
                  </div>
                  <Link href="#">pn-20669</Link>
                  <Link href="#">pn-20668</Link>
                  <Text preset={ TEXT_PRESET.small }>+186 autres</Text>
                  <Link href="#">
                    Voir tout
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Link>
                </div>
              </Card>

              <Card>
                <div className={ style['demo-manager__service-card'] }>
                  <div className={ style['demo-manager__card-title'] }>
                    <Icon name={ ICON_NAME.email } />
                    <Text preset={ TEXT_PRESET.heading6 }>Email Domain</Text>
                    <Badge color={ BADGE_COLOR.information }>158</Badge>
                  </div>
                  <Link href="#">test-ux-48321184.ovh</Link>
                  <Link href="#">test-ux-48321173.ovh</Link>
                  <Text preset={ TEXT_PRESET.small }>+156 autres</Text>
                  <Link href="#">
                    Voir tout
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Link>
                </div>
              </Card>

              <Card>
                <div className={ style['demo-manager__service-card'] }>
                  <div className={ style['demo-manager__card-title'] }>
                    <Icon name={ ICON_NAME.cloudUpload } />
                    <Text preset={ TEXT_PRESET.heading6 }>Cloud Project</Text>
                    <Badge color={ BADGE_COLOR.information }>130</Badge>
                  </div>
                  <Link href="#">Briac</Link>
                  <Link href="#">Ana</Link>
                  <Text preset={ TEXT_PRESET.small }>+128 autres</Text>
                  <Link href="#">
                    Voir tout
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Link>
                </div>
              </Card>

              <Card>
                <div className={ style['demo-manager__service-card'] }>
                  <div className={ style['demo-manager__card-title'] }>
                    <Icon name={ ICON_NAME.globe } />
                    <Text preset={ TEXT_PRESET.heading6 }>Hosting Web</Text>
                    <Badge color={ BADGE_COLOR.information }>122</Badge>
                  </div>
                  <Link href="#">ls148374-test.ovh</Link>
                  <Link href="#">ceciestpasuntest.net23</Link>
                  <Text preset={ TEXT_PRESET.small }>+120 autres</Text>
                  <Link href="#">
                    Voir tout
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Link>
                </div>
              </Card>
            </div>

            <div className={ style['demo-manager__services'] }>
              <Card>
                <div className={ style['demo-manager__service-card'] }>
                  <div className={ style['demo-manager__card-title'] }>
                    <Icon name={ ICON_NAME.globe } />
                    <Text preset={ TEXT_PRESET.heading6 }>Domain Zone</Text>
                    <Badge color={ BADGE_COLOR.information }>83</Badge>
                  </div>
                  <Link href="#">publictest.ovh</Link>
                  <Link href="#">costepierre.com</Link>
                  <Text preset={ TEXT_PRESET.small }>+81 autres</Text>
                  <Link href="#">
                    Voir tout
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Link>
                </div>
              </Card>

              <Card>
                <div className={ style['demo-manager__service-card'] }>
                  <div className={ style['demo-manager__card-title'] }>
                    <Icon name={ ICON_NAME.grid } />
                    <Text preset={ TEXT_PRESET.heading6 }>Ip Service</Text>
                    <Badge color={ BADGE_COLOR.information }>80</Badge>
                  </div>
                  <Link href="#">ip-37.59.211.238</Link>
                  <Link href="#">ip-192.99.177.155</Link>
                  <Text preset={ TEXT_PRESET.small }>+78 autres</Text>
                  <Link href="#">
                    Voir tout
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Link>
                </div>
              </Card>

              <Card>
                <div className={ style['demo-manager__service-card'] }>
                  <div className={ style['demo-manager__card-title'] }>
                    <Icon name={ ICON_NAME.email } />
                    <Text preset={ TEXT_PRESET.heading6 }>Email Exchange Service</Text>
                    <Badge color={ BADGE_COLOR.information }>59</Badge>
                  </div>
                  <Link href="#">exchange-aa43121-006.disk-001</Link>
                  <Link href="#">organization-ls110570-1</Link>
                  <Text preset={ TEXT_PRESET.small }>+57 autres</Text>
                  <Link href="#">
                    Voir tout
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Link>
                </div>
              </Card>

              <Card>
                <div className={ style['demo-manager__service-card'] }>
                  <div className={ style['demo-manager__card-title'] }>
                    <Text preset={ TEXT_PRESET.heading6 }>Hosting Private Database</Text>
                    <Badge color={ BADGE_COLOR.information }>56</Badge>
                  </div>
                  <Link href="#">ls148374-042</Link>
                  <Link href="#">ls148374-045</Link>
                  <Text preset={ TEXT_PRESET.small }>+54 autres</Text>
                  <Link href="#">
                    Voir tout
                    <Icon name={ ICON_NAME.arrowRight } />
                  </Link>
                </div>
              </Card>
            </div>

            <div className={ style['demo-manager__services-footer'] }>
              <Link href="#">
                Voir toutes les offres et services
                <Icon name={ ICON_NAME.chevronDown } />
              </Link>
            </div>

          </div>
        </TabContent>

        <TabContent value="account">
          <Text preset={ TEXT_PRESET.paragraph }>Mon compte</Text>
        </TabContent>

        <TabContent value="billing">
          <Text preset={ TEXT_PRESET.paragraph }>Facturation</Text>
        </TabContent>

        <TabContent value="payment">
          <Text preset={ TEXT_PRESET.paragraph }>Moyens de paiement</Text>
        </TabContent>

        <TabContent value="carbon">
          <Text preset={ TEXT_PRESET.paragraph }>Carbon Calculator</Text>
        </TabContent>

        <TabContent value="support">
          <Text preset={ TEXT_PRESET.paragraph }>Support</Text>
        </TabContent>

        <TabContent value="api">
          <Text preset={ TEXT_PRESET.paragraph }>API</Text>
        </TabContent>
      </Tabs>
      </div>
    </div>
  );
}

export { DemoManager };
