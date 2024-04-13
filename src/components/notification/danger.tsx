import React from "react";
import { AlertCircle } from "lucide-react"

interface PropsDanger{
    message: string
}

//Mensagem de alerta - Erro

export function Danger(props: PropsDanger){
    return(
        <div className="absolute m-8 flex items-center w-full max-w-xs p-4 mb-4 bg-red-100 rounded-lg">
            <div className="p-2 text-red-500 bg-red-200 rounded-lg">
                <AlertCircle className="size-5 text-red-600" />
                <span className="sr-only" />
            </div>
            <div className="ms-3 text-sm font-normal text-zinc-950">{props.message}</div>
        </div>
    )
}