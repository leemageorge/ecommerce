import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div``

const Wrapper =styled.div`
padding: 20px;
display:flex;`

const ImageContainer = styled.div`
flex:1;
`

const Image = styled.img`
width:100%;
height:90vh;
object-fit: cover;
`

const InfoContainer = styled.div`
flex:1;
padding: 0 50px;`

const Title = styled.h1`
font-weight: 200;`

const Desc = styled.p`
margin: 20px 0;`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width:50%;
display:flex;
justify-content: space-between;
margin: 30px 0;
padding: 20px;`

const Filter = styled.div`
display: flex;
align-items: center;
`


const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;`

const FilterColor = styled.div`
width:20px;
height: 20px;
border-radius:50%;
background-color: ${props=>props.color};
margin: 0 5px;
cursor:pointer;`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
padding: 20px;
width:50%;
display: flex;
align-items: center;
justify-content: space-between;`

const AmountContainer = styled.div`
display:flex;
align-items: center;
font-weight: 700;`

const Amount = styled.span`
width:30px;
height: 30px;
border-radius: 10px;
border: 2px solid teal;
display: flex;
align-items: center;
justify-content:center;
font-weight: 500;

`

const Button = styled.button`
padding:10px;
border: 2px solid teal;
background-color: white;
font-size: 20px;
cursor: pointer;

&:hover{
  background-color: #fffefb;
}
`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImageContainer>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsI8Kt-yChmgx4zz_cYRszLdsUquAY6SD_EA&usqp=CAU" />
                
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, 
                    debitis consequuntur, deleniti ad porro, ducimus dolorem vel perspiciatis
                     maxime quam totam natus est quis laudantium. Quis eligendi, praesentium doloribus,
                      consequatur laborum quaerat nam voluptatem quasi optio illum dolorem. Neque voluptas 
                      fugiat deleniti quos fugit explicabo praesentium. Similique explicabo officia ab?
                      </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="brown" />
                <FilterColor color = "grey" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
                <FilterSizeOption>XXXL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>Add to cart</Button>
            </AddContainer>
            </InfoContainer>
            </Wrapper>
           
        
        <Newsletter />
        <Footer />
    </Container>
  )
} 

export default Product