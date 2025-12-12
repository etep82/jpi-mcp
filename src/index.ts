#!/usr/bin/env node
/**
 * JPI MCP Server
 * Model Context Protocol server for Just Plan It API integration
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool
} from "@modelcontextprotocol/sdk/types.js";
import { JpiClient, JpiApiError } from './client.js';

// Environment configuration
const JPI_API_TOKEN = process.env.JPI_API_TOKEN;
const JPI_BASE_URL = process.env.JPI_BASE_URL || 'https://api.just-plan-it.com';

if (!JPI_API_TOKEN) {
  console.error('Error: JPI_API_TOKEN environment variable is required');
  process.exit(1);
}

// Initialize JPI client
const client = new JpiClient({
  baseUrl: JPI_BASE_URL,
  token: JPI_API_TOKEN
});

// ============================================
// Tool Definitions (67 tools)
// ============================================

const tools: Tool[] = [
  // ========== Helper Tool (1) ==========
  {
    name: 'jpi_api_info',
    description: 'Get information about the JPI API and available endpoints. Use this to understand what operations are available.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },

  // ========== Components (9 tools) ==========
  {
    name: 'jpi_list_components',
    description: 'List all components in the JPI system. Components are reusable building blocks that can be referenced by jobs.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'jpi_create_component',
    description: 'Create a new component with tasks.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Component name' },
        tasks: {
          type: 'array',
          description: 'Array of component tasks',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              duration: { type: 'number' },
              resourceGroup: { type: 'string' }
            }
          }
        }
      },
      required: ['name']
    }
  },
  {
    name: 'jpi_get_component',
    description: 'Get a specific component by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Component GUID' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_update_component',
    description: 'Update an existing component.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Component GUID' },
        name: { type: 'string', description: 'New component name' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_delete_component',
    description: 'Delete a component by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Component GUID' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_get_component_task',
    description: 'Get a specific task within a component.',
    inputSchema: {
      type: 'object',
      properties: {
        componentGuid: { type: 'string', description: 'Component GUID' },
        taskGuid: { type: 'string', description: 'Task GUID' }
      },
      required: ['componentGuid', 'taskGuid']
    }
  },
  {
    name: 'jpi_add_component_task',
    description: 'Add a new task to a component.',
    inputSchema: {
      type: 'object',
      properties: {
        componentGuid: { type: 'string', description: 'Component GUID' },
        name: { type: 'string', description: 'Task name' },
        duration: { type: 'number', description: 'Task duration in minutes' },
        resourceGroup: { type: 'string', description: 'Resource group GUID' }
      },
      required: ['componentGuid', 'name']
    }
  },
  {
    name: 'jpi_update_component_task',
    description: 'Update a task within a component.',
    inputSchema: {
      type: 'object',
      properties: {
        componentGuid: { type: 'string', description: 'Component GUID' },
        taskGuid: { type: 'string', description: 'Task GUID' },
        name: { type: 'string', description: 'New task name' },
        duration: { type: 'number', description: 'New duration' }
      },
      required: ['componentGuid', 'taskGuid']
    }
  },
  {
    name: 'jpi_delete_component_task',
    description: 'Delete a task from a component.',
    inputSchema: {
      type: 'object',
      properties: {
        componentGuid: { type: 'string', description: 'Component GUID' },
        taskGuid: { type: 'string', description: 'Task GUID' }
      },
      required: ['componentGuid', 'taskGuid']
    }
  },

  // ========== Jobs (25 tools) ==========
  {
    name: 'jpi_list_jobs',
    description: 'List all jobs in the JPI system. Jobs represent work orders or production orders.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'jpi_create_job',
    description: 'Create a new job with tasks and scheduling information.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Job name' },
        externalId: { type: 'string', description: 'External reference ID' },
        dueDate: { type: 'string', description: 'Due date (ISO 8601)' },
        releaseDate: { type: 'string', description: 'Release date (ISO 8601)' },
        quantity: { type: 'number', description: 'Quantity to produce' },
        tasks: { type: 'array', description: 'Array of job tasks' }
      },
      required: ['name']
    }
  },
  {
    name: 'jpi_get_job',
    description: 'Get a specific job by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Job GUID' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_update_job',
    description: 'Update an existing job.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Job GUID' },
        name: { type: 'string', description: 'New job name' },
        dueDate: { type: 'string', description: 'New due date' },
        status: { type: 'string', description: 'Job status' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_delete_job',
    description: 'Delete a job by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Job GUID' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_get_task',
    description: 'Get a specific task within a job.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        taskGuid: { type: 'string', description: 'Task GUID' }
      },
      required: ['jobGuid', 'taskGuid']
    }
  },
  {
    name: 'jpi_add_task',
    description: 'Add a new task to a job.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        name: { type: 'string', description: 'Task name' },
        duration: { type: 'number', description: 'Task duration in minutes' },
        resourceGroup: { type: 'string', description: 'Resource group GUID' }
      },
      required: ['jobGuid', 'name']
    }
  },
  {
    name: 'jpi_update_task',
    description: 'Update a task within a job.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        taskGuid: { type: 'string', description: 'Task GUID' },
        name: { type: 'string', description: 'New task name' },
        duration: { type: 'number', description: 'New duration' },
        status: { type: 'string', description: 'Task status' }
      },
      required: ['jobGuid', 'taskGuid']
    }
  },
  {
    name: 'jpi_delete_task',
    description: 'Delete a task from a job.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        taskGuid: { type: 'string', description: 'Task GUID' }
      },
      required: ['jobGuid', 'taskGuid']
    }
  },
  {
    name: 'jpi_get_jcr',
    description: 'Get a Job Component Reference (JCR) - a reference to a component used in a job.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        jcrGuid: { type: 'string', description: 'JCR GUID' }
      },
      required: ['jobGuid', 'jcrGuid']
    }
  },
  {
    name: 'jpi_add_jcr',
    description: 'Add a Job Component Reference to a job.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        componentGuid: { type: 'string', description: 'Component GUID to reference' },
        quantity: { type: 'number', description: 'Quantity' }
      },
      required: ['jobGuid', 'componentGuid']
    }
  },
  {
    name: 'jpi_update_jcr',
    description: 'Update a Job Component Reference.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        jcrGuid: { type: 'string', description: 'JCR GUID' },
        quantity: { type: 'number', description: 'New quantity' }
      },
      required: ['jobGuid', 'jcrGuid']
    }
  },
  {
    name: 'jpi_delete_jcr',
    description: 'Delete a Job Component Reference.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        jcrGuid: { type: 'string', description: 'JCR GUID' }
      },
      required: ['jobGuid', 'jcrGuid']
    }
  },
  {
    name: 'jpi_create_jobs_batch',
    description: 'Create multiple jobs in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        jobs: { type: 'array', description: 'Array of job objects to create' }
      },
      required: ['jobs']
    }
  },
  {
    name: 'jpi_update_jobs_batch',
    description: 'Update multiple jobs in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        jobs: { type: 'array', description: 'Array of job objects with guid and fields to update' }
      },
      required: ['jobs']
    }
  },
  {
    name: 'jpi_delete_jobs_batch',
    description: 'Delete multiple jobs in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        guids: { type: 'array', items: { type: 'string' }, description: 'Array of job GUIDs to delete' }
      },
      required: ['guids']
    }
  },
  {
    name: 'jpi_add_tasks_batch',
    description: 'Add multiple tasks to a job in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        tasks: { type: 'array', description: 'Array of task objects to add' }
      },
      required: ['jobGuid', 'tasks']
    }
  },
  {
    name: 'jpi_update_tasks_batch',
    description: 'Update multiple tasks within a job in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        tasks: { type: 'array', description: 'Array of task objects with guid and fields to update' }
      },
      required: ['jobGuid', 'tasks']
    }
  },
  {
    name: 'jpi_delete_tasks_batch',
    description: 'Delete multiple tasks from a job in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        taskGuids: { type: 'array', items: { type: 'string' }, description: 'Array of task GUIDs to delete' }
      },
      required: ['jobGuid', 'taskGuids']
    }
  },
  {
    name: 'jpi_add_jcrs_batch',
    description: 'Add multiple Job Component References to a job in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        jcrs: { type: 'array', description: 'Array of JCR objects to add' }
      },
      required: ['jobGuid', 'jcrs']
    }
  },
  {
    name: 'jpi_update_jcrs_batch',
    description: 'Update multiple Job Component References in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        jcrs: { type: 'array', description: 'Array of JCR objects with guid and fields to update' }
      },
      required: ['jobGuid', 'jcrs']
    }
  },
  {
    name: 'jpi_delete_jcrs_batch',
    description: 'Delete multiple Job Component References in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        jobGuid: { type: 'string', description: 'Job GUID' },
        jcrGuids: { type: 'array', items: { type: 'string' }, description: 'Array of JCR GUIDs to delete' }
      },
      required: ['jobGuid', 'jcrGuids']
    }
  },
  {
    name: 'jpi_create_tasks_cross_jobs',
    description: 'Create tasks across multiple jobs in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        tasks: { type: 'array', description: 'Array of task objects with jobGuid specified for each' }
      },
      required: ['tasks']
    }
  },
  {
    name: 'jpi_update_tasks_cross_jobs',
    description: 'Update tasks across multiple jobs in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        tasks: { type: 'array', description: 'Array of task objects with guid and fields to update' }
      },
      required: ['tasks']
    }
  },
  {
    name: 'jpi_delete_tasks_cross_jobs',
    description: 'Delete tasks across multiple jobs in a single batch operation.',
    inputSchema: {
      type: 'object',
      properties: {
        taskGuids: { type: 'array', items: { type: 'string' }, description: 'Array of task GUIDs to delete' }
      },
      required: ['taskGuids']
    }
  },

  // ========== Job Templates (13 tools) ==========
  {
    name: 'jpi_list_templates',
    description: 'List all job templates. Templates are reusable job definitions.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'jpi_create_template',
    description: 'Create a new job template.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Template name' },
        tasks: { type: 'array', description: 'Array of template tasks' }
      },
      required: ['name']
    }
  },
  {
    name: 'jpi_get_template',
    description: 'Get a specific job template by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Template GUID' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_update_template',
    description: 'Update an existing job template.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Template GUID' },
        name: { type: 'string', description: 'New template name' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_delete_template',
    description: 'Delete a job template by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Template GUID' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_get_template_task',
    description: 'Get a specific task within a template.',
    inputSchema: {
      type: 'object',
      properties: {
        templateGuid: { type: 'string', description: 'Template GUID' },
        taskGuid: { type: 'string', description: 'Task GUID' }
      },
      required: ['templateGuid', 'taskGuid']
    }
  },
  {
    name: 'jpi_add_template_task',
    description: 'Add a new task to a template.',
    inputSchema: {
      type: 'object',
      properties: {
        templateGuid: { type: 'string', description: 'Template GUID' },
        name: { type: 'string', description: 'Task name' },
        duration: { type: 'number', description: 'Task duration in minutes' }
      },
      required: ['templateGuid', 'name']
    }
  },
  {
    name: 'jpi_update_template_task',
    description: 'Update a task within a template.',
    inputSchema: {
      type: 'object',
      properties: {
        templateGuid: { type: 'string', description: 'Template GUID' },
        taskGuid: { type: 'string', description: 'Task GUID' },
        name: { type: 'string', description: 'New task name' },
        duration: { type: 'number', description: 'New duration' }
      },
      required: ['templateGuid', 'taskGuid']
    }
  },
  {
    name: 'jpi_delete_template_task',
    description: 'Delete a task from a template.',
    inputSchema: {
      type: 'object',
      properties: {
        templateGuid: { type: 'string', description: 'Template GUID' },
        taskGuid: { type: 'string', description: 'Task GUID' }
      },
      required: ['templateGuid', 'taskGuid']
    }
  },
  {
    name: 'jpi_get_tcr',
    description: 'Get a Template Component Reference (TCR).',
    inputSchema: {
      type: 'object',
      properties: {
        templateGuid: { type: 'string', description: 'Template GUID' },
        tcrGuid: { type: 'string', description: 'TCR GUID' }
      },
      required: ['templateGuid', 'tcrGuid']
    }
  },
  {
    name: 'jpi_add_tcr',
    description: 'Add a Template Component Reference to a template.',
    inputSchema: {
      type: 'object',
      properties: {
        templateGuid: { type: 'string', description: 'Template GUID' },
        componentGuid: { type: 'string', description: 'Component GUID to reference' }
      },
      required: ['templateGuid', 'componentGuid']
    }
  },
  {
    name: 'jpi_update_tcr',
    description: 'Update a Template Component Reference.',
    inputSchema: {
      type: 'object',
      properties: {
        templateGuid: { type: 'string', description: 'Template GUID' },
        tcrGuid: { type: 'string', description: 'TCR GUID' }
      },
      required: ['templateGuid', 'tcrGuid']
    }
  },
  {
    name: 'jpi_delete_tcr',
    description: 'Delete a Template Component Reference.',
    inputSchema: {
      type: 'object',
      properties: {
        templateGuid: { type: 'string', description: 'Template GUID' },
        tcrGuid: { type: 'string', description: 'TCR GUID' }
      },
      required: ['templateGuid', 'tcrGuid']
    }
  },

  // ========== JPI Events (2 tools) ==========
  {
    name: 'jpi_get_events',
    description: 'Get JPI events (change log) created after a specific timestamp.',
    inputSchema: {
      type: 'object',
      properties: {
        createdAfter: { type: 'string', description: 'ISO 8601 timestamp - get events created after this time' }
      },
      required: ['createdAfter']
    }
  },
  {
    name: 'jpi_get_events_filtered',
    description: 'Get JPI events filtered by event type.',
    inputSchema: {
      type: 'object',
      properties: {
        createdAfter: { type: 'string', description: 'ISO 8601 timestamp' },
        eventType: {
          type: 'string',
          description: 'Event type filter (JobAdded, JobModified, JobDeleted, TaskAdded, etc.)',
          enum: ['JobAdded', 'JobModified', 'JobDeleted', 'TaskAdded', 'TaskModified', 'TaskDeleted', 'ResourceAdded', 'ResourceModified', 'ResourceDeleted']
        }
      },
      required: ['createdAfter', 'eventType']
    }
  },

  // ========== Resource Categories (5 tools) ==========
  {
    name: 'jpi_list_resource_categories',
    description: 'List all resource categories. Categories group related resource groups.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'jpi_create_resource_category',
    description: 'Create a new resource category.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Category name' }
      },
      required: ['name']
    }
  },
  {
    name: 'jpi_get_resource_category',
    description: 'Get a specific resource category by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Category GUID' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_update_resource_category',
    description: 'Update a resource category.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Category GUID' },
        name: { type: 'string', description: 'New category name' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_delete_resource_category',
    description: 'Delete a resource category by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Category GUID' }
      },
      required: ['guid']
    }
  },

  // ========== Resource Groups (5 tools) ==========
  {
    name: 'jpi_list_resource_groups',
    description: 'List all resource groups. Groups organize resources that can perform similar work.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'jpi_create_resource_group',
    description: 'Create a new resource group.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Group name' },
        resourceCategory: { type: 'string', description: 'Category GUID (optional)' },
        resources: { type: 'array', items: { type: 'string' }, description: 'Array of resource GUIDs' }
      },
      required: ['name']
    }
  },
  {
    name: 'jpi_get_resource_group',
    description: 'Get a specific resource group by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Group GUID' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_update_resource_group',
    description: 'Update a resource group.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Group GUID' },
        name: { type: 'string', description: 'New group name' },
        resourceCategory: { type: 'string', description: 'New category GUID' },
        resources: { type: 'array', items: { type: 'string' }, description: 'New resource GUIDs' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_delete_resource_group',
    description: 'Delete a resource group by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Group GUID' }
      },
      required: ['guid']
    }
  },

  // ========== Resources (5 tools) ==========
  {
    name: 'jpi_list_resources',
    description: 'List all resources. Resources are machines, workers, or other entities that perform work.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'jpi_create_resource',
    description: 'Create a new resource.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Resource name' },
        capacity: { type: 'number', description: 'Resource capacity (default 100)' },
        finite: { type: 'boolean', description: 'Whether resource is finite' },
        resourceGroups: { type: 'array', items: { type: 'string' }, description: 'Resource group GUIDs' },
        worktimesPerWeekday: { type: 'array', description: 'Work schedule configuration' }
      },
      required: ['name', 'worktimesPerWeekday']
    }
  },
  {
    name: 'jpi_get_resource',
    description: 'Get a specific resource by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Resource GUID' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_update_resource',
    description: 'Update a resource.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Resource GUID' },
        name: { type: 'string', description: 'New resource name' },
        capacity: { type: 'number', description: 'New capacity' },
        finite: { type: 'boolean', description: 'Whether resource is finite' },
        disabled: { type: 'boolean', description: 'Whether resource is disabled' }
      },
      required: ['guid']
    }
  },
  {
    name: 'jpi_delete_resource',
    description: 'Delete a resource by its GUID.',
    inputSchema: {
      type: 'object',
      properties: {
        guid: { type: 'string', description: 'Resource GUID' }
      },
      required: ['guid']
    }
  },

  // ========== Settings (2 tools) ==========
  {
    name: 'jpi_get_settings',
    description: 'Get the JPI application settings including custom fields, planning configuration, and display options.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'jpi_update_settings',
    description: 'Update JPI application settings.',
    inputSchema: {
      type: 'object',
      properties: {
        planningStart: { type: 'string', description: 'Planning start date' },
        planningHorizon: { type: 'number', description: 'Planning horizon in days' },
        locale: { type: 'string', description: 'Locale setting' }
      },
      required: []
    }
  }
];

// ============================================
// Tool Handler
// ============================================

async function handleToolCall(name: string, args: Record<string, unknown>): Promise<unknown> {
  try {
    switch (name) {
      // Helper
      case 'jpi_api_info':
        return {
          name: 'Just Plan It (JPI) API',
          version: 'v1',
          baseUrl: JPI_BASE_URL,
          categories: {
            components: '9 endpoints - Reusable building blocks',
            jobs: '25 endpoints - Work orders and production orders',
            templates: '13 endpoints - Reusable job definitions',
            events: '2 endpoints - Change tracking',
            resourceCategories: '5 endpoints - Category management',
            resourceGroups: '5 endpoints - Group management',
            resources: '5 endpoints - Machine/worker management',
            settings: '2 endpoints - Application configuration'
          },
          totalEndpoints: 66
        };

      // Components
      case 'jpi_list_components':
        return await client.listComponents();
      case 'jpi_create_component':
        return await client.createComponent(args as any);
      case 'jpi_get_component':
        return await client.getComponent(args.guid as string);
      case 'jpi_update_component':
        return await client.updateComponent(args.guid as string, args as any);
      case 'jpi_delete_component':
        return await client.deleteComponent(args.guid as string);
      case 'jpi_get_component_task':
        return await client.getComponentTask(args.componentGuid as string, args.taskGuid as string);
      case 'jpi_add_component_task':
        return await client.addComponentTask(args.componentGuid as string, args as any);
      case 'jpi_update_component_task':
        return await client.updateComponentTask(args.componentGuid as string, args.taskGuid as string, args as any);
      case 'jpi_delete_component_task':
        return await client.deleteComponentTask(args.componentGuid as string, args.taskGuid as string);

      // Jobs
      case 'jpi_list_jobs':
        return await client.listJobs();
      case 'jpi_create_job':
        return await client.createJob(args as any);
      case 'jpi_get_job':
        return await client.getJob(args.guid as string);
      case 'jpi_update_job':
        return await client.updateJob(args.guid as string, args as any);
      case 'jpi_delete_job':
        return await client.deleteJob(args.guid as string);
      case 'jpi_get_task':
        return await client.getTask(args.jobGuid as string, args.taskGuid as string);
      case 'jpi_add_task':
        return await client.addTask(args.jobGuid as string, args as any);
      case 'jpi_update_task':
        return await client.updateTask(args.jobGuid as string, args.taskGuid as string, args as any);
      case 'jpi_delete_task':
        return await client.deleteTask(args.jobGuid as string, args.taskGuid as string);
      case 'jpi_get_jcr':
        return await client.getJcr(args.jobGuid as string, args.jcrGuid as string);
      case 'jpi_add_jcr':
        return await client.addJcr(args.jobGuid as string, args as any);
      case 'jpi_update_jcr':
        return await client.updateJcr(args.jobGuid as string, args.jcrGuid as string, args as any);
      case 'jpi_delete_jcr':
        return await client.deleteJcr(args.jobGuid as string, args.jcrGuid as string);
      case 'jpi_create_jobs_batch':
        return await client.createJobsBatch(args.jobs as any[]);
      case 'jpi_update_jobs_batch':
        return await client.updateJobsBatch(args.jobs as any[]);
      case 'jpi_delete_jobs_batch':
        return await client.deleteJobsBatch(args.guids as string[]);
      case 'jpi_add_tasks_batch':
        return await client.addTasksBatch(args.jobGuid as string, args.tasks as any[]);
      case 'jpi_update_tasks_batch':
        return await client.updateTasksBatch(args.jobGuid as string, args.tasks as any[]);
      case 'jpi_delete_tasks_batch':
        return await client.deleteTasksBatch(args.jobGuid as string, args.taskGuids as string[]);
      case 'jpi_add_jcrs_batch':
        return await client.addJcrsBatch(args.jobGuid as string, args.jcrs as any[]);
      case 'jpi_update_jcrs_batch':
        return await client.updateJcrsBatch(args.jobGuid as string, args.jcrs as any[]);
      case 'jpi_delete_jcrs_batch':
        return await client.deleteJcrsBatch(args.jobGuid as string, args.jcrGuids as string[]);
      case 'jpi_create_tasks_cross_jobs':
        return await client.createTasksCrossJobs(args.tasks as any[]);
      case 'jpi_update_tasks_cross_jobs':
        return await client.updateTasksCrossJobs(args.tasks as any[]);
      case 'jpi_delete_tasks_cross_jobs':
        return await client.deleteTasksCrossJobs(args.taskGuids as string[]);

      // Templates
      case 'jpi_list_templates':
        return await client.listTemplates();
      case 'jpi_create_template':
        return await client.createTemplate(args as any);
      case 'jpi_get_template':
        return await client.getTemplate(args.guid as string);
      case 'jpi_update_template':
        return await client.updateTemplate(args.guid as string, args as any);
      case 'jpi_delete_template':
        return await client.deleteTemplate(args.guid as string);
      case 'jpi_get_template_task':
        return await client.getTemplateTask(args.templateGuid as string, args.taskGuid as string);
      case 'jpi_add_template_task':
        return await client.addTemplateTask(args.templateGuid as string, args as any);
      case 'jpi_update_template_task':
        return await client.updateTemplateTask(args.templateGuid as string, args.taskGuid as string, args as any);
      case 'jpi_delete_template_task':
        return await client.deleteTemplateTask(args.templateGuid as string, args.taskGuid as string);
      case 'jpi_get_tcr':
        return await client.getTcr(args.templateGuid as string, args.tcrGuid as string);
      case 'jpi_add_tcr':
        return await client.addTcr(args.templateGuid as string, args as any);
      case 'jpi_update_tcr':
        return await client.updateTcr(args.templateGuid as string, args.tcrGuid as string, args as any);
      case 'jpi_delete_tcr':
        return await client.deleteTcr(args.templateGuid as string, args.tcrGuid as string);

      // Events
      case 'jpi_get_events':
        return await client.getEvents(args.createdAfter as string);
      case 'jpi_get_events_filtered':
        return await client.getEventsFiltered(args.createdAfter as string, args.eventType as any);

      // Resource Categories
      case 'jpi_list_resource_categories':
        return await client.listResourceCategories();
      case 'jpi_create_resource_category':
        return await client.createResourceCategory(args as any);
      case 'jpi_get_resource_category':
        return await client.getResourceCategory(args.guid as string);
      case 'jpi_update_resource_category':
        return await client.updateResourceCategory(args.guid as string, args as any);
      case 'jpi_delete_resource_category':
        return await client.deleteResourceCategory(args.guid as string);

      // Resource Groups
      case 'jpi_list_resource_groups':
        return await client.listResourceGroups();
      case 'jpi_create_resource_group':
        return await client.createResourceGroup(args as any);
      case 'jpi_get_resource_group':
        return await client.getResourceGroup(args.guid as string);
      case 'jpi_update_resource_group':
        return await client.updateResourceGroup(args.guid as string, args as any);
      case 'jpi_delete_resource_group':
        return await client.deleteResourceGroup(args.guid as string);

      // Resources
      case 'jpi_list_resources':
        return await client.listResources();
      case 'jpi_create_resource':
        return await client.createResource(args as any);
      case 'jpi_get_resource':
        return await client.getResource(args.guid as string);
      case 'jpi_update_resource':
        return await client.updateResource(args.guid as string, args as any);
      case 'jpi_delete_resource':
        return await client.deleteResource(args.guid as string);

      // Settings
      case 'jpi_get_settings':
        return await client.getSettings();
      case 'jpi_update_settings':
        return await client.updateSettings(args as any);

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    if (error instanceof JpiApiError) {
      return {
        error: true,
        status: error.status,
        statusText: error.statusText,
        message: error.message,
        body: error.body
      };
    }
    throw error;
  }
}

// ============================================
// MCP Server Setup
// ============================================

const server = new Server(
  {
    name: 'jpi-mcp',
    version: '1.0.0'
  },
  {
    capabilities: {
      tools: {}
    }
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    const result = await handleToolCall(name, args as Record<string, unknown>);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2)
        }
      ]
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ error: errorMessage }, null, 2)
        }
      ],
      isError: true
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('JPI MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
