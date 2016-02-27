# Technologien

Der Großteil modernen Webanwendungen basiert heutzutage auf einigen gängigen Konzepten und Prinzipien. Dabei dabei werden unterschiedlichste Frameworks und Software genutzt, welche aber zumeist auf den gleichen Konzepten beruhen [@stackshare].  
Im Folgenden werden zwei wichtige Konzepte benannt und erläutert, da diese grundlegend für die Implementierung jeglicher Webanwendungen sind.

## MVC-Architektur

![MVC-Architektur](images/mvc.png)

Die sogenannte Model-View-Controller-Architektur (MVC) stellt ein altes und bewährtes Konzept in der Software-Entwicklung dar, die schon 1987 das erste Mal beschrieben wurde [@mvchistory].  
Dabei werden Anwendungen in die drei Komponenten *Model*, *View* und *Controller* unterteilt. Diese sind für unterschiedliche Teile der Anwendung verantwortlich und kommunizieren miteinander. Das *Model* stellt die Datenstruktur der Anwendung dar und kommuniziert mit dem *Controller*, der diese Daten verarbeitet und jegliche Berechnungen oder ähnliches damit anstellt. Diese verarbeiteten Daten werden dann in die *View* übertragen, welche diese darstellt und für den Nutzer sichtbar macht.  
Wenn der Nutzer dann Eingaben in der Oberfläche der Anwendung tätig, überträgt die *View* diese zurück an den *Controller*, welche dadurch eventuell neue erzeugte Daten aufbereitet und zurück an das *Modell* sendet, wo sie dann wieder abgespeichert werden.  
Eine einfache grundlegende Darstellung dieser drei Komponenten ist in Abbildung 4.1 zu sehen [@googlemvc].

## RESTful-API

Methode URL             Result
------- --------------- -----------------------------------------
GET     /api/events     Gibt alle Events zurück
GET     /api/events/:id Gibt ein einzelnes Event zurück
POST    /api/events     Erstellt ein neues Event in der Datenbank
PUT     /api/events/:id Aktualisiert ein Event in der Datenbank
DELETE  /api/events/:id Löscht ein Event aus der Datenbank

Table:  Beispiel für eine REST-API nach [@restapi]

Das Konzept der sogenannten RESTful Anwendungen existiert seit einer Weile und wird benutzt, um die Zustände von Webanwendungen und deren Kommunikation zu beschreiben. Dabei definiert das Konzept verschiedene Methoden zum Abfragen, Erstellen, Bearbeiten und Löschen von Dokumenten in der Anwendung, welche über übliche HTTP^[Hypertext-Transfer-Protocol]-Methoden (GET, POST, PUT, DELETE) ansprechbar sein sollen. Beispiele für solche Methoden sind auch in Tabelle 4.1 zu sehen. Dabei sollte das Format der Antwort-Daten frei wählbar sein und die Methoden immer der gleichen Struktur folgen.  
\newpage{}

Die Gesamtheit dieser Methoden wird dann meist als die API-Schnittstelle der Anwendung bezeichnet, was auch in [@roythomasfielding2000] und [@Fielding:2000:PDM:337180.337228] ausführlich beschrieben wird.

## Der MEAN-Stack

Diese Abkürzung MEAN steht für die Kombination der weit verbreiten Open Source Software Programme *MongoDB*, *Express.js*, *Angular.js*, *Node.js* und ähnelt damit in der Umsetzung ähnlichen Paketen, wie dem LAMP^[Linux-Apache-MySQL-PHP]-Stack oder [Ruby on Rails](http://rubyonrails.org/).  
Diese werden genutzt, um eine solide Basis für Projekte zu bietet, da die einzelnen Komponenten gut miteinander arbeiten und verbreitet genutzt werden. Insbesonders der MEAN-Stack gilt als eher neue Variante einer solcher Software-Kombination [@meanstack].  
Da das in dieser Arbeit besprochene Projekt *Maap* als Webanwendung konzipiert ist, sollte eine moderne Grundlage genutzt werden. Aufgrund seiner Kombination aus verbreiteter und erprobter Software wurde ein MEAN-Stack gewählt. Dieser bietet Vorteile aufgrund seiner direkten Verbindung der Komponenten und JavaScript als Entwicklungssprache. Alle Komponenten sind direkt miteinander verbunden, wie in Abbildung 4.2 zu sehen ist.

![Visuelle Darstellung der Komponenten des MEAN-Stacks und ihrer Verbindung [@meanstack]](http://advaitsolutions.in/wp-content/uploads/2015/08/meanjs-1024x492.png)
\newpage{}

Im MEAN-Stack werden also die im Folgenden beschriebenen Technologien benutzt.

**MongoDB**

MongoDB gehört zu Art der sogenannten Dokument-basierten NoSQL-Datenbanken, welche JSON-ähnliche Dokumente anstatt klassischer Tabellen-Strukturen verwenden, um so die Integration von Daten anderer Applikationen einfacher und schneller zu gestalten [@mongodbwiki].  
Dies erlaubt eine sehr flexible Strukturierung der Daten und übergangslose Übertragung, da die Daten im JSON-Format ausgegeben werden und so gleich mit beispielsweise Node.js verarbeitet werden können.

**Node.js**

Node.js ist eine Event-getriebene JavaScript-Umgebung, basierend auf der V8-Engine von Chrome [@nodejs].  
Dabei wird es vorwiegend serverseitig eingesetzt als schnelle Plattform für Server-Anwendungen, die viel Ein- und Ausgaben bearbeiten können sollen.  
Außerdem erfreut sich Node.js mittlerweile immer größerer Beliebtheit als Programmiersprache für zahlreiche Entwicklungswerkzeuge, wie als Basis für den MEAN-Stack und weitere Werkzeuge.

**Express.js**

Als Framework zur einfacheren Erstellung flexibler Webanwendungen ist [Express.js](http://expressjs.com/) mittlerweile die verbreitetste Bibliothek für Node.js. Die minimale Architektur fokussiert sich auf HTTP-Methoden zur Erstellung von REST-Routen. Dabei werden die schnellen Ein- und Ausgabe-Methoden von Node.js genutzt, um hohe Performance zu ermöglichen.  
Inspiration bei der Konzeption war dabei das bekannte [Ruby on Rails-Framework](http://rubyonrails.org/) für die Skriptsprache Ruby, sodass viele Konzepte einigen Entwicklern grundlegend bekannt sein dürften.  
Hierbei werden zum Beispiel die gängigen Konzepte wie MVC und RESTful-States genutzt, so dass jeder Stand der Anwendung per URL einzeln ansprechbar ist und die Datenbank einfach über eine übliche REST-API angesprochen wird.

**Angular.js**

Das letzte Glied des MEAN-Stack behandelt die Client-Seite der Anwendung. Das heißt die Ansicht der Anwendung, die der Nutzer im Browser sehen wird. Allgemein gesprochen ist Angular.js ein leichtes Frontend-JavaScript-Framework, welches andere Frameworks wie jQuery etc. ersetzen kann und damit umfangreiche Interaktivität für den Benutzer anbietet [@angularjs].  
Dabei kann der Entwickler Controller erstellen, die dann Daten und Methoden für Views bereit stellen, in welchen der Benutzer interagieren, Daten verändern und diese wieder an den Controller übertragen kann. In diesem Sinne ist Angular.js ein sogenanntes MVW^[Model-View-Whatever]-Framework, da es zwar ein klare Struktur für den Controller und die View bereit stellt, aber dem Entwickler die freie Wahl über die Form des Models lässt. MVW ist ein loser Term, um zu beschreiben, dass Entwickler benutzen können, was am besten für ihr Projekt geeignet ist [@angularjsmvw].
