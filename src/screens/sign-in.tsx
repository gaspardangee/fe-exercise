import React, { useState } from "react";
import { InputDefault } from "../components/inputs/input-default";
import { ButtonDefault } from "../components/buttons/button-default";
import { Success } from "../components/notification/success";
import { Warning } from "../components/notification/warning";
import { Danger } from "../components/notification/danger";
import data from "../../db/data.json";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [showDanger, setShowDanger] = useState(false);
    
    const [userData, setUserData] = useState()
    
    function catchEmail(event) {
        setEmail(event.target.value);
    }

    function catchPassword(event) {
        setPassword(event.target.value);
    }

//Função para Iniciar Sessão

    function handleSignIn() {
        if (!email || !password) {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 5000);
        } else {
            const user = data.users.find(
                (user) => user.email === email && user.password === password
            );

            if (user) {
                setShowSuccess(true);
                
                //Armazena os dados de usuário no Storage Local
                localStorage.setItem('userId', user.id)
                localStorage.setItem('userEmail', user.email)
                localStorage.setItem('userFirstName', user.firstName)
                localStorage.setItem('userLastName', user.lastName)
                localStorage.setItem('userName', user.firstName+" "+user.lastName)
                
                setTimeout(() => {
                    location.href = "/perfil";
                }, 1000);

                setTimeout(() => {
                    setShowSuccess(false);
                }, 5000);
            } else {
                setShowDanger(true);
                setTimeout(() => {
                    setShowDanger(false);
                }, 5000);
            }
        }
    }

    return (
        <div className="flex h-screen">
            {showWarning && <Warning message={"Preencha os campos em branco."} />}
            {showDanger && <Danger message={"Email ou senha incorretos."} />}
            {showSuccess && <Success message={"Bem-vindo de volta."} />}

            <aside className="bg-main-background bg-cover w-full flex flex-col items-center gap-16 justify-center">
                <a href="/" className="font-title text-6xl text-emerald-400">
                    Rapidinho
                </a>
                <form className="flex flex-col gap-4 w-full px-16 items-center w-96">
                    <InputDefault
                        type="email"
                        onChange={catchEmail}
                        value={email}
                        placeholder="Email"
                    />
                    <InputDefault
                        type="password"
                        onChange={catchPassword}
                        value={password}
                        placeholder="Senha"
                    />
                    <ButtonDefault onClick={handleSignIn}>Entrar</ButtonDefault>
                </form>
            </aside>
        </div>
    );
}
