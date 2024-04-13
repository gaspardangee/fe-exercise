import React, { useEffect, useState } from "react"
import { PublicationSingle } from "./publication-single"
import dayjs from "dayjs";
import relativTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/pt";

dayjs.extend(relativTime)
dayjs.locale('pt')

//Listagem de publicações

export function PublicationsList(){

    const [data, setData] = useState<any>([])

    const userId = localStorage.getItem('userId');
    
    //Pega os dados todos do JSON 
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('../../db/data.json')
                const jsonData = await response.json()
                setData(jsonData)
            } catch (error) {
                console.error('Erro ao buscar os dados.', error)
            }
        }
        fetchData()
    }, [])

    //Função que pega todos os dados do usuário
    const getUserData = (userId: any) => {
        const user = data.users.find((user: any) => user.id === userId)
        return user ? user.firstName+" "+user.lastName : "Usuário não encontrado"
    }

    // Função para ordenar os posts por 'postedAt'
    const sortedPosts = data.posts && [...data.posts]
    .filter((post: any) => post.userId === userId) // Filtrar os dados mediante o ID logado
    .sort((a: any, b: any) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()); // Ordenar os posts por 'postedAt'

    return(
        <div className="flex flex-wrap gap-4">
            {sortedPosts && sortedPosts.map((post: any) => (
                <PublicationSingle key={post.postedAt} message={post.text} name={getUserData(post.userId)} date={dayjs().to(post.postedAt)} title={post.title} />
            ))}
        </div>
    )
}
