import Ordenes from "./components/paginas/Ordenes"
import Menu from "./components/paginas/Menu"
import NuevoPlato from "./components/paginas/NuevoPlato"


import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Ordenes/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/nuevoplato" element={<NuevoPlato/>} />
      </Routes>
    </>
  )
}