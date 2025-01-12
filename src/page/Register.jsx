import React from 'react'
import  styled from 'styled-components'

const Container = styled.div`
width:100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600")center;
background-size:cover;
background-repeat:no-repeat;
display: flex;
align-items: center;
justify-content: flex-start;

`


const Wrapper = styled.div`
width:40%;
background-color: white;
margin-left: 20px;
border-radius:15px;`


const Title = styled.h1`
text-align: center;
margin-top:20px;
font-size: 20px;
font-weight: 200;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
padding: 20px;`

const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0 0;
padding: 10px;`

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`

const Button = styled.button`
width: 40%;
border:none;
padding:15px 20px;
background-color: teal;
color: white;
border-radius:15px;`



const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder='FirtName'/>
                <Input placeholder='LastName'/>
                <Input placeholder='UserName'/>
                <Input placeholder='Email'/>
                <Input placeholder='Password'/>
                <Input placeholder='Confirm Password'/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data 
                    in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
