# JPI MCP Server

Model Context Protocol (MCP) server for [Just Plan It (JPI)](https://just-plan-it.com) API integration. This server enables AI assistants to interact with the JPI job scheduling and resource management system.

## Features

- **67 MCP Tools** covering all JPI API endpoints
- Full CRUD operations for all JPI entities
- Batch operations for efficient bulk updates
- Type-safe TypeScript implementation

## Installation

### Via npx (Recommended)

```bash
npx jpi-mcp
```

### Via npm (Global)

```bash
npm install -g jpi-mcp
jpi-mcp
```

### From Source

```bash
git clone https://github.com/your-username/jpi-mcp.git
cd jpi-mcp
npm install
npm run build
npm start
```

## Configuration

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `JPI_API_TOKEN` | Yes | - | Your JPI API token |
| `JPI_BASE_URL` | No | `https://api.just-plan-it.com` | JPI API base URL |

### MCP Client Configuration

Add to your MCP client configuration (e.g., Claude Desktop):

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

For local development:

```json
{
  "mcpServers": {
    "jpi": {
      "command": "node",
      "args": ["/path/to/jpi-mcp/dist/index.js"],
      "env": {
        "JPI_API_TOKEN": "your-api-token-here"
      }
    }
  }
}
```

## Available Tools (67 Total)

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

### Jobs (25 tools)
| Tool | Description |
|------|-------------|
| `jpi_list_jobs` | List all jobs |
| `jpi_create_job` | Create a new job |
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
| `jpi_create_tasks_cross_jobs` | Create tasks across jobs |
| `jpi_update_tasks_cross_jobs` | Update tasks across jobs |
| `jpi_delete_tasks_cross_jobs` | Delete tasks across jobs |

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
| `jpi_get_events` | Get events after a timestamp |
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

### List All Jobs

```
Use jpi_list_jobs to get all jobs
```

### Create a New Job

```
Use jpi_create_job with:
- name: "Production Order 001"
- dueDate: "2024-12-31T00:00:00Z"
- quantity: 100
```

### Update Job Status

```
Use jpi_update_job with:
- guid: "job-guid-here"
- status: "Released"
```

### Batch Operations

```
Use jpi_create_jobs_batch with an array of job objects to create multiple jobs at once
```

## API Reference

This MCP server wraps the JPI REST API v1. For detailed API documentation, refer to:
- [JPI API Documentation](https://api.just-plan-it.com/swagger)

## Error Handling

All tools return structured responses. On error:

```json
{
  "error": true,
  "status": 400,
  "statusText": "Bad Request",
  "message": "Error description",
  "body": { "details": "..." }
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

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
