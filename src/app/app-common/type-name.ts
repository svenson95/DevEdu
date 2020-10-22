const typeName = (type: string) => {
    if (type === 'article') {
        return 'Artikel';
    } else if (type === 'quiz') {
        return 'Quiz';
    } else if (type === 'tasks') {
        return 'Aufgaben';
    } else if (type === 'index-cards') {
        return 'Karteikarten';
    } else {
        return type;
    }
}

export default typeName;
