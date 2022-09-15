import Ordenes from "./components/views/Ordenes"
import Menu from "./components/views/Menu"
import NuevoPlato from "./components/views/NuevoPlato"
import Sidebar from "./components/ui/Sidebar"


import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <div className="md:flex">
      <Sidebar/>
      <div className="md:w-3/5 xl:w-4/5">

      <Routes>
        <Route path="/" element={<Ordenes/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/nuevoplato" element={<NuevoPlato/>} />
      </Routes>

      </div>

    </div>
  )
}