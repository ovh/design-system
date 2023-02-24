export enum OdsCartRounded {
  /** all borders are rounded */
  all = 'all',
  /** no border rounded */
  none = 'none',
  /** only the left and right border top are rounded */
  top = 'top'
}

export type OdsCartRoundedUnion = `${OdsCartRounded}`;

export const OdsCartRoundedList = Object.keys(OdsCartRounded)
  .map((key) => OdsCartRounded[key as keyof typeof OdsCartRounded]);

