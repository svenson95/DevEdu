import {Post} from "../../app/models/post";

export const englisch_posts: Post[] = [
    {
        "url": "basics/introductions",
        "topic": "Basics",
        "subject": "englisch",
        "elements": [
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "text",
                "content": "<b>1) Why you choose your professional field?</b> <br/> → ..."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<b>2) What your best job-experience so far was?</b> <br/> → ..."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<b>3) What you like to do in your free time?</b> <br/> → ..."
            }
        ]
    },
    {
        "url": "basics/summaries",
        "topic": "Basics",
        "subject": "englisch",
        "elements": [
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "text",
                "content": "<b>What is a summary?</b> <br/> → A summary is giving the basic plot or content of an event, book or anything in question."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<b>What ist the structure of a summary?\n</b> <br/> → ..."
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "1." },
                            { "align": "left", "content": "Basic sentence: Short intruduction of the object (title, author, release date, topic)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "2." },
                            { "align": "left", "content": "- Briefly describing the plot <br/> - Usage of present tense <br/> - Neutral and formal language <br/> - Never interpret, never give up your own opinion in a summary" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "3." },
                            { "align": "left", "content": "..." }
                        ]
                    }
                ]
            }
        ]
    },







    {
        "url": "test",
        "topic": "test",
        "subject": "englisch",
        "elements": [
            {
                "type": "title",
                "content": "test"
            },
            {
                "type": "subtitle",
                "content": "test"
            },
            {
                "type": "text",
                "content": "test"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "code",
                "language": "javascript",
                "content": "test"
            },
            {
                "type": "list",
                "content": "test",
                "list": [
                    "test",
                    "test",
                    {
                        "content": "test",
                        "sublist": [
                            "test",
                            "test"
                        ]
                    }
                ]
            },
            {
                "type": "table",
                "content": "test",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "test" }
                        ]
                    }
                ]
            }
        ]
    }
];
