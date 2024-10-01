import { CodeOrSourceMdx } from '@storybook/blocks';
import { type Package } from 'custom-elements-manifest/schema';
import React, { Fragment } from 'react';
import { ClassModule } from './ClassModule';
import { Heading } from '../heading/Heading';
import styles from './technicalSpecification.module.css';

type Props = {
  data: Package & {
    enumPlugin: Record<string, Record<string, string>>,
  },
}

const TechnicalSpecification = ({ data }: Props) => {
  return (
    <div className={ styles['technical-specification'] }>
      {
        (data.modules || []).map((module, idx) => (
          <ClassModule key={ idx }
                       module={ module } />
        ))
      }

      {
        Object.keys(data.enumPlugin).length > 0 &&
        <>
          <Heading label="Enums" level={ 2 } />

          {
            Object.entries(data.enumPlugin).map(([enumName, enumEntry], idx) => (
              <Fragment key={ idx }>
                <Heading label={ enumName } level={ 3 } />

                <ul className={ styles['technical-specification__enums__keys'] }>
                  {
                    Object.entries(enumEntry).map(([key, value], i) => (
                      <li key={ i }>
                        <span className={ styles['technical-specification__enums__keys__name'] }>
                          { key } =
                        </span>

                        <CodeOrSourceMdx>
                          "{ value }"
                        </CodeOrSourceMdx>
                      </li>
                    ))
                  }
                </ul>
              </Fragment>
            ))
          }
        </>
      }
    </div>
  );
};

export {
  TechnicalSpecification,
};
