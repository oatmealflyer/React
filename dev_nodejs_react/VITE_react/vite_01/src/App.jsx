import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Inp from "./pages/Ex01"
import Inp2 from "./pages/Ex02"
import Inp3 from "./pages/Ex03"
import Sel from "./pages/Ex04"
import Radio from "./pages/Ex05"
import Check from "./pages/Ex06"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/ex01">예제1</Link> |{""}
      <Link to="/ex02">예제2</Link> |{""}
      <Link to="/ex03">예제3</Link> |{""}
      <Link to="/ex04">예제4</Link> |{""}
      <Link to="/ex05">예제5</Link> |{""}
      <Link to="/ex06">예제6</Link> |{""}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ex01" element={<Inp />}></Route>
        <Route path="/ex02" element={<Inp2 />}></Route>
        <Route path="/ex03" element={<Inp3 />}></Route>
        <Route path="/ex04" element={<Sel />}></Route>
        <Route path="/ex05" element={<Radio />}></Route>
        <Route path="/ex06" element={<Check />}></Route>
      </Routes>
    </>
  )
}

export default App