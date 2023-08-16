/**
 * Create all test cases with all their possible attributes.
 * @param componentAttributes - An object containing all attributes with arrays of possible values
 * @returns An array of all possible test cases
 */
function componentAttributesToTests<T, K>(componentAttributes: K): T[] {
  const testCases: T[] = [];

  for (const attrs of _product(..._expandAttributes(componentAttributes as K))) {
    const testCase: T = {} as T;
    for (const [name, value] of attrs) {
      testCase[name as keyof T] = value;
    }
    testCases.push(testCase as T);
  }

  return testCases;
}

/**
 * Expand an object of attributes to an array of objects with all possible combinations of values.
 * @param attributes - An object containing all attributes with arrays of possible values
 * @returns An array containing attributes keys with all possible combinations of values
 */
function _expandAttributes<T>(attributes: T): any[] {
  return Object.entries(attributes).map(([attr, values]) => typeof values !== 'undefined'? values.length ? values.map((value: any) => [attr, value]): [attr, values] : [attr, values]);
}

function* _product(...iterables: unknown[][][]) {
  if (iterables.length) {
    const iterators = iterables.map(it => it[Symbol.iterator]());
    const results = iterators.map(it => it.next());

    // Cycle through iterators
    for (let i = 0; ; ) {
      if (results[i].done) {
        // Reset the current iterator
        iterators[i] = iterables[i][Symbol.iterator]();
        results[i] = iterators[i].next();
        // Advance and exit if we've reached the end
        if (++i >= iterators.length) {
          return;
        }
      } else {
        yield results.map(({ value }) => value);
        i = 0;
      }
      results[i] = iterators[i].next();
    }
  }
  return;
}

export {
  componentAttributesToTests
}
