import react from 'react'
import './Personalinfo.css'

function Personalinfo(props){

    return(
<div id="Personalinfo"> <h2>Personal Information</h2>
<h4> <ul>{props.name} </ul> <ul>{props.contacts}</ul> <ul> {props.address} </ul></h4>

</div>

    )
}
export default Personalinfo;