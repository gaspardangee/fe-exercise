import React from "react";
import Car from "../assets/car.png"
import { ButtonDefault } from "../components/buttons/button-default";

export function Home(){
    return(
        <div className="max-w-full xl:h-screen h-full py-0 mx-auto flex flex-col gap-5 bg-main-background bg-cover font-title">
            <header className="flex font-bold justify-between py-10 px-12 items-center">
                <a href="/" className="font-title text-3xl text-emerald-400">
                    Rapidinho
                </a>
                <div>
                    <ul className="flex gap-8 items-center">
                        <li>
                            <a href="/entrar">
                                <button className="bg-emerald-50 px-4 py-2 rounded-md text-emerald-950 hover:bg-emerald-100">
                                    Começar
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="flex flex-col xl:flex-row items-center justify-between px-24">
                <aside className="flex flex-col gap-8">
                    <h1 className="xl:text-8xl md:text-6xl text-4xl">É símples, <br />
                        Rápido e <br />
                        <span className="text-emerald-300">Seguro.</span>
                    </h1>
                    <p className="text-justify">Transforme a venda do seu carro em uma corrida emocionante! Descubra como podemos acelerar o processo. Visite-nos e experimente a velocidade da venda em primeira mão!</p>
                
                    <ButtonDefault href="/entrar">
                        Começar
                    </ButtonDefault>
                    
                </aside>
                <img src={Car} alt="" className="xl:w-6/12 w-full" />
            </main>
        </div>
    )
}