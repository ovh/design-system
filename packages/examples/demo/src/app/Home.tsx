import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

function Home(): ReactElement {
  return (
    <div>
      <Link to="/design-system/manager">ManagerDemo</Link>
      <br />
      <Link to="/design-system/order">OrderDemo</Link>
    </div>
  );
}

export { Home };
