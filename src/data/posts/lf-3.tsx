import {Post} from "../../types/Post";

export const lf3_posts: Post[] = [
    {
        "url": "/lf-3/netzplantechnik/regeln_der_netzplantechnik",
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
                "content": "http://159.65.105.150:3000/images/5ed10e692053a17208e0a5bd"
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
                    }
                ]
            }
        ]
    },
    {
        "url": "/lf-3/netzplantechnik/netzplan_und_grantt_diagramm",
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
                            { "align": "left", "content": "Vorgangsbezeichnung" },
                            { "align": "middle", "content": "Vorgänger" },
                            { "align": "middle", "content": "Dauer" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Estrich legen" },
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "2 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Dach stellen" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "3 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "3" },
                            { "align": "left", "content": "Innenputz" },
                            { "align": "middle", "content": "8, 9, 10" },
                            { "align": "middle", "content": "8 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "4" },
                            { "align": "left", "content": "Vorplatz" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "2 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "5" },
                            { "align": "left", "content": "Garten" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "10 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "6" },
                            { "align": "left", "content": "Fundament / Mauerwerk" },
                            { "align": "middle", "content": "13" },
                            { "align": "middle", "content": "10 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "Zaun" },
                            { "align": "middle", "content": "4, 5" },
                            { "align": "middle", "content": "1 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "8" },
                            { "align": "left", "content": "Sanitärinstallation / Außentüren" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "10 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "9" },
                            { "align": "left", "content": "Montage Fenster / Außentüren" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "4 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "10" },
                            { "align": "left", "content": "Elektroinstallation" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "8 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "11" },
                            { "align": "left", "content": "Innentüren" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "12" },
                            { "align": "left", "content": "Außenputz" },
                            { "align": "middle", "content": "9" },
                            { "align": "middle", "content": "8 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "13" },
                            { "align": "left", "content": "Baugrube und Fundamente ausheben" },
                            { "align": "middle", "content": "-" },
                            { "align": "middle", "content": "2 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "14" },
                            { "align": "left", "content": "Bauabnahme und -übergabe" },
                            { "align": "middle", "content": "7, 11" },
                            { "align": "middle", "content": "1 Tage" }
                        ]
                    }
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
                "content": "http://159.65.105.150:3000/images/5ed119582eefab7520ea3bde"
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
                "content": "http://159.65.105.150:3000/images/5ed119582eefab7520ea3bde"
            }
        ]
    },
    {
        "url": "/lf-3/netzplantechnik/netzplan_übungsaufgabe",
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
                            { "align": "middle", "content": "Vorgänger" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "5 Tage" },
                            { "align": "middle", "content": "-" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "8 Tage" },
                            { "align": "middle", "content": "-" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "3 Tage" },
                            { "align": "middle", "content": "1" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "2 Tage" },
                            { "align": "middle", "content": "1, 2" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "5 Tage" },
                            { "align": "middle", "content": "3" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "7 Tage" },
                            { "align": "middle", "content": "3, 4" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "7" },
                            { "align": "middle", "content": "4 Tage" },
                            { "align": "middle", "content": "4" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "3 Tage" },
                            { "align": "middle", "content": "5, 6, 7" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "GP = FEZ - SEZ <br/> FP = FEZ<sub>VorgangA</sub> - FAZ<sub>VorgangB</sub> (vom kleinsten Vorgänger)"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11a2a2eefab7520ea3be1"
            }
        ]
    },
    {
        "url": "/lf-3/netzplantechnik/vergleich_netzplan_vs_grantt",
        "topic": "Netzplantechnik",
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
                            { "align": "", "content": "Nachteile" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "", "content": "Grantt-Diagramm" },
                            { "align": "", "content": "- Übersichtliche Struktur durch visuelle Darstellung der Dauer" },
                            { "align": "", "content": "- Fehleranfällig beim Zeichnen <br/> - weniger Informationen <br/> - Puffer nicht erkennbar <br/> - Nur für kleinere Projekte geeignet" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "", "content": "Netzplan" },
                            { "align": "", "content": "- Puffer lassen sich exakt berechnen" },
                            { "align": "", "content": "- Mehr Informationen (FAZ, SAZ)" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "url": "/lf-3/visualisierung/visualisierungs_regeln",
        "topic": "Visualisierung",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "test"
            }
        ]
    },
    {
        "url": "/lf-3/visualisierung/wirkung_von_farben",
        "topic": "Visualisierung",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Farben wirken auf den Betrachter, der Menscht orientiert sich anhand von Farben, zum Beispiel mit Ampeln und Schildern. Farben haben eine intensive unbewusste Bedeutung, welche den Betrachter stark beeinflust. Farbempfindungen erzeugen Gefühle, diese Erkenntnis wird im Marketing schon lange gezielt eingesetzt, ebenso in der Produkt- oder Raumgestaltung."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11da92eefab7520ea3be7"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Rot" },
                            { "align": "left", "content": "Wärme, nähe, erregend" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Blau" },
                            { "align": "left", "content": "Kälte, Ferne, Klarheit" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Grün" },
                            { "align": "left", "content": "Gesundheit, beruhigend" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Gelb" },
                            { "align": "left", "content": "Hell, leicht" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Schwarz" },
                            { "align": "left", "content": "Distanz, hart, schwer, eng" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Weiß" },
                            { "align": "left", "content": "Licht, leicht, leer" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Braun" },
                            { "align": "left", "content": "Gemütlich, vertraut" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Grau" },
                            { "align": "left", "content": "Leblos, langweilig" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Violett" },
                            { "align": "left", "content": "Zweideutig, unsachlich" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Orange" },
                            { "align": "left", "content": "Leuchtend" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Rosa" },
                            { "align": "left", "content": "Zart, zerbrechlich" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Gold" },
                            { "align": "left", "content": "Edel, gewichtig" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Silber" },
                            { "align": "left", "content": "Distanziert, kühl" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Farben können bestimmte Bereiche betonen und damit den Blick auf wichtige Aussagen lenken. Rot hat zum Beispiel eine Signalwirkung, es erzeugt Aufmerksamkeit. Dabei kann jede Farbe positiv oder negativ assoziiert werden, Rot kann unter anderem warm oder gefährlich wirken."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11de82eefab7520ea3be9"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "IT-Handbuch - IT-Systemelektroniker/-in & Fachinformatiker/-in | www.westermann.de",
                    "https://www.webdesign-journal.de/psychologische-wirkung-von-farben-farbkombinationen/"
                ]
            }
        ]
    },
    {
        "url": "/lf-3/visualisierung/diagramme",
        "topic": "Visualisierung",
        "elements": [
            {
                "type": "title",
                "content": "Kurvendiagramm / Liniendiagramm"
            },
            {
                "type": "text",
                "content": "Findet Verwendung bei der Veranschaulichung von Zahlen aus Tabellen (Zahlenvisualisierung), um Abhängigkeiten zwischen zwei Größen (Krankheitsfälle & Monate) festzustellen. Wird häufig verwendet um Entwicklungsverläufe darzustellen oder Prognosen zu verdeutlichen."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11f372eefab7520ea3bef"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Kreisdiagramm / Kuchen- oder Tortendiagramm"
            },
            {
                "type": "text",
                "content": "Einfache & übersichtliche Darstellung von Größenverhältnissen, verschafft einen Gesamtüberblick. Ist eine Darstellungsform für Teilwerte eines ganzen, d. h. die Gesamtmenge muss 100% entsprechen → im Beispiel: Gesamter Umsatz 100% aufgeteilt in einzelne PC Komponenten."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11f732eefab7520ea3bf1"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Balkendiagramm"
            },
            {
                "type": "text",
                "content": "Vergleich von zwei oder mehreren Werten in Relation zueinander, damit könnten die Umsätze von zwei Abteilungen innerhalb eines Geschäftsjahres verglichen werden. Eignet sich besonders zur Veranschaulichung von Rangfolgen."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11fd22eefab7520ea3bf3"
            },
            {
                "type": "title",
                "content": "Säulendiagramm"
            },
            {
                "type": "text",
                "content": "Je nach Anordnung der Balken (horizontal oder vertikal) unterscheidet man zwischen Balken- oder Säulendiagramm."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed12a802eefab7520ea3c05"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Flussdiagramm"
            },
            {
                "type": "text",
                "content": "Mit einem Flussdiagramm (engl. 'flowchart') lassen sich Abläufe jeglicher Art grafisch darstellen, so lassen sich Anwendungen, Systeme oder Geschäftsprozesse besser modellieren. Es wird auch als Ablaufdiagramm, Programmstrukturplan oder Programmablaufplan bezeichnet."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed3048c79253514444249cc"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "<u>Organigramm (Organisationsdiagramm)</u>"
            },
            {
                "type": "text",
                "content": "Stellt die interne Struktur eines Unternehmens dar, daraus lässt sich ablesen welche Rolle die unterschiedlichen Mitarbeiter oder Abteilungen innerhalb eines Unternehmens spielen. Wird auch als Organisationsplan, Strukturplan oder Stellenplan bezeichnet."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed304e779253514444249ce"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Mindmap (Aufbau-Diagramm)"
            },
            {
                "type": "text",
                "content": "Grafisches Hilfsmittel um komplexe Themen übersichtlich darzustellen, eignet sich besonders um Informationen und Wissen zu ordnen und in eine übersichtliche Struktur zu bringen. Wird oft zum Brainstorming oder als Planungs- oder Organisationsinstrument verwendet."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed3052e79253514444249d0"
            }
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
                "type": "subtitle",
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
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "quiz",
                "content": "quizlink"
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
                    }
                ]
            },
            {
                "type": "table",
                "content": "test",
                "rows": [
                    {
                        "type": "default",  // "default" | "header"
                        "columns": [
                            { "align": "middle", "content": "test" }
                        ]
                    }
                ]
            }
        ]
    }
];
