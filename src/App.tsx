import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import AppRouters from "./components/router/AppRouters";
import ThemeProvider from "./theme/ThemeProvider";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <AppRouters />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
