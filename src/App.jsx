import { useState } from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import Home from './pages/Home'


import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
