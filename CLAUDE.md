# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Browser-based ROS1 rosbag analyzer. Parses `.bag` files entirely client-side using `@foxglove/rosbag` (WebAssembly). No backend required. Deployed to Cloudflare Pages.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Type-check with `tsc` then build with Vite
- `npm run lint` — ESLint (zero warnings allowed)
- `npm run test` — Run tests with Vitest
- `npm run test -- src/rosbagUtils.test.ts` — Run a single test file

## Architecture

Single-page React+TypeScript app using Vite and Tailwind CSS.

- **`src/App.tsx`** — Monolithic UI component handling file upload (drag & drop), filtering, statistics, tab navigation (rosout vs diagnostics), and CSV/JSON/TXT export.
- **`src/rosbagUtils.ts`** — Core logic: bag file parsing (`loadRosbagMessages`), message filtering (`filterMessages`, `filterDiagnostics`), and export functions. This is the main module to test.
- **`src/types.ts`** — Shared types (`RosoutMessage`, `DiagnosticStatusEntry`, `FilterConfig`) and severity/level constants with Tailwind color mappings.

## Key Domain Concepts

- **rosout messages** — ROS log messages with severity levels: DEBUG(1), INFO(2), WARN(4), ERROR(8), FATAL(16)
- **diagnostics** — Hardware/software diagnostic status from `/diagnostics_agg` topic with levels: OK(0), WARN(1), ERROR(2), STALE(3)
- Filtering supports OR/AND mode, node selection, severity filtering, keyword search, and regex patterns
