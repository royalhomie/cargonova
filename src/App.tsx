import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import Favicon from './components/Favicon';
import Home from './pages/Home';
import Services from './pages/Services';
import Tracking from './pages/Tracking';
import Contact from './pages/Contact';
import About from './pages/About';
import Careers from './pages/Careers';
import Press from './pages/Press';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Tools from './pages/Tools';
import Booking from './pages/Booking';

function App() {
  return (
    <ThemeProvider>
      <Favicon />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </Layout>
        <PWAInstallPrompt />
      </Router>
    </ThemeProvider>
  );
}

export default App;
