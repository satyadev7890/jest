import { SET_APP_LANGUAGE, SET_SESSION_FLAG } from '../types';

const INITIAL_STATE = {
    languagecode: 'en_CA',
    isSessionValid: false,
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case SET_APP_LANGUAGE:
            return {
                ...state,
                languagecode: action.payload,

            };
        case SET_SESSION_FLAG:
            return {
                ...state,
                isSessionValid: action.payload
            };
        default:
            return state;
    }
};
