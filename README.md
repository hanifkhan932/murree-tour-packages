# Murree Getaways — Next.js starter

A responsive, modern-minimal single-page website built with Next.js App Router and prepared for Cloudflare Workers using OpenNext.

## Run locally
1. Install Node.js (current LTS).
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:3000

## Deploy to Cloudflare Workers
1. Push this project to a GitHub repository.
2. Create/log in to a Cloudflare account and install/configure Wrangler.
3. Set the required Cloudflare account details/secrets as prompted by Wrangler.
4. Run `npm run deploy` to build with OpenNext and deploy the Worker.
5. Add your custom domain in the Cloudflare Workers dashboard.

Check the current OpenNext Cloudflare guide before production deployment: https://opennext.js.org/cloudflare

## Before launch
- Replace the demo WhatsApp number `923000000000` in `app/page.tsx`.
- Replace `https://example.com` in `app/layout.tsx` with the real domain.
- Confirm all package prices, inclusions, availability, and business contact details.
- Replace demo Unsplash photos with licensed, brand-specific images.
- Add a real inquiry form or connect the WhatsApp CTA to the correct business number.
- Review accessibility, performance, and SEO metadata before publishing.

Prices and package descriptions in this starter are illustrative placeholders, not confirmed offers.
