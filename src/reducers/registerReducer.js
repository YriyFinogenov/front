import ACTION from '../actions/actionTypes';

const intialState = {
    accessToken: null,
    isFetching: false,
    error: null,
    success: false
};

export default function (state = intialState, action) {
    switch (action.type) {
        case ACTION.REGISTER_ACTION_REQUEST: {
            return {
                isFetching: true,
                error: null,
                accessToken: null,
                success: false
            }
        }
        case ACTION.REGISTER_ACTION_SUCCESS: {
            return {
                accessToken: action.accessToken,
                isFetching: false,
                error: null,
                success: true
            }
        }
        case ACTION.REGISTER_ACTION_ERROR: {
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