import React from 'react'
import { Link } from 'react-router-dom'
import { StButton, StButtonSet, StCard, StTitle } from '../style/MainPageStyle'

function TodoItem({ item, handleDelete, handleToggle }) {
    return (
        <div>
            <StCard>
                <Link to={`/detailpage/${item.id}`} > 상세보기 </Link>
                <StTitle>{item.title}</StTitle>
                <p>{item.contents}</p>
                <StButtonSet>
                    <StButton onClick={() => handleToggle(item.id)} bordercolor={"green"}>{item.success ? '취소' : '완료!'}</StButton>
                    <StButton onClick={() => handleDelete(item.id)} bordercolor={"red"}>삭제</StButton>
                </StButtonSet>
            </StCard>
        </div>
    )
}

export default TodoItem
