import {Post} from "../../app/models/post";

export const lf8_posts: Post[] = [
    {
        "url": "uebertragungstechnik/duplex_und_duplexing_simplex_halbduplex_und_vollduplex",
        "topic": "Übertragungstechnik",
        "subject": "lf-8",
        "lessonDate": "2020-08-13",
        "lastUpdate": "2020-09-03",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "In der Übertragungstechnik gibt es zwei Übertragungsrichtungen, das Empfangen und das Senden von Daten. Bei Datenübertragungen spricht man dabei von Downlink/Downstream und Uplink/Upstream genannt. Ein Duplex ist eine Übertragungsart und bezeichnet, wie Sende- und Empfangsrichtungen zwischen Sender und Empfänger aufgeteilt werden und funktionieren."
            },
            {
                "type": "hint",
                "content": "Bei Vollduplex-, Halbduplex- und Semi-Duplex-Übertragungsverfahren sind prinzipiell beide Richtungen möglich."
            },
            {
                "type": "text",
                "content": "Bei einer Asymmetrischen Übertragung ist der Datenverkehr vom Server zum Nutzer höher als umgekehrt - bedeutet es werden mehr Daten heruntergeladen als hochgeladen, wie es bei den meisten Websites der Fall ist. Bei einer Symmetrischen Übertragung wie in Telefonie- und Sprach-Anwendungen ist der Datenverkehr zwischen Sender und Empfänger gleich groß."
            },
            {
                "type": "subtitle",
                "content": "Simplex"
            },
            {
                "type": "text",
                "content": "Bei Simplex ist die Übertragung nur in eine Richtung möglich, also entweder Senden <u>oder</u> Empfangen, ein Wechsel der Richtung ist nicht möglich. Typische Beispiele für Simplex-Kommunikationen sind Rundfunk, Fernsehen und die Übertragung von Audiosignalen von einem Verstärker zu einem Lautsprecher - bei Lautsprecher Anlagen mit mehreren Boxen die zum Verstärker führen."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f4088b391ef1048612e0969"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Halbduplex"
            },
            {
                "type": "text",
                "content": "Beim Halbduplex läuft die Übertragung pro Kanal zeitlich hinteinander, dabei können gleichzeitig mehrere Übertragungen der gleichen Richtung stattfinden - also mehrere Donwloads und anschließend die Uploads. Es können jedoch mehrere Kanäle geschaltet werden, womit auch hier gleichzeitiges up- und downloaden möglich ist. Dafür ist eine Umschaltvorrichtung nötig, die zeitgesteuert immer hin und her schaltet."
            },
            {
                "type": "hint",
                "content": "Typische Anwendungsbereiche sind Wechselsprechanlagen oder ISDN (engl. 'integrated Services Digital Network') - ein Internationaler Standard für digitale Telekommunkationsnetze für Kanäle wie Telefonie und Internet."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f4088c291ef1048612e096b"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Vollduplex"
            },
            {
                "type": "text",
                "content": "Nur bei der Vollduplex-Übertragung erfolgt die Datenübertragung gleichzeitig in beide Richtungen auf der gleichen Leitung / dem gleichen Kanal, es hat zwei eigenständige Übertragungskanäle. Es ist auch möglich Vollduplex aus einer Halbduplex-Übertragung zu emulieren, bei diesem Verfahren erfolgt die Umschaltung per Mikroprozessor so schnell, dass man von dem Übertragungsstop der jeweiligen Richtung nichts merkt."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f4088c791ef1048612e096d"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Duplexverfahren"
            },
            {
                "type": "text",
                "content": "Wie oben bereits erwähnt, gibt es Übertragungstechniken in denen gepaarte Kanäle/Frequenzblöcke zum Einsatz kommen. Es gibt also einen Kanal zum Upload/Uplink und einen Download/Downlink Kanal, der Abstand zwischen diesen beiden wird als Duplexabstand bezeichnet. Im GSM-Standard ist beispielsweise im 1,8-GHz-Frequenzband ein Duplexabstand von 190 MHz zwischen Hin- und Rückkanal vorgeschrieben. Wenn ein Netzbetreiber den Frequenzbereich von 1,92 GHz bis 1,925 für den Uplink verwendet, muss für den Downlink 2,11 GHz bis 2,115 GHz benutzt werden. Hier unterscheidet man zwischen Zeit- und Frequenz-Duplexverfahren, auch eine Mischform aus FDD und TDD sind als Halbduplex möglich - dabei nutzen Sender und Empfänger je ein Band pro Richtung, wechseln sich aber beim Zeitmultiplex ab. Daraus resultieren geringere Anforderungen an die Endgeräte, lassen sich also günstiger herstellen."
            },
            {
                "type": "subtitle",
                "content": "Zeitduplexverfahren - TDD / Time Division Duplex"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f4088d591ef1048612e096f"
            },
            {
                "type": "text",
                "content": "Bei TDD werden Up- und Downlink Kanäle zeitlich versetzt / hintereinander <b>auf einer Frequenz</b> übertragen. Es wird nur ein Frequenzband benutzt und Sender und Empfänger wechseln sich bei der Übertragung ab. Deshalb ist nur eine RF-Einheit (Radio-Frequenz) für Sende- und Empfangsrichtung notwendig, womit die Übertragungssysteme günstiger werden. Eignet sich für asymmetrische, flexible und kostengünstige Systeme, kommen bevorzugt im lizenzfreien Frequenzbereichen zum Einsatz."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Frequenzduplexverfahren - FDD / Frequency Division Duplex"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f4088da91ef1048612e0971"
            },
            {
                "type": "text",
                "content": "Bei FFD werden Up- und Downlink Kanäle gleichzeitig <b>auf zwei unterschiedlichen Frequenzen</b> übertragen, das bedeutet für die Sende- und Empfangsrichtung steht ein gepaartes Frequenzspektrum zur Verfügung. Hier benötigt jede Übertragungsrichtung seine eigene RF-Einheit (Radio-Frequenz), die sehr einfach gestaltet sein kann. Eignet sich für symmetrische Systeme und Anwendungen mit geringer Latenzzeit, kommt typischerweise in lizenzbehafteten Frequenzbereichen zum Einsatz."
            }
        ]
    },








    {
        "url": "test",
        "topic": "test",
        "subject": "lf-8",
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
