import React from "react";
import { styled } from "styled-components";

const Nav = styled.nav`
background-color:red;
position: fixed; 
z-index:1;
width: 100%;
top:0px;`

const ContainerDiv = styled.div`
    display: flex;
    justify-content:space-around;
`
const NavTitle= styled.div`
font-size: 100px;
color:white;`

const NavButton = styled.div`
font-size: 30px;
margin-top: 65px;
`
const NavLink = styled.a`
text-decoration: none; 
margin-left: 20px;
&:link, &:visited{
    color:white;
}`


export default function Navigation()
{
    return(
        <Nav>
            <ContainerDiv>
                <NavTitle>HEEJUICY</NavTitle>
          
                    <NavButton>
                        <NavLink href="#">HOME</NavLink>
                        <NavLink href="#">MENU</NavLink>
                        <NavLink href="#">INSTA</NavLink>
                    </NavButton>
            </ContainerDiv>
        </Nav>
    )

}