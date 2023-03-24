import { useState } from "react";
import { ProductCardContainer,  Image, PorductInfo, ProductName, ProductPrice, AddButon } from "./ProductCardStyle"
import Modal from "../Modal/Modal";

export const ProductCard = (props) => {
    
    const { productItem, addToCart, getCurrencyBr } = props;
    const [openModal, setOpenModal] = useState(false);
  
    return(
        <ProductCardContainer>
            
            <Image src={productItem.imageUrl} onClick={() => setOpenModal(true)}/>
            <Modal 
                openModal={openModal} 
                setModalOpen={() => setOpenModal(!openModal)}
                productItem={productItem}
            ></Modal>
            <PorductInfo>
                <ProductName>{productItem.name}</ProductName>
                <ProductPrice>{getCurrencyBr(productItem.value)}</ProductPrice>
                <AddButon onClick={()=> addToCart(productItem.id)}>Adicionar ao carrinho</AddButon>
            </PorductInfo>
        </ProductCardContainer>
    )
}

export default ProductCard