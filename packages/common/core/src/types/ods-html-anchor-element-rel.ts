/**
 * See rel attribute valid for <a> and <area> on
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
 */
export enum OdsHTMLAnchorElementRel {
  alternate = 'alternate',
  author = 'author',
  bookmark = 'bookmark',
  canonical = 'canonical',
  'dns-prefetch' = 'dns-prefetch',
  external = 'external',
  help = 'help',
  icon = 'icon',
  license = 'license',
  manifest = 'manifest',
  me = 'me',
  modulepreload = 'modulepreload',
  next = 'next',
  nofollow = 'nofollow',
  noopener = 'noopener',
  noreferrer = 'noreferrer',
  opener = 'opener',
  pingback = 'pingback',
  preconnect = 'preconnect',
  prefetch = 'prefetch',
  preload = 'preload',
  prerender = 'prerender',
  prev = 'prev',
  'privacy-policy' = 'privacy-policy',
  search = 'search',
  stylesheet = 'stylesheet',
  tag = 'tag',
  'terms-of-service' = 'terms-of-service'
}

export type OdsHTMLAnchorElementRelUnion = `${OdsHTMLAnchorElementRel}`;

export const OdsHTMLAnchorElementRelList = Object.keys(OdsHTMLAnchorElementRel).map((key) => OdsHTMLAnchorElementRel[key as OdsHTMLAnchorElementRelUnion]);
