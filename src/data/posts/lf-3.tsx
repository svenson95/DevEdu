import {Article} from "../../types/Article";

const netzplantechnik_regeln_1 = require('../lf-3_pics/netzplantechnik_regeln_1.png');
const netzplantechnik_netzplan_und_grantt_grantt_beispiel = require('../lf-3_pics/netzplantechnik_netzplan_und_grantt_grantt_beispiel.png');
const netzplantechnik_netzplan_und_grantt_netzplan_beispiel = require('../lf-3_pics/netzplantechnik_netzplan_und_grantt_netzplan_beispiel.png');
const netzplantechnik_netzplan_uebungsaufgabe_1 = require('../lf-3_pics/netzplantechnik_netzplan_uebungsaufgabe_1.png');

export const lf3_posts: Article[] = [
    {
        "url": "/lf-3/netzplantechnik_regeln_der_netzplantechnik",
        "topic": "Netzplantechnik",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Ein Netzplan ist eine grafische / tabellarische Darstellung einer Ablaufstruktur, er stellt einzelne Vorgänge, deren Dauer und eine zeitliche Anordnung sowie logische Abhängigkeiten dar. Mit dieser Technik können Anfangs- und Endzeitpunkte von einzelnen Vorgängen kalkuliert werden, sowie eventuelle Pufferzeiten."
            },
            {
                "type": "text",
                "content": "Hier im Beispiel wird der Bau eines Hauses geplant, weil nicht alle Arbeiten zur gleichen Zeit ausgeführt werden können. Es werden zuerst die Tragenden Wände aufgestellt, wenn die erste Wand steht, können direkt die Abfluss- oder Elektronik Leitungen verlegt werden. Erst nachdem beide Vorgänge erledigt sind kann das Tapezieren beginnen."
            },
            {
                "type": "image",
                "content": netzplantechnik_regeln_1
            },
            {
                "type": "subtitle",
                "content": "Berechnung"
            },
            {
                "type": "list",
                "content": "Regeln der Netzplantechnik - Berechnung eines Projekts ...",
                "list": [
                    {
                        "content": "Strukturanalyse",
                        "sublist": [
                            "Regel 1 - Abhänigkeiten werden durch Pfeile dargestellt. Pfeilrichtung: von links nach rechts oder von unten nach oben",
                            "Regel 2 - Ein Vorgang kann mehrere Vorgänge und/oder Nachfolger haben",
                            "Regel 3 - Ein Netzplan darf keine Schleifen enthalten (Zeitrechnung wäre dann nicht möglich)",
                            "Regel 4 - Vom Projektanfang (Startknoten) bis zum Projektende (Zielknoten) muss ein ununterbrochener Ablauf gegeben sein"
                        ]
                    },
                    {
                        "content": "Vorwärtsrechnung",
                        "sublist": [
                            "Regel 5 - Startvorgang beginnt mit einem frühesten Anfangszeitpunkt (minStart) von 0",
                            "Regel 6 - Frühester Endzeitpunkt (minEnde) = Frühester Anfangszeitpunkt (minStart) + Dauer",
                            "Regel 7 - Das \"minEnde\" eines Vorgangs ist Frühester Anfangszeitpunkt (minStart) aller unmittelbar nachfolgenden Vorgängen",
                            "Regel 8 - Münden mehrere Vorgänge in einen Knoten, so ist dessen \"minStart\" der größte \"minEnde\" aller Vorgänger"
                        ]
                    },
                    {
                        "content": "Rückwärtsrechnung",
                        "sublist": [
                            "Regel 9 - Frühester Endzeitpunkt (minEnde) des Zielknotens ist Spätester Endzeitpunkt (maxEnde) des Projekts",
                            "Regel 10 - Spätester Anfangszeitpunkt (maxStart) = Spätester Endzeitpunkt (maxEnde) - Dauer",
                            "Regel 11 - Der \"maxStart\" eines Vorgangs ist Spätester Endzeitpunkt (maxEnde) aller unmittelbar vorausgehenden Vorgänge",
                            "Regel 12 - Haben mehrere Vorgänge einen gemeinsamen Vorgänger, so ist dessen \"maxEnde\" der \"maxStart\" aller Nachfolger"
                        ]
                    },
                    {
                        "content": "Zeitreserve und kritischer Weg",
                        "sublist": [
                            "Regel 13 - Gesamt Puffer = maxStart - minStart | oder | Gesamt Puffer = maxEnde - minEnde",
                            "Regel 14 - Freier Puffer<sub>Vorgang A</sub> = minStart<sub>Nachfolger B</sub> - minEnde<sub>Vorgang A</sub>",
                            "Regel 15 - Vorgänge ohne Zeitreserve sind kritische Vorgänge",
                            "Regel 16 - Der kritische Weg ist die Kette aller kritischen Vorgänge"
                        ]
                    },
                ]
            },
        ]
    },
    {
        "url": "/lf-3/netzplan_und_grantt_diagramm",
        "topic": "Netzplantechnik",
        "elements": [
            {
                "type": "title",
                "content": "Gegeben:"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Nr" },
                            { "align": "middle", "content": "Vorgangsbezeichnung" },
                            { "align": "middle", "content": "Vorgänger" },
                            { "align": "middle", "content": "Dauer" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Estrich legen" },
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "2 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Dach stellen" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "3 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "3" },
                            { "align": "left", "content": "Innenputz" },
                            { "align": "middle", "content": "8, 9, 10" },
                            { "align": "middle", "content": "8 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "4" },
                            { "align": "left", "content": "Vorplatz" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "2 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "5" },
                            { "align": "left", "content": "Garten" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "10 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "6" },
                            { "align": "left", "content": "Fundament / Mauerwerk" },
                            { "align": "middle", "content": "13" },
                            { "align": "middle", "content": "10 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "Zaun" },
                            { "align": "middle", "content": "4, 5" },
                            { "align": "middle", "content": "1 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "8" },
                            { "align": "left", "content": "Sanitärinstallation / Außentüren" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "10 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "9" },
                            { "align": "left", "content": "Montage Fenster / Außentüren" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "4 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "10" },
                            { "align": "left", "content": "Elektroinstallation" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "8 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "11" },
                            { "align": "left", "content": "Innentüren" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "12" },
                            { "align": "left", "content": "Außenputz" },
                            { "align": "middle", "content": "9" },
                            { "align": "middle", "content": "8 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "13" },
                            { "align": "left", "content": "Baugrube und Fundamente ausheben" },
                            { "align": "middle", "content": "-" },
                            { "align": "middle", "content": "2 Tage" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "14" },
                            { "align": "left", "content": "Bauabnahme und -übergabe" },
                            { "align": "middle", "content": "7, 11" },
                            { "align": "middle", "content": "1 Tage" },
                        ]
                    },
                ]
            },
            {
                "type": "title",
                "content": "Grantt-Diagramm"
            },
            {
                "type": "text",
                "content": "Vorgänge als <u>Balken</u> darstellen, Tipp: sofort Verbindungspfeil zum nächsten Vorgang setzen"
            },
            {
                "type": "image",
                "content": netzplantechnik_netzplan_und_grantt_grantt_beispiel
            },
            {
                "type": "title",
                "content": "Netzplan"
            },
            {
                "type": "text",
                "content": "Der End- / Zielknoten hat keine Puffer und die min-max Werte sind gleich (oben + unten). Der Gesamt Puffer ergibt sich aus maxStart - minStart."
            },
            {
                "type": "image",
                "content": netzplantechnik_netzplan_und_grantt_netzplan_beispiel
            }
        ]
    },
    {
        "url": "/lf-3/netzplantechnik_netzplan_übungsaufgabe",
        "topic": "Netzplantechnik",
        "elements": [
            {
                "type": "title",
                "content": "Gegeben:"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Nr" },
                            { "align": "middle", "content": "Dauer" },
                            { "align": "middle", "content": "Vorgänger" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "5 Tage" },
                            { "align": "middle", "content": "-" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "8 Tage" },
                            { "align": "middle", "content": "-" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "3 Tage" },
                            { "align": "middle", "content": "1" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "2 Tage" },
                            { "align": "middle", "content": "1, 2" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "5 Tage" },
                            { "align": "middle", "content": "3" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "7 Tage" },
                            { "align": "middle", "content": "3, 4" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "7" },
                            { "align": "middle", "content": "4 Tage" },
                            { "align": "middle", "content": "4" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "3 Tage" },
                            { "align": "middle", "content": "5, 6, 7" },
                        ]
                    },
                ]
            },
            {
                "type": "text",
                "content": "GP = FEZ - SEZ <br/> FP = FEZ<sub>VorgangA</sub> - FAZ<sub>VorgangB</sub> (vom kleinsten Vorgänger)"
            },
            {
                "type": "image",
                "content": netzplantechnik_netzplan_uebungsaufgabe_1
            },
        ]
    },
    {
        "url": "/lf-3/vergleich_netzplan_grantt",
        "topic": "test",
        "elements": [
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "", "content": "Darstellung" },
                            { "align": "", "content": "Vorteile" },
                            { "align": "", "content": "Nachteile" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "", "content": "Grantt-Diagramm" },
                            { "align": "", "content": "- Übersichtliche Struktur durch visuelle Darstellung der Dauer" },
                            { "align": "", "content": "- Fehleranfällig beim Zeichnen <br/> - weniger Informationen <br/> - Puffer nicht erkennbar <br/> - Nur für kleinere Projekte geeignet" },
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "", "content": "Netzplan" },
                            { "align": "", "content": "- Puffer lassen sich exakt berechnen" },
                            { "align": "", "content": "- Mehr Informationen (FAZ, SAZ)" },
                        ]
                    },
                ]
            },
        ]
    },
    {
        "url": "/lf-3/visualisierung_regeln",
        "topic": "Visualisierung",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "test"
            },
        ]
    },




    {
        "url": "/lf-3/test",
        "topic": "test",
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
            {
                "type": "table",
                "content": "Gegeben",
                "rows": [
                    {
                        "type": "default",  // "default" | "header"
                        "columns": [
                            { "align": "middle", "content": "Element Column 1" },
                        ]
                    },
                ]
            },
        ]
    },
];
