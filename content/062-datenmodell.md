## Datenmodell

Nach Auswahl und erster Initialisierung der technologischen Grundlagen für das Projekt, ist die Definition der Datenmodelle wichtig, da so genaue Strukturen für die Daten der Anwendung definiert werden. Dank der NoSQL-Struktur von MongoDB [@mongodbwiki] ist eine flexible und sogar verschachtelte Datenstruktur in den Modellen möglich. Da alle Dokumente in MongoDB lediglich im JavaScript Object Notation-Format (JSON) [@json] vorliegen, ist das Einfügen und Bearbeiten bestehender Daten aus anderen Diensten oder Datenbanken, die ihre Daten oftmals ebenfalls im JSON-Format exportieren, sehr simpel.  
Dank dieser freien Gestaltung können die Modelle detailliert definiert werden. Alle Einträge werden dank MongoDB automatisch indiziert und sind so direkt suchbar.

In diesen Kapitel werden die im Prototypen verwendeten Datenmodelle für die Datenbank der Anwendung beschrieben. Diese zeigen die Struktur und Verbindung der einzelnen Daten.

### Event-Modell

Als Schwerpunkt im Datenmodell liegen die Events, da diese der Fokus der Anwendung *Maap* sind. Entsprechend ist das Event-Modell das primäre in der Datenbank und wurde zuerst definiert. Dabei wurde schnell festgestellt, dass weitere Modelle nötig sind, da zum Beispiel die Orte und Kategorien der Events einzeln suchbar sein müssen, wie schon während der Konzeption festgelegt. Dementsprechend wurden dafür weitere Modelle angelegt und diese im Event-Modell referenziert. Das fertige Event-Modell ist in Abbildung 5.1 zu sehen.

### Location-Modell

Das Location-Modell, dass wie schon erwähnt im Event-Modell referenziert wird, stellt eine einzelne Location dar, in der Events stattfinden. Diese wird indiziert und es kann nach einzelnen Locations gesucht werden.  
Da diese Locations sich aber aus den Daten der importierten Events ergeben sollen, sind diese Daten oft sehr unterschiedlich und es ist schwer zu definieren wie genau eine solche Location aufgebaut ist. Beispielsweise sind die Adresse unterschiedlich strukturiert und unterschiedliche Namen können der gleichen Adresse zugeordnet werden.  
Google bietet mit seiner Places API eine große Datenbank mit über 100 Millionen Orten [@googleplaces]. Diese Daten können von Entwicklern für Anwendungen genutzt werden, indem Adressen abgefragt oder Koordinaten in Adressen übersetzt werden können und umgekehrt.  
Diese Datenbank wurde auch für die Übersetzung der importierten Daten der Locations genutzt. So kann ein möglichst einheitliches Adressformat und möglichst genaue Koordinaten sichergestellt werden.  
Falls ein neues Event erstellt wird, zu dessen Location es noch keinen Eintrag in der Datenbank gibt, wird dieser erstellt und referenziert. Falls es diese Location schon gibt, wird sie direkt im Event referenziert.  
Darauf aufbauend wurde das folgenden Datenmodell für die Locations wie in Abbildung 5.1 erstellt.

### Kategorien-Modell

Ebenfalls in den Events direkt referenziert sind die Kategorien der Events. Diese sollen aber fest vorher definiert sein und lediglich direkt den Events zugeordnet werden. Dafür muss vorher beim Importieren entschieden werden, welchen Kategorien das Event zugeordnet werden soll und dann werden lediglich die bestehenden Kategorien im Event referenziert.  
Diese Zuordnung der Events zu Kategorien muss anhand der in den Events vorhandenen Informationen wie Beschreibung etc. erfolgen und erfordert ein eigenen Vorgehen dafür.  
Daraus resultierend ergibt sich ein recht simples Datenmodell für die Kategorien, ebenfalls in Abbildung 5.1 erkennbar.

![Datenbank-Modell](images/database.png)
