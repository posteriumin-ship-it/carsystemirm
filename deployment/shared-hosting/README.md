# Shared Hosting Deployment

Ova varijanta važi samo ako se kasnije kupi ili aktivira Burina/shared web hosting paket sa Apache podrškom.

Ne važi za Vercel.

## Rute

- `https://carsystemirm.com/` prikazuje javnu "Sajt je u pripremi" stranicu.
- `https://carsystemirm.com/preview/` prikazuje internu preview verziju sajta.

## Static export

Shared hosting bez Node servera zahteva statički export u `out/`.

Trenutna Vercel varijanta koristi Next middleware i nije namenjena statičkom exportu. Ako se projekat kasnije vraća na shared hosting, treba posebno vratiti static export konfiguraciju i proveriti da middleware nije deo tog deployment-a.

## Basic Auth za preview

Primer fajla je:

```txt
deployment/shared-hosting/.htaccess.preview.example
```

Kada želiš da zaključaš samo preview deo na shared hostingu, ovaj primer se kasnije kopira u:

```txt
out/preview/.htaccess
```

U fajlu obavezno zameni:

```apache
/home/USERNAME/.htpasswd-carsystemrm
```

stvarnom apsolutnom putanjom na hostingu.

Pravi `.htpasswd` fajl mora biti van `public_html`, na primer:

```txt
/home/USERNAME/.htpasswd-carsystemrm
```

Stvarne lozinke se ne čuvaju u repo-u, ne ubacuju se u ZIP i ne uploaduju se u `public_html`.

Ako hosting panel ima opciju "Directory Privacy" ili "Password Protect Directories", bolje je koristiti tu opciju za folder `/preview`, jer panel sam generiše ispravnu `.htaccess` i `.htpasswd` konfiguraciju.
