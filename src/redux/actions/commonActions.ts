import {
    SET_APP_LANGUAGE,
    SET_SESSION_FLAG,
} from '../types';

export const setLanguage = (val: string) => ({
    type: SET_APP_LANGUAGE,
    payload: val,
});

export const setSessionFlag = (val: boolean) => ({
    type: SET_SESSION_FLAG,
    payload: val,
});