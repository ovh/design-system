import { ODS_BADGE_COLOR } from '@ovhcloud/ods-components';
import { OdsBadge } from '@ovhcloud/ods-components/react';
import { CodeOrSourceMdx, Markdown } from '@storybook/blocks';
import { Table } from '@storybook/components';
import React from 'react';

type ItemStatus = 'removed' | 'updated';

type Props = {
  items: {
    formerName: string,
    replacement: string,
    status: ItemStatus,
  }[],
}

function getBadgeProp(status: ItemStatus): { color: ODS_BADGE_COLOR, label: string } {
  if (status === 'removed') {
    return {
      color: ODS_BADGE_COLOR.critical,
      label: 'Removed',
    }
  }

  return {
    color: ODS_BADGE_COLOR.information,
    label: 'Updated',
  }
}

const TokenMigrationTable = ({ items }: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Former name</th>
          <th>Status</th>
          <th>New name</th>
        </tr>
      </thead>

      <tbody>
        {
          items.map((item, idx) => (
            <tr key={ idx }>
              <td>
                <CodeOrSourceMdx>
                  { item.formerName }
                </CodeOrSourceMdx>
              </td>

              <td>
                <OdsBadge { ...getBadgeProp(item.status) }
                          size="sm" />
              </td>

              <td>
                <Markdown>
                  {`${item.replacement}`}
                </Markdown>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export {
  TokenMigrationTable,
};
