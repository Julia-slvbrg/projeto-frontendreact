import { useState } from "react";
import { ProductCardContainer, ImageContainer, Image, NewDiv, Description, PorductInfo, ProductName, ProductPrice, AddButon } from "./ProductCardStyle"

export const ProductCard = (props) => {
    
    const { productItem, addToCart, getCurrencyBr } = props;
    //console.log(productItem)

    const [newProductItem, setNewProductItem] = useState({productItem});
    //console.log(newProductItem);

    //perguntar como fazer a troca entre descrição e imagem funcionar

    const getDescriptionOrImage = (descriptionStatus) => {
        if(!descriptionStatus){
            console.log(newProductItem)
            setNewProductItem({...newProductItem, descriptionStatus: !(newProductItem.descriptionStatus)});
            console.log('entrou na getDescriptionOrImage (if)')
            return(
                <Image src={newProductItem.imageUrl} onClick={()=>getDescriptionOrImage(newProductItem.descriptionStatus)}/>
            )
        }else{
            console.log(newProductItem)
            setNewProductItem({...newProductItem, descriptionStatus: !newProductItem.descriptionStatus});
            console.log('entrou na getDescriptionOrImage (else)')
            return(
                <Description onClick={()=>getDescriptionOrImage(newProductItem.descriptionStatus)}>{newProductItem.description}</Description>
            )
        }
    };



    return(
        <ProductCardContainer>
            <ImageContainer>
            {/* <NewDiv onClick={()=>getDescriptionOrImage(newProductItem.descriptionStatus)}></NewDiv>  */}
            <Image src={productItem.imageUrl}/>
            {/* <Description>{productItem.description}</Description> */}
            </ImageContainer>
            
            <PorductInfo>
                <ProductName>{productItem.name}</ProductName>
                <ProductPrice>{getCurrencyBr(productItem.value)}</ProductPrice>
                <AddButon onClick={()=> addToCart(productItem.id)}>Adicionar ao carrinho</AddButon>
            </PorductInfo>
        </ProductCardContainer>
    )
}

export default ProductCard