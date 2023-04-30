import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider as MaterialThemeProvider,
  Container,
} from "@mui/material";

import theme from "../styles/theme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  return (
    <MaterialThemeProvider theme={theme}>
      <CssBaseline>
        <Container maxWidth={"lg"} disableGutters>
          {children}
        </Container>
      </CssBaseline>
    </MaterialThemeProvider>
  );
};
