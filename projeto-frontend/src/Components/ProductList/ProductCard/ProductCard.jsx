import { ProductCardContainer, ImageContainer, Image, PorductInfo, ProductName, ProductPrice, AddButon } from "./ProductCardStyle"

export const ProductCard = (props) => {
    
    const { productItem, addToCart } = props;

    const valueRender = productItem.value.toFixed(2).toString().includes('.')? productItem.value.toFixed(2).toString().replace('.', ',') : productItem.value.toFixed(2).toString();

    return(
        <ProductCardContainer>
            <ImageContainer>
            <Image src={productItem.imageUrl}/>
            </ImageContainer>
            
            <PorductInfo>
                <ProductName>{productItem.name}</ProductName>
                <ProductPrice>R$ {valueRender}</ProductPrice>
                <AddButon onClick={()=> addToCart(productItem.id)}>Adicionar ao carrinho</AddButon>
            </PorductInfo>
        </ProductCardContainer>
    )
}

export default ProductCard