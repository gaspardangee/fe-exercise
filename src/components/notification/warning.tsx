import React from "react";
import { TriangleAlert } from "lucide-react"

interface PropsWarning{
    message: string
}

//Mensagem de alerta - Atenção

export function Warning(props: PropsWarning){
    return(
        <div className="absolute m-8 flex items-center w-full max-w-xs p-4 mb-4 bg-yellow-100/20 rounded-lg">
            <div className="p-2 text-yellow-500 bg-yellow-200 rounded-lg">
                <TriangleAlert className="size-5 text-yellow-800" />
                <span className="sr-only" />
            </div>
            <div className="ms-3 text-sm font-normal text-zinc-950">{props.message}</div>
        </div>
    )
}
