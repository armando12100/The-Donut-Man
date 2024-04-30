import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Market from './pages/Market.jsx';
import Menu from './pages/Menu.jsx';
import News from './pages/News.jsx';
import History from './pages/History.jsx';
import Careers from './pages/Careers.jsx';
import Navbar from './components/Navbar.jsx'
import FeaturedItems from './pages/FeaturedItems.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/featured" element={<FeaturedItems />} />
      <Route path="/market" element={<Market />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/news" element={<News />} />
      <Route path="/history" element={<History />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  </BrowserRouter>,
)
