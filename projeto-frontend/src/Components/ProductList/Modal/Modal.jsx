import { useEffect } from "react"
import { Background, ModalContainer, CloseIcon,Name,  Description, Image } from "./ModalStyle"


export const Modal = ({ openModal, setModalOpen, productItem}) => {


    useEffect(() => {
        const closePopUp = (e) => {
          if(e.key === 'Escape' && openModal){
            setModalOpen()
          }
        }
        window.addEventListener('keydown', closePopUp);
        return () => window.removeEventListener('keydown', closePopUp);
    },[openModal]);    

    if(openModal){
        return(
            <Background>
                <ModalContainer>
                <CloseIcon
                    className="material-symbols-outlined"
                    onClick={setModalOpen}
                >
                    close 
                </CloseIcon>
                <Name>{productItem.name}</Name> 
                <Image src={productItem.imageUrl}/>
                <Description>{productItem.description}</Description>
                
                </ModalContainer>
            
            </Background>
        );
    }

    return null
}

export default Modal