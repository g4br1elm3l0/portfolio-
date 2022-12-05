import styled from "styled-components";

export const styledConteiner = styled.div`
align-items: center;
`

export const StyledCart = styled.div`
width: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
margin-top: 1rem;
height: 201px;
background-color: #f5f5f5;
text-align: center;
justify-content: space-between;

ul{
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    row-gap: 20px;
    margin-bottom: 25px;
}

li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
     max-width: 450px;
}
div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 150px; */


}


.conteiner-card-cart{
    display: flex;
    flex-direction: row;
    height: 70px;


}

img{
    height: 70px;
    background-color: #E0E0E0;
    width: 70px;
    border-radius: 8px;
}

button{
    background-color: #f5f5f5;
    color: #BDBDBD;
    text-align: start;
    font-weight: 700;
    color: #828282;
}

h2{
    background-color: #27AE60;
    color: #ffffff;
    padding: 5px;

    border-top-left-radius: 5px ;
    border-top-right-radius: 5px;
}

.div-Total-value{
width: 100%;
}

h3{
    display: flex;

    flex-direction: row;
    justify-content: space-around;
    column-gap: 168px;
    font-size: 14px;
    font-weight: 600;
}



.sacolaVazia{
    display: flex;
    flex-direction: column;
    font-weight: 700;
    text-align: center;
    height: 100%;
    margin-bottom: 2rem;
    align-items: center;
}

.remove{
    text-align: center;
    background-color: #E0E0E0;
    width: 80%;
    margin: 0 auto;
    border-radius: 8px;
    margin-top: 5px;
    padding: 10px;
}

@media (min-width: 768px) {
width: 60%;
height: 450px;
margin-top: 0;
text-align: center;
max-width: 400px;


ul{
overflow-y: auto;
height: 276px;

}

}`

