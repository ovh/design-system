import { Link as RouterLink } from 'react-router-dom';
import { Divider, ICON_NAME, Icon, Link, TEXT_PRESET, Text } from '../ods';
import { flattenPages } from '../nav/model';

/* The sidebar order, left to right. */
const ORDER = flattenPages().filter((page) => !page.hidden);

/* The previous and next pages of the sidebar at the foot of a page, to read on without going back
   to the sidebar. */
const PagePager = ({ currentId }: { currentId?: string }) => {
  const index = ORDER.findIndex((page) => page.id === currentId);
  const page = ORDER[index];
  // The sandbox and the theme generator are workspaces filling the pane, not pages read to the end.
  if (!page || (page.kind === 'tool' && !page.gallery)) {
    return null;
  }
  const previous = ORDER[index - 1];
  const next = ORDER[index + 1];

  return (
    <nav aria-label="Previous and next pages" className="shell__pager">
      <Divider />
      <div className="shell__pager-links">
        { previous && (
          <div className="shell__pager-link">
            <Text preset={ TEXT_PRESET.caption }>Previous</Text>
            <Link as={ RouterLink } to={ previous.path }><Icon name={ ICON_NAME.arrowLeft } /> { previous.title }</Link>
          </div>
        ) }
        { next && (
          <div className="shell__pager-link shell__pager-link--next">
            <Text preset={ TEXT_PRESET.caption }>Next</Text>
            <Link as={ RouterLink } to={ next.path }>{ next.title } <Icon name={ ICON_NAME.arrowRight } /></Link>
          </div>
        ) }
      </div>
    </nav>
  );
};

export { PagePager };
