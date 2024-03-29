import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})}
`

const Left= styled.div`
flex:1;
padding:20px;`

const Logo= styled.h1`
font-size:25px;
font-weight:500;
${mobile({fontSize: "20px"})}`

const Desc = styled.p`
font-size:18px;
text-align: justify;
margin:20px 0;
${mobile({fontSize: "16px"})}
`

const SocialContainer = styled.div`
display:flex;`

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color: white;
margin-right:10px;
background-color: #${props=>props.bg};
display:flex;
align-items: center;
justify-content: center;
${mobile({width:"25px", height:"25px"})}`

const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display: "none"})}`

const Title = styled.h3`
margin-bottom:30px;
`

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;`

const ListItem= styled.li`
width:50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor: "#f7f4f2"})}`



const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
width:50%;
margin-top:0;
padding:0;
height:100px;
object:fit;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Logo</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dignissimos facere beatae, 
                placeat excepturi error perferendis, quisquam debitis aperiam, soluta dolorem enim molestiae! 
                Tempora, reiciendis quis assumenda commodi aliquid eveniet cumque placeat molestias mollitia 
                
            </Desc>
            <SocialContainer>
                <SocialIcon bg="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon  bg="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon  bg="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon  bg="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Usefull Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>27/565, Chullickal, kochi-5</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+91 9633443047</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@edesgins.com</ContactItem>
            <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-MH-iKO9R2UtWPxxvb5C66iYAzWrsiTJjlCDuzhxdWxCtaRhbI3oycq8tpcOION9UjM&usqp=CAU"/>
        </Right>
    </Container>
  )
}

export default Footer