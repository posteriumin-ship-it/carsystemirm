# Deployment

Ovaj projekat sada ima dve jasno odvojene deployment varijante:

- `deployment/vercel` — primarna varijanta dok Burina.net ima samo domen/DNS.
- `deployment/shared-hosting` — kasnija Burina/shared hosting varijanta ako se aktivira web hosting paket.

## Trenutna preporuka

Koristiti Vercel deployment.

Javna ruta `/` ostaje otvorena, a sve rute koje počinju sa `/preview` štiti Next middleware preko Basic Auth-a i env varijabli.

## Važna razlika

`.htaccess` ne radi na Vercel-u.

`.htaccess` primer iz `deployment/shared-hosting` važi samo za Apache/shared hosting okruženje, kao što je Burina web hosting paket ako se kasnije kupi ili aktivira.
