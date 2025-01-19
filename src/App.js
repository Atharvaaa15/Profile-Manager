import "./App.css";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Navigation } from "./components/Navigation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh", // min-h-screen
          display: "flex",
          flexDirection: "column", // flex-col
          backgroundColor: "#F9FAFB", // bg-gray-50
        }}
      >
        <Navigation />
        <main
          style={{
            width: "100%",
            maxWidth: "1280px", // container width equivalent (approximation)
            margin: "0 auto", // mx-auto
            paddingLeft: "1rem", // px-4
            paddingRight: "1rem", // px-4
            paddingTop: "2rem", // py-8
            paddingBottom: "2rem", // py-8
            flexGrow: 1, // flex-grow
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/map/:profileId" element={<MapView />} /> */}
          </Routes>
        </main>
        <Footer />
        {/* <Toaster /> */}
      </div>
    </Router>
  );
}

export default App;
