import imageHeader from "../img/img5.png"
import { ImageContainer, Image } from "./HeaderStyle"


export const Header = () => {
    return(
        <ImageContainer>
            <Image className="imageHeader" src={imageHeader} alt="header-img"/>   
        </ImageContainer>
    )
}

export default Header