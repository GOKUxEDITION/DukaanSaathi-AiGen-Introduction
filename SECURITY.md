# Security Policy

## Reporting
Please do not disclose vulnerabilities publicly. Report security issues privately through GitHub's repository Security Advisories where available, or use the published security contact in `public/.well-known/security.txt`. Include reproduction steps, affected paths, impact and a suggested fix. Avoid sending secrets or personal data.

## Scope
This is a static portfolio website. The repository uses a browser-enforced Content Security Policy meta tag, dependency auditing, automated secret scanning, and Dependabot update checks. These controls reduce risk but do not make public source code or images impossible to copy. GitHub Pages does not provide this repository with custom HTTP response-header control; use a header-capable host to enforce headers such as HSTS or `frame-ancestors`.
