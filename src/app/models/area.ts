export interface Area {
    url: string
    description: string
    groups: Group[]
}

export interface Group {
    title: string
    items: AreaItem[]
}

export interface AreaItem {
    title: string
    description: string
    image: string
    url: string
}
