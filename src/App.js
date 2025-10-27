import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Loging from "./page/Loging/Loging";
import TopUrbanismo from "./page/TopUrbanismo/TopUrbanismo";
import Indicadores from "./page/Indicadores/Indicadores";
import Admin from "./page/Admin/Admin";
import PageNotFound from "./page/PageNotFound/PageNotFound";
import Ventas from "./page/ventas/Ventas";
import Ventascalle2 from "./page/Ventascalle2/ventascalle";
import { PasswordProvider, PasswordContext } from "./PasswordContext/PasswordContext";

function ProtectedRoute({ children, roles }) {
  const { isAuthenticated, role: userRole } = useContext(PasswordContext);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  if (roles && !roles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <PasswordProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loging />} />

          <Route
            path="TopUrbanismo"
            element={
              <ProtectedRoute roles={["admin"]}>
                <TopUrbanismo />
              </ProtectedRoute>
            }
          />

          <Route
            path="Indicadores"
            element={
              <ProtectedRoute roles={["admin"]}>
                <Indicadores />
              </ProtectedRoute>
            }
          />

          <Route
            path="Admin"
            element={
              <ProtectedRoute roles={["admin"]}>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route
            path="Ventas"
            element={
              <ProtectedRoute roles={["admin", "ventas"]}>
                <Ventas />
              </ProtectedRoute>
            }
          />

          <Route
            path="Ventascalle2"
            element={
              <ProtectedRoute roles={["admin", "ventas"]}>
                <Ventascalle2 />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={
              <ProtectedRoute roles={["admin", ""]}>
                <PageNotFound />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </PasswordProvider>
  );
}

export default App;
