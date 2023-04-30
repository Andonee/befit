import { styled } from "@mui/material";

import { Routes } from "./components";
import { ThemeProvider } from "./components";

function App() {
  return (
    <ThemeProvider>
      <AppWrapper>
        <Routes />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled("div")`
  display: flex;
  width: 100vw;
`;
