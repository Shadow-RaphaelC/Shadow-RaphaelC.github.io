# Raphaël Couturier – Portfolio

**Live site:** <https://shadow-raphaelc.github.io>

My portfolio as a computer science student at Collège Lionel-Groulx.
It shows my game, web and mobile projects, each with a video, screenshots,
my role, and links to the code.

*Version française disponible sur le site (bouton FR).*

## Built with

- Plain HTML, CSS and JavaScript, no framework
- Hosted on GitHub Pages

## How it works

- **Homepage (`index.html`):** a grid of project cards, each with a looping video
- **Project pages (`projects/`):** one page per project, all sharing `style.css` and `script.js`
- **English / French:** every text is written in both languages (`class="en"` / `class="fr"`),
  and `script.js` shows one or the other. The choice is saved in `localStorage`, and the
  browser's language is used on a first visit.

## Structure

```text
index.html        Homepage
style.css         Shared styles
script.js         Language switch + copy email button
projects/         One page per project
videos/           Project videos (MP4)
img/              Screenshots, one folder per project
CVs/              Résumés (EN / FR)
```

## Run locally

Open the folder in VS Code and use the **Live Server** extension on `index.html`.

## Contact

- <raphc.official.business@gmail.com>
- [LinkedIn](https://www.linkedin.com/in/rapha%C3%ABlcouturier/)
