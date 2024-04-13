import { LayoutDashboard, LogOut, User2 } from "lucide-react";
import React from "react";

export function ProfileInfo(){

    function handleSignOut(){
        localStorage.clear()
        location.href = "/";
      }

    const userName = localStorage.getItem('userName');

    //Componente que mostra toda a informação do usuário

    return(
        <div>
            <aside className="flex gap-8 flex-col items-center justify-between w-80 bg-zinc-800 border-2 border-zinc-700 rounded-xl p-8">
                <div className="flex flex-col gap-10 w-full">
                    <a href="/" className="font-title text-3xl text-emerald-400 text-center flex flex-col gap-4 items-center">
                    <User2 className="size-20" />
                        {userName}
                    </a>
                    <div className="w-full flex flex-col gap-4">
                        <a href="/perfil" className="bg-zinc-700 py-2 px-4 rounded-lg flex items-center gap-4 cursor-pointer hover:ring-1 hover:ring-zinc-500 hover:bg-zinc-600">
                            <LayoutDashboard className="size-6 text-emerald-500" />
                            Perfil & Publicações
                        </a>
                    </div>
                </div>
                <a onClick={handleSignOut} className="w-full bg-zinc-700 py-2 px-4 rounded-lg flex items-center gap-4 cursor-pointer hover:ring-1 hover:ring-zinc-500 hover:bg-zinc-600">
                    <LogOut className="size-6 text-emerald-500" />
                    Terminar Sessão
                </a>
            </aside>
        </div>
    )
}