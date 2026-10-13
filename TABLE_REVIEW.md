# Table code review and refactor

## Scope

Reviewed all 48 original files across the six page-owned `tables/` folders, including components, styles, types, helpers, their callers, and mock data. The resulting folders contain 46 files. No runtime dependencies or generic table framework were added.

## Findings and changes

| Area | Finding | Simplification |
| --- | --- | --- |
| Chiefs, Seniors, preparation drawer | `TankRow` required render callbacks and keyed fragments to produce simple fixed rows; `CalculatedCell` only wrapped one styled cell. | Replaced these helpers with direct, typed JSX rows and cells. Retained `NumberCell` and `PreparationTable`, which remove meaningful repeated input and preparation markup. |
| Operator and edit analysis tables | Each `textTone.ts` file supplied one tiny mapping to one consumer. | Moved the typed mapping into its own page's `AnalysisResultTable.tsx`; removed both helper files. |
| Operator front-end table | `FrontEndValue` was a single-use presentation helper. | Inlined its small markup where used. |
| Wall dashboard front-end table | Pump and non-pump branches duplicated the row and value markup. | Used one row structure with explicit conditions for the pump label, cell styling, and column span. |
| Three dashboard table stylesheets | Earlier resin overflow, whitespace and input sizing declarations were overridden; sample-card minimum heights were repeated. | Removed superseded declarations without moving the final winning rules. Corrected comments to point to `tableConstants.css`. |
| QRM geometry | `string \| 'full' \| null` redundantly included a string literal already covered by `string`. | Simplified the return type to `string \| null`; geometry and drawing are unchanged. |
| Documentation | README still listed removed helpers and described a 7px radius, while the actual constant was 5px. | Updated the helper list and documented the existing 5px radius. |

The remaining table helpers have a concrete purpose: reusable value/unit presentation, numeric input markup, sampler cell variants, picker cells, drum cell modes, and focused pump-row markup. No unnecessary state, effects, memoization, callbacks, unused TypeScript declarations, or cross-page table imports were found. Page-specific table implementations remain independent.

## Preservation

All non-table source files are byte-for-byte unchanged, including mock data, page layouts, navigation, shared controls, UpdateButton, and `tableConstants.css`. The existing 2px borders and 5px rounded frame corners remain. The three eluent pages retain their individual sizing and input focus styles. No saving, calculations, color-selection behavior, or new interactions were added to this static mock frontend.

## Verification

- `npm ci --ignore-scripts --no-audit --no-fund`: passed using the supplied lockfile.
- `npm run typecheck`: passed with the existing strict settings, including unused-local and unused-parameter checks.
- `npm run build`: passed (138 modules transformed).
- Lint: no lint script, linter dependency, or lint configuration exists in the supplied project.
- Existing tests: no test script or test files exist in the supplied project.
- Temporary browser comparisons covered all six routes at 1440px and 768px widths, including the open preparation drawer. Normalized table markup, computed styles and geometry matched the unmodified archive. All 14 before/after screenshot pairs were pixel-identical; rendered screenshots were also visually inspected.
- Editable fields, native selects, drawer Update behavior, and QRM's intentionally static status button were exercised in both versions. Desktop drawer close/reopen retained local edits. The narrow drawer close control has the pre-existing limitation described below.
- QRM arc outputs were compared against the original for -10, 0, 12.5, 25, 50, 75, 99.9, 100 and 110 percent; all matched, as did the upright crosshair coordinates.
- Browser checks use Chromium and installed fallback fonts, with remote webfonts blocked equally for deterministic comparison. Other browsers and the external fonts were not independently verified.

Temporary browsers, dependencies, screenshots, and comparison scripts are not included in this source archive.

## Remaining concerns (present before this refactor)

- At a 768px viewport, opening the fixed-width preparation drawer puts its close toggle outside the viewport. The same issue occurs in the original archive.
- Some dashboard headings, analysis values and compact drum/lab cells clip or crowd their contents at the tested widths. These are existing layout constraints, preserved to avoid redesigning the pages.
- Inputs and Update buttons still use the existing static mock behavior; there is no persistence or backend calculation.
