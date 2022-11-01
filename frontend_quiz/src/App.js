import RouterConf from "./Hooks/RouterConf";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App font-Josefin">
      <Navbar />
      <RouterConf />
      <ToastContainer />
    </div>
  );
}

export default App;
