import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Lndcx from './pages/lndcx'
import Home from './pages/home'
import RoomDetail from './pages/roomDetail'
import UserDetail from './pages/userDetail'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lndcx />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms/:roomId" element={<RoomDetail RoomId={req.params.roomId} />} />
        <Route path="/users/:userId" element={<UserDetail UserId={req.params.userId} />} />
      </Routes>
    </Router>
  )
}

export default App
