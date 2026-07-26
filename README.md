<br>

<div align="center">
  <img src="https://img.shields.io/badge/React-19-087EA4?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7-BD34FE?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-4.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/pnpm-11-F69220?style=flat-square&logo=pnpm&logoColor=white" alt="pnpm" />
</div>

<br>

<h1 align="center">
  Calculadora de Propinas
</h1>

<p align="center">
  <sub>
    Una app elegante para gestionar tu orden y calcular la propina en tiempo real.
    <br>
    Construida con React · TypeScript · Tailwind CSS · Vite
  </sub>
</p>

<br>

<p align="center">
  <picture>
    <img
      src="https://raw.githubusercontent.com/florencio123/Calculadora-de-propinas/main/.github/preview.png"
      alt="Vista previa"
      width="720"
      onerror="this.style.display='none'"
    />
  </picture>
</p>

<br>

---

## Caracteristicas

<div align="center">

|  |  |  |
|:---:|:---:|:---:|
| **Menu en cuadricula** | **Propina configurable** | **Calculos en tiempo real** |
| 12 platillos con imagenes y precios | 10% · 20% · 50% seleccionables con un clic | Subtotal, propina y total al instante |
| **Toast notifications** | **Orden con contador** | **Diseño responsive** |
| Confirmacion al guardar la orden | Badge circular con cantidad total de items | Adaptado a movil, tablet y escritorio |

</div>

---

## Stack

| Categoria | Tecnologia |
|:---|:---|
| Libreria | **React 19** |
| Lenguaje | **TypeScript** |
| Build | **Vite 7** |
| Estilos | **Tailwind CSS 4.3** |
| Linting | **ESLint 9** |
| Package Manager | **pnpm** |
| Animaciones | **CSS Keyframes** (fade-in, slide-up, bubble, condensation) |
| Fuentes | **DM Serif Display** + **Karla** (Google Fonts) |

---

## Paleta de colores

<div align="center">

| Color | Hex | Uso |
|:---:|:---:|:---|
| ![](https://img.shields.io/badge/-%23C67B5C-C67B5C?style=flat-square) | `#C67B5C` | **Primary** · header, botones, precios |
| ![](https://img.shields.io/badge/-%23A85A32-A85A32?style=flat-square) | `#A85A32` | **Accent** · header inferior |
| ![](https://img.shields.io/badge/-%23FBFAF6-FBFAF6?style=flat-square&logoColor=black) | `#FBFAF6` | **Background** · fondo general |
| ![](https://img.shields.io/badge/-%23FFFFFF-FFFFFF?style=flat-square&logoColor=black) | `#FFFFFF` | **Card** · fondo de tarjetas |
| ![](https://img.shields.io/badge/-%233D2E1C-3D2E1C?style=flat-square) | `#3D2E1C` | **Foreground** · texto principal |
| ![](https://img.shields.io/badge/-%235C6B3C-5C6B3C?style=flat-square) | `#5C6B3C` | **Success** · monto de propina |
| ![](https://img.shields.io/badge/-%23C5554A-C5554A?style=flat-square) | `#C5554A` | **Destructive** · boton eliminar |

</div>

---

## Estructura

```
src/
├── components/
│   ├── Header.tsx              # Banner con efecto de vaso y espuma
│   ├── MenuItem.tsx            # Tarjeta de cada platillo con imagen
│   ├── OrderContents.tsx       # Items en la orden actual
│   ├── OrderTotals.tsx         # Subtotal, propina, total y guardar
│   ├── TipPercentageForm.tsx   # Selector de porcentaje (cards)
│   └── Toast.tsx               # Notificacion de exito
├── data/
│   └── db.ts                   # Menu (12 platillos con imagenes Unsplash)
├── helpers/
│   └── index.ts                # Formateo de moneda (USD)
├── hooks/
│   └── useToast.ts             # Sistema de eventos para toasts
├── reducers/
│   └── order-reducer.ts        # useReducer con acciones tipadas
├── types/
│   └── index.ts                # Tipos MenuItem y OrderItem
├── App.tsx                     # Layout principal
├── main.tsx                    # Entry point
└── index.css                   # Tailwind + Thema
```

---

## Empezar

### Requisitos

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) >= 9

### Instalacion

```bash
git clone https://github.com/florencio123/Calculadora-de-propinas.git
cd Calculadora-de-propinas
pnpm install
```

### Desarrollo

```bash
pnpm dev      # http://localhost:5173
pnpm build    # Build de produccion
pnpm preview  # Previsualizar build
pnpm lint     # ESLint
```

---

<br>

<div align="center">
  <sub>MIT · Hecho con gusto</sub>
</div>

<br>
