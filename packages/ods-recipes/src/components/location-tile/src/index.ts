import { LocationTile as CssModule } from './css-modules';
import { LocationTile as Tailwind } from './tailwind';

const recipe = {
  additionalNote: '',
  description: 'A tile that offers a location option.',
  name: 'Location Tile',
  reactTag: 'LocationTile',
  tags: ['checkbox', 'location', 'selection', 'tile'],
}

const LocationTile = {
  CssModule,
  recipe,
  Tailwind,
}

export {
  LocationTile,
};
