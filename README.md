
# 🚀 Proyecto React con Vite + TypeScript

Este proyecto fue creado con [Vite](https://vitejs.dev/) y [React](https://react.dev/) usando TypeScript.  
Aquí encontrarás cómo iniciar el servidor, compilar el proyecto y entender la estructura básica.

---

## ⚙️ Requisitos previos

Asegúrate de tener instalado:

- Node.js (v16 o superior)
- npm o yarn

Verifica las versiones con:
```bash
node -v
npm -v
```

---

## 📦 Instalación

Clona el repositorio y entra al directorio del proyecto:
```bash
git clone https://github.com/GroupFormarte/Saf_front.git
cd saf_front
```

Instala las dependencias:
```bash
npm install
```
o
```bash
yarn
```

---

## 🚀 Servidor de desarrollo

Para levantar el entorno local de desarrollo:
```bash
npm run dev
```
Por defecto, se abrirá en:
```
http://localhost:5173
```

Si deseas cambiar el puerto, edita `vite.config.ts`:
```ts
export default defineConfig({
  server: {
    port: 3000,
  },
});
```

---

## 🏗️ Generar build de producción

Crea la versión optimizada para producción con:
```bash
npm run build
```

Esto generará una carpeta `dist/` lista para desplegar.

---

## 👀 Previsualizar la build

Prueba la build localmente con:
```bash
npm run preview
```
Esto levantará un servidor en modo producción (por defecto en el puerto `4173`).

---

## 🧩 Estructura del proyecto

```
📦 tu-proyecto/
├── public/               # Archivos estáticos públicos
├── src/
│   ├── assets/           # Imágenes, íconos, estilos
│   ├── components/       # Componentes reutilizables de React
│   ├── hooks/            # Hooks personalizados
│   ├── pages/            # Páginas principales de la app
│   └── utils/            # Funciones utilitarias
├── index.html            # Archivo HTML principal
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
├── vite.config.ts        # Configuración de Vite
└── README.md             # Este archivo
```

---

## 🧰 Scripts útiles

| Comando               | Descripción |
|------------------------|-------------|
| `npm run dev`         | Inicia el servidor de desarrollo |
| `npm run build`       | Genera la build para producción |
| `npm run preview`     | Sirve la build localmente |
| `npm run lint`        | Ejecuta el linter (si está configurado) |


---

## 💡 Consejos

- Usa variables de entorno en `.env` (`VITE_API_URL=https://api.tuapp.com`).
- Mantén componentes pequeños y reutilizables dentro de `/components`.
- Usa aliases en `tsconfig.json` para importar rutas más limpias.

