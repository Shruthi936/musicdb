import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreatePlaylist from "./pages/CreatePlaylist";
import PlaySong from "./pages/PlaySong";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-playlist" element={<CreatePlaylist />} />
        <Route path="/song/:id" element={<PlaySong />} />
      </Routes>
    </Router>
  );
}

export default App;
