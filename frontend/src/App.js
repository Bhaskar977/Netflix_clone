import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Toaster />
    </div>
  );
}

export default App;
