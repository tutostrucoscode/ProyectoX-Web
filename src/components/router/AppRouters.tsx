import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
