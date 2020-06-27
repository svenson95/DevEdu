import {basePath} from "./http.service";

const AuthService = {
    login(user: any) {
        return fetch(basePath + 'user/login', {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(checkForError).then(async res => {
            const data = await res.json();
            let savedData;

            if (res.ok) {
                savedData = {
                    isAuthenticated: true,
                    token: data.token,
                    user: {
                        name: data.user.name,
                        role: data.user.role,
                        email: data.user.email,
                        progress: data.user.email
                    }
                };
                persistToken(savedData);
            }

            return savedData || data;
        });
    },
    register(user: any) {
        return fetch(basePath + 'user/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(checkForError);
    },
    logout() {
        return fetch(basePath + 'user/logout')
            .then(checkForError)
            .then(res => res.json())
            .then(data => data);
    },
    isAuthenticated() {
        const token = JSON.parse(localStorage.getItem("devedu_token")!)?.token;
        return fetch(basePath + 'user/authenticated', {
            credentials: 'same-origin',
            mode: 'cors',
            cache: 'default',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(async res => {
                if (res.status !== 401) {
                    return res.json();
                } else {
                    return { isAuthenticated: false, user: null };
                }
            }).catch(err => console.log(err));
    }
};

function persistToken(data: any) {
    if (!data) return;
    localStorage.setItem('devedu_token', JSON.stringify(data));
}

function checkForError(response: Response) {
    if (response.ok) return response;
    throw new Error(response.status.toString());
}

export const errorType = (httpResponse: any) => {
    if (httpResponse.message === "401") {
        return "Die eingegebenen Daten sind nicht korrekt"
    } else if (httpResponse.message === "409") {
        return "Der Benutzername ist bereits vergeben"
    } else {
        return "Unbekannter Fehler: " + httpResponse.message;
    }
};

export default AuthService;
