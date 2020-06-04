import {Post} from "../../types/Post";

export const lf6_posts: Post[] = [
    {
        "url": "/lf-6/entwickeln_und_bereitstellen_von_anwendungssystemen/datentypen",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Ein Datentyp bezeichnet eine Menge gleichartiger Werte, <u>Datentypen legen die möglichen Werte von Variablen, Attributen (und Methoden) fest</u>, sie bestimmen auch, welche Operationen auf den Werten möglich sind. In Java gibt es 8 elementare Datentypen (engl. \"primitive data types\"), dazu gehören unter anderem Zahlen - also ganze Zahlen & Fließkommazahlen, Wahrheitswerte und Zeichen. Jede Klasse bildet einen Datentyp und ist damit eine Erweiterung der elementaren Datentypen um eigene, benutzerdefinierte Attributen & Methoden."
            },
            {
                "type": "title",
                "content": "Elementare Datentypen"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed7dad14db79250b7ebc5d1"
            },
            {
                "type": "text",
                "content": "→ <u>Ganzzahlige Werte</u> - byte short int long <br/> → <u>Gleitpunktwerte</u> - float double <br/> → <u>Zeichenwert</u> - char <br/> → <u>Wahrheitswerte</u> - boolean"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Variablen & Konstanten"
            },
            {
                "type": "list",
                "content": "<u>Eine Variable ist ein Triple (Name, Adresse, Wert)</u>. Der Name identifiziert die Adresse im Speicher, in dem der aktuelle Wert der Variablen abgelegt ist. In Java ist es üblich Variablen mit Kleinbuchstaben zu deklarieren, valide Zeichen dafür sind Buchstaben, Zahlen und der Unterstrich _. In anderen Sprachen findet man zum Beispiel noch …",
                "list": [
                    "camelCase",
                    "PascalCase",
                    "UPPER_SNAKE_CASE",
                    "snake_case",
                    "kebab-case"
                ]
            },
            {
                "type": "list",
                "content": "Eine Konstante ist eine nicht veränderbare Variable (engl. \"immutable\"), was bedeutet, dass <u>der bei der Deklaration zugewiesene Wert nicht geändert werden</u> kann. In Java werden Konstanten mit dem Schlüsselwort final gekennzeichnet. Ein Literal ist ein konstanter Wert oder Ausdruck, der sich zur Laufzeit eines Programms nicht ändert. Allgemein bezeichnet ein Literal eine Zeichenfolge, die die direkte Darstellung der Werte von Basistypen definiert.",
                "list": [
                    "die Ziffern 123 sind ein Literal, denn sie repräsentieren den Wert einhundertdreiundzwanzig"
                ]
            },
            {
                "type": "table",
                "content": "Um andere Zahlensysteme wie zum Beispiel die Hexadezimal darzustellen sind folgende Präfixe möglich ...",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Zahlensystem" },
                            { "align": "middle", "content": "Vorzeichen" },
                            { "align": "middle", "content": "Beispiel" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<u>Dezimal</u>" },
                            { "align": "middle", "content": "ohne" },
                            { "align": "middle", "content": "23872323 ⇒ 23_872_323" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<u>Oktal</u>" },
                            { "align": "middle", "content": "0 (Null)" },
                            { "align": "middle", "content": "0133041503 ⇒ 01_3304_1503" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<u>Hexadezimal</u>" },
                            { "align": "middle", "content": "0x / 0X (Null / NullX)" },
                            { "align": "middle", "content": "0x16C4343 ⇒ 0x16C_4343" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<u>Binär</u>" },
                            { "align": "middle", "content": "0b / 0B (Nullb / NullB)" },
                            { "align": "middle", "content": "0b10101111 ⇒ 0b1010_1111" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Ganzzahlige Werte werden üblicherweise mit dem Datentyp int deklariert. <u>Reicht der Wertebereich nicht aus wird der Datentyp long verwendet</u>. In Java wird dieser durch das Anhängen eines l oder L an den ganzzahligen Wert gekennzeichnet."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Gleitkommatypen"
            },
            {
                "type": "subtitle",
                "content": "Fließkommazahl / Gleitkommazahl (engl. \"Floating Point number\")"
            },
            {
                "type": "text",
                "content": "Fließkommaliterale beinhalten Zahlen mit Nachkommastellen, wenn kein Typ angegeben wird werden sie standardmäßig als double - Wert behandelt. Sind sie mit einem angehängten f oder F gekennzeichnet, werden sie als float - Werte interpretiert."
            },
            {
                "type": "text",
                "content": "Beispiel: float price = 3.00f;"
            },
            {
                "type": "subtitle",
                "content": "float und double"
            },
            {
                "type": "table",
                "content": "Neben der Speichergröße - float 32 Bit oder double 64 Bit - gibt es Unterschiede in der Genauigkeit von Kommzahlen. Zwischen zwei beliebigen Zahlen gibt es unendlich viele Zahlen dazwischen …",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "0 und 1" },
                            { "align": "middle", "content": "0.1" },
                            { "align": "middle", "content": "0.2" },
                            { "align": "middle", "content": "0.3" },
                            { "align": "middle", "content": "…" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "0.1 und 0.2" },
                            { "align": "middle", "content": "0.11" },
                            { "align": "middle", "content": "0.12" },
                            { "align": "middle", "content": "0.13" },
                            { "align": "middle", "content": "…" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "0.01 und 0.02" },
                            { "align": "middle", "content": "0.011" },
                            { "align": "middle", "content": "0.012" },
                            { "align": "middle", "content": "0.013" },
                            { "align": "middle", "content": "…" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Solche Zahlen haben eine unendliche Anzahl an Ziffern, um diese Ziffern zu speichern zu können würde man unendlichen Speicherplatz benötigen. Daher sind beide Typen von der Genauigkeit der Kommazahlen - und auch ganzen Zahlen - begrenzt."
            },
            {
                "type": "text",
                "content": "Jede float - Zahl kann in einen double gespeichert werden, aber im umgekehrten Fall geht die zusätzliche Genauigkeit verloren, ähnlich wie bei float und int (3.14159f → int wird zu 3). Den Typ float zu verwenden kann vorteilhaft sein wenn mit vielen Variablen gerechnet wird, manche Prozessoren können mit float schneller rechnen als mit double und es braucht die Hälfte an Speicher."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Character-Grundtyp"
            },
            {
                "type": "table",
                "content": "Um auch andere Zeichen - nicht auf der Tastatur zu finden - als Literal verwenden zu können, gibt es sogenannte <u>Escape-Sequenzen</u>. Mit ihrer Hilfe können benötigte Zeichen eingegeben werden (zB. Steuer- oder Sonderzeichen).",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "a" },
                            { "align": "left", "content": "Buchstabe a" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\u0061" },
                            { "align": "left", "content": "Unicode Codierung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\n" },
                            { "align": "left", "content": "Zeilenumbruch" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\f" },
                            { "align": "left", "content": "Seitenumbruch" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\t" },
                            { "align": "left", "content": "Horizontaler Tabulator" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\\\" },
                            { "align": "left", "content": "Backslash" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\b" },
                            { "align": "left", "content": "Rückschritt (Backspace)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\\"" },
                            { "align": "left", "content": "Doppeltes Anführungszeichen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\'" },
                            { "align": "left", "content": "Einfaches Anführungszeichen" }
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "content": "Der Typ char hat 16 bit und ist ein einzelnes Zeichen aus dem Unicodezeichensatz. Einer char - Variablen kann man drei verschiedene Arten von Werten zuweisen:",
                "list": [
                    "→ Ein alphanumerisches Zeichen in einfachen Anführungszeichen",
                    "→ Ein Integerwert aus dem Zahlenbereich 0 bis 65535",
                    "→ oder der vierstellige hexadezimale Index aus dem Unicodezeichensatz"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Boolescher-Grundtyp"
            },
            {
                "type": "text",
                "content": "In der Programmierung ist es häufig nötig sogenannte Wahrheitswerte / Zustände zu speichern. Dafür gibt es den Typ boolean, benannt nach <a href='https://de.wikipedia.org/wiki/George_Boole'>George Boole</a>, welcher nur den Wert true oder false annehmen kann. Intern werden diese Werte mit 1 und 0 dargestellt. Bei der Initialisierung eines Booleans lässt sich auch ein Vergleich darstellen …"
            },
            {
                "type": "text",
                "content": "int age = 20; <br/> int restriction = 18; <br/> boolean isOldEnough = age >= restriction; ← true"
            },
            {
                "type": "text",
                "content": "Boolesche Operatoren in Java wären zum Beispiel … <br/> isOldEnough && paymentDone <br/> paymentDone || isPremiumMember <br/> paymentDone == true"
            },
            {
                "type": "text",
                "content": "Die doppelten && und || bedeuten eine Kurzschlussauswertung, sobald beim && der erste Wert false ist, oder bei || der erste Wert true, werden die folgenden Werte nicht mehr ausgewertet. Die Operatoren mit vollständiger Auswertung werden benötigt, wenn es zu Teilausdrücken kommt - wie zB. den Ladezustand zu beenden - also Methodenaufrufe die in jedem Fall ausgeführt werden sollen."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Kodierung"
            },
            {
                "type": "subtitle",
                "content": "Ganzzahlige Datentypen (Zweierkomplementkodierung)"
            },
            {
                "type": "text",
                "content": "Das <a href='https://de.wikipedia.org/wiki/Zweierkomplement'>Zweierkomplement</a> (engl. \"two’s complement\") - auch B(inär)-Komplement oder Basiskomplement - ist eine Möglichkeit negative Integer-Zahlen im Dualsystem darzustellen, ohne zusätzliche Zeichen wie <b>+</b> und <b>−</b> zu benötigen. Dies ist vor allem für Computer bedeutend, welche mit Bits arbeiten, die als Werte nur 0 oder 1 annehmen. Das Zweierkomplement ist die vorherrschende Art, mit der positive und negative Zahlen im Computer dargestellt und für Rechenoperationen mit Hilfe des Rechenwerks erschlossen werden."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed7dafd4db79250b7ebc5d3"
            },
            {
                "type": "subtitle",
                "content": "Gleitkommatypen (Gleitkommakodierung nach IEEE 754)"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed7db2f4db79250b7ebc5d5"
            },
            {
                "type": "text",
                "content": "m = normalisierte Mantisse - 1 ≤ m < 2 <br/> e - Exponent"
            },
            {
                "type": "subtitle",
                "content": "Beispiel: Kodierung der Zahl 13, 5"
            },
            {
                "type": "text",
                "content": "Suche den größten Exponenten (Zweierpotenz), so dass 2<sup>e</sup> ≤ x - 13,5 = 1,<b>6875</b> x 2<sup><b>3</b></sup>"
            },
            {
                "type": "text",
                "content": "Um negative Exponenten ohne zusätzliche Codierung (zB. Zweierkomplement) darstellen zu können, wird ein Biaswert (B) zum Exponenten (e) addiert."
            },
            {
                "type": "table",
                "content": "test",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "float" },
                            { "align": "left", "content": "Biaswert (B) - 127" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "double" },
                            { "align": "left", "content": "Biaswert (B) - 1023" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Abgespeichert wird der modifizierte Exponent (e + B) und die reduzierte normalisierte Mantisse f, mit f = m - 1"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed7db454db79250b7ebc5d7"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Typkonvertierung"
            },
            {
                "type": "subtitle",
                "content": "Typumwandlung (engl. \"type casting\")"
            },
            {
                "type": "text",
                "content": "Wenn ein int - Wert mit einem double - Wert addiert werden soll, welchem Grunddatentyp enstpricht dann das Ergebnis?"
            },
            {
                "type": "list",
                "content": "Implizite Typkonvertierung (engl. \"implicite typecast\") bei Grunddatentypen",
                "list": [
                    "Kleiner Zahlenbereich wird im großen Zahlenbereich abgebildet",
                    "Compiler tut dies in Java problemlos"
                ]
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed7db5f4db79250b7ebc5d9"
            },
            {
                "type": "text",
                "content": "Java nimmt alle Typumformungen in Pfeilrichtung automatisch (implizit) vor. Dabei können Zwischenschritte übersprungen werden."
            },
            {
                "type": "subtitle",
                "content": "Explizite Typkonvertierung bei Grunddatentypen (explicit typecast)"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "großen Zahlenbereich in kleinen Zahlenbereich umwandeln (zB. die Vorkommazahl von 3.14 wird benötigt) also in Java double → int",
                    "Compiler zeigt Fehler an"
                ]
            },
            {
                "type": "text",
                "content": "Alle Typkonvertierungen entgegengesetzt der Pfeilrichtung erfordern in Java einen Konvertierungenoperator (cast-Operator), der den Ziel-Typ der Konvertierung angibt. Es wird explizit kenntlich gemacht, dass die Typkonvertierung gewollt ist. Der Konvertierungsoperator wird in Klammern geschrieben und gibt den Zieldatentyp an. <br/> → Beispiel:(int) 3.14 → Nachkommastellen werden abgeschnitten"
            },
            {
                "type": "text",
                "content": "Der Grunddatentyp boolean kann in Java nicht konvertiert werden!"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Typsysteme im Vergleich"
            },
            {
                "type": "subtitle",
                "content": "Stark typisierte Sprachen"
            },
            {
                "type": "text",
                "content": "Datentypen werden immer erzwungen. Ohne explizite Typkonvertierung kann ein int - Datentyp nicht in ein char - Datentyp umgewandelt werden (Java und Python)"
            },
            {
                "type": "subtitle",
                "content": "Schwach typisierte Sprachen"
            },
            {
                "type": "text",
                "content": "Datentypen können ignoriert werden. Ein int -Datentyp kann ohne explizite Typkonvertierung als char verwendet werden (C, PHP, Lua)"
            },
            {
                "type": "subtitle",
                "content": "Statisch typisierte Sprachen"
            },
            {
                "type": "text",
                "content": "Der Datentyp steht zur Kompilerzeit fest. Einer Variablen wird vor der Verwendung ein Datentyp zugewiesen (Java und C)"
            },
            {
                "type": "subtitle",
                "content": "Dynamisch typisierte Sprachen"
            },
            {
                "type": "text",
                "content": "Der Datentyp wird bei der Zuweisung einer Variablen zur Laufzeit ermittelt (PHP, Python, Lua)"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "Zentrum für Mediales Lernen am Karlsruher Institut für Technologie (KIT) | Objekt-orientiertes Programmieren in Java, Typen und Variablen, Präzedenz, Wahrheitswertswerte - Vorlesungsaufzeichnung <a href='https://youtu.be/LNsjGxhUJ4I'>https://youtu.be/LNsjGxhUJ4I</a>",
                    "<a href='https://www.a-coding-project.de/ratgeber/java/variablen-und-operatoren'>https://www.a-coding-project.de/ratgeber/java/variablen-und-operatoren</a>",
                    "<a href='https://de.wikipedia.org/wiki/Zweierkomplement'>https://de.wikipedia.org/wiki/Zweierkomplement</a>"
                ]
            }
        ]
    },
    {
        "url": "/lf-6/entwickeln_und_bereitstellen_von_anwendungssystemen/operatoren",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "elements": [
            {
                "type": "subtitle",
                "content": "Arithmetische Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "+" },
                            { "align": "middle", "content": "a + b" },
                            { "align": "middle", "content": "5" },
                            { "align": "left", "content": "Addition → Summe von a und b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "-" },
                            { "align": "middle", "content": "a - b" },
                            { "align": "middle", "content": "5" },
                            { "align": "left", "content": "Subtraktion → Differenz von a und b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "*" },
                            { "align": "middle", "content": "a * b" },
                            { "align": "middle", "content": "4" },
                            { "align": "left", "content": "Multiplikation → Produkt von a und b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "/" },
                            { "align": "middle", "content": "a / b" },
                            { "align": "middle", "content": "4" },
                            { "align": "left", "content": "Division → Quotienten von a und b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "%" },
                            { "align": "middle", "content": "a % b" },
                            { "align": "middle", "content": "4" },
                            { "align": "left", "content": "Modulo, Restwert → ganzzahliger Rest der Division von a und b" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Inkrement- und Dekrement-Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "++" },
                            { "align": "middle", "content": "++a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Prä-Inkrement → Erhöht den Wert von a um 1 vor dem Ausdruck" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "++" },
                            { "align": "middle", "content": "a++" },
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Post-Inkrement → Erhöht den Wert von a um 1 nach dem Ausdruck" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "--" },
                            { "align": "middle", "content": "--a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Prä-Dekrement → Verringert den Wert von a um 1 vor dem Ausdruck" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "--" },
                            { "align": "middle", "content": "--a" },
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Post-Dekrement → Verringert den Wert um 1 nach dem Ausdruck" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Vorzeichen Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "+" },
                            { "align": "middle", "content": "+a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Konvertiert Werte vom Typ byte, short oder char nach int, lässt ansonsten den Wert unverändert" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "-" },
                            { "align": "middle", "content": "-a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Wechselt das Vorzeichen von a" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Relationale Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">" },
                            { "align": "middle", "content": "a > b" },
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "true, wenn a größer als b ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">=" },
                            { "align": "middle", "content": "a >= b" },
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "true, wenn a größer oder gleich b ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<" },
                            { "align": "middle", "content": "a < b" },
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "true, wenn a kleiner als b ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<=" },
                            { "align": "middle", "content": "a <= b" },
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "true, wenn a kleiner oder gleich b ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "==" },
                            { "align": "middle", "content": "a == b" },
                            { "align": "middle", "content": "8" },
                            { "align": "left", "content": "true, wenn a gleich b ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "!=" },
                            { "align": "middle", "content": "a != b" },
                            { "align": "middle", "content": "8" },
                            { "align": "left", "content": "true, wenn a ungleich b ist" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Logische Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "!" },
                            { "align": "middle", "content": "!a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "NICHT, der Ausdruck liefert true, wenn a false ist, ansonsten false" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "&&" },
                            { "align": "middle", "content": "a && b" },
                            { "align": "middle", "content": "12" },
                            { "align": "left", "content": "UND (Short Cut), der Ausdruck liefert true, wenn sowohl a als auch b true sind, ansonsten false. Ist a bereits false, wird b nicht mehr bewertet" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "||" },
                            { "align": "middle", "content": "a || b" },
                            { "align": "middle", "content": "13" },
                            { "align": "left", "content": "ODER (Short Cut), der Ausdruck liefert true, wenn midnestens a oder b true ist, ansonsten false. Ist a bereits true liefert der Ausdruck true, ohne dass b noch bewertet wird" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Bit Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "~" },
                            { "align": "middle", "content": "~a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Einerkomplement" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "&" },
                            { "align": "middle", "content": "a & b" },
                            { "align": "middle", "content": "9" },
                            { "align": "left", "content": "bitweise UND, bei booleschen Operationen ein UND ohne Short Cut" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "|" },
                            { "align": "middle", "content": "a | b" },
                            { "align": "middle", "content": "11" },
                            { "align": "left", "content": "bitweise ODER, bei booleschen Operationen ein ODER ohne Short Cut" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "^" },
                            { "align": "middle", "content": "a ^ b" },
                            { "align": "middle", "content": "10" },
                            { "align": "left", "content": "bitweises EXKLUSIV-ODER" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">>" },
                            { "align": "middle", "content": "a >> b" },
                            { "align": "middle", "content": "6" },
                            { "align": "left", "content": "Rechtsschieben mit Vorzeichen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">>>" },
                            { "align": "middle", "content": "a >>> b" },
                            { "align": "middle", "content": "6" },
                            { "align": "left", "content": "Rechtsschieben ohne Vorzeichen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<<" },
                            { "align": "middle", "content": "a << b" },
                            { "align": "middle", "content": "6" },
                            { "align": "left", "content": "Linksschieben" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Zuweisungs Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "=" },
                            { "align": "middle", "content": "a = b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Weist a den Wert von b zu. Rückgabewert des Ausdrucks ist der Wert von b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "+=" },
                            { "align": "middle", "content": "a += b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Additions-Zuweisung. Kurznotation für a = a + b. Der Ausdruck weist a den Wert a + b zu, Rückgabewert ist a + b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "-=" },
                            { "align": "middle", "content": "a -= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Subtraktions-Zuweisung. Kurznotation für a = a - b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "*=" },
                            { "align": "middle", "content": "a *= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Multiplikations-Zuweisung. Kurznotation für a = a * b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "/=" },
                            { "align": "middle", "content": "a /= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Divisions-Zuweisung. Kurznotation für a = a / b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "%=" },
                            { "align": "middle", "content": "a %= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Modulo-Zuweisung. Kurznotation für a = a % b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "&=" },
                            { "align": "middle", "content": "a &= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "UND-Zuweisung. Kurznotation für a = a & b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "|=" },
                            { "align": "middle", "content": "a |= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "ODER-Zuweisung. Kurznotation für a = a | b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "^=" },
                            { "align": "middle", "content": "a ^= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "EXKLUSIV-ODER-Zuweisung. Kurznotation für a = a ^ b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">>=" },
                            { "align": "middle", "content": "a >>= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Rechtsschiebe-Zuweisung. Kurznotation für a = a >> b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">>>=" },
                            { "align": "middle", "content": "a >>>= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Rechtsschiebe-Zuweisung mit Nullexpansion. Kurznotation für a = a >>> b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<<=" },
                            { "align": "middle", "content": "a <<= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Linksschiebe-Zuweisung. Kurznotation für a = a << b" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Sonstige Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "?:" },
                            { "align": "middle", "content": "14" },
                            { "align": "left", "content": "Fragezeichen-Operator (Bedingungsoperator, Konditionaloperator). Syntax: a ? b : c;. a ist ein boolescher Wert. Ist a true, liefert der Fragezeichen-Ausdruck den Wert b, andernfalls den Wert von c" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "[]" },
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Eckige Klammern, um Arrays zu deklarieren, zu initialisieren und um auf Array-Elemente zuzugreifen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "." },
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Punkt als Trennzeichen zur Bildung qualifizierter Namen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "(parameterliste)" },
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Die runden Klammern sind bei der Deklaration und beim Aufruf von Methoden anzugeben" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "(type)" },
                            { "align": "middle", "content": "3" },
                            { "align": "left", "content": "Operator für die Typkonvertierung (cast-Operator)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "new" },
                            { "align": "middle", "content": "3" },
                            { "align": "left", "content": "Operator zum Erzeugen einer neuen Instanz (eines neuen Objekts)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "instanceof" },
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "Der Ausdruck op instanceof class testet, ob der Operand op eine Instanz einer Klasse class oder einer davon abgeleiteten Klasse ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "+" },
                            { "align": "middle", "content": "5" },
                            { "align": "left", "content": "Stringverkettung. Ist beim Zeichen + einer der beiden Operanden ein String, wird eine Stringverkettung durchgeführt. Nicht-String-Operanden werden dabei ggf. in String-Instanzen konvertiert" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "url": "/lf-6/entwickeln_und_bereitstellen_von_anwendungssystemen/eulersche_phi_funktion",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "elements": [
            {
                "type": "text",
                "content": "Die eulersche Phi-Funktion (φ) ist eine zahlentheoretische Funktion. Sie ordnet jeder natürlichen Zahl n die Anzahl der natürlichen Zahlen a von 1 bis n zu, die zu n teilerfremd sind, für die also ggT(a,n) = 1 ist."
            },
            {
                "type": "text",
                "content": "Wenn zwei zahlen nur den gemeinsamen Teiler 1 besitzen, so heißen sie teilerfremd."
            },
            {
                "type": "text",
                "content": "Beispiele: <br/> → Die Zahl 6 ist zu zwei Zahlen zwischen 1 und 6 teilerfremd (1 und 5), also ist φ(6) = 2 <br/> → Die Zahl 13 ist als Primzahl zu den zwölf Zahlen von 1 bis 12 teilerfremd, also ist φ(13) = 12 <br/> → Die ersten 20 Werte der φ-Fuktion lauten"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "n" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "7" },
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "9" },
                            { "align": "middle", "content": "10" },
                            { "align": "middle", "content": "11" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "13" },
                            { "align": "middle", "content": "14" },
                            { "align": "middle", "content": "15" },
                            { "align": "middle", "content": "16" },
                            { "align": "middle", "content": "17" },
                            { "align": "middle", "content": "18" },
                            { "align": "middle", "content": "19" },
                            { "align": "middle", "content": "20" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "f(n)" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "10" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "16" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "18" },
                            { "align": "middle", "content": "8" }
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
                "content": "Funktionsaufruf"
            },
            {
                "type": "code",
                "content": "public class Main { \n    void main(String[] args) { \n        System.out.println(phi(11)); \n    } \n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Funktion: Größter gemeinsamer Teiler"
            },
            {
                "type": "code",
                "content": "public static int ggt(int x, int y) {\n    while ( y != 0 ) {\n        int z = x % y;\n        x = y;\n        y = z;\n    }\n    return x;\n }"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Funktion: phi Funktion"
            },
            {
                "type": "code",
                "content": "public class Main { \n    void main(String[] args) { \n        System.out.println(phi(11)); \n    } \n}"
            },
        ]
    },




    {
        "url": "/lf-6/test",
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
                "type": "quiz",
                "content": "quizlink"
            },
            {
                "type": "code",
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
