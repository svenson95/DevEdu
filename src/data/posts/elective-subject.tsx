import {Post} from "../../app/models/post";

export const wp_posts: Post[] = [
    {
        "url": "vernetzte_steuerungssysteme/grundlagen",
        "topic": "Vernetzte Steuerungssysteme",
        "elements": [
            {
                "type": "title",
                "content": "<b>1. Grundlagen - SPS</b>"
            },
            {
                "type": "text",
                "content": "→ Speicherprogrammierte Steuerung"
            },
            {
                "type": "title",
                "content": "<b>2. EVA-Prinzip (Eingabe-Verarbeitung-Ausgabe)</b>"
            },
            {
                "type": "title",
                "content": "<b>3. Zyklische Bearbeitung eines SPS-Programms</b>"
            },
            {
                "type": "text",
                "content": "S1<sub>0</sub> && S2<sub>1</sub> = A1<sub>0</sub>"
            },
            {
                "type": "title",
                "content": "<b>4. SPS - Baugruppen</b>"
            },
            {
                "type": "text",
                "content": "PROFI BUS (Process Field Bus)"
            },
            {
                "type": "title",
                "content": "<b>5. Hochverfügbarkeit</b>"
            },
            {
                "type": "title",
                "content": "<b>6. Bedrem-Beobachtungssysteme</b>"
            },
            {
                "type": "title",
                "content": "<b>7. SPS-Darstellung</b>"
            }
        ]
    },
    {
        "url": "vernetzte_steuerungssysteme/aufbau_sps_programm",
        "topic": "Vernetzte Steuerungssysteme",
        "elements": [
            {
                "type": "title",
                "content": "<b>1. Auftrag / Problemstellung</b>"
            },
            {
                "type": "title",
                "content": "<b>2. Symboltabelle / Anschlussplan (1-Signal = eingeschaltet)</b>"
            },
            {
                "type": "text",
                "content": "→ Drahtbruch-Sicherheit - statt 1 wird 0 ausgewertet"
            },
            {
                "type": "title",
                "content": "<b>3. Programm / Netzwerk</b>"
            },
            {
                "type": "text",
                "content": "→ Pro Ausgang ein Netzwerk"
            },
            {
                "type": "title",
                "content": "<b>4. Test</b>"
            },
            {
                "type": "text",
                "content": "FUP → Funktionsplan <br/> KOP → Kontaktplan <br/> AWL → Anweisungsliste"
            },
            {
                "type": "text",
                "content": "S1<sub>0</sub> && S2<sub>1</sub> = A1<sub>0</sub>"
            },
            {
                "type": "title",
                "content": "<b>Speicherbaustein</b>"
            },
            {
                "type": "text",
                "content": "S<sub>0</sub> && R<sub>0</sub> = Q<sub>1</sub> <br/> S<sub>0</sub> && R<sub>1</sub> = Q<sub>0</sub> <br/> S<sub>1</sub> && R<sub>1</sub> = Q<sub>0</sub> <br/> S<sub>1</sub> && R<sub>1</sub> = Q<sub>1</sub>"
            },
            {
                "type": "text",
                "content": "Letzter Befehl hat Vorrang"
            },
            {
                "type": "list",
                "content": "Arten",
                "list": [
                    "Verknüfungssteuerung",
                    "Ablaufsteuerung (zB. bei einer Waschmaschine)"
                ]
            },
            {
                "type": "text",
                "content": "GRAFCET"
            }
        ]
    },








    {
        "url": "/wp/test",
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
                "content": "http://159.65.105.150:3000/images/"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "code",
                "language": "javascript",
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
                    }
                ]
            },
            {
                "type": "table",
                "content": "test",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "test" }
                        ]
                    }
                ]
            }
        ]
    }
];
