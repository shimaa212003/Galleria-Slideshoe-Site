import { useContext } from "react"
import "./Header.css"
import {NavLink} from "react-router-dom"
import SlideShowContext from "../../../Contexts/SlideShowContext"

function Header(){
const {open, setOpen} = useContext(SlideShowContext)
return(
<header className= "header">
<nav>
    <NavLink to = "/"   title="Home">

<img src="/images/galleria..svg"  onClick={()=>setOpen(false)} ></img>

    </NavLink>

    <NavLink to={open? "/" :`/artist/0` } title={open? "Home":"Artist"}>
     <p onClick={()=>setOpen(!open)}>
    {open ? "stop " : "start"} slideshow
     </p>
     </NavLink>
</nav>

<div >
    <hr></hr>
</div>

</header>
)
}
export default Header