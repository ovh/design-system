import { getValueState } from '../../src/controller/meter';

describe('Meter controller', () => {
  describe('getValueState', () => {
    describe('without optimum', () => {
      it('should return warning if value is above high', () => {
        expect(getValueState(75, { high: 70, max: 100, min: 0 })).toBe('warning');
      });

      it('should return warning if value is lower than low', () => {
        expect(getValueState(15, { low: 30, max: 100, min: 0 })).toBe('warning');
      });

      it('should return normal if no thresholds are set', () => {
        expect(getValueState(50, { max: 100, min: 0 })).toBe('normal');
      });

      it('should return normal if value is between thresholds', () => {
        expect(getValueState(50, { high: 70, max: 100, min: 0 })).toBe('normal');
        expect(getValueState(70, { high: 70, max: 100, min: 0 })).toBe('normal');
        expect(getValueState(50, { low: 30, max: 100, min: 0 })).toBe('normal');
        expect(getValueState(30, { low: 30, max: 100, min: 0 })).toBe('normal');
        expect(getValueState(50, { high: 70, low: 30, max: 100, min: 0 })).toBe('normal');
      });
    });

    describe('with optimum', () => {
      it('should return normal if optimum is not in min/max range', () => {
        expect(getValueState(75, { max: 100, min: 0, optimum: -10 })).toBe('normal');
        expect(getValueState(75, { max: 100, min: 0, optimum: 200 })).toBe('normal');
      });

      describe('lesser than low', () => {
        it('should return warning if value is above low and less than high', () => {
          expect(getValueState(50, { low: 30, max: 100, min: 0, optimum: 15 })).toBe('warning');
          expect(getValueState(50, { high: 70, low: 30, max: 100, min: 0, optimum: 15 })).toBe('warning');
        });

        it('should return warning if value is equal to low', () => {
          expect(getValueState(30, { low: 30, max: 100, min: 0, optimum: 15 })).toBe('warning');
        });

        it('should return critical if value is above high or max', () => {
          expect(getValueState(500, { low: 30, max: 100, min: 0, optimum: 15 })).toBe('critical');
          expect(getValueState(80, { high: 70, low: 30, max: 100, min: 0, optimum: 15 })).toBe('critical');
        });

        it('should return normal if value is less than low', () => {
          expect(getValueState(15, { low: 30, max: 100, min: 0, optimum: 15 })).toBe('normal');
        });
      });

      describe('equal to low', () => {
        it('should return warning if value is less than low', () => {
          expect(getValueState(15, { low: 30, max: 100, min: 0, optimum: 30 })).toBe('warning');
        });

        it('should return warning if value is above high', () => {
          expect(getValueState(85, { high: 70, low: 30, max: 100, min: 0, optimum: 30 })).toBe('warning');
        });

        it('should return normal if value is equal to low or high', () => {
          expect(getValueState(30, { low: 30, max: 100, min: 0, optimum: 30 })).toBe('normal');
          expect(getValueState(70, { high: 70, low: 30, max: 100, min: 0, optimum: 30 })).toBe('normal');
        });

        it('should return normal if value is above low', () => {
          expect(getValueState(50, { low: 30, max: 100, min: 0, optimum: 30 })).toBe('normal');
        });
      });

      describe('above low', () => {
        describe('without high', () => {
          it('should return normal if value is above low', () => {
            expect(getValueState(50, { low: 30, max: 100, min: 0, optimum: 50 })).toBe('normal');
          });

          it('should return warning if value is less than low', () => {
            expect(getValueState(10, { low: 30, max: 100, min: 0, optimum: 50 })).toBe('warning');
          });
        });

        describe('with high', () => {
          it('should return warning if value less than low', () => {
            expect(getValueState(10, { high: 70, low: 30, max: 100, min: 0, optimum: 50 })).toBe('warning');
          });

          it('should return warning if value is above high', () => {
            expect(getValueState(80, { high: 70, low: 30, max: 100, min: 0, optimum: 50 })).toBe('warning');
          });

          it('should return normal if value is between (or equal to) low and high', () => {
            expect(getValueState(50, { high: 70, low: 30, max: 100, min: 0, optimum: 50 })).toBe('normal');
            expect(getValueState(70, { high: 70, low: 30, max: 100, min: 0, optimum: 50 })).toBe('normal');
            expect(getValueState(30, { high: 70, low: 30, max: 100, min: 0, optimum: 50 })).toBe('normal');
          });
        });
      });

      describe('above high', () => {
        it('should return warning if value is above low and less than high', () => {
          expect(getValueState(50, { high: 70, max: 100, min: 0, optimum: 85 })).toBe('warning');
          expect(getValueState(50, { high: 70, low: 30, max: 100, min: 0, optimum: 85 })).toBe('warning');
        });

        it('should return warning if value is equal to high', () => {
          expect(getValueState(70, { high: 70, max: 100, min: 0, optimum: 85 })).toBe('warning');
        });

        it('should return critical if value is less than low or min', () => {
          expect(getValueState(-10, { high: 70, max: 100, min: 0, optimum: 85 })).toBe('critical');
          expect(getValueState(5, { high: 70, low: 30, max: 100, min: 0, optimum: 85 })).toBe('critical');
        });

        it('should return normal if value is above high', () => {
          expect(getValueState(80, { high: 70, max: 100, min: 0, optimum: 85 })).toBe('normal');
        });
      });

      describe('equal to high', () => {
        it('should return warning if value is less than low', () => {
          expect(getValueState(15, { low: 30, max: 100, min: 0, optimum: 30 })).toBe('warning');
        });

        it('should return warning if value is above high', () => {
          expect(getValueState(85, { high: 70, low: 30, max: 100, min: 0, optimum: 30 })).toBe('warning');
        });

        it('should return normal if value is equal to low or high', () => {
          expect(getValueState(30, { low: 30, max: 100, min: 0, optimum: 30 })).toBe('normal');
          expect(getValueState(70, { high: 70, low: 30, max: 100, min: 0, optimum: 30 })).toBe('normal');
        });

        it('should return normal if value is less than high', () => {
          expect(getValueState(50, { high: 70, max: 100, min: 0, optimum: 30 })).toBe('normal');
        });
      });

      describe('less than high', () => {
        describe('without low', () => {
          it('should return normal if value is less than high', () => {
            expect(getValueState(50, { high: 70, max: 100, min: 0, optimum: 50 })).toBe('normal');
          });

          it('should return warning if value is above high', () => {
            expect(getValueState(80, { high: 70, max: 100, min: 0, optimum: 50 })).toBe('warning');
          });
        });

        describe('with low', () => {
          it('should return warning if value is above high', () => {
            expect(getValueState(80, { high: 70, low: 30, max: 100, min: 0, optimum: 50 })).toBe('warning');
          });

          it('should return warning if value is less than low', () => {
            expect(getValueState(10, { high: 70, low: 30, max: 100, min: 0, optimum: 50 })).toBe('warning');
          });

          it('should return normal if value is between (or equal to) low and high', () => {
            expect(getValueState(50, { high: 70, low: 30, max: 100, min: 0, optimum: 50 })).toBe('normal');
            expect(getValueState(70, { high: 70, low: 30, max: 100, min: 0, optimum: 50 })).toBe('normal');
            expect(getValueState(30, { high: 70, low: 30, max: 100, min: 0, optimum: 50 })).toBe('normal');
          });
        });
      });
    });
  });
});
