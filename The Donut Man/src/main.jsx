import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import Menu from './pages/Menu.jsx';
import History from './pages/History.jsx';
import Careers from './pages/Careers.jsx';
import Navbar from './components/Navbar.jsx'
import FeaturedItems from './pages/FeaturedItems.jsx';
import Application from './pages/Application.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/featured" element={<FeaturedItems />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/history" element={<History />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/application" element={<Application />} />
    </Routes>
  </BrowserRouter>,
)
