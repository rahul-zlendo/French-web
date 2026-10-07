# Zlendo Realty — Vercel deployment

This package contains the French landing page, a deferred Spanish test page, and serverless enquiry functions. The review page includes indicative MAD/MUR/EUR conversions and founder-review notes. It is not yet approved for public campaign traffic.

## Deploy

1. Import the project into Vercel using the **Other** framework preset. Build command: `npm run build:vercel`. Output directory: `public`. The package lock is included.
2. Create a **private Vercel Blob store** and connect it to this project. The SDK supports connected-store authentication through `BLOB_STORE_ID` and Vercel's managed OIDC token. A `BLOB_READ_WRITE_TOKEN` can also be used for environments that need a static token. Keep all credentials server-side.
3. Set a strong `ADMIN_TOKEN` in Vercel's environment settings if you need the authenticated `/api/inbox` export. Never put this token into the page or a URL.
4. Deploy. Until storage is configured, enquiry submissions return an error and the page does not pretend they were received.
5. Submit a test enquiry from the deployed page. Check `/api/receipt?id=THE_RETURNED_REFERENCE` and the private Blob store record. Receipt lookup returns only a boolean and a random reference; it never returns contact details.

The form stores name, email, company, country, activity, volume, project description, language, consent and UTM attribution. It does not upload drawings. There is no email notification integration yet. The campaign recipient remains unconfirmed.

## Review enquiries

Use the Vercel Blob dashboard to inspect private records. `/api/inbox` returns up to 100 records and a pagination cursor when authenticated with an `Authorization: Bearer ...` header using the server-side `ADMIN_TOKEN`. A missing or wrong token returns 401. Review, export and delete test records through the storage dashboard. Define a retention policy before collecting prospect traffic.

## Page files

- `public/index.html`: French campaign, Morocco and Mauritius.
- `public/es.html`: deferred Spain test. Not linked from the French navigation.
- `api/enquiry.js`: validates and stores a submission in private Blob storage.
- `api/receipt.js`: confirms a saved reference without revealing personal information.
- `api/inbox.js`: authenticated review/export endpoint.
- `lib/enquiry.js`: shared field validation.

The two HTML pages are generated and self-contained. Their images and scripts are embedded. Edit work/create-site.mjs and work/design.mjs, then rebuild. The design source and required assets are included in this repository.

## Known launch dependencies

Confirm annual API scope; input/output formats; limits; taxes; rendering and estimation usage rates; trial terms; founder approval; screenshot approval; campaign notification recipient; final language approval. The current public website uses some claims that are broader than the user-confirmed API facts; they have not been imported as guarantees.

Official storage setup reference: https://vercel.com/docs/vercel-blob/using-blob-sdk
