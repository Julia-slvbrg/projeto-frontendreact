import { ProductCardContainer, Image, PorductInfo, ProductName, ProductPrice, AddButon } from "./ProductCardStyle"

export const ProductCard = (props) =>{
    //console.log(props.product)

    //console.log(props)
    return(
        <ProductCardContainer>
            <Image src={props.product.imageUrl}/>
            <PorductInfo>
                <ProductName>{props.product.name}</ProductName>
                <ProductPrice>R$ {props.product.value}</ProductPrice>
                <AddButon onClick={()=>props.onClickAddToCart}>Adicionar ao carrinho</AddButon>
            </PorductInfo>
        </ProductCardContainer>
    )
}

export default ProductCard