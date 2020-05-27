export interface Article {
    url: string
    topic: string
    elements: Content[]
}

interface Content {
    type: "title" | "subtitle" | "text" | "list" | "image" | "line" | "quiz" | "table"
    content: string
    list?: object | null
    rows?: object | null
}
