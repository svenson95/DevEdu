import {Post} from "../../app/models/post";

export const lf7_posts: Post[] = [
    {
        "url": "vernetzte_systeme/einfuehrung",
        "topic": "Vernetzte Systeme",
        "subject": "lf-7",
        "lessonDate": "2020-08-10",
        "lastUpdate": "2020-09-03",
        "elements": [
            {
                "type": "title",
                "content": "Themen"
            },
            {
                "type": "list",
                "content": "1. Teil",
                "list": [
                    "Wiederholung der Grundlagen | Gemischte Schaltunge | Spannungsteiler",
                    "Wiederholung der Bauteile im Gleichstromkreis",
                    "Grundlagen Wechselstromtechnik | Sinusgrößen",
                    "Bauteile im Wechselstromkreis"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "2. Teil",
                "list": [
                    "Grundbegriffe der Übertragungstechnik",
                    "Übertragungstechnik | Pegel | Wellenwiderstand",
                    "Modulation | analog | digital"
                ]
            }
        ]
    },
    {
        "url": "vernetzte_systeme/bauteile_im_wechselstromkreis",
        "topic": "Vernetzte Systeme",
        "subject": "lf-7",
        "lessonDate": "2020-09-04",
        "lastUpdate": "2020-09-20",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Wechselströme haben viele Vorteile gegenüber Gleichströmen und sind heutzutage die meist genutzte Form der Energieversorgung. Der größte Vorteil ist, dass man das Spannungs- und Stromniveau mit Hilfe von Transformatoren anpassen kann bei nur geringen Leistungsverlusten. Im Stromkreis mit Wechselströmen verhalten sich elektronische Bauteile (Spule, Kondensator, ...) anders, als im Stromkreis mit Gleichströmen."
            },
            {
                "type": "hint",
                "content": "Thomas Alva Edison erfand um 1879 die erste massentaugliche Elektro-Glühlampe, hat sich mit seiner Gleichstrom-Technologie aber nicht langfristig durchsetzen können. Sein Konkurrent George Westinghouse, Erfinder und Vertreter der Wechselstrom-Technologie, konnte die kostengünstigere aber auch gefährlichere Alternative bieten."
            },
            {
                "type": "text",
                "content": "Für die Berechnung von Leistungen müssen Effektivwerte verwendet werden, diese lassen sich aus der Leistung bestimmen bzw. herleiten. Effektivwerte sind die Werte, die die gleiche Leistung lieferen wie in einem Gleichstrom-Kreis unter den gleichen Bedingungen."
            },
            {
                "type": "text",
                "content": "Der Effektivwert einer Wechselspannung gibt die zeitlich konstante Spannung an und der Effektivwert eines Wechselstroms gibt die zeitlich konstante Stromstärke an."
            },
            {
                "type": "text",
                "content": "Im Gleichstrom-Kreis gilt Leistung P = U x I. <br/> Im Wechselstromkreis ist die Leistung P durch das Produkt aus den Mittelwerten Strom und Spannung bestimmt."
            },
            {
                "type": "text",
                "content": "Effektivwerte für Wechselspannung und Wechselstrom berechnen: <br/> Spannung U<sub>Effektivwert</sub> = U<sub>omega</sub> : Wurzel aus 2 <br/> Strom I<sub>Effektivwert</sub> = U<sub>omega</sub> : Wurzel aus 2"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "(Ohmscher) Widerstand R[Ω]"
            },
            {
                "type": "text",
                "content": "In einem Gleichstrom-Kreis haben Spulen nur einen Ohmschen Widerstand, während sie im Wechselstrom-Kreislauf einen sogenannten Wechselstromwiderstand aufweisen. Der Grund dafür sind Spannungsabfälle, da es bei einer Spule zur Selbstinduktion kommt."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675e8b8dcdb242a7e7c63e"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Phasenverschiebung"
            },
            {
                "type": "text",
                "content": "Verringert die Leistung, durch die Verzögerung des Aufbaus der Induktivität erfolgt eine Phasenverschiebung."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675e958dcdb242a7e7c640"
            },
            {
                "type": "hint",
                "content": "Merksatz: Bei Induktivitäten Ströme sich verspäten!"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675ebe8dcdb242a7e7c642"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Beispiel: Lampe"
            },
            {
                "type": "text",
                "content": "Lampe geht verzögert an und aus."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675ec78dcdb242a7e7c644"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Erzeugt Magnetfeld",
                    "Strom kann nicht sofort durchfließen, Verzögerung durch Induktionswiderstand",
                    "Beim Abschalten ist auch das Ausschalten verzögert"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Kondensator (Kapazität) C [F]"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675eda8dcdb242a7e7c646"
            },
            {
                "type": "text",
                "content": "Blindleisstung + Wirkleistung = Scheinleistung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675ee18dcdb242a7e7c648"
            }
        ]
    },
    {
        "url": "vernetzte_systeme/sinus_wechselspannung",
        "topic": "Vernetzte Systeme",
        "subject": "lf-7",
        "lessonDate": "2020-09-04",
        "lastUpdate": "2020-09-20",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Periodendauer T <br/> T = 1 : f"
            },
            {
                "type": "text",
                "content": "Läuft gegen den Uhrzeigersinn und in 90°-Schritten."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6780e28dcdb242a7e7c64c"
            },
            {
                "type": "list",
                "content": "In der Elektrotechnik gilt ...",
                "list": [
                    "kleines u = Momentanwert",
                    "großes U = Effektivwert",
                    "kleines u<sub>s</sub> = Spitzenwert Amplitude ( u<sub>s</sub> = Wurzel aus 2 x großes U)"
                ]
            },
            {
                "type": "text",
                "content": "u<sub>90°</sub> = U<sub>s</sub> x sin(𝛼) <br/> ω = Kreisfrequenz <br/> ω = 2 x π x f"
            },
            {
                "type": "text",
                "content": "U<sub>5ms</sub> = u<sub>s</sub> x sin(ω x t) <br/> = 10V x sin(2 x π x 50Hz x 0,005s) = "
            },
            {
                "type": "hint",
                "content": "Im Taschenrechner Radiant-Modus einstellen sonst falsches Ergebnis! <br/> 2 x n x 50 x 0,005 = 1.57... <br/> 1.57... Sinus = 1 <br/> 1 x 10V = <u>10</u>"
            }
        ]
    },








    {
        "url": "test",
        "topic": "test",
        "subject": "lf-7",
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
