import { ODS_ICON_NAME, OdsIcon, OdsLink } from '@ovhcloud/ods-react';
import { Table } from '@storybook/components';
import React, { Fragment, type ReactNode } from 'react';
import { ATOMIC_TYPE } from '../../constants/atomicDesign';
import { SECTION, STORY } from '../../constants/meta';
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
  relatedComponents: { name: string, subtitle?: string }[],
}

const IdentityCard = ({ aliases, atomicType, children, figmaLink, githubUrl, name, relatedComponents }: Prop) => {
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
            <OdsLink className={ styles['identity-card__atomic-link'] }
                     href={ getAtomicTypeDocUrl(atomicType) }
                     target="_blank">
              { atomicType } <OdsIcon name={ ODS_ICON_NAME.externalLink } />
            </OdsLink>
          </td>
        </tr>

        <tr>
          <th scope="row">
            Related component(s)
          </th>

          <td>
            {
              relatedComponents.length > 0 ?
                relatedComponents.map((relatedComponent, idx) => (
                  <Fragment key={ idx }>
                    <StorybookLink kind={ `${SECTION.odsComponents}/${!!relatedComponent.subtitle ? `${relatedComponent.subtitle}/` : ''}${relatedComponent.name}` }
                                   story={ STORY.documentation }>
                      { relatedComponent.name }
                    </StorybookLink>

                    { idx < (relatedComponents.length - 1) && <span>, </span> }
                  </Fragment>
                )) : '-'
            }
          </td>
        </tr>

        <tr>
          <th scope="row">
            Links
          </th>

          <td>
            <OdsLink className={ styles['identity-card__app-link'] }
                     href={ figmaLink }
                     target="_blank">
              Design <OdsIcon name={ ODS_ICON_NAME.externalLink } />
            </OdsLink>

            <OdsLink className={ styles['identity-card__app-link'] }
                     href={ githubUrl }
                     target="_blank">
              Github <OdsIcon name={ ODS_ICON_NAME.externalLink } />
            </OdsLink>
          </td>
        </tr>
        </tbody>
      </Table>
    </div>
  );
};

export { IdentityCard };
