
import React from 'react'
import  styled  from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
  padding:20px;
  display:flex;
  justify-content: space-between;
  ${mobile({padding:"0px", flexDirection: "column"})}
`

const Category = () => {
  return (
    <Container>
    {categories.map(item=>(
      <CategoryItem item = {item} key={item.id}/>
    ))}
    </Container>
  )
}

export default Category



