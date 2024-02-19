export class OdsComputedUtils {
  static sumReducer(acc: number, val?: number): number {
    return acc + (val || 0);
  }
}
