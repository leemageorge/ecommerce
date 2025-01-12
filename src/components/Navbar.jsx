import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { mobile } from '../responsive'


const Container = styled.div`
  height: 60px;
  background-color:#ee9b00;
  color:#fff;
   ${mobile({height:"50px"})}
`
const Wrapper = styled.div`
padding:10px 20px;
width:100%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding: "10px 0;"})}
    
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;

`
const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
border:0.5px solid lightgrey;
display: flex;
align-items:center;
justify-content: center ;
margin-left: 25px;
padding:5px;

`
const Input = styled.input`
border:none;
outline:none;
background: transparent;
color:#fff;
${mobile({width:"50px"})}`

const Center = styled.div`
flex:1;
text-align: center;
`

const Logo = styled.h1`
font-size: 35px;
font-weight:700px;
  ${mobile({fontSize:"24px"})};
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2, justifyContent:"center"})}`

const MenuItem = styled.div`
font-size:14px;
font-weight: 500px;
cursor:pointer;
margin-left: 25px; 
${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          
            <Left>
              <Language>En</Language>
              <SearchContainer>
                  <Input placeholder="search"/>
                  <Search style={{color:"#fff", fontSize:"16px"}} />
              </SearchContainer>
            </Left>
            <Center> 
              <Logo>LOGO</Logo>
              </Center>
            <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar