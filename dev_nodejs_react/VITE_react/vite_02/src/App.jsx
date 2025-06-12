import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Css from './pages/Ex07'
import TodoList from './pages/Ex08'
import Eff from './pages/Ex09'
import FetchData from './pages/Ex10'
import UseM from './pages/Ex11'

function App() {
  return (
    <>
      <Link to="/">Home</Link> | {" "}
      <Link to="/ex07">Ex07</Link> | {" "}
      <Link to="/ex08">Ex08</Link> | {" "}
      <Link to="/ex09">Ex09</Link> | {" "}
      <Link to="/ex10">Ex10</Link> | {" "}
      <Link to="/ex11">Ex11</Link> | {" "}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex07" element={<Css />} />
        <Route path="/ex08" element={<TodoList />} />
        <Route path="/ex09" element={<Eff />} />
        <Route path="/ex10" element={<FetchData />} />
        <Route path="/ex11" element={<UseM />} />
      </Routes>
    </>
  )
}

export default App
