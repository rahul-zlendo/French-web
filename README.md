# Zlendo Realty — French landing page

French demo campaign for architects, interior design firms and builders in Morocco and Mauritius. The Spanish page is prepared for a later, smaller test.

The single-page design uses the supplied Zlendo Realty logo, an interactive 2D/3D illustration reveal, floating cards, scroll animations, real product screenshots and indicative local-currency pricing. It respects reduced-motion preferences. All conversion actions lead to the live-demo enquiry form.

## Build

```sh
npm ci
npm run build
```

The build generates `public/index.html` and `public/es.html` from `work/create-site.mjs` and `work/design.mjs`. Images are embedded in the generated pages. Edit the generator and design source, then rebuild.

To preview the static page locally:

```sh
npx serve public
```

Static preview does not run the serverless enquiry functions.

## Deploy on Vercel

Import this repository into Vercel with the **Other** framework preset. The build command and output directory are configured in `vercel.json`:

- Build: `npm run build:vercel`
- Output: `public`
- Serverless handlers: `api/`

Connect a **private Vercel Blob store**. Configure `BLOB_READ_WRITE_TOKEN`, or use connected-store authentication with `BLOB_STORE_ID`. Configure `ADMIN_TOKEN` to enable the authenticated enquiry inbox. Keep these values in Vercel environment settings; `.env.example` contains names only.

The form stores enquiries and returns a receipt reference. Without configured storage it reports an error. Email notification is not configured. See [deployment details](README-VERCEL.md) for production submission and receipt checks.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | French landing page |
| `/es.html` | Deferred Spanish page |
| `POST /api/enquiry` | Validate and store a demo request |
| `GET /api/receipt?id=...` | Confirm a stored reference without returning personal details |
| `GET /api/inbox` | Enquiry export with server-side bearer authentication |

## Campaign documents

- [Product brief](docs/product-brief.md)
- [Campaign kit](docs/campaign-kit.md)
- [Pricing study](docs/zlendo-pricing-study-2026-10-06.html)
- [Verification report](docs/verification-report.md)

The annual base supplied by the user is **80,000 INR**. Local equivalents are indicative and dated. Rendering and cost estimation incur additional charges. API inclusions, usage rates, trial terms, enquiry notification destination, final language review and founder approval remain pending. The page retains its review banner and `noindex` metadata.

The hero's 2D capture and 3D illustration depict different projects and are labelled accordingly. They are not evidence of an actual API conversion. No product rendering endpoint is connected to this landing page.
