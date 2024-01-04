import axios from "axios"
import Image from "next/image"
import { StyledDiv } from "./StyledDetailRace"

const loadRace = async(index)=>{
    try {
        const {data} = await axios.get(`https://www.dnd5eapi.co/api/races/${index}`)
        if (data.traits.length) {
            const traitsPromises = data.traits.map(async (trait) => {
                const response = await axios.get(`https://www.dnd5eapi.co${trait.url}`);
                trait.desc = response.data.desc[0];
                return
            });

            data.desc_traits = await Promise.all(traitsPromises);
        }
        return data
    } catch (error) {
        console.error(error.message)
    }
}

async function RaceDetail({params}) {
    const race = await loadRace(params.raceIndex)

    const scoreTranslation = {
        STR: 'Strength',
        DEX: 'Dexterity',
        INT: 'Intelligence',
        CON: 'Constitution',
        WIS: 'Wisdom',
        CHA: 'Charisma'
    };

    
    return (
        <StyledDiv>
            <div>
                <h2>{race.name}</h2>
                <h3>Alignment</h3>
                <p>{race.alignment}</p>
                <h3>Age</h3>
                <p>{race.age}</p>
                <h3>Size</h3>
                <p>{race.size_description}</p>
                <h3>Lenguage</h3>
                <p>{race.language_desc}</p>
                <h3>Stats</h3>
                <p>Your speed is {race.speed} feets</p>
                <p>When you choose this race, you increase these ability scores:</p>
                <ul>
                    {race.ability_bonuses?.map(ability=>(
                        <li>{scoreTranslation[ability.ability_score.name]} in {ability.bonus}</li>
                    ))}
                </ul>
                {race.traits.length ? (
                    <div>
                        <h4>Traits</h4>
                        {race.traits.map(trait => (
                            <p key={trait.name}>{trait.name}: {trait.desc}</p>
                        ))}
                    </div>
                ) : null}
            </div>
            <div>
                <Image
                    src={`/races/${race.index}.webp`}
                    alt={race.name}
                    width={300}
                    height={420}
                />
            </div>
        </StyledDiv>
    )
}

export default RaceDetail