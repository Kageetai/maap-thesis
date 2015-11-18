# Technologien

## Der MEAN-Stack

Für die Entwicklung des Projektes war die Entscheidung für einen **Mean-Stack** offensichtlich. Diese Abkürzung steht für *MongoDB*, *Express.js*, *Angular.js*, *Node.js* als Kombination beliebter Open Source Software-Framworks, vergleichbar mit dem sogenannten LAMP- oder MAMP-Stacks.  
Die Entscheidung ist dennoch nicht leicht, da sich mit der Zeit hier einige Beispiele herauskristalisiert haben. Hier ein paar Beispiele:

- [Meteor](https://www.meteor.com)^[Meteor: https://www.meteor.com]
- [Mean.io](http://mean.io/#!/)
- [Mean.js](http://meanjs.org/)
- [Generator-Angular-Fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

All diese Lösungen implementieren das MEAN-Konzept unterschiedlich, weswegen sie im Folgenden beschrieben werden.

### Meteor
Die wohl bei weitem beliebteste Implementierung eines MEAN-Stacks (gemessen an den Bewertungen bei [Github](https://github.com/meteor/meteor)) ist Meteor von der Meteor Development Group aus San Francisco. Hierbei sind die Entwickler einen Schritt weiter gegangen als die oben genannten Technologien zu verbinden und ein daraus entstehendes Grundgerüst anzubieten. Alle diese wurden stattdessen unter dem `meteor` Kommandozeilentool verknüpft und können darüber angesprochen werden. Weiterhin bietet das Tool einige Hilfsmittel zur Erleichterung des Entwicklungs-Workflows, wie Skript-Komprimierung und Importierung andere Pakete aus dem hauseigenen [Paket-Verzeichnis](https://atmospherejs.com).  
Dieses eigene Tool und Pakete bietet zwar einerseits eine übergangslose Integration und Workflow, so dass viele sonst selbst zu konfigurierende Schritte und die anfängliche Initialisierung neuer Projekte davon übernommen werden können und somit Anfänge erleichtern.  
Andererseits wird so auch eine Abhängigkeit an weitere Software und Dienste geschaffen, welche auch nachteilig werden kann, wenn das Projekt größer wird und Skalierbarkeit ein Thema.  
Meteor legt ebenfalls bei ihrer Tools einen höhren Fokus auf Echtzeit-Mobil-Anwendungen mit eingebauter Integration von [Cordova von Apache](https://cordova.apache.org/) und Ausführbarkeit des gleiches Codes auf Client- und Server-Seite. Dadurch werden viele Entwicklungsprinzipen maskiert und vereinfacht, was aber auch zum Nachteil werden kann, da zum Beipsiel aus der Dokumentation nicht ersichtlich ist, wie man eine simple REST-API erstellt, um darüber dann weitere Anwendungen anzusprechen.  
Ein andere großer Punkt an Meteor, der zu bedenken ist, dass dieser Stack ohne Drittmittel keine REST-APIs zur Verfügung stellt.

### Mean.io
Mean.io verfolgt grundsätzlich einen ähnlichen Ansatz wie Meteor, geht dabei aber einen eher klassischen Weg derart, dass alle Komponenten des MEAN-Stacks noch einzelne ersichtlich sind und auch separat genutzt werden können.  
Hierbei kommt auch ein eigenes Kommandozeilen-Tool zu tragen, aber was lediglich einzelne Aufgaben übernimmt und nicht den kompletten Workflow des Projektes. So muss man beispielsweise noch Tools wie das sehr beliebte Automatisierungstool [Gulp](http://gulpjs.com/) und den Frontend-Package-Manager [Bower](http://bower.io) separat installieren und selbstständig nutzen, was eventuell für Anfänger einer größere Hürde darstellt, aber wege der Nutzung dieser verbreiteten Tools in der Branche früher oder später meist eh notwendig wäre und somit eine bessere Nutzung bestehender Frameworks und Integrationen möglich macht.  
Die Dokumentation ist umfangreich und bietet ausreichend Informationen um unterschiedliche Projekte zu beginnen und bei Problemen zu unterstützen.

### Mean.js
Zwar vom selben Entwickler wie das obige Mean.io, aber nach Unstimmigkeiten im Team von selbigen als neues eigenes Projekt gestartet, ist Mean.js noch verhältnismäßig jung, zeigt aber schon guten Fortschritt und Ideen.  
Von allen bisher genannten Projekten ist dies aber das einzige, dass sich bei erstmaliger Generierung gänzlich auf ein anderes, sehr verbreitetes Tool verlässt. Hier wird [Yeoman](http://yeoman.io/) als beliebter Generator für allerlei unterschiedlichste Projekte genutzt. Diesre erlaubt dann auch die benutzung von Sub-Generatoren, die bei der Erstellung weiterher Routen oder Endpunkte.  
Das Ganze Projekt ist noch nicht so ausgereift und hat eine wesentlich kleinere Community im Hintergrund, zeigt aber vielversprechende Ansätze und Herangehensweisen.

## Weitere Werkzeuge

### Yeoman
In den vorigen Absätzen schon erwähnt findet in der Open-Source-Gemeinde [Yeoman](http://yeoman.io/) sehr großen Anklang. Entwickelt von einem großen Team in Kombination mit den anderen im Folgenden genannten Tools, wird es genutzt, um damit Grundgerüste von allerlei Web-Projekte zu generieren.  
Dabei werden mittels von Dritten entwickelten Generatoren neue Projekte initialisiert und die ersten Code-Beispiele generiert.
