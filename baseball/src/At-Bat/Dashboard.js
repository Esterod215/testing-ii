import React from 'react';

function Dashboard(props){
   return(
    <> 
    <button onClick={props.hit}>Hit!</button>
    <button onClick={props.miss}>Strike!</button>
    <button onClick={props.foulBall}>Foul!</button>
    <button onClick={props.Ball}>Ball!</button>
    </>
   )
}




export default Dashboard;