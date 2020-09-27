import {Post} from "../../app/models/post";

export const lf7_posts: Post[] = [
    {
        "url": "e_technik/einfuehrung",
        "topic": "E-Technik",
        "subject": "lf-7",
        "lessonDate": "2020-08-10",
        "lastUpdate": "2020-09-03",
        "schoolWeek": "14",
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
        "url": "e_technik/schaltungen_widerstaende_berechnen",
        "topic": "E-Technik",
        "subject": "lf-7",
        "lessonDate": "2020-09-01",
        "lastUpdate": "2020-09-26",
        "schoolWeek": "15",
        "elements": [
            {
                "type": "title",
                "content": "Reihenschaltung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f676759df30501b5d0d1b"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "<b>Strom I überall gleich</b>",
                    "R<sub>ges</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>",
                    "Addition aller Widerstände ergibt Gesamtwiderstand",
                    "Umso kleiner der Widerstand desto größer der Strom",
                    "U = U<sub>1</sub> + U<sub>2</sub> + U<sub>3</sub>",
                    "Am größten fällt die größte Spannung ab",
                    "Spannungen verhalten sich wie die dazugehörigen Widerstände"
                ]
            },
            {
                "type": "title",
                "content": "Parallelschaltung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f676e59df30501b5d0d1d"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "U = U<sub>1</sub> = U<sub>2</sub> = U<sub>3</sub>",
                    "<b>Spannung U überall gleich</b>",
                    "I = I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub>",
                    "I nicht überall gleich",
                    "1 / R<sub>ges</sub> = (1 / R<sub>1</sub>) + (1 / R<sub>2</sub>) + (1 / R<sub>3</sub>)",
                    "Geringster Widerstand / kleinster Widerstand hat den größten Strom",
                    "Gesamtwiderstand ist kleiner als der kleinste Teilwiderstand"
                ]
            },
            {
                "type": "hint",
                "content": "Es gibt auch gemischte Schaltungen, diese werden Netzwerke genannt."
            },
            {
                "type": "text",
                "content": "Taschenrechner Funktion: x<sup>-1</sup> Taste → 1000<sub>-1</sub> + 100<sub>-1</sub> + 10<sub>-1</sub> = x<sub>-1</sub> = <u>9,009 Ω</u>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Ohmsches Gesetz"
            },
            {
                "type": "text",
                "content": "U = R X I <br/> R = U / I <br/> I = U / R"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe - Komplexe Schaltungen umstellen"
            },
            {
                "type": "text",
                "content": "Bei komplexeren Schaltungen können diese auch in mehrere Teilschaltungen aufgeteilt werden, dies macht zum besseren Verständnis der ganzen Schaltung."
            },
            {
                "type": "subtitle",
                "content": "Umstellung 1"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9cf559df30501b5d0d61"
            },
            {
                "type": "subtitle",
                "content": "Umstellung 2"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9cfd59df30501b5d0d63"
            },
            {
                "type": "text",
                "content": "12 und 8 in Reihe <br/> 12 und 8 zu 30 parallel <br/> 12 und 8 und 30 zu 5 in Reihe"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 2 - Widerstand & Strom berechnen"
            },
            {
                "type": "text",
                "content": "Wie groß ist der Gesamtwiderstand und Gesamtstrom?"
            },
            {
                "type": "list",
                "content": "",
                "ordered": true,
                "list": [
                    "12 + 8 = 20 Ω",
                    {
                        "content": "20<sub>-1</sub> + 30<sub>-1</sub> = 0,0833 Ω",
                        "sublist": [
                            "Ergebnis<sub>-1</sub> = 12 Ω"
                        ]
                    },
                    "12 Ω + 5 = 17 Ω",
                    {
                        "content": "17<sub>-1</sub> + 20<sub>-1</sub> = 0,10 Ω",
                        "sublist": [
                            "Ergebnis Kehrwert nehmen = 9,189 Ω"
                        ]
                    },
                    "9,189 Ω + 14 = 23,1891 Ω"
                ]
            },
            {
                "type": "text",
                "content": "I = U / R<sub>ges</sub> = 24 V / 23,19 Ω = <u>1,03 A</u>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 3 - ?"
            },
            {
                "type": "text",
                "content": "14 Ω = R x I = 1,03 x 14 = <u>14,42 V</u>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 4 - Widerstand berechnen & Schaltung umstellen"
            },
            {
                "type": "text",
                "content": "Wie groß ist der Gesamtwiderstand?"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d0959df30501b5d0d65"
            },
            {
                "type": "text",
                "content": "R<sub>1</sub> = 80 Ω <br/> R<sub>2</sub> = 60 Ω <br/> R<sub>3</sub> = 40 Ω <br/> R<sub>4</sub> = 120 Ω <br/> R<sub>5</sub> = 120 Ω <br/> R<sub>6</sub> = 160 Ω <br/> R<sub>7</sub> = 180 Ω <br/> R<sub>8</sub> = 200 Ω"
            },
            {
                "type": "text",
                "content": "Fehler: Erst R4 dann R3 dazurechnen, Rechnung korrigieren!"
            },
            {
                "type": "list",
                "content": "",
                "ordered": true,
                "list": [
                    "R<sub>6</sub> + R<sub>8</sub> = 160 + 200 = 360 Ω",
                    "(R<sub>6</sub> + R<sub>8</sub>) + R<sub>5</sub> = 360<sub>-1</sub> + 120<sub>-1</sub> <br/> = 0,011<sub>-1</sub> <br/> = 90 Ω",
                    "(R<sub>6</sub> + R<sub>8</sub> + R<sub>5</sub>) + R<sub>7</sub> = 90<sub>-1</sub> + 180<sub>-1</sub> <br/> = 0,016<sub>-1</sub> <br/> = 60 Ω",
                    "(R<sub>6</sub> + R<sub>8</sub> + R<sub>5</sub> + R<sub>7</sub>) + R<sub>3</sub> = 60<sub>-1</sub> + 40<sub>-1</sub> <br/> = 0,042<sub>-1</sub> <br/> = 24 Ω",
                    "(R<sub>6</sub> + R<sub>8</sub> + R<sub>5</sub> + R<sub>7</sub> + R<sub>3</sub>) + R<sub>4</sub> = 24 + 120 <br/> = 144 Ω",
                    "(R<sub>6</sub> + R<sub>8</sub> + R<sub>5</sub> + R<sub>7</sub> + R<sub>3</sub> + R<sub>4</sub>) + R<sub>2</sub> + R<sub>1</sub> = 144 + 60 + 80 <br/> = <u>284 Ω</u>"
                ]
            },
            {
                "type": "subtitle",
                "content": "1."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d1359df30501b5d0d67"
            },
            {
                "type": "subtitle",
                "content": "2."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d1959df30501b5d0d69"
            },
            {
                "type": "text",
                "content": "I3 = U3 / R3 = 20,82 / 40 = <u>0,52 A</u>"
            },
            {
                "type": "subtitle",
                "content": "3."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d2159df30501b5d0d6b"
            },
            {
                "type": "text",
                "content": "U<sub>1/2</sub> = I x R<sub>ges</sub> = 89,18 V"
            },
            {
                "type": "text",
                "content": "U3 = U<sub>ges</sub> - U<sub>1/2</sub> = 20,82 V"
            },
            {
                "type": "subtitle",
                "content": "4."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d2759df30501b5d0d6d"
            },
            {
                "type": "text",
                "content": "I = U / R<sub>ges</sub> = <u>0,64 A</u>"
            },
            {
                "type": "subtitle",
                "content": "5."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d2e59df30501b5d0d6f"
            },
            {
                "type": "text",
                "content": "R<sub>ges</sub> = 172,73 Ω"
            },
            {
                "type": "text",
                "content": "I<sub>pu</sub> = I<sub>ges</sub> - I<sub>3</sub> = 0,12 A <br/> U<sub>p</sub> = U<sub>5</sub> = I<sub>pu</sub> x R<sub>p</sub> = 7,2 V"
            }
        ]
    },
    {
        "url": "e_technik/bauteile_im_wechselstromkreis",
        "topic": "E-Technik",
        "subject": "lf-7",
        "lessonDate": "2020-09-04",
        "lastUpdate": "2020-09-20",
        "schoolWeek": "15",
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
                "content": "<b>Thomas Alva Edison</b> machte 1879 zuerst mit Elektro-Glühlampen die Stromnutzung massentauglicher, hat sich mit seiner Gleichstrom-Technologie aber nicht langfristig durchsetzen können. Sein späterer Konkurrent <b>George Westinghouse</b>, Vertreter des Wechselstroms, machte schließlich den nächsten Schritt mit der kostengünstigeren und bis heute genutzten Wechselstrom-Technologie."
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
                "content": "Widerstand (Ohmscher) R [Ω]"
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
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Spule (Induktivität) L [H]"
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
        "url": "e_technik/sinus_wechselspannung",
        "topic": "E-Technik",
        "subject": "lf-7",
        "lessonDate": "2020-09-04",
        "lastUpdate": "2020-09-20",
        "schoolWeek": "15",
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
        "lessonDate": "2020-01-01",
        "lastUpdate": "2020-01-01",
        "schoolWeek": "15",
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
