import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@ovhcloud/ods-react';
import { type ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Link } from './components/link/Link';
import style from './app.module.scss';

const NB_PAGES = 4; // Change this to test the breadcrumb behaviour

function generatePage(counter: number): () => ReactElement {
  return () => (
    <div>
      <h1>Page { counter }</h1>
    </div>
  )
}

const Pages: ReactElement[] = [];

for (let i = 0; i < NB_PAGES; i++) {
  Pages.push(generatePage(i + 1)());
}

function App(): ReactElement {
  return (
    <div className={ style.app }>
      <Breadcrumb>
        {
          Pages.map((_, idx) => (
            <BreadcrumbItem key={ idx }>
              <BreadcrumbLink as={ Link } to={ `page${idx + 1}` }>
                Page { idx + 1}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))
        }
      </Breadcrumb>

      <Link to="page1">Manual link to Page 1</Link>
      <br />
      <Link to="page2">Manual link to Page 2</Link>

      <Routes>
        {
          Pages.map((Page, idx) => (
            <Route
              element={ Page }
              key={ idx }
              path={ `page${idx + 1}` } />
          ))
        }
        <Route path="*" element={ <Navigate to="page1" replace /> } />
      </Routes>
    </div>
  );
}

export { App };
