export const basePath = "http://159.65.105.150:3000/";

export async function fetchData(input: RequestInfo): Promise<any> {
    try {
        const response = await fetch(input).then(checkForError);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

async function checkForError(res: Response) {
    if (res.ok) {
        return res;
    } else {
        throw new Error(res.statusText)
    }
}

export async function fetchImage(input: RequestInfo): Promise<any> {
    try {
        const response = await fetch(input, { headers: { "Content-Type" : "image/png" } }).then(checkForError);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        throw new Error(error);
    }
}

export async function createObjectInDatabase(input: RequestInfo, data = {}) {
    const response = await fetch(input, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
