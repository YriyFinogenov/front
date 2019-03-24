import ACTION from '../actions/actionTypes';

const intialState = {
    accessToken: '',
    isFetching: false,
    error: null
};

export default function (state = intialState, action) {
    switch (action.type) {
        case ACTION.REGISTER_ACTION_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTION.REGISTER_ACTION_SUCCESS: {
            return {
                ...state,
                accessToken: action.accessToken,
                isFetching: false,
                error: null
            }
        }
        case ACTION.REGISTER_ACTION_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        default:
            return state;
    }
}