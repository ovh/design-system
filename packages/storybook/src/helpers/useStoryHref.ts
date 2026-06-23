import { hrefTo } from '@storybook/addon-links';
import { useState, useEffect } from 'react';

function useStoryHref(path: string, name?: string): string {
  const [href, setHref] = useState('#');

  useEffect(() => {
    hrefTo(path, name ?? '').then(setHref).catch(() => {});
  }, [path, name]);

  return href;
}

export { useStoryHref };
