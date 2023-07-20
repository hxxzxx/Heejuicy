import React from "react";
import { styled } from "styled-components";
import Bg from "./assets/backimage.jpg";

const Hd = styled.header`
position: relative;
height: 400px;
text-align:center;
margin-top: 100px;

&::before {
    content: "";
    display: block;
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: url(${Bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
`
const HdContainer = styled.div`
position: relative;
padding-top: 5px;`

const HdTitle=styled.h2`
font-size: 100px;
`
const HdContent=styled.p`
font-size: 40px;
`


export default function Header()
{
    return(
       <Hd>
        <HdContainer>
        <HdTitle>Do Wanna Sweet?</HdTitle>
        <HdContent>The answer is HEEJUICY</HdContent>
        </HdContainer>
       </Hd>
    );
}