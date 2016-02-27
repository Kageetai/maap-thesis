## Server

Auf der Server-Seite der Anwendung befinden sich die Datenbank mit den Datenmodellen, die REST-API zum Ansprechen der Datenbank und die Skripte zum Importieren der Events aus unterschiedlichen Quellen.  
Diese Skripte sollen flexibel erweiterbar sein, damit einfach neue Veranstaltungsquellen eingebunden werden können. Deswegen werden die einzelnen Import-Skripte von einem allgemeinen Importer nacheinander aufgerufen, welche diese vorher einfach aus dem Datei-System ausliest.  
Die einzelnen Importer müssen dabei jeweils selbstständig die externen Schnittstellen der Dienste wie Facebook oder Meetup anfragen, die Events verarbeiten und zum Speichern in der Datenbank vorbereiten. Ebenfalls muss vorher überprüft werden, ob die Orte der Events bereits in der Datenbank existieren und wenn nicht vorher erstellt werden.  
Der übergreifende Importer-Skript kann manuell serverseitig gestartet oder durch einen Benutzer initiiert werden, damit gleich dessen Informationen für die externen Dienste wie Facebook genutzt werden können. Es war so angedacht, dass der übergreifende Import-Skript täglich zu einer regelmäßigen Zeit laufen sollte, aber wegen Einschränkungen in den APIs, wie schon im vorigen Kapitel beschrieben, ist dies nicht möglich und der Import muss nun manuell von einem Benutzer angestoßen werden.  
Der übergreifende Import-Skript nutzt Promises von ES2015 [@babelpromises], um die einzelne Importe unabhängikeit voneinander laufen zu lassen:

```javascript
function runImports() {
  var promises = importers.filter((imp) => {
    if (!imp.active) {
      console.log(imp.name + ' Importer inactive');
      return false;
    }
    return true;
  }).map((imp) => {
    console.log(imp.name + ' Importer running');

    var importer = new require(imp.module);
    return importer.init(admin._id, Event, Location, imp.options)
      .then(importer.run)
      .then((events) => {
        return Event.createAsync(events)
          .then((events) => {
            console.log(imp.name + ' Events created: ' + events.length);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  });

  Promise.all(promises).then(() => {
    mongoose.disconnect();
    console.log('Importers finished');
    process.exit();
  })
}
```

Für den Prototypen des Projektes Maap wurden im MVP zwei beispielhafte Importer vorgesehen: Facebook und Meetup. Diese sollen hier kurz beschrieben werden.

### Facebook-Import

Um Facebook-Events, wie in der Konzeption vorgesehen, in die Anwendung zu importieren, musste die API von Facebook angesprochen werden. Dabei stellt die Graph API leider nicht alle Methoden direkt bereit, solange kein Benutzer angemeldet ist.  
Es wurde versucht dies zu umgehen, indem die in einer Facebook-Anwendungen erstellbaren Test-Nutzer genutzt werden sollte. Dies ist auch grundlegend möglich, es ist aber unbekannt, inwiefern Facebook solche Test-Nutzer bei veröffentlichen der Anwendung blockt.  
Wenn der Import initiiert wird, wird die Facebook-API abgefragt, die Antwort nach schon existierenden Events überprüft und für das Abspeichern in der Datenbank angepasst, wie im Folgenden Code-Schnipsel gekürzt zu erkennen.

```javascript
function run () {
    // query for events via Graph API
    return rp.get(encodeURI(baseUrl + 'search?q=' + city + 
    '&type=event&fields=' + fields + '&limit=' + limit +
    '&access_token=' + accesstoken))
      .then((res) => {
        // parse the JSON from FB and filter out events without a
        // proper location immediately
        var events = JSON.parse(res).data.filter((e) => {
          return _.has(e, 'place') && _.has(e, 'place.location') 
          && _.has(e, 'place.location.latitude');
        });

        var promises = events.map((event) => {
          // getting right data from the responst
          // [...]

          return Location.findOneAndUpdateAsync(
            { external_id: location.external_id },
            location,
            { upsert: true, new: true })
            .then((loc) => {
              event.location = loc._id;
            });
        });
        return Promise.all(promises).then(() => events);
      });
  }
```

### Meetup-Import

Grundlegend verhält sich der Import von Events von Meetup ähnlich wie der im vorigen Kapitel beschriebene Facebook-Import. Dabei ist dieser sogar etwas simpler, da die API von Meetup keine Authentifizierung durch einen Benutzer erfordert, um öffentliche Events abzufragen.  
Das ermöglicht einen regelmäßigen (beispielsweise täglichen) automatischen Import von Events, aber um eine Kontinuität der Anwendung zu gewährleisten, wurde sich für ein einheitliches Import-Verfahren basierend auf der primären Quellen für Events, dem Facebook-Import, entschieden.  
Auch hier wird die Antwort der API erst auf schon existierende Events überprüft und dann die neuen angepasst und in der Datenbank gespeichert, ähnlich wie schon im Code-Beispiel Zum Facebook-Import dargestellt.
