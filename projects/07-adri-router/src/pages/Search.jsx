import { useEffect } from "react"
import { useQueryParams } from "..";

export default function SearchPage({ routeParams }) {
    useEffect(() => {
        document.title = `Has buscado ${routeParams.query}`
    }, [])
    return (
        <h1>Has buscado {routeParams.query}</h1>
    )
}