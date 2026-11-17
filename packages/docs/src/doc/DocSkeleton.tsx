import { type ReactElement } from 'react';
import { Skeleton } from '../../../ods-react/src/components/skeleton/src';
import './doc.css';

/* Loading placeholders shaped like the page they stand for, shown while a lazy
   chunk (stories, MDX, typedoc JSON…) is in flight. They render inside the
   article the content lands in. DocArticle reads the .doc-skeleton root class
   to tell a loading article apart (ToC placeholder, search highlight). */

type DocSkeletonVariant = 'component' | 'examples' | 'gallery' | 'guide' | 'helper' | 'technical';

const Lines = ({ widths }: { widths: string[] }) => (
  <div className="doc-skeleton__lines">
    { widths.map((width, index) => <Skeleton className="doc-skeleton__line" key={ index } style={{ width }} />) }
  </div>
);

const Title = ({ level = 2, width }: { level?: 2 | 3, width: string }) => (
  <Skeleton className={ `doc-skeleton__heading doc-skeleton__heading--level-${level}` } style={{ width }} />
);

const Block = ({ height }: { height: number }) => <Skeleton className="doc-skeleton__block" style={{ height: `${height}px` }} />;

const Table = ({ bodyRows }: { bodyRows: number }) => (
  <div className="doc-skeleton__table">
    { Array.from({ length: bodyRows + 1 }, (_, index) => <Skeleton className="doc-skeleton__row" key={ index } />) }
  </div>
);

const SHAPES: Record<DocSkeletonVariant, () => ReactElement> = {
  // Lead line, overview demo, description beside the identity card, then prose sections.
  component: () => (
    <>
      <Lines widths={ ['65%'] } />
      <Block height={ 80 } />
      <Title width="22%" />
      <div className="doc-skeleton__overview">
        <Lines widths={ ['100%', '96%', '98%', '58%'] } />
        <Block height={ 248 } />
      </div>
      <Title width="18%" />
      <Lines widths={ ['94%', '100%', '42%'] } />
      <Title level={ 3 } width="28%" />
      <Lines widths={ ['100%', '86%'] } />
    </>
  ),
  // An h2 and its demo canvas (toolbar, demo, code) per story: the tab names the examples, no heading of its own.
  examples: () => (
    <>
      { ['26%', '34%', '22%'].map((width) => (
        <div className="doc-skeleton__section" key={ width }>
          <Title width={ width } />
          <Block height={ 220 } />
        </div>
      )) }
    </>
  ),
  // Recipe Gallery: intro, filter toolbar, card grid.
  gallery: () => (
    <>
      <Lines widths={ ['100%', '92%', '48%'] } />
      <Block height={ 40 } />
      <div className="doc-skeleton__grid">
        { Array.from({ length: 4 }, (_, index) => <Block height={ 360 } key={ index } />) }
      </div>
    </>
  ),
  guide: () => (
    <>
      <Lines widths={ ['100%', '94%', '60%'] } />
      <Title width="30%" />
      <Lines widths={ ['100%', '97%', '72%'] } />
      <Block height={ 96 } />
      <Title width="24%" />
      <Lines widths={ ['100%', '92%', '98%', '55%'] } />
    </>
  ),
  // Specification table, then the examples' demos.
  helper: () => (
    <>
      <Title width="24%" />
      <Table bodyRows={ 3 } />
      <Title width="18%" />
      <Title level={ 3 } width="16%" />
      <Block height={ 160 } />
    </>
  ),
  // Anatomy browser, then a props table per sub-component.
  technical: () => (
    <>
      <Title width="16%" />
      <Block height={ 96 } />
      <Title width="20%" />
      <Lines widths={ ['52%'] } />
      <Table bodyRows={ 5 } />
    </>
  ),
};

const DocSkeleton = ({ variant }: { variant: DocSkeletonVariant }) => {
  const Shape = SHAPES[variant];
  return (
    <div className="doc-skeleton">
      <Shape />
      { /* Last: the first child is the shape's, the one that drops its top margin. */ }
      <span className="sr-only" role="status">Loading…</span>
    </div>
  );
};

/* The ToC column while the article loads, in the real ToC's box (.doc-layout__toc),
   so the column is not empty until the headings land. */
const TocSkeleton = () => (
  <div aria-hidden="true" className="doc-layout__toc doc-layout__toc--loading">
    <Skeleton className="doc-skeleton__line" style={{ width: '60%' }} />
    { ['80%', '64%', '70%', '88%', '56%', '74%'].map((width, index) => (
      <Skeleton
        className={ `doc-skeleton__line${index % 3 === 0 ? '' : ' doc-skeleton__line--nested'}` }
        key={ index }
        style={{ width }} />
    )) }
  </div>
);

export { DocSkeleton, TocSkeleton };
