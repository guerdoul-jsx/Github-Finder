import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Alert from "./Components/layout/Alert";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="Github Finder" />

        <main className="container flex-1 px-3 pb-12 mx-auto">
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<User />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
