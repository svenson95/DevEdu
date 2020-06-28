import {basePath} from "./http.service";
import Cookies from "js-cookie";

const AuthService = {
    login(user: any) {
        return fetch(basePath + '/user/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async res => {
            if (res.ok) {
                const data = await res.json();
                let savedData = {
                    isAuthenticated: true,
                    token: data.token,
                    user: {
                        name: data.user.name,
                        role: data.user.role,
                        email: data.user.email,
                        progress: data.user.progress
                    }
                };
                persistToken(savedData);
                return data;
            } else {
                throw new Error('Failed at login')
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
        });
    },
    logout() {
        return fetch(basePath + '/user/logout')
            .then(res => res.json())
            .then(data => data);
    },
    isAuthenticated() {
        let token = Cookies.get('devedu_token');
        if (token) token = JSON.parse(token).token;
        return fetch(basePath + '/user/authenticated')
            .then(async res => {
                if (res.status !== 401) {
                    return res.json();
                } else {
                    return { isAuthenticated: false, user: null };
                }
            }).catch(err => console.log(err));
    },
    uploadImage(file: any) {
        const formData = new FormData();
        formData.append('file', file);

        return fetch(basePath + '/images/upload', {
            method: 'POST',
            body: formData
        })
    }
};

function persistToken(data: any) {
    if (!data) return;
    Cookies.set('devedu_token',  JSON.stringify(data), { expires: 30 });
}

export const errorType = (httpResponse: any) => {
    console.log(httpResponse);
    if (httpResponse.status === 401) {
        return "Die eingegebenen Daten sind nicht korrekt"
    } else if (httpResponse.status === 400) {
        return "Die eingegebenen Daten sind ungültig (Name/Passwort zu kurz oder lang)"
    } else if (httpResponse.status === 409) {
        return "Der Benutzername ist bereits vergeben"
    } else {
        return "Unbekannter Fehler: " + httpResponse;
    }
};

export default AuthService;
