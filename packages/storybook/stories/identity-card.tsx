import { ODS_ICON_NAME } from '@ovhcloud/ods-components';
import { OdsLink } from '@ovhcloud/ods-components/react';
import { navigate } from '@storybook/addon-links';
import React from 'react';

enum ATOMIC_TYPE {
  atom = 'atom',
  molecule = 'molecule',
  organism = 'organism',
  quark = 'Quark',
}

type Props = {
  aliases: string[],
  atomicType: ATOMIC_TYPE,
  className?: string;
  figmaLink: string,
  githubUrl: string,
  name: string,
  relatedComponents: { name: string, subtitle?: string }[],
}

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

const IdentityCard = ({ aliases, atomicType, className, figmaLink, githubUrl, name, relatedComponents }: Props) => {
  return (
    <table className={ className || '' }>
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
            <OdsLink style={{ textTransform: 'capitalize' }}
                     href={ getAtomicTypeDocUrl(atomicType) }
                     icon={ ODS_ICON_NAME.externalLink }
                     label={ atomicType }
                     target="_blank" />
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
                <>
                  <OdsLink key={ idx }
                           href="#"
                           label={ relatedComponent.name }
                           onClick={ (e) => {
                             e.preventDefault();
                             navigate({ kind: `ODS Components/${!!relatedComponent.subtitle ? `${relatedComponent.subtitle}/` : ''}${relatedComponent.name}`, story: 'Documentation' });
                           }} />

                  { idx < (relatedComponents.length - 1) && <span>, </span> }
                </>
              )) : '-'
            }
          </td>
        </tr>

        <tr>
          <th scope="row">
            Links
          </th>

          <td>
            <OdsLink style={{ display: 'block' }}
                     href={ figmaLink }
                     icon={ ODS_ICON_NAME.externalLink }
                     label="Design"
                     target="_blank" />

            <OdsLink style={{ display: 'block' }}
                     href={ githubUrl }
                     icon={ ODS_ICON_NAME.externalLink }
                     label="Github"
                     target="_blank" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export {
  ATOMIC_TYPE,
  IdentityCard,
};
