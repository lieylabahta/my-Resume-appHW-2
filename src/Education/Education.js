
import react from 'react';
import './Education.css';

function Education(props){
    return(
        <div id="education"><h2>Education</h2>
        <h4><ul> {props.education1} </ul> <ul>{props.education2}</ul> <ul>{props.education3}</ul></h4>

        </div>




    )
}
export default Education;