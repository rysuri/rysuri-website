import "./css/App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/footer.jsx";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
