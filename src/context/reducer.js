import React, { useReducer } from 'react';

let user = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).user
    : '';

let token = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).auth_token
    : '';

export const initialState = {
    userDetails: '' || user,
    token: '' || token,
    loading: false,
    errorMessage: null,
};

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...initialState,
                loading: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...initialState,
                loading: false,
                user: action.payload.user,
                token: action.payload.auth_token,
            };
        case 'LOGOUT':
            return {
                ...initialState,
                user: '',
                token: '',
            };
        case 'LOGIN_ERROR':
            return {
                ...initialState,
                loading: false,
                errorMessage: 'action.error',
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
