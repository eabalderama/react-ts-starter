export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  inverseBubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  cardBorder: string;
  borderColor: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  disabled: string;

  backgroundColor: string,
  thugswapYellow: string,
  inputBackground: string,
  shadowColor: string,
  mercuryGray: string,
  text1: string,
  text2: string,
  text3: string,
  white: string,
  bg1: string,
  bg2: string,
  bg3: string,
  bg5: string,
  bg6: string,
  advancedBG: string,
  divider: string,
  primary1: string,
  yellow2: string,
  link: string,
  blue: string,

  // Gradients
  gradients: Gradients;

  // Additional colors
  binance: string;
  overlay: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
