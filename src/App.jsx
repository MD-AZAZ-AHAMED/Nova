import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // For eye-catchy page fades
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css'; // Ensure global styles including transitions are imported


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white font-sans"> {/* Global gradient + font for professional look */}
        <Navbar />
        <main className="flex-grow relative"> {/* Relative for absolute positioning if needed */}
          <TransitionGroup>
            <CSSTransition
              key={location.key} // From useLocation hook—import and use const location = useLocation();
              classNames="fade"
              timeout={500}
            >
              <div className="absolute w-full"> {/* Wrapper for transitions */}
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;