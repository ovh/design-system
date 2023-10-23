/**
 * See rel attribute valid for <a> and <area> on
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
 */
export enum OdsHTMLAnchorElementRel {
  alternate = 'alternate',
  author = 'author',
  bookmark = 'bookmark',
  external = 'external',
  help = 'help',
  license = 'license',
  me = 'me',
  next = 'next',
  nofollow = 'nofollow',
  noopener = 'noopener',
  noreferrer = 'noreferrer',
  opener = 'opener',
  prev = 'prev',
  search = 'search',
  tag = 'tag',
}

export type OdsHTMLAnchorElementRelUnion = `${OdsHTMLAnchorElementRel}`;

export const OdsHTMLAnchorElementRelList = Object.keys(OdsHTMLAnchorElementRel).map((key) => OdsHTMLAnchorElementRel[key as OdsHTMLAnchorElementRelUnion]);
