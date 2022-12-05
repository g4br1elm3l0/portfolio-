import styled from "styled-components";

export const CardStyle = styled.ul`
display: flex;
column-gap: 1rem;
overflow-x: auto;



li{
min-width: 231px;

height: 346px;
border-radius: 5px;
background-color:#F5F5F5 ;
list-style: none;
margin: 0px;
}

img{
    background-color: #E0E0E0;
width: 100%;
height: 60%;
}

div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 129px;
    margin-left: 21px;
}


.spanValor{
    color: #27AE60;
}

@media(min-width: 768px) {
    overflow-x: hidden;
    flex-wrap: wrap;
    min-width: 850px;


    li{
        width:24%
    }
}


`