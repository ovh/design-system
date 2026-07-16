import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import { llmsEmit } from './vite-plugin-llms';
import { defineConfig, searchForWorkspaceRoot } from 'vite';

// The docs app compiles ods-react sources and the public CSF stories directly
// from their sibling packages (same model as the current Storybook), so the
// dev server must be allowed to read across the workspace.
export default defineConfig({
  // include .mdx only: plain .md files (CHANGELOG.md?raw) must stay raw text.
  plugins: [{ enforce: 'pre', ...mdx({ mdExtensions: [], providerImportSource: '@mdx-js/react' }) }, react(), llmsEmit()],
  resolve: {
    // ods-react sources pull @ark-ui/react, whose peer react resolves to
    // ods-react's own copy (18.x on master): dedupe forces every bare
    // react import onto this app's single instance — the same job the
    // Storybook builder was silently doing for the old docs.
    // @ark-ui/react is deduped too: pnpm keys it by react peer version, so
    // without it two Ark instances coexist and the EnvironmentProvider
    // context (portal re-rooting into the demo iframes) is never seen by
    // the components.
    dedupe: ['react', 'react-dom', '@ark-ui/react'],
  },
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },
});
