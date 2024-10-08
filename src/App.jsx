import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import Page from './components/Page';
import SearchResults from './components/SearchResults';


export default function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/article/:index" element={<Page />} />
          <Route path="/search-results" element={<SearchResults />} /> {/* Add search results route */}

        </Routes>


      </div>

    </Router>

  )
}
