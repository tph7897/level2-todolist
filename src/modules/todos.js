import MainPage from "../pages/MainPage";
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export const addTodo = (title, contents) => ({
    type: ADD_TODO,
    payload: {
        id: Date.now(),
        title,
        contents,
        success: false,
    },
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {
        id,
    },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: {
        id,
    },
});



export const initialState = [
    {
        id: 1,
        title: "제목",
        contents: "내용",
        success: false
    }
]

// 리듀서
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];

        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);

        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === action.payload.id ? { ...todo, success: !todo.success } : todo

            );
        default:
            return state;
    }
};


export default todoReducer;