import React from "react";
import { ProfileInfo } from "../components/profile-info";
import { PublicationsList } from "../components/publications-list";

const userFirstName = localStorage.getItem('userFirstName');

export function Profile(){
    return(
        <div className="flex flex-wrap p-6 gap-6 justify-center">
            <ProfileInfo />
            <main className="flex flex-col gap-8 py-4 items-end w-3/4">
                <div className="flex flex-col gap-8 py-14">
                    <div>
                        <h1 className="font-title text-3xl font-bold">Feed</h1>
                        <p className="font-title text-xl">Olá <b>{userFirstName}.</b> Veja as suas publicações mais recentes.</p>
                    </div>
                    <PublicationsList />
                </div>
            </main>
        </div>
    )
}