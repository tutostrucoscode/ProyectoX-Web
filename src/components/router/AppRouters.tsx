import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AccentSidebarLayout from "../common/AccentSidebarLayout";
import SuspenseLoader from "../common/SuspenseLoader";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Register = Loader(lazy(() => import("../pages/Register")));
const Login = Loader(lazy(() => import("../pages/Login")));
const Dashboard = Loader(lazy(() => import("../pages/Dashboard/Home")));

function AppRouters() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="login" element={<Login />} />
      <Route path="registro" element={<Register />} />
      <Route path="dashboard" element={<AccentSidebarLayout />}>
        <Route path="management" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
    </Routes>
  );
}

export default AppRouters;
