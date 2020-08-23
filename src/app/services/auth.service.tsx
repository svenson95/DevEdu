import {basePath} from "./http.service";

const AuthService = {
    login(user: any) {
        return fetch(basePath + '/user/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async res => {
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                return data;
            } else {
                throw new Error('Login fehlgeschlagen')
            }
        });
    },
    register(user: any) {
        return fetch(basePath + '/user/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async res => {
            if (res.ok) {
                return await res.json();
            } else {
                console.log(res);
                throw new Error('Registrierung fehlgeschlagen')
            }
        });
    },
    editUser(updatedUser: any) {
        return fetch(basePath + "/user/edit-user", {
            method: 'PATCH',
            body: JSON.stringify(updatedUser),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    logout() {
        return fetch(basePath + '/user/logout', {
            credentials: 'include',
        }).catch(err => console.log(err));
    },
    isAuthenticated() {
        return fetch(basePath + '/user/authenticated', {
            credentials: 'include'
        })
            .then(async res => {
                if (res.status !== 401) {
                    return res.json();
                } else {
                    return { isAuthenticated: false, user: null };
                }
            })
            .catch(err => console.log(err));
    }
};

export default AuthService;
