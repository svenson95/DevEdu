interface Article {
    url: string
    content: Content[]

}

interface Content {
    type: "title" | "subtitle" | "text" | "list"
    content: string
    list?: object | null
}

export const articleData: Article[] = [
    {
        url: "/lf-1/derbetriebundseinumfeld_uebungsaufgaben",
        content: [
            {
                type: "title",
                content: "1. Sie haben einen Computer für 300,00 € eingekauft. Zusätzliche Handlungskosten von 110,00 € entstehen für den Verkauf. Der Computer wird für 499,00 € zzgl. Umsatzsteuer (19%) verkauft."
            },
            {
                type: "text",
                content: "a) Wie hoch ist die Verzinsung oder Umsatzrendite dieses Geschafts?"
            },
            {
                type: "text",
                content: "b) Wie hoch wäre die Umsatzrendite, wenn Sie den Computer inklusive 19% Umsatzsteuer für 499,00 € verkaufen?"
            },
            {
                type: "title",
                content: "3. Was ist richtig, was ist falsch?"
            },
            {
                type: "text",
                content: "a) Unter Applications versteht man die EDV-Ausstattung in einem Unternehmen."
            },
            {
                type: "text",
                content: "→ Falsch, unter Applications - auf deutsch Anwendungen - versteht man Software für zB. Computer oder Smartphone."
            },
            {
                type: "text",
                content: "a) Unter Applications versteht man die EDV-Ausstattung in einem Unternehmen."
            },
            {
                type: "text",
                content: "→ Falsch, unter Applications - auf deutsch Anwendungen - versteht man Software für zB. Computer oder Smartphone."
            },
            {
                type: "text",
                content: "b) Consulting bedeutet Beratung. Ein Consultant ist ein Berater."
            },
            {
                type: "text",
                content: "→ Richtig, jedoch gehören noch mehr Bereiche dazu, bspw. Schulungsmaßnahmen."
            },
        ]
    },
    {
        url: "/lf-2/aufgaben_projektmanagements",
        content: [
            {
                type: "list",
                content: "Definitionsphase",
                list: [
                    "Analysieren des Ausgangsproblems",
                    "Formulierungen der Projektziele und Anforderungen",
                    "Analysieren der Durchführbarkeit des Projekts"
                ]
            },

            {
                type: "list",
                content: "Planungsphase",
                list: [
                    "Identifizieren der Arbeitspakete",
                    "Erstellen des Zeitplans",
                    "Erstellen des Kostenplans"
                ]
            },

            {
                type: "list",
                content: "Realisierungsphase",
                list: [
                    "Motivieren des Projektteams",
                    "Minimieren von Soll-Ist-Abweichungen",
                    "Dokumentierung des Projekts"
                ]
            },

            {
                type: "list",
                content: "Abschlussphase",
                list: [
                    "Präsentation des Projekts / Projektergebnis",
                    "Reflektieren des Projekts (Abschlussbesprechung)",
                    "Erstellung eines Abschlussberichts"
                ]
            },
        ]
    }
];
