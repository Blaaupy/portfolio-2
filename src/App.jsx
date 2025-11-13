import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/portfolio-2" element={<Home />} />
              <Route path="/portfolio-2/about" element={<About />} />
              <Route path="/portfolio-2/projects" element={<Projects />} />
              <Route path="/portfolio-2/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
