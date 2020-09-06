export interface Post {
    url: string
    topic: string
    subject: string
    elements: Element[]
}

interface Element {
    type: "title" | "subtitle" | "text" | "image" | "line" | "list" | "table" | "code" | "file"
    content: string
    language?: "java" | "php" | "javascript"
    list?: object | null
    ordered?: boolean | null
    rows?: object | null
    object?: object | null
}
