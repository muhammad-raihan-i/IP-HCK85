import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Indcx from './pages/indcx'
import Home from './pages/home'
import Register2 from './pages/register'
import RoomDetail from './pages/roomDetail'
import UserDetail from './pages/userDetail'
import Logout from "./pages/logout"
import Me from "./pages/me"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Indcx />} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/me" element={<Me/>}/>
        <Route path="/register" element={<Register2 />} />
        <Route path="/rooms/:roomId" element={<RoomDetail />} />
        <Route path="/users/:userId" element={<UserDetail />} />

      </Routes>
    </Router>
  )
}

export default App
