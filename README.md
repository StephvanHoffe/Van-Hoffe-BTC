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
assets/img/              Portretfoto (zwart-wit) en deelafbeelding voor social media
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

## Controleren vóór livegang

De sectie *Kwaliteit & registraties* stelt dat aan onderstaande eisen wordt voldaan. Controleer
dat dit klopt en houd het actueel:

- [ ] KVK-inschrijving (89513908)
- [ ] CRKBO-registratie – staat de inschrijving in het **Instellingenregister**? Alleen dan zijn
      trainingen die je rechtstreeks aan zorgorganisaties geeft vrijgesteld van btw. Bij het
      Docentenregister geldt de vrijstelling alleen als je lesgeeft via een geregistreerde
      onderwijsinstelling; pas dan de tekst bij Diensten en Kwaliteit aan.
- [ ] MBO-4 diploma Persoonlijk begeleider gehandicaptenzorg
- [ ] Geldige VOG voor de zorg
- [ ] Melding als zorgaanbieder bij het CIBG (Wtza-meldplicht, ook voor zzp'ers in onderaanneming)
- [ ] Wkkgz: klachtenregeling, klachtenfunctionaris en aansluiting bij een erkende
      geschilleninstantie. Vul bij voorkeur de naam en contactgegevens van de
      geschilleninstantie en klachtenfunctionaris in op `klachtenregeling.html`.
- [ ] Beroeps- en bedrijfsaansprakelijkheidsverzekering
- [ ] Eigen meldcode huiselijk geweld en kindermishandeling
- [ ] Werken volgens de Wet zorg en dwang (Wzd)
- [ ] AVG: zorgvuldige omgang met (cliënt)gegevens
- [ ] Wet DBA: werken op basis van een overeenkomst van opdracht

Optioneel om toe te voegen als je die hebt: AGB-code, btw-nummer, keurmerk (bijv. Kiwa),
BHV/EHBO-certificaat.
