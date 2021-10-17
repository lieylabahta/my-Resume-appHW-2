import react from'react'
import './Objective.css';

function Objective(props){
    return(
        <div id="objective"><h2>Objective</h2>
           <h4> <ul>{props.Objective1}</ul> <ul>{props.Objective2}</ul> <ul> {props.Objective3}</ul> </h4>

        </div>




    )
}
export default Objective;