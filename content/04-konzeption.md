# Konzeption

Basierend auf der vorher durchgeführten Recherche wurde mit der Konzeption der Anwendung begonnen. Eine Webanwendung, welche für alle gängigen Geräte zugänglich sein sollte, ist als Basis für jegliche folgenden Konzeption festgelegt worden. Webanwendungen bieten die größtmögliche Verbreitung und Zugänglichkeit, auch für mobile Nutzer, da sie einfach über jeden Browser und Größe des Bildschirms erreichbar sind.  
Moderne Browser bestehen aus zahlreichen Ebenen von Software, die dadurch komplexe Layouts schnell darstellen können [@browserbehindthescenes].  
Es wurden User Stories und Personas entwickelt, die weitere Konzeption unterstützen. Darauf aufbauend wurde ein Minimum Viable Product (MVP) definiert, welches klare Grenzen für den Prototyp in der späteren Entwicklung definiert.  
Außerdem sind erste Mockups für die einzelnen Seiten des Prototypen der Anwendung entstanden. Diese wurden vorerst für Desktop-Browser konzipiert, werden aber dank Responsive Design [@bootstrapgrid] einfach für mobile Geräte darstellbar sein.

## User Stories

> "Was kann ich heute unternehmen?"

Dies ist die allgemeinste User Story für die Anwendung.
Der durchschnittliche Benutzer soll mit der Anwendung ohne Einschränkung nach Unternehmungsmöglichkeiten suchen können.
Eine ganz allgemeine Suchmöglichkeit, welche nicht auf irgendwelchen anderen Daten über den Benutzer basiert, ermöglicht eine möglichst umfangreiche Informationsaufnahme.

> "Wo finde ich Poetry Slams in meiner Umgebung?" 

Wenn ein User nach einer spezifischen Art von Unternehmungen sucht, soll er die Möglichkeit haben, nach Kategorien gefiltert zu suchen und ähnliche Unternehmungen finden zu können.
Dabei werden ihm Dinge in seiner Umgebung gefiltert nach diesen Kategorien angezeigt und er kann sich ganz darauf konzentrieren, nach was für einer spezifischen Art Unternehmung er sucht.

> "Heute Abend haben wir Lust auf eine Electro Swing Party!"

Oftmals sind die Menschen sehr spontan auf der Suche nach möglichen Unternehmungen in der Umgebung, die einem in nächster Zeit zur Verfügung stehen. Dabei sucht der Nutzer beispielsweise nach einem spezifischen Genre von Party oder Veranstaltung und kann so schnell und unkompliziert finden, was er jetzt machen kann und dies gleich seinen Freunden mitteilen.

## Personas

Zur genaueren Spezifikation der Anforderungen der Anwendung, wurden zwei Personas definiert. Diese stellen zwei mögliche Benutzer der Anwendung dar, die selbige in unterschiedlicher Art und Weise nutzen.

**Jack**

Jack ist ein junger Student in Berlin, der schon etwas über die Regelstudienzeit hinaus, aber damit aber auch nicht unzufrieden ist. 
Er ist nicht unbedingt fokussiert darauf, das Studium zu beenden und gleich darauf in einem Job zu versinken, also lebt er sein derzeitiges Leben etwas vor sich hin.  
Sein Freundeskreis ist relativ groß und breit gefächert und so unternimmt er immer wieder mit anderen Leuten etwas und dann auch meist spontan und ohne vorher explizit Möglichkeiten rauszusuchen etc.  
Dabei besonders wichtig ist ihm Spontanität, da er meist am Anfang des Abends noch nicht weiß, wo es ihn hin verschlägt und worauf er und seine Freunde Lust bekommen.

**Carla**

Als junge Arbeitnehmerin mit vielen Engagements in sozialen Bereichen hat Carla immer einen vollen Terminkalender und wenig Zeit für Spontanität. Da sie abends, wenn sie nicht auf irgendeinem Event aushilft, direkt von anderen Terminen nach Hause kommt, setzt sie sich erstmal hin, liest die letzten Nachrichten ihres kleinen aber intensiven Freundeskreises und informiert sich, was es in der Stadt für Unternehmungsmöglichkeiten gibt.  
Für freie Abende hat sie sich meist schon vorher mit ihren Freunden fest verabredet und besprochen, was sie dann unternehmen wollen. Dementsprechend braucht die Gruppe schon vorher Infos über Möglichkeiten und Unternehmungen, da sie sich dabei oft erst besprechen, was dann letztendlich unternommen wird.

## Use Cases

Zwei Use Cases wurden aus den obigen User Stories und Personas definiert, die den grundlegenden Nutzen der Anwendung beschreiben.

> "Als junger unabhängiger Student in Berlin möchte ich kurzfristig nach möglich Unternehmungen in meiner Umgebung suchen können, weil wir dies meist unterwegs mit dem Handy überlegen."

> "Als junge Arbeitnehmerin mit vollen Terminplan möchte ich für mich und meine Freunde im Vornerein nach Möglichkeiten für den Abend suchen, weil wir uns dann dafür absprechen können wollen."

## Minimum Viable Product

Der nach der Konzeptions-Phase zu entwickelnde Prototyp soll im vornherein klar definiert werden, damit Umfang und Grenzen gesteckt werden können und die Ziele nicht aus den Augen verloren werden. Dies wird das Minimum Viable Product, welches einen funktionsfähigen Prototypen mit den minimal-notwendigsten Funktionen darstellt, sodass Tests nach weiteren erforderlichen Funktionen an ersten Nutzern gemacht und das weitere Vorgehen evaluiert werden kann.

Das MVP soll folgende Funktionen beinhalten:

- Webanwendung lauffähig auf gängiger Server-Architektur
- der Import von Unternehmungsmöglichkeiten und Events externer Quellen, anfangs Facebook-Events und Meetup
- Darstellung der Events auf einer Karten-Ansicht
- Filterung der Events nach Orten und Quellen
- Benutzer-Login mit Speichern von Events und (De-)Aktivieren von Quellen
- Teilen von Events auf gängigen Plattformen, wie Facebook, Twitter und LinkedIn

Durch Fixieren auf diese minimalen Anforderungen können sinnvolle Grenzen für das Projekt gesetzt werden, die einen Fokus auf die wesentlichen Bestandteile gewährleisten. Nach Entwicklung und Evaluierung dieses Prototypen kann über weitere Anforderungen und Fortführen der Entwicklung entschieden werden.
