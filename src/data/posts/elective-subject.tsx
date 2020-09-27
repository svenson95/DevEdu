import {Post} from "../../app/models/post";

export const wp_posts: Post[] = [
    {
        "url": "vernetzte_steuerungssysteme/grundlagen",
        "topic": "Vernetzte Steuerungssysteme",
        "subject": "wp",
        "lessonDate": "2020-08-11",
        "lastUpdate": "2020-08-28",
        "elements": [
            {
                "type": "subtitle",
                "content": "<b>1. Grundlagen - SPS</b>"
            },
            {
                "type": "text",
                "content": "Der Begriff SPS leitet sich vom englischen Terminus PLC (Programmable Logic Controller) ab. Speicherprogrammierte Steuerungen werden zur Steuerung von Maschinen und Anlagen eingesetzt. Bei einer speicherprogrammierten Steuerung, kurz SPS, handelt es sich um eine Komponente, die programmiert und eingesetzt wird, um eine Anlage oder Maschine zu steuern. Sie werden unter anderem in vollautomatischen Produktionsanlagen eingesetzt."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc29e59df30501b5d0d8a"
            },
            {
                "type": "text",
                "content": "Nach der EN 61131 wird die SPS folgendermaßen definiert:"
            },
            {
                "type": "hint",
                "content": "Eine SPS ist ein digital arbeitendes elektronisches System für den Einsatz in industriellen Umgebungen mit einem programmierbaren Speicher zur internen Speicherung der anwenderorientierten Steuerungsanweisungen zur Implementierung spezifischer Funktionen wie z.B. Verknüpfungssteuerung, Ablaufsteuerung, Zeit-, Zähl und arithmetische Funktionen, um durch digitale oder analoge Eingangs- und Ausgangssignale verschiedene Arten von Maschinen oder Prozessen zu steuern."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<b>2. EVA-Prinzip (Eingabe-Verarbeitung-Ausgabe)</b>"
            },
            {
                "type": "text",
                "content": "Das EVA-Prinzip beschreibt ein Grundprinzip in der Verarbeitung von Daten. Die Abkürzung leitet sich aus den ersten Buchstaben der Begriffe <b>E</b>ingabe, <b>V</b>erarbeitung und <b>A</b>usgabe ab."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc0bd59df30501b5d0d85"
            },
            {
                "type": "subtitle",
                "content": "Eingabe"
            },
            {
                "type": "text",
                "content": "Damit eine Datenverarbeitung stattfinden kann, müssen zuerst Daten vorhanden sein. Diese Daten lassen sich z.B. durch Tastatur, Maus, oder Gamepad eingeben."
            },
            {
                "type": "subtitle",
                "content": "Verarbeitung"
            },
            {
                "type": "text",
                "content": "Die Recheneinheit (CPU, Prozessor, Controller) kann auf die Daten zugreifen. Die CPU - bestehend aus Speicher, Steuer- und Rechenwerk - berechnet aus der Dateneingabe die Datenausgabe. Für die nötige Berechnung oder zur späteren Aufbewahrung werden die Daten (zwischen-)gespeichert. Die gängigsten Speicher sind: Festplatte, SSD, Arbeitsspeicher (RAM), ROM, CD, DVD oder USB-Sticks."
            },
            {
                "type": "subtitle",
                "content": "Ausgabe"
            },
            {
                "type": "text",
                "content": "Damit die Daten genutzt werden können, müssen sie wieder in einer bestimmten Form ausgegeben werden. Die erfolgt am häufigsten durch Bildschirm, Drucker oder Lautsprecher."
            },
            {
                "type": "list",
                "content": "Beispiel: Ihr habt eine Tastatur und möchtet über die Tasten einen Text in einem Texteditor eingeben.",
                "ordered": true,
                "list": [
                    "Tasten werden gedrückt",
                    "CPU / Prozessor des Computers verarbeitet die Eingabe (keyCode der jeweiligen Taste)",
                    "Text wird im Texteditor ausgegeben"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<b>3. Zyklische Bearbeitung eines SPS-Programms</b>"
            },
            {
                "type": "text",
                "content": "S1<sub>0</sub> && S2<sub>1</sub> = A1<sub>0</sub>"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc2ac59df30501b5d0d8c"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<b>4. SPS - Baugruppen</b>"
            },
            {
                "type": "text",
                "content": "PROFI BUS (Process Field Bus)"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<b>5. Hochverfügbarkeit</b>"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc2b459df30501b5d0d8e"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<b>6. Bedien-Beobachtungssysteme</b>"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc2ba59df30501b5d0d90"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<b>7. SPS-Darstellung</b>"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc2c459df30501b5d0d92"
            }
        ]
    },
    {
        "url": "vernetzte_steuerungssysteme/aufbau_sps_programm",
        "topic": "Vernetzte Steuerungssysteme",
        "subject": "wp",
        "lessonDate": "2020-08-12",
        "lastUpdate": "2020-08-28",
        "elements": [
            {
                "type": "subtitle",
                "content": "1. Auftrag / Problemstellung"
            },
            {
                "type": "text",
                "content": "Ein Supermarkt verfügt über ein Kühlhaus zur Lagerung von Lebensmitteln. Zur Steuerung der Anlage steht ein \"Hand-0-Automatik-Schalter\" zur Verfügung. Die Kühlung wird im Automatikbetrieb durch ein Thermostat (B1) eingeschaltet, wenn die Temperatur über -7 °C steigt. Das Kühlaggregat kann im Handbetrieb dauerhaft eingeschaltet werden. Beim Betrieb der Kühlung leuchtet eine Meldeleuchte (P1)."
            },
            {
                "type": "text",
                "content": "Löst das Motorschutzrelais (F1) aus, soll die Kühlung ausgeschaltet werden. Eine Alarmhupe wird eingeschaltet, sobald das Motorschutzrelais auslöst oder das Sicherheitsthermostat (B2) eine Temperatur von über -2 °C meldet. Sie kann über einen Quittiertaster (S2) ausgetastet werden."
            },
            {
                "type": "subtitle",
                "content": "Anlegen einer Symboltabelle"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc6dd59df30501b5d0d94"
            },
            {
                "type": "subtitle",
                "content": "Zeichnen des Anschlussplans"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc6ed59df30501b5d0d96"
            },
            {
                "type": "subtitle",
                "content": "Erstellen des Steuerungsprogramms"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc7cb59df30501b5d0da2"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "2. Symboltabelle / Anschlussplan (1-Signal = eingeschaltet)"
            },
            {
                "type": "text",
                "content": "→ Drahtbruch-Sicherheit - statt 1 wird 0 ausgewertet"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "3. Programm / Netzwerk"
            },
            {
                "type": "text",
                "content": "→ Pro Ausgang ein Netzwerk"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "4. Test"
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
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
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
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "GRAFCET - DIN EN 60848"
            },
            {
                "type": "text",
                "content": "Die europäische DIN EN 60848 (GRAFCET) ersetzt die nationale Norm DIN 40719, Teil 6 (Funktionsplan)."
            },
            {
                "type": "text",
                "content": "Beispiel einer Ablaufkette nach GRAFCET: Steuerung einer Förderanlage mit Ausstoß von Objekten über einen Zylinder."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc74f59df30501b5d0d9a"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "GRAFCET - Operatoren (1)"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc7d359df30501b5d0da4"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "GRAFCET - Operatoren (2)"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc7df59df30501b5d0da6"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "GRAFCET - Operatoren (3)"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fc7e859df30501b5d0da8"
            }
        ]
    },
    {
        "url": "vernetzte_steuerungssysteme/sensoren_und_schrittketten_aufbau_und_befehle",
        "topic": "Vernetzte Steuerungssysteme",
        "subject": "wp",
        "lessonDate": "2020-09-02",
        "lastUpdate": "2020-09-27",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6fcb5d59df30501b5d0daa"
            },
            {
                "type": "text",
                "content": "Schrittketten / Ablaufsteuerungen benötigen wir zur Steuerung von komplexen Prozessabläufen die sequentiell - also nach und nach - und wiederholt abgearbeitet werden. Ein Ablauf ergibt sich durch die Aneinanderreihung verschiedener Schritte, wobei jede Ablaufsteuerung einen sogenannten Initial-Schritt / Start-Schritt und einen End-Schritt besitzt."
            },
            {
                "type": "text",
                "content": "Zwischen den beiden Schritten können theoretisch beliebig viele Zwischenschritte eingesetzt werden - Die Anzahl kann jedoch beschränkt sein, bei S7 SPS auf 250 Schritte begrenzt."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Regeln für Schrittketten / Ablaufsteuerungen (EN 60848)"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Eine Ablaufkette besteht aus Schritten und Weiterschaltbedingungen (Transitionen)",
                    "Zwischen zwei Schritten steht immer eine Transition",
                    "Der Anfangsschritt ist zu Beginn einer Ablaufkette ohne Bedingung aktiv",
                    "In linearen Ablaufketten ist immer nur ein Schritt aktiv",
                    "Man gelangt von einem Schritt in den nächste, wenn der vorherige Schritt aktiv ist und die Transition erfüllt ist",
                    "Der nachfolgende Schritt setzt den vorherigen Schritt zurück",
                    "Den Schritten sind Aktionen zugeordnet, die vom jeweiligen Schritt ausgelöst werden"
                ]
            }
        ]
    },








    {
        "url": "test",
        "topic": "test",
        "subject": "wp",
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
                "type": "hint",
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
