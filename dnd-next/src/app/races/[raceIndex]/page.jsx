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

            await Promise.all(traitsPromises);
        }
        if(data.subraces.length) {
            const subracesPromises = data.subraces.map(async (sub) => {
                const response = await axios.get(`https://www.dnd5eapi.co${sub.url}`);
                sub.data = response.data;
                if(sub.data.racial_traits.length){
                    const racialTraitProsises = sub.data.racial_traits.map(async(trait)=>{
                        const response = await axios.get(`https://www.dnd5eapi.co${trait.url}`)
                        trait.desc = response.data.desc[0]
                        return
                    })

                    await Promise.all(racialTraitProsises)
                }
                return
            });

            await Promise.all(subracesPromises);
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
                        <li key={ability.ability_score.name}>{scoreTranslation[ability.ability_score.name]} in {ability.bonus}</li>
                    ))}
                </ul>
                {race.starting_proficiencies.length ? (
                    <div>
                        <h4>Starting Proficiencies</h4>
                        <ul>
                            {race.starting_proficiencies.map(pro=>(
                                <li key={pro.index}>{pro.name}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}
                {race.traits.length ? (
                    <div>
                        <h4>Traits</h4>
                        {race.traits.map(trait => (
                            <p key={trait.name}>{trait.name}: {trait.desc}</p>
                        ))}
                    </div>
                ) : null}
                {race.subraces.length ? (
                    <div>
                        <h3>Subrace</h3>
                        {race.subraces.map(sub=>(
                            <div key={sub.name}>
                                <h4>{sub.name}</h4>
                                <p>{sub.data.desc}</p>
                                {sub.data.starting_proficiencies.length ? (
                                    <div>
                                        <h5>Starting Proficiencies</h5>
                                        <ul>
                                        {sub.data.starting_proficiencies.map(pro=>(
                                            <li key={pro.index}>{pro.name}</li>
                                        ))}
                                        </ul>
                                    </div>
                                ) : null}
                                {sub.data.ability_bonuses.length ? (
                                    <div>
                                        <p>Your {scoreTranslation[sub.data.ability_bonuses[0].ability_score.name]} increases by {sub.data.ability_bonuses[0].bonus}</p>
                                    </div>
                                ) : null}
                                {sub.data.racial_traits.length ? (
                                    <div>
                                        <h5>Racial Traits</h5>
                                        {sub.data.racial_traits.map(trait=>(
                                            <p>{trait.name}: {trait.desc}</p>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
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