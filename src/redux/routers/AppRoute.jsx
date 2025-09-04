import { Suspense, lazy } from "react";
import { Route,Routes } from "react-router-dom";
export default function AppRoute() {
  const Login = lazy(() => import("../../pages/Login.jsx"));
  const Register = lazy(() => import("../../pages/Registration.jsx"));
  const Mylibrary = lazy(() => import("../../pages/Mylibrary.jsx"));
  const Myreading = lazy(() => import("../../pages/Myreading.jsx"));
  const Recommendation = lazy(() => import("../../pages/Recommendation.jsx"));
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Mylibrary />}></Route>
          <Route path="/mylibrary" element={<Mylibrary />}></Route>
          <Route path="/myreading" element={<Myreading />}></Route>
          <Route path="/recommendation" element={<Recommendation />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
