import {Post} from "../../app/models/post";

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
                "content": "→ <u>Ganzzahlige Werte</u> - <code>byte short int long</code> <br/> → <u>Gleitpunktwerte</u> - <code>float double</code> <br/> → <u>Zeichenwert</u> - <code>char</code> <br/> → <u>Wahrheitswerte</u> - <code>boolean</code>"
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
                    "<code>camelCase</code>",
                    "<code>PascalCase</code>",
                    "<code>UPPER_SNAKE_CASE</code>",
                    "<code>snake_case</code>",
                    "<code>kebab-case</code>"
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
        "url": "/lf-6/entwickeln_und_bereitstellen_von_anwendungssystemen/kontrollstrukturen_und_schleifen",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "elements": [
            {
                "type": "title",
                "content": "Ausdrücke"
            },
            {
                "type": "text",
                "content": "Ausdrücke (engl. \"expressions\") werden in einem Programm verwendet, um vorzunehmende Auswertungen zu beschreiben."
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "auf der rechten Seite von Zuweisungen" },
                            { "align": "left", "content": "<code>x = Ausdruck;</code>" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "als Argumente von Methoden" },
                            { "align": "left", "content": "<code>f(Ausdruck) { ... };</code>" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "als Rückgabewerte von Funktionen" },
                            { "align": "left", "content": "<code>return Ausdruck;</code>" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Jeder Ausdruck hat einen Typ <br/> <code>(3.0 + y) * 4.0</code> - ist ein Ausdruck vom Typ <code>double</code> <br/> <code>new Vector2D(1.0, 2.0)</code> - ist ein Ausdruck vom Typ <code>Vector2D</code> <br/> <code>x == 2</code> - ist ein Ausdruck vom Typ <code>boolean</code>"
            },
            {
                "type": "text",
                "content": "Ausdrücke vom Typ <code>boolean</code> nennt man auch Bedingungen."
            },
            {
                "type": "subtitle",
                "content": "Weitere Ausdrücke in Java"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>f(Ausdruck<sub>1</sub>)" },
                            { "align": "left", "content": "Methodenaufruf" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>Ausdruck<sub>1</sub> x Ausdruck<sub>2</sub></code>" },
                            { "align": "left", "content": "hier bezeichnet x einen beliebigen binären Operator" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>yAusdruck</code>" },
                            { "align": "left", "content": "hier bezeichnet y einen beliebigen binären Operator" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>new Klasse()</code>" },
                            { "align": "left", "content": "Initialisierung einer Klasse" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>Variable = Ausdruck</code>" },
                            { "align": "left", "content": "Zuweisung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>_ instanceof _</code>" },
                            { "align": "left", "content": "Klassen-Zugehörigkeits-Test" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>_ ? _ : _</code>" },
                            { "align": "left", "content": "Bedingter Ausdruck (wenn-dann-sonst)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>(Typ) _</code>" },
                            { "align": "left", "content": "Typumwandlung (type cast)" }
                        ]
                    }
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Anweisungen"
            },
            {
                "type": "text",
                "content": "Anweisungen (engl. \"statements\") sind Einheiten der Ausführung, auch \"Sätze in der Programmiersprache\" genannt. Anweisungen haben meistens eine Zustandsveränderung zur Folge."
            },
            {
                "type": "list",
                "content": "Anweisungen in Java",
                "list": [
                    "Deklaration lokaler Variablen - <code>int x;</code>",
                    "Block-Anweisungen - <code>{ Anweisung1; ... }</code>",
                    "Return-Anweisungen - <code>return Ausdruck; bzw. return;</code>"
                ]
            },
            {
                "type": "list",
                "content": "\"Expression-Statements\" sind ausgewählte Ausdrücke, die gleichzeitig auch als Anweisungen verwendet werden können",
                "list": [
                    "Inkrement- / Dekrement-Operator <br/> <code>i++;</code> == <code>Ausdruck<sub>1</sub> = y + (i++);</code>",
                    "Zuweisungen <br/> <code>x = y;</code> == <code>Ausdruck<sub>2</sub> = (y = z);</code>",
                    "Methodenaufrufe <br/> <code>f(x,y);</code> == <code>Ausdruck<sub>3</sub> = (y = z);</code>",
                    "new-Operator <br/> <code>new Vector2D();</code> == <code>Ausdruck<sub>4</sub> = new Vector2D();</code>"
                ]
            },
            {
                "type": "subtitle",
                "content": "Ausdruck vs Anweisung"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Anweisung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "Typisiert" },
                            { "align": "middle", "content": "Ja" },
                            { "align": "middle", "content": "Nein" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "Zweck" },
                            { "align": "middle", "content": "„Berechne ...“" },
                            { "align": "middle", "content": "„Mache ...“" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "Effekt" },
                            { "align": "middle", "content": "Liefert Wert" },
                            { "align": "middle", "content": "Ändert Zustand" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Ein Ausdruck ist immer Teil einer Anweisung, der Rumpf jeder Methode ist immer eine Folge von Anweisungen."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Übung"
            },
            {
                "type": "list",
                "content": "Bei welchen Java-Fragmenten handelt es sich um gültige Anweisungen?",
                "list": [
                    "1) <code>P = new Vector2D().shift(1.0, 2.0);</code>",
                    "2) <code>(int)foo(x);</code>",
                    "2) <code>x = y = z;</code>",
                    "2) <code>(i++)++;</code>"
                ]
            },
            {
                "type": "subtitle",
                "content": "Eingaben über die Konsole"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5eefac334db79250b7ebc5df"
            },
            {
                "type": "list",
                "content": "Vorgefertigte Klasse <code>Scanner</code>",
                "list": [
                    "Importieren mit - <code>import java.util.Scanner;s</code>",
                    "Objekt erstellen mit - <code>new Scanner(System.in);</code>",
                    "Zeile einlesen mit - <code>scanner.nextInt();</code>"
                ]
            },
            {
                "type": "text",
                "content": "Achtung: Noch gibt es keine Fehlerbehandlung wenn keine Zahl eingegeben wird!"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Kontrollfluss-Anweisungen (engl. \"control-flow-statements\")"
            },
            {
                "type": "text",
                "content": "<code>if</code> - Anweisung <br/> <code>switch</code> - Anweisung <br/> <code>while / do-while</code> - Anweisung <br/> <code>for</code> - Anweisung <br/> <code>break</code> - Anweisung <br/> <code>continue</code> - Anweisung"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>if</code> – Anweisung"
            },
            {
                "type": "text",
                "content": "Fallunterscheidung: wenn-dann-Prinzip <br/> → Fallunterscheidung ist eine fundamentale Technik der Mathematik und des Programmierens"
            },
            {
                "type": "text",
                "content": "Beispielanweisung der Fallunterscheidung in Java"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int a = scanner.nextInt(); \nint b = scanner.nextInt(); \nint max = 0; \n\nif (a >= b) { \n    max = a; \n} else { \n    max = b; \n}"
            },
            {
                "type": "text",
                "content": "Als Kontrollfluss-Diagramm"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5eefce7e4db79250b7ebc5e2"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Geschachtelte <code>if</code> – Anweisungen"
            },
            {
                "type": "text",
                "content": "Man kann die <code>if</code> - Anweisung auch mehrfach schachteln, nach Möglichkeit sollten die am häufigsten auftretenden Fälle zuerst behandelt werden. In jedem <code>else</code> - Zweig gilt die Negation aller vorangegangenen Bedingungen"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int points = 70;\nint grade = 0; \n\nif (points >= 87) {\n    grade = 1 \n} else if (points >= 75) {\n    grade = 2;\n} else if (points >= 63) {\n    grade = 3;\n} else if (points >= 51) {\n    grade = 4;\n} else {\n    grade = 5;\n}\n\nSystem.out.println(\"Note: \" + grade);"
            },
            {
                "type": "text",
                "content": "Als Kontrollfluss-Diagramm"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5eefce9e4db79250b7ebc5e4"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Übung"
            },
            {
                "type": "text",
                "content": "Schreiben Sie ein Programm, das für zwei Integer-Eingaben a und b ausgibt, ob a größer, kleiner oder gleich b ist."
            },
            {
                "type": "text",
                "content": "Beispiel-Lösung"
            },
            {
                "type": "code",
                "language": "java",
                "content": "Scanner scanner = new Scanner(System.in);\nint a = scanner.nextInt(); \nint b = scanner.nextInt(); \n\nif (a > b) {\n    System.out.println(\"a ist größer als b\");\n} else if (a < b) {\n    System.out.println(\"a ist kleiner als b\");\n} else {\n    System.out.println(\"a ist gleich b\");\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>switch</code> – Anweisung"
            },
            {
                "type": "text",
                "content": "Die switch – Anweisung (engl. ‚switch statement‘) realisiert eine weitere Form der Verzweigung."
            },
            {
                "type": "text",
                "content": "Beispiel-Lösung"
            },
            {
                "type": "code",
                "language": "java",
                "content": "// Konstanten der Klasse\nstatic final char NEW = ‘n‘;\nstatic final char OPEN = ‘o‘;\nstatic final char SAVE = ‘s‘;\nstatic final char QUIT = ‘q‘;\n\n// Innerhalb einer Methode\nchar command = ...;\nswitch (command) {\n   case NEW:   createFile();\n   break;\n   case OPEN:  openFile();\n   break;\n   case SAVE:  saveFile();\n   break;\n   case QUIT:  exitProgram();\n   break;\n   default:    System.out.println(\"Unbekanntes Kommando: \" + command);\n   break;\n}"
            },
            {
                "type": "text",
                "content": "Syntax"
            },
            {
                "type": "code",
                "language": "java",
                "content": "switch (command) {\n   case WERT_1: Anweisung_1;\n   default: Anweisung_2;\n}"
            },
            {
                "type": "text",
                "content": "Der Ausdruck muss dabei den Typ <code>char</code>, <code>byte</code>, <code>short</code>, <code>int</code> oder (seit Java 7 möglich) <code>enum</code> oder <code>string</code> haben. Die Werte nach <code>case</code> müssen kontant sein (keine Variablen!), ein „<code>case</code>“-Wert legt nur den Einstiegspunkt innerhalb des <code>switch</code> – Blocks fest. Die break – Anweisung veranlasst das (sofortige) Verlassen des gesamten <code>switch</code> – blocks. Ohne <code>break</code> werden auch alle Anweisungen der nachfolgenden <code>case</code> – Blöcke abgearbeitet. Nimmt der Ausdruck keinen der Werte an, so wird der (optionale) <code>default</code> – Block abgearbeitet."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Beispiel - Tage pro Monat"
            },
            {
                "type": "text",
                "content": "Die rechte Variante ist zwar kürzer, aber schlechter lesbar. Es werden auch Monate größer 12 und kleiner 1 akzeptiert. → Fehlerfindung (engl. „debugging“) erschwert."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int month = 5;\nint days = 0;\n\n// Erstes Variante\nswitch (month) {\n   case  1: days = 31; break;\n   case  2: days = 28; break;\n   case  3: days = 31; break;\n   case  4: days = 30; break;\n   case  5: days = 31; break;\n   case  6: days = 30; break;\n   case  7: days = 31; break;\n   case  8: days = 31; break;\n   case  9: days = 30; break;\n   case 10: days = 31; break;\n   case 11: days = 30; break;\n   case 12: days = 31; break;\n}\n\n// Zweite Variante\nswitch (month) {\n   case  2: days = 28; break;\n   case  4:\n   case  6:\n   case  9:\n   case 11: days = 30; break;\n   default: days = 31; break;\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Programmieren von Schleifen"
            },
            {
                "type": "text",
                "content": "Schleifen erlauben die wiederholte Ausführung von Anweisungen, die Programmierung von Schleifen erfolgt nach dem Muster: Vorbereitung, Schleife, Nachbereitung."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>while</code> - Schleife"
            },
            {
                "type": "text",
                "content": "Die <code>while</code> – Anweisung (engl. ‘while-statement‘) realisiert eine sich wiederholende Ausführung."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int a = 8;\nint b = 11;\n\nint i = a;\nint sum = 0;\n\nwhile (i <= b) {\n   sum = sum + i;\n   i = i + 1;\n}"
            },
            {
                "type": "table",
                "content": "Vorgänge der Ausführung",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Iteration" },
                            { "align": "middle", "content": "<code>i</code>" },
                            { "align": "middle", "content": "<code>sum</code>" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "-" },
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "0" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "9" },
                            { "align": "middle", "content": "8" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "10" },
                            { "align": "middle", "content": "17" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "11" },
                            { "align": "middle", "content": "27" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "38" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "-" },
                            { "align": "middle", "content": "-" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "→ Ergebnis: 38"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>do-while</code> - Schleife"
            },
            {
                "type": "text",
                "content": "<code>do { Anweisungen } while (Bedingung)</code>"
            },
            {
                "type": "text",
                "content": "Als Kontrollfluss-Diagramm"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5eefcffe4db79250b7ebc5ea"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Übung"
            },
            {
                "type": "text",
                "content": "Schreiben Sie ein Programm, das für eine Integer – Eingaben p die Zahlen von 1 bis p ausgibt, gewünschte Ausgabe für <code></code>p = 5</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "Scanner scanner = new Scanner(System.in);\nint p = scanner.nextInt();\nint i = 1;\n\nwhile (i <= p) {\n   System.out.println(i + \" \");\n   i++;\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>for</code> - Schleife"
            },
            {
                "type": "text",
                "content": "Die <code>for</code> – Schleife (engl. \"for statement\") ist eine Zählschleife"
            },
            {
                "type": "text",
                "content": "<code>for (Initialisierung; Bedingung; Schritt) { Anweisungen }</code>"
            },
            {
                "type": "text",
                "content": "Die Initialisierung ist eine Anweisung, die einmalig am Anfang der Schleife ausgeführt wird, vor jedem Schleifendurchlauf wird geprüft, ob die Bedingung wahr ist. Der Schritt ist eine Anweisung, die am Ende jedes Schleifendurchlaufs ausgeführt wird (nach den Anweisungen)."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int a = 8;\nint b = 11;\nint sum = 0;\n\n for (int i = a; i <= b; i++) {\n   sum = sum + i;\n}"
            },
            {
                "type": "text",
                "content": "Als Kontrollfluss-Diagramm"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5eefcf1c4db79250b7ebc5e8"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Unterschied <code>for</code> – und <code>while</code> – Schleife"
            },
            {
                "type": "text",
                "content": "<code>for (n) { ... }</code> <br/> → Ich weiß wie oft es ausgeführt wird, da es wie ein sequentiellles Programm ohne Schleife läuft"
            },
            {
                "type": "code",
                "language": "java",
                "content": "for (initialisierung; abbruchbedingung; anweisungen_2) {\n   anweisungen_1;\n}"
            },
            {
                "type": "text",
                "content": "<code>while (n) { ... }</code> <br/> → → Ich weiß vor Beginn der Ausführung nicht unbedingt, wie oft die Schleife ausgeführt wird"
            },
            {
                "type": "code",
                "language": "java",
                "content": "Typ initialisierung;\n\nwhile (abbruchbedingung) {\n   anweisungen_1; anweisungen_2\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Beispiel: Collatz – Funktion"
            },
            {
                "type": "text",
                "content": "Hier ist im Voraus unbekannt, wie häufig die Schleife ausgeführt wird."
            },
            {
                "type": "code",
                "language": "java",
                "content": "n = Zahl;\n\nwhile (n != 1) {\n   if (n%2 == 0) {\n      n = n / 2;\n   } else {\n      n = n * 3 + 1;\n   }\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Übung"
            },
            {
                "type": "text",
                "content": "Gesucht: Ein Programm, das für zwei Integer – Eingaben p und m dann p Zeilen in der Konsole ausgeben, die jeweils die Zahlen von 1 bis m enthalten. <br/> Gewünschte Ausgabe für p = 2 und m = 5"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int p = scanner.nextInt();\nint m = scanner.nextInt();\n\nfor (int i = 1; i <= p; i++) {\n   for (int j = 1; j <= m; j++) {\n      System.out.print(j + \" \");\n   }\n\n   System.out.println(\"\");\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>break</code> - Schleife"
            },
            {
                "type": "text",
                "content": "Manchmal möchte man eine Schleife verlassen, bevor alle Schleifendurchläufe abgearbeitet wurden. „break“ veranlasst das sofortige Verlassen der innersten Schleife, es sollte nur sparsam und gezielt eingesetzt werden, damit der Programmcode übersichtlich und verständlich bleibt."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int i, sum = 0;\n\nwhile (true) {\n   i = scanner.nextInt();\n   if (i == 0) {\n      break;\n   }\n   sum += i;\n   System.out.println(\"sum = \" + sum);\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>continue</code> - Schleife"
            },
            {
                "type": "text",
                "content": "Bricht die Ausführung der aktuellen Schleifeniteration ab und springt direkt zur nächsten Iteration <br/> → Die Schleifenbedingung wird dabei geprüft <br/> → Bei einer for – Schleife wird zuvor auch noch die Schritt – Anweisung ausgeführt"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int i, numOnes = 0;\n\nwhile (true) {\n   i = scanner.nextInt();\n   if (i == 0) {\n      break;\n   } else if (i != 1) {\n      continue;\n   }\n   numOnes++;\n   System.out.println(\"number of ones = \" + numOnes);\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "Zentrum für Mediales Lernen am Karlsruher Institut für Technologie (KIT) | Kontrollstrukturen, Ausdrücke, Programmieren von Schleifen, Unterschied for- und while-Schleifen - Vorlesungsaufzeichnung <a href='https://youtu.be/7afJG3_JSDo'>https://youtu.be/7afJG3_JSDo</a>"
                ]
            }
        ]
    },
    {
        "url": "/lf-6/entwickeln_und_bereitstellen_von_anwendungssystemen/datenstrukturen",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "elements": [
            {
                "type": "title",
                "content": "Referenzdatentypen"
            },
            {
                "type": "text",
                "content": "Java unterscheidet grundsätzlich zwei Arten von Datentypen mit der eine Variable deklariert werden kann: elementare Datentypen und Referenzdatentypen. Elementare oder auch primitive Datentypen sind int, double, char, usw. Über einen Variablennamen kann direkt auf die Speicherzelle, die den Wert eines elementaren Datentyps enthält, zugegriffen werden."
            },
            {
                "type": "text",
                "content": "Elementare Typen kommen so oder ähnlich in fast jeder Programmiersprache vor."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int a = 42;"
            },
            {
                "type": "text",
                "content": "Die Speicherzelle der Variable enthält den Wert eines elementaren Datentyps."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/adresse_und_speicherzelle"
            },
            {
                "type": "text",
                "content": "Eine Variable des Referentdatentyps enthält entweder eine Referenz auf ein Objekt oder eine Null-Referenz. Klassen, Interfaces (werden später behandelt) und Felder (Arrays) benutzen Referenzdatentypen. Das Schlüsselwort <code>new</code> reserviert Speicherplatz für das referenzierte Objekt und erzeugt dieses."
            },
            {
                "type": "text",
                "content": "Im folgenden Beispiel wird ein neues Array-Objekt für fünf Integer-Zahlen erzeugt und die Referenz darauf in der Referenzvariable a gespeichert."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a = new int[5];"
            },
            {
                "type": "text",
                "content": "Die Speicherzelle der Variable enthält eine Referenz auf ein Objekt (Adresse bzw. Verweis auf einen Speicherbereich, in dem das Objekt abgelegt ist)."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/adresse_und_speicherzelle_2"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die Null-Referenz"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a;"
            },
            {
                "type": "text",
                "content": "In Java gibt es drei spezielle Referenzen: <code>null</code>, <code>this</code> und <code>super</code>. Mit edem Literal <code>null</code> wird eine Referenz repräsentiert, die auf nichts verweist. Diese Referenz ist typenlos, d. h. sie kann jeder Referenzvariable, egal welchen Typs, zugewiesen werden. Da in Java Objekte erst zur Laufzeit erzeugt werden, erhalten uninitialisierte Referenzvariablen eine Null-Referenz (<code>null</code>). Die anderen zwei speziellen Referenzen werden später behandelt."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/null_referenz_grafische_notation"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a = null;\n// oder\nchar[] a = null;"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Datenstrukturen"
            },
            {
                "type": "text",
                "content": "Viele Probleme lassen sich mit den bisherigen \"Boardmitteln\" nur umständlich programmieren. Angenommen, Sie wollen ein Programm schreiben, das aus 100 Werten vom Typ <code>int</code> das Minimum ausgibt. Dazu müssten Sie 100 Variablen vom Typ <code>int</code> deklaieren (anlegen), initialisieren (einlesen) und selektieren (100 Vergleiche abfragen)."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int wert1 = 3, wert2 = 46, wert3 = 97, wert4 = 70, ..., wert100 = 54;\nint minimum\nminimum = wert1;\nif (minimum > wert2) minimum = wert2;\nif (minimum > wert3) minimum = wert3;\nif (minimum > wert4) minimum = wert4;\n// ...\nif (minimum > wert100) minimum = wert100;"
            },
            {
                "type": "text",
                "content": "Stellen Sie sich diesen Aufwand mit 1000 Zahlen vor. Es ist offensichtlich, dass das beschriebene Verfahren nicht besonders effizient ist."
            },
            {
                "type": "text",
                "content": "Ein oft einfacherer Weg, algorithmische Probleme zu lösen, ist die Verwendung von Datenstrukturen. Grundlegene Datenstrukturen für die vorrangig imperative Programmierung sidn Tupel (engl. \"record\"), Feld (engl. \"array\", \"vector\"), Verkettete Liste (engl. \"linked list\"), Stapelspeicher/Kellerspeicher (engl. \"stack\"), Warteschlange (engl. \"queue\"), Vorrangswarteschlange/Prioritätswarteschlange (engl. \"priority queue\"), Graph, Baum (engl. \"tree\"), Heap, Treap, Hashtabelle (engl. \"hash table\", \"dictionary\" oder \"map\")."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Datenstruktur <code>Array</code>"
            },
            {
                "type": "text",
                "content": "Ein Array ist ein ein- oder mehrdimensionales statisches Feld, das Datenwerte vom gleichen Datentyp im Speicher ablegt. Über einen Arraynamen und einen Index kann eindeutig auf die Speicherzelle zugegriffen werden, die den Datenwert enthält."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/array_grafik.png"
            },
            {
                "type": "text",
                "content": "In Java werden Arrays als Objekte behandelt. Die Deklaration ist, abgesehen von den rechteckigen Klammern, identisch der Deklaration von Variablen primitiven Datentyps. Mit dem Schlüsselwort <code>new</code> wird das Objekt (hier das Array) erzeugt. Es wird Speicherplatz entsprechend der Arraylänge reserviert. Die Datenwerte werden hintereinander im Speicher abgelegt, so dass auf einzelne Array-elemente schnell zugegriffen werden kann. Ein Array wird, anders als eine Variable, zur Laufzeit erzeugt, da zur Compilerzeit die Größe des Arrays nicht feststeht. Das Beispiel zeigt die Deklaration und Initialisierung eines eindimensionalen Integer-Arrays mit vier Elementen in Java"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/array_grafik_2.png"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a = new int[4];\na[0] = 6;\na[1] = 0;\na[2] = 9;\na[3] = 1;"
            },
            {
                "type": "text",
                "content": "oder kurz als Initialisierungsliste"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] feld;\nfeld = new int[] { 6, 0, 9, 1 };\n// oder\nint[] a = { 6, 0, 9, 1 };"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die Größe eines Arrays"
            },
            {
                "type": "text",
                "content": "Die Größe (Länge) eines Array-Objekts wird durch Anzahl der aufnehmbaren Elemente bestimmt und in der Objektvariable <code>length</code> gespeichert. Das Attribut ist frei zugänglich (<code>public</code>), schreibgeschützt (<code>final</code>) und vom Typ <code>int</code>, dessen Wert immer positiv oder 0 ist."
            },
            {
                "type": "text",
                "content": "Im Zusammenspiel mit Schleifen wird der Vorteil von Arrays gegenüber Variablen schnell sichtbar. Das Beispiel zeigt die Lösung des Minimum-Problems von oben mit Hilfe von Arrays."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] wert = { 6, 0, 9, 1, ..., 15 };\nint minimum = wert[0];\nfor (int i = 0; i < wert.length; i++) {\n   if (minimum > wert[i]) minimum = wert[i];\n}\n\nSystem.out.println('Das Minimum ist: ' + minimum);"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Mehrdimensionale Arrays"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/mehrdimensionale_arrays.png"
            },
            {
                "type": "text",
                "content": "Ein mehrdimensionales Array wird als geschachteltes Array (ein Array aus Arrays) gespeichert ..."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/mehrdimensionale_arrays_2.png"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[][] a = new int[2][3];\na[0][0] = 1;\na[0][1] = 2;\na[0][2] = 3;\na[1][0] = 4;\na[1][1] = 5;\na[1][2] = 6;\nSystem.out.println('' + a[0][0] + a[0][1] + a[0][2]);\nSystem.out.println('' + a[1][0] + a[1][1] + a[1][2]);\n\n// Ausgabe: 123 456"
            },
            {
                "type": "text",
                "content": " ... Dadurch ist es möglich, nicht-\"rechteckige\" Arrays zu erzeugen. Das folgende Beispiel deklariert und initialisiert ein zweidimensionales dreieckiges Array."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[][] a = { {0}, {1,2}, {3,4,5}, {6,7,8,9} };\nfor (int i = 0; i < a.length; ++i) {\n   for (int j = 0; j < a[i].length; ++j) {\n      System.out.println(a[i][j]);\n   }\n\n   System.out.println();\n}\n\n// Ausgabe: 0 12 345 6789"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aliasing"
            },
            {
                "type": "text",
                "content": "Eine Zuweisung mit einem Referenztyp erzeugt eine Referenzkopie auf das gleiche Objekt! Dieser Effekt wird als Aliasing (dts. \"Überlappung/Überlagerung\") bezeichnet. Es wird nur die Referenz kopiert, nicht der Wert!"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/aliasing_grafische_notation"
            },
            {
                "type": "text",
                "content": "Achtung: Vergleiche und Zuweisungen mit Referenzvariablen verhalten sich anders als mit Variablen! Vorsicht beim Kopieren und Vergleichen von Arrays!"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/aliasing_1"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a = { 1, 2, 3, 4 };\nint[] b = a;\na[0] = 999;\nSystem.out.println(b[0]);\n\n// Ausgabe: 999"
            },
            {
                "type": "text",
                "content": "Das Beispiel zeigt, dass nur die Referenz und nicht das Array übergeben worden ist. Der gespeicherte Wert 999 in <code>a[0]</code> ist der gleiche Wert wie in b[0], denn es handelt sich um ein und dasselbe Array. Ein ähnlicher Effekt ist auch beim Vergleich von zwei Arrays zu beobachten (siehe Beispiel unten)."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/aliasing_2"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a = { 1, 2, 3, 4 };\nint[] b = { 1, 2, 3, 4 };\nSystem.out.println(a === b);\n\n// Ausgabe: false"
            }
        ]
    },
    {
        "url": "/lf-6/entwickeln_und_bereitstellen_von_anwendungssystemen/statische_methoden",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Mit dem Konstrukt der statischen Methoden (Klassenmethoden) werden in Java Funktionen implementiert. In der prozeduralen Programmmierwelt entspricht dies der Unterprogrammtechnik."
            },
            {
                "type": "text",
                "content": "Die Mathematik beschreibt eine Funktion als Abbildung, die jedem Element des Definitionsbereichs (Menge X) genau ein Element des Wertebereichs (Menge Y) zuordnet. So bildet die Sinusfunktion 𝑓(x) = sin(x) die Werte -π, 0, π, 2π auf den Wert 0, den Wert -1/2π auf den Wert -1 und den Wert 1/2π auf den Wert 1 ab."
            },
            {
                "type": "text",
                "content": "Mit statischen Methoden lässt sich das Programmparadigma \"divide et impera\" (lateinisch für teile und hersche, engl. \"divide and conquer\") umsetzen. Komplexe Aufgaben werden in weniger komplexe Teilaufgaben zerlegt, womit sich das Debuggen, Warten und Wiederverwenden von Codes vereinfacht."
            },
            {
                "type": "text",
                "content": "Das Verhalten statischer Methoden ist den mathematischen Funktionen ähnlich. Ein oder mehrere Eingabewerte werden von der Methode zu einem Ergebnis verarbeitet, das bei Bedarf ausgegeben wird. Mit statischen Methoden können nicht nur mathematische Funktionen implementiert werden. Bereits verwendetete Beispiele sind die <code>main()</code>-Methode, mit der jedes Java-Programm gestartet wird, sowie die Methode zur Bildschirmausgabe <code>System.out.println()</code>."
            },
            {
                "type": "text",
                "content": "Der gesamte Code einer Datei wird als Modul bezeichnet. Da in Java jede Klasse in einer eigenständigen Datei steht und mit statischen Methoden auf andere Klassen (Dateien) zugegriffen werden kann, eignet sich dieses Konzept besonders gut, um Programme im Stil der modularen Programmierung zu erstellen."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Statische Methoden definieren"
            },
            {
                "type": "text",
                "content": "Der primäre Zweck von statischen Methoden ist die Implementierung von Funktionen. Liegen Methoden und Methodenaufruf in unterschiedlichen Klassen, wird die Methode mit <code>Klasse.Methode()</code> aufgerufen (Listing 4, Zeile 12: <code>AusgabeArray.ausgabe(a)</code>)."
            },
            {
                "type": "text",
                "content": "Der Klassenname muss immer groß geschrieben werden. So ist erkennbar, dass es sich um eine Klasse mit einer statischen Methode handelt und nicht um einen Objektnamen (dazu später mehr). Liegt die Methode in der gleichen Klasse wie der Methodenaufruf, kann der Klassenname weggelassen werden (Listing 4, Zeile 13: <code>tausch(a,1,2)</code>)."
            },
            {
                "type": "text",
                "content": "Namenskonvention: Bezeichner von Methoden (Name der Methode) beginnen immer mit einem Kleinbuchstaben, jedes weitere Wort mit einem Großbuchstaben (lowerCamelCase). Statische Methoden bestehen mindestens aus dem Modifizierer <code>static</code>, einem Rückgabetyp, einer Signatur gefolgt vom Methodenrumpf, der durch geschweifte Klammern eingegrenzt wird."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/methoden_definition"
            },
            {
                "type": "text",
                "content": "Statische Methoden können auch mehrere Argumente übernehmen. Diese müssen nicht zwingend vom gleichen Typ sein. Der Methodenrumpf definiert, was die Methode tun soll."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Rückgabewerte"
            },
            {
                "type": "text",
                "content": "Soll eine Methode einen Wert an den Methodenaufruf zurückliefern, muss im Methodenrumpf eine <code>return</code>-Anweisung mit dem zurückliefernden Wert (Listing 4, Zeile 39) und im Methodenkopf der Rückgabetyp dieses Wertes (Listing 4, Zeile 32) stehen. Soll die Methode keinen Wert an den Methodenaufruf zurückliefern, gibt es im Methodenrumpf keine <code>return</code>-Anweisung. Im Methodenkopf steht statt des Rückgabetyps das Schlüsselwort <code>void</code> (Listing 4, Zeile 26)."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Gültigkeitsbereich von Variablen - Scope"
            },
            {
                "type": "text",
                "content": "<strong>Klassenvariablen (global)</strong>: gelten innerhalb der gesamtem Klasse. Sie werden mit <code>static Typ Variable;</code> deklariert (zB <code>static int c = 50;</code> siehe Listing 4, Zeile 2)."
            },
            {
                "type": "text",
                "content": "<strong>Lokale Variablen</strong>: Variablen gelten nur innerhalb des Blocks, in dem sie deklariert worden sind. Dieser Block kann eine Methode aber auch eine Schleife sein (siehe zB Listing 4, Zeile 7 und Zeile 20)."
            },
            {
                "type": "text",
                "content": "Besitzen Klassenvariable und lokale Variable den gleichen Bezeichner, ist innerhalb der Methode nur die lokale Variable sichtbar und zugreifbar (Listing 4, Zeile 2, 7 und 20)."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Methoden mit Parameter"
            },
            {
                "type": "text",
                "content": "Methoden können auf zwei Arten Parameter übergeben werden."
            },
            {
                "type": "text",
                "content": "<strong>call-by-value (Wertaufruf)</strong>: Ein Wert wird beim Methodenaufruf übergeben (zB bei primitiven Datentypen). Nimmt eine Methode Änderungen an den Argumenten vor, sind diese im methodenaufrufenden Programm nicht sichtbar. Bei Call-by-value-Methoden-aufrufen wird also eine Kopie vom Wert des Parameters und nicht der Wert selbst als Parameter übergeben."
            },
            {
                "type": "text",
                "content": "<strong>call-by-reference (Referenzaufruf)</strong>: Eine Referenz wird beim Methodenaufruf übergeben (zB bei der Übergabe von Arrays). Nimmt eine Methode Änderungen an den Argumenten vor, sind diese im methodenaufrufenden Programm sichtbar. Ein Rückgabewert ist oft nicht notwendig."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Modifizierer-Attribute"
            },
            {
                "type": "text",
                "content": "Java stellt verschiedene Modifizierer zur Verfügung. Der Zugriffsmodifizierer legt die Sichtbarkeit der Methode fest. Die folgenden Arten gibt es:"
            },
            {
                "type": "table",
                "content": "test",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Zeichen" },
                            { "align": "middle", "content": "Syntax" },
                            { "align": "middle", "content": "Bedeutung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "+" },
                            { "align": "left", "content": "<code>public</code>" },
                            { "align": "left", "content": "öffentliche Elemente (unbeschränkt sichtbar)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "#" },
                            { "align": "left", "content": "<code>protected</code>" },
                            { "align": "left", "content": "geschützte Elemente (nur in der eigenen Klasse sichtbar)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "~" },
                            { "align": "left", "content": "<code>package</code>" },
                            { "align": "left", "content": "geschützte Elemente innerhalb des Pakets" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Da es zu diesem Zeitpunkt sinnvoll ist, alle Methoden sichtbar zu machen, d. h. allen anderen Programmen zur Verfügung zu stellen, sollten statische Methoden mit dem Modifizierer <code>public</code> deklariert werden."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Überladen von Methoden"
            },
            {
                "type": "text",
                "content": "Statische Methoden werden nicht am Namen sondern anhand ihrer Signatur identifiziert. Dadurch ist es möglich, für verschiedene Methoden, die genügend Gemeinsamkeiten aufweisen, den gleichen Namen zu vergeben. Dies ist zum Beispiel sinnvoll, wenn Methoden die gleichen Operationen auf unterschiedliche Parameter durchführen (Listing 1 und 2). Statische Methoden mit gleichem Namen und unterschiedlichen Parametern werden als überladen (engl. \"overloading\") bezeichnet."
            },
            {
                "type": "code",
                "language": "java",
                "content": "// Listing 1: Unterschiedliche Argumenttypen\npublic static int max(int a, int b) { ... }\npublic static int max(double a, double b) { ... }\n\n// Listing 2: Unterschiedliche Anzahl an Argumentvariablen\npublic static String copyValueOf(char[] data) { ... }\npublic static String copyValueOf(char[] data, int offset, int count) { ... }"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Variable Argument-Anzahl"
            },
            {
                "type": "text",
                "content": "Die Methoden im Listing 1 sind auf zwei Argumente festgelegt. Folgen dem letzten Argumenttyp statt einer Argumentvariable drei Punkte (ohne Leerzeichen), so ist die Anzahl an Argumenten von diesem Argumenttyp beliebig. Um einen eindeutigen Methodenaufruf zu gewährleisten, muss das variable Argument (<code>varargs</code>, kurz für variable length argument lists) immer an letzter Stelle in der Parameterliste stehen."
            },
            {
                "type": "text",
                "content": "Das variable Argument wird intern als Array übergeben und in der Methode auch genauso angesprochen. Listing 3 zeigt die variable Argumentaufnahme mit mindestens zwei Argumenten für die Methode max(). Eine vollständige Methode wird im Listing 4, Zeile 20 gezeigt."
            },
            {
                "type": "code",
                "language": "java",
                "content": "// Listing 3: Methode mit variabler Argument-Anzahl\npublic static int max(int a, int... werte) { ... }\n\n// Listing 4: Methodenaufruf\npublic class JavaApplication1 {\n   static int c = 50; // eine völlig überflüssige globale Variable\n\n   public static void main(String[] args) {\n      int[] a = { 3, 2, 7, 5, 1, 4, 6 };\n      double[] b = { 3.3, 2.2, 7.7, 5.5, 1.1, 4.4, 6.6 };\n      int c = 42;\n\n      int summe = sume(c,1,c,2); // summe = 87\n      System.out.println('c ist immer noch ' + c + '.'); // c = 42\n      System.out.println('Die Summe ist aber ' + summe + ',';\n      AusgabeArray.ausgabe(a); // Methodenaufruf aus anderer Klasse\n      tausch(a, 1, 2); // Methodenaufruf\n      AusgabeArray.ausgabe(a);\n      System.out.println('Das höchstwertige Element im Array ist ' + max(a));\n      AusgabeArray.ausgabe(b);\n   }\n\n   public static int summe(int c, int... array) {\n      for (int i = 0; i < array.length; i++) {\n         c = c + array[i];\n      }\n      return c; // c = 87\n   }\n\n   public static void tausch(int[] a, int i, int j) {\n      int temp = a[i];\n      a[i] = a[j];\n      a[j] = temp;\n   }\n\n   public static int max(int[] a) {\n      int max = a[0];\n      for (int i = 1; i < a.length; i++) {\n         if (a[i] > max) {\n            max = a[i];\n         }\n      }\n      return max;\n   }\n}\n\n// Listing 5: Überladung der Methode ausgabe()\npublic class AusgabeArray {\n   public static void ausgabe(int array[]) {\n      for (int i = 0; i < array.length; i++) {\n         System.out.print(array[i] + ' ');\n      }\n      System.out.print(\"\\n\");\n   }\n\n   public static void ausgabe(double array[]) {\n      for (int i = 0; i < array.length; i++) {\n         System.out.print(array[i] + \" \");\n      }\n      System.out.print(\"\\n\");\n   }\n}"
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
                "language": "java",
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
                "language": "java",
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
                "language": "java",
                "content": "public class Main { \n    void main(String[] args) { \n        System.out.println(phi(11)); \n    } \n}"
            }
        ]
    },
    {
        "url": "/lf-6/entwickeln_und_bereitstellen_von_anwendungssystemen/aktienkurs_berechnung_php",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "elements": [
            {
                "type": "title",
                "content": "Lösungsansatz"
            },
            {
                "type": "text",
                "content": "Ermitteln Sie für den gegebenen Zeitraum Ankaufs- und Verkaufstage der Aktie, um den maximalen Gewinn zu erlösen."
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Tag" },
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
                            { "align": "middle", "content": "20" },
                            { "align": "middle", "content": "21" },
                            { "align": "middle", "content": "22" },
                            { "align": "middle", "content": "23" },
                            { "align": "middle", "content": "24" },
                            { "align": "middle", "content": "25" },
                            { "align": "middle", "content": "26" },
                            { "align": "middle", "content": "27" },
                            { "align": "middle", "content": "28" },
                            { "align": "middle", "content": "29" },
                            { "align": "middle", "content": "30" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Kurs" },
                            { "align": "middle", "content": "+4" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "-3" },
                            { "align": "middle", "content": "+4" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "+7" },
                            { "align": "middle", "content": "-2" },
                            { "align": "middle", "content": "-2" },
                            { "align": "middle", "content": "+3" },
                            { "align": "middle", "content": "+1" },
                            { "align": "middle", "content": "-8" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "+4" },
                            { "align": "middle", "content": "-5" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "+1" },
                            { "align": "middle", "content": "+3" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-3" },
                            { "align": "middle", "content": "+5" },
                            { "align": "middle", "content": "-7" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-3" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "+1" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 1"
            },
            {
                "type": "text",
                "content": "→ Entwickeln Sie einen Algorithmus, der das Problem <strong>iterativ</strong> löst. <br/> → Messen sie die Laufzeit des Algorithmus mit Hilfe der Methode <code>System.nanoTime()</code>."
            },
            {
                "type": "text",
                "content": "1. Erzeugen Sie alle Teilfolgen der obigen Folge. <br/> 2. Berechnen Sie zu jeder Teilfolge die Summe. <br/> 3. Geben Sie die größte Summe als Ergebnis aus."
            },
            {
                "type": "code",
                "language": "php",
                "content": "<?php\n\n$history = [4,2, -1, -3, 4, -1, 7, -2, -2, 3, 1, -8, 2, -1, 4, -5, 2, 1, 3, 2, -3, 5, -7, 2, -3, 2, -1, -1, 2, 1,];\n\nfunction getMaxDifference($differences) {\n   $max = 0;\n   $result = [];\n\n   for ($i = 0; $i < count($differences); $i++) {\n      if ($max < $differences[$i][$j] {\n\n         $max = $differences[$i][$j];\n         $result = [\n            'buy' => 'day ' . ($i + 1),\n            'sell' => 'day ' . ($j + 1)\n         ];\n      }\n   }\n   return $result;\n}\n\necho '<h1>Aufgabe 1</h1>';\n\n$differences = [];\n$startTime = microtime(true);\n\nfor($i = 0; $i <count($history); $i++) {\n   $current = 0;\n\n   for($j = $i; $j <count($history); $j++) {\n      $current += $history[$j];\n      $differences[$i][$j] = $current;\n   }\n}\n\necho (microtime(true) - $startTime) * 1000;\n\n/*\necho '<pre>';\nvar_dump($differences);\necho '</pre>';\n*/\n\necho '<pre>';\nvar_dump(getMaxDifference($differences));\necho '</pre>';\n\n?>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 2"
            },
            {
                "type": "text",
                "content": "→ Implementieren Sie zum obigen Problem einen <strong>rekurisven</strong> Algorithmus, der nach dem Prinzip Divide and Conquer (Teile und Herrsche) arbeitet. <br/> → Messen Sie auch hier wieder die Laufzeit beider Algorithmen und vergleichen Sie die Werte."
            },
            {
                "type": "code",
                "language": "php",
                "content": "<?php\n\n$history = [4,2, -1, -3, 4, -1, 7, -2, -2, 3, 1, -8, 2, -1, 4, -5, 2, 1, 3, 2, -3, 5, -7, 2, -3, 2, -1, -1, 2, 1,];\n\n// Funktion aus Aufgabe 1\nfunction getMaxDifference($differences) {\n   $max = 0;\n   $result = [];\n\n   for ($i = 0; $i < count($differences); $i++) {\n      if ($max < $differences[$i][$j] {\n\n         $max = $differences[$i][$j];\n         $result = [\n            'buy' => 'day ' . ($i + 1),\n            'sell' => 'day ' . ($j + 1)\n         ];\n      }\n   }\n   return $result;\n}\n\necho '<h1>Aufgabe 2</h1>';\n\n$differences = [];\n$startTime = microtime(true);\n\nfillDifferencesRecursive($history, $differences);\n\necho (microtime(true) - $startTime) * 1000;\n\n/*\necho '<pre>';\nvar_dump($differences);\necho '</pre>';\n*/\n\nfunction fillDifferencesRecursive($history, &$differences, $currentDifference = 0, $currentStart = 0, $currentEnd = 0) {\n\n   if ($currentStart>= count($history)) {\n      return;\n   }\n\n   if ($currentEnd>= count($history)) {\n      fillDifferencesRecursive($history, $differences, 0, $currentStart + 1, $currentStart + 1);\n      return;\n   }\n\n   $currentDifference += $history[$currentEnd];\n   $differences[$currentStart][$currentEnd] = $currentDifference;\n\n   fillDifferencesRecursive($history, $differences, $currentDifference, $currentStart, $currentEnd + 1);\n}\n\necho '<pre>';\nvar_dump(getMaxDifference($differences));\necho '</pre>';\n\n?>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 3"
            },
            {
                "type": "text",
                "content": "→ Schreiben Sie ein Programm, dass den maximalen Gewinnerlös (maximale Summe einer Teilfolge) effizienter löst. <br/> → Messen Sie die Laufzeit Ihres Algorithmus."
            },
            {
                "type": "code",
                "language": "php",
                "content": "<?php\n\n$history = [4,2, -1, -3, 4, -1, 7, -2, -2, 3, 1, -8, 2, -1, 4, -5, 2, 1, 3, 2, -3, 5, -7, 2, -3, 2, -1, -1, 2, 1,];\n\necho '<h1>Aufgabe 3</h1>';\n\n$startTime = microtime(true);\n$maximum = 0;\n$maxRight = 0;\n\nfor($i = 0; $i <count($history); $i++){\n\n   $tmpMaxRight = $maxRight + $history[$i];\n\n   if ($tmpMaxRight> 0) {\n      $maxRight = $tmpMaxRight;\n   }\n\n   if($maxRight> $maximum) {\n      $maximum = $maxRight;\n   }\n}\n\necho (microtime(true) - $startTime) * 1000;\n\necho '<br/>';\necho $maximum;\n\n?>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "<a href='https://bio.informatik.uni-jena.de/wp/wp-content/uploads/2019/11/MaxPartSums.pdf'>https://bio.informatik.uni-jena.de/wp/wp-content/uploads/2019/11/MaxPartSums.pdf</a>"
                ]
            }
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
