import { Background, ModalContainer, CloseIcon,Name,  Description, Image } from "./ModalStyle"


export const Modal = ({ openModal, setModalOpen, productItem}) => {


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