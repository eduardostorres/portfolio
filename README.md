# Eduardo S. — Sitio personal

Landing page temporal («en construcción») para mi sitio web personal.
Minimalista, premium, accesible y lista para producción.

Construida con **Astro**, **Tailwind CSS v4** y **TypeScript**. Sin frameworks de UI,
sin librerías de runtime: solo HTML, CSS y un poco de JavaScript donde aporta valor.

---

## Stack

- **Astro 5** — generación estática, cero JS por defecto.
- **Tailwind CSS v4** — vía `@tailwindcss/vite` (configuración en CSS).
- **TypeScript** — estricto.
- **Space Mono** — autoalojada con `@fontsource` (sin peticiones a terceros).

## Requisitos

- **Node.js** ≥ 18.20.8
- **pnpm** (único gestor de paquetes soportado)

## Puesta en marcha

```bash
pnpm install
pnpm dev
```

Abre http://localhost:4321

## Producción

```bash
pnpm build      # genera el sitio estático en dist/
pnpm preview    # sirve la build de producción localmente
```

## Otros comandos

```bash
pnpm check      # diagnóstico de tipos y de Astro
pnpm add <pkg>      # añadir dependencia
pnpm add -D <pkg>   # añadir dependencia de desarrollo
```

---

## Características

- 🎨 **Tema claro / oscuro** con detección del sistema, persistencia en
  `localStorage` y sin parpadeo (FOUC) gracias a un script previo al pintado.
- 🌐 **i18n (español / inglés)** con cambio **instantáneo y sin recargar**,
  detección del idioma del navegador y persistencia. Arquitectura preparada
  para añadir más idiomas.
- ♿ **Accesibilidad**: HTML semántico, ARIA, foco visible, objetivos táctiles
  ≥ 44px y soporte de `prefers-reduced-motion`.
- 🔎 **SEO**: title, description, canonical, Open Graph y Twitter Cards.
- 📱 **Responsive** cuidado de móvil a pantallas ultraanchas.

## Estructura

```text
.
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   ├── favicon.svg        # monograma adaptable al tema
│   └── og.svg             # imagen para redes sociales
└── src/
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── ThemeToggle.astro
    │   ├── LanguageSwitcher.astro
    │   └── SocialLinks.astro
    ├── layouts/
    │   └── Layout.astro
    ├── pages/
    │   └── index.astro
    ├── i18n/
    │   ├── es.ts           # locale por defecto (fuente de verdad)
    │   ├── en.ts
    │   └── index.ts
    └── styles/
        └── global.css      # tokens de diseño + base de Tailwind
```

---

## Personalización

### Dominio

Ajusta `site` en [`astro.config.mjs`](./astro.config.mjs). Se usa para la URL
canónica y las metaetiquetas Open Graph / Twitter.

### Textos

Edita los diccionarios en [`src/i18n/`](./src/i18n/). **No hay textos
hardcodeados en los componentes**: todo se resuelve por clave (`data-i18n`).

### Añadir un idioma

1. Crea `src/i18n/<código>.ts` con un objeto que cumpla el tipo `Translation`.
2. Regístralo en `languages` y `translations` dentro de `src/i18n/index.ts`.

El selector, la detección y la persistencia se adaptan solos.

### Colores / tipografía

Los tokens de diseño (claro y oscuro) viven en
[`src/styles/global.css`](./src/styles/global.css).

### Imagen Open Graph

`public/og.svg` funciona en la mayoría de los validadores modernos. Para máxima
compatibilidad con plataformas antiguas, reemplázala por un `og.png`
(1200×630) y actualiza la referencia en `src/layouts/Layout.astro`.
