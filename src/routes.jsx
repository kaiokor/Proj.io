import EstilosGlobais from "./Componente/EstilosGlobais"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaApresentacao from "./Paginas/PaginaApresentacao"
import PaginaLogin from "./Paginas/login"

function AppRoutes() {
  return (
    <>
      <EstilosGlobais></EstilosGlobais>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<PaginaApresentacao/>}/>
              <Route path="login" element={<PaginaLogin/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
