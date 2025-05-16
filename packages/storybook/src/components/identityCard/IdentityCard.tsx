import { Table } from '@storybook/components';
import React, { Fragment, type ReactNode } from 'react';
import { ATOMIC_TYPE } from '../../constants/atomicDesign';
import { SECTION, STORY } from '../../constants/meta';
import { ExternalLink } from '../externalLink/ExternalLink';
import { StorybookLink } from '../storybookLink/StorybookLink';
import styles from './identityCard.module.css';

function getAtomicTypeDocUrl(type: ATOMIC_TYPE): string {
  switch (type) {
    case ATOMIC_TYPE.atom:
      return 'https://atomicdesign.bradfrost.com/chapter-2/#atoms';
    case ATOMIC_TYPE.molecule:
      return 'https://atomicdesign.bradfrost.com/chapter-2/#molecules';
    case ATOMIC_TYPE.organism:
      return 'https://atomicdesign.bradfrost.com/chapter-2/#organisms';
    case ATOMIC_TYPE.quark:
      return 'https://bradfrost.com/blog/post/extending-atomic-design';
    default:
      return '';
  }
}

type Prop = {
  aliases: string[],
  atomicType: ATOMIC_TYPE,
  children?: ReactNode,
  figmaLink: string,
  githubUrl: string,
  name: string,
}

const IdentityCard = ({ aliases, atomicType, children, figmaLink, githubUrl, name }: Prop) => {
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
            Atomic type
          </th>

          <td>
            <ExternalLink
              className={ styles['identity-card__atomic-link'] }
              href={ getAtomicTypeDocUrl(atomicType) }>
              { atomicType }
            </ExternalLink>
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
