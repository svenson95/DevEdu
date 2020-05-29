export interface Post {
    url: string
    topic: string
    elements: Element[]
}

interface Element {
    type: "title" | "subtitle" | "text" | "image" | "line" | "quiz" | "list" | "table"
    content: string
    list?: object | null
    rows?: object | null
}
