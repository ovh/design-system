import { Skeleton } from '../../../ods-react/src/components/skeleton/src';

/* The one loading placeholder every doc page shows while a lazy chunk
   (stories, MDX, typedoc JSON…) is in flight. */
const DocSkeleton = () => <Skeleton style={{ height: '320px', marginTop: '16px', width: '100%' }} />;

export { DocSkeleton };
