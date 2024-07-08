import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { Hero, Home } from "./Routes/index";
import AuthProvider from "./context/Authcontext";
const Spinner = lazy(()=> import("./Layout/sub-components/Spinner")) 
import { Login,Signup } from "./auth/index";
import PrivateRoute from "./context/PrivateRoute";
function App() {
  return (
    <>
      <AuthProvider>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Hero />} />
              <Route
                path="dashboard"
                element={<PrivateRoute element={<Outlet />} />}
              >
                <Route index element={<Home />} />
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </>
  );
}

export default App;
