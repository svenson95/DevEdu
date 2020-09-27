export const basePath = "http://159.65.105.150:3000";

export const errorType = async (response: Response) => {
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.status === 401) {
        return "Die eingegebenen Daten sind nicht korrekt"
    } else if (response.status === 400) {
        return "Die eingegebenen Daten sind ungültig (Name/Passwort zu kurz oder lang)"
    } else if (data.message === 'Username is already taken') {
        return "Der Benutzername ist bereits vergeben"
    } else if (data.message === 'E-Mail is already taken') {
        return "Die E-Mail Adresse ist bereits vergeben"
    } else {
        return "Unbekannter Fehler: " + response;
    }
};
