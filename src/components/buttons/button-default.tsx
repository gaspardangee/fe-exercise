import React, { ComponentProps } from "react";

interface PropsButtonDefault extends ComponentProps <'button'>{

}

export function ButtonDefault(props: PropsButtonDefault){
    return(
        <button {...props} className="bg-emerald-400 w-3/6 h-10 rounded-lg text-emerald-950" />
    )
}