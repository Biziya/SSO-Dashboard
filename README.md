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
    UpdateButton/          the one blue style for every Update button
  pages/<Page>/
    <Page>Page.tsx         page layout: composes components and tables
    <Page>Page.module.css  layout and non-table styles (CSS Module)
    mockData.ts            everything the page displays
    types.ts               page data shape (imports row types from tables/)
    components/            non-table components used only by that page
    tables/                that page's tables, kept apart for frequent edits:
      <Name>Table.tsx        one component per table
      <...>.module.css       table styles for that page
      types.ts               row types the tables receive as props
      helpers (MetricValue, ValueInput, textTone, progressArc) where needed
  styles/variables.css     shared design values (shell, MudBlazor palette)
  styles/tableConstants.css  table line width, line colour and corner radius
  styles/global.css        reset and base typography only
  hooks/usePageTitle.ts    sets the browser tab title
  utils/cx.ts              class-name joiner
```

Rules followed: a page never imports another page's files; shared pieces live in `components/`;
page styles are CSS Modules, so nothing leaks between pages. Tables are never shared between pages:
the eluent preparation table has its own copy in the Seniors page, the Chiefs page and the edit
dashboard drawer, so each can change without affecting the others.

### Table styling

Every table sits in a frame (`.table-frame`, or `.note-frame` for the eluent Note) that draws the
outline with the shared `--table-radius` (7px) and clips header backgrounds to the rounded corners.
All table lines (outline, header separators, inner grid, and the bordered Note areas) use
`--table-border`, built from `--table-border-width` (2px) and `--table-border-color` (#000).
Tables use `border-collapse: collapse` with `border-style: hidden`, so their own edge borders are hidden
and only the frame's outline shows; inner grid lines stay single. Frames that need it scroll sideways
(`overflow-x: auto`). These values live in one file, `styles/tableConstants.css`; change them there
and every table on every page follows. No table stylesheet hardcodes a line width, colour or radius.

### Update buttons

Every Update button (dashboard UPDATE, eluent pages' Update, drawer's Update preparation) is the shared
`components/UpdateButton`, so they share one blue style, including hover, pressed, keyboard-focus and
disabled states.

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

Table rows live in the same `mockData.ts`; their types are in the page's `tables/types.ts`.

Examples: the wall dashboard header is `plantDashboardMock.header` in
`pages/PlantDashboard/mockData.ts`; the Seniors acknowledgement banner appears while
`isAcknowledged` is `false` in `pages/ChiefInstructionsView/mockData.ts`.

## What is interactive

Sidebar and preparation drawer open and close; the Team/Shift selects open; inputs, selects and the
Highlights editor accept typing locally. Buttons such as UPDATE, Acknowledge and the QRM status circles
intentionally do nothing and show no success message, because saving is not implemented.

**View at** (wall dashboard header): choosing a day and time in the popup only changes a draft. The
field changes when **OK** is pressed; Cancel, Escape or clicking outside keeps the previous value, and
reopening shows the confirmed value. **Live** clears it. Loading a past snapshot needs the backend, so the
dashboard content does not change. The Capture button is hidden.

**QRM status circles** are four upright quarters (25% each). The fill starts in the bottom-left quarter
and runs clockwise: 25% bottom-left, 50% adds top-left, 75% adds top-right, 100% fills all four; values
in between fill the next quarter proportionally. The label stays upright and centred.
