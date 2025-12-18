import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import ReportCrime from "./pages/ReportCrime";
import SafeRoute from "./pages/SafeRoute";        // <-- ADD THIS
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider, useAuth } from "./context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    return (
      <div className="text-center text-red-500 mt-10">
        Please login to access this page.
      </div>
    );
  }
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/map"
            element={
              <ProtectedRoute>
                <MapPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/report-crime"
            element={
              <ProtectedRoute>
                <ReportCrime />
              </ProtectedRoute>
            }
          />

          {/* 🔥 SAFE ROUTE PAGE PROTECTED ROUTE */}
          <Route
            path="/safe-route"
            element={
              <ProtectedRoute>
                <SafeRoute />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}









