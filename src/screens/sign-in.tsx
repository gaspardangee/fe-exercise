import React from "react"
import Logo from "../assets/logo.svg"
import { InputDefault } from "../components/inputs/input-default"
import { ButtonDefault } from "../components/buttons/button-default"

export function SignIn(){
    return(
        <div className="flex h-screen font-title">
            <main className="max-w-screen bg-white w-[34vw] flex justify-center items-center">
                
                <form action="" className="flex flex-col gap-4 w-full px-16 items-center">
                    
                    <InputDefault type="text" name="" id="" placeholder="Código de acesso" />
                    <InputDefault type="password" name="" id="" placeholder="Palavra passe" />
                    
                    <ButtonDefault type="submit">Iniciar Sessão</ButtonDefault>
                
                </form>

            </main>
            <aside className="bg-main-background bg-cover w-[66vw] flex items-center justify-center">
                <a href="/">
                    <img src={Logo} alt="" className="w-96" />
                </a>
            </aside>
        </div>
    )
}