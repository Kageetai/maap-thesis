## Interface

Das Interface der Anwendung besteht aus einer Webanwendung für Browser aller gängigen Geräte. Diese wurde wie schon vorher beschrieben basierend auf dem JavaScript-Framework Angular.js entwickelt und ermöglicht so eine unterbrechungsfreie Interaktion des Nutzers mit dem Server der Anwendung. Dadurch können die unterschiedlichen Ansichten der Anwendung direkt miteinander interagieren und Funktionalität teilen.  
Im Folgenden sollen die einzelnen Unterseiten der Anwendung und deren Funktionalität beschrieben werden.

<!--TODO Bilder aller Ansichten -->

### Startseite

Die Startseite der Anwendung ist die wichtigste, da sie den Benutzer in die Anwendung einführt und die wichtigsten Funktionen bereit stellt. Aus diesem Grund wurde eine Karten-Ansicht der nahestehen Events als primäre Ansicht der Anwendung ausgewählt. Dies zeigt dem Benutzer sofort was sich in seiner näheren Umgebung befindet und gibt ihm die Möglichkeit nach weiteren Events zu suchen, indem er die Karte bewegt oder zoomt.  
Zuerst wird dem Benutzer anhand der Ortungsdaten seines Gerätes die nähere Umgebung angezeigt und entsprechend welche Events sich in nächster Nähe befinden. Befinden sich an einem Ort mehrere Events werden diese in sogenannten Clustern zusammengefasst, welche bei Klick rein zoomen.  
Bei Klick auf einen einzelnen Marker in der Karte kann der Benutzer erste Details zu den Events betrachten. Dafür schiebt sich von links eine Seitenleiste ins Bild, welche verschiedene Informationen über das gewählte Event darstellt, wie eine Beschreibung und Freunde die ebenfalls teilnehmen.  
Ebenfalls auf der Karte in der rechten oberen Ecke befindet sich ein Suchfeld, mit dem Events gefiltert werden können. Dabei können die derzeit auf der Karte dargestellten Events nach Name oder anderen Eigenschaften gefiltert werden.  
In der oberen Navigation dieser und aller weiteren Seiten befinden sich Links zu weiteren Seiten, wie die erweiterte Suche, das eigene Profil des Benutzers und eine generelle About-Seite.

### Event-Detail-Seite

Wenn der Benutzer auf den Link für mehr Details eines Events klickt, kommt er auf die Detail-Seite eines spezifischen Events. Hier sieht er alle Infos über das Event, wie den Beschreibungstext, Zeit, Ort, Anzahl der Teilnehmer und einen Link zur ursprünglichen Event-Seite auf Facebook oder ähnlichem.  
Außerdem befindet sich unterhalb der anderen Informationen eine weitere kleine Karte mit dem Ort des Events. Diese zeigt lediglich die nähere Umgebung.  

Diese Ansicht soll bewusst simpel gehalten werden, damit der Benutzer nicht von zu vielen Informationen überfordert wird und stattdessen die wichtigsten Informationen direkt klar werden.  
Für den ersten Prototypen sind keine weiteren Informationen auf der Detail-Seite notwendig. Jede einzelne Detail-Seite eines spezifischen Events ist einzeln mit einer einzigartigen URL ansprechbar und kann somit direkt weitergegeben werden und zum Beispiel auf anderen Netzwerken geteilt werden.

### Profil-Seite

Für den Prototypen enthalten die Nutzer-Profile lediglich minimale Informationen und Funktionen zum Ändern der Profil-Daten, wie Name und Passwort, sofern sich der Benutzer nicht direkt über externe Dienste wie Facebook oder Twitter angemeldet hat.  
Weiter Funktionalität ist für den Prototypen nicht vorgesehen.

### About-Seite

Eine letzte Seite mit generellen Informationen für die Anwendung, Verlinkungen zum Quellcode und Entwickler bildet die About-Seite. Nach einer kurzen Beschreibung des Projektes findet man hier ein Kontaktformular und das Impressum.
