import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Title from './component/Title';
import About from './Pages/About';
const App = () => {
  const[change, setchange] = useState(true)
  const handleChange = () =>{
    setchange(!change);
  }
  return (
    <>
      <Title title="Book-e-sell" desc="Online Book Selling" />
      {change ? <Home /> : <About />}
      <button onClick={handleChange}>Change Page</button>
    </>

  );
}

export default App;