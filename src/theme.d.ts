import {
  PaletteColor,
  PaletteColorOptions,
  ThemeOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    // [key: string]: PaletteColor; Generic approach. Works, but typescript does not give a hint about created colors
    snowy: PaletteColor;
    grayLight: PaletteColor;
    grayDark: PaletteColor;
  }
  interface PaletteOptions {
    // [key: string]: PaletteColorOptions;
    snowy: PaletteColorOptions;
    grayLight: PaletteColorOptions;
    grayDark: PaletteColorOptions;
  }
}
