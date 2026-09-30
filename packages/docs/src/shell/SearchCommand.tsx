import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BADGE_COLOR, BADGE_SIZE, Badge } from '../../../ods-react/src/components/badge/src';
import { Command, CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandList, CommandOption } from '../../../ods-react/src/components/command/src';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { type NavPage, flattenPages } from '../nav/model';
import { loadSearchIndex, searchDocs, type SearchHit, tokenize } from './search';

/* Global search — our own Command component (the palette pattern it was
   built for), controlled so selecting an entry closes it, bound to ⌘K.
   The filter is CONTROLLED (query state below), which turns the Command's
   own matching off: page entries are matched on title + section trail here,
   and a full-text pass over the whole documentation corpus (lazy-loaded
   index, see search.ts) fills the "In the docs" group for everything the
   titles alone can't answer. */

const GROUPS: { heading: string, kind: NavPage['kind'] }[] = [
  { heading: 'Components', kind: 'component' },
  { heading: 'Guides', kind: 'guide' },
  { heading: 'Tools', kind: 'tool' },
  { heading: 'Recipes', kind: 'recipe' },
  { heading: 'Helpers', kind: 'helper' },
];

const BADGES = {
  beta: { color: BADGE_COLOR.beta, label: 'Beta' },
  deprecated: { color: BADGE_COLOR.warning, label: 'Deprecated' },
  new: { color: BADGE_COLOR.new, label: 'New' },
} as const;

/* The matched terms, bolded inside the snippet. */
const HighlightedSnippet = ({ query, text }: { query: string, text: string }) => {
  const terms = tokenize(query);
  if (terms.length === 0) {
    return <>{ text }</>;
  }
  const pattern = new RegExp(`(${terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  return (
    <>
      { /* split with a capturing group: captures land on odd indexes */ }
      { text.split(pattern).map((part, index) => (
        index % 2 === 1
          ? <mark className="shell__search-mark" key={ index }>{ part }</mark>
          : <span key={ index }>{ part }</span>
      )) }
    </>
  );
};

const SearchCommand = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [docHits, setDocHits] = useState<SearchHit[]>([]);
  const navigate = useNavigate();
  const pages = flattenPages();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Full-text pass: only from 3 typed characters, so the index (a few
  // hundred KB, fetched once) is never loaded for a glance at the palette.
  useEffect(() => {
    const wanted = query.trim();
    if (wanted.length < 3) {
      setDocHits([]);
      return;
    }
    let stale = false;
    loadSearchIndex().then((index) => {
      if (!stale) {
        setDocHits(searchDocs(index, wanted));
      }
    });
    return () => {
      stale = true;
    };
  }, [query]);

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  // Content hits carry the query terms in the router state: the landing page
  // flash-highlights them (searchHighlight.ts) so the eye finds the match.
  const goToHit = (hit: SearchHit) => {
    const terms = tokenize(query);
    navigate(hit.route, { state: { highlight: terms } });
    setOpen(false);
  };

  const needle = query.trim().toLowerCase();
  const pageMatches = (page: NavPage): boolean => !needle || `${page.title} ${page.section}`.toLowerCase().includes(needle);
  const groups = GROUPS
    .map(({ heading, kind }) => ({ heading, kind, items: pages.filter((page) => page.kind === kind && pageMatches(page)) }))
    .filter((group) => group.items.length > 0);
  // A page already listed by title above is not repeated as a content hit.
  const shownPaths = new Set(groups.flatMap((group) => group.items.map((page) => page.path)));
  const contentHits = docHits.filter((hit) => !shownPaths.has(hit.route));

  return (
    <Command
      onOpenChange={ ({ open: value }) => {
        setOpen(value);
        if (!value) {
          setQuery('');
        }
      } }
      open={ open }>
      <CommandContent aria-label="Search the documentation">
        <CommandFilter
          aria-label="Search"
          onChange={ (e) => setQuery(e.target.value) }
          placeholder="Search components, guides, tools…"
          value={ query } />
        <CommandList aria-label="Results">
          { groups.map(({ heading, items, kind }) => (
            <CommandGroup heading={ heading } key={ kind }>
              { items.map((page) => {
                const badge = page.badge ? BADGES[page.badge] : undefined;
                // the group heading already says it: only deeper trails add context
                const hint = page.section !== heading ? page.section : undefined;
                return (
                  <CommandOption key={ page.id } onSelect={ () => go(page.path) }>
                    <span className="shell__search-option">
                      <Icon className="shell__search-option-icon" name={ page.icon } />
                      <span>{ page.title }</span>
                      { badge && <Badge color={ badge.color } size={ BADGE_SIZE.sm }>{ badge.label }</Badge> }
                      { hint && <span className="shell__search-option-hint">{ hint }</span> }
                    </span>
                  </CommandOption>
                );
              }) }
            </CommandGroup>
          )) }
          { contentHits.length > 0 && (
            <CommandGroup heading="In the docs">
              { contentHits.map((hit) => (
                <CommandOption key={ `doc:${hit.route}:${hit.section}` } onSelect={ () => goToHit(hit) }>
                  <span className="shell__search-option shell__search-option--content">
                    <Icon className="shell__search-option-icon" name={ ICON_NAME.magnifyingGlass } />
                    <span>{ hit.title }</span>
                    <span className="shell__search-option-hint">{ hit.section }</span>
                    { hit.snippet && (
                      <span className="shell__search-snippet">
                        <HighlightedSnippet query={ query } text={ hit.snippet } />
                      </span>
                    ) }
                  </span>
                </CommandOption>
              )) }
            </CommandGroup>
          ) }
          { groups.length === 0 && contentHits.length === 0 && <CommandEmpty>No result.</CommandEmpty> }
        </CommandList>
      </CommandContent>
    </Command>
  );
};

export { SearchCommand };
