## Technologien

Der Großteil modernen Webanwendungen basiert heutzutage auf einigen gängigen Konzepten und Prinzipien. Dabei sind sicherlich die unterschiedlichsten Frameworks oder Software in Nutzung, welche aber zumeist auf den gleichen Konzepten beruhen, wie zum Beispiel bei [@stackshare] ersichtlich ist.  
Dabei werden in Kürze zwei wichtige Konzepte benennen und erläutert, da diese im Folgenden grundlegend sind.

### MVC-Architektur

![MVC-Architektur, Quelle: https://developer.chrome.com/apps/app_frameworks](https://developer.chrome.com/static/images/mvc.png)

Die sogenannte Model-View-Controller-Architektur stellt ein altes und bewährtes Konzept in der Software-Entwicklung dar, die sie schon 1987 das erste Mal beschrieben wurde, siehe [@mvchistory].  
Dabei werden Anwendungen in die drei Komponenten *Model*, *View* und *Controller* unterteilt. Diese sind für unterschiedliche Teile der Anwendung verantwortlich und kommunizieren miteinander. Das *Model* stellt die Datenstruktur der Anwendung dar und kommuniziert mit dem *Controller*, der diese Daten verarbeitet und jegliche Berechnungen oder ähnliches damit anstellt. Diese verarbeiteten Daten werden dann in die *View* übertragen, welche diese darstellt und für den Nutzer sichtbar macht.  
Wenn der Nutzer dann Eingaben in der Oberfläche der Anwendung tätig, überträgt die *View* diese zurück an den *Controller*, welche dadurch eventuell neue erzeugte Daten aufbereitet und zurück an das *Modell* sendet, wo sie dann wieder abgespeichert usw. werden.  
Eine einfache grundlegende Darstellung dieser drei Komponenten ist in Abbildung 4.1 zu sehen und weitere Details beschreibt [@googlemvc].

### RESTful-API

![Beispielhafte Methoden einer RESTful-API, Quelle: http://www.infoq.com/articles/rest-api-on-cqrs](http://cdn.infoq.com/statics_s2_20160203-0311u10/resource/articles/rest-api-on-cqrs/en/resources/fig3large.jpg)

Das Konzept der sogenannten RESTful Anwendungen existiert seit einer Weile und wird benutzt um die Zustände von Webanwendungen und wie mehrere miteinander kommunizieren können zu beschreiben. Dabei beschreibt das Konzept verschiedene Methoden zum Abfragen, Erstellen, Bearbeiten und Löschen von Dokumenten in der Anwendungen, welche über übliche HTTP^[Hypertext-Transer-Protocol]-Methoden ansprechbar sein sollen. Siehe Beispiele für solche Methoden auch in Abbildung 4.2. Dabei sollte das Format der Daten frei wählbar sein und die Methoden immer der gleichen Struktur folgen, sowie die einzelnen Datensätze direkt ansprechbar.  
Die Gesamtheit dieser Methoden wird dann meist als die API^[Application Programm Interface]-Schnittstelle der Anwendung bezeichnet.  
Dies beschreiben auch [@roythomasfielding2000] und [@Fielding:2000:PDM:337180.337228] ausführlich.

### Der MEAN-Stack

![Visuelle Darstellung der Komponenten des MEAN-Stacks und ihrer Verbindung, Quelle: http://advaitsolutions.in/services/web/mean-stack/](http://advaitsolutions.in/wp-content/uploads/2015/08/meanjs-1024x492.png)

Diese Abkürzung MEAN steht für *MongoDB*, *Express.js*, *Angular.js*, *Node.js* als Kombination weit verbreiter Open Source Software-Programme und ähnelt damit in der Umsetzung ähnliche Paketen, wie dem LAMP^[Linux-Apache-MySQL-PHP]-Stack oder [Ruby on Rails](http://rubyonrails.org/).  
Diese werden genutzt um eine solide Basis für Projekte zu bietet, da die einzelnen Komponenten gut miteinander arbeiten und verbreitet genutzt werden, insbesonders der MEAN-Stack als eher neue Variante einer solcher Software-Kombination, wie [@meanstack] beschreibt.  
Da das Projekt als Webanwendung konzipiert wurde, sollte eine moderne Grundlage genutzt werden und aufgrund seiner Kombination aus verbreiteter und erprobter Software wurde ein MEAN-Stack gewählt. Dieser bietet Vorteile aufgrund seiner direkten Verbindung der Komponenten und JavaScript als Entwicklungssprache. Alle Komponenten sind direkt miteinander verbunden, wie in Abbildung 4.3 zu sehen ist.   
Im MEAN-Stack werden also im Folgenden beschriebene Technologien benutzt:

#### MongoDB

Die Art der oft sogenannten Dokument-basierten NoSQL-Datenbanken, welche JSON-ähnliche Dokumente anstatt klassischer Tabellen-Strukturen verwenden, um so die Integration von Daten anderer Applikationen einfacher und schneller zu gestalten, wie die Entwickler von MongoDB es selbst beschreiben [@mongodbwiki].  
Dies erlaubt eine sehr flexible Strukturierung der Daten und übergangslose Übertragung, da die Daten im JSON-Format ausgegeben werden und so gleich mit beispielsweise Node.js verarbeitet werden können.

#### Node.js

Node.js ist eine Event-getriebene JavaScript-Umgebung, basierend auf der V8-Engine von Chrome, siehe [@nodejs].  
Dabei wird es vorwiegend serverseitig eingesetzt als schnelle Plattform für Server-Anwendungen, die viel Ein- und Ausgaben bearbeiten können sollen.  
Außerdem erfreut sich Node.js mittlerweile immer größerer Beliebtheit als Programmiersprache für zahlreiche Entwicklungswerkzeuge, wie als Basis für den MEAN-Stack und weitere Werkzeuge.

#### Express.js

Als Framework zur einfacheren Erstellung flexibler Webanwendungen ist [Express.js](http://expressjs.com/) mittlerweile die verbreitetste Bibliothek für Node.js. Die minimale Architektur fokussiert sich auf HTTP-Methoden zur Erstellungen von REST-Routen. Dabei werden die schnellen Ein- und Ausgabe-Methoden von Node.js genutzt, um hohe Performance zu ermöglichen.  
Inspiration bei der Konzeption war dabei das bekannte [Ruby on Rails-Framework](http://rubyonrails.org/) für die Skriptsprache Ruby, so dass viele Konzepte einigen Entwicklern grundlegend bekannt sein dürften.  
Hierbei werden zum Beispiel die gängigen Konzepte wie Model-View-Controller-Architektur (MVC) und RESTful-States genutzt, so dass jeder Stand der Anwendung per URL einzeln ansprechbar ist und die Datenbank einfach über eine übliche REST-API angesprochen wird.

#### Angular.js

Das letzte Glied des MEAN-Stack behandelt die Client-Seite der Anwendung. Das heißt die Ansicht der Anwendung, die der Nutzern im Browser sehen wird. Allgemein gesprochen ist Angular.js ein leichtes Frontend-JavaScript-Framework, welches andere Frameworks wie jQuery etc. ersetzen kann und damit umfangreiche Interaktivität für den Benutzer anbietet, wie [@angularjs] als Entwickler selbst beschreibt.  
Dabei kann der Entwickler Controller erstellen, die dann Daten und Methoden für Views bereit stellen, in welchen der Benutzer interagieren, Daten verändern und diese wieder an den Controller übertragen kann. In diesem Sinne ist Angular.js ein sogenanntes MVW^[Model-View-Whatever]-Framework, da es zwar ein klare Struktur für den Controller und die View bereit stellt, aber dem Entwickler die freie Wahl über die Form des Models lässt. MVW ist ein loser Term, um zu beschreiben, dass Entwickler benutzen können, was am besten für ihr Projekt geeignet ist, wie zum Beispiel von den Entwicklern von Angular.js selbst beschrieben [@angularjsmvw].

### Vorhandene Implementierungen des MEAN-Stack

Aufgrund der Basis dieser vier Software-Lösungen haben sich im Laufe der Zeit unterschiedliche Varianten des MEAN-Stack entwickelt, welche jede anderen Herangehensweisen und Vor- und Nachteile darstellen.  
Die folgenden vier Beispiele sind dabei (anhand von Bewertungen bei GitHub) die beliebtesten:

- [Meteor](https://www.meteor.com)
- [Mean.io](http://mean.io/#!/)
- [Mean.js](http://meanjs.org/)
- [Generator-Angular-Fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

All diese Lösungen implementieren das MEAN-Konzept unterschiedlich, weswegen sie im Folgenden beschrieben werden.

#### Meteor

Die wohl bei weitem beliebteste Implementierung eines MEAN-Stacks (gemessen an den Bewertungen bei [GitHub](https://github.com/meteor/meteor)) ist Meteor von der Meteor Development Group aus San Francisco. Hierbei sind die Entwickler einen Schritt weiter gegangen als die oben genannten Technologien zu verbinden und ein daraus entstehendes Grundgerüst anzubieten. Alle diese wurden stattdessen unter dem `meteor` Kommandozeilentool verknüpft und können darüber angesprochen werden. Weiterhin bietet das Tool einige Hilfsmittel zur Erleichterung des Entwicklungsworkflows, wie Skript-Komprimierung und Importierung andere Pakete aus dem hauseigenen [Paket-Verzeichnis](https://atmospherejs.com).  
Dieses eigene Tool und Pakete bietet zwar einerseits eine übergangslose Integration und Workflow, so dass viele sonst selbst zu konfigurierende Schritte und die anfängliche Initialisierung neuer Projekte davon übernommen werden können und somit Anfänge erleichtern.  
Andererseits wird so auch eine Abhängigkeit an weitere Software und Dienste geschaffen, welche auch nachteilig werden kann, wenn das Projekt größer wird und Skalierbarkeit ein Thema.  
Meteor legt ebenfalls bei ihrer Tools einen höheren Fokus auf Echtzeit-Mobil-Anwendungen mit eingebauter Integration von [Cordova von Apache](https://cordova.apache.org/) und Ausführbarkeit des gleiches Codes auf Client- und Server-Seite. Dadurch werden viele Entwicklungsprinzipien maskiert und vereinfacht, was aber auch zum Nachteil werden kann, da zum Beispiel aus der Dokumentation nicht ersichtlich ist, wie man eine simple REST-API erstellt, um darüber dann weitere Anwendungen anzusprechen.  
Ein andere großer Punkt an Meteor, der zu bedenken ist, dass dieser Stack ohne Drittmittel keine REST-APIs zur Verfügung stellt.

#### Mean.io

Mean.io verfolgt grundsätzlich einen ähnlichen Ansatz wie Meteor, geht dabei aber einen eher klassischen Weg derart, dass alle Komponenten des MEAN-Stacks noch einzelne ersichtlich sind und auch separat genutzt werden können.  
Hierbei kommt auch ein eigenes Kommandozeilen-Tool zu tragen, aber was lediglich einzelne Aufgaben übernimmt und nicht den kompletten Workflow des Projektes. So muss man beispielsweise noch Tools wie das sehr beliebte Automatisierungstool [Gulp](http://gulpjs.com/) und den Frontend-Package-Manager [Bower](http://bower.io) separat installieren und selbstständig nutzen, was eventuell für Anfänger einer größere Hürde darstellt, aber wegen der Nutzung dieser verbreiteten Tools in der Branche früher oder später meist notwendig wäre und somit eine bessere Nutzung bestehender Frameworks und Integrationen möglich macht.  
Die Dokumentation ist umfangreich und bietet ausreichend Informationen um unterschiedliche Projekte zu beginnen und bei Problemen zu unterstützen.

#### Mean.js

Zwar vom selben Entwickler wie das obige Mean.io, aber nach Unstimmigkeiten im Team von selbigen als neues eigenes Projekt gestartet, ist Mean.js noch verhältnismäßig jung, zeigt aber schon guten Fortschritt und Ideen.  
Von allen bisher genannten Projekten ist dies aber das einzige, dass sich bei erstmaliger Generierung gänzlich auf ein anderes, sehr verbreitetes Tool verlässt. Hier wird Yeoman (s.u.) als beliebter Generator für allerlei unterschiedlichste Projekte genutzt. Dieser erlaubt dann auch die Benutzung von Sub-Generatoren, die bei der Erstellung weiterer Routen oder Endpunkte.  
Das Ganze Projekt ist noch nicht so ausgereift und hat eine wesentlich kleinere Community im Hintergrund, zeigt aber vielversprechende Ansätze und Herangehensweisen.

#### Generator-Angular-Fullstack

Das letzte Beispiel ist ein gänzlich auf Yeoman-basierender (s.u.) [Generator](https://github.com/DaftMonk/generator-angular-fullstack), welcher ein komplettes grundlegendes Beispiel für eine MEAN-Anwendung erstellt und dabei einige Optionen zur Verfügung stellt und dabei ebenfalls einen Workflow per Grunt zur Verfügung stellt.  
Dieser Generator erfreut sich ebenfalls schon einer sehr großen Beliebtheit, aufgrund seiner Einfachheit und Vollständigkeit an Funktionen und Features. Zugutekommen diesem Generator weiterhin die Verständlichkeit und Benutzung einfacher Beispiele und Prinzipien. 

### Entscheidung für eine Implementierung

Um eine möglichst solide Grundlage dies Projektes zu gewährleisten, wurde für die Entscheidung der Basis des MEAN-Stacks viel Zeit investiert und die unterschiedlichen Implementierungen ausprobiert und experimentiert. Dabei wurden alle einmalig installiert bzw. initialisiert und ausgeführt, so dass erste Beispiele des Frontends und Backends begutachtet werden können.  
Schlussendlich wurde sich aus folgenden Gründen für die letzte Option, den Generator-Angular-Fullstack, entschieden:

- Simplizität der Beispiele und Unterstützung der Entwickler
- Unabhängigkeit von proprietären Werkzeugen bei anderen Implementierungen
- Nutzung bestehender in der Community verbreiteter Werkzeuge, wie Grunt und Bower (s.u.) 
- vorhergehende Erfahrung mit Yeoman und diesem spezifischen Generator bei anderen Projekten
- modulare Projekt-Struktur, Server- und Client-seitig
- Skalierbarkeit durch einfachen Import in Hosting-Anbieter wie Heroku, etc.

Auch wenn einzelne kleinere Punkte für die anderen Beispiele sprachen, fiel schlussendlich die Entscheidung auf den Generator-Angular-Fullstack und ein Großteil der anfänglichen Entwicklungsarbeit konnte damit erleichtert werden.

### Weitere Werkzeuge

Bei der Entwicklung moderner Webanwendungen werden heutzutage meist noch weitere Tools genutzt, um den Workflow zu erleichtern, wie beispielsweise Erstellen fertiger Builds und unterschiedliche Optimierungen des Codes.  
Dabei kann durch solche Werkzeuge eine merkliche Verbesserung des Quellcodes und dementsprechend des Projektes erzielt werden, wie [@yeomanperformanceoptimization] beschreibt.

#### NPM

Mittlerweile haben viele Entwickler für das schon erwähnte Node.js Software geschrieben und so existieren die zahlreiche Programme, die man für weitere Entwicklung nutzen kann. Dabei entstehen bei der Entwicklung neuer Software zumeist diverse Abhängigkeit an existierende Programme und zur Verwaltung und Lösung dieser Abhängigkeiten wird bei jeder Installation von Node.js der Paket-Manager NPM (Node Package Manager) mitinstalliert. Dieser verwaltet die Abhängigkeiten an bestehenden Pakete, ermöglicht die Verwaltung neuer Pakete auf der Plattform und lässt nach Paketen für die eigenen Software suchen. Mit mittlerweile beinahe einer Viertelmillion (siehe [@npm]) an Paketen und mehreren Milliarden Downloads pro Monat findet sich dort beinahe für jeden Anwendungsfall das passende Software-Werkzeug.  
Alle der folgenden Werkzeuge-Pakete wurden mit Node.js geschrieben und werden innerhalb von npm verwaltet.

#### Yeoman

In den vorigen Absätzen schon erwähnt findet in der Open-Source-Gemeinde [Yeoman](http://yeoman.io/) sehr großen Anklang. Entwickelt von einem großen Team in Kombination mit den anderen im Folgenden genannten Tools, wird es genutzt, um damit Grundgerüste von allerlei Web-Projekte zu generieren.  
Dabei werden mittels einer Vielzahl an [von Dritten entwickelten Generatoren](http://yeoman.io/generators/) neue Projekte initialisiert und die ersten Code-Beispiele generiert.

#### Bower

Bei [Bower](http://bower.io/) handelt es sich um einen Paket-Manager für Frontend-Bibliotheken und Pakete aller Art. Primär eingesetzt um bekannte Projekte, wie [jQuery](https://jquery.com/) und [Bootstrap](http://getbootstrap.com/) als Abhängigkeiten von Projekten zu definieren und dann direkt zu importieren und so Probleme durch unterschiedliche Versionen oder Updates von Bibliotheken etc. zu vermeiden.

#### Grunt/Gulp

Die beiden Werkzeuge [Grunt](http://gruntjs.com/) und [Gulp](http://gulpjs.com/) sind sich in ihrem Zweck sehr ähnlich. Beide wurden als sogenannte Automatisierungswerkzeuge und Build-Tools entwickelt. Diese dienen damit der automatischen Ausführung verschiedenster Aufgaben bei der Software-Entwicklung, wie der Generierung komprimierter Skripte, der Erstellung von fertigen Builds für den Kunden und vielen mehr.  
Mittlerweile besitzen beide Werkzeuge eine große Datenbank an Plugins für allerlei Nutzen, so dass beinahe jedes mögliche Problem damit gelöst werden kann.  
Aufgrund ihrer Ähnlichkeit besteht aktuell eine starke Debatte welches Werkzeug das bessere ist und es scheint sich ein Trend zu Gulp aufzuzeigen, wie [@gruntvsgulp] beschreibt.
