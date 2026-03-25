// App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Solutions from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/about" element={<Solutions />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;