// src/App.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import SopaDeLetras from '../components/SopaDeLetras.jsx'

const root = ReactDOM.createRoot(document.querySelector('.sidebar'))
root.render(
  <>
    <SopaDeLetras />
  </>   
)

export default App;
