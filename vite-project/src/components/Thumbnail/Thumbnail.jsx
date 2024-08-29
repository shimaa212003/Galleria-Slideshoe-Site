
import Painting from "../Painting/Painting"
import "./Thumbnail.css"
function Thumbnail(){
return(
<div className="thumbnail_container">
    <div className="group_wrap">

    <Painting
          thumbnail="./images/starry-night/thumbnail.jpg"
          name="Starry Night"
          artist="Vincent Van Gogh"
          id={0}
        />

<Painting
          thumbnail="./images/the-storm-on-the-sea-of-galilee/thumbnail.jpg"
          name="The Storm on the Sea of Galilee"
          artist="Rembrandt"
          id={4}
        />
        <Painting
          thumbnail="./images/lady-with-an-ermine/thumbnail.jpg"
          name="Lady with an Ermine"
          artist="Leonardo da Vinci"
          id={8}
        />
        <Painting
          thumbnail="./images/the-boy-in-the-red-vest/thumbnail.jpg"
          name="The Boy in the Red Vest"
          artist="Paul Cézanne"
          id={11}
        />
      </div>
      <div className="group_wrap">
        <Painting
          thumbnail="./images/girl-with-pearl-earring/thumbnail.jpg"
          name="Girl with a Pearl Earring"
          artist="Johannes Vermeer"
          id={1}
        />
        <Painting
          thumbnail="./images/the-great-wave-off-kanagawa/thumbnail.jpg"
          name="The Great Wave off Kanagawa"
          artist="Hokusai"
          id={5}
        />
        <Painting
          thumbnail="./images/the-night-cafe/thumbnail.jpg"
          name="The Night Café"
          artist="Vincent Van Gogh"
          id={9}
        />
        <Painting
          thumbnail="./images/arnolfini-portrait/thumbnail.jpg"
          name="Arnolfini Portrait"
          artist="Jan van Eyck"
          id={12}
        />
      </div>
      <div className="group_wrap">
        <Painting
          thumbnail="./images/guernica/thumbnail.jpg"
          name="Guernica"
          artist="Pablo Picasso"
          id={2}
        />
        <Painting
          thumbnail="./images/van-gogh-self-portrait/thumbnail.jpg"
          name="Van Gogh Self-portrait"
          artist="Vincent Van Gogh"
          id={6}
        />
        <Painting
          thumbnail="./images/mona-lisa/thumbnail.jpg"
          name="Mona Lisa"
          artist="Leonardo da Vinci"
          id={13}
        />
      </div>
      <div className="group_wrap">
        <Painting
          thumbnail="./images/penitent-magdalene/thumbnail.jpg"
          name="Penitent Magdalene"
          artist="Artemisia Gentileschi"
          id={3}
        />

        <Painting
          thumbnail="./images/the-sleeping-gypsy/thumbnail.jpg"
          name="The Sleeping Gypsy"
          artist="Henri Rousseau"
          id={7}
        />
        <Painting
          thumbnail="./images/the-basket-of-apples/thumbnail.jpg"
          name="The Basket of Apples"
          artist="Paul Cézanne"
          id={10}
        />
        <Painting
          thumbnail="./images/the-swing/thumbnail.jpg"
          name="The Swing"
          artist="Jean-Honoré Fragonard"
          id={14}
        />
      </div>
    </div>
  )
}
 
export default Thumbnail