import React from 'react'
import styled  from 'styled-components'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600");
display: flex;
justify-content:flex-start;
align-items: center;
background-repeat: no-repeat;
background-size: cover;`

const Wrapper = styled.div`
width:25%;
background-color: white;
margin-left: 700px;
padding:20px;
border-radius:15px;`

const Title = styled.h1`
font-weight:200;
margin-bottom: 20px;
text-align:center;
color: teal;`

const Form = styled.form`
display: flex;
flex-direction: column;
gap:20px;
align-items: center;
justify-content: center;`


const Input = styled.input`
width: 90%;
padding:10px;
border-radius:15px;
border:1px solid teal;
outline:none;
`
const Button = styled.button`
padding:15px;
background-color: teal;
color: white;
width:25%;
border:none;
font-size: 18px;
font-weight: 500;
display:flex;
align-items: center;
justify-content: center;
border-radius:15px;
cursor: pointer;`

const Link = styled.a`
text-decoration: underline;
color: grey;
cursor: pointer;
font-size:12px;`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE AN ACCOUNT</Link>
                </Form>
        </Wrapper>
    </Container>
  )
}

export default Login

