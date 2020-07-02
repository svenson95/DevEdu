export const basePath = "http://159.65.105.150:3000";

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
