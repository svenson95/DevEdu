export interface Post {
    url: string
    topic: string
    elements: Element[]
}

interface Element {
    type: "title" | "subtitle" | "text" | "image" | "line" | "quiz" | "list" | "table" | "code" | "file"
    content: string
    language?: "java" | "php" | "javascript"
    list?: object | null
    rows?: object | null
    object?: object | null
}
