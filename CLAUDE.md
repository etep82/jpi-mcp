# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JPI MCP Server is a Model Context Protocol (MCP) server that provides 67 tools for interacting with the Just Plan It (JPI) job scheduling and resource management API. It enables AI assistants to manage jobs, tasks, resources, templates, and components in the JPI system.

## Commands

```bash
# Build
npm run build

# Development (watch mode)
npm run dev

# Run locally (requires JPI_API_TOKEN)
JPI_API_TOKEN=your-token npm start
```

## Architecture

```
src/
├── index.ts       # MCP server setup, tool definitions (67 tools), and request handlers
├── client.ts      # JpiClient class - HTTP client for JPI API v1
└── types/         # TypeScript types matching JPI API schemas
    ├── index.ts   # Re-exports all types
    ├── enums.ts   # OrderStatus, Strategy, TaskStatus, EventType, etc.
    ├── schemas.ts # Common schemas (Identifier, HyperLink, etc.)
    ├── jobs.ts    # GetJob, PostJob, PatchJob, GetTask, PostTask, etc.
    ├── components.ts
    ├── templates.ts
    ├── resources.ts
    ├── settings.ts
    └── events.ts
```

### Key Patterns

- **Tool naming**: All tools prefixed with `jpi_` (e.g., `jpi_list_jobs`, `jpi_create_job`)
- **API pattern**: GET/POST/PATCH/DELETE for CRUD; batch endpoints use `/batch` suffix
- **Type naming**: `Get*` for responses, `Post*` for create, `Patch*` for update
- **Time units**: All time fields in API responses are in SECONDS (not minutes)
- **Entity references**: JCR = Job Component Reference, TCR = Template Component Reference

### JpiClient

The `JpiClient` class in `client.ts` wraps all JPI API endpoints with typed methods. It handles:
- Bearer token authentication
- Error handling via `JpiApiError` class
- JSON serialization/deserialization

### Tool Categories

| Category | Tools | Endpoints |
|----------|-------|-----------|
| Components | 9 | CRUD + tasks |
| Jobs | 25 | CRUD + tasks + JCRs + batch |
| Templates | 13 | CRUD + tasks + TCRs |
| Events | 2 | Change tracking |
| Resources | 5 | CRUD |
| Resource Groups | 5 | CRUD |
| Resource Categories | 5 | CRUD |
| Settings | 2 | Get/Update |

## Configuration

Environment variables:
- `JPI_API_TOKEN` (required): JPI API bearer token
- `JPI_BASE_URL` (optional): Defaults to `https://api.just-plan-it.com`
