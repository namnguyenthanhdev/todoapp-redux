import {TODO_STATUS, TODOS_ADD} from "../../redux/constants";

const initState = [
    {id: 1, name: "Learn TOEIC", completed: false, priority: "Medium"},
    {id: 2, name: "Learn JavaScript", completed: false, priority: "Medium"},
    {id: 3, name: "Learn HTML5", completed: true, priority: "High"},
]

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case TODOS_ADD:
            return [...state, action.payload];
        case TODO_STATUS:
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
        default:
            return state;
    }
}
export default todoListReducer;