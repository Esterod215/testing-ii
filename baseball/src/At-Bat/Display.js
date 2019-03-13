import React from 'react';
function Display(props) {
return(
<div>
    <h1>At Bat Stats</h1>
   <h3>Balls: {props.ball}</h3> 
   <h3>Strikes: {props.strike}</h3>
</div>

)
}




export default Display;