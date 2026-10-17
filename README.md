# Kaushiki Chatterjee — Portfolio

A simple, responsive three-page student portfolio for **SoftNexis Full Stack Web Development, Task 1: Environment Setup & Static Website Deployment**.

**Live website:** https://Kaushiki809.github.io/portfolio-task1/

**Repository:** https://github.com/Kaushiki809/portfolio-task1

## Pages

- **Home:** introduction and the portfolio project.
- **About:** learning journey and technologies being explored.
- **Contact:** working links to the GitHub profile and project issues for feedback. There is no form or backend pretending to send messages.

## Technologies

HTML5, CSS3, and a small amount of vanilla JavaScript. No framework, package installation, database, or build step is required.

## Run locally

1. Install Git and a code editor such as VS Code. Node.js is optional for this static site; the assignment recommends installing it for later tasks.
2. Clone the repository:

   ```sh
   git clone https://github.com/Kaushiki809/portfolio-task1.git
   cd portfolio-task1
   ```

3. Open `index.html` directly in a browser, or use VS Code's Live Server extension.
4. Alternatively, with Python installed, run `python -m http.server 8000` and open `http://localhost:8000`.

Optional environment checks: `git --version`, `node --version`, and `npm --version`.

## File structure

```text
portfolio-task1/
├── index.html
├── about.html
├── contact.html
├── styles.css
├── script.js
├── .nojekyll
├── .gitignore
└── README.md
```

## Design choices

- A cream background, dark text, and green accents keep the design clear and consistent.
- System fonts avoid external downloads. The decorative initials are text and CSS, so no external images are needed.
- CSS Grid creates desktop columns; Flexbox arranges navigation, buttons, and the footer.
- At widths of 768px and below, content stacks and navigation becomes a hamburger menu.
- The mobile button exposes its expanded state to assistive technology. Escape closes the menu. Without JavaScript, navigation links remain visible.
- Semantic `header`, `nav`, `main`, `section`, `article`, and `footer` elements, a skip link, and visible focus styles support keyboard use.
- Relative file paths work on GitHub Pages project URLs and in a local folder.
- Personal phone numbers, email addresses, and private student identifiers are not published.

## Task 1 requirement checklist

- [x] Home, About, and Contact pages with consistent navigation.
- [x] Responsive desktop and mobile layouts.
- [x] Mobile hamburger menu at 768px and below.
- [x] Flexbox, Grid, media queries, and hover effects.
- [x] Semantic HTML and readable, organized source files.
- [x] Setup instructions and design decisions in this README.
- GitHub Pages provides the HTTPS live website linked above once deployment finishes.

## Publish with GitHub Pages

In this repository, open **Settings → Pages**. Choose **Deploy from a branch**, select **main** and **/(root)**, then save. GitHub publishes the files at the live URL above. Future commits to `main` update the site automatically.

## Manual checks

1. Open all three pages and follow every navigation link.
2. Check at desktop width and at 375px mobile width: text should fit without horizontal scrolling.
3. On mobile, open and close the menu; press Escape to close it using the keyboard.
4. Confirm the active page is indicated in navigation.
5. Follow the GitHub profile and repository links.
6. Use browser developer tools for an optional Lighthouse audit and HTML validation. No audit score is claimed here.

## Editing the portfolio

Update the page text directly in the HTML files, edit colors and spacing in `styles.css`, and keep the same navigation on every page. The only JavaScript controls the mobile menu.
