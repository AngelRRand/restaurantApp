import Ordenes from "./components/views/Ordenes"
import Menu from "./components/views/Menu"
import NuevoPlato from "./components/views/NuevoPlato"
import Sidebar from "./components/ui/Sidebar"


import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Ordenes/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/nuevoplato" element={<NuevoPlato/>} />
      </Routes>
    </>
  )
}