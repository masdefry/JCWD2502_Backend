import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar';

// routes
import routes from './routes/routes';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((value) => value)}
      </Routes>
    </>
  );
}

export default App;
