import React from "react"
import Sidebar from './components/Sidebar';
import Homepage from './components/page/Homepage';
import { Route, Routes } from "react-router-dom";
import FavoritePage from "./components/page/FavoritePage";

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
