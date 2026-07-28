import utils from '../../../ods-react/documentation/utils.json';
import { ICON_NAME, Icon, Link, TABLE_VARIANT, Table } from '../ods';
import { parseHelper } from './tech/typedoc';
import './tech/tech.css';

/* Signature table for a utility function (formatPrice, formatRelativeTime),
   read from the shared utils.json typedoc — the MDX only passes the name. */
const COLUMNS = ['Argument', 'Type', 'Default value', 'Description'];

const HelperSpecification = ({ name }: { name: string }) => {
  const spec = parseHelper(utils as Parameters<typeof parseHelper>[0], name);
  if (!spec) {
    return null;
  }

  return (
    <div className="helper-spec">
      { spec.description && <p>{ spec.description }</p> }

      { spec.links.length > 0 && (
        <>
          <p>See also:</p>
          <ul>
            { spec.links.map((link) => (
              <li key={ link.href }>
                <Link href={ link.href } target="_blank">{ link.label } <Icon name={ ICON_NAME.externalLink } /></Link>
              </li>
            )) }
          </ul>
        </>
      ) }

      <Table variant={ TABLE_VARIANT.striped }>
        <thead>
          <tr>{ COLUMNS.map((column) => <th key={ column }>{ column }</th>) }</tr>
        </thead>
        <tbody>
          { spec.args.map((arg) => (
            <tr key={ arg.name }>
              <td>{ arg.name }</td>
              <td><code className="tech__type">{ arg.type }</code></td>
              <td><code className="tech__type">{ arg.default ?? 'undefined' }</code></td>
              <td>{ arg.description }</td>
            </tr>
          )) }
        </tbody>
      </Table>
    </div>
  );
};

export { HelperSpecification };
