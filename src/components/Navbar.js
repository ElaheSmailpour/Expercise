import React from "react"
import { Link } from 'react-router-dom'
const Navbar=()=>{
    return(
        <div className="Navbar">
        <Link to="/">Excersise</Link> 
<Link to="/create">Exercisecreate</Link>
<Link to="/user">createuser</Link>

</div>
     
    )
}

export default Navbar