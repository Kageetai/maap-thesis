# Server

Auf der Server-Seite der Anwendung befinden sich die Datenbank mit den Datenmodellen, die REST-API zum Ansprechen der Datenbank und die Skripte zum Importieren der Events aus unterschiedlichen Quellen.  
Diese Skripte sollen flexibel erweiterbar sein, damit einfach neue Veranstaltungsquellen eingebunden werden können. Deswegen werden die einzelnen Import-Skripte von einem allgemeinen Importer nacheinander aufgerufen, welche diese vorher einfach aus dem Datei-System ausliest.  
Die einzelnen Importer müssen dabei jeweils selbstständig die externen Schnittstellen der Dienste wie Facebook oder Meetup.com anfragen, die Events verarbeiten und zum Speichern in der Datenbank vorbereiten. Ebenfalls muss vorher überprüft werden, ob die Orte der Events bereits in der Datenbank existieren und wenn nicht vorher erstellt werden.  
Der übergreifende Importer-Skript kann manuell serverseitig gestartet werden oder durch einen Benutzer initiiert werden, damit gleich dessen Informationen für die externen Dienste wie Facebook genutzt werden können. Dieser sieht beispielsweise so aus:

<!--TODO add importer code snippet -->

Für den Prototypen des Projektes Maap wurden im MVP zwei beispielhafte Importer vorgesehen: Facebook und Meetup.com  
Diese sollen hier kurz beschrieben werden.

## Facebook-Import

Um Facebook-Events wie in der Konzeption vorgesehen in die Anwendung zu importieren, musste die API von Facebook angesprochen werden. 