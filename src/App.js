import './App.css';
import Foto from './Components/Foto';
import React from "react";
import Hobbies from "./Pages/Hobbies";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Time from "./Pages/Time";
import Muso from "./Pages/Muso";
import {BrowserRouter, Route,Routes} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/time" element={<Time />} />
      <Route path="/muso" element={<Muso />} />
      <Route path="/musofoto" element={<Foto />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
