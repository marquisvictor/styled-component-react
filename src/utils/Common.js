export const getUser = () => {
    //retrieve the user data from session storage
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
};

export const getToken = () => {
    // retrieve the token from the session
    return sessionStorage.getItem('token') || null;
};

export const removeUserSession = () => {
    // remove the token and user info from session storage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
};

export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
};
