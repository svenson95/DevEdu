export interface Post {
    url: string
    topic: string
    elements: Element[]
}

interface Element {
    type: "title" | "subtitle" | "text" | "image" | "line" | "quiz" | "list" | "table" | "code"
    content: string
    language?: "java" | "php"
    list?: object | null
    rows?: object | null
}
