import React from 'react'

function Hardskillcards(props) {
    const backgroundstyle={
        backgroundImage: `url(${props.imageURL})`,
        backgroundSize: 'cover',  // Set background image to cover
        backgroundRepeat: 'no-repeat'
    
    }
  return (
    <>
     <div class="overlay">
        <div class="screen" style={backgroundstyle}>
            <div class="header">
                <h2 class="heading">{props.Title}</h2>
                <p class="insideDescription">
                    {props.Description}
                </p>
            </div>
        </div>

        </div>
    </>
  )
}

export default Hardskillcards
