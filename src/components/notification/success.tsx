import React from "react";
import { CheckCircle } from "lucide-react"

interface PropsSuccess{
    message: string
}

//Mensagem de alerta - Sucesso

export function Success(props: PropsSuccess){
    return(
        <div className="absolute m-8 flex items-center w-full max-w-xs p-4 mb-4 bg-emerald-100 rounded-lg">
            <div className="p-2 text-emerald-500 bg-emerald-200 rounded-lg">
                <CheckCircle className="size-5 text-emerald-600" />
                <span className="sr-only" />
            </div>
            <div className="ms-3 text-sm font-normal text-zinc-950">{props.message}</div>
        </div>
    )
}