import { useContext } from "react"
import SlideShowContext from "../../../../Contexts/SlideShowContext"
import "./Painting.css"
import { NavLink } from "react-router-dom"




function Painting(props){
    const {setOpen}= useContext(SlideShowContext)
return(
<NavLink to= {`/artist/${props.id}`} title="Artist">
<section className="painting" onClick={()=>setOpen(true)}>
<div className="gradient_wrapper"></div>
<img src={props.thumbnail}></img>
<div className="painting_info">
<h1 > {props.name}</h1>
<p>{props.artist}</p>
</div>
</section>
</NavLink>
)
}
export default Painting