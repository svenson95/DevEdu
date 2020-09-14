import {Post} from "../../app/models/post";

export const lf9_posts: Post[] = [
    {
        "url": "oeffentliche_netze_und_dienste/einfuehrung",
        "topic": "Öffentliche Netze und Dienste",
        "subject": "lf-9",
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
