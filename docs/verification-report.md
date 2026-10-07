# Verification report — Zlendo Realty

6 October 2026. Story: an architect or builder reads the French campaign page, requests a live demo, submits qualification details, receives a reference, and has that enquiry saved for follow-up.

| Check | Result | Evidence |
| --- | --- | --- |
| French page loads | Pass locally | Correct title and meaningful content |
| Desktop layout | Pass at 1440 × 1000 | No horizontal overflow; screenshots inspected |
| Mobile layout | Pass at 390 × 844 | Scroll width equals viewport width; screenshot inspected |
| Images | Pass | All images loaded; three genuine help-centre screenshots included |
| Browser errors | Pass | Browser error list empty |
| Main action | Pass | Repeated demo actions point to the same form |
| Form submission | Pass locally | UI confirms reference `d2edfa59-b6dd-4c4f-aba0-63b4b3ddda52` |
| Persistent receipt | Pass locally | Saved file and independent receipt endpoint confirm receipt |
| Enquiry review | Pass locally | Authenticated inbox contains the submission |
| Unauthorized inbox access | Pass | 401 |
| Missing consent / invalid data | Pass | 400 |
| Cross-origin submission | Pass | 403 |
| Missing storage | Pass | 503; no false success in Worker or Vercel handler |
| Spanish review page | Pass locally | Spanish page loads and browser errors are empty |
| Worker artifact | Pass | Valid ES module with request handler |
| Private hosted review site | Pass | Published at https://zlendo-realty-fr-demo.vabsit2020.chatgpt.site; HTTP 200 |
| Hosted enquiry submission | Pass | HTTP 201; reference `017ef94b-3cdd-491f-bf8e-405c059921c6` |
| Hosted persistent receipt | Pass | Separate receipt check returned `received: true` using hosted storage |
| Vercel package build | Pass locally | Prebuilt pages and serverless handler syntax verified |
| CodeGraph | Complete | Initialized and indexed the workspace |

The local storage adapter persists files on disk. The private Sites review copy also passed an independent hosted submission and receipt check against its persistent storage. This does not prove a production Vercel Blob integration, email delivery, or the actual Zlendo rendering API. A Vercel private Blob store must be connected and a production test repeated after Vercel deployment. Email notification has not been configured or tested; the destination is still unconfirmed. The synthetic test records are explicitly labeled as tests.

French and Spanish language checks were performed by the assistant. No independent native-speaker sign-off or founder claim approval was received. API package scope, extra usage charges and trial terms remain unresolved.

## Animated logo redesign — 6 October 2026

The supplied logo is embedded unchanged. The redesigned page adds floating cards, pointer tilt, scroll reveals, an animated ribbon, a keyboard-operable 2D/3D illustration slider, three selectable genuine product screenshots, and INR/MAD/MUR/EUR pricing controls. The hero clearly states that the plan and interior represent different projects. No actual conversion is simulated as a product result.

| Check | Result |
| --- | --- |
| Desktop 1440 × 1000 | No horizontal overflow; screenshot inspected |
| Tablet 1024 × 768 | No horizontal overflow |
| Mobile 390 × 844 | No horizontal overflow; screenshot inspected |
| Slider keyboard Home/End | Changes value and reveal to 0%/100% |
| Motion pause | Pauses ambient animation; screenshots remain fully visible |
| Reduced-motion preference | Ribbon and hero animations resolve to `none` |
| Screenshot selection | Second and third screenshots load and become the sole visible image |
| Currency controls | 8,295 MAD, 39,770 MUR and €741 displayed with indicative-rate note |
| Redesigned mobile enquiry | Saved with reference `54b593e5-dd99-4693-9bc8-ece71aec5ba7` |
| Hosted redesign enquiry | HTTP 201; separate receipt confirms `56a5a4a0-0377-4b4f-9288-2bc2763155c1` |
| Browser errors | Empty for French, Spanish and pricing study |
| Pricing study | Required sections and source links read back; browser render inspected |
| Cost calculator | 120 projects × 4 renders × ₹100 hypothetical test rate gives ₹128,000/year; test input cleared |
| Vercel ZIP | Includes enquiry handler, current French page and environment example |

INR is now confirmed. Exchange equivalents use the XE snapshot of 5 October 2026 at 16:00 UTC. Coohom INR/USD/EUR prices were observed directly on its official live pricing page; Planner 5D prices use its official US pricing. The pricing study distinguishes software subscriptions from quoted production API costs.
