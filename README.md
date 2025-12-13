# JPI MCP Server

Model Context Protocol (MCP) server for [Just Plan It (JPI)](https://just-plan-it.com) API integration. This server enables AI assistants to interact with the JPI job scheduling and resource management system.

## Features

- **69 MCP Tools** covering all JPI API endpoints
- Full CRUD operations for all JPI entities
- Batch operations for efficient bulk updates
- Cross-job task operations
- Type-safe TypeScript implementation
- Comprehensive error handling

## Quick Start

### Prerequisites

- Node.js 18+
- A JPI API token (get from [Just Plan It](https://just-plan-it.com))

### Claude Code CLI

```bash
claude mcp add jpi \
  --transport stdio \
  --env JPI_API_TOKEN=your-api-token-here \
  --scope user \
  -- npx -y jpi-mcp
```

### Claude Desktop

Add to your Claude Desktop configuration file:

```json
{
  "mcpServers": {
    "jpi": {
      "command": "npx",
      "args": ["-y", "jpi-mcp"],
      "env": {
        "JPI_API_TOKEN": "your-api-token-here"
      }
    }
  }
}
```

### Direct CLI Usage

For other CLI tools or direct shell usage:

**Unix/macOS/Linux:**
```bash
JPI_API_TOKEN=your-token npx -y jpi-mcp
```

**Windows PowerShell:**
```powershell
$env:JPI_API_TOKEN="your-token"; npx -y jpi-mcp
```

**Windows CMD:**
```cmd
set JPI_API_TOKEN=your-token && npx -y jpi-mcp
```

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `JPI_API_TOKEN` | Yes | - | Your JPI API token |
| `JPI_BASE_URL` | No | `https://api.just-plan-it.com` | JPI API base URL |

## Architecture

```
jpi-mcp/
├── src/
│   ├── index.ts          # MCP server setup, 69 tool definitions, request handlers
│   ├── client.ts         # JpiClient class - HTTP client for JPI API v1
│   └── types/            # TypeScript types matching JPI API schemas
│       ├── index.ts      # Re-exports all types
│       ├── enums.ts      # OrderStatus, Strategy, TaskStatus, EventType, etc.
│       ├── schemas.ts    # Common schemas (Identifier, HyperLink, ResourceGroupConstraint)
│       ├── jobs.ts       # Job, Task, JobComponentReference types
│       ├── components.ts # Component, ComponentTask types
│       ├── templates.ts  # JobTemplate, TemplateTask, TemplateComponentReference types
│       ├── resources.ts  # Resource, ResourceGroup, ResourceCategory types
│       ├── settings.ts   # Application settings types
│       └── events.ts     # JPI event/change log types
└── package.json
```

## Key Concepts

### Jobs & Tasks
- **Job**: A production order or work order containing one or more tasks
- **Task**: A single operation within a job (e.g., cutting, welding, painting)
- **Predecessors**: Tasks that must complete before a task can start
- **TaskConnections**: Linked tasks for scheduling coordination

### Components & References
- **Component**: A reusable template of tasks that can be referenced by jobs
- **JCR (Job Component Reference)**: Links a component to a job, creating tasks automatically
- **TCR (Template Component Reference)**: Links a component to a job template

### Resource Hierarchy
```
Resource Categories
    └── Resource Groups
            └── Resources (machines, workers, etc.)
```

### Time Units
**IMPORTANT:** All time fields in the JPI API are in **SECONDS**, not minutes.

| Field | Unit | Example |
|-------|------|---------|
| `ProductionTimePerUnit` | seconds | `3600` = 1 hour |
| `SetupTime` | seconds | `900` = 15 minutes |
| `TeardownTime` | seconds | `600` = 10 minutes |
| `TransferTime` | seconds | `300` = 5 minutes |

### Field Naming Convention
All API fields use **PascalCase** to match the JPI API exactly (e.g., `DueDate`, `TaskNo`, `ResourceGroupConstraints`).

## Available Tools (69 Total)

### Helper (1 tool)
| Tool | Description |
|------|-------------|
| `jpi_api_info` | Get API information and available endpoints |

### Components (9 tools)
| Tool | Description |
|------|-------------|
| `jpi_list_components` | List all components |
| `jpi_create_component` | Create a new component |
| `jpi_get_component` | Get a component by GUID |
| `jpi_update_component` | Update a component |
| `jpi_delete_component` | Delete a component |
| `jpi_get_component_task` | Get a component task |
| `jpi_add_component_task` | Add a task to a component |
| `jpi_update_component_task` | Update a component task |
| `jpi_delete_component_task` | Delete a component task |

### Jobs (27 tools)
| Tool | Description |
|------|-------------|
| `jpi_list_jobs` | List all jobs |
| `jpi_list_jobs_summary` | List jobs without task details (~80% smaller) |
| `jpi_list_jobs_at_risk` | List jobs at risk of missing due dates |
| `jpi_create_job` | Create a new job with tasks |
| `jpi_get_job` | Get a job by GUID |
| `jpi_update_job` | Update a job |
| `jpi_delete_job` | Delete a job |
| `jpi_get_task` | Get a job task |
| `jpi_add_task` | Add a task to a job |
| `jpi_update_task` | Update a job task |
| `jpi_delete_task` | Delete a job task |
| `jpi_get_jcr` | Get a Job Component Reference |
| `jpi_add_jcr` | Add a JCR to a job |
| `jpi_update_jcr` | Update a JCR |
| `jpi_delete_jcr` | Delete a JCR |
| `jpi_create_jobs_batch` | Create multiple jobs |
| `jpi_update_jobs_batch` | Update multiple jobs |
| `jpi_delete_jobs_batch` | Delete multiple jobs |
| `jpi_add_tasks_batch` | Add multiple tasks to a job |
| `jpi_update_tasks_batch` | Update multiple tasks |
| `jpi_delete_tasks_batch` | Delete multiple tasks |
| `jpi_add_jcrs_batch` | Add multiple JCRs |
| `jpi_update_jcrs_batch` | Update multiple JCRs |
| `jpi_delete_jcrs_batch` | Delete multiple JCRs |
| `jpi_create_tasks_cross_jobs` | Create tasks across multiple jobs |
| `jpi_update_tasks_cross_jobs` | Update tasks across multiple jobs |
| `jpi_delete_tasks_cross_jobs` | Delete tasks across multiple jobs |

### Job Templates (13 tools)
| Tool | Description |
|------|-------------|
| `jpi_list_templates` | List all templates |
| `jpi_create_template` | Create a new template |
| `jpi_get_template` | Get a template by GUID |
| `jpi_update_template` | Update a template |
| `jpi_delete_template` | Delete a template |
| `jpi_get_template_task` | Get a template task |
| `jpi_add_template_task` | Add a task to a template |
| `jpi_update_template_task` | Update a template task |
| `jpi_delete_template_task` | Delete a template task |
| `jpi_get_tcr` | Get a Template Component Reference |
| `jpi_add_tcr` | Add a TCR to a template |
| `jpi_update_tcr` | Update a TCR |
| `jpi_delete_tcr` | Delete a TCR |

### JPI Events (2 tools)
| Tool | Description |
|------|-------------|
| `jpi_get_events` | Get events (change log) after a timestamp |
| `jpi_get_events_filtered` | Get events filtered by type |

### Resource Categories (5 tools)
| Tool | Description |
|------|-------------|
| `jpi_list_resource_categories` | List all categories |
| `jpi_create_resource_category` | Create a category |
| `jpi_get_resource_category` | Get a category |
| `jpi_update_resource_category` | Update a category |
| `jpi_delete_resource_category` | Delete a category |

### Resource Groups (5 tools)
| Tool | Description |
|------|-------------|
| `jpi_list_resource_groups` | List all groups |
| `jpi_create_resource_group` | Create a group |
| `jpi_get_resource_group` | Get a group |
| `jpi_update_resource_group` | Update a group |
| `jpi_delete_resource_group` | Delete a group |

### Resources (5 tools)
| Tool | Description |
|------|-------------|
| `jpi_list_resources` | List all resources |
| `jpi_create_resource` | Create a resource |
| `jpi_get_resource` | Get a resource |
| `jpi_update_resource` | Update a resource |
| `jpi_delete_resource` | Delete a resource |

### Settings (2 tools)
| Tool | Description |
|------|-------------|
| `jpi_get_settings` | Get application settings |
| `jpi_update_settings` | Update settings |

## Usage Examples

### Create a Job with Tasks

```json
{
  "Name": "Production Order 001",
  "JobNo": "PO-001",
  "DueDate": "2024-12-31T17:00:00",
  "ReleaseDate": "2024-12-01T08:00:00",
  "Strategy": "Asap",
  "OrderStatus": "Released",
  "Customer": "ACME Corp",
  "Quantity": 100,
  "Tasks": [
    {
      "TaskNo": "T010",
      "Name": "Laser Cutting",
      "ProductionTimePerUnit": 60,
      "SetupTime": 900,
      "ResourceGroupConstraints": [
        {
          "ResourceGroup": "resource-group-guid-here"
        }
      ]
    },
    {
      "TaskNo": "T020",
      "Name": "Welding",
      "ProductionTimePerUnit": 120,
      "PredecessorTaskNos": ["T010"],
      "ResourceGroupConstraints": [
        {
          "ResourceGroup": "welding-group-guid"
        }
      ]
    }
  ]
}
```

### Update Task Status

```json
{
  "jobGuid": "job-guid-here",
  "taskGuid": "task-guid-here",
  "TaskStatus": "Started"
}
```

### Batch Create Jobs

```json
{
  "jobs": [
    { "Name": "Job 1", "Tasks": [...] },
    { "Name": "Job 2", "Tasks": [...] },
    { "Name": "Job 3", "Tasks": [...] }
  ]
}
```

## Enums & Types

### OrderStatus
| Value | Description |
|-------|-------------|
| `Quoted` | Job is quoted but not ordered |
| `Ordered` | Job is ordered but not released |
| `Released` | Job is released for production |
| `Standby` | Job is on standby |

### Strategy
| Value | Description |
|-------|-------------|
| `Asap` | Schedule as soon as possible |
| `Jit` | Just-in-time scheduling |
| `ASAP_PLUS` | ASAP with buffer |
| `JIT_PLUS` | JIT with buffer |

### TaskStatus
| Value | Description |
|-------|-------------|
| `Planned` | Task is planned |
| `Started` | Task has started |
| `Finished` | Task is complete |
| `None` | No status |
| `Standby` | Task is on standby |

## Error Handling

All tools return structured error responses:

```json
{
  "error": true,
  "status": 400,
  "statusText": "Bad Request",
  "message": "JPI API Error: 400 Bad Request",
  "body": {
    "details": "Validation failed for field 'Name'"
  }
}
```

## Development

### Build

```bash
npm run build
```

### Watch Mode

```bash
npm run dev
```

### Run Locally

```bash
JPI_API_TOKEN=your-token npm start
```

### From Source

```bash
git clone https://github.com/anthropics/jpi-mcp.git
cd jpi-mcp
npm install
npm run build
npm start
```

## API Reference

This MCP server wraps the JPI REST API v1. For detailed API documentation:
- [JPI API Swagger](https://api.just-plan-it.com/swagger)
- [Just Plan It Website](https://just-plan-it.com)

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
