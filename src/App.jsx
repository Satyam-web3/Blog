import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import Page from './components/Page';


export default function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/article/:index" element={<Page />} />

        </Routes>


      </div>

    </Router>

  )
}
