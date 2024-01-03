import axios from "axios"

const loadRace = async(index)=>{
    const {data} = await axios.get(`https://www.dnd5eapi.co/api/races/${index}`)
    return data
}

async function RaceDetail({params}) {
    const race = await loadRace(params.raceIndex)
    return (
        <div>
            <h3>{race.name}</h3>
            <p>{race.alignment}</p>
            <p>{race.age}</p>
            <p>{race.size_description}</p>
            <p>{race.language_desc}</p>
            <p>Your speed is {race.speed} feets</p>
        </div>
    )
}

export default RaceDetail