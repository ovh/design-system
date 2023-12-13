/**
 * See rel attribute valid for <a> and <area> on
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
 */
enum OdsHTMLAnchorElementRel {
  alternate = 'alternate',
  author = 'author',
  bookmark = 'bookmark',
  canonical = 'canonical',
  dnsPrefetch = 'dns-prefetch',
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
  privacyPolicy = 'privacy-policy',
  search = 'search',
  stylesheet = 'stylesheet',
  tag = 'tag',
  termsOfService = 'terms-of-service'
}

const OdsHTMLAnchorElementRelList = Object.freeze(Object.values(OdsHTMLAnchorElementRel));

export {
  OdsHTMLAnchorElementRel,
  OdsHTMLAnchorElementRelList,
}