export var OdsCartRounded;
(function (OdsCartRounded) {
  /** all borders are rounded */
  OdsCartRounded["all"] = "all";
  /** no border rounded */
  OdsCartRounded["none"] = "none";
  /** only the left and right border top are rounded */
  OdsCartRounded["top"] = "top";
})(OdsCartRounded || (OdsCartRounded = {}));
export const OdsCartRoundedList = Object.keys(OdsCartRounded)
  .map((key) => OdsCartRounded[key]);
