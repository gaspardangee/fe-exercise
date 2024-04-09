import { Home } from "./screens/home"
import { SignIn } from "./screens/sign-in"
import { Table } from "./screens/table"

import { BrowserRouter, Routes, Route } from "react-router-dom"

export function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/entrar" Component={SignIn} />
        <Route path="/tabela" Component={Table} />
      </Routes>
    </BrowserRouter>
  )
}
