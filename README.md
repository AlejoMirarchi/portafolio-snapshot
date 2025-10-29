# 🚀 portafolio-snapshot

![Portafolio Snapshot Banner](https://user-images.githubusercontent.com/your-banner.png) <!-- Puedes poner una imagen aquí si tienes -->

Un portafolio moderno y personalizable construido con **TypeScript** y **Next.js**. Muestra tus proyectos más recientes de GitHub de manera dinámica y elegante.

---

## ✨ Características

- Presenta tus repositorios de GitHub automáticamente.
- Configuración sencilla mediante variables de entorno.
- Diseño elegante y responsive.
- Hecho principalmente en **TypeScript** (96.4%), con detalles en **CSS** y **JavaScript**.

---

## 🛠️ Instalación

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/AlejoMirarchi/portafolio-snapshot.git
    cd portafolio-snapshot
    ```

2. **Instala las dependencias:**
    ```bash
    npm install
    ```

3. **Configura las variables de entorno:**

    Copia el archivo de ejemplo y personaliza tu usuario de GitHub.

    - Windows (PowerShell):
      ```powershell
      copy .env.example .env.local
      ```
    - Linux/Mac:
      ```bash
      cp .env.example .env.local
      ```

    Edita `.env.local` y pon tu usuario de GitHub:
    ```
    NEXT_PUBLIC_GITHUB_USER=tu-usuario-github
    NEXT_PUBLIC_GITHUB_PER_PAGE=6 # Opcional: cantidad de repos a mostrar
    ```

4. **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

---

## 🌐 Demo

¿Tienes una demo online? [¡Pon el enlace aquí!](https://tu-demo.com)

---

## ⚙️ Variables de entorno

Las variables que empiezan con `NEXT_PUBLIC_` son accesibles desde el cliente en Next.js.

- **No añadas `.env.local` al control de versiones si contiene datos sensibles** (en este caso solo contiene datos públicos).
- El archivo `.env.example` sirve como plantilla para compartir la configuración básica.

---

## 📦 Tecnologías

- **TypeScript**
- **Next.js**
- **CSS**
- **JavaScript**

---

## 🖼️ Ejemplo visual

<!-- Puedes añadir una captura de pantalla del portafolio aquí -->
![Screenshot](https://user-images.githubusercontent.com/your-screenshot.png)

---

## 💡 Autor

**Alejo Mirarchi**  
[GitHub](https://github.com/AlejoMirarchi) | [LinkedIn](https://linkedin.com/in/alejomirarchi) <!-- Añade tus enlaces -->

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

> _¿Te gustó este proyecto? ¡Dale una estrella! ⭐_
