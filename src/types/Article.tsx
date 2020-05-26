export interface Article {
    url: string
    topic: string
    elements: Content[]
}

interface Content {
    type: "title" | "subtitle" | "text" | "list" | "image" | "line" | "quiz"
    content: string
    list?: object | null
}
