import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./styles/global.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-[whitesmoke] min-h-screen w-full">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
