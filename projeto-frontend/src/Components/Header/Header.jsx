import imageHeader from "../img/img5.png"
import { ImageContainer, Image } from "./HeaderStyle"


export const Header = () => {
    return(
        <ImageContainer>
            <Image src={imageHeader}/>   
        </ImageContainer>

    )

}

export default Header