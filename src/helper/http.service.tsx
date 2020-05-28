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
