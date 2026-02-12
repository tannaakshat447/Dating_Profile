# 💘 Akshat Tanna — Personal Profile Website

A fun, interactive personal profile page built as a creative dating-app-style bio. Features smooth animations, interactive buttons, RPG-style stats, and a charming proposal section — all in a single HTML file.

---

## 🌐 Live Preview

Open `index.html` in any modern browser. No build tools, no dependencies, no setup required.

---

## 📁 Project Structure

```
/
├── index.html       # Main file — all HTML, CSS, and JS in one place
├── style.css        # Standalone stylesheet (legacy / reference)
├── script.js        # Standalone script (legacy / reference)
└── profile.jpg      # Profile picture (add your own)
```

> **Note:** The current version of the site is self-contained in `index.html`. The `style.css` and `script.js` files are kept as reference and are not linked to the main page.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔤 Typing Effect | Rotating taglines with a typewriter animation |
| 💖 Send Heart | Like button with confetti burst on click |
| 📩 Send Proposal | Connect button with rotating witty response messages |
| 🚩 Vibe Check | Reveals "Toxic Traits" and "Our Future" predictions |
| 🎮 Character Build | RPG-style stat bars (Intellect, Humour, Loyalty) |
| 💍 Proposal Section | Yes/No proposal buttons with custom responses |
| 🎊 Confetti Engine | Canvas-based confetti particle system |
| 📱 Fully Responsive | Optimised for mobile, tablet, and desktop |

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — glassmorphism cards, animations, CSS Grid, responsive media queries
- **Vanilla JavaScript** — all interactivity, no frameworks
- **Google Fonts** — [Outfit](https://fonts.google.com/specimen/Outfit)
- **Font Awesome 6** — icons (loaded via CDN)

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 900px` | Two-column (sidebar + content grid) |
| `≤ 900px` | Single column, two-column content grid |
| `≤ 600px` | Fully single-column, stacked buttons |
| `≤ 380px` | Compact layout for small/older phones |

---

## 🚀 Getting Started

1. **Clone or download** this repository.
2. Add your own photo and name it `profile.jpg` in the root folder.
3. Open `index.html` in your browser — that's it!

To personalise the content, edit these sections inside `index.html`:

- **Name & taglines** — search for `texts = [` in the `<script>` block
- **Bio details** — the "Essentials" card (`Location`, `Age`, `Height`, `Degree`)
- **Green Flags** — the `green-flags` list
- **Social links** — the `social-links` div (Instagram, Snapchat, LinkedIn hrefs)
- **Vibe Check content** — the `traits` and `futures` arrays in the script
- **Proposal message** — the `proposals` array and the final "One Last Question" card

---

## 🎨 Colour Palette

| Variable | Hex | Usage |
|---|---|---|
| `--indigo` | `#6c5ce7` | Primary accent, sidebar border |
| `--purple` | `#a55eea` | Story section |
| `--blue` | `#0984e3` | Essentials, stat bars |
| `--green` | `#00b894` | Green flags, loyalty bar |
| `--orange` | `#e17055` | Character build section |
| `--pink` | `#e84393` | Tags, proposal section |
| `--cyan` | `#00cec9` | Vibe check section |
| `--yellow` | `#f1c40f` | Reviews section |

---

## 📄 License

This project is open for personal use. Feel free to fork it and make it your own. Credit appreciated but not required.

---

*Made with ❤️ by Akshat Tanna © 2026*
