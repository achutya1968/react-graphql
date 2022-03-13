import "./App.css";
import React from "react";
import Character from "./pages/Character"
import CharacterList from "./pages/CharacterList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />}></Route>
        <Route path="/:id" element={<Character />}></Route>
      </Routes>
    </div>
  );
}

export default App;
