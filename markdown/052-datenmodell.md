## Datenmodell

Nach Auswahl und erster Initialisierung der technologischen Grundlagen für das Projekt, ist die Definition der Datenmodelle wichtig, da so genaue Strukturen für die Daten der Anwendung definiert werden. Dank der NoSQL-Struktur von MongoDB [-@mongodbwiki] ist eine flexible und sogar verschachtelte Datenstruktur in den Modellen möglich. Da alle Dokumente in MongoDB lediglich im JavaScript Object Notation-Format ([@json]) vorliegen, ist das Einfügen und Bearbeiten bestehender Daten aus anderen Diensten oder Datenbanken, die ihre Daten oftmals ebenfalls im JSON-Format exportieren, sehr simpel.  
Dank dieser freien Gestaltung können die Modelle detailliert definiert werden. Alle werden dank MongoDB automatisch indiziert und sind so direkt suchbar usw.

### Event-Modell

Als Schwerpunkt im Datenmodell liegen die Events, da diese der Fokus der Anwendung sind. Entsprechend ist das Event-Modell das primäre in der Datenbank und wurde zuerst definiert. Dabei wurde schnell festgestellt, dass weitere Modelle nötig sind, da zum Beispiel die Orte und Kategorien der Events einzeln suchbar sein müssen, wie schon während der Konzeption festgelegt. Dementsprechend wurden dafür weitere Modelle angelegt und diese im Event-Modell referenziert. Das fertige Event-Modell sieht wie folgt aus (Typ des Feldes in Klammer):

- Name (String, erforderlich)
- Beschreibung (String)
- URL (String, erforderlich)
- Start-Datum/Zeit (Date, erforderlich)
- End-Datum/Zeit (Date)
- externe ID (String, erforderlich)
- Bilder (Array von Strings)
- Location (Objekt-ID, erforderlich)
- Kateogrie (Objekt-ID, erforderlich)
- Erstellungszeit (Date, erforderlich)
- Aktualisierungszeit (Date)
- Ersteller (Objekt-ID, erforderlich)
- aktiv (Boolean)

### Location-Modell

Das Location-Modell, dass wie schon erwähnt im Event-Modell referenziert wird, stellt eine einzelne Location dar, in der Events stattfinden. Diese wird indiziert und es kann nach einzelnen Locations gesucht werden.  
Da diese Locations sich aber aus den Daten der importierten Events ergeben sollen, sind diese Daten oft sehr unterschiedlich und es ist schwer zu definieren wie genau eine solche Location aufgebaut ist. Beispielsweise sind die Adresse unterschiedlich strukturiert und unterschiedliche Namen können der gleichen Adresse zugeordnet werden.  
Google bietet mit seiner Places API eine große Datenbank mit über 100 Millionen Orten, siehe dazu [@googleplaces]. Diese Daten können von Entwicklern genutzt werden für eine Anwendungen, indem Adressen abgefragt oder Koordinaten in Adressen übersetzt werden können.  
Diese Datenbank wurde auch für die Übersetzung der importierten Daten der Locations genutzt. Die Geocoding-Funktion der Google Places API kann genutzt werden, Adresse in Koordinaten umzuwandeln und umgekehrt. So kann ein möglichst einheitliches Adress-Format und möglichst genaue Koordinaten sichergestellt werden.  
Falls ein neues Event erstellt wird, zu dessen Location es noch keinen Eintrag in der Datenbank gibt, wird dieser erstellt und referenziert. Falls es diese Location schon gibt, wird sie direkt im Event referenziert.  
Darauf aufbauend wurde das folgenden Datenmodell für die Locations erstellt (Typ des Feldes in Klammer):

- Name (String, erforderlich)
- Info (String)
- URL (String)
- Adresse:
    - Land (String)
    - Stadt (String)
    - Straße (String)
    - Postleitzahl (String)
- Koordinaten:
    - Latitude (Nummer, erforderlich)
    - Longitude (Nummer, erforderlich)
- externe ID (String, erforderlich)
- Anbieter (String, erforderlich)
- Bilder (Array von Strings)
- Erstellungszeit (Date, erforderlich)
- Aktualisierungszeit (Date)
- Ersteller (Objekt-ID, erforderlich)
- aktiv (Boolean)

### Kategorien-Modell

Ebenfalls in den Events direkt referenziert sind die Kategorien der Events. Diese sollen aber fest vorher definiert sein und lediglich direkt den Events zugeordnet werden. Dafür muss vorher beim Importieren entschieden werden, welchen Kategorien das Event zugeordnet werden soll und dann werden lediglich die bestehenden Kategorien im Event referenziert.  
Daraus resultierend ergibt sich ein recht simples Datenmodell für die Kategorien (Typ des Feldes in Klammer):

- Name (String, erforderlich)
- Info (String)
- Erstellungszeit (Date, erforderlich)
- Aktualisierungszeit (Date)
- Ersteller (Objekt-ID, erforderlich)
- aktiv (Boolean)

