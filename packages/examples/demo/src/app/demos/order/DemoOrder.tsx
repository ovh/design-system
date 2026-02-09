import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

function DemoOrder(): ReactElement {
  return (
    <div>
      ODS Order Demo<br />
      <Link to="/">Back</Link>
    </div>
  );
}

export { DemoOrder };
