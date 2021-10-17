import react from 'react';
import './Exprience.css';

function Exprience(props){
    return(
        <div id="exprience"><h2>Exprience</h2>
        <h4> <ul>{props.exprience1}</ul> <ul> {props.exprience2} </ul> <ul>{props.exprience3}</ul></h4>

        </div>




    )
}
export default Exprience;