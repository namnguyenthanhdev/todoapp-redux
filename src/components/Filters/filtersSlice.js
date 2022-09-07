import {FILTERS_PRIORITIES, FILTERS_SEARCH, FILTERS_STATUS} from "../../redux/constants";

const initState = {
    search: "", status: "All", priorities: [],
}

const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case FILTERS_SEARCH:
            return {
                ...state, search: action.payload,
            }
        case FILTERS_STATUS:
            return {
                ...state, status: action.payload,
            }
        case FILTERS_PRIORITIES:
            return {
                ...state, priorities: action.payload,
            }
        default:
            return state;
    }
}
export default filtersReducer;