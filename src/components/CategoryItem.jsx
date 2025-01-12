import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
flex:1;
height:70vh;
margin:3px;
position:relative;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height: "30vh"})}`

const Info= styled.div`
height:100%;
width:100%;
position:absolute;
top:0;
left:0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
color:white;
font-size:28px;
margin-bottom:20px;
`
const Button = styled.button`
border:none;
background-color:white;
color:grey;
padding:10px;
cursor:pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem