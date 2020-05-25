const derbetriebundseinumfeld_verzinsung_rechnung = require('./lf1_pics/derbetriebundseinumfeld_verzinsung_rechnung.png');
const wirtschaftskennziffern_produktivitaet = require('./lf1_pics/wirtschaftskennziffern_produktivitaet.png');
const wirtschaftskennziffern_wirtschaftlichkeit = require('./lf1_pics/wirtschaftskennziffern_wirtschaftlichkeit.png');
const wirtschaftskennziffern_gesamt_wirtschaftlichkeit = require('./lf1_pics/wirtschaftskennziffern_gesamt_wirtschaftlichkeit.png');

interface Article {
    url: string
    topic: string
    description: string
    elements: Content[]
}

interface Content {
    type: "title" | "subtitle" | "text" | "list" | "image"
    content: string
    list?: object | null
}

export const articleData: Article[] = [
    {
        "url": "/lf-1/derbetriebundseinumfeld_uebungsaufgaben",
        "topic": "Der Betrieb und sein Umfeld",
        "description": "Aufgaben vom 03.09.2019",
        "elements": [
            {
                "type": "title",
                "content": "Aufgaben aus dem Lehrbuch 'IT-Berufe - Wirtschafts- und Geschäftsprozesse' Seite 8 bis 13"
            },
            {
                "type": "text",
                "content": "1. Sie haben einen Computer für 300,00 € eingekauft. Zusätzliche Handlungskosten von 110,00 € entstehen für den Verkauf. Der Computer wird für 499,00 € zzgl. Umsatzsteuer (19%) verkauft."
            },
            {
                "type": "text",
                "content": "a) Wie hoch ist die Verzinsung oder Umsatzrendite dieses Geschafts?"
            },
            {
                "type": "image",
                "content": derbetriebundseinumfeld_verzinsung_rechnung
            },
            {
                "type": "text",
                "content": "b) Wie hoch wäre die Umsatzrendite, wenn Sie den Computer inklusive 19% Umsatzsteuer für 499,00 € verkaufen?"
            },
            {
                "type": "title",
                "content": "3. Was ist richtig, was ist falsch?"
            },
            {
                "type": "text",
                "content": "a) Unter Applications versteht man die EDV-Ausstattung in einem Unternehmen."
            },
            {
                "type": "text",
                "content": "→ Falsch, unter Applications - auf deutsch Anwendungen - versteht man Software für zB. Computer oder Smartphone."
            },
            {
                "type": "text",
                "content": "b) Consulting bedeutet Beratung. Ein Consultant ist ein Berater."
            },
            {
                "type": "text",
                "content": "→ Richtig, jedoch gehören noch mehr Bereiche dazu, bspw. Schulungsmaßnahmen."
            },
            {
                "type": "text",
                "content": "c) Falsch, <u>ein Organigramm ist eine Darstellung des Unternehmens inklusive der Organisationsstruktur</u>."
            },
            {
                "type": "text",
                "content": "→ Richtig, jedoch gehören noch mehr Bereiche dazu, bspw. Schulungsmaßnahmen."
            },
            {
                "type": "text",
                "content": "d) After-Sales-Services sind Dienstleistungen vor der Bestellung."
            },
            {
                "type": "text",
                "content": "→ Falsch, es sind Dienstleistungen nach dem Verkauf."
            },
            {
                "type": "text",
                "content": "e) Ein Geschäftsportfolio zeigt die Produkte und Leistungen eines Unternehmens auf."
            },
            {
                "type": "text",
                "content": "→ Richtig, evtl. noch den Bestand oder Sortiment."
            },
            {
                "type": "text",
                "content": "f) Rendite bedeutet Rente, betrifft somit alle zusätzlichen Zahlungen nach dem Verkauf."
            },
            {
                "type": "text",
                "content": "→ Falsch, Rendite = Verzinsung des Gewinns"
            },
            {
                "type": "text",
                "content": "→ Umsatz minus Kosten = Gewinn"
            },
            {
                "type": "text",
                "content": "→ Gewinn durch Umsatz mal 100 = x%"
            },
            {
                "type": "text",
                "content": "g) Kunden und Lieferanten sind Stakeholder, Banken und Staaten nicht."
            },
            {
                "type": "text",
                "content": "→ Falsch."
            },
            {
                "type": "text",
                "content": "h) Wenn ein Azubi einen Schaden mit Vorsatz oder fahrlässig erzeugt, muss er als Azubi nicht für den Schaden haften."
            },
            {
                "type": "text",
                "content": "→ Falsch."
            },
        ]
    },
    {
        "url": "/lf-1/beduerfnisse_gueter",
        "topic": "Bedürfnisse & Güter",
        "description": "Mitschrift vom 28.10.2019",
        "elements": [
            {
                "type": "text",
                "content": "Bedürfnisse sind Wünsche, die durch Mangelempfindungen hervorgerufen werden.  Daraus lässt sich ein Geschäft machen, sofern das Verlangen noch nicht gestillt wurde."
            },
            {
                "type": "text",
                "content": "<u>Güter</u>"
            },
            {
                "type": "text",
                "content": "… Lassen sich unterteilen in …"
            },
            {
                "type": "text",
                "content": "Wirtschaftsgüter (knappe Güter)"
            },
            {
                "type": "text",
                "content": "und"
            },
            {
                "type": "text",
                "content": "Freie Güter (Sonne, Luft, Regenwasser)"
            },
            {
                "type": "text",
                "content": "… diese lassen sich unterteilen in …"
            },
            {
                "type": "list",
                "content": "Dienstleistungsgüter",
                "list": [
                    "Spedition",
                    "Beratung",
                    "Handel",
                    "Versicherungen",
                    "Banken"
                ]
            },
            {
                "type": "list",
                "content": "Rechtegüter",
                "list": [
                    "Patent",
                    "Gütezeichen",
                    "Lizenz",
                    "Marke",
                    "Wegerecht"
                ]
            },
            {
                "type": "text",
                "content": "und Sachgüter (materielle Güter)"
            },
            {
                "type": "text",
                "content": "… diese lassen sich unterteilen in …"
            },
            {
                "type": "text",
                "content": "Produktionsgüter (Investitionsgüter)"
            },
            {
                "type": "text",
                "content": "und"
            },
            {
                "type": "text",
                "content": "Konsumgüter… Lassen sich unterteilen in …"
            },
            {
                "type": "list",
                "content": "Verbrauchsgüter",
                "list": [
                    "Diesel (LKW)",
                    "Öl (Maschine)",
                    "Benzin für privat KPW",
                    "Lebensmittel"
                ]
            },
            {
                "type": "list",
                "content": "Gebrauchsgüter",
                "list": [
                    "LKW (Maschine)",
                    "Privat PKW",
                    "Möbel"
                ]
            }
        ]
    },
    {
        "url": "/lf-1/beduerfnisse_und_gueter_aufgaben_der_betriebe_und_unternehmen",
        "topic": "Bedürfnisse & Güter",
        "description": "Mitschrift vom 28.10.2019",
        "elements": [
            {
                "type": "title",
                "content": "Welche Aufgaben haben Betriebe & Unternehmen?"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Soziookönomisches System (<u>Arbeitsplätze schaffen</u>)",
                    "<u>Bedürfnisse der Menschen realisieren </u> (Güter)",
                ]
            },
            {
                "type": "title",
                "content": "Arten von Betrieben"
            },
            {
                "type": "list",
                "content": "Betriebe werden unterschieden …",
                "list": [
                    {
                        "content": "nach der der Leistung",
                        "sublist": [
                            "Sachleistungsbetriebe wie zB. Computerhersteller",
                            "Dienstleistungsbetriebe wie zB. IT Systemintegratoren, Betriebe die Netzwerke installieren"
                        ]
                    },
                    {
                        "content": "nach Wirtschaftszweigen",
                        "sublist": [
                            "Industriebetriebe",
                            "Handwerksbetriebe",
                            "Handelsbetriebe",
                            "Kreditinstitute",
                            "Versicherungsbetriebe",
                            "Verkehrsbetriebe",
                        ]
                    },
                    {
                        "content": "nach dem vorherrschenden Einsatz eines Produktionsfaktors",
                        "sublist": [
                            "Arbeitsintensive Betriebe (hoher Lohnkostenanteil) zB. Handwerksbetriebe",
                            "Anlage- oder kapitalintensive Betriebe (hoher Maschinenkostenanteil), zB. Betriebe der chemischen Industrie",
                            "Materialintensive Betriebe (hoher Materialkostenanteil) zB. Stahlwerke",
                            "Energieintensive Betriebe (hoher Energiekostenanteil) zB. Betriebe der Aluminiumherstellung",
                        ]
                    },
                ]
            },
        ]
    },
    {
        "url": "/lf-1/wirtschaftskennziffern_grundlagen_und_berechnung",
        "topic": "Wirtschaftskennziffern",
        "description": "Mitschrift vom 13.02.2020",
        "elements": [
            {
                "type": "title",
                "content": "Wirtschaftskennziffern = Erfolgskennziffern"
            },
            {
                "type": "text",
                "content": "Messen den Erfolg des Unternehmens"
            },
            {
                "type": "list",
                "content": "test",
                "list": [
                    "Produktivität",
                    "Wirtschaftlichkeit",
                    "Rentabilität",
                ]
            },
            {
                "type": "title",
                "content": "Produktivität"
            },
            {
                "type": "image",
                "content": wirtschaftskennziffern_produktivitaet
            },
            {
                "type": "title",
                "content": "Wirtschaftlichkeit"
            },
            {
                "type": "text",
                "content": "Ist eine dimensionale Größe"
            },
            {
                "type": "text",
                "content": "Beispiel: W = 5"
            },
            {
                "type": "image",
                "content": wirtschaftskennziffern_wirtschaftlichkeit
            },
            {
                "type": "title",
                "content": "Gesamtwirtschaftlichkeit"
            },
            {
                "type": "image",
                "content": wirtschaftskennziffern_gesamt_wirtschaftlichkeit
            }
        ]
    },
    {
        "url": "/lf-1/wirtschaftskennziffern_uebung_berechnung_wirtschaftlichkeit_1",
        "topic": "Wirtschaftskennziffern",
        "description": "Mitschrift vom 14.02.2020",
        "elements": [
            {
                "type": "title",
                "content": "Aufgabenstellung"
            },
            {
                "type": "text",
                "content": "In einem chemischen Großlabor der Schering AG wurde im vergangenen Jahr ein neues Medikament zur akuten Behandlung eines Schlaganfalls eingeführt. Zur Herstellung von 10 Mengeneinheiten (ME) des Wirkstoffes \"AMPA-Antagonist\" sind 7,2kg des Rohstoffes \"Beta-Interferon\" erforderlich. Ferner fallen hierfür folgende Faktorverbräuche an:"
            },
            {
                "type": "list",
                "content": "test",
                "list": [
                    "Stromverbrauch = 5kWh",
                    "Arbeitszeit = 30min",
                ]
            },
            {
                "type": "text",
                "content": "Während des Herstellungsprozesses gehen aufgrund der Hitzeentwicklung 10% des eingesetzten Rohstoffes \"Beta-Interferon\" verloren. Die Einkaufspreise der Produktionsfaktoren betragen:"
            },
            {
                "type": "list",
                "content": "test",
                "list": [
                    "\"Beta-Interferon\" = 0,25€ / kg",
                    "Stromverbrauch = 0,08€ / kWh",
                    "Arbeitszeit = 25€ / Stunde",
                ]
            },
            {
                "type": "text",
                "content": "Während des Herstellungsprozesses gehen aufgrund der Hitzeentwicklung 10% des eingesetzten Rohstoffes \"Beta-Interferon\" verloren. Die Einkaufspreise der Produktionsfaktoren betragen:"
            },
            {
                "type": "text",
                "content": "Während des Herstellungsprozesses gehen aufgrund der Hitzeentwicklung 10% des eingesetzten Rohstoffes \"Beta-Interferon\" verloren. Die Einkaufspreise der Produktionsfaktoren betragen:"
            },
            {
                "type": "image",
                "content": derbetriebundseinumfeld_verzinsung_rechnung
            },
        ]
    },
    {
        "url": "/lf-1/test",
        "topic": "test",
        "description": "test",
        "elements": [
            {
                "type": "title",
                "content": "test"
            },
            {
                "type": "text",
                "content": "test"
            },
            {
                "type": "image",
                "content": derbetriebundseinumfeld_verzinsung_rechnung
            },
            {
                "type": "list",
                "content": "test",
                "list": [
                    "test",
                    "test",
                    {
                        "content": "test",
                        "sublist": [
                            "test",
                            "test"
                        ]
                    },
                ]
            },
        ]
    },
    {
        "url": "/lf-2/aufgaben_des_projektmanagements",
        "topic": "Geschäftsprozesse und betriebliche Organisation",
        "description": "Mitschrift vom 03.09.2019",
        "elements": [
            {
                "type": "list",
                "content": "Definitionsphase",
                "list": [
                    "Analysieren des Ausgangsproblems",
                    "Formulierungen der Projektziele und Anforderungen",
                    "Analysieren der Durchführbarkeit des Projekts"
                ]
            },
            {
                "type": "list",
                "content": "Planungsphase",
                "list": [
                    "Identifizieren der Arbeitspakete",
                    "Erstellen des Zeitplans",
                    "Erstellen des Kostenplans"
                ]
            },
        ]
    }
];
