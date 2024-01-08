import RaceCard from "@/components/RaceCard/RaceCard"
import axios from "axios"
import { StyledDiv } from "./styledRaces"
import { resolve } from "styled-jsx/css"

const loadRaces = async() =>{
    try {
        const {data} = await axios.get('https://www.dnd5eapi.co/api/races')
        return data.results
    } catch (error) {
        console.error(error.message)
    }
}

export default async function Characters() {
    const data = await loadRaces()
    return(
        <StyledDiv>
            <h2>Races</h2>
            {data.map((d)=>(
                <div key={d.index}>
                    <RaceCard data={d}/>
                </div>
            ))}
        </StyledDiv>
    )
}