import { renderToString } from 'react-dom/server';
import { SelectMergedSelection } from '../../src/components/select-merged-selection/SelectMergedSelection';

describe('SelectMergedSelection', () => {
  it('should render the singular default label for a single selection', () => {
    expect(renderToString(<SelectMergedSelection total={ 1 } />))
      .toContain('Selected item');
  });

  it('should render the plural default label for multiple selections', () => {
    expect(renderToString(<SelectMergedSelection total={ 3 } />))
      .toContain('Selected items');
  });

  it('should render the default label when an empty label is given', () => {
    expect(renderToString(<SelectMergedSelection multipleSelectionLabel="" total={ 2 } />))
      .toContain('Selected items');
  });

  it('should render the given label', () => {
    const rendered = renderToString(<SelectMergedSelection multipleSelectionLabel="Chosen" total={ 4 } />);

    expect(rendered).toContain('Chosen');
    expect(rendered).not.toContain('Selected item');
  });
});
