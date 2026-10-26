<div align="center">

<img src="public/logo.svg" alt="DukaanSaathi AiGen logo" width="88" height="88" />

# DukaanSaathi AiGen
### Har Dukaan Ka Digital Saathi

**Introduction & Product Portfolio · An interactive Liquid Glass experience**

**Developed & Maintained by Dipak Choudhary · Powered by KAIxGenShopLabs**

![React](https://img.shields.io/badge/React-18-149B63?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Design](https://img.shields.io/badge/Design-Liquid%20Glass-77BCE0?style=for-the-badge)
![Scope](https://img.shields.io/badge/Scope-Phase%2002%20MVP-0B7A4B?style=for-the-badge)

</div>

## About

The **DukaanSaathi AiGen Introduction & Product Portfolio** presents the product through an interactive, iPhone-inspired interface: a live lock-screen clock, Dynamic Island-style navigation, translucent glass surfaces, animated ambient colour, app-icon feature navigation, a phone UI concept, roadmap and a message-style project identity section.

The design takes inspiration from the general interaction language of mobile operating systems and Liquid Glass materials. It is an original DukaanSaathi AiGen presentation, not a copy of another creator's personal information, assets or portfolio content.

> This repository contains the web introduction/portfolio. It is not the native Android app source repository.

## Official product identity

- **Application:** DukaanSaathi AiGen
- **Tagline:** Har Dukaan Ka Digital Saathi
- **Developer / Maintainer:** Dipak Choudhary
- **Powered by:** KAIxGenShopLabs
- **Android application ID / namespace:** `com.dukaansaathi.aigen`
- **Audience:** Indian kirana, general stores and independent retailers
- **Product direction:** Offline-first workflows, selection-first UX and reliable local data
- **Brand palette:** `#0B7A4B`, `#075C39`, `#E8F5EE`, `#F7FAF8`

## Phase 02 MVP

| Requirement | Feature |
| --- | --- |
| REQ-MVP-01 | Merchant Shop Profile & Onboarding |
| REQ-MVP-02 | Kirana Product Catalog Management |
| REQ-MVP-03 | Immutable Stock Movement Ledger |
| REQ-MVP-04 | Low-Stock Monitoring & Notifications |
| REQ-MVP-05 | Customer Khata Ledger Core |
| REQ-MVP-06 | Merchant Daily Dashboard Metrics |

## Engineering baseline

The Android product baseline is Kotlin, Jetpack Compose, Material 3, MVVM, Clean Architecture, Repository Pattern, Room/SQLite, DataStore, Coroutines and Flow. Use manual dependency injection unless the governing roadmap authorizes a change. Money values must use Long paise or an approved Money abstraction, not Float or Double.

The website describes the approved product direction; it does not claim every planned Android capability is already implemented or production-ready. The Master Index, Phase 00–23 roadmap and verified build/test evidence remain authoritative.

## Phase 02 exclusions

Barcode / ML Kit / CameraX, full POS checkout and invoice, online payments / UPI, SMS / WhatsApp APIs, Firebase cloud sync / multi-device, Bluetooth thermal printing, subscriptions, AI Copilot, backend API / PostgreSQL, iOS and Play Store release work remain excluded unless the governing roadmap explicitly authorizes them.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Project principles

- Atomic execution: one task at a time.
- Strict scope lock: no unapproved scope creep.
- No invented backend endpoints or fake sync states.
- Never commit API keys, tokens, passwords or local environment secrets.
- Verify builds and tests before claiming completion.
- Respect reduced-motion preferences and responsive layouts.

## Copyright and permissions

Copyright © 2026 Dipak Choudhary. All rights reserved, subject to applicable third-party licenses. No license is granted for reuse of original project code, original design assets, branding or documentation without prior written permission from the applicable rights holder. Read [COPYRIGHT_AND_PERMISSION.txt](COPYRIGHT_AND_PERMISSION.txt). Public visibility does not itself grant a general reuse license; dependencies and third-party materials remain subject to their own licenses.

## Repository

https://github.com/GOKUxEDITION/DukaanSaathi-AiGen-Introduction
