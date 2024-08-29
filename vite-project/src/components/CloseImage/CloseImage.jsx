import "./CloseImage.css"

function CloseImage(props){
    return(
        <section className="close_image">
            <img src={props.src}></img>
        </section>
    )

}
export default CloseImage