import { Background, ModalContainer, CloseIcon, Description } from "./ModalStyle"


export const Modal = ({ openModal, setModalOpen, children}) => {

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
                <Description>{children}</Description>
                </ModalContainer>
            
            </Background>
        );
    }

    return null
}

export default Modal