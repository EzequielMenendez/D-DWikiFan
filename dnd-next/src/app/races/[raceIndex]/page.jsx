import axios from "axios"
import {
    StyledDiv,
    TextContainer,
    ImageContainer,
    StyledImage
  } from "./StyledDetailRace";

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
            <TextContainer>
                <h2>{race.name}</h2>
                <p><strong>Alignment: </strong>{race.alignment}</p>
                <p><strong>Age: </strong>{race.age}</p>
                <p><strong>Size: </strong>{race.size_description}</p>
                <p><strong>Lenguage: </strong>{race.language_desc}</p>
                <p><strong>Speed: </strong>Your speed is {race.speed} feets</p>
                <p><strong>Ability Scores: </strong>When you choose this race, you increase these ability scores:</p>
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
                            <p key={trait.name}><strong>{trait.name}: </strong>{trait.desc}</p>
                        ))}
                    </div>
                ) : null}
                {race.subraces.length ? (
                    <div>
                        <h2>Subrace</h2>
                        {race.subraces.map(sub=>(
                            <div key={sub.name}>
                                <h3>{sub.name}</h3>
                                <p>{sub.data.desc}</p>
                                {sub.data.ability_bonuses.length ? (
                                    <div>
                                        <p><strong>Ability Scores: </strong>Your {scoreTranslation[sub.data.ability_bonuses[0].ability_score.name]} increases by {sub.data.ability_bonuses[0].bonus}</p>
                                    </div>
                                ) : null}
                                {sub.data.racial_traits.length ? (
                                    <div>
                                        <h4>Racial Traits</h4>
                                        {sub.data.racial_traits.map(trait=>(
                                            <p key={trait.index}><strong>{trait.name}: </strong>{trait.desc}</p>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                ) : null}
            </TextContainer>
            <ImageContainer>
                <StyledImage
                    src={`/races/${race.index}.webp`}
                    alt={race.name}
                    width={300}
                    height={420}
                />
            </ImageContainer>
        </StyledDiv>
    )
}

export default RaceDetail