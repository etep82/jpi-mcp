/**
 * JPI API HTTP Client
 * Handles all communication with the Just Plan It API
 */

import {
  // Component types
  GetComponent,
  PostComponent,
  PatchComponent,
  GetComponentTask,
  PostComponentTask,
  PatchComponentTask,
  // Job types
  GetJob,
  PostJob,
  PatchJob,
  GetTask,
  PostTask,
  PatchTask,
  PostTaskToDiffJobs,
  GetJobComponentReference,
  PostJobComponentReference,
  PatchJobComponentReference,
  // Template types
  GetJobTemplate,
  PostJobTemplate,
  PatchJobTemplate,
  GetJobTemplateTask,
  PostTemplateTask,
  PatchTemplateTask,
  GetTemplateComponentReference,
  PostTemplateComponentReference,
  PatchTemplateCompRef,
  // Resource types
  GetResourceCategory,
  PostResourceCategory,
  PatchResourceCategory,
  GetResourceGroup,
  PostResourceGroup,
  PatchResourceGroup,
  GetResource,
  PostResource,
  PatchResource,
  // Settings types
  GetSettings,
  PatchSettings,
  // Event types
  JPIEventEntity,
  EventType
} from './types/index.js';

export interface JpiClientConfig {
  baseUrl: string;
  token: string;
}

export class JpiApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string,
    public body?: unknown
  ) {
    super(message);
    this.name = 'JpiApiError';
  }
}

export class JpiClient {
  private baseUrl: string;
  private token: string;

  constructor(config: JpiClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, '');
    this.token = config.token;
  }

  private async request<T>(
    method: string,
    path: string,
    body?: unknown
  ): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const headers: Record<string, string> = {
      'X-Api-Key': this.token,
      'Accept': 'application/json'
    };

    if (body !== undefined) {
      headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
      let errorBody: unknown;
      try {
        errorBody = await response.json();
      } catch {
        errorBody = await response.text();
      }
      throw new JpiApiError(
        `JPI API Error: ${response.status} ${response.statusText}`,
        response.status,
        response.statusText,
        errorBody
      );
    }

    // Handle empty responses
    const text = await response.text();
    if (!text) {
      return undefined as T;
    }

    return JSON.parse(text) as T;
  }

  // ============================================
  // Components API (9 endpoints)
  // ============================================

  async listComponents(): Promise<GetComponent[]> {
    return this.request<GetComponent[]>('GET', '/v1/components');
  }

  async createComponent(data: PostComponent): Promise<GetComponent> {
    return this.request<GetComponent>('POST', '/v1/components', data);
  }

  async getComponent(guid: string): Promise<GetComponent> {
    return this.request<GetComponent>('GET', `/v1/components/${guid}`);
  }

  async updateComponent(guid: string, data: PatchComponent): Promise<GetComponent> {
    return this.request<GetComponent>('PATCH', `/v1/components/${guid}`, data);
  }

  async deleteComponent(guid: string): Promise<GetComponent[]> {
    return this.request<GetComponent[]>('DELETE', `/v1/components/${guid}`);
  }

  async getComponentTask(componentGuid: string, taskGuid: string): Promise<GetComponentTask> {
    return this.request<GetComponentTask>('GET', `/v1/components/${componentGuid}/task/${taskGuid}`);
  }

  async addComponentTask(componentGuid: string, data: PostComponentTask): Promise<GetComponentTask> {
    return this.request<GetComponentTask>('POST', `/v1/components/${componentGuid}/task`, data);
  }

  async updateComponentTask(componentGuid: string, taskGuid: string, data: PatchComponentTask): Promise<GetComponentTask> {
    return this.request<GetComponentTask>('PATCH', `/v1/components/${componentGuid}/task/${taskGuid}`, data);
  }

  async deleteComponentTask(componentGuid: string, taskGuid: string): Promise<GetComponent> {
    return this.request<GetComponent>('DELETE', `/v1/components/${componentGuid}/task/${taskGuid}`);
  }

  // ============================================
  // Jobs API (25 endpoints)
  // ============================================

  // Basic Job CRUD
  async listJobs(): Promise<GetJob[]> {
    return this.request<GetJob[]>('GET', '/v1/jobs');
  }

  async createJob(data: PostJob): Promise<GetJob> {
    return this.request<GetJob>('POST', '/v1/jobs', data);
  }

  async getJob(guid: string): Promise<GetJob> {
    return this.request<GetJob>('GET', `/v1/jobs/${guid}`);
  }

  async updateJob(guid: string, data: PatchJob): Promise<GetJob> {
    return this.request<GetJob>('PATCH', `/v1/jobs/${guid}`, data);
  }

  async deleteJob(guid: string): Promise<GetJob[]> {
    return this.request<GetJob[]>('DELETE', `/v1/jobs/${guid}`);
  }

  // Task operations
  async getTask(jobGuid: string, taskGuid: string): Promise<GetTask> {
    return this.request<GetTask>('GET', `/v1/jobs/${jobGuid}/task/${taskGuid}`);
  }

  async addTask(jobGuid: string, data: PostTask): Promise<GetTask> {
    return this.request<GetTask>('POST', `/v1/jobs/${jobGuid}/task`, data);
  }

  async updateTask(jobGuid: string, taskGuid: string, data: PatchTask): Promise<GetTask> {
    return this.request<GetTask>('PATCH', `/v1/jobs/${jobGuid}/task/${taskGuid}`, data);
  }

  async deleteTask(jobGuid: string, taskGuid: string): Promise<GetJob> {
    return this.request<GetJob>('DELETE', `/v1/jobs/${jobGuid}/task/${taskGuid}`);
  }

  // JCR (Job Component Reference) operations
  async getJcr(jobGuid: string, jcrGuid: string): Promise<GetJobComponentReference> {
    return this.request<GetJobComponentReference>('GET', `/v1/jobs/${jobGuid}/jcr/${jcrGuid}`);
  }

  async addJcr(jobGuid: string, data: PostJobComponentReference): Promise<GetJobComponentReference> {
    return this.request<GetJobComponentReference>('POST', `/v1/jobs/${jobGuid}/jcr`, data);
  }

  async updateJcr(jobGuid: string, jcrGuid: string, data: PatchJobComponentReference): Promise<GetJobComponentReference> {
    return this.request<GetJobComponentReference>('PATCH', `/v1/jobs/${jobGuid}/jcr/${jcrGuid}`, data);
  }

  async deleteJcr(jobGuid: string, jcrGuid: string): Promise<GetJob> {
    return this.request<GetJob>('DELETE', `/v1/jobs/${jobGuid}/jcr/${jcrGuid}`);
  }

  // Job Batch operations
  async createJobsBatch(data: PostJob[]): Promise<GetJob[]> {
    return this.request<GetJob[]>('POST', '/v1/jobs/batch', data);
  }

  async updateJobsBatch(data: PatchJob[]): Promise<GetJob[]> {
    return this.request<GetJob[]>('PATCH', '/v1/jobs/batch', data);
  }

  async deleteJobsBatch(guids: string[]): Promise<GetJob[]> {
    return this.request<GetJob[]>('DELETE', '/v1/jobs/batch', guids);
  }

  // Task Batch operations (within a job)
  async addTasksBatch(jobGuid: string, data: PostTask[]): Promise<GetTask[]> {
    return this.request<GetTask[]>('POST', `/v1/jobs/${jobGuid}/task/batch`, data);
  }

  async updateTasksBatch(jobGuid: string, data: PatchTask[]): Promise<GetTask[]> {
    return this.request<GetTask[]>('PATCH', `/v1/jobs/${jobGuid}/task/batch`, data);
  }

  async deleteTasksBatch(jobGuid: string, taskGuids: string[]): Promise<GetJob> {
    return this.request<GetJob>('DELETE', `/v1/jobs/${jobGuid}/task/batch`, taskGuids);
  }

  // JCR Batch operations
  async addJcrsBatch(jobGuid: string, data: PostJobComponentReference[]): Promise<GetJobComponentReference[]> {
    return this.request<GetJobComponentReference[]>('POST', `/v1/jobs/${jobGuid}/jcr/batch`, data);
  }

  async updateJcrsBatch(jobGuid: string, data: PatchJobComponentReference[]): Promise<GetJobComponentReference[]> {
    return this.request<GetJobComponentReference[]>('PATCH', `/v1/jobs/${jobGuid}/jcr/batch`, data);
  }

  async deleteJcrsBatch(jobGuid: string, jcrGuids: string[]): Promise<GetJob> {
    return this.request<GetJob>('DELETE', `/v1/jobs/${jobGuid}/jcr/batch`, jcrGuids);
  }

  // Cross-job task operations
  async createTasksCrossJobs(data: PostTaskToDiffJobs[]): Promise<GetTask[]> {
    return this.request<GetTask[]>('POST', '/v1/jobs/tasks/batch', data);
  }

  async updateTasksCrossJobs(data: PatchTask[]): Promise<GetTask[]> {
    return this.request<GetTask[]>('PATCH', '/v1/jobs/tasks/batch', data);
  }

  async deleteTasksCrossJobs(taskGuids: string[]): Promise<GetJob[]> {
    return this.request<GetJob[]>('DELETE', '/v1/jobs/tasks/batch', taskGuids);
  }

  // ============================================
  // Job Templates API (13 endpoints)
  // ============================================

  // Basic Template CRUD
  async listTemplates(): Promise<GetJobTemplate[]> {
    return this.request<GetJobTemplate[]>('GET', '/v1/jobtemplates');
  }

  async createTemplate(data: PostJobTemplate): Promise<GetJobTemplate> {
    return this.request<GetJobTemplate>('POST', '/v1/jobtemplates', data);
  }

  async getTemplate(guid: string): Promise<GetJobTemplate> {
    return this.request<GetJobTemplate>('GET', `/v1/jobtemplates/${guid}`);
  }

  async updateTemplate(guid: string, data: PatchJobTemplate): Promise<GetJobTemplate> {
    return this.request<GetJobTemplate>('PATCH', `/v1/jobtemplates/${guid}`, data);
  }

  async deleteTemplate(guid: string): Promise<GetJobTemplate[]> {
    return this.request<GetJobTemplate[]>('DELETE', `/v1/jobtemplates/${guid}`);
  }

  // Template Task operations
  async getTemplateTask(templateGuid: string, taskGuid: string): Promise<GetJobTemplateTask> {
    return this.request<GetJobTemplateTask>('GET', `/v1/jobtemplates/${templateGuid}/task/${taskGuid}`);
  }

  async addTemplateTask(templateGuid: string, data: PostTemplateTask): Promise<GetJobTemplateTask> {
    return this.request<GetJobTemplateTask>('POST', `/v1/jobtemplates/${templateGuid}/task`, data);
  }

  async updateTemplateTask(templateGuid: string, taskGuid: string, data: PatchTemplateTask): Promise<GetJobTemplateTask> {
    return this.request<GetJobTemplateTask>('PATCH', `/v1/jobtemplates/${templateGuid}/task/${taskGuid}`, data);
  }

  async deleteTemplateTask(templateGuid: string, taskGuid: string): Promise<GetJobTemplate> {
    return this.request<GetJobTemplate>('DELETE', `/v1/jobtemplates/${templateGuid}/task/${taskGuid}`);
  }

  // TCR (Template Component Reference) operations
  async getTcr(templateGuid: string, tcrGuid: string): Promise<GetTemplateComponentReference> {
    return this.request<GetTemplateComponentReference>('GET', `/v1/jobtemplates/${templateGuid}/tcr/${tcrGuid}`);
  }

  async addTcr(templateGuid: string, data: PostTemplateComponentReference): Promise<GetTemplateComponentReference> {
    return this.request<GetTemplateComponentReference>('POST', `/v1/jobtemplates/${templateGuid}/tcr`, data);
  }

  async updateTcr(templateGuid: string, tcrGuid: string, data: PatchTemplateCompRef): Promise<GetTemplateComponentReference> {
    return this.request<GetTemplateComponentReference>('PATCH', `/v1/jobtemplates/${templateGuid}/tcr/${tcrGuid}`, data);
  }

  async deleteTcr(templateGuid: string, tcrGuid: string): Promise<GetJobTemplate> {
    return this.request<GetJobTemplate>('DELETE', `/v1/jobtemplates/${templateGuid}/tcr/${tcrGuid}`);
  }

  // ============================================
  // JPI Events API (2 endpoints)
  // ============================================

  async getEvents(createdAfter: string): Promise<JPIEventEntity[]> {
    return this.request<JPIEventEntity[]>('GET', `/v1/jpievents/${encodeURIComponent(createdAfter)}`);
  }

  async getEventsFiltered(createdAfter: string, eventType: EventType): Promise<JPIEventEntity[]> {
    return this.request<JPIEventEntity[]>('GET', `/v1/jpievents/${encodeURIComponent(createdAfter)},${eventType}`);
  }

  // ============================================
  // Resource Categories API (5 endpoints)
  // ============================================

  async listResourceCategories(): Promise<GetResourceCategory[]> {
    return this.request<GetResourceCategory[]>('GET', '/v1/resourcecategories');
  }

  async createResourceCategory(data: PostResourceCategory): Promise<GetResourceCategory> {
    return this.request<GetResourceCategory>('POST', '/v1/resourcecategories', data);
  }

  async getResourceCategory(guid: string): Promise<GetResourceCategory> {
    return this.request<GetResourceCategory>('GET', `/v1/resourcecategories/${guid}`);
  }

  async updateResourceCategory(guid: string, data: PatchResourceCategory): Promise<GetResourceCategory> {
    return this.request<GetResourceCategory>('PATCH', `/v1/resourcecategories/${guid}`, data);
  }

  async deleteResourceCategory(guid: string): Promise<GetResourceCategory[]> {
    return this.request<GetResourceCategory[]>('DELETE', `/v1/resourcecategories/${guid}`);
  }

  // ============================================
  // Resource Groups API (5 endpoints)
  // ============================================

  async listResourceGroups(): Promise<GetResourceGroup[]> {
    return this.request<GetResourceGroup[]>('GET', '/v1/resourcegroups');
  }

  async createResourceGroup(data: PostResourceGroup): Promise<GetResourceGroup> {
    return this.request<GetResourceGroup>('POST', '/v1/resourcegroups', data);
  }

  async getResourceGroup(guid: string): Promise<GetResourceGroup> {
    return this.request<GetResourceGroup>('GET', `/v1/resourcegroups/${guid}`);
  }

  async updateResourceGroup(guid: string, data: PatchResourceGroup): Promise<GetResourceGroup> {
    return this.request<GetResourceGroup>('PATCH', `/v1/resourcegroups/${guid}`, data);
  }

  async deleteResourceGroup(guid: string): Promise<GetResourceGroup[]> {
    return this.request<GetResourceGroup[]>('DELETE', `/v1/resourcegroups/${guid}`);
  }

  // ============================================
  // Resources API (5 endpoints)
  // ============================================

  async listResources(): Promise<GetResource[]> {
    return this.request<GetResource[]>('GET', '/v1/resources');
  }

  async createResource(data: PostResource): Promise<GetResource> {
    return this.request<GetResource>('POST', '/v1/resources', data);
  }

  async getResource(guid: string): Promise<GetResource> {
    return this.request<GetResource>('GET', `/v1/resources/${guid}`);
  }

  async updateResource(guid: string, data: PatchResource): Promise<GetResource> {
    return this.request<GetResource>('PATCH', `/v1/resources/${guid}`, data);
  }

  async deleteResource(guid: string): Promise<GetResource[]> {
    return this.request<GetResource[]>('DELETE', `/v1/resources/${guid}`);
  }

  // ============================================
  // Settings API (2 endpoints)
  // ============================================

  async getSettings(): Promise<GetSettings> {
    return this.request<GetSettings>('GET', '/v1/settings');
  }

  async updateSettings(data: PatchSettings): Promise<GetSettings> {
    return this.request<GetSettings>('PATCH', '/v1/settings', data);
  }
}
