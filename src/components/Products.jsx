import React from 'react'
import  styled  from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import { mobile } from '../responsive'

const Container = styled.div`
padding:20px;
display:flex;
flex-wrap: wrap ;
justify-content: space-between;
${mobile({padding: "5px"})}
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item)=>(
           <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products