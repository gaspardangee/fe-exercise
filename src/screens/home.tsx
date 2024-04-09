import React from "react";
import Logo from "../assets/logo.svg"
import Car from "../assets/car.png"

export function Home(){
    return(
        <div className="max-w-full py-0 mx-auto flex flex-col gap-5 h-screen bg-main-background bg-cover font-title">
            <header className="flex justify-between py-10 px-12 items-center">
                <a href="/">
                    <img src={Logo} alt="Logotipo" />
                </a>
                <div>
                    <ul className="flex gap-8 items-center">
                        <li>Quem somos</li>
                        <li>
                            <a href="/entrar">
                                <button className="bg-emerald-50 px-4 py-2 rounded-md text-emerald-950 font-bold hover:bg-emerald-100">
                                    Começar
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="flex items-center justify-between px-24">
                <aside className="flex flex-col gap-8">
                    <h1 className="text-8xl">É símples, <br />
                        Rápido e <br />
                        <span className="text-emerald-300">Seguro.</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odit blanditiis rem quaerat perferendis, et ipsam libero accusamus, autem culpa tempora cumque eius totam corporis quidem sunt minus molestiae expedita?</p>
                    <a href="/entrar">
                        <button className="bg-gradient-to-r from-emerald-300 to-emerald-500 px-4 py-2 rounded-md border border-emerald-900/20 text-emerald-950 font-bold text-xl">
                            Começar
                        </button>
                    </a>
                </aside>
                <img src={Car} alt="" className="w-6/12" />
            </main>
        </div>
    )
}