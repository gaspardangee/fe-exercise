import React, { ComponentProps } from "react";

interface PropsButtonDefault extends ComponentProps <'a'>{

}
//Botão padrão
export function ButtonDefault(props: PropsButtonDefault){
    return(
        <a {...props} className="bg-emerald-400 w-3/6 h-10 rounded-lg text-emerald-950 flex items-center justify-center cursor-pointer" />
    )
}