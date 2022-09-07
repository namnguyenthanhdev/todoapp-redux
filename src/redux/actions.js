import {FILTERS_PRIORITIES, FILTERS_SEARCH, FILTERS_STATUS, TODO_STATUS, TODOS_ADD} from "./constants";

export const addTodo = (data) => {
    return {
        type: TODOS_ADD,
        payload: data,
    }
}

export const searchFilterChange = (text) => {
    return {
        type: FILTERS_SEARCH,
        payload: text,
    }
}

export const statusFilterChange = (status) => {
    return {
        type: FILTERS_STATUS,
        payload: status,
    }
}

export const prioritiesFilterChange = (priorities) => {
    return {
        type: FILTERS_PRIORITIES,
        payload: priorities,
    }
}

export const todoStatusToggle = (todoId) => {
    return {
        type: TODO_STATUS,
        payload: todoId,
    }
}