import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

function Home(): ReactElement {
  return (
    <div>
      <Link to="/manager">ManagerDemo</Link>
      <br />
      <Link to="/order">OrderDemo</Link>
    </div>
  );
}

export { Home };
