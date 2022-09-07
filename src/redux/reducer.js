import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todoListSlice";
import {combineReducers} from "redux";

const rootReducer = combineReducers ({
        filters: filtersReducer,
        todoList: todoListReducer,
})
export default rootReducer;