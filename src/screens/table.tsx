import React from "react";
import { Header } from "../components/header";
import { AttendeeList } from "../components/attendee-list";

export function Table(){
    return(
        <div className="max-w-[1216px] py-5 mx-auto flex flex-col gap-5">
        <Header />
        <AttendeeList />
        </div>
    )
}