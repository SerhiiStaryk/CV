# CV

A responsive, print-friendly CV and portfolio website built with React,
TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Features

- Responsive layout for desktop and mobile
- Print-friendly presentation
- CV data stored separately in one JSON file
- Reusable React components for every CV section
- Local font assets through Fontsource
- Type-safe access to CV data

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- shadcn/ui and Base UI
- Inter variable font
- Lucide icons

## Getting started

Requirements:

- Node.js 20 or newer
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite prints the local URL in the terminal, usually
`http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run the TypeScript build and create a production bundle |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Updating CV content

Edit the profile sections in `src/entities/model/db.json`:

- `cv.mainInfo` - name and contact details
- `cv.summary` - professional summary
- `cv.technicalSkills` - technical skills
- `cv.workExperience` - employment history
- `cv.notableProjects` - selected projects
- `cv.education` - education
- `cv.additional` - additional information
- `cv.socials` - social and professional profiles

Components retrieve this data through the typed helpers in `src/entities/api/cv.ts`.
The API module currently reads the local JSON file, so no backend or
environment variables are required.

## Project structure

```text
src/
├── app/
│   ├── App.tsx           # Application composition
│   ├── index.css         # Theme and global styles
│   └── main.tsx          # Application entry point
├── components/
│   └── */               # CV section components
├── entities/
│   ├── model/db.json     # CV content
│   └── api/cv.ts         # Typed accessors for CV data
├── pages/
│   └── CvPage.tsx        # CV page composition
├── shared/
│   ├── lib/              # Reusable utilities
│   └── ui/               # Shared UI primitives and layout components
```

## Production build

Create an optimized build in `dist/`:

```bash
npm run build
```

Preview the result:

```bash
npm run preview
```