import {Article} from "../../types/Article";

const netzplantechnik_netzplan_beispiel1 = require('../lf-3_pics/netzplantechnik_netzplan_beispiel1.png');

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
                "content": netzplantechnik_netzplan_beispiel1
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
                            "Regel 1 - Abhänigkeiten werden durch Pfeile dargestellt <br/> Pfeilrichtung: von links nach rechts oder von unten nach oben",
                            "Regel 2 - Ein Vorgang kann mehrere Vorgänge und/oder Nachfolger haben",
                            "Regel 3 - Ein Netzplan darf keine Schleifen enthalten (Zeitrechnung wäre dann nicht möglich)",
                            "Regel 4 - Vom Projektanfang (Startknoten) bis zum Projektende (Zielknoten) muss ein ununterbrochener ABlauf gegeben sein"
                        ]
                    },
                    {
                        "content": "Vorwärtsrechnung",
                        "sublist": [
                            "Regel 5 - Startvorgang beginnt mit einem frühesten Anfangszeitpunkt (minStart) von 0",
                            "Regel 6 - Frühester Endzeitpunkt (minEnde) = Frühester Anfangszeitpunkt (minStart) + Dauer",
                            "Regel 7 - Frühester Endzeitpunkt (minEnde) eines Vorgangs ist Frühester Anfangszeitpunkt (minStart) aller unmittelbar nachfolgenden Vorgängen",
                            "Regel 8 - Münden mehrere Vorgänge in einen Knoten, so ist dessen Frühester Anfangszeitpunkt (minStart) der größte Früheste Endzeitpunkt (minEnde) aller Vorgänger"
                        ]
                    },
                    {
                        "content": "Rückwärtsrechnung",
                        "sublist": [
                            "Regel 9 - Frühester Endzeitpunkt (minEnde) des Zielknotens ist Spätester Endzeitpunkt (maxEnde) des Projekts",
                            "Regel 10 - Spätester Anfangszeitpunkt (maxStart) = Spätester Endzeitpunkt (maxEnde) - Dauer",
                            "Regel 11 - Spätester Anfangszeitpunkt (maxStart) eines Vorgangs ist Spätester Endzeitpunkt (maxEnde) aller unmittelbar vorausgehenden Vorgänge",
                            "Regel 12 - Haben mehrere Vorgänge einen gemeinsamen Vorgänger, so ist dessen Spätester Endzeitpunkt (maxEnde) der früheste (kleinste) \"maxStart\" aller Nachfolger"
                        ]
                    },
                    {
                        "content": "Zeitreserve und kritischer Weg",
                        "sublist": [
                            "Regel 13 - Gesamt Puffer = maxStart - minStart <br/> oder Gesamt Puffer = maxEnde - minEnde",
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
        ]
    },
];
