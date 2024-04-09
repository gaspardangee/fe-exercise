import React from "react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface iconButtonProps extends ComponentProps <'button'>{
    transparent?: boolean
}

export function IconButton({transparent, ...props}: iconButtonProps){
    return(
        <button
        {...props}
        className={twMerge(
            'border border-white/10 rounded-md p-1.5 text-emerald-300',
            transparent ? "bg-black/10" : "bg-white/10",
            props.disabled ? "opacity-50" : null
        )}
            
        />
    )
}

