export interface Subject {
    subject: string
    topics: Topic[]
    tests: Test[]
}

interface Topic {
    title: string
    links: Link[]
}

interface Link {
    title: string
    description: string
    url: string
}

interface Test {
    title: string
    description: string
    url: string
}
