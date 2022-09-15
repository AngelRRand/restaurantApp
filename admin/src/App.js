import Ordenes from "./components/paginas/Ordenes"


import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Ordenes/>} />
      </Routes>
    </>
  )
}