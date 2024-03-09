import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import './App.css';
import MovieDialog from './components/MovieDialog';

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Toaster />
      <MovieDialog />
    </div>
  );
}

export default App;
