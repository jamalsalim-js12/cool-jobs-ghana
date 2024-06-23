import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
