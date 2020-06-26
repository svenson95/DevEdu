import {basePath} from "./http.service";

const AuthService = {
    login(user: any) {
        return fetch(basePath + 'user/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(checkForError);
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
        return fetch('/user/logout')
            .then(checkForError)
            .then(res => res.json())
            .then(data => data);
    },
    isAuthenticated() {
        return fetch('/user/authenticated')
            .then(checkForError)
            .then(res => {
                return { isAuthenticated: true, data: res };
            })
    }
};

function checkForError(response: Response) {
    if (response.ok) return response;
    throw new Error(response.status.toString());
}

export const errorType = (httpResponse: any) => {
    if (httpResponse.message === "401") {
        return "Name oder Passwort sind falsch"
    } else if (httpResponse.message === "409") {
        return "Der Benutzername ist bereits vergeben"
    } else {
        return "Unbekannter Fehler: " + httpResponse.message;
    }
};

export default AuthService;
