import React from 'react'
import Section1 from "./components/Section1"
import Result from './components/Result'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Section1 />}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </div>
  )
}

export default App