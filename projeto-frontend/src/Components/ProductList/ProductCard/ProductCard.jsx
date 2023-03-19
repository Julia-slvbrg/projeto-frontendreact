import { ProductCardContainer, ImageContainer, Image, PorductInfo, ProductName, ProductPrice, AddButon } from "./ProductCardStyle"

export const ProductCard = (props) => {
    
    const { productItem, addToCart, getCurrencyBr } = props;



    return(
        <ProductCardContainer>
            <ImageContainer>
            <Image src={productItem.imageUrl}/>
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