import { type ReactNode, useEffect, useState } from 'react';
import { ComponentGallery, GALLERY } from './ComponentGallery';
import { SpecFixtures } from './SpecFixtures';
import { TokenSwatches } from './TokenSwatches';
/* The candidate theme. Scoped under [data-ods-theme='aluminium'], so importing it is inert until
   the attribute is set, and it loads with this route's chunk rather than with the app. */
import '../../../../themes/src/aluminium/index.scss';
import './aluminiumLab.css';

const THEME_ATTRIBUTE = 'data-ods-theme';
const STORAGE_KEY = 'ods-aluminium-lab';

type Candidate = 'aluminium' | 'current';
type View = 'components' | 'notes' | 'tokens';

function readStored(): Candidate {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'aluminium' ? 'aluminium' : 'current';
  } catch {
    return 'current';
  }
}

/*
 * What the two sets disagree about beyond the hexes, and what a stylesheet could not settle.
 * Kept in the page rather than in a markdown file: it is only readable next to the thing it
 * describes.
 */
const NOTES: [heading: string, body: string][] = [
  [
    'surface-page is two roles on the branch, one token',
    'The new set makes the canvas (surface-page, gray-100) a colour of its own, distinct from the sheet on it '
    + '(surface-raised, white). The branch declares surface-raised as well - but not one component reads it: Card, '
    + 'Table rows, Tag, the field backgrounds, checkbox and radio bodies, the outline Button and the light Message all '
    + 'read surface-page as "white", and turn grey on the new canvas. The theme repaints them; a real adoption has to '
    + 'move them in the component source.',
  ],
  [
    'surface-control changes meaning under the same name',
    'On the branch it is the field background (Input, Textarea, Select, Combobox, Query Filter and every dropdown panel). In the new set it is the body of an unchecked Toggle, gray-300. Anyone who adopts the list without the component changes gets grey input fields. This is the one rename in the set that is silent - the name survives, the meaning does not.',
  ],
  [
    'The status families lose their middle rung',
    'The branch has minimal (100) / subtle (200) / solid (500); the new set has subtle (100) / solid (500), and its '
    + 'subtle is the branch\'s minimal. Mapping by name would darken every tinted fill by a rung, so the theme maps by '
    + 'position. What has no destination left is the pressed fill of a ghost or outline Button, which read the 200 '
    + 'through -subtle; they are re-aimed at interaction-*-subtle-active.',
  ],
  [
    'The disabled family is gone',
    'surface-disabled, content-disabled and border-disabled are read in 143 places and the new list names none of them. It has pending and readonly, both gray-200, and nothing else. The theme holds them at the branch\'s rungs: a disabled control that reads the same as a read-only one is a regression, not a simplification.',
  ],
  [
    'Checked controls have no hover rung',
    'Checkbox, Radio and Toggle send their checked hover to interaction-base-hover, the brand blue, while their rest state is now surface-control-solid, navy. The set has no hover for the control-solid register, so the theme holds the rest colour on hover. The list says as much in its own "known gaps" section.',
  ],
  [
    'Badge and Tag are pills, and no token says so',
    'radius-pill is 16px, which is Tag\'s current value, not the 999px MDS draws. The theme states 999px as a component decision; a radius token a theme can set would be the real fix.',
  ],
  [
    'What no stylesheet can reach',
    'Badge\'s three emphases, Button\'s emphasis scale and its loading state without an overlay, Spinner losing its '
    + 'color prop, Modal losing its color prop, Toaster routing every status through the Message light variant, the '
    + 'Accordion high emphasis, and the Message light border (Message puts its variant in a hashed class, so there is '
    + 'no DOM hook to re-aim). These need component changes, not theme values. The Badge emphasis row in the fixtures '
    + 'below is a mock painted from the tokens, not a Badge.',
  ],
  [
    'Tabs has no variant hook on the DOM',
    'default and switch differ only by a hashed class, so one selector has to serve both. The theme settles it with the layer order - the switch rule is more specific and keeps its own ground - but the selected chip ends up with the control shadow in both variants. A data attribute on Tab would remove the compromise.',
  ],
];

const AluminiumLab = (): ReactNode => {
  const [candidate, setCandidate] = useState<Candidate>(readStored);
  const [view, setView] = useState<View>('components');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const root = document.documentElement;

    if (candidate === 'aluminium') {
      root.setAttribute(THEME_ATTRIBUTE, 'aluminium');
    } else {
      root.removeAttribute(THEME_ATTRIBUTE);
    }

    try {
      localStorage.setItem(STORAGE_KEY, candidate);
    } catch {
      // Not persisting is harmless: the choice still holds for this page view.
    }

    /* The attribute sits on <html>, so it also reaches portalled content (toasts) and the docs
       chrome. Leaving it behind on navigation would theme the rest of the site. */
    return (): void => root.removeAttribute(THEME_ATTRIBUTE);
  }, [candidate]);

  return (
    <div className="lab">
      <div className="lab__toolbar">
        <div className="lab__toolbar-group">
          <span className="lab__toolbar-label">Token set</span>

          <div className="lab__segmented" role="group">
            <button
              aria-pressed={ candidate === 'current' }
              className="lab__segment"
              onClick={ () => setCandidate('current') }
              type="button">
              Branch
            </button>
            <button
              aria-pressed={ candidate === 'aluminium' }
              className="lab__segment"
              onClick={ () => setCandidate('aluminium') }
              type="button">
              Aluminium
            </button>
          </div>
        </div>

        <div className="lab__toolbar-group">
          <span className="lab__toolbar-label">View</span>

          <div className="lab__segmented" role="group">
            { (['components', 'tokens', 'notes'] as const).map((item) => (
              <button
                aria-pressed={ view === item }
                className="lab__segment"
                key={ item }
                onClick={ () => setView(item) }
                type="button">
                { item }
              </button>
            )) }
          </div>
        </div>

        { view === 'components' && (
          <div className="lab__toolbar-group lab__toolbar-group--grow">
            <input
              aria-label="Filter components"
              className="lab__filter"
              onChange={ (event) => setFilter(event.target.value) }
              placeholder={ `Filter ${GALLERY.length} components…` }
              type="search"
              value={ filter } />
          </div>
        ) }
      </div>

      <div className="lab__canvas">
        { view === 'components' && (
          <>
            <SpecFixtures />
            <ComponentGallery filter={ filter } />
          </>
        ) }

        { view === 'tokens' && <TokenSwatches theme={ candidate } /> }

        { view === 'notes' && (
          <div className="lab__notes">
            { NOTES.map(([heading, body]) => (
              <section className="lab__card" key={ heading }>
                <h3 className="lab__card-title">{ heading }</h3>
                <p className="lab__card-note lab__card-note--long">{ body }</p>
              </section>
            )) }
          </div>
        ) }
      </div>
    </div>
  );
};

export { AluminiumLab };
