import './App.css';
import React, { Component } from 'react'
import HomeMain from './component/main/HomeMain'
import HomeHeader from './component/main/HomeHeader'

function App() {
  return (
    <div className="App">
      <HomeHeader title="Blog"/>
      <HomeMain/>
    </div>
  );
}

export default App;
