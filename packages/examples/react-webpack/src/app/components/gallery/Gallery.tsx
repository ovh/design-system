import { OdsBadge, OdsButton, OdsCheckbox, OdsInput, OdsLink, OdsMessage, OdsProgressBar, OdsRadio, OdsSkeleton, OdsTag, OdsText } from '@ovhcloud/ods-components/react';
import React, { type ReactElement } from 'react';
import styles from './gallery.scss';

function Gallery(): ReactElement {
  return (
    <div className={ styles.gallery }>
      {/* OK */}
      <div>
        <OdsBadge label="ODS Badge" />

        <div className={ styles['gallery__my-badge'] }>
          My Badge
        </div>
      </div>

      {/* OK */}
      <div>
        <OdsButton label="ODS Button" />

        <button className={ styles['gallery__my-button'] }>
          My Button
        </button>
      </div>

      {/* OK */}
      <div>
        <OdsCheckbox name="ods-checkbox" />

        <input className={ styles['gallery__my-checkbox'] }
               type="checkbox" />
      </div>

      {/* Diff on width */}
      <div>
        <OdsInput name="ods-input" />

        <input className={ styles['gallery__my-input'] }
               type="text" />
      </div>

      {/* OK */}
      <div>
        <OdsLink href="#"
                 label="ODS Link" />

        <a className={ styles['gallery__my-link'] }
           href="#">
          My Link
        </a>
      </div>

      {/* OK but need more custom work to add icon and close button*/}
      <div>
        <OdsMessage>
          ODS Message
        </OdsMessage>

        <div className={ styles['gallery__my-message'] }>
          My Message
        </div>
      </div>

      {/* OK */}
      <div>
        <OdsProgressBar value={ 50 } />

        <progress className={ styles['gallery__my-progress-bar'] }
                  max={ 100 }
                  value={ 50 } />
      </div>

      {/* OK */}
      <div>
        <OdsRadio name="ods-radio" />

        <input className={ styles['gallery__my-radio'] }
               type="radio" />
      </div>

      {/* OK */}
      <div>
        <OdsSkeleton />

        <div className={ styles['gallery__my-skeleton'] } />
      </div>

      {/* OK without close button */}
      <div>
        <OdsTag label="ODS Tag" />

        <div className={ styles['gallery__my-tag'] }>
          My Tag
        </div>
      </div>

      {/* OK */}
      <div>
        <OdsText preset="caption">
          ODS Text Caption
        </OdsText>

        <caption className={ styles['gallery__my-text-caption'] }>
          My Text Caption
        </caption>
      </div>

      {/* OK */}
      <div>
        <OdsText preset="code">
          ODS Text Code
        </OdsText>

        <code className={ styles['gallery__my-text-code'] }>
          My Text Code
        </code>
      </div>

      {/* OK */}
      <div>
        <OdsText preset="heading-1">
          ODS Text Heading 1
        </OdsText>

        <h1 className={ styles['gallery__my-text-heading-1'] }>
          My Text Heading 1
        </h1>
      </div>

      {/* OK */}
      <div>
        <OdsText preset="heading-2">
          ODS Text Heading 2
        </OdsText>

        <h2 className={ styles['gallery__my-text-heading-2'] }>
          My Text Heading 2
        </h2>
      </div>

      {/* OK */}
      <div>
        <OdsText preset="heading-3">
          ODS Text Heading 3
        </OdsText>

        <h3 className={ styles['gallery__my-text-heading-3'] }>
          My Text Heading 3
        </h3>
      </div>

      {/* OK */}
      <div>
        <OdsText preset="heading-4">
          ODS Text Heading 4
        </OdsText>

        <h4 className={ styles['gallery__my-text-heading-4'] }>
          My Text Heading 4
        </h4>
      </div>

      {/* OK */}
      <div>
        <OdsText preset="heading-5">
          ODS Text Heading 5
        </OdsText>

        <h5 className={ styles['gallery__my-text-heading-5'] }>
          My Text Heading 5
        </h5>
      </div>

      {/* OK */}
      <div>
        <OdsText preset="heading-6">
          ODS Text Heading 6
        </OdsText>

        <h6 className={ styles['gallery__my-text-heading-6'] }>
          My Text Heading 6
        </h6>
      </div>
    </div>
  );
}

export { Gallery };
