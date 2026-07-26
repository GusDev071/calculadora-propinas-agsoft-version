<p align="center">
  <br>
  <samp>
    &#x1F4B0;
  </samp>
  <br>
  <br>
</p>

<h1 align="center">Calculadora de Propinas y Consumo</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/pnpm-11-F69220?style=flat&logo=pnpm" alt="pnpm" />
</p>

<p align="center">
  <samp>
    Una aplicación web moderna para calcular el consumo y la propina de tu orden en un restaurante.
    <br>
    Agrega platillos, selecciona el porcentaje de propina y obtén el total al instante.
  </samp>
</p>

<br>

---

## &#x2728; Características

- **Menú interactivo** — 12 platillos y bebidas listos para agregar a tu orden con un solo clic
- **Cantidades inteligentes** — Al seleccionar un platillo ya existente, se incrementa automáticamente la cantidad
- **Propina configurable** — Elige entre 10%, 20% o 50% de propina
- **Cálculos en tiempo real** — Subtotal, propina y total se actualizan al instante
- **Gestión de orden** — Elimina items individuales o guarda la orden completa
- **Diseño responsive** — Adaptado para escritorio y dispositivos móviles
- **Tipado estricto** — 100% TypeScript para una experiencia de desarrollo robusta

---

## &#x1F6E0; Stack Tecnológico

| Categoría | Tecnología |
|:---|:---|
| Librería | React 19 |
| Lenguaje | TypeScript |
| Bundler | Vite 7 |
| Estilos | Tailwind CSS 4 |
| Linting | ESLint 9 |
| Package Manager | pnpm |

---

## &#x1F4E6; Estructura del Proyecto

```
src/
├── components/
│   ├── MenuItem.tsx          # Botón de cada platillo del menú
│   ├── OrderContents.tsx     # Lista de items en la orden actual
│   ├── OrderTotals.tsx       # Cálculo de subtotal, propina y total
│   └── TipPercentageForm.tsx # Selector de porcentaje de propina
├── data/
│   └── db.ts                 # Datos del menú (12 platillos y bebidas)
├── helpers/
│   └── index.ts              # Utilidad de formato de moneda (USD)
├── hooks/
│   └── useOrder.ts           # Hook personalizado con la lógica de la orden
├── types/
│   └── index.ts              # Tipos MenuItem y OrderItem
├── App.tsx                   # Componente principal y layout
├── main.tsx                  # Punto de entrada de React
└── index.css                 # Import de Tailwind CSS
```

---

## &#x1F6A9; Requisitos Previos

- [Node.js](https://nodejs.org/) `>=18`
- [pnpm](https://pnpm.io/) `>=9`

```bash
# Instalar pnpm si no lo tienes
npm install -g pnpm
```

---

## &#x1F680; Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/calculadora-propinas.git
cd calculadora-propinas

# Instalar dependencias
pnpm install
```

---

## &#x1F3AE; Uso

```bash
# Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Scripts Disponibles

| Comando | Descripción |
|:---|:---|
| `pnpm dev` | Inicia el servidor de desarrollo con HMR |
| `pnpm build` | Compila TypeScript y genera el build de producción |
| `pnpm preview` | Previsualiza el build de producción localmente |
| `pnpm lint` | Ejecuta ESLint para verificar la calidad del código |

---

## &#x1F4DD; Licencia

MIT — Creado con &#x1F49A; para aprender React + TypeScript.
# calculadora-propinas-agsoft-version
