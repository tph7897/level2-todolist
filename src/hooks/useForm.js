import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../modules/todos';

export const useForm = () => {

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    // 제목 필드가 변경된 경우
    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    // 내용 필드가 변경된 경우
    const onContentsChangeHandler = (event) => {
        setContents(event.target.value);
    };

    // 추가하기
    const addListButton = (event) => {
        dispatch(addTodo(title, contents));
        setTitle('');
        setContents('');
    };

    // 삭제하기
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    // 완료!, 취소하기
    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    };


    const dispatch = useDispatch()
    const list = useSelector(state => state.todoReducer)

    return { title, contents, list, onTitleChangeHandler, onContentsChangeHandler, addListButton, handleDelete, handleToggle }
}