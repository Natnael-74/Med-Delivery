import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div>
        <>
          <Navbar />
          <hr />
          <div className="flex w-full">
            <Sidebar />
          </div>
        </>
      </div>
    </div>
  );
}

export default App;
