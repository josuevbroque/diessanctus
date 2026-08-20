# Dies Sanctus

A liturgical calendar and lectionary reader. Pick a date and it
shows the liturgical season, the day's color, and the four Revised Common
Lectionary readings (Psalm, Old Testament, Epistle, Gospel), plus fixed-date
feast days and commemorations, each paired with a public-domain painting.

No build step, no backend, no dependencies to install. It's one `index.html`
file that runs entirely in the browser.

## Features

- **Automatic liturgical calendar** — computes the full church year from the
  date of Easter: Advent, Christmas, Epiphany, Lent, Easter, Ascension,
  Pentecost, Trinity, and Ordinary Time (Tempo Comum), including the
  three-year Sunday lectionary cycle (Year A/B/C).
- **Daily readings** — Psalm, Old Testament, Epistle, and Gospel references
  for each Sunday and major feast, each linking out to BibleGateway (ARC
  translation) with one tap.
- **Fixed-date feast days and commemorations** — a set list of saints' days
  and holy days (`DIAS_FESTIVOS` and `COMEMORACOES`), overlaid on the moving
  calendar without clobbering a Sunday or moveable feast that falls on the
  same date.
- **Illustrated commemorations** — feast days can carry an image (pulled from
  Wikimedia Commons) shown above the readings, framed to match the site's
  parchment-and-gold aesthetic, with a caption underneath.
- **Day navigation** — step forward/backward one day at a time, or jump back
  to today.
- **Liturgical color** — each day is tagged with its color (green, purple,
  white, red, scarlet, black, blue), which tints the page accordingly.

## Running it

Just open `index.html` in a browser. There's nothing to install and nothing
to serve, it's plain HTML/CSS/JS in one file. To host it publicly, any
static host works (GitHub Pages, Netlify, Cloudflare Pages, etc.), since it
makes no server calls except fetching images from Wikimedia Commons.

## Adding a feast day

Feast days with fixed dates live in the `DIAS_FESTIVOS` array in the
`<script>` block, each with a month, day, name, liturgical color, and
reading references. Commemorations without their own readings live in
`COMEMORACOES`, keyed by `"month-day"`.

## Adding an image to a commemoration

Images are stored separately in `COMEMORACAO_IMAGENS`, also keyed by
`"month-day"`:

```js
"8-20": {
  url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Eli_and_Samuel.jpg",
  legenda: "Samuel relata a Eli os juízos de Deus sobre a casa deste · John Singleton Copley, 1780"
}
```

Only days present in this object show an image; everything else renders
without one. `url` should point directly at a Wikimedia Commons file (either
the original or a `/thumb/.../NNNpx-filename` scaled version).

## Tech

Plain HTML, CSS, and vanilla JavaScript. Fonts are loaded from Google Fonts
(Fraunces, Source Serif 4, Cormorant Garamond). No frameworks, no build
tools, no package manager.
