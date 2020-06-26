import {basePath} from "./http.service";

const AuthService = {
    login(user: any) {
        return fetch(basePath + 'user/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    register(user: any) {
        return fetch(basePath + 'user/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    logout() {
        return fetch('/user/logout')
            .then(res => res.json())
            .then(data => data);
    },
    isAuthenticated() {
        return fetch('/user/authenticated')
            .then(res => {
                if (res.status !== 401) {
                    return { isAuthenticated: true, data: res };
                } else {
                    return { isAuthenticated: false, message: 'Not authenticated' };
                }
            })
    }
};

export default AuthService;
