import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharcaterGrid = ({items, isLoading}) => {
    return isLoading ? (
    <Spinner/>
    ) : ( 
     <section className="cards">
    { items.map((item) => (
        <CharacterItem key={item.flight_number} item={item}></CharacterItem>
    )) }

    </section>
    )
}

export default CharcaterGrid;
