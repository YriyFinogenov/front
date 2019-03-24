import ACTION from '../actions/actionTypes';


const intialState = {
    isFetching: false,
    error: null,
    accessToken: null,
    success: false
};

export default function (state = intialState, action) {
    switch (action.type) {
        case ACTION.LOGIN_ACTION_REQUEST: {
            return {
                isFetching: true,
                error: null,
                accessToken: null,
                success: false
            }
        }
        case ACTION.LOGIN_ACTION_SUCCESS: {
            return {
                isFetching: false,
                error: null,
                accessToken: action.accessToken,
                success: true
            }
        }
        case ACTION.LOGIN_ACTION_ERROR: {
            return {
                isFetching: false,
                error: action.error,
                accessToken: null,
                success: false
            }
        }
        default:
            return state;
    }
}