# Plant Operations Dashboard – React frontend

A static React + TypeScript (Vite) copy of the Blazor **PlantOperationsDashboard** frontend.
Every page renders from local mock data; there is no backend, authentication, saving or calculation.
The original Blazor project is untouched and lives separately.

## Setup

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # TypeScript, strict mode
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build
```

## Pages

| Route | Page folder | Blazor source |
|---|---|---|
| `/` | `pages/PlantDashboard` | `PlantControlDashboard/PlantDashboard.razor` (wall display, read-only) |
| `/qrm` | `pages/Qrm` | `Qrm/QrmPage.razor` |
| `/operator` | `pages/OperatorDashboard` | `EditPlantControlDashboardLimited/*` (limited operators section) |
| `/edit-plant-control-dashboard` | `pages/EditPlantDashboard` | `EditPlantControlDashboard/*` (full operators section + preparation drawer) |
| `/view-chief-operators-instructions` | `pages/ChiefInstructionsView` | `ChiefOperatorDashboard/ChiefDashboard.razor` (Seniors) |
| `/chief-operator-instructions` | `pages/ChiefInstructionsEdit` | `EditChiefOperatorDashboard/EditChiefDashboard.razor` (Chiefs) |
| `/Error`, any unknown URL | `pages/Error`, `pages/NotFound` | `Error.razor`, `Routes.razor` |

All pages are linked from the sidebar (open it with the dark tab on the left edge).

## Folder organisation

```
src/
  main.tsx                 entry point, loads global styles
  app/App.tsx              router provider only
  app/router.tsx           route table (same URLs as Blazor)
  layouts/MainLayout.tsx   sidebar + page area; closes the sidebar on navigation
  components/              UI shared by more than one page
    Sidebar/               sidebar, edge toggle, nav items
    Icon/                  Material icons used by MudBlazor
    Mud/                   look-alikes of the MudBlazor controls in use
                           (button, alert, chip, select, text field, pickers)
    EluentPreparationTable/  EP table used by three pages (+ its types)
  pages/<Page>/
    <Page>Page.tsx         page markup
    <Page>Page.module.css  page styles (CSS Module)
    mockData.ts            everything the page displays
    types.ts               types for that mock data
    components/            components used only by that page
  styles/variables.css     shared design values (shell + MudBlazor palette)
  styles/global.css        reset and base typography only
  hooks/usePageTitle.ts    sets the browser tab title
  utils/cx.ts              class-name joiner
```

Rules followed: a page never imports another page's files; shared pieces live in `components/`;
page styles are CSS Modules, so nothing leaks between pages.

CSS class names keep the Blazor kebab-case names (`.resin-title`) and are read in TSX as camelCase
(`styles.resinTitle`), configured in `vite.config.ts`. Blazor `::deep` rules became plain descendant
rules of `.dashboard-shell`.

## Editing mock data

Each page reads one object from its `mockData.ts`; the shape is defined in the same folder's `types.ts`.

- Change a value: edit the string in `mockData.ts` and save; the dev server reloads.
- Values are **display-ready**. Formatting (`2,400`, `94.77`) and derived figures (durations, SUM,
  weights, net drum weight, LTI days, eluent calculations) were produced by the Blazor backend and are
  not recalculated here, so update them by hand when you change their inputs.
- Add a row: copy an existing entry in the relevant array (e.g. `operations`, `storage`, QRM `tasks`).
- TypeScript checks the shape, so `npm run typecheck` reports a missing or misspelt field.

Examples: the wall dashboard header is `plantDashboardMock.header` in
`pages/PlantDashboard/mockData.ts`; the Seniors acknowledgement banner appears while
`isAcknowledged` is `false` in `pages/ChiefInstructionsView/mockData.ts`.

## What is interactive

Sidebar and preparation drawer open and close; the Team/Shift selects open; inputs, selects and the
Highlights editor accept typing locally. Buttons such as UPDATE, Capture, Acknowledge and the QRM status
circles intentionally do nothing and show no success message, because saving is not implemented.
