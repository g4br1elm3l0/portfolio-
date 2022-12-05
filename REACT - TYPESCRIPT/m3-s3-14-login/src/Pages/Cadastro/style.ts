import styled from "styled-components";

export const StyledCadastro = styled.div`

box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
width: 80%;
max-width: 390px;
margin: 0 auto;
display: flex;
flex-direction: column;
margin-top: 1rem;
height: 770px;
background-color: #212529;
color: #ffffff;
text-align: center;
justify-content: space-evenly;


h2{
    font-size: 14px;
  color:  #F8F9FA;
}


form{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    max-width: 440px;
    max-height: 100%;

}

p{
    font-size: 12px;
    color:red;
}

input,select{
  background-color:  #343B41;
  color: #868E96;

}

button{
    background-color: #FF577F;
    color: #ffffff;
    font-size: 10px;
}

label{
    display: flex;
    text-align: left;
    font-size: 9px;
}

small{
    font-size: 9px;
    color: #868E96;
}
`

export const TopCadastro = styled.div`

display: flex;
justify-content: space-between;
width: 80% ;
max-width: 390px;
margin: 0 auto;

align-items: center;

img{
    height: 18px;
    width: 89px;
}
a{
    color:#F8F9FA;
    font-size: 13px;
    padding: 10px;
    background-color: #212529;
}

`