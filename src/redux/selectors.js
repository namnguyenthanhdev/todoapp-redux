import {createSelector} from "reselect";

export const todoListSelector = state => state.todoList;
export const searchTextSelector = state => state.filters.search;
export const statusRadioSelector = state => state.filters.status;
export const prioritySelectSelector = state => state.filters.priorities;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusRadioSelector,
    prioritySelectSelector,
    (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
        if (status === "All") {
            return priorities.length ? todo.name.includes(searchText) && todo.priority.includes(priorities) : todo.name.includes(searchText);
        }
        return (
            todo.name.includes(searchText) &&
            (status === "Completed" ? todo.completed : !todo.completed) &&
            (priorities.length ? todo.priority.includes(priorities) : true)
        )
    })
})