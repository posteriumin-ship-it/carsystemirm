# Vercel Deployment

Ovo je preporučena deployment varijanta dok kod Burina.net postoji samo domen/DNS, bez aktivnog shared hosting paketa.

## Rute

- `https://carsystemirm.com/` je javna "Sajt je u pripremi" stranica.
- `https://carsystemirm.com/preview` i sve `/preview/...` rute su zaštićene Basic Auth-om.

## Preview zaštita

Zaštita je implementirana u root `middleware.ts`.

Middleware:

- štiti samo `/preview` i `/preview/...`,
- ne štiti `/`,
- ne štiti statičke assete,
- čita kredencijale isključivo iz env varijabli,
- vraća `401` ako env varijable nisu podešene,
- vraća `WWW-Authenticate: Basic realm="Carsystem RM Preview"` kada auth nije validan.

## Env varijable

U Vercel Project Settings → Environment Variables dodati:

```txt
PREVIEW_USERNAME
PREVIEW_PASSWORD
```

Podesiti ih za environment-e koji služe internu preview zonu, najčešće:

- Production
- Preview

Ne upisivati prave kredencijale u kod, dokumentaciju, `.env.local`, commit ili chat log.

## Build

Vercel treba da koristi standardni Next.js build:

```bash
npm run build
```

Projekat više ne koristi `output: "export"` za Vercel, jer Vercel preview zaštita zavisi od Next middleware-a.

## DNS napomena

Kada je Vercel projekat spreman, domen/DNS sa Burina.net treba usmeriti prema Vercel uputstvu za custom domain.

`.htaccess` se ne uploaduje i nema efekat na Vercel-u.
