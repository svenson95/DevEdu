import {basePath} from "./http.service";

const DataService = {
    getPost(postUrl: string) {
        return fetch(
            basePath + "/subjects/" + postUrl
        ).then(async res => {
            if (res.ok) {
                const json = await res.json();
                console.log(json);
                return json;
            } else {
                throw new Error('Get post failed')
            }
        });
    },
    getQuiz(quizUrl: string) {
        return fetch(basePath + "/quiz" + quizUrl).then(async res => {
            if (res.ok) {
                const json = await res.json();
                console.log(json);
                return json;
            } else {
                throw new Error('Get quiz failed');
            }
        });
    },
    editPost(url: string, post: any) {
        return fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(post) // body data type must match "Content-Type" header
        }).then(async res => {
            if (res.ok) {
                const json = await res.json();
                console.log(json);
                return json;
            } else {
                throw new Error('Edit (PATCH) subject failed')
            }
        });
    },
    createPost(subject: string, post: any) {
        return fetch(
            basePath + "/posts/" + subject + "/new",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(post) // body data type must match "Content-Type" header
            }
        ).then(async res => {
            if (res.ok) {
                const json = await res.json();
                console.log(json);
                return json;
            } else {
                throw new Error('Create (PUT) post failed')
            }
        });
    },
    getSubject(subjectId: string) {
        return fetch(
            basePath + "/subjects/" + subjectId
        ).then(async res => {
            if (res.ok) {
                const json = await res.json();
                console.log(json);
                return json;
            } else {
                throw new Error('Get subject failed')
            }
        });
    },
    editSubject(subjectId: string, subject: any) {
        return fetch(
            basePath + "/subjects/" + subjectId + "/edit",
        {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(subject) // body data type must match "Content-Type" header
            }
        ).then(async res => {
            if (res.ok) {
                const json = await res.json();
                console.log(json);
                return json;
            } else {
                throw new Error('Edit (PATCH) subject failed')
            }
        });
    },
    getImage(url: string) {
        return fetch(url, {
            headers: { "Content-Type" : "image/png" }
        }).then(async res => {
            if (res.ok) {
                const json = await res.json();
                console.log(json);
                return json;
            } else {
                throw new Error('Get image failed')
            }
        });
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

export default DataService;
