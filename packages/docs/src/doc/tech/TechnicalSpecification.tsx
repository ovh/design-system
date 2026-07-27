import { Fragment } from 'react';
import { BADGE_COLOR, Badge, ICON_NAME, Icon, Link, TABLE_VARIANT, Table, TEXT_PRESET, Text } from '../../ods';
import { guessTokenType } from '../ports/helpers/designTokens';
import { TokensTable } from '../ports/designTokens/tokensTable/TokensTable';
import { getTechData } from './techData';
import './tech.css';

const PROP_COLUMNS = ['Property', 'Type', 'Required', 'Default value', 'Description'];

const NativeAttributesNote = ({ element }: { element: string }) => (
  <p className="tech__extends">
    This component extends all the native{' '}
    <Link href={ `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${element}#attributes` } target="_blank">
      &lt;{ element }&gt; attributes <Icon name={ ICON_NAME.externalLink } />
    </Link>.
  </p>
);

const SectionHeading = ({ children, label }: { children?: React.ReactNode, label: string }) => (
  <Text as="h2" className="doc__heading tech__heading" id={ label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') } preset={ TEXT_PRESET.heading4 }>
    { label }{ children }
  </Text>
);

const TechnicalSpecification = ({ component }: { component: string }) => {
  const data = getTechData(component);
  if (!data) {
    return null;
  }
  const { cssVariables, spec } = data;

  const tokens = Object.entries(cssVariables)
    .map(([name, value]) => ({ name, type: guessTokenType(name), value }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="tech">
      { spec.components.map((entry) => (
        <section key={ entry.name }>
          <SectionHeading label={ entry.name } />
          { entry.nativeElement && <NativeAttributesNote element={ entry.nativeElement } /> }
          { entry.props.length === 0
            ? !entry.nativeElement && <p className="tech__empty">This component has no specific properties.</p>
            : (
              <Table variant={ TABLE_VARIANT.striped }>
                <thead>
                  <tr>{ PROP_COLUMNS.map((column) => <th key={ column }>{ column }</th>) }</tr>
                </thead>
                <tbody>
                  { entry.props.map((prop) => (
                    <tr key={ prop.name }>
                      <td>
                        <span className="tech__prop-name">{ prop.name }</span>
                        { prop.deprecated && <Badge color={ BADGE_COLOR.warning } size="sm">Deprecated</Badge> }
                      </td>
                      <td><code className="tech__type">{ prop.type }</code></td>
                      <td>{ prop.optional ? '-' : <Icon aria-label="Required" name={ ICON_NAME.check } role="img" /> }</td>
                      <td><code className="tech__type">{ prop.default }</code></td>
                      <td>{ prop.description }</td>
                    </tr>
                  )) }
                </tbody>
              </Table>
            ) }
        </section>
      )) }

      { spec.enums.length > 0 && (
        <section>
          <SectionHeading label="Enums" />
          { spec.enums.map((enumSpec) => (
            <Fragment key={ enumSpec.name }>
              <Text as="h3" className="doc__heading" preset={ TEXT_PRESET.heading5 }>
                { enumSpec.name }
                { enumSpec.deprecated && <Badge color={ BADGE_COLOR.warning } size="sm">Deprecated</Badge> }
              </Text>
              <ul className="tech__enum">
                { enumSpec.members.map((member) => (
                  <li key={ member.name }><code className="tech__type">{ member.name } = "{ member.value }"</code></li>
                )) }
              </ul>
            </Fragment>
          )) }
        </section>
      ) }

      { spec.unions.length > 0 && (
        <section>
          <SectionHeading label="Unions" />
          <ul className="tech__enum">
            { spec.unions.map((union) => (
              <li key={ union.name }><code className="tech__type">{ union.name } = { union.value }</code></li>
            )) }
          </ul>
        </section>
      ) }

      { tokens.length > 0 && (
        <section>
          <SectionHeading label="CSS Variables" />
          <TokensTable tokens={ tokens } />
        </section>
      ) }
    </div>
  );
};

export { TechnicalSpecification };
