import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

function DemoManager(): ReactElement {
  return (
    <div>
      ODS Manager Demo<br />
      <Link to="/">Back</Link>
    </div>
  );
}

export { DemoManager };
