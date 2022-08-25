import React from 'react'
import Pokemon from './Pokemon'

function Team({ poke, sprite }) {
    return (
        <>
            <div>
                <img src={sprite.front_default} />
                <div>
                    {poke.name}<br/>
                    {poke.id}
                    
                </div>
                {
                    // poke.map((poke) =>(
                    //     <Pokemon poke={poke}/>
                    // ))
                }
            </div>
        </>
    )
}

export default Team