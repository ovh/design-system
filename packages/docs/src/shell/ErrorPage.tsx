import { Link as RouterLink, useRouteError } from 'react-router-dom';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';
import { BrandLogo } from './BrandLogo';
import './shell.css';

/* Route-level fallback: a thrown page/MDX shows this instead of a blank
   screen. */
const ErrorPage = () => {
  const error = useRouteError() as { message?: string; statusText?: string } | undefined;
  const detail = error?.statusText ?? error?.message;

  return (
    <div className="shell__error">
      <RouterLink aria-label="OVHcloud Design System — home" to="/"><BrandLogo /></RouterLink>
      <Text as="h1" preset={ TEXT_PRESET.heading3 }>Something went wrong</Text>
      <Text preset={ TEXT_PRESET.paragraph }>This page failed to load.</Text>
      { detail && <Text className="shell__error-detail" preset={ TEXT_PRESET.caption }>{ detail }</Text> }
      <RouterLink className="shell__error-home" to="/">Back to home</RouterLink>
    </div>
  );
};

export { ErrorPage };
