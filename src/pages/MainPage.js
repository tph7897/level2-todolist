import React from 'react'
import { StCard, StInput, StInputContainer, StLabel, StLayout, StListContainer, StPushButton, StTop } from '../style/MainPageStyle';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm'
import TodoItem from '../components/TodoItem';

function MainPage() {
    const {
        title,
        contents,
        list,
        onTitleChangeHandler,
        onContentsChangeHandler,
        addListButton,
        handleDelete,
        handleToggle }
        = useForm()

    return (
        <div>
            <StLayout>
                <StTop>
                    <div>오늘의 할일</div>
                    <div>React</div>
                </StTop>
                <StInputContainer>
                    <StLabel >제목</StLabel>
                    <StInput type="text" value={title} onChange={onTitleChangeHandler} />
                    <StLabel >내용</StLabel>
                    <StInput type="text" value={contents} onChange={onContentsChangeHandler} />
                    <StPushButton onClick={addListButton} >추가하기</StPushButton>
                </StInputContainer>
                <div className='list-container'>
                    <h2>진행중... 🔥</h2>
                    <StListContainer>
                        {list.filter((item) => (!item.success)).map((item) => (
                            <TodoItem item={item} handleDelete={handleDelete} handleToggle={handleToggle} />
                        ))}
                    </StListContainer>
                    <h2>완료! 🎉</h2>
                    <StListContainer>
                        {list.filter((item) => (item.success)).map((item) => (
                            <TodoItem item={item} handleDelete={handleDelete} handleToggle={handleToggle} />
                        ))}
                    </StListContainer>
                </div>
            </StLayout>
        </div >
    )
}

export default MainPage