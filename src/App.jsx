import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 transition-colors duration-300">
      <Router>
        {/* Navbar */}
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex flex-1">
          {/* Sidebar */}
          {sidebarOpen && (
            <aside className="w-64 p-4 bg-gray-200 transition-all">
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="hover:text-blue-500">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-500">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-500">Contact</Link>
                </li>
              </ul>
            </aside>
          )}

          {/* Main Content */}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;








  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // return (
  //   // <div className={darkMode ? "dark" : ""}>
  //   <div>

  //     <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
  //       <Router>
  //         {/* Navbar */}
  //         <Navbar
  //           darkMode={darkMode}
  //           setDarkMode={setDarkMode}
  //           sidebarOpen={sidebarOpen}
  //           setSidebarOpen={setSidebarOpen}
  //         />
