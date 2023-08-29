import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar';

// Pages
import Home from './pages/home';
import HotelList from './pages/hotellist';
import HotelDetail from './pages/hoteldetail';
import BusList from './pages/buslist';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel/search' element={<HotelList />} />
        <Route path='/hotel/detail' element={<HotelDetail />} />
        <Route path='/bus/search' element={<BusList />} />
      </Routes>
    </>
  );
}

export default App;
