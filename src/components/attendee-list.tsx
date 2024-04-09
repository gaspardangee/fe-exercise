import React, { ChangeEvent, useState } from "react"
import {Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight} from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { TableRow } from "./table/table-row"
import { attendees } from "../data/attendees"

import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/pt"

dayjs.extend(relativeTime)
dayjs.locale('pt')

export function AttendeeList(){

    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(attendees.length / 10)

    function OnSearchInputChanged(event: ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value)
    }

    function goToNextPage(){
        setPage(page+1)
    }

    function goToPreviousPage(){
        setPage(page-1)
    }

    function goToFirstPage(){
        setPage(1)
    }

    function goToLastPage(){
        setPage(totalPages)
    }
    return(
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Veículos</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input
                    onChange={OnSearchInputChanged} type="text"
                    placeholder="Buscar Veículos..."
                    className="bg-transparent flex-1 border-0 p-0 text-sm focus:ring-0" />
                </div>
                {search}
            </div>

            <Table>

                <thead>
                    <tr className="border-b border-white/10">
                        <TableHeader style={{width: 48}}>
                            <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10" />
                        </TableHeader>
                        <TableHeader>
                            Código
                        </TableHeader>
                        <TableHeader>
                            Veículo
                        </TableHeader>
                        <TableHeader>
                            Data de incerção
                        </TableHeader>
                        <TableHeader>
                            Última actividade
                        </TableHeader>
                        <TableHeader style={{width: 64}} />
                    </tr>
                </thead>
                <tbody>
                    {attendees.slice((page -1) * 10, page * 10).map((attendee) => {
                        return(
                            <TableRow key={attendee.id}>
                                <TableCell>
                                    <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10" />
                                </TableCell>
                                <TableCell>
                                    attendee.id
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white">{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    { dayjs().to(attendee.createdAt)
                                    /*attendee.createdAt.toISOString()*/ }
                                </TableCell>
                                <TableCell>
                                    { dayjs().to(attendee.checkedInAt) }
                                </TableCell>
                                <TableCell>
                                    <IconButton transparent>
                                        <MoreHorizontal className="size-4" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>
                            Mostrando 10 de {attendees.length}
                        </TableCell>
                        <TableCell colSpan={3} className="text-right">
                            <div className="inline-flex items-center gap-8">
                            Página {page} de {totalPages}
                                <div className="flex gap-1.5">
                                    <IconButton onClick={goToFirstPage} disabled={page === 1}>
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                                        <ChevronsRight className="size-4" />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}