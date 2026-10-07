# Van Hoffe BTC – website

Website van Steph van Hoffe (Van Hoffe BTC): begeleider en coördinerend begeleider in de
gehandicaptenzorg en CRKBO-geregistreerd trainer agressie en weerbaarheid.

Een statische website: HTML, CSS en een klein beetje JavaScript, zonder build-stap. Hij werkt
op elke webhost (bijvoorbeeld GitHub Pages, Netlify of een gewone hostingpartij).

## Structuur

```
index.html               Homepage (diensten, over mij, expertise, kwaliteit, referenties, contact)
privacyverklaring.html   Privacyverklaring (AVG)
klachtenregeling.html    Klachtenregeling (Wkkgz)
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

## Domein

In de pagina's, `robots.txt` en `sitemap.xml` is uitgegaan van het domein
`https://vanhoffe-btc.nl/`. Gebruik je een ander domein (bijvoorbeeld met `www.`), pas dat dan
op die plekken aan.

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
