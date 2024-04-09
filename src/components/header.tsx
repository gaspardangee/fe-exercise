import React from "react";
import { NavLink } from "./nav-link";

export function Header(){
    return(
        <div className="flex items-center gap-5 py-2">

            <nav className="flex gap-5">
                <NavLink href="/frotas" className="text-zinc-300">
                    Frotas
                </NavLink>
                <NavLink href="/veiculos">
                    Veículos
                </NavLink>
                <NavLink href="/veiculos">
                    Veículos
                </NavLink>
            </nav>
        </div>
    )
}