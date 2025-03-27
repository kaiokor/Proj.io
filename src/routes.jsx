import EstilosGlobais from "./Componente/EstilosGlobais"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaApresentacao from "./Paginas/PaginaApresentacao"
import PaginaLogin from "./Paginas/login"
import PaginaProjeto from "./Paginas/PaginaProjeto"

function AppRoutes() {
  return (
    <>
      <EstilosGlobais></EstilosGlobais>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<PaginaApresentacao/>}/>
              <Route path="login" element={<PaginaLogin/>}/>
              <Route path="Projeto" element={<PaginaProjeto/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
