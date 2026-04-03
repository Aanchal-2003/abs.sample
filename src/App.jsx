// App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import SubServiceDetail from './pages/SubServiceDetail';
import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/services/:slug/:subSlug" element={<SubServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
