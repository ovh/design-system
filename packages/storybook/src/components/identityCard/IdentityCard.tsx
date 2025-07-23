import { Table } from '@storybook/components';
import React, { type ReactNode } from 'react';
import { ExternalLink } from '../externalLink/ExternalLink';
import styles from './identityCard.module.css';

type Prop = {
  aliases: string[],
  children?: ReactNode,
  figmaLink: string,
  githubUrl: string,
  name: string,
}

const IdentityCard = ({ aliases, children, figmaLink, githubUrl, name }: Prop) => {
  return (
    <div className={ styles['identity-card'] }>
      <div>
        { children || '' }
      </div>

      <Table className={ styles['identity-card__table'] }>
        <tbody>
        <tr>
          <th scope="row">
            Name
          </th>

          <td>
            { name }
          </td>
        </tr>

        <tr>
          <th scope="row">
            Also known as
          </th>

          <td>
            { aliases.length > 0 ? aliases.join(', ') : '-' }
          </td>
        </tr>

        <tr>
          <th scope="row">
            Links
          </th>

          <td>
            <ExternalLink className={ styles['identity-card__app-link'] }
                     href={ figmaLink }>
              Design
            </ExternalLink>

            <ExternalLink className={ styles['identity-card__app-link'] }
                     href={ githubUrl }>
              Github
            </ExternalLink>
          </td>
        </tr>
        </tbody>
      </Table>
    </div>
  );
};

export { IdentityCard };
