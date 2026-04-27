# Software Development — A Guided Tour

An interactive, drill-down map of the modern software stack, published at [rehana.co.in](http://www.rehana.co.in/). Click any topic on the landing page to explore deeper pages covering programming languages, frameworks, paradigms, domains, cloud, databases, AI, and more.

## Structure

- `index.html` — landing page and topic map
- `pages/` — drill-down content organized by area:
  - `languages/` — C++, C#, Go, Java, JavaScript, Kotlin, PHP, Python, Ruby, Rust, Swift, TypeScript
  - `frameworks/` — `frontend/`, `backend/`, `mobile/`
  - `paradigms/` — OOP, functional, declarative, procedural
  - `domains.html`, `ai/`, `cloud/`, `database/`, `server/`, `client-platforms/`, `client-tooling/`
- `assets/` — shared static assets
- `favicon.svg`, `robots.txt`, `sitemap.xml` — site metadata
- `build/`, `output/` — generated artifacts

## Local development

The site is plain static HTML/CSS — no build step is required. Open `index.html` directly in a browser, or serve the directory locally:

```bash
npx serve .
```

## Dependencies

`package.json` pulls in `pptxgenjs` for generating PowerPoint exports of the content. Install with:

```bash
npm install
```
