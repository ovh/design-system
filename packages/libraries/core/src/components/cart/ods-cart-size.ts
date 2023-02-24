export enum OdsCartSize {
  sm = 'sm'
}

export type OdsCartSizeUnion = `${OdsCartSize}`;

export const OdsCartSizeList = Object.keys(OdsCartSize)
  .map((key) => OdsCartSize[key as keyof typeof OdsCartSize]);

