# Tapsifood Shop Listing Challenge

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Demo

if you want to try the app you can visit the **Demo Link:**

[https://tapsi-shop-listing-challeng.netlify.app](https://tapsi-shop-listing-challeng.netlify.app/)

## Folder Structure

**components:** shared components should be placed here.\
**hooks:** shared hooks that needed in entire components should be placed here.\
**typee:** hold your all global types and interfaces.\
**views:** seperated views off the app.

routes should be defined in `routes.tsx` file. base on your approach load modules (lazy or eager) for each route.
```
src/
├── assets/
├── components/
├── hooks/
├── types/
├── views/
│   └── ShoppingList/
├── App.tsx
├── routes.tsx
└── main.tsx
```
## Custommizing theme

`tailwindcss` was used to implement styling therefor in order to custommizing them you can extend `tailwind.config.js`. The `theme` section of your `tailwind.config.js` file is where you define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more detailes in [tailwindcss theme configs](https://tailwindcss.com/docs/theme)

```js
// tailwind.config.js

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        // put your custom theme object
    },
  },
  plugins: [
      // put your custom plagins
  ],
};

```
also [tailwindMerge](https://www.npmjs.com/package/tailwind-merge) was used to merge `className` and conditional styling.
## Deployment

We assumed two cases for build scenarios that developers might need:

**1- build and preview locally (ViteJS):** the case prepared for check everything you need on the production build on your machine. default `port` was setted on `8080` but you can modify it on `vite.config.ts` file:

```js
// vite.config.ts
export default defineConfig({
  // ... ,
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
});
```
after that run following command and when procces complete successfully, open the url that shown on your terminal:

```bash
  $ yarn preview
```

**2- build for production (Docker):** `nginx` and `node` images was used in `Dockerfile` in order to create production image.

```bash
  $ docker build -t <image-name> .
  $ docker run -p 3000:3000 <image-name>
```

default port is `3000` exposed by the container, but you can modify it in `Dockerfile` and `nginx.conf`.

also you can extend server config by `nginx.conf` file:

```
server {
    listen 3000;
    server_name localhost;

    location / {
        root /var/www/html;
        index index.html index.htm;
        try_files $uri $uri/ =404;
    }
}
```

