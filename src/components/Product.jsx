import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@mui/icons-material'

const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position :absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
cursor:pointer;
display: flex; 
align-items: center;
justify-content:center; 
`
const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display: flex;
align-items: center;
justify-content:center;
background-color: #dce4e2;
opacity:1;
position: relative;
transition: all 1s ease;

&:hover ${Info}{
  opacity:1;
}
`

const Image = styled.img`
height:75%;
`

const Icon= styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color: #f4f6f4;
font-size:16px;
margin-left:8px;
display:flex;
align-items: center;
justify-content: center;
transition: all 1s ease;

&:hover{
  background-color: white ;
  transform: scale(1.1);
}
`
const Product = ({item}) => {
  return (
    <Container>
       
        <Image src={item.img} />
        
        <Info>
            <Icon>
            <ShoppingCartOutlined />
            </Icon>
            <Icon>
            <SearchOutlined />
            </Icon>
            <Icon>
            <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product