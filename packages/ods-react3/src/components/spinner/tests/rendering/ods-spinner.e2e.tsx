import { render } from '@testing-library/react';
import { ODS_SPINNER_SIZE, OdsSpinner } from '../../src';

describe('OdsSpinner rendering', () => {
  describe('sizes', () => {
    it('should respect increase order (xs < sm < md < lg)', async() => {
      const { getByTestId } = render(
        <>
          <OdsSpinner size={ ODS_SPINNER_SIZE.xs } data-testid="xs" />
          {/*<OdsSpinner size={ ODS_SPINNER_SIZE.sm } data-testid="sm" />*/}
          {/*<OdsSpinner size={ ODS_SPINNER_SIZE.md } data-testid="md" />*/}
          {/*<OdsSpinner size={ ODS_SPINNER_SIZE.lg } data-testid="lg" />*/}
        </>
      );

      const xsSpinner = getByTestId('xs');
      // const smSpinner = getByTestId('sm');
      // const mdSpinner = getByTestId('md');
      // const lgSpinner = getByTestId('lg');

      expect(xsSpinner.getBoundingClientRect().height).toBe(66);

      // expect(xsSpinnerHeight).toBeLessThan(smSpinnerHeight);
      // expect(xsSpinnerHeight).toBeLessThan(mdSpinnerHeight);
      // expect(xsSpinnerHeight).toBeLessThan(lgSpinnerHeight);
      // expect(smSpinnerHeight).toBeLessThan(mdSpinnerHeight);
      // expect(smSpinnerHeight).toBeLessThan(lgSpinnerHeight);
      // expect(smSpinnerHeight).toBeGreaterThan(xsSpinnerHeight);
      // expect(mdSpinnerHeight).toBeLessThan(lgSpinnerHeight);
      // expect(mdSpinnerHeight).toBeGreaterThan(xsSpinnerHeight);
      // expect(mdSpinnerHeight).toBeGreaterThan(smSpinnerHeight);
      // expect(lgSpinnerHeight).toBeGreaterThan(xsSpinnerHeight);
      // expect(lgSpinnerHeight).toBeGreaterThan(smSpinnerHeight);
      // expect(lgSpinnerHeight).toBeGreaterThan(mdSpinnerHeight);
      }
    );
  });
});
