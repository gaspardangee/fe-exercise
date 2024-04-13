import React from "react";

interface PropsPublicationSingle{
    name: string,
    date: string,
    message: string,
    title: string

}

//Componente de uma Publicacão única

export function PublicationSingle(props: PropsPublicationSingle){
    return(
            <div className="flex bg-emerald-950 hover:border-emerald-500 rounded-2xl p-12 border-2 border-emerald-800 bg-background-with-car bg-cover max-w-[450px]">
                {/* Singular Froat */}
                <div className="flex flex-col gap-4">
                    {/* Left */}
                    <div className="flex flex-col">
                        <h1 className="font-title text-4xl font-bold">{props.title}</h1>
                    </div>
                    <div className="flex gap-4">

                        <span className="flex gap-2 items-center bg-blue-500/20 py-1.5 px-3 rounded-full border border-blue-500">
                            <div className="size-2 rounded-full bg-blue-500" />
                            {props.date}
                        </span>

                    </div>
                    <p className="text-justify my-4">
                        {props.message}
                    </p>
                    <div className="flex flex-col gap-2">
                        <span className="text-md text-zinc-500">
                            Responsável
                        </span>
                        <div className="flex">
                            <div className="flex gap-4 bg-zinc-400/10 py-1.5 px-3 rounded-full border border-zinc-400/20 hover:bg-emerald-300/20 hover:border-emerald-300/20 cursor-pointer">
                                {props.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}