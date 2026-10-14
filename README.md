# Van Hoffe BTC – website

Website van Steph van Hoffe (Van Hoffe BTC): begeleider en coördinerend begeleider in de
gehandicaptenzorg en CRKBO-geregistreerd trainer agressie en weerbaarheid.

Een statische website: HTML, CSS en een klein beetje JavaScript, zonder build-stap. De site is
ingericht voor [Vercel](https://vercel.com) (zie *Online zetten via Vercel*), maar werkt op elke
webhost.

## Structuur

```
index.html               Homepage (diensten, over mij, expertise, kwaliteit, referenties, contact)
privacyverklaring.html   Privacyverklaring (AVG)
klachtenregeling.html    Klachtenregeling (Wkkgz)
404.html                 Pagina voor adressen die niet bestaan
vercel.json              Vercel-instellingen: geen build-stap, beveiligingsheaders, caching
.vercelignore            Bestanden die niet online komen (deze README en huisstijl/)
huisstijl/logo/          Logo als PNG (lichte en donkere achtergrond) en los beeldmerk
huisstijl/briefpapier/   Briefpapier: Word-sjabloon en blanco PDF voor de drukker
assets/css/style.css     Alle opmaak; kleuren staan bovenaan als variabelen (:root)
assets/js/main.js        Mobiel menu, actieve menu-item, jaartal in de footer
assets/fonts/            Inter en Inter Tight, lokaal gehost (geen Google Fonts, geen cookies)
assets/img/              Portretfoto, logo's van opdrachtgevers, deelafbeelding en beelden van Je Dag in Beeld
favicon.svg, apple-touch-icon.png, robots.txt, sitemap.xml
```

## Lokaal bekijken

Open `index.html` in de browser, of start een lokale server in deze map:

```
python3 -m http.server 8000
```

en ga naar http://localhost:8000.

## Huisstijl

- Zwart (`#0b0b0c`) en wit, met één accentkleur: petrol (`#0f766e`, en de lichtere tint
  `#2dd4bf` op zwarte achtergronden).
- Lettertypen: Inter Tight (koppen) en Inter (tekst).
- De accentkleur aanpassen? Wijzig `--accent` en `--accent-light` in `assets/css/style.css`
  en de kleur `#2dd4bf` in de logo-SVG's (`favicon.svg` en de headers/footers van de HTML-pagina's).

## Online zetten via Vercel

Er is geen build-stap nodig: Vercel zet de bestanden zoals ze zijn online. Alle instellingen staan
al in `vercel.json`.

### 1. Project aanmaken

1. Ga naar [vercel.com](https://vercel.com) en log in met je GitHub-account (of maak een gratis
   Hobby-account aan).
2. Kies **Add New… → Project** en importeer de repository `StephvanHoffe/Van-Hoffe-BTC`.
   Staat hij er niet tussen? Kies dan **Adjust GitHub App Permissions** en geef Vercel toegang
   tot deze repository.
3. Laat alle instellingen staan zoals Vercel ze voorstelt (Framework Preset: *Other*, geen
   Build Command, geen Output Directory) en klik op **Deploy**.
4. Na ongeveer een minuut staat de site online op een adres als `van-hoffe-btc.vercel.app`.

Vercel publiceert de *standaardbranch* van de repository als live website. Dat is nu
`claude/wonderful-thompson-6ki4or`. Elke nieuwe wijziging op die branch komt daarna automatisch
online. Wil je een andere branch live hebben (bijvoorbeeld `main`), wijzig dat dan in Vercel via
**Settings → Environments → Production → Branch Tracking**.

### 2. Eigen domein koppelen (vanhoffe-btc.nl)

1. Ga in het project naar **Settings → Domains** en voeg `vanhoffe-btc.nl` toe.
2. Voeg ook `www.vanhoffe-btc.nl` toe en laat dat doorverwijzen naar `vanhoffe-btc.nl`
   (Vercel biedt dit zelf aan).
3. Vercel toont welke DNS-records je moet aanmaken (meestal een A-record voor `vanhoffe-btc.nl`
   en een CNAME-record voor `www`). Voeg precies die waarden toe in het DNS-beheer van de partij
   waar je het domein hebt geregistreerd.
4. Het HTTPS-certificaat regelt Vercel automatisch zodra de DNS-records actief zijn
   (meestal binnen een uur, soms tot 48 uur).

**Let op je e-mail:** pas alleen de A- en CNAME-records voor de website aan. Laat de MX-records
(en eventuele SPF/DKIM-records) staan, anders komt er geen mail meer binnen op
steph@vanhoffe-btc.nl. Verhuis de nameservers niet naar Vercel, tenzij je die mailrecords daar
ook opnieuw aanmaakt.

## Domein

In de pagina's, `robots.txt` en `sitemap.xml` is uitgegaan van het domein
`https://vanhoffe-btc.nl/` (zonder `www`). Kies je in Vercel `www.vanhoffe-btc.nl` als hoofdadres,
pas het domein dan op die plekken aan.

## Kwaliteit & registraties

De sectie *Kwaliteit & registraties* stelt dat aan onderstaande eisen wordt voldaan. Dit is
bevestigd in oktober 2026; houd het actueel (bijvoorbeeld bij een nieuwe VOG of verzekering):

- [x] KVK-inschrijving (89513908)
- [x] CRKBO-registratie (register Docenten). Let op: de btw-vrijstelling geldt alleen voor
      trainingen die je in opdracht van een onderwijsinstelling geeft. Trainingen die je
      rechtstreeks aan een zorgorganisatie geeft, vallen er niet onder. De teksten op de site
      zijn hierop afgestemd.
- [x] MBO-4 diploma Persoonlijk begeleider gehandicaptenzorg
- [x] Geldige VOG voor de zorg
- [x] Melding als zorgaanbieder bij het CIBG (Wtza-meldplicht, ook voor zzp'ers in onderaanneming)
- [x] Wkkgz: klachtenregeling, klachtenfunctionaris en erkende geschilleninstantie via
      ZZP-erindezorg.nl. De namen van de klachtenfunctionaris en de geschilleninstantie staan
      op het aansluitcertificaat; die kun je eventueel nog toevoegen op `klachtenregeling.html`.
- [x] Beroeps- en bedrijfsaansprakelijkheidsverzekering
- [x] Eigen meldcode huiselijk geweld en kindermishandeling
- [x] Werken volgens de Wet zorg en dwang (Wzd)
- [x] AVG: zorgvuldige omgang met (cliënt)gegevens
- [x] Wet DBA: werken op basis van een overeenkomst van opdracht

Optioneel om toe te voegen als je die hebt: AGB-code, btw-nummer, keurmerk (bijv. Kiwa),
BHV/EHBO-certificaat.
