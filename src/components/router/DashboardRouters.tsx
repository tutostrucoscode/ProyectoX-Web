import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

function DashboardRouters() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />

      </Routes>
    </>
  );
}

export default DashboardRouters;
