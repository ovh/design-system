global.MutationObserver = jest
  .fn<MutationObserver, [MutationCallback]>()
  .mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    takeRecords: jest.fn(),
  }));
