import react from 'react';
import './AboutMe.css';

function AboutMe(props){
    return(
        <div id="aboutme"><h2>About Me</h2>
       <h4><ul>{props.about1}</ul> <ul>{props.about2}</ul><ul>{props.about3}</ul></h4>
            
        </div>




    )
}
export default AboutMe;