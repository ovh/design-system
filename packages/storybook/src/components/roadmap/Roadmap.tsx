import { BUTTON_SIZE, Button, ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon, Spinner } from '@ovhcloud/ods-react';
import classNames from 'classnames';
import React, { Fragment, useEffect, useState } from 'react';
import { ROADMAP_ITEM_HEIGHT, RoadmapItem, type RoadmapItemData } from './RoadmapItem';
import styles from './roadmap.module.css';

type RoadmapData = {
  data: Record<string, Record<string, RoadmapItemData[]>>,
  releases: { label: string; value: string }[],
  sections: { label: string; value: string }[],
}

const ITEMS_ROW_GAP = 8;

const Roadmap = () => {
  const [jsonData, setJsonData] = useState<RoadmapData>();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://ovh.github.io/design-system/data/roadmap.json')
      .then(res => res.json())
      .catch(() => setError(true))
      .then((json) => {
        setTimeout(() => setJsonData(json), 500);
      });
  }, []);

  if (!jsonData) {
    return (
      <div className={ styles['roadmap-loading'] }>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={ styles['roadmap-error'] }>
        <Message
          color={ MESSAGE_COLOR.critical }
          dismissible={ false }>
          <MessageIcon name={ ICON_NAME.hexagonExclamation } />

          <MessageBody>
            An error occurred while building roadmap.
            <br />
            If the error persists, please reach out to us.
            <br />
            <Button
              onClick={ () => window.location.reload() }
              size={ BUTTON_SIZE.xs }>
              Retry
            </Button>
          </MessageBody>
        </Message>
      </div>
    );
  }

  function getReleaseTopOffset(section: any, n: number): string {
    if (!jsonData || !section || n < 1) {
      return '0';
    }

    try {
      let nbItemBefore = 0;

      for (let i = 1; i <= n; i++) {
        nbItemBefore += (jsonData.data[jsonData.releases[i - 1].value][section.value] || []).length;
      }

      return `${(nbItemBefore * ROADMAP_ITEM_HEIGHT) + (nbItemBefore * ITEMS_ROW_GAP)}px`;
    } catch {
      setError(true);
      return '';
    }
  }

  return (
    <div className={ styles['roadmap'] }>
      {
        (jsonData.sections || []).map((section) => (
          <Fragment key={ section.value }>
            <span className={ classNames(
              styles['roadmap__section'],
              styles[`roadmap__section--${section.value}`],
            )}>
              { section.label }
            </span>

            {
              (jsonData.releases || []).map((release, n) =>
                <div
                  className={ styles['roadmap__items'] }
                  key={ release.value }
                  style={{
                    rowGap: ITEMS_ROW_GAP,
                    marginTop: getReleaseTopOffset(section, n),
                  }}>
                  {
                    ((jsonData.data[release.value] || {})[section.value] || []).map((item, idx) => (
                      <RoadmapItem
                        className={ styles[`roadmap__items__item--${section.value}`] }
                        item={ item }
                        key={ idx } />
                    ))
                  }
                </div>
              )
            }
          </Fragment>
        ))
      }

      <span />

      {
        jsonData.releases.map((release) => (
          <span
            className={ styles['roadmap__release'] }
            key={ release.value }>
            { release.label }
          </span>
        ))
      }
    </div>
  );
};

export {
  Roadmap,
};
