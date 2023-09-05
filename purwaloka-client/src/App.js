import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar';

// Pages
import Home from './pages/home';
import HotelList from './pages/hotellist';
import HotelDetail from './pages/hoteldetail';
import BusList from './pages/buslist';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/hotel/search' element={<HotelList />} />
        <Route path='/hotel/detail' element={<HotelDetail />} />
        <Route path='/bus/search' element={<BusList />} />
      </Routes>
    </>
  );
}

export default App;
