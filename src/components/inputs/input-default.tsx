import React from "react";
import { ComponentProps } from "react";

interface PropsInputDefault extends ComponentProps<'input'>{

}

export function InputDefault(props: PropsInputDefault){
    return(
        <input {...props} className="rounded-lg bg-zinc-50 border-2 border-zinc-400/5 h-14 w-full focus:ring-16" />
    )
}