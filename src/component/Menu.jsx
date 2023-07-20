import React from "react";
import { styled } from "styled-components";
import Fruit from "./assets/fruit.png";
const MenuWraaper = styled.section`
    display: flex;
    justify-content: center;`

const MenuContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 900px;
    height: 1000px;
    align-content: space-around;`

const menuImgDiv = styled.div`
    height:300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const imgDiv = styled.div` 
height:300px;
display: flex;
flex-direction: column;
justify-content: center;`

const juicyImg = styled.img`
height: 250px;
`
const menuTitle =styled.div`
    text-align: center;
    color: #290101;
    font-size: 25px;
`


function MenuImg({title,price,imgURL})
{
    return(
        <imgDiv>
        <a/>
         <juicyImg src={imgURL}/>
         <menuTitle>{title}<br /> {price} </menuTitle>
        </imgDiv>

    );
}


export default function Menu()
{
   return( 
        <MenuWraaper>
            <MenuContainer>
            <MenuImg 
                title="HEEJUICY"
                price="5000"
                imgURL={Fruit}/>

                <MenuImg 
                title="HEEJUICY"
                price="5000"
                imgURL={Fruit}/>

                <MenuImg 
                title="HEEJUICY"
                price="5000"
                imgURL={Fruit}/>

                <MenuImg 
                title="HEEJUICY"
                price="5000"
                imgURL={Fruit}/>

                <MenuImg 
                title="HEEJUICY"
                price="5000"
                imgURL={Fruit}/>

                <MenuImg 
                title="HEEJUICY"
                price="5000"
                imgURL={Fruit}/>

                <MenuImg 
                title="HEEJUICY"
                price="5000"
                imgURL="/images/fruit.png"/>

                <MenuImg 
                title="HEEJUICY"
                price="5000"
                imgURL="/images/fruit.png"/>

                <MenuImg 
                title="HEEJUICY"
                price="5000"
                imgURL="/images/fruit.png"/>
            </MenuContainer>
        </MenuWraaper>
   );
}