
import React from 'react'
import { styled } from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
height:50px;
background-color: teal;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
${mobile({fontSize:"16px"})}
`
const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on orders over Rs.500
    </Container>
  )
}

export default Announcement
