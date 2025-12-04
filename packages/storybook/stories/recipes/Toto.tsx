import { Code } from '@ovhcloud/ods-react';
// import * as X from '@ovhcloud/ods-recipes';
// import U from '@ovhcloud/ods-recipes/location-tile?raw';
// import U from '../../../ods-recipes/src/components/location-tile/src/css-modules/index.tsx?raw';
import React, { useEffect, useState } from 'react';
// import { ResetTheme } from '../../src/components/resetTheme/ResetTheme';

// TODO embed import in each card with loading state
// TODO manage missing files (ex: no css on some example)

const Toto = ({ recipe }: { recipe: string }) => {
  // console.log(X)
  // console.log(import.meta.resolve('../../../../node_modules/@ovhcloud/ods-react'));
  const [cssModuleStyle, setCssModuleStyle] = useState('');
  const [cssModuleTs, setCssModuleTs] = useState('');
  const [tailwindTs, setTailwindTs] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch(U)
    //   .then((res) => {
    //     res.text().then((t) => console.log(t))
    //   })

    // Import correct content but won't work on deployment
    // import('../../../ods-recipes/src/components/location-tile/src/css-modules/index.tsx?raw')
    //   .then((res) => {
    //     console.log(res);
    //   });

    // OK
    // import('@ovhcloud/ods-recipes/location-tile?raw')
    //   .then((res) => {
    //     console.log(res);
    //   });

    Promise.all([
      // import((`@ovhcloud/ods-recipes/components/${recipe}/css-modules?raw`)),
      // import((`@ovhcloud/ods-recipes/components/${recipe}/css-modules/style?raw`)),
      // import((`@ovhcloud/ods-recipes/components/${recipe}/tailwind?raw`))
      // import(('@ovhcloud/ods-recipes/components/location-tile/css-modules?raw')),
      // import(('@ovhcloud/ods-recipes/components/location-tile/css-modules/style?raw')),
      // import((`@ovhcloud/ods-recipes/components/location-tile/tailwind?raw`))
      import(('@ovhcloud/ods-recipes/components/dummy-example/css-modules?raw')),
      import(('@ovhcloud/ods-recipes/components/dummy-example/css-modules/style?raw')),
      import((`@ovhcloud/ods-recipes/components/dummy-example/tailwind?raw`))
    ]).then(([cssModuleStyleImport, cssModuleTsImport, tailwindTsImport]) => {
      setCssModuleStyle(cssModuleStyleImport.default);
      setCssModuleTs(cssModuleTsImport.default);
      setTailwindTs(tailwindTsImport.default);
      setIsLoading(false);
    });

    // import('@ovhcloud/ods-recipes/components/location-tile/css-modules?raw')
    //   .then((res) => {
    //     console.log(res);
    //   });
    //
    // import('@ovhcloud/ods-recipes/components/location-tile/css-modules/style?raw')
    //   .then((res) => {
    //     console.log(res);
    //   });
    //
    // import('@ovhcloud/ods-recipes/components/location-tile/tailwind?raw')
    //   .then((res) => {
    //     console.log(res);
    //   });

    // console.log(U)
  }, []);

  if (isLoading) {
    return (
      <div>...loading...</div>
    );
  }

  return (
    <div>
      TODO canvas

      <Code>
        { cssModuleTs }
      </Code>

      <br /><br />

      <Code>
        { cssModuleStyle }
      </Code>

      <br /><br />

      <Code>
        { tailwindTs }
      </Code>
    </div>
  );
}

//const RECIPES = ['dummy-example', 'location-tile'];
const RECIPES = ['location-tile'];

const Recipes = () => {
  return (
    <div>
      {
        RECIPES.map((recipe) => (
          <div key={ recipe }>
            <h1>{ recipe }</h1>

            <Toto recipe={ recipe } />
          </div>
        ))
      }
    </div>
  )
}

export { Recipes };
