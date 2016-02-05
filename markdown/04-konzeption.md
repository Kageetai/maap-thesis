# Konzeption

Basierend auf der vorher angestellten Recherche usw. wurde im Folgenden damit begonnen User Stories und Personas zu entwickeln, die weitere Konzeption unterstützen. Darauf aufbauend wurde ein Minimum Viable Product (MVP) definiert, welches klare Grenzen für den Prototyp in der späteren Entwicklung definiert.  
Außerdem sind erste Mockups für die einzelnen Seiten des Prototypen der Anwendung entstanden.

## User Stories

> "Was kann ich heute unternehmen?"

Dies ist die allgemeinste User Story für die Anwendung.
Der durchschnittliche Benutzer soll mit der Anwendung ohne Einschränkung nach Unternehmungsmöglichkeiten suchen können.
Eine ganz allgemeine Such-Möglichkeit nicht basierend auf irgendwelchen anderen Daten über den Benutzer ermöglicht eine möglichst umfangreiche Informationsaufnahme.

> "Wo finde ich Poetry Slams in meiner Umgebung?" 

Wenn ein User nach einer spezifischen Art von Unternehmungen sucht, soll er die Möglichkeit haben nach Kategorien gefiltert zu suchen und ähnliche Unternehmungen finden können.
Dabei werden ihm Dinge in seiner Umgebung gefiltert nach Kategorien gezeigt und er kann sich ganz darauf konzentrieren nach was für einer spezifischen Art Unternehmung er sucht.

> "Heute Abend haben wir Lust auf eine Electro Swing Party!"

Oftmals ist man sehr spontan auf der Suche nach möglichen Unternehmungen in der Umgebung, die einem in nächster Zeit zur Verfügung stehen. Dabei sucht der Nutzer beispielsweise nach einem spezifischen Genre von Party oder Veranstaltung und kann so schnell und unkompliziert finden, was er jetzt machen kann und dies gleich seinen Freunden mitteilen.

## Personas

Zur genaueren Spezifikationen der Anforderungen und Spezifikationen der Anwendung, wurden zwei Personas definiert. Diese stellen zwei mögliche Benutzer der Anwendung dar, die selbige in unterschiedlicher Art und Weise definieren.

### Jack

Jack ist ein junger Student in Berlin, der schob etwas über die Regelstudienzeit hinaus, aber damit aber auch nicht unzufrieden ist. 
Er ist nicht unbedingt fokussiert darauf, das Studium zu beenden und gleich darauf in einem Job zu versinken, also lebt er sein derzeitiges Leben etwas vor sich hin.  
Sein Freundeskreis ist wie in Berlin üblich relativ groß und breit gefächert und so unternimmt immer wieder mit anderen Leuten etwas und dann auch meist spontan und ohne vorher explizit Möglichkeiten rauszusuchen etc.  
Dabei besonders wichtig ist ihm Spontanität, da er meist am Anfang des Abends noch nicht weiß, wo es ihn hin verschlägt und worauf er und seine Freunde Lust bekommen.

### Carla

Als junge Arbeitnehmerin mit vielen Engagements in sozialen Bereichen hat Carla immer einen vollen Termin-Kalender und wenig Zeit für Spontanität. Da sie abends, wenn sie nicht eh auf irgendeinem Event aushilft, direkt von anderen Terminen nach Hause kommt, setzt sie sich erstmal hin, liest die letzten Nachrichten ihres kleinen aber intensiven Freundeskreises und checkt, was in der Stadt so los ist.  
Für freie Abende hat sie sich meist schon vorher mit ihren Freunden fest verabredet und besprochen, was sie dann unternehmen wollen. Dementsprechend braucht die Gruppe schon vorher Infos über Möglichkeiten und Unternehmungen, da sie sich dabei oft erst besprechen, was dann unternommen wird.

## Use Cases

Zwei Use Cases wurden aus den obigen User Stories und Personas definiert, die den grundlegenden Nutzen der Anwendung beschreiben.

> "Als junger unabhängiger Student in Berlin möchte ich kurzfristig nach möglich Unternehmungen in meiner Umgebung suchen können, weil wir dies meist unterwegs mit dem Handy überlegen."

