import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Command, CommandContent, CommandEmpty, CommandFilter, CommandGroup, CommandList, CommandOption } from '../../../ods-react/src/components/command/src';
import { flattenPages } from '../nav/model';

/* Global search — our own Command component (the palette pattern it was
   built for), controlled so selecting an entry closes it, bound to ⌘K. */
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
        <CommandFilter aria-label="Search" placeholder="Search guides, components, tools…" />
        <CommandList aria-label="Results">
          <CommandGroup heading="Guides">
            { pages.filter((page) => page.kind === 'guide').map((page) => (
              <CommandOption key={ page.id } onSelect={ () => go(page.path) }>{ page.title }</CommandOption>
            )) }
          </CommandGroup>
          <CommandGroup heading="Components">
            { pages.filter((page) => page.kind === 'component').map((page) => (
              <CommandOption key={ page.id } onSelect={ () => go(page.path) }>{ page.title }</CommandOption>
            )) }
          </CommandGroup>
          <CommandGroup heading="Recipes">
            { pages.filter((page) => page.kind === 'recipe').map((page) => (
              <CommandOption key={ page.id } onSelect={ () => go(page.path) }>{ page.title }</CommandOption>
            )) }
          </CommandGroup>
          <CommandGroup heading="Helpers">
            { pages.filter((page) => page.kind === 'helper').map((page) => (
              <CommandOption key={ page.id } onSelect={ () => go(page.path) }>{ page.title }</CommandOption>
            )) }
          </CommandGroup>
          <CommandGroup heading="Tools">
            { pages.filter((page) => page.kind === 'tool').map((page) => (
              <CommandOption key={ page.id } onSelect={ () => go(page.path) }>{ page.title }</CommandOption>
            )) }
          </CommandGroup>
          <CommandEmpty>No result.</CommandEmpty>
        </CommandList>
      </CommandContent>
    </Command>
  );
};

export { SearchCommand };
