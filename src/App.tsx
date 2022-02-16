import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import AppRouters from "./components/router/AppRouters";
import { store } from "./redux/store/store";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <AppRouters />
      </ThemeProvider>
    </>
  );
}

export default App;