> "Als junge Arbeitnehmerin mit vollen Terminplan möchte ich für mich und meine Freunde im Vornerein nach Möglichkeiten für den Abend suchen, weil wir uns dann dafür absprechen können wollen."

## Minimum Viable Product

Der nach der Konzeptions-Phase zu entwickelnde Prototyp soll im vornherein klar definiert werden, damit Umfang und Grenzen gesteckt werden können und die Ziele nicht aus den Augen verloren werden. Dies wird das Minimum Viable Product, welches einen funktionsfähigen Prototypen mit den minimal-notwendigsten Funktionen darstellt, so dass Tests nach weiteren erforderlichen Funktionen an ersten Nutzern gemacht und weiteres Vorgehen evaluiert werden können.

Das MVP soll folgende Funktionen beinhalten:
- der Import von Unternehmungsmöglichkeiten und Events externer Quellen, anfangs Facebook-Events und Meetup.com
- Darstellung der Events auf einer Karten-Ansicht
- Filterung der Events nach Kategorien und Quellen
- Benutzer-Login mit Speichern von Events und (De-)Aktivieren von Quellen
- Teilen von Events auf gängigen Plattformen, wie Facebook, Twitter und LinkedIn
- Erkennen von Kategorien nach Stichwörtern

Durch Fixieren auf diese minimalen Anforderungen können sinnvolle Grenzen für das Projekt gesetzt werden, die einen Fokus auf die wesentlichen Bestandteile gewährleisten. Nach Entwicklung und Evaluierung dieses Prototypen kann über weitere Anforderungen und Fortführen der Entwicklung entschieden werden.

## Prototypen-Mockups

Nach Erstellung des obigen Konzeptes sind erst visuelle Darstellungen der Konzepte wichtig für die Entwicklung. Deswegen wurde sogenannte Mockups erstellt, die eine erste mögliche Ansicht der Anwendung zeigen. Verschiedene Seiten der Anwendung sind dabei sichtbar.

### Startseite

Die Startseite einer Anwendung ist die wichtigste, da sie den Benutzer in die Anwendung einführt und die wichtigsten Funktionen bereit stellt. Aus diesem Grund wurde eine Karten-Ansicht der nahestehen Events als primäre Ansicht der Anwendung ausgewählt. Dies zeigt dem Benutzer sofort was sich in seiner näheren Umgebung befindet und gibt ihm die Möglichkeit nach weiteren Events zu suchen. Bei Klick auf einen Marker in der Karte kann der Benutzer erste Details zu den Events betrachten. Dafür schiebt sich von links eine Seitenleiste ins Bild, welche verschiedene Informationen über das gewählte Event darstellt, wie eine Beschreibung und Freunde die ebenfalls teilnehmen.    
In der oberen Navigation dieser und aller weiteren Seiten befinden sich Links zu weiteren Seiten, wie die erweiterte Suche, das eigene Profil des Benutzers und eine generelle About-Seite.

### Event-Detail-Seite

Wenn der Benutzer auf den Link für mehr Details eines Events klickt, kommt er auf die Detail-Seite eines spezifischen Events. Hier sieht er alle Infos über das Event, wie den Beschreibungstext, Zeit, Ort, Anzahl der Teilnehmer und einen Link zur ursprünglichen Event-Seite auf Facebook oder ähnlichem.  
Diese Ansicht soll bewusst simpel gehalten werden, damit der Benutzer nicht von zu vielen Informationen überfordert wird und stattdessen die wichtigsten Informationen direkt klar werden.  
Für den ersten Prototypen sind keine weiteren Informationen auf der Detail-Seite notwendig.  
Oberhalb des Inhalts der Seite befindet sich wieder die selbe Navigationsleiste, wie schon auf der Startseite.

### Profil-Seite

Für den Prototypen enthalten die Nutzer-Profile lediglich minimale Informationen und Funktionen zum Ändern der Profil-Daten, wie Name und Passwort, sofern sich der Benutzer nicht direkt über externe Dienste wie Facebook oder Twitter angemeldet hat.  

### About-Seite

Eine letzte Seite mit generellen Informationen für die Anwendung, Verlinkungen zum Quellcode und Entwickler bildet die About-Seite. Nach einer kurzen Beschreibung des Projektes findet man hier ein Kontaktformular und das Impressum.
