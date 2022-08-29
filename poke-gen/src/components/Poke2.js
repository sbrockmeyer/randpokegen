import React from 'react'

function Poke2({ poke, sprite }) {
    return (
        <>
            <div>
                <img src={sprite.front_default} />
                <div>
                    {poke.name}<br/>
                    {poke.id}
                    
                </div>
            </div>
        </>
    )
}

export default Poke2
