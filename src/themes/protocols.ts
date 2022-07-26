export interface Breakpoints {
  smaller: string;
  small: string;
  medium: string;
  big: string;
  bigger: string;
  maxSize: string;
}

export interface Colors {
  [key: string]: string;
}
export interface Fonts {
  fontFamily: string;
  fontSize: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    g: string;
    gg: string;
    xg: string;
    xxg: string;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    xs: string;
    sm: string;
    md: string;
    g: string;
    gg: string;
    xg: string;
    xxg: string;
  };
}
export interface Spacing {
  small: {
    tiny: string;
    little: string;
    medium: string;
    great: string;
    bigger: string;
  };
  mid: {
    tiny: string;
    little: string;
    medium: string;
    great: string;
    bigger: string;
  };
  large: {
    tiny: string;
    little: string;
    medium: string;
    great: string;
    bigger: string;
  };
  boxes: {
    even: {
      tiny: string;
      little: string;
      medium: string;
      great: string;
      bigger: string;
    };
    double: {
      tiny: string;
      little: string;
      medium: string;
      great: string;
      bigger: string;
    };
  };
}
export interface Borders {
  width: {
    none: string;
    hairline: string;
    thin: string;
    thick: string;
    heavy: string;
  };
  radius: {
    none: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    circular: string;
  };
}

export interface ThemeBody {
  breakpoints: Breakpoints;
  colors: Colors;
  fonts: Fonts;
  spacing: Spacing;
  borders: Borders;
}
