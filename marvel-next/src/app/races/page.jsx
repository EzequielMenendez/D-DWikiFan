import RaceCard from "@/components/raceCard"
import axios from "axios"

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
        <div>
            <h3>Races</h3>
            {data.map((d)=>(
                <div key={d.index}>
                    <RaceCard data={d}/>
                    <button>Description</button>
                </div>
            ))}
        </div>
    )
}