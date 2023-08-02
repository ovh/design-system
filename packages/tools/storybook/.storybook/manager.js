import { addons } from '@storybook/addons';
import theme from './ods.theme';
import React from 'react';

import { releases } from '../public/releases.js';

document.addEventListener('DOMContentLoaded', function() {
  const callback = function(mutationsList) {
    for (let i = 0, len = mutationsList.length; i < len; i++) {
      if (mutationsList[i].type === 'childList') {

          // Add version select
          if(!document.querySelector('#release-selector')) {
            const urlVersionRegex = /\/(latest|v(\d\.?){3}[^\/]*)\//gmi;
            const selector = document.querySelector('.sidebar-header');
            let element;
            if (urlVersionRegex.test(location.href)) {
              const releasesSelector = document.createElement('select');
              releasesSelector.id = 'release-selector';
              Object.entries(releases).forEach((value) => {
                const option = document.createElement('option');
                option.text = value[0];
                option.value = value[1];
                releasesSelector.appendChild(option)
              });
              element = releasesSelector;

              releasesSelector.onchange = (selection) => {
                const version = selection.target.value === 'latest' ? 'latest' : `v${selection.target.value}`;
                location.pathname = location.pathname.replace(urlVersionRegex, version);
              };
            } else {
              const version = document.createElement('div');
              version.id = 'release-selector';
              version.innerText = Object.keys(releases)[0];
              element = version;
            }
            selector.parentNode.insertBefore(element, selector.nextSibling);

          }
        break;
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(document.body, { childList: true, subtree: false });
}, false);




addons.setConfig({
  theme,
  sidebar: {
    renderLabel: item => {
      const badge = item.name
        .replace(/.*\[(.*?)\].*/i, '$1');

      let res = '';
      if(item.name !== badge) {
        res = `badge-${badge}`
      } else if(item.id.includes('--page')) {
        res = 'page';
      } else {
        res = 'folder';
      }

      return (<span className={res} title={res} badge-type={badge}>
                {item.name.replace(/\s?\[.*?\]\s?/gmi, '')}
              </span>);
    },
  },
});
