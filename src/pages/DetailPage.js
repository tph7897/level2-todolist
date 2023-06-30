import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';
import { StTitle } from '../style/MainPageStyle';

function DetailPage() {
    const params = useParams()
    const list = useSelector(state => state.todoReducer)

    const foundList = list.find((item) => {
        return item.id == params.id
    }
    )
    return (
        <Container>
            <CardContainer>
                <LinkBtn>
                    <Link to="/"> 돌아가기 </Link>
                </LinkBtn>
                <StTitle>{foundList.title}</StTitle>
                <p>{foundList.contents}</p>
            </CardContainer>
        </Container >

    )
}




const Container = styled.div`
display: flex;
justify-content : center;
align-items : center;
height : 100vh;
`
const CardContainer = styled.div`
width: 600px;
height: 400px;
border: solid 1px gray;
border-radius : 10px;
padding: 30px;
`
const LinkBtn = styled.div`
display: flex;
justify-content : center;
align-items : center;
float: right;
width: 100px;
height: 30px;
border: 1px solid gray;
border-radius : 10px; 
`



export default DetailPage