# Static export deploy

Posle uspešnog build-a, sadržaj foldera `out` ide direktno u `public_html` za domen `carsystemirm.com`.

Važno: uploaduje se sadržaj foldera `out`, ne folder `out` kao spoljašnji omotač.

## Rute

- `https://carsystemirm.com/` prikazuje javnu “Sajt je u pripremi” stranicu.
- `https://carsystemirm.com/preview/` prikazuje internu preview verziju sajta.

## Basic Auth za preview

Primer fajla je:

```txt
deployment/.htaccess.preview.example
```

Kada želiš da zaključaš samo preview deo, ovaj primer se kasnije kopira u:

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

Ako hosting panel ima opciju “Directory Privacy” ili “Password Protect Directories”, bolje je koristiti tu opciju za folder `/preview`, jer panel sam generiše ispravnu `.htaccess` i `.htpasswd` konfiguraciju.
