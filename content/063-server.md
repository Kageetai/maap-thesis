## Server

Auf der Server-Seite der Anwendung befinden sich die Datenbank mit den Datenmodellen, die REST-API zum Ansprechen der Datenbank und die Skripte zum Importieren der Events aus unterschiedlichen Quellen.  
Diese Skripte sollen flexibel erweiterbar sein, damit einfach neue Veranstaltungsquellen eingebunden werden können. Deswegen werden die einzelnen Import-Skripte von einem allgemeinen Importer nacheinander aufgerufen, welche diese vorher einfach aus dem Datei-System ausliest.  
Die einzelnen Importer müssen dabei jeweils selbstständig die externen Schnittstellen der Dienste wie Facebook oder Meetup anfragen, die Events verarbeiten und zum Speichern in der Datenbank vorbereiten. Ebenfalls muss vorher überprüft werden, ob die Orte der Events bereits in der Datenbank existieren und wenn nicht vorher erstellt werden.  
Der übergreifende Importer-Skript kann manuell serverseitig gestartet oder durch einen Benutzer initiiert werden, damit gleich dessen Informationen für die externen Dienste wie Facebook genutzt werden können. Es war so angedacht, dass der übergreifende Import-Skript täglich zu einer regelmäßigen Zeit laufen sollte, aber wegen Einschränkungen in den APIs, wie schon im vorigen Kapitel beschrieben, ist dies nicht möglich und der Import muss nun manuell von einem Benutzer angestoßen werden.  
Der Import-Skript sieht beispielsweise so aus:

TODO add importer code snippet

Für den Prototypen des Projektes Maap wurden im MVP zwei beispielhafte Importer vorgesehen: Facebook und Meetup. Diese sollen hier kurz beschrieben werden.

### Facebook-Import

Um Facebook-Events, wie in der Konzeption vorgesehen, in die Anwendung zu importieren, musste die API von Facebook angesprochen werden. Dabei stellt die Graph API leider nicht alle Methoden direkt bereit, solange kein Benutzer angemeldet ist.  
Erst wurde versucht dies zu umgehen, indem die in einer Facebook-Anwendungen erstellbaren Test-Nutzer genutzt werden sollte. Dies ist auch grundlegend möglich, es ist aber unbekannt, inwiefern Facebook solche Test-Nutzer bei veröffentlichen der Anwendung blockt.  
Deswegen muss der Facebook-Import erst nach Anmeldung eines Benutzers erfolgen. Dies erlaubt leider keine regelmäßigen Import der neusten Facebook Events, sondern lediglich immer wenn ein Nutzer eingeloggt ist.  
Wenn der Import von einem Benutzer initiiert wird, wird die Facebook-API abgefragt und die Antwort nach schon existierenden Events überprüft und für das Abspeichern in der Datenbank angepasst, wie im Folgenden zu erkennen.

TODO facebook script

### Meetup-Import

Grundlegend verhält sich der Import von Events von Meetup.com ähnlich wie der im vorigen Kapitel beschriebene Facebook-Import. Dabei ist dieser sogar etwas simpler, da die API von Meetup.com keine Authentifizierung durch einen Benutzer erfordert, um öffentliche Events abzufragen.  
Das ermöglicht einen regelmäßigen (beispielsweise täglichen) automatischen Import von Events, aber um eine Kontinuität der Anwendung zu gewährleisten, wurde sich für ein einheitliches Import-Verfahren basierend auf der primären Quellen für Events, dem Facebook-Import, entschieden. Dies bedeutet, dass auch der Import der Events von Meetup.com durch einen Benutzer angestoßen werden soll.  
Auch hier wird die Antwort der API erst auf schon existierende Events überprüft und dann die neuen angepasst und in der Datenbank gespeichert, wie im folgenden Code-Schnipsel dargestellt.

TODO meetup script
