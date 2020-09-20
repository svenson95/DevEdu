import {Post} from "../../app/models/post";

export const lf9_posts: Post[] = [
    {
        "url": "oeffentliche_netze_und_dienste/kommunikationstechnik_einfuehrung",
        "topic": "Öffentliche Netze und Dienste",
        "subject": "lf-9",
        "lessonDate": "2020-08-10",
        "lastUpdate": "2020-09-09",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Netze sind die Grundlage für die Übertragung beliebiger Informationen, man unterscheidet zwischen Fernsprechnetz, Schmalband ISDN, Breitband ISDN, Funknetz und Internet. Netze haben das Ziel, ihren Nutzern Dienste anzubieten (sogenannte \"Telekommunikationsdienste\": Bereitstellung von Dienstleistungen zum Zwecke der Telekommunikation."
            },
            {
                "type": "table",
                "content": "Wichtige und oft benötigte Netzwerkports ...",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "left", "content": "TCP / UDP" },
                            { "align": "left", "content": "Port" },
                            { "align": "left", "content": "Beschreibung / Funktion" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "20" },
                            { "align": "left", "content": "FTP - Daten" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "21" },
                            { "align": "left", "content": "FTP - Steuerdaten" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "22" },
                            { "align": "left", "content": "SSH - Secure Shell" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "80" },
                            { "align": "left", "content": "HTTP Anfragen (Alternativen: 8080 und 8088)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP / UDP" },
                            { "align": "left", "content": "110" },
                            { "align": "left", "content": "POP3" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "143" },
                            { "align": "left", "content": "IMAP" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "443" },
                            { "align": "left", "content": "HTTPS Anfragen (Alternativ: 8443)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "993" },
                            { "align": "left", "content": "IMAP over SSL" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "995" },
                            { "align": "left", "content": "POP3 over SSL" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "1433" },
                            { "align": "left", "content": "SQL Server-Standardinstanz" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "1434" },
                            { "align": "left", "content": "SQL Server-Browserdienst" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "8080" },
                            { "align": "left", "content": "HTTP Proxy" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "url": "oeffentliche_netze_und_dienste/telekommunikations_netzbetreiber",
        "topic": "Öffentliche Netze und Dienste",
        "subject": "lf-9",
        "lessonDate": "2020-09-03",
        "lastUpdate": "2020-09-20",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Ein Telekommunikations-Netzbetreiber ist ein Unternehmen, das einen Telekommunikationsnetz betreibt wie etwa Mobilfunknetze, dieser stellt Teilnehmern und Resellern den Zugang zu einem Netz zur Verfügung. Hat es gleichzeitig eine Kundenbeziehung fungiert es als Telefongesellschaft."
            },
            {
                "type": "hint",
                "content": "Die Berechnung von Übertragungsraten ist Teil der Zwischen- und Abschlussprüfung!"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Welche Aufgabe hat die Bundesnetzagentur?"
            },
            {
                "type": "text",
                "content": "Oberste deutsche Bundesbehörde → Für sogenannte Netzmärkte zuständig. <br/> Aufrechterhaltung und Förderung des Wettbewerbs zwischen den Netzbetreibern"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Welche Rolle spielt die Regulierungsbehörde?"
            },
            {
                "type": "text",
                "content": "Eine Regulierungsbehörde ist eine staatlich wettbewerbspolitische Einrichtung. Die Aufgaben einer Regulierungsbehörde gehen in der Regel über die einer normalen Kartellbehörde hinaus - während letztere üblicherweise eine Ex post-Kontrolle von Märkten betreiben, zeichnen sich Regulierungsbehörden oft durch starke Instrumente einer Ex ante-Kontrolle aus, wie zB. Preis- oder Produktgenehmigungen. Regulierungsbehörden arbeiten oft branchenspezifisch, sie werden vor allem für solche Wirtschaftssektoren geschaffen, in denen eine Ex-post-Kontrolle nicht ausreicht, um den Wettbewerb aufrechtzuerhalten bzw. zu fördern."
            },
            {
                "type": "text",
                "content": "Regulierungsbehörden finden sich oft in monopolgeneigten Märkten, die nicht bzw. nicht gänzlich für Wettbewerb geöffnet werden können. Beispiele für monopolgeneigte Märkte sind leitungs- und netzgebundene Branchen, in denen der Aufbau paralleler Netze entweder nicht gewünscht ist bzw. aus ökonomischen Gründen nicht sinnvoll ist. Typische Sektoren, in denen eine solche Regulierung stattfindet, sind Telekommunikations-, Post-, Eisenbahn-, Rundfunk-, Gas- und Strommärkte sowie die Wasserver- und Abwasserentsorgung. Ohne Regulierung kann es in solchen Märkten zu Marktversagen kommen."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Anforderungen an ein \"Öffentliches Netz\" ..., das <u>grundsätzlich für Jedermann zugänglich</u> ist"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "lorem",
                    "ipsum"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Netzstruktur (abgeleitet vom OSI-Referenzmodell sind die Ebenen aufeinander aufbauend)"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f678e388dcdb242a7e7c651"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "left", "content": "Übertragungsmedium" },
                            { "align": "left", "content": "Art der Informationsübertragung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Kupferkabelnetze (verdrillt 2 u. 4-Adern)" },
                            { "align": "left", "content": "" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Koaxialkabelnetze (75 Ω analog / 50 Ω digital" },
                            { "align": "left", "content": "" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Glasfaser oder Lichtwellenleiter" },
                            { "align": "left", "content": "" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Richtfunkstrecken" },
                            { "align": "left", "content": "" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Digitale zellulare Funknetze" },
                            { "align": "left", "content": "" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Optische Übertragung mit Laser" },
                            { "align": "left", "content": "" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Satellitenverbindungen" },
                            { "align": "left", "content": "" }
                        ]
                    }
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Verteilungsebenen des \"klassischen Kupfernetzes\""
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f678eec8dcdb242a7e7c653"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "HVt ...",
                    "KVz ...",
                    "APL ...",
                    "TAE ..."
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Hoheitsfragen"
            },
            {
                "type": "text",
                "content": "Betreiber von Kommunikationsnetzen heißen: ..."
            },
            {
                "type": "text",
                "content": "Anbieter von Dienstleistungen nennt man ..."
            },
            {
                "type": "text",
                "content": "Hersteller von Kommunikationslösungen sind ..."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Verbindungsarten, man unterscheidet in 4 verschiedene Arten ..."
            },
            {
                "type": "list",
                "content": "",
                "ordered": true,
                "list": [
                    "test",
                    "test",
                    "test",
                    "test"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Arten der Vermittlung"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "test (circuit switching)",
                    "test (store and forward)",
                    "test (packet switching)",
                    "test (virtual)"
                ]
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f678ef48dcdb242a7e7c655"
            },
            {
                "type": "text",
                "content": "Aufgabe: Sammeln Sie Informationen zu erforderlichen Bitraten, welche Angaben sind hier zu benennen?"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "Welche Bandbereiche werden hierbei unterschieden?"
            }
        ]
    },








    {
        "url": "test",
        "topic": "test",
        "subject": "lf-9",
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
