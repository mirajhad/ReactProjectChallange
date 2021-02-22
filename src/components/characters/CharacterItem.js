import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
     <div className='card-inner'>
    </div>  
        <table border="2"> 
          <ul>
          
            <li>
              <strong>FLIGHT NUMBER:</strong> {item.flight_number}
            </li>
            <li>
              <strong>MISSION NAME:</strong> {item.mission_name}
            </li>
            <li>
              <strong>LAUNCH DATE:</strong> {item.launch_date_local}
            </li>
            <li>
              <strong>LAUNCH YEAR:</strong> {item.launch_year}
            </li>
           
            
          </ul>
          </table>
        </div>
        
  )
}

export default CharacterItem