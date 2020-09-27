export interface Post {
    url: string
    topic: string
    subject: string
    lessonDate: string;
    lastUpdate: string;
    schoolWeek: string;
    elements: Element[]
}

interface Element {
    type: "title" | "subtitle" | "text" | "image" | "line" | "list" | "table" | "code" | "file" | "hint"
    content: string
    language?: "java" | "php" | "javascript"
    list?: object | null
    ordered?: boolean | null
    rows?: object | null
    object?: object | null
}
