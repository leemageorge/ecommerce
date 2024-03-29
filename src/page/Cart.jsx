import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
`

const Title = styled.h1`
font-weight: 300;
text-align:center;`

const Top = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;`

const TopTexts = styled.div``

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;`

const TopButton = styled.button`
padding:10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type ==="filled" ?"black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
    
`

const Bottom = styled.div`
display: flex;
justify-content:space-between;`

const Info = styled.div`
flex:3;
`

const Product = styled.div`
padding: 20px;
display:flex;
justify-content:space-between;`

const ProductDetail = styled.div`
flex:2;
display:flex;`

const Image = styled.img`
width:200px;`

const Details = styled.div`
padding:20px;
display: flex;
flex-direction:column;
justify-content: space-around;
gap:20px;
margin-left: 20px;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductSize = styled.span``

const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};
`

const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items: center;
justify-content:center;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items: center; `

const ProductAmount = styled.div`
font-size: 24px;
margin:5px;
width:30px;
height:30px;
border-radius:5px;
border: 2px solid teal;
display: flex;
justify-content:center;
align-items: center;`

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`
const Hr = styled.hr`
background-color: #e2dede;
border: none;
height: 1px;
`
const Summary = styled.div`
flex:1;
border:1px solid grey;
padding: 20px;
height: 50vh;
`

const SummaryTitle = styled.h1`
font-weight: 200;`

const SummaryItemPrice = styled.span``

const SummaryItem = styled.div`
margin: 50px 0;
display:flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size : ${props=>props.type === "total" && "24px"};
`

const SummaryItemText= styled.span``

const Button = styled.button`
width:100%;
background-color: black;
color: white;
padding: 10px;
font-weight: 300;`




const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAGS</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type ="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                   <Product>
                    <ProductDetail>
                        <Image src="https://images-cdn.ubuy.co.in/633fec62a429a3616b560941-women-shoes-sneakers-girls-canvas-shoes.jpg" />
                        <Details>
                           <ProductName><b b>Product:</b>JESSIE THUNDER SHOES</ProductName> 
                            <ProductId ><b>ID:</b>25662114</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b>37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                   </Product>
                   <Hr />
                   <Product>
                    <ProductDetail>
                        <Image src="https://d1xv5jidmf7h0f.cloudfront.net/circleone/images/mastertemplates/12434/promo_P572_489_33689925_2.png" />
                        <Details>
                           <ProductName><b b>Product:</b>T- SHIRTS</ProductName> 
                            <ProductId ><b>ID:</b>35698741</ProductId>
                            <ProductColor color="grey"/>
                            <ProductSize><b>Size:</b>M</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>1</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$ 18</ProductPrice>
                    </PriceDetail>
                   </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice> $ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart