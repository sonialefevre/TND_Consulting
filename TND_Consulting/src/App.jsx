import Header from '../src/components/Header';
import Home from "../src/components/Home";
import categories from '../src/catgeories';

import { useState } from 'react'
import logo from "../src/assets/logo.png"
import './App.css'

function App() {

  return (
    <div className="App">
      <Header categories={categories} logo={logo} />
      <Home />
    </div>
  )
}

export default App
