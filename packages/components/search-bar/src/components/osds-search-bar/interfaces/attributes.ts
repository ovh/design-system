
interface OdsSearchbarOption {
  label: string;
  value: string;
}

interface OdsSearchBarAttribute {
  /** Indicates if the search-bar is contrasted or not: see component principles */
  contrasted?: boolean;
  /** Indicates if the search-bar is disabled or not: see component principles */
  disabled?: boolean;
  /** Indicates if the search-bar is in loading state or not */
  loading?: boolean;
  /** List of the options on the select */
  options?: OdsSearchbarOption[];
  /** Placeholder text for the search-bar */
  placeholder?: string;
  /** Current value of the search-bar */
  value: string;
}

export {
  OdsSearchBarAttribute,
  OdsSearchbarOption,
};