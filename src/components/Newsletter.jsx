import { SendOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
height:70vh;
background-color: #feedcf;
display: flex;
align-items: center;
justify-content : center;
flex-direction: column;
gap:30px;
${mobile({flexDirection: "column", height:"50vh",gap:"20px"})}
`
const Title = styled.h1`
font-size:72px;
font-weight:800;
letter-spacing:3px;
color: #5c5b5b;
${mobile({fontSize: "50px"})}`

const Desc = styled.p`
font-size:35px;
font-weight:500;
color:teal;
${mobile({fontSize:"24px", textAlign: "center"})}`

const InputContainer = styled.div`
width:50%;
height:40px;
background-color: #201818;
border:1px solid #b1b0ae;
display:flex;
justify-content: space-between;
${mobile({width:"80%", height:"40px"})}`

const Input = styled.input`
flex:8;
border:none;
font-size:18px;
padding:10px;
color: teal;`

const Button = styled.button`
flex:1;
background-color: teal;
border:none;
color: white;

`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products.</Desc>
        <InputContainer>
        <Input placeholder='Your Email'/>
        <Button>
            <SendOutlined />
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter

