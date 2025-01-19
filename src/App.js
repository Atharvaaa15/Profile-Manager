import "./App.css";

import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer";
import { Navigation } from "./components/Navigation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F9FAFB",
        }}
      >
        <Navigation />
        <main
          style={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            flexGrow: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* <Route path="/map/:profileId" element={<MapView />} /> */}
          </Routes>
        </main>
        <Footer />
        {/* <Toaster /> */}
      </div>
    </Router>
  );
}

export default App;
