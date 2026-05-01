# Software Development - A Guided Tour

This repository contains the static website content for
[rehana.co.in](http://www.rehana.co.in/). The site is a guided learning map for
students, beginners, and early-career developers who want to understand modern
software development, with a strong focus on the path toward full-stack
development.

The site is intentionally content-first: a single landing page introduces the
software-development landscape, and topic cards link to deeper pages for
languages, frameworks, client and server development, databases, APIs,
architecture, security, testing, tooling, cloud, AI, and related engineering
skills.

## Current Scope

The project currently contains 206 HTML pages: `index.html` plus deep-dive pages
under `pages/`.

| Chapter | Area | Primary content location |
| --- | --- | --- |
| 01 | Foundations of Programming | `pages/languages/`, `pages/paradigms/`, `pages/cs/`, `pages/os/`, `pages/domains.html` |
| 02 | Client Side | `pages/client-platforms/`, `pages/client-tooling/`, `pages/frameworks/frontend/`, `pages/frameworks/mobile/` |
| 03 | Server Side | `pages/server/`, `pages/frameworks/backend/`, `pages/orm/` |
| 04 | Database Side | `pages/database/` |
| 05 | APIs & Networking | `pages/api/` |
| 06 | Architecture & Design Patterns | `pages/architecture/` |
| 07 | Security | `pages/security/` |
| 08 | Testing & Code Quality | `pages/testing/` |
| 09 | Cross-Cutting Tools | `pages/cross-cutting/` |
| 10 | DevOps & CI/CD | Chapter content in `index.html` |
| 11 | Methodologies & SDLC | Chapter content in `index.html` |
| 12 | Cloud Computing | `pages/cloud/` |
| 13 | Observability & Performance | Chapter content in `index.html` |
| 14 | AI Landscape | `pages/ai/` |
| 15 | Soft Skills & Ecosystem | Chapter content in `index.html` |

## Repository Structure

- `index.html` - the main learning map, chapter navigation, summary cards, and
  links into deeper pages.
- `assets/css/styles.css` - shared visual system for the static pages.
- `pages/` - topic pages grouped by area.
  - `languages/` - language deep dives such as Java, Python, JavaScript,
    TypeScript, Go, Rust, C#, C++, and others.
  - `frameworks/` - frontend, backend, and mobile framework pages.
  - `api/`, `architecture/`, `cloud/`, `database/`, `server/`, `orm/` - core
    full-stack engineering areas.
  - `security/` - Chapter 07 overview pages plus deep dives for OWASP-style
    risks and authentication standards.
  - `testing/` - Chapter 08 pages for test types, test frameworks, and code
    quality practices.
  - `cross-cutting/` - Chapter 09 pages for version control, build tools,
    package managers, IDEs, editors, and project-tracking tools.
  - `ai/`, `client-platforms/`, `client-tooling/`, `cs/`, `os/`,
    `paradigms/` - supporting foundations, operating environments, and
    specialization areas.
- `favicon.svg`, `robots.txt`, `sitemap.xml` - site metadata used by browsers
  and search engines.

## Content Model

Most deep-dive pages follow a consistent static HTML pattern:

- Page metadata in the `<head>`, including canonical URL and social preview
  tags.
- A hero header with the topic title, short description, tags, and a link back
  to the relevant chapter on `index.html`.
- Reusable content sections built with classes such as `chapter`,
  `chapter-head`, `chapter-body`, `grid`, `card`, `drill`, and `nav-other`.
- A footer with the site attribution.

When adding or revising content, keep the page beginner-friendly but specific.
Avoid copying the same generic sections across many related pages. For example,
Security, Testing, and Cross-Cutting Tools pages should explain what is unique
about each topic, not only repeat broad advice that applies everywhere.

Practice labs and tutorials are intentionally not part of the current deep-dive
pages. They can be added later as a separate tutorial layer.

## Local Development

This is a plain static HTML/CSS site. There is no required build step and no
checked-in package manager configuration.

You can open `index.html` directly in a browser, or serve the repository with
any simple static file server:

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

If you prefer Node-based tooling, `npx serve .` also works, but it is optional
and not required by the project.

## Adding a New Deep Dive

1. Create the new HTML page under the appropriate `pages/<area>/` directory.
2. Match the existing page structure, metadata, CSS path, canonical URL, hero,
   section classes, footer, and relative links.
3. Link the relevant card, table row, or overview page in `index.html`.
4. Add cross-links in the page's `nav-other` section so learners can continue
   through related topics.
5. Add the page to `sitemap.xml`.
6. Run a local link check and open the affected pages in a browser.

For chapter areas that use topic cards, the cards should link to the specific
deep-dive page. Overview pages are useful, but they should not replace individual
deep dives when the chapter presents multiple distinct topics.

## Maintenance Checks

Use this PowerShell snippet after link-heavy edits to find missing local links:

```powershell
$files = Get-ChildItem -Path . -Recurse -File -Filter *.html
$missing = @()

foreach ($file in $files) {
  $content = Get-Content -Raw -LiteralPath $file.FullName
  $matches = [regex]::Matches($content, 'href="([^"]+)"')

  foreach ($match in $matches) {
    $href = $match.Groups[1].Value

    if ($href -match '^(https?:|mailto:|#|javascript:)') {
      continue
    }

    $pathOnly = ($href -split '#')[0]

    if ([string]::IsNullOrWhiteSpace($pathOnly)) {
      continue
    }

    $resolved = Join-Path $file.DirectoryName $pathOnly

    if (-not (Test-Path -LiteralPath $resolved)) {
      $missing += [pscustomobject]@{
        File = $file.FullName
        Href = $href
      }
    }
  }
}

$missing | Select-Object File, Href
"Missing count: $($missing.Count)"
```

Also search for repeated placeholder text after generating multiple related
pages. Shared structure is good; repeated teaching content usually needs to be
made topic-specific.

