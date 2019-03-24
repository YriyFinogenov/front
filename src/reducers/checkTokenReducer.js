import ACTION from '../actions/actionTypes';


const initialState = {
    isFetching: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.CHECK_TOKEN_ACTION_REQUEST: {
            return {
                isFetching: true,
                error: null
            }
        }
        case ACTION.CHECK_TOKEN_ACTION_SUCCESS: {
            return {
                isFetching: false,
                error: null
            }
        }
        case ACTION.CHECK_TOKEN_ACTION_ERROR: {
            return {
                isFetching: false,
                error: action.error
            }
        }
        default:
            return state;
    }
}