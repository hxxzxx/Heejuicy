import React from "react";
import { styled } from "styled-components";

const FooterContainer =styled.footer`
    height: 50px;
    background-color:red;
    color:white;
    padding-top: 20px;
    margin-top: 150px;
    display: flex;
    justify-content:space-around;
`

export default function Footer() 
{
    return(
        <FooterContainer>
        <p>&copy; HEEJUICY IS AlWAYS SWEEEEET !
            </p>
        </FooterContainer>
    );
}