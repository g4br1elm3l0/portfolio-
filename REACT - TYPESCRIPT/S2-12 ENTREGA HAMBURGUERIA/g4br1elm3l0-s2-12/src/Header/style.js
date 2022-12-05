import styled from "styled-components";

export const HeaderStyle = styled.header`
background-color: #F5F5F5;
display: flex;
flex-direction: column;
padding: 0 115px;
align-items: center;
margin-bottom: 2rem;


img {
width:158.94px;
height:36.83px;
}


input{
border-radius: 5px;
padding: 12px
}



.divHeader{
    position: relative;
}
button{
    position: absolute;
   right: 4px;
    top: 4px;

}


@media(min-width: 768px){
flex-direction: row;
justify-content: space-between;
}


`