## Interface

Das Interface der Anwendung besteht aus einer Webanwendung für Browser für die gängigsten Geräte, wie Desktop, Tablet und Smartphone. Diese wurde wie schon vorher beschrieben basierend auf dem JavaScript-Framework Angular.js entwickelt und ermöglicht so eine unterbrechungsfreie Interaktion des Nutzers mit dem Server der Anwendung. Dadurch können die unterschiedlichen Ansichten der Anwendung direkt miteinander interagieren und Funktionen teilen.  
Im Folgenden sollen die einzelnen Unterseiten der Anwendung und deren Funktionen beschrieben werden. Die einzelnen Ansichten können in den Abbildungen in diesem Kapitel betrachtet werden.

### Startseite

![Startseite mit einem ausgewähltem Event in der Seitenleiste](images/home-page-sidebar.png)

Die Startseite der Anwendung stellt die wichtigsten Funktionen bereit. Aus diesem Grund wurde eine auf Google Maps basierende Kartenansicht der nähesten Events als primäre Ansicht der Anwendung gewählt. Diese zeigt dem Benutzer sofort, was sich in seiner näheren Umgebung befindet und gibt ihm die Möglichkeit, nach weiteren Events zu suchen, indem er die Karte bewegt oder zoomt.  
Zuerst wird dem Benutzer anhand der Ortungsdaten seines Gerätes die nähere Umgebung angezeigt und umliegende Events aufgelistet. Befinden sich an einem Ort mehrere Events, werden diese in sogenannten Clustern [@googlemapscluster] zusammengefasst, welche bei Klick rein zoomen.  
Bei Klick auf einen einzelnen Marker in der Karte kann der Benutzer erste Details zu den Events betrachten. Dafür schiebt sich von links eine Seitenleiste ins Bild, welche verschiedene Informationen über das gewählte Event darstellt. Dazu zählen beispielsweise die detaillierte Beschreibung des Events, ein Bild falls vorhanden und ein Link zu der Event-Detail-Seite.  
Ebenfalls auf der Karte in der rechten oberen Ecke befindet sich ein Suchfeld, mit dem Events gefiltert werden können. Dabei können die derzeit auf der Karte dargestellten Events nach Name oder anderen Eigenschaften gefiltert werden.  
In der oberen Navigation dieser und aller weiteren Seiten befinden sich Links zu weiteren Seiten, wie die Liste aller Events, das eigene Profil des Benutzers und eine generelle About-Seite.

### Event-Detail-Seite

![Event-Detai-Seite mit allen Informationen über das Event](images/event-detail.png)

Wenn der Benutzer auf den Link für mehr Details eines Events klickt, kommt er auf die Detail-Seite dieses spezifischen Events. Hier sieht er alle Infos über das Event, wie den Beschreibungstext, Bilder, Zeit, Ort, Anzahl der Teilnehmer und einen Link zur ursprünglichen Event-Seite auf Facebook oder ähnlichem.  
Außerdem befindet sich unterhalb dieser Informationen eine weitere kleine Karte mit dem Ort des Events. Diese zeigt lediglich die nähere Umgebung.  
Diese Ansicht wurde bewusst simpel gehalten, damit der Benutzer nicht von zu vielen Informationen überfordert wird und stattdessen die wichtigsten Informationen direkt klar werden.  
Für den ersten Prototypen sind keine weiteren Informationen auf der Detail-Seite notwendig. Jede einzelne Detail-Seite eines spezifischen Events ist einzeln mit einer einzigartigen URL ansprechbar und kann somit direkt weitergegeben werden und zum Beispiel auf anderen Netzwerken geteilt werden.

### Event-Liste

![Event-Liste mit allen Events](images/events.png)

Um eine Übersicht über alle Events und eine (im Prototyp erste simple) Suchfunktion nach Events zu bieten gibt es die Event-Liste. Diese bietet eine Liste aller Events mit der Möglichkeit nach Distanz oder Startzeit des Events zu sortieren und ein Suchfeld, mit dem die Events nach beliebigen Begriffen durchsucht werden können.  
Wird eine Auswahl zur Sortierung getroffen oder ein Suchbegriff in das dafür vorgesehene Feld eingegeben, aktualisiert sich die Liste der Events automatisch nach diesen Parametern.  
Erste Informationen über die Events, wie Name, Startzeit, Ort und Distanz zum Nutzer werden in der Liste bereits angezeigt und bei Klick auf den Event-Namen kann die Event-Detail-Seite erreicht werden.

### Profil-Seite

Für den Prototypen enthalten die Nutzerprofile lediglich minimale Informationen und Funktionen zum Ändern der Profil-Daten, wie Name und Passwort, sofern sich der Benutzer nicht direkt über externe Dienste wie Facebook oder Twitter angemeldet hat.  
Weitere Funktionen sind für den Prototypen nicht vorgesehen.

### About-Seite

Eine letzte Seite mit generellen Informationen für die Anwendung, Verlinkungen zum Quellcode und Entwickler bildet die About-Seite. Nach einer kurzen Beschreibung des Projektes findet man hier ein Kontaktformular und das Impressum.
