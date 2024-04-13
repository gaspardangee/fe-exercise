import { Home } from "./screens/home"
import { SignIn } from "./screens/sign-in"
import { Profile } from "./screens/profile"

import { BrowserRouter, Routes, Route } from "react-router-dom"

export function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/entrar" 
        Component={localStorage.getItem("userId") == null ? SignIn : Profile}
        /* restriçao de acesso caso não esteja com a sessão iniciada */ />
        <Route path="/perfil" 
        Component={localStorage.getItem("userId") == null ? Home : Profile}
        /* restriçao de acesso caso não esteja com a sessão iniciada */ />
        <Route path="*" Component={Home}
        /* Tela para quando se for para uma rota inválida. */ />
      </Routes>
    </BrowserRouter>
  )
}
