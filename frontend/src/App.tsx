import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Index from "./views/Index";
import PageNotFound from "./views/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./views/AppLayout";
import Home from "./views/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="login" element={<Login />} />

          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="home/" element={<Home />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
