import { DummyExample as CssModule } from './css-modules';
import { DummyExample as Tailwind } from './tailwind';

const recipe = {
  additionalNote: 'Do not use.',
  description: 'A dummy example to test multiple recipes.',
  name: 'Dummy Example',
  reactTag: 'DummyExample',
  tags: ['dummy', 'tile'],
}

const DummyExample = {
  CssModule,
  recipe,
  Tailwind,
}

export {
  DummyExample,
};
