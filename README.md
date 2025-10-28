# portafolio-snapshot
portafolio

## Variables de entorno

Este proyecto usa variables de entorno para personalizar qué repositorios de GitHub se muestran en la sección "Últimos Repositorios".

1. Copia el archivo de ejemplo:

	- Windows (PowerShell):

	  ```powershell
	  copy .env.example .env.local
	  ```

2. Edita `.env.local` y pon tu usuario de GitHub:

	- `NEXT_PUBLIC_GITHUB_USER=tu-usuario-github`
	- `NEXT_PUBLIC_GITHUB_PER_PAGE=6` (cantidad de repos a traer; opcional)

3. Reinicia el servidor de desarrollo si está corriendo:

	```powershell
	npm run dev
	```

Notas:
- Las variables que empiezan con `NEXT_PUBLIC_` son accesibles desde el cliente en Next.js.
- No añadas `.env.local` al control de versiones si contiene secretos; en este caso solo ponemos el usuario público y el número de repos y está bien ignorarlo. `.env.example` sirve como plantilla pública.

