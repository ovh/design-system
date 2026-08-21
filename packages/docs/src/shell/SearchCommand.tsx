import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BADGE_COLOR, BADGE_SIZE, Badge } from '../../../ods-react/src/components/badge/src';
import { Command, CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandList, CommandOption } from '../../../ods-react/src/components/command/src';
import { Icon } from '../../../ods-react/src/components/icon/src';
import { type NavPage, flattenPages } from '../nav/model';

/* Global search — our own Command component (the palette pattern it was
   built for), controlled so selecting an entry closes it, bound to ⌘K.
   Components first (the most searched), one icon per entry, the section
   trail as right-hand context, status badges carried over from the nav. */

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

const SearchCommand = () => {
  const [open, setOpen] = useState(false);
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

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Command onOpenChange={ ({ open: value }) => setOpen(value) } open={ open }>
      <CommandContent aria-label="Search the documentation">
        <CommandFilter aria-label="Search" placeholder="Search components, guides, tools…" />
        <CommandList aria-label="Results">
          { GROUPS.map(({ heading, kind }) => (
            <CommandGroup heading={ heading } key={ kind }>
              { pages.filter((page) => page.kind === kind).map((page) => {
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
          <CommandEmpty>No result.</CommandEmpty>
        </CommandList>
      </CommandContent>
    </Command>
  );
};

export { SearchCommand };
