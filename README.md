<div align="center">

<img src="public/logo.svg" alt="DukaanSaathi AiGen logo" width="88" height="88" />

# DukaanSaathi AiGen
### Har Dukaan Ka Digital Saathi

**Introduction & Product Portfolio · Offline-first Android retail platform**

**Developed & Maintained by Dipak Choudhary · Powered by KAIxGenShopLabs**

![React](https://img.shields.io/badge/Portfolio-React%20%2B%20Vite-0B7A4B?style=for-the-badge)
![Product](https://img.shields.io/badge/Product-Android%20Retail-075C39?style=for-the-badge)
![Status](https://img.shields.io/badge/Scope-Phase%2002%20MVP-E8F5EE?style=for-the-badge)

</div>

## About

This repository contains the **DukaanSaathi AiGen Introduction & Product Portfolio website**. It presents the product vision, Phase 02 MVP scope, engineering baseline, roadmap principles and project governance in a responsive, animated, green-first interface.

**Important:** This is a React/Vite web portfolio, not the native Android app source repository.

## Product identity

- **Application:** DukaanSaathi AiGen
- **Tagline:** Har Dukaan Ka Digital Saathi
- **Developer / Maintainer:** Dipak Choudhary
- **Powered by:** KAIxGenShopLabs
- **Android application ID / namespace:** `com.dukaansaathi.aigen`
- **Audience:** Indian kirana, general stores and small retailers
- **Product direction:** Offline-first, selection-first UX, careful data integrity
- **Brand palette:** `#0B7A4B`, `#075C39`, `#E8F5EE`, `#F7FAF8`

## Phase 02 MVP scope

| Requirement | Feature |
|---|---|
| REQ-MVP-01 | Merchant Shop Profile & Onboarding |
| REQ-MVP-02 | Kirana Product Catalog Management |
| REQ-MVP-03 | Immutable Stock Movement Ledger |
| REQ-MVP-04 | Low-Stock Monitoring & Notifications |
| REQ-MVP-05 | Customer Khata Ledger Core |
| REQ-MVP-06 | Merchant Daily Dashboard Metrics |

## Engineering baseline

The Android product baseline is Kotlin, Jetpack Compose, Material 3, MVVM, Clean Architecture, Repository Pattern, Room/SQLite, DataStore, Kotlin Coroutines and Flow. Use manual dependency injection unless the governing roadmap authorizes a change. Money must use `Long` paise or an approved Money abstraction, not `Float` or `Double`.

This portfolio does not claim that every planned Android capability is implemented or production-ready. The Master Index, Phase 00–23 roadmap and verified source/build evidence remain authoritative.

## Out of scope for Phase 02

Barcode/ML Kit/CameraX, full POS checkout/invoice, online payments/UPI, SMS/WhatsApp APIs, Firebase/cloud sync/multi-device, Bluetooth thermal printing, subscriptions, AI Copilot, backend API/PostgreSQL, iOS and Play Store release work remain excluded unless formally authorized by the roadmap.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Production build and preview:

```bash
npm run build
npm run preview
```

## Project governance

- Atomic execution: one task at a time.
- Strict scope lock: no unapproved scope creep.
- No invented backend endpoints or fake sync status.
- Keep secrets and local environment files out of Git.
- Verify builds and tests before claiming completion.

## Copyright and permissions

Copyright © 2026 Dipak Choudhary. All rights reserved, subject to applicable third-party licenses. No license is granted for reuse of original project code, design assets, branding or documentation without prior written permission. See [COPYRIGHT_AND_PERMISSION.txt](COPYRIGHT_AND_PERMISSION.txt). Public availability does not itself grant a general reuse license; third-party dependencies and assets remain governed by their own licenses.

## Links

- Introduction portfolio repository: https://github.com/GOKUxEDITION/DukaanSaathi-AiGen-Introduction
- Android product repository: https://github.com/GOKUxEDITION/DukaanSaathiAiGen
