import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "./components/Logo";
import Navigation from "./pages/Auth/Navigation";

function App() {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className="py-3">
        <Logo
          src="/src/assets/final-logo.png"
          alt="Logo"
          className="flex items-center justify-center h-20"
        />
        <hr className="mt-[2rem]"/>
        <Outlet />
      </main>
    </>
  );
}

export default App;
