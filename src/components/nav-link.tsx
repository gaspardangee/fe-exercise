import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface NavLinkProps extends ComponentProps<'a'>{
    children: string,
}

export function NavLink(props: NavLinkProps){
    return(
        <div>
            <a {...props} className={twMerge("font-medium text-sm", props.className)}>
                {props.children}
            </a>
        </div>
    )
}