const wirtschaftskennziffern_produktivitaet = require('./lf1_pics/wirtschaftskennziffern_produktivitaet.png');
const wirtschaftskennziffern_wirtschaftlichkeit = require('./lf1_pics/wirtschaftskennziffern_wirtschaftlichkeit.png');
const wirtschaftskennziffern_gesamt_wirtschaftlichkeit = require('./lf1_pics/wirtschaftskennziffern_gesamt_wirtschaftlichkeit.png');
const produktivitaet_formel = require('./lf1_pics/produktivitaet_formel.png');
const wirtschaftlichkeit_formel = require('./lf1_pics/wirtschaftlichkeit_formel.png');
const wirtschaftlichkeit_gesamt_aufgabe_c = require('./lf1_pics/wirtschaftlichkeit_gesamt_aufgabe_c.png');

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
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "1. Sie haben einen Computer für 300,00 € eingekauft. Zusätzliche Handlungskosten von 110,00 € entstehen für den Verkauf. Der Computer wird für 499,00 € zzgl. Umsatzsteuer (19%) verkauft."
            },
            {
                "type": "text",
                "content": "<b>a) Wie hoch ist die Verzinsung oder Umsatzrendite dieses Geschafts?</b>"
            },
            {
                "type": "text",
                "content": "→ 499 x 1,19 = <u>593,81 €</u>"
            },
            {
                "type": "text",
                "content": "<b>b) Wie hoch wäre die Umsatzrendite, wenn Sie den Computer inklusive 19% Umsatzsteuer für 499,00 € verkaufen?</b>"
            },
            {
                "type": "text",
                "content": "→ 119 % = 499,- € <br/> → 1 % = 4,19 € <br/> → 19 % = <u>79,67 €</u>"
            },
            {
                "type": "text",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "3. Was ist richtig, was ist falsch?"
            },
            {
                "type": "text",
                "content": "<b>a) Unter Applications versteht man die EDV-Ausstattung in einem Unternehmen.</b>"
            },
            {
                "type": "text",
                "content": "→ Falsch, unter Applications - auf deutsch Anwendungen - versteht man Software für zB. Computer oder Smartphone."
            },
            {
                "type": "text",
                "content": "<b>b) Consulting bedeutet Beratung. Ein Consultant ist ein Berater.</b>"
            },
            {
                "type": "text",
                "content": "→ Richtig, jedoch gehören noch mehr Bereiche dazu, bspw. Schulungsmaßnahmen."
            },
            {
                "type": "text",
                "content": "<b>c) Das Organigramm nennt alle Mitarbeiter des Unternehmens.</b>"
            },
            {
                "type": "text",
                "content": "→ Falsch, <u>ein Organigramm ist eine Darstellung des Unternehmens inklusive der Organisationsstruktur</u>."
            },
            {
                "type": "text",
                "content": "<b>d) After-Sales-Services sind Dienstleistungen vor der Bestellung.</b>"
            },
            {
                "type": "text",
                "content": "→ Falsch, es sind Dienstleistungen nach dem Verkauf."
            },
            {
                "type": "text",
                "content": "<b>e) Ein Geschäftsportfolio zeigt die Produkte und Leistungen eines Unternehmens auf.</b>"
            },
            {
                "type": "text",
                "content": "→ Richtig, evtl. noch den Bestand oder Sortiment."
            },
            {
                "type": "text",
                "content": "<b>f) Rendite bedeutet Rente, betrifft somit alle zusätzlichen Zahlungen nach dem Verkauf.</b>"
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
                "content": "<b>g) Kunden und Lieferanten sind Stakeholder, Banken und Staaten nicht.</b>"
            },
            {
                "type": "text",
                "content": "→ Falsch."
            },
            {
                "type": "text",
                "content": "<b>h) Wenn ein Azubi einen Schaden mit Vorsatz oder fahrlässig erzeugt, muss er als Azubi nicht für den Schaden haften.</b>"
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
                "content": "<u>Wirtschaftsgüter</u> (knappe Güter)"
            },
            {
                "type": "text",
                "content": "und"
            },
            {
                "type": "text",
                "content": "<u>Freie Güter</u> (Sonne, Luft, Regenwasser)"
            },
            {
                "type": "text",
                "content": "… diese lassen sich unterteilen in …"
            },
            {
                "type": "list",
                "content": "<u>Dienstleistungsgüter</u>",
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
                "content": "<u>Rechtegüter</u>",
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
                "content": "und <u>Sachgüter</u> (materielle Güter)"
            },
            {
                "type": "text",
                "content": "… diese lassen sich unterteilen in …"
            },
            {
                "type": "text",
                "content": "<u>Produktionsgüter</u> (Investitionsgüter)"
            },
            {
                "type": "text",
                "content": "und"
            },
            {
                "type": "text",
                "content": "<u>Konsumgüter</u> … Lassen sich unterteilen in …"
            },
            {
                "type": "list",
                "content": "<u>Verbrauchsgüter</u>",
                "list": [
                    "Diesel (LKW)",
                    "Öl (Maschine)",
                    "Benzin für privat KPW",
                    "Lebensmittel"
                ]
            },
            {
                "type": "list",
                "content": "<u>Gebrauchsgüter</u>",
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
                "content": "<u>Betriebe werden unterschieden …</u>",
                "list": [
                    {
                        "content": "<u>nach der der Leistung</u>",
                        "sublist": [
                            "Sachleistungsbetriebe wie zB. Computerhersteller",
                            "Dienstleistungsbetriebe wie zB. IT Systemintegratoren, Betriebe die Netzwerke installieren"
                        ]
                    },
                    {
                        "content": "<u>nach Wirtschaftszweigen</u>",
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
                        "content": "<u>nach dem vorherrschenden Einsatz eines Produktionsfaktors</u>",
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
                "type": "subtitle",
                "content": "Wirtschaftskennziffern = Erfolgskennziffern"
            },
            {
                "type": "list",
                "content": "Messen den Erfolg des Unternehmens",
                "list": [
                    "Produktivität",
                    "Wirtschaftlichkeit",
                    "Rentabilität",
                ]
            },
            {
                "type": "text",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<u>Produktivität</u>"
            },
            {
                "type": "text",
                "content": "Es gibt nur Teilproduktivitäten in Bezug zum Produktionsfaktor"
            },
            {
                "type": "image",
                "content": wirtschaftskennziffern_produktivitaet
            },
            {
                "type": "text",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<u>Wirtschaftlichkeit</u>"
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
                "type": "text",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<u>Gesamtwirtschaftlichkeit</u>"
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
                "type": "list",
                "content": "In einem chemischen Großlabor der Schering AG wurde im vergangenen Jahr ein neues Medikament zur akuten Behandlung eines Schlaganfalls eingeführt. Zur Herstellung von 10 Mengeneinheiten (ME) des Wirkstoffes \"AMPA-Antagonist\" sind 7,2kg des Rohstoffes \"Beta-Interferon\" erforderlich. Ferner fallen hierfür folgende Faktorverbräuche an:",
                "list": [
                    "Stromverbrauch = 5kWh",
                    "Arbeitszeit = 30min",
                ]
            },
            {
                "type": "list",
                "content": "Während des Herstellungsprozesses gehen aufgrund der Hitzeentwicklung 10% des eingesetzten Rohstoffes \"Beta-Interferon\" verloren. Die Einkaufspreise der Produktionsfaktoren betragen:",
                "list": [
                    "\"Beta-Interferon\" = 0,25€ / kg",
                    "Stromverbrauch = 0,08€ / kWh",
                    "Arbeitszeit = 25€ / Stunde",
                ]
            },
            {
                "type": "text",
                "content": "Der entstehende Wirkstoff kann für 6€ / Mengeneinheit verkauft werden."
            },
            {
                "type": "subtitle",
                "content": "Gegeben:"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "\"Beta-Interferon\" → 7,2 kg (10% Rohstoffverlust, daher sind das 90%) + 10% = 8 kg",
                    "Stromverbrauch → 5 kWh",
                    "Arbeitszeit → 30 min",
                ]
            },
            {
                "type": "text",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Fragen:",
            },
            {
                "type": "text",
                "content": "<b>a) Erläutern Sie die Begriffe Produktivität und Wirtschaftlichkeit! Wie werden diese Begriffe definiert? Formulieren Sie jeweils das Maximum- und Minimumsprinzip!</b>",
            },
            {
                "type": "subtitle",
                "content": "Produktivität's Kennziffer",
            },
            {
                "type": "text",
                "content": "<u>Die Produktivität setzt den Input und Output eines Unternehmens in eine mengenmäßige Relation</u>. Hier erfährt man jedoch nichts über den Geldwert, in einer Tischlerei würde man die Produktivität beispielsweise mit 20 Tischen / Stunde angeben, wobei auch die Zeitangabe variieren kann."
            },
            {
                "type": "text",
                "content": "Sie ist daher ein Indikator für die Effizienz eines Unternehmens, also der erbrachten Leistung und dem dafür nötigen Ressourceneinsatz. Input und Output werden dabei nicht monetär bewertet."
            },
            {
                "type": "image",
                "content": produktivitaet_formel
            },
            {
                "type": "subtitle",
                "content": "Wirtschaftlichkeit 's Kennziffer",
            },
            {
                "type": "text",
                "content": "Demgegenüber steht die Wirtschaftlichkeit, <u>die Relation zwischen Input und Output gemessen in monetären Werten (finanziell)</u>. Sie misst, in wie fern die geplanten <u>Ziele tatsächlich erreicht</u> worden sind. Bei Werten größer als 1 spricht man von wirtschaftlichem Handeln, in diesem Bereich fängt das Unternehmen an schwarze Zahlen zu schreiben."
            },
            {
                "type": "image",
                "content": wirtschaftlichkeit_formel
            },
            {
                "type": "text",
                "content": "Mit Hilfe der Wirtschaftlichkeits und Produktivitäts Kennzahlen lassen sich <u>Geschäftsjahre vergleichen</u>. Ein Unternehmen <u>kann trotz hoher Produktivität unwirtschaftlich</u> sein. Zudem kann die Produktivität eines Unternehmens steigen … <br/> → durch verbesserte Fertigungsverfahren"
            },
            {
                "type": "text",
                "content": "… und die Wirtschaftlichkeit zur gleichen Zeit sinken <br/> → durch steigende Gehälter."
            },
            {
                "type": "subtitle",
                "content": "Minimal- & Maximalprinzip",
            },
            {
                "type": "text",
                "content": "Unternehmen können zwei ökonomische Prinzipien verfolgen, das Minimal- oder das Maximalprinzip. Das Minimalprinzip besagt, dass mit <u>minimalem Input ein gegebener Output</u> erreicht werden soll, beim Maximalprinzip wird mit einem <u>gegebenen Input versucht maximalen Output</u> zu erreichen."
            },
            {
                "type": "text",
                "content": "Schauen wir uns zur Produktionssteigerung ein Beispiel an. Um die Steigerung als Prozentzahl interpretieren zu können, nehmen wir zunächst an, dass sowohl in 2018, als auch in 2019 bei der Herstellung 50 Tonnen Holz verbraucht wurden. Der Output im Jahr 2018 bleibt bei 20.000 Bänken, im Jahr 2019 steigt er auf 40.000."
            },
            {
                "type": "text",
                "content": "Die Produktivität in 2018 liegt bei 400 Bänken pro Tonne Holz. In 2019 liegt die Zahl bei 800."
            },
            {
                "type": "text",
                "content": "Die Produktivitätssteigerung liegt also bei ((800 - 400) / 400) = 1,0 = 100%."
            },
            {
                "type": "text",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<b>b) Bestimmen Sie für die drei Faktorarten die Produktivitäts- und Wirtschaftlichkeitskennziffern!</b>",
            },
            {
                "type": "text",
                "content": "Hinweis: Beachten Sie bei der Bestimmung der Teilproduktivität bzw. -wirtschaftlichkeit des Faktors \"Rohstoff\", dass im Rahmen des Produktionsprozesses 10% des Rohstoffes während der Herstellung verloren gehen. Die Teilproduktivität bzw. -wirtschaftlichkeit des Faktors \"Arbeitszeit\" bezieht sich auf Stunden. Entsprechende Minutenangaben sind umzurechnen!"
            },
            {
                "type": "subtitle",
                "content": "Gesucht: Produktivitäts- & Wirtschaftskennziffer",
            },
            {
                "type": "list",
                "content": "Produktivität's Kennziffern",
                "list": [
                    "\"Beta-Interferon\" → 10stk / 8kg = <u>1,25</u>",
                    "Stromverbrauch → 10stk / 5 kWh = <u>2</u>",
                    "Arbeitszeit → 10stk / 0,5h = <u>20</u>",
                ]
            },
            {
                "type": "list",
                "content": "Wirtschaftlichkeit's Kennziffern",
                "list": [
                    "\"Beta-Interferon\" → 7,5€ / 0,25€ = <u>30</u>",
                    "Stromverbrauch → 12€ / 0,08€ = <u>150</u>",
                    "Arbeitszeit → 120€ / 25€ = <u>4,8</u>",
                ]
            },
            {
                "type": "text",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<b>c) Berechnen Sie außerdem die Gesamtwirtschaftlichkeit über alle Faktorverbräuche. Was sagt diese Kennziffer aus?</b>",
            },
            {
                "type": "subtitle",
                "content": "Gesamtwirtschaftlichkeit",
            },
            {
                "type": "image",
                "content": wirtschaftlichkeit_gesamt_aufgabe_c
            },
            {
                "type": "text",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "https://betriebswirt-basics.de/was-bedeuten-produktivitaet-und-wirtschaftlichkeit/",
                    "https://studyflix.de/wirtschaftswissenschaften/produktivitat-1605",
                ]
            },
        ]
    },
    {
        "url": "/lf-1/wirtschaftskennziffern_uebung_berechnung_wirtschaftlichkeit_2",
        "topic": "Wirtschaftskennziffern",
        "description": "Mitschrift vom 05.03.2020",
        "elements": [
            {
                "type": "title",
                "content": "Aufgabenstellung"
            },
            {
                "type": "list",
                "content": "In einem chemischen Großlabor der Schering AG wurde im vergangenen Jahr ein neues Medikament zur akuten Behandlung eines Schlaganfalls eingeführt. Zur Herstellung von 10 Mengeneinheiten (ME) des Wirkstoffes \"AMPA-Antagonist\" sind 7,2 kg des Rohstoffes \"Beta-Interferon\" erforderlich. Ferner fallen hierfür folgende Faktorverbräuche an:",
                "list": [
                    "Stromverbrauch = 5 kWh",
                    "Arbeitszeit = 30 min",
                ]
            },
            {
                "type": "list",
                "content": "Während des Herstellungsprozesses gehen aufgrund der Hitzeentwicklung 10% des eingesetzten Rohstoffes \"Beta-Interferon\" verloren. Die Einkaufspreise der Produktionsfaktoren betragen:",
                "list": [
                    "\"Beta-Interferon\" = <u>0,25 €</u> / kg",
                    "Stromverbrauch = 0,08 € / kWh",
                    "Arbeitszeit = 25 € / Stunde",
                ]
            },
            {
                "type": "text",
                "content": "Der entstehende Wirkstoff kann für <u>6 €</u> / Mengeneinheit verkauft werden."
            },
            {
                "type": "subtitle",
                "content": "Gegeben:"
            },
            {
                "type": "list",
                "content": "Während des Herstellungsprozesses gehen aufgrund der Hitzeentwicklung 10% des eingesetzten Rohstoffes \"Beta-Interferon\" verloren. Die Einkaufspreise der Produktionsfaktoren betragen:",
                "list": [
                    "\"Beta-Interferon\" = 7,2 kg (10% Rohstoffverlust, daher sind das 90%) + 10% = <u>8 kg</u>",
                    "Stromverbrauch = 5 kWh",
                    "Arbeitszeit = 30 min",
                ]
            },
            {
                "type": "subtitle",
                "content": "Fragen:"
            },
            {
                "type": "text",
                "content": "<b>d) In diesem Jahr wurde eine Umstellung des Produktionsprozesses für \"AMPA-Antagonist\" bei der Schering AG durchgeführt. Dadurch konnte der Verbrauch an Arbeitszeit und Energie um jeweils 20% gesenkt werden. Gleichzeitig stieg der Stundenlohn aufgrund des neuen Tarifvertrages auf 30,00 €. Die Kosten des Stromverbrauchs haben sich aufgrund der insgesamt gestiegenen Energiepreise des Weltmarktes auf 0,10 € / kWh erhöht. Berechnen Sie die partiellen Produktivitäts- und Wirtschaftlichkeitskennziffern sowie die Gesamtwirtschaftlichkeit! Wie lassen sich die Ergebnisse interpretieren?</b>"
            },
            {
                "type": "text",
                "content": "Hinweis: Um Preis- und Mengeneffekte voneinander trennen zu können, sollten die Wirtschaftlichkeitskennziffern zu konstanten (alten) Preisen sowie zu variablen (neuen) Preisen berechnet werden."
            },
            {
                "type": "list",
                "content": "Angepasste Werte",
                "list": [
                    {
                        "content": "Mengeneffekt",
                        "sublist": [
                            "Stromverbrauch = 5 kWh → 4 kWh",
                            "Arbeitszeit = 0,5 h → 0,4 h"
                        ]
                    },
                    {
                        "content": "Preiseffekt",
                        "sublist": [
                            "Lohn = 25 € / h → 30 € / h",
                            "Strom = 0,08 € / kWh → 0,10 € / kWh"
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "W<sub>Strom</sub><sup>1</sup> = 10 ME x 6 € / 5 kWh x 0,10 € = 60 € / 0,50 € = <u>120</u>"
            },
            {
                "type": "text",
                "content": "W<sub>Strom</sub><sup>2</sup> = 10 ME x 6 € / 4 kWh x 0,08 € = 60 € / 0,32 € = <u>187,5</u>"
            },
            {
                "type": "text",
                "content": "W<sub>Strom</sub><sup>3</sup> = 10 ME x 6 € / 4 kWh x 0,10 € = 60 € / 0,40 € = <u>150</u>"
            },
            {
                "type": "text",
                "content": "W<sub>Strom</sub><sup>4</sup> = 10 ME x 6 € / 5 kWh x 0,08 € = 60 € / 0,40 € = <u>150</u>"
            },
            {
                "type": "text",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "W<sub>Arbeitszeit</sub><sup>1</sup> = 10 ME x 6 € / 0,5 h x 30 € = 60 € / 15 € = <u>4</u>"
            },
            {
                "type": "text",
                "content": "W<sub>Arbeitszeit</sub><sup>2</sup> = 10 ME x 6 € / 0,4 h x 25 € = 60 € / 10 € = <u>6</u>"
            },
            {
                "type": "text",
                "content": "W<sub>Arbeitszeit</sub><sup>3</sup> = 10 ME x 6 € / 0,4 h x 30 € = 60 € / 12 € = <u>5</u>"
            },
            {
                "type": "text",
                "content": "W<sub>Arbeitszeit</sub><sup>4</sup> = 10 ME x 6 € / 0,5 h x 25 € = 60 € / 12,50 € = <u>4,8</u>"
            },
            {
                "type": "text",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "W<sub>Gesamt</sub><sup>1</sup> = 10 ME x 6 € / (0,5 h x 30 €) + (0,10 € x 5 kWh) + (0,25 € x 8 kg) <br/> = 60 € / (15 € + 0,50 € + 2 €) = 60 € / 17,50 € = <u>3,43</u>"
            },
            {
                "type": "text",
                "content": "W<sub>Gesamt</sub><sup>2</sup> = 10 ME x 6 € / (0,4 h x 25 €) + (0,08 € x 4 kWh) + (0,25 € x 8 kg) <br/> = 60 € / (10 € + 0,32 € + 2 €) = 60 € / 12,32 € = <u>4,87</u>"
            },
            {
                "type": "text",
                "content": "W<sub>Gesamt</sub><sup>3</sup> = 10 ME x 6 € / (0,4 h x 30 €) + (0,08 € x 5 kWh) + (0,25 € x 8 kg) <br/> = 60 € / (12 € + 0,4 € + 2 €) = 60 € / 14,40 € = <u>4,17</u>"
            },
            {
                "type": "text",
                "content": "W<sub>Gesamt</sub><sup>4</sup> = 10 ME x 6 € / (0,5 h x 25 €) + (0,10 € x 4 kWh) + (0,25 € x 8 kg) <br/> = 60 € / (12,50 € + 0,40 € + 2 €) = 60 € / 14,90 € = <u>4,03</u>"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    {
                        "content": "1. Neuer Preis | Alte Menge",
                        "sublist": [
                            "W<sub>Strom</sub> = 120",
                            "W<sub>Arbeitszeit</sub> = 4",
                            "W<sub>Gesamt</sub> = 3,43",
                        ]
                    },
                    {
                        "content": "2. Alter Preis | Neue Menge",
                        "sublist": [
                            "W<sub>Strom</sub> = 187,5",
                            "W<sub>Arbeitszeit</sub> = 6",
                            "W<sub>Gesamt</sub> = 4,87",
                        ]
                    },
                    {
                        "content": "3. Neuer Preis | Neue Menge",
                        "sublist": [
                            "W<sub>Strom</sub> = 150",
                            "W<sub>Arbeitszeit</sub> = 5",
                            "W<sub>Gesamt</sub> = 4,17",
                        ]
                    },
                    {
                        "content": "4. Alter Preis | Alte Menge",
                        "sublist": [
                            "W<sub>Strom</sub> = 150",
                            "W<sub>Arbeitszeit</sub> = 4,8",
                            "W<sub>Gesamt</sub> = 4,03",
                        ]
                    },
                ]
            },
        ]
    },
    {
        "url": "/lf-1/unternehmensziel_gewinn_rentabilitaet",
        "topic": "Wirtschaftskennziffern",
        "description": "Mitschrift vom 06.03.2020",
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
                "content": "test"
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
                "content": "test"
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
