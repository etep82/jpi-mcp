# MCP Server API Reference

## Introduction

This document serves as a comprehensive API reference for the **just plan it** Model Context Protocol (MCP) server, detailing all available endpoints, request/response schemas, and data types. The information was programmatically extracted from the official OpenAPI (Swagger) specification provided at the source URL [1].

The API is structured around key manufacturing and scheduling concepts, including **Jobs**, **JobTemplates**, **Resources**, and **Components**.


## Authentication

The API uses an **API Key** for authentication. The key must be passed in the request header.

| Parameter | Location | Description | Example Value |
| :--- | :--- | :--- | :--- |
| `X-Api-Key` | Header | The unique API key required to access the endpoints. | `My_API_Key` |

## Example Usage

### Request URL

The base URL for all API requests is: `https://api.just-plan-it.com/v1`

A full example request URL for retrieving all jobs is:
`https://api.just-plan-it.com/v1/jobs`

### cURL Example

The following is an example cURL command for the `GET /v1/jobs` endpoint, including the necessary authentication header. Replace `My_API_Key` with your actual API key.

```bash
curl -X GET "https://api.just-plan-it.com/v1/jobs" \
  -H "accept: application/json" \
  -H "X-Api-Key: My_API_Key"
```

## API Endpoints

### Components

#### GET /v1/components

**Response Schema (200):** array of GetComponent

**Description (200):** Success

---

#### POST /v1/components

**Request Schema:** PostComponent

**Response Schema (200):** GetComponent

**Description (200):** Success

---

#### GET /v1/components/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetComponent

**Description (200):** Success

---

#### DELETE /v1/components/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** array of GetComponent

**Description (200):** Success

---

#### PATCH /v1/components/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Request Schema:** PatchComponent

**Response Schema (200):** GetComponent

**Description (200):** Success

---

#### GET /v1/components/{guid}/task/{taskGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| taskGuid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetComponentTask

**Description (200):** Success

---

#### DELETE /v1/components/{guid}/task/{taskGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| taskGuid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetComponent

**Description (200):** Success

---

#### PATCH /v1/components/{guid}/task/{taskGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| taskGuid | path | string (uuid) |  | Yes |

**Request Schema:** PatchComponentTask

**Response Schema (200):** GetComponentTask

**Description (200):** Success

---

#### POST /v1/components/{guid}/task

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Request Schema:** PostComponentTask

**Response Schema (200):** GetComponentTask

**Description (200):** Success

---

### JPIEvents

#### GET /v1/jpievents/{createdAfter}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| createdAfter | path | string (date-time) |  | Yes |

**Response Schema (200):** array of JPIEventEntity

**Description (200):** Success

---

#### GET /v1/jpievents/{createdAfter},{eventType}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| createdAfter | path | string (date-time) |  | Yes |
| eventType | path | string |  | Yes |

**Response Schema (200):** array of JPIEventEntity

**Description (200):** Success

---

### JobTemplates

#### GET /v1/jobtemplates

**Response Schema (200):** array of GetJobTemplate

**Description (200):** Success

---

#### POST /v1/jobtemplates

**Request Schema:** PostJobTemplate

**Response Schema (200):** GetJobTemplate

**Description (200):** Success

---

#### GET /v1/jobtemplates/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetJobTemplate

**Description (200):** Success

---

#### DELETE /v1/jobtemplates/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** array of GetJobTemplate

**Description (200):** Success

---

#### PATCH /v1/jobtemplates/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Request Schema:** PatchJobTemplate

**Response Schema (200):** GetJobTemplate

**Description (200):** Success

---

#### GET /v1/jobtemplates/{guid}/task/{taskGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| taskGuid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetJobTemplateTask

**Description (200):** Success

---

#### DELETE /v1/jobtemplates/{guid}/task/{taskGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| taskGuid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetJobTemplate

**Description (200):** Success

---

#### PATCH /v1/jobtemplates/{guid}/task/{taskGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| taskGuid | path | string (uuid) |  | Yes |

**Request Schema:** PatchTemplateTask

**Response Schema (200):** GetJobTemplateTask

**Description (200):** Success

---

#### GET /v1/jobtemplates/{guid}/tcr/{tcrGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| tcrGuid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetTemplateComponentReference

**Description (200):** Success

---

#### DELETE /v1/jobtemplates/{guid}/tcr/{tcrGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| tcrGuid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetJobTemplate

**Description (200):** Success

---

#### PATCH /v1/jobtemplates/{guid}/tcr/{tcrGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| tcrGuid | path | string (uuid) |  | Yes |

**Request Schema:** PatchTemplateCompRef

**Response Schema (200):** GetTemplateComponentReference

**Description (200):** Success

---

#### POST /v1/jobtemplates/{guid}/task

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Request Schema:** PostTemplateTask

**Response Schema (200):** GetJobTemplateTask

**Description (200):** Success

---

#### POST /v1/jobtemplates/{guid}/tcr

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Request Schema:** PostTemplateComponentReference

**Response Schema (200):** GetTemplateComponentReference

**Description (200):** Success

---

### Jobs

#### GET /v1/jobs

**Response Schema (200):** array of GetJob

**Description (200):** Success

---

#### POST /v1/jobs

**Request Schema:** PostJob

**Response Schema (200):** GetJob

**Description (200):** Success

---

#### GET /v1/jobs/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetJob

**Description (200):** Success

---

#### DELETE /v1/jobs/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** array of GetJob

**Description (200):** Success

---

#### PATCH /v1/jobs/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Request Schema:** PatchJob

**Response Schema (200):** GetJob

**Description (200):** Success

---

#### GET /v1/jobs/{guid}/task/{taskGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| taskGuid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetTask

**Description (200):** Success

---

#### DELETE /v1/jobs/{guid}/task/{taskGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| taskGuid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetJob

**Description (200):** Success

---

#### PATCH /v1/jobs/{guid}/task/{taskGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| taskGuid | path | string (uuid) |  | Yes |

**Request Schema:** PatchTask

**Response Schema (200):** GetTask

**Description (200):** Success

---

#### GET /v1/jobs/{guid}/jcr/{jcrGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| jcrGuid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetJobComponentReference

**Description (200):** Success

---

#### DELETE /v1/jobs/{guid}/jcr/{jcrGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| jcrGuid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetJob

**Description (200):** Success

---

#### PATCH /v1/jobs/{guid}/jcr/{jcrGuid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |
| jcrGuid | path | string (uuid) |  | Yes |

**Request Schema:** PatchJobComponentReference

**Response Schema (200):** GetJobComponentReference

**Description (200):** Success

---

#### POST /v1/jobs/{guid}/task

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Request Schema:** PostTask

**Response Schema (200):** GetTask

**Description (200):** Success

---

#### POST /v1/jobs/{guid}/jcr

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Request Schema:** PostJobComponentReference

**Response Schema (200):** GetJobComponentReference

**Description (200):** Success

---

#### POST /v1/jobs/batch

**Response Schema (200):** array of GetJob

**Description (200):** Success

---

#### DELETE /v1/jobs/batch

**Response Schema (200):** array of GetJob

**Description (200):** Success

---

#### PATCH /v1/jobs/batch

**Response Schema (200):** array of GetJob

**Description (200):** Success

---

#### POST /v1/jobs/{guid}/task/batch

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** array of GetTask

**Description (200):** Success

---

#### DELETE /v1/jobs/{guid}/task/batch

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetJob

**Description (200):** Success

---

#### PATCH /v1/jobs/{guid}/task/batch

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** array of GetTask

**Description (200):** Success

---

#### POST /v1/jobs/{guid}/jcr/batch

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** array of GetJobComponentReference

**Description (200):** Success

---

#### DELETE /v1/jobs/{guid}/jcr/batch

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetJob

**Description (200):** Success

---

#### PATCH /v1/jobs/{guid}/jcr/batch

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** array of GetJobComponentReference

**Description (200):** Success

---

#### POST /v1/jobs/tasks/batch

**Response Schema (200):** array of GetJob

**Description (200):** Success

---

#### PATCH /v1/jobs/tasks/batch

**Response Schema (200):** array of GetTask

**Description (200):** Success

---

#### DELETE /v1/jobs/tasks/batch

**Response Schema (200):** array of GetJob

**Description (200):** Success

---

### ResourceCategories

#### GET /v1/resourcecategories

**Response Schema (200):** array of GetResourceCategory

**Description (200):** Success

---

#### POST /v1/resourcecategories

**Request Schema:** PostResourceCategory

**Response Schema (200):** GetResourceCategory

**Description (200):** Success

---

#### GET /v1/resourcecategories/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetResourceCategory

**Description (200):** Success

---

#### DELETE /v1/resourcecategories/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** array of GetResourceCategory

**Description (200):** Success

---

#### PATCH /v1/resourcecategories/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Request Schema:** PatchResourceCategory

**Response Schema (200):** GetResourceCategory

**Description (200):** Success

---

### ResourceGroups

#### GET /v1/resourcegroups

**Response Schema (200):** array of GetResourceGroup

**Description (200):** Success

---

#### POST /v1/resourcegroups

**Request Schema:** PostResourceGroup

**Response Schema (200):** GetResourceGroup

**Description (200):** Success

---

#### GET /v1/resourcegroups/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetResourceGroup

**Description (200):** Success

---

#### DELETE /v1/resourcegroups/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** array of GetResourceGroup

**Description (200):** Success

---

#### PATCH /v1/resourcegroups/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Request Schema:** PatchResourceGroup

**Response Schema (200):** GetResourceGroup

**Description (200):** Success

---

### Resources

#### GET /v1/resources

**Response Schema (200):** array of GetResource

**Description (200):** Success

---

#### POST /v1/resources

**Request Schema:** PostResource

**Response Schema (200):** GetResource

**Description (200):** Success

---

#### GET /v1/resources/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** GetResource

**Description (200):** Success

---

#### DELETE /v1/resources/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Response Schema (200):** array of GetResource

**Description (200):** Success

---

#### PATCH /v1/resources/{guid}

**Parameters:**

| Name | In | Type | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| guid | path | string (uuid) |  | Yes |

**Request Schema:** PatchResource

**Response Schema (200):** GetResource

**Description (200):** Success

---

### Settings

#### GET /v1/settings

**Response Schema (200):** GetSettings

**Description (200):** Success

---

#### PATCH /v1/settings

**Request Schema:** PatchSettings

**Response Schema (200):** GetSettings

**Description (200):** Success

---

## Data Schemas

### Schema: ETag

**Description:** No description provided.

No properties defined.

---

### Schema: GetCalendarException

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Date | string | Date of the exception | format: date-time |
| WorkTime | string | Worktime string | nullable: true |
| Note | string | Note string | nullable: true |
| Category | string | Category Name | nullable: true |

---

### Schema: GetCalendarExceptionCategory

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |
| Color | string | Color, format "rgb(64,120,233)" | nullable: true |

---

### Schema: GetComponent

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |
| Guid | string | JPI internal id | format: uuid |
| Tasks | array of GetComponentTask | List of component tasks | nullable: true |
| HyperLinks | array of GetHyperLink | Hyperlinks | nullable: true |

---

### Schema: GetComponentTask

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | JPI internal id | format: uuid |
| TaskNo | string | Task no. | nullable: true |
| Name | string | Task Name | nullable: true |
| ProductionTimePerUnit | integer | Time needed to produce a single unit of this task in seconds | format: int32 |
| SetupTime | integer | Time needed to set up the resource(s) for the task in seconds | format: int32 |
| TeardownTime | integer | Time needed to reset the resource(s) to a default configuration in seconds | format: int32 |
| TransferTime | integer | Time needed to transfer the working items of this task to its predecessor(s) in seconds | format: int32 |
| ResourceGroupConstraints | array of GetResourceGroupConstraint | List of all used resource group constraints | nullable: true |
| Predecessors | array of Identifier | The predecessor tasks leading up to this task | nullable: true |
| TaskConnections | array of Identifier | The task connection tasks leading up to this task | nullable: true |
| TaskNote | string | Task Note | nullable: true |
| DisplayedTextFieldJobView | object ($ref: DisplayedTextField) |  |  |
| DisplayedTextFieldResView | object ($ref: DisplayedTextField) |  |  |
| ColorAs | string | The color as value | nullable: true |
| Quantity | integer | Task quantity | format: int32 |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| SendAheadQuantity | integer | Quantity of work in progress items with which the successor tasks will start to work | format: int32 |
| HyperLinks | array of GetHyperLink | Hyperlinks | nullable: true |
| Heads | integer | Heads | format: int32 |

---

### Schema: GetCustomField

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |
| DefaultValue | string | Default Value | nullable: true |

---

### Schema: GetHyperLink

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |
| Content | string | Content | nullable: true |

---

### Schema: GetJob

**Description:** Describes job with all scheduling results

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | JPI internal id | format: uuid |
| Name | string | Name | nullable: true |
| DueDate | string | Considered late if finished after | format: date-time, nullable: true |
| ReleaseDate | string | Earliest starting point | format: date-time, nullable: true |
| PlannedStart | string | Scheduling result for the start date/time of the first task | format: date-time, nullable: true |
| PlannedEnd | string | Scheduling result for the end date/time of the last task | format: date-time, nullable: true |
| ProcessingStart | string | Set and approved start date/time of the first task | format: date-time, nullable: true |
| ProcessingEnd | string | Set and approved end date/time of the first task | format: date-time, nullable: true |
| IsDueDateExceeded | boolean | True if scheduled/processed end is after due date |  |
| OrderStatus | object ($ref: OrderStatus) |  |  |
| SequenceNumber | integer | Unique priority, determines scheduling order | format: int32 |
| Strategy | object ($ref: Strategy) |  |  |
| AppliedStrategy | object ($ref: Strategy) |  |  |
| DueDateBuffer | integer |  | format: int32 |
| Automatic | boolean | Scheduling is done automaticly by the engine |  |
| JobNote | string | Free text field for additional information | nullable: true |
| Sales | number | Free number field for sales information | format: double |
| Customer | string | Free text field for customer information | nullable: true |
| Quantity | integer | Amount of items ordered | format: int32 |
| BaselineStartDate | string | Saved start date for comparison | format: date-time, nullable: true |
| BaselineEndDate | string | Saved end date for comparison | format: date-time, nullable: true |
| BaselineDueDate | string | Saved due date for comparison | format: date-time, nullable: true |
| BaselineSeqNo | integer | Saved Sequence Number for comparison | format: int32 |
| BaselineWaitTime | string | Saved wait time for comparison | format: date-span |
| BaselineReleaseDate | string | Saved release date for comparison | format: date-time, nullable: true |
| BaselineTimestamp | string | Date of saving for base line values | format: date-time, nullable: true |
| BaselineProcessTime | string | Saved process time for comparison | format: date-span |
| BaselineCycleTime | string | Saved cycle time for comparison | format: date-span |
| BaselineThroughputTime | string | Saved throughput time for comparison | format: date-span |
| Template | object ($ref: Identifier) |  |  |
| CreatedFromTemplate | string | The job origin, if it's built using a template | nullable: true |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| ExecuteStatus | object ($ref: TaskStatus) |  |  |
| Predecessors | array of Identifier | List of job predecessors | nullable: true |
| Successors | array of Identifier | List of job successors | nullable: true |
| Tasks | array of GetTask | List of tasks | nullable: true |
| ComponentReferences | array of GetJobComponentReference | List of components used | nullable: true |
| CreationDate | string | Date the job was created | format: date-time |
| PatchWarnings | array of string | Generated warnings after patching the job | nullable: true |
| HyperLinks | array of GetHyperLink | Hyperlinks | nullable: true |
| BufferLevel | number | The buffer level is defined as the quotient of total buffer and total remaining process time | format: double |
| Buffer | number | The job buffer | format: double |
| MaxRemainingCycleTime | number | The job Max Remaining CycleTime | format: double |
| BaselineBufferLevel | number | The baseline buffer level | format: double |
| BaselineBuffer | string | The baseline job buffer | format: date-span |
| BaselineMaxRemainingCycleTime | string | The baseline job Max Remaining CycleTime | format: date-span |
| BufferLevelResidual | number |  | format: double |
| BufferResidual | number | The job buffer | format: double |
| MaxRemainingCycleTimeResidual | number | The job Max Remaining CycleTime | format: double |
| JobProgress | number |  | format: double |

---

### Schema: GetJobComponentReference

**Description:** Describes component used in job

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Component | object ($ref: Identifier) |  |  |
| Guid | string | JPI internal id | format: uuid |
| TaskNo | string | Task number of Reference | nullable: true |
| CreatedTasks | array of Identifier | Tasks in job created from this | nullable: true |
| Predecessors | string | List of predecessors in routing | nullable: true |
| Quantity | integer | Amount of items needed | format: int32 |
| PatchWarnings | array of string | Generated warnings after patching the job | nullable: true |

---

### Schema: GetJobSequenceCriteria

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | JPI internal id | format: uuid |
| Order | integer | Order | format: int32 |
| Field | string | Field | nullable: true |
| FieldValue | string | FieldValue | nullable: true |

---

### Schema: GetJobTemplate

**Description:** Describes job template

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | JPI internal id | format: uuid |
| Name | string | Name | nullable: true |
| Tasks | array of GetJobTemplateTask | List of template tasks | nullable: true |
| Strategy | object ($ref: TemplateStrategy) |  |  |
| DueDateBuffer | integer |  | format: int32 |
| AdditionalText | string | Free text field for additional information | nullable: true |
| ComponentReferences | array of GetTemplateComponentReference | List of components used | nullable: true |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| HyperLinks | array of GetHyperLink | Hyperlinks | nullable: true |

---

### Schema: GetJobTemplateTask

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | JPI internal id | format: uuid |
| TaskNo | string | Task no. | nullable: true |
| Name | string | Task Name | nullable: true |
| ProductionTimePerUnit | integer | Time needed to produce a single unit of this task in seconds | format: int32 |
| SetupTime | integer | Time needed to set up the resource(s) for the task in seconds | format: int32 |
| TeardownTime | integer | Time needed to reset the resource(s) to a default configuration in seconds | format: int32 |
| TransferTime | integer | Time needed to transfer the working items of this task to its predecessor(s) in seconds | format: int32 |
| ResourceGroupConstraints | array of GetResourceGroupConstraint | List of all used resource group constraints | nullable: true |
| Predecessors | array of Identifier | The predecessor tasks leading up to this task | nullable: true |
| ComponentPredecessors | array of string | The predecessor component tasks leading up to this task | nullable: true |
| TaskConnections | array of Identifier | The task connections leading up to this task | nullable: true |
| TaskNote | string | Task Note | nullable: true |
| DisplayedTextFieldJobView | object ($ref: DisplayedTextField) |  |  |
| DisplayedTextFieldResView | object ($ref: DisplayedTextField) |  |  |
| ColorAs | string | The color as value | nullable: true |
| Quantity | integer | Task quantity | format: int32 |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| SendAheadQuantity | integer | Quantity of work in progress items with which the successor tasks will start to work | format: int32 |
| HyperLinks | array of GetHyperLink | Hyperlinks | nullable: true |
| Heads | integer | Heads | format: int32 |

---

### Schema: GetResource

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | JPI internal id | format: uuid |
| Name | string | Name | nullable: true |
| Capacity | number | Value impacts Runtime of tasks: Runtime/Capacity | format: double |
| Finite | boolean | If false: place infinite tasks in parallel |  |
| OverloadIndicator | boolean | If FiniteFalse: true if multiple tasks are parallel |  |
| Disabled | boolean | false as default, true if resource has been disabled manually |  |
| ResourceGroups | array of Identifier | List of ResourceGroups this resource belongs to | nullable: true |
| CustomFieldValue1 | string |  | nullable: true |
| CustomFieldValue2 | string |  | nullable: true |
| CustomFieldValue3 | string |  | nullable: true |
| CustomFieldValue4 | string |  | nullable: true |
| CustomFieldValue5 | string |  | nullable: true |
| CustomFieldValue6 | string |  | nullable: true |
| CustomFieldValue7 | string |  | nullable: true |
| CustomFieldValue8 | string |  | nullable: true |
| CustomFieldValue9 | string |  | nullable: true |
| CustomFieldValue10 | string |  | nullable: true |
| ResourceCalendarGuid | string | JPI internal id | format: uuid |
| WorktimesPerWeekday | array of GetWorkTimePerWeekday | List of Worktimes per Weekday definitons | nullable: true |
| CalendarExceptions | array of GetCalendarException | List of CalendarExceptions | nullable: true |
| LoadData | array of GetResourceLoadData | List of LoadInformation per Day | nullable: true |

---

### Schema: GetResourceCategory

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | JPI internal id | format: uuid |
| Name | string | Name | nullable: true |
| ResourceGroups | array of Identifier | List of ResourceGroups which belongs to this category | nullable: true |

---

### Schema: GetResourceGroup

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | JPI internal id | format: uuid |
| Name | string | Name | nullable: true |
| ResourceCategory | object ($ref: Identifier) |  |  |
| Resources | array of Identifier | List of resources in this group | nullable: true |

---

### Schema: GetResourceGroupConstraint

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| ResourceConstraints | array of Identifier | List of allowed resources | nullable: true |
| ResourceUsage | number | Resource Usage | format: double |
| TaskConstraint | object ($ref: Identifier) |  |  |
| ResourceGroup | object ($ref: Identifier) |  |  |

---

### Schema: GetResourceLoadData

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Date | string | Date | format: date-time |
| Capacity | integer | Capacity in seconds | format: int32 |
| Load | integer | Load in seconds | format: int32 |
| Idle | integer | Idle time in seconds | format: int32 |

---

### Schema: GetSettings

**Description:** Describes the properties under "Settings"

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| JobCustomField1 | object ($ref: GetCustomField) |  |  |
| JobCustomField2 | object ($ref: GetCustomField) |  |  |
| JobCustomField3 | object ($ref: GetCustomField) |  |  |
| JobCustomField4 | object ($ref: GetCustomField) |  |  |
| JobCustomField5 | object ($ref: GetCustomField) |  |  |
| JobCustomField6 | object ($ref: GetCustomField) |  |  |
| JobCustomField7 | object ($ref: GetCustomField) |  |  |
| JobCustomField8 | object ($ref: GetCustomField) |  |  |
| JobCustomField9 | object ($ref: GetCustomField) |  |  |
| JobCustomField10 | object ($ref: GetCustomField) |  |  |
| TaskCustomField1 | object ($ref: GetCustomField) |  |  |
| TaskCustomField2 | object ($ref: GetCustomField) |  |  |
| TaskCustomField3 | object ($ref: GetCustomField) |  |  |
| TaskCustomField4 | object ($ref: GetCustomField) |  |  |
| TaskCustomField5 | object ($ref: GetCustomField) |  |  |
| TaskCustomField6 | object ($ref: GetCustomField) |  |  |
| TaskCustomField7 | object ($ref: GetCustomField) |  |  |
| TaskCustomField8 | object ($ref: GetCustomField) |  |  |
| TaskCustomField9 | object ($ref: GetCustomField) |  |  |
| TaskCustomField10 | object ($ref: GetCustomField) |  |  |
| TaskColorAsField | object ($ref: GetCustomField) |  |  |
| ResourceCustomField1 | object ($ref: GetCustomField) |  |  |
| ResourceCustomField2 | object ($ref: GetCustomField) |  |  |
| ResourceCustomField3 | object ($ref: GetCustomField) |  |  |
| ResourceCustomField4 | object ($ref: GetCustomField) |  |  |
| ResourceCustomField5 | object ($ref: GetCustomField) |  |  |
| ResourceCustomField6 | object ($ref: GetCustomField) |  |  |
| ResourceCustomField7 | object ($ref: GetCustomField) |  |  |
| ResourceCustomField8 | object ($ref: GetCustomField) |  |  |
| ResourceCustomField9 | object ($ref: GetCustomField) |  |  |
| ResourceCustomField10 | object ($ref: GetCustomField) |  |  |
| PlanningStart | string | Planning start | format: date-time |
| PlanningHorizon | integer | Planning horizon in weeks | format: int32 |
| DaysBeforePlanningStart | integer | Days before planning Start | format: int32 |
| JobViewBarText | object ($ref: DisplayedTextField) |  |  |
| ResourceViewBarText | object ($ref: DisplayedTextField) |  |  |
| JobStrategy | object ($ref: Strategy) |  |  |
| BarColorInNonProdTime | object ($ref: ColorOfBarInNonProdTime) |  |  |
| Locale | string | Locale | nullable: true |
| JobStatusReadyTasks | array of integer | List of job status ready tasks | nullable: true |
| SetupTimeStarts | object ($ref: SetupTimeStarts) |  |  |
| TeardownTimeStarts | object ($ref: TeardownTimeStarts) |  |  |
| ApprovalWorkflow | object ($ref: ApprovalWorkflow) |  |  |
| ScheduleEngineRunDirectly | boolean | Schedule Engine Run Directly |  |
| GlobalApplyCapacityConstraints | boolean |  |  |
| ShowTooltip | object ($ref: ShowTooltip) |  |  |
| ExecuteTracking | object ($ref: ExecuteTracking) |  |  |
| ShopfloorExecuteTrackingMode | object ($ref: ShopfloorExecuteTrackingMode) |  |  |
| CalculateReleasedateOnCreation | boolean | Calculate Releasedate On Creation |  |
| ReleasedateCalculationBuffer | number | Releasedate Calculation Buffer, Default 1.0 | format: double |
| UseResourceCategories | boolean | Use resource categories or normal resource groups mode |  |
| UseWildcardsInFilterEntries | boolean |  |  |
| AutoDueDateBuffer | integer |  | format: int32 |
| CalendarExceptionCategories | array of GetCalendarExceptionCategory | List of CalendarExceptionCategories | nullable: true |
| JobSequenceCriteria | array of GetJobSequenceCriteria | List of JobSequenceCriteria | nullable: true |

---

### Schema: GetTask

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | JPI internal id | format: uuid |
| TaskNo | string | Task no. | nullable: true |
| Name | string | Task Name | nullable: true |
| Start | string | Start date/time of the task | format: date-time, nullable: true |
| End | string | End date/time of the task | format: date-time, nullable: true |
| AssignedResources | array of Identifier | The resources to be used for this task | nullable: true |
| ProductionTimePerUnit | integer | Time needed to produce a single unit of this task in seconds | format: int32 |
| ProductionTimeStart | string | The scheduled start date/time of the actual production | format: date-time, nullable: true |
| ProductionTimeEnd | string | The scheduled end date/time of the actual production. | format: date-time, nullable: true |
| SetupTime | integer | Time needed to set up the resource(s) for the task in seconds | format: int32 |
| SetupTimeStart | string | The scheduled start date/time of the setting up phase | format: date-time, nullable: true |
| SetupTimeEnd | string | The scheduled end date/time of the setting up phase | format: date-time, nullable: true |
| TeardownTime | integer | Time needed to reset the resource(s) to a default configuration in seconds | format: int32 |
| TeardownTimeStart | string | The scheduled start date/time of the resource reset phase | format: date-time, nullable: true |
| TeardownTimeEnd | string | The scheduled end date/time of the resource reset phase | format: date-time, nullable: true |
| TransferTime | integer | Time needed to transfer the working items of this task to its predecessor(s) in seconds | format: int32 |
| TransferTimeStart | string | The scheduled start date/time of the transfer process | format: date-time, nullable: true |
| TransferTimeEnd | string | The scheduled end date/time of the transfer process | format: date-time, nullable: true |
| ProcessTime | integer | Sum of all detail times to represent total work amount in seconds | format: int32 |
| RemainingProcessTime | integer | Remainig Processing Time in seconds | format: int32 |
| ResourceGroupConstraints | array of GetResourceGroupConstraint | List of all used resource group constraints | nullable: true |
| StartNotEarlierThan | string | Time constraint date/time for the ASAP strategy | format: date-time, nullable: true |
| EndNotLaterThan | string | Time constraint date/time for the JIT strategy | format: date-time, nullable: true |
| Predecessors | array of Identifier | The predecessor tasks leading up to this task | nullable: true |
| TaskConnections | array of Identifier | The task connection tasks leading up to this task | nullable: true |
| ComponentPredecessors | array of Identifier | The predecessor component tasks leading up to this task | nullable: true |
| TaskNote | string | Task Note | nullable: true |
| OverloadIndicator | boolean | Indicator whether this task overloads a resource |  |
| DisplayedTextJobView | string | The displayed bar text in the job view | nullable: true |
| DisplayedTextResView | string | The displayed bar text in the resource view | nullable: true |
| DisplayedTextFieldJobView | object ($ref: DisplayedTextField) |  |  |
| DisplayedTextFieldResView | object ($ref: DisplayedTextField) |  |  |
| TaskStatus | object ($ref: TaskStatus) |  |  |
| Progress | integer | The percentage of completion for this task | format: int32 |
| ColorAs | string | The color as value | nullable: true |
| MarkedAsStatus | object ($ref: TaskStatus) |  |  |
| OperatorProcessingResources | array of Identifier | The processing resources as reported from the shopfloor feedback | nullable: true |
| OperatorProcessingStart | string | The reported start date/time of work on this task set by the shopfloor | format: date-time, nullable: true |
| OperatorProcessingEnd | string | The reported end date/time of work on this task set by the shopfloor | format: date-time, nullable: true |
| OperatorProcessingResourceGroups | array of Identifier | The processing resource groups as reported from the shopfloor feedback | nullable: true |
| OperatorNote | string | The note set up by the operator giving shopfloor feedback | nullable: true |
| OperatorFeedback | boolean | True if there is shopfloor feedback available for this task |  |
| PlannedStart | string | Scheduling result for the start date/time of the task | format: date-time, nullable: true |
| PlannedEnd | string | Scheduling result for the end date/time of the task | format: date-time, nullable: true |
| FromNow | integer | Time that still needs to be worked on the task, based on shopfloor feedback in seconds | format: int32 |
| ShopfloorReferenceDate | string | Date/time of the last received shopfloor feedback | format: date-time, nullable: true |
| LastUpdatedBy | string | The user who last gave feedback for the task | nullable: true |
| Quantity | integer | Task quantity | format: int32 |
| TemplateTask | object ($ref: Identifier) |  |  |
| ComponentTask | object ($ref: Identifier) |  |  |
| TaskOnHold | string | JSON representation of the new task generated after approval | nullable: true |
| WaitingTime | integer | Time waiting between end of predecessors and planned start of this task | format: int32 |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| SendAheadQuantity | integer | Quantity of work in progress items with which the successor tasks will start to work | format: int32 |
| TotalDoneQuantity | integer | Total done quantity | format: int32 |
| ShopfloorTotalDoneQuantity | integer | Shopfloor Total done quantity | format: int32 |
| BaselinePlannedStart | string | Saved start date/time for comparison | format: date-time, nullable: true |
| BaselinePlannedEnd | string | Saved end date/time for comparison | format: date-time, nullable: true |
| BaselineQuantity | integer | Saved quantity for comparison | format: int32 |
| BaselineProductionTimePerUnit | integer | Saved production time per unit for comparison in seconds | format: int32 |
| BaselineTeardownTime | integer | Saved teardown time for comparison in seconds | format: int32 |
| BaselineSetupTime | integer | Saved setup time for comparison in seconds | format: int32 |
| BaselineTransferTime | integer | Saved transfer time for comparison in seconds | format: int32 |
| BaselineTotalTime | integer | Saved Total time for comparison in seconds | format: int32 |
| BaselineAssignedResources | array of Identifier | Saved assigned resources for comparison | nullable: true |
| BaselineResourceGroupConstraints | array of GetResourceGroupConstraint | Saved resource group constraints for comparison | nullable: true |
| BaselineProcessTime | integer | Saved process time for comparison in seconds | format: int32 |
| BaselineCycleTime | integer | Saved cycle time for comparison in seconds | format: int32 |
| BaselineThroughputTime | integer | Saved throughput time for comparison in seconds | format: int32 |
| BaselineTimestamp | string | Date of saving for base line values | format: date-time, nullable: true |
| PatchWarnings | array of string | Generated warnings after patching the job | nullable: true |
| HyperLinks | array of GetHyperLink | Hyperlinks | nullable: true |
| Heads | integer | Heads | format: int32 |
| CreatedFromComponentTemplate | string | Says if a task is/ was a part or a component template | nullable: true |
| ProcessingRemainingTime | integer | Calculated task remaining time in seconds | format: int32 |

---

### Schema: GetTemplateComponentReference

**Description:** Describes component used in template

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | JPI internal id | format: uuid |
| TaskNo | string | Task number of Reference | nullable: true |
| Component | object ($ref: Identifier) |  |  |
| Quantity | integer | Amount of items needed, if 0 job.Quantity will be used | format: int32 |
| Predecessors | array of string | List of predecessors in routing | nullable: true |
| CreatedTasks | array of Identifier | Tasks in template created from this | nullable: true |

---

### Schema: GetWorkTimePerWeekday

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| DayOfWeek | object ($ref: Weekday) |  |  |
| WorkTime | string | Worktime string | nullable: true |

---

### Schema: Identifier

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |
| Guid | string | JPI internal id | format: uuid |

---

### Schema: JPIEventEntity

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| PartitionKey | string |  | nullable: true |
| RowKey | string |  | nullable: true |
| ETag | object ($ref: ETag) |  |  |
| Timestamp | string |  | format: date-time, nullable: true |
| ObjectGuid | string |  | nullable: true |
| ObjectType | string |  | nullable: true |
| ParentName | string |  | nullable: true |
| ObjectName | string |  | nullable: true |
| CustomerName | string |  | nullable: true |
| User | string |  | nullable: true |
| JPIEvent | string |  | nullable: true |
| PrevValue | string |  | nullable: true |
| Value | string |  | nullable: true |
| EventType | object ($ref: EventType) |  |  |
| EventObject | object ($ref: EventObjectType) |  |  |
| CreatedAt | string |  | format: date-time |
| myCreatedAt | string |  | format: date-time |

---

### Schema: PatchComponent

**Description:** Describes a component to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |
| HyperLinks | array of PatchHyperLink | List of HyperLinks | nullable: true |

---

### Schema: PatchComponentTask

**Description:** Describes a component task to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| TaskNo | string | Task no. | nullable: true |
| Name | string | Task Name | nullable: true |
| ProductionTimePerUnit | integer | Time needed to produce a single unit of this task in seconds | format: int32, nullable: true |
| SetupTime | integer | Time needed to set up the resource(s) for the task in seconds | format: int32, nullable: true |
| TeardownTime | integer | Time needed to reset the resource(s) to a default configuration in seconds | format: int32, nullable: true |
| TransferTime | integer | Time needed to transfer the working items of this task to its predecessor(s) in seconds | format: int32, nullable: true |
| ResourceGroupConstraints | array of PostResourceGroupConstraint | List of all used resource group constraints | nullable: true |
| PredecessorTaskNos | array of string | The predecessor tasks leading up to this task | nullable: true |
| TaskConnectionTaskNos | array of string | The task connection tasks leading up to this task | nullable: true |
| TaskNote | string | Task Note | nullable: true |
| DisplayedTextFieldJobView | object ($ref: DisplayedTextField) |  |  |
| DisplayedTextFieldResView | object ($ref: DisplayedTextField) |  |  |
| ColorAs | string | The color as value | nullable: true |
| Quantity | integer | Task quantity | format: int32, nullable: true |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| HyperLinks | array of PatchHyperLink | List of HyperLinks | nullable: true |
| SendAheadQuantity | integer | Quantity of work in progress items with which the successor tasks will start to work | format: int32, nullable: true |
| Heads | integer | Heads | format: int32 |

---

### Schema: PatchCustomField

**Description:** Describes a job to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |
| DefaultValue | string | DefaultValue | nullable: true |

---

### Schema: PatchHyperLink

**Description:** Describes a hyperlink to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |
| Content | string | Content | nullable: true |

---

### Schema: PatchJob

**Description:** Describes a job to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | Guid | format: uuid |
| Name | string | Name | nullable: true |
| DueDate | string | Considered late if finished after | nullable: true |
| ReleaseDate | string | Earliest starting point | nullable: true |
| OrderStatus | object ($ref: OrderStatus) |  |  |
| SequenceNumber | integer | Unique priority, determines scheduling order, must be > 0 | format: int32, nullable: true |
| Strategy | object ($ref: Strategy) |  |  |
| DueDateBuffer | integer |  | format: int32, nullable: true, min: 0, max: 2147483647 |
| Automatic | boolean | Scheduling is done automaticly by the engine | nullable: true |
| JobNote | string | Free text field for additional information | nullable: true |
| Sales | number | Free number field for sales information | format: double, nullable: true |
| Customer | string | Free text field for customer information | nullable: true |
| Quantity | integer | Amount of items ordered | format: int32, nullable: true |
| Template | string | Guid of template used in job creation | nullable: true |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| Predecessors | array of string | List of job predecessors Guids | nullable: true |
| HyperLinks | array of PatchHyperLink | List of HyperLinks | nullable: true |

---

### Schema: PatchJobComponentReference

**Description:** Describes a component reference in a job to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Guid | string | Guid | format: uuid |
| TaskNo | string | Task number of Reference | nullable: true |
| PredecessorTaskNos | string | The predecessor tasks or job component references leading up to this task | nullable: true |
| Quantity | integer | Amount of items needed | format: int32, nullable: true |

---

### Schema: PatchJobTemplate

**Description:** Describes a job template to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |
| Strategy | object ($ref: TemplateStrategy) |  |  |
| DueDateBuffer | integer |  | format: int32, nullable: true, min: 0, max: 2147483647 |
| AdditionalText | string | Free text field for additional information | nullable: true |
| CustomFieldValue1 | string |  | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| HyperLinks | array of PatchHyperLink | List of HyperLinks | nullable: true |

---

### Schema: PatchResource

**Description:** Describes a resource to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |
| Capacity | number | Value impacts Runtime of tasks: Runtime/Capacity must be > 0 | format: double, nullable: true |
| Finite | boolean | If false: place infinite tasks in parallel | nullable: true |
| Disabled | boolean | If true the resource will not be used in scheduling anymore | nullable: true |
| ResourceGroups | array of string | List of ResourceGroup Guids this resource belongs to | nullable: true |
| WorktimesPerWeekday | array of GetWorkTimePerWeekday | List of Worktimes per Weekday definitons | nullable: true |
| CalendarExceptions | array of GetCalendarException | List of CalendarExceptions | nullable: true |

---

### Schema: PatchResourceCategory

**Description:** Describes a resource category to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |

---

### Schema: PatchResourceGroup

**Description:** Describes a resource group to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | nullable: true |
| ResourceCategory | string | Guid of ResourceCategory | format: uuid |
| Resources | array of string | List of Guids for resources in this group | nullable: true |

---

### Schema: PatchResourceGroupConstraint

**Description:** Describes a resource group constraint to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| ResourceGroup | string | Resource Group Guid | Required, format: uuid |
| ResourceUsage | number | Resource Usage | format: double |
| TaskConstraint | string | Task Constraint | nullable: true |
| ResourceConstraints | array of string | List of allowed resource Guids | nullable: true |

---

### Schema: PatchSettings

**Description:** Describes a job to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| JobCustomField1 | object ($ref: PatchCustomField) |  |  |
| JobCustomField2 | object ($ref: PatchCustomField) |  |  |
| JobCustomField3 | object ($ref: PatchCustomField) |  |  |
| JobCustomField4 | object ($ref: PatchCustomField) |  |  |
| JobCustomField5 | object ($ref: PatchCustomField) |  |  |
| JobCustomField6 | object ($ref: PatchCustomField) |  |  |
| JobCustomField7 | object ($ref: PatchCustomField) |  |  |
| JobCustomField8 | object ($ref: PatchCustomField) |  |  |
| JobCustomField9 | object ($ref: PatchCustomField) |  |  |
| JobCustomField10 | object ($ref: PatchCustomField) |  |  |
| TaskColorAsField | object ($ref: PatchCustomField) |  |  |
| TaskCustomField1 | object ($ref: PatchCustomField) |  |  |
| TaskCustomField2 | object ($ref: PatchCustomField) |  |  |
| TaskCustomField3 | object ($ref: PatchCustomField) |  |  |
| TaskCustomField4 | object ($ref: PatchCustomField) |  |  |
| TaskCustomField5 | object ($ref: PatchCustomField) |  |  |
| TaskCustomField6 | object ($ref: PatchCustomField) |  |  |
| TaskCustomField7 | object ($ref: PatchCustomField) |  |  |
| TaskCustomField8 | object ($ref: PatchCustomField) |  |  |
| TaskCustomField9 | object ($ref: PatchCustomField) |  |  |
| TaskCustomField10 | object ($ref: PatchCustomField) |  |  |
| ResourceCustomField1 | object ($ref: PatchCustomField) |  |  |
| ResourceCustomField2 | object ($ref: PatchCustomField) |  |  |
| ResourceCustomField3 | object ($ref: PatchCustomField) |  |  |
| ResourceCustomField4 | object ($ref: PatchCustomField) |  |  |
| ResourceCustomField5 | object ($ref: PatchCustomField) |  |  |
| ResourceCustomField6 | object ($ref: PatchCustomField) |  |  |
| ResourceCustomField7 | object ($ref: PatchCustomField) |  |  |
| ResourceCustomField8 | object ($ref: PatchCustomField) |  |  |
| ResourceCustomField9 | object ($ref: PatchCustomField) |  |  |
| ResourceCustomField10 | object ($ref: PatchCustomField) |  |  |
| PlanningStart | string | Planning start | nullable: true |
| PlanningHorizon | integer | Planning horizon in weeks | format: int32, nullable: true |
| DaysBeforePlanningStart | integer | Days before planning Start | format: int32, nullable: true |
| JobViewBarText | object ($ref: DisplayedTextField) |  |  |
| ResourceViewBarText | object ($ref: DisplayedTextField) |  |  |
| JobStrategy | object ($ref: Strategy) |  |  |
| Locale | string | Locale | nullable: true |
| JobStatusReadyTasks | array of integer | List of job status ready tasks | nullable: true |
| SetupTimeStarts | object ($ref: SetupTimeStarts) |  |  |
| TeardownTimeStarts | object ($ref: TeardownTimeStarts) |  |  |
| ApprovalWorkflow | object ($ref: ApprovalWorkflow) |  |  |
| ScheduleEngineRunDirectly | boolean | Schedule Engine Run Directly | nullable: true |
| ShowTooltip | object ($ref: ShowTooltip) |  |  |
| ExecuteTracking | object ($ref: ExecuteTracking) |  |  |
| ShopfloorExecuteTrackingMode | object ($ref: ShopfloorExecuteTrackingMode) |  |  |
| CalculateReleasedateOnCreation | boolean | Calculate Releasedate On Creation | nullable: true |
| UseResourceCategories | boolean | User Resource Categories or normal resource groups mode | nullable: true |
| ReleasedateCalculationBuffer | number | Releasedate Calculation Buffer, Default 1.0 | format: double, nullable: true |
| CalendarExceptionCategories | array of GetCalendarExceptionCategory | List of CalendarExceptionCategories | nullable: true |
| JobSequenceCriteria | array of GetJobSequenceCriteria | List of JobSequenceCriteria | nullable: true |

---

### Schema: PatchTask

**Description:** Describes a task to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| JobGuid | string | Guid of Parent Job | format: uuid |
| Guid | string | Guid | format: uuid |
| TaskNo | string | Task no. | nullable: true |
| Name | string | Task Name | nullable: true |
| ProductionTimePerUnit | integer | Time needed to produce a single unit of this task in seconds | format: int32, nullable: true |
| SetupTime | integer | Time needed to set up the resource(s) for the task in seconds | format: int32, nullable: true |
| TeardownTime | integer | Time needed to reset the resource(s) to a default configuration in seconds | format: int32, nullable: true |
| TransferTime | integer | Time needed to transfer the working items of this task to its predecessor(s) in seconds | format: int32, nullable: true |
| ResourceGroupConstraints | array of PatchResourceGroupConstraint | List of all used resource group constraints | nullable: true |
| StartNotEarlierThan | string | Time constraint date/time for the ASAP strategy | nullable: true |
| EndNotLaterThan | string | Time constraint date/time for the JIT strategy | nullable: true |
| PredecessorTaskNos | array of string | The predecessor tasks leading up to this task | nullable: true |
| ComponentPredecessorsTaskNos | array of string | The predecessor component tasks leading up to this task | nullable: true |
| TaskConnectionTaskNos | array of string | The task connection tasks leading up to this task | nullable: true |
| TaskNote | string | Task Note | nullable: true |
| DisplayedTextFieldJobView | object ($ref: DisplayedTextField) |  |  |
| DisplayedTextFieldResView | object ($ref: DisplayedTextField) |  |  |
| ColorAs | string | The color as value | nullable: true |
| Quantity | integer | Task quantity | format: int32, nullable: true |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| HyperLinks | array of PatchHyperLink | List of HyperLinks | nullable: true |
| SendAheadQuantity | integer | Quantity of work in progress items with which the successor tasks will start to work | format: int32, nullable: true |
| TotalDoneQuantity | integer | Total done quantity | format: int32, nullable: true |
| ShopfloorTotalDoneQuantity | integer | Shopfloor Total done quantity | format: int32, nullable: true |
| OperatorProcessingStart | string | The start time of processing reported by shopfloor data | nullable: true |
| OperatorProcessingEnd | string | The finish time of processing reported by shopfloor data | nullable: true |
| MarkedAsStatus | object ($ref: TaskStatus) |  |  |
| OperatorProcessingResourceGroups | array of string | The processing resource groups reported by shopfloor data | nullable: true |
| OperatorProcessingResources | array of string | The processing resources reported by shopfloor data | nullable: true |
| OperatorNote | string | The note specified the the operator | nullable: true |
| OperatorNoteApproved | boolean | Specifies whether the operator note was approved | nullable: true |
| OperatorFeedback | boolean | Is Shopfloor feedback available | nullable: true |
| ProcessingStart | string | The start time of processing applied by shopfloor data | nullable: true |
| ProcessingEnd | string | The finish time of processing applied by shopfloor data | nullable: true |
| ProcessingResourceGroups | array of string | The processing resource groups applied by shopfloor data | nullable: true |
| ProcessingResources | array of string | The processing resources applied by shopfloor data | nullable: true |
| FromNow | integer | Specifies the remaining time from the current time still to be worked on (seconds) | format: int64, nullable: true |
| ShopfloorReferenceDate | string | The timestamp datetime for the shopfloor feedback | nullable: true |
| Heads | integer | SubTasks Heads | format: int32 |

---

### Schema: PatchTemplateCompRef

**Description:** Describes a job template component reference to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| TaskNo | string | Task number of Reference | nullable: true |
| Component | string | Guid of Component used | nullable: true |
| Quantity | integer | Amount of items needed, if 0 job.Quantity will be used | format: int32, nullable: true |
| Predecessors | array of string | List of predecessor taskNos in routing | nullable: true |

---

### Schema: PatchTemplateTask

**Description:** Describes a job template task to be updated

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| TaskNo | string | Task no. | nullable: true |
| Name | string | Task Name | nullable: true |
| ProductionTimePerUnit | integer | Time needed to produce a single unit of this task in seconds | format: int32, nullable: true |
| SetupTime | integer | Time needed to set up the resource(s) for the task in seconds | format: int32, nullable: true |
| TeardownTime | integer | Time needed to reset the resource(s) to a default configuration in seconds | format: int32, nullable: true |
| TransferTime | integer | Time needed to transfer the working items of this task to its predecessor(s) in seconds | format: int32, nullable: true |
| ResourceGroupConstraints | array of PostResourceGroupConstraint | List of all used resource group constraints | nullable: true |
| PredecessorTaskNos | array of string | The predecessor tasks leading up to this task | nullable: true |
| ComponentPredecessorsTaskNos | array of string | The predecessor component tasks leading up to this task | nullable: true |
| TaskConnectionTaskNos | array of string | The task connection tasks leading up to this task | nullable: true |
| TaskNote | string | Task Note | nullable: true |
| DisplayedTextFieldJobView | object ($ref: DisplayedTextField) |  |  |
| DisplayedTextFieldResView | object ($ref: DisplayedTextField) |  |  |
| ColorAs | string | The color as value | nullable: true |
| Quantity | integer | Task quantity | format: int32, nullable: true |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| HyperLinks | array of PatchHyperLink | List of HyperLinks | nullable: true |
| SendAheadQuantity | integer | Quantity of work in progress items with which the successor tasks will start to work | format: int32, nullable: true |
| Heads | integer | Heads | format: int32 |

---

### Schema: PostComponent

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | Required |
| Hyperlinks | array of PostHyperLink | List of hyperlinks used | nullable: true |
| Tasks | array of PostComponentTask | List of component tasks | nullable: true |

---

### Schema: PostComponentTask

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| TaskNo | string | Task no. | Required |
| Name | string | Task Name | nullable: true |
| ProductionTimePerUnit | integer | Time needed to produce a single unit of this task in seconds | format: int32 |
| SetupTime | integer | Time needed to set up the resource(s) for the task in seconds | format: int32 |
| TeardownTime | integer | Time needed to reset the resource(s) to a default configuration in seconds | format: int32 |
| TransferTime | integer | Time needed to transfer the working items of this task to its predecessor(s) in seconds | format: int32 |
| ResourceGroupConstraints | array of PostResourceGroupConstraint | List of all used resource group constraints | Required |
| PredecessorTaskNos | array of string | The predecessor tasks leading up to this task | nullable: true |
| TaskConnectionTaskNos | array of string | The task connection tasks leading up to this task | nullable: true |
| TaskNote | string | Task Note | nullable: true |
| DisplayedTextFieldJobView | object ($ref: DisplayedTextField) |  |  |
| DisplayedTextFieldResView | object ($ref: DisplayedTextField) |  |  |
| ColorAs | string | The color as value | nullable: true |
| Quantity | integer | Task quantity | format: int32 |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| Hyperlinks | array of PostHyperLink | List of hyperlinks used | nullable: true |
| SendAheadQuantity | integer | Quantity of work in progress items with which the successor tasks will start to work | format: int32 |
| Heads | integer | Task Heads | format: int32 |

---

### Schema: PostHyperLink

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | Required |
| Content | string | Content | Required |

---

### Schema: PostJob

**Description:** Describes a job to be created

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | Required |
| DueDate | string | Considered late if finished after | format: date-time, nullable: true |
| ReleaseDate | string | Earliest starting point | format: date-time, nullable: true |
| OrderStatus | object ($ref: OrderStatus) |  |  |
| SequenceNumber | integer | Unique priority, determines scheduling order, must be > 0 | format: int32 |
| Strategy | object ($ref: Strategy) |  |  |
| DueDateBuffer | integer |  | format: int32, nullable: true, min: 0, max: 2147483647 |
| Automatic | boolean | Scheduling is done automaticly by the engine |  |
| JobNote | string | Free text field for additional information | nullable: true |
| Sales | number | Free number field for sales information | format: double |
| Customer | string | Free text field for customer information | nullable: true |
| Quantity | integer | Amount of items ordered | format: int32 |
| Template | string | Guid of template used in job creation | format: uuid |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| Hyperlinks | array of PostHyperLink | List of hyperlinks used | nullable: true |
| Predecessors | array of string | List of job predecessors Guids | nullable: true |
| Tasks | array of PostTask | List of tasks(can be empty) | Required |
| ComponentReferences | array of PostJobComponentReference | List of components used | nullable: true |

---

### Schema: PostJobComponentReference

**Description:** Describes components used in jobs

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Component | string | Guid of Component used | Required |
| TaskNo | string | Task number of Reference | Required |
| Predecessors | array of string | List of predecessors in job routing | nullable: true |
| Quantity | integer | Amount of items needed | format: int32 |

---

### Schema: PostJobTemplate

**Description:** Describes job template to create

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | Required |
| Tasks | array of PostTemplateTask | List of template tasks | nullable: true |
| Strategy | object ($ref: TemplateStrategy) |  |  |
| DueDateBuffer | integer |  | format: int32, nullable: true, min: 0, max: 2147483647 |
| AdditionalText | string | Free text field for additional information | nullable: true |
| ComponentReferences | array of PostTemplateComponentReference | List of components used | nullable: true |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| Hyperlinks | array of PostHyperLink | List of hyperlinks used | nullable: true |

---

### Schema: PostResource

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | Required |
| Capacity | number | Value impacts Runtime of tasks: Runtime/Capacity must be > 0 | format: double |
| Finite | boolean | If false: place infinite tasks in parallel |  |
| ResourceGroups | array of string | List of ResourceGroup Guids this resource belongs to | nullable: true |
| WorktimesPerWeekday | array of GetWorkTimePerWeekday | List of Worktimes per Weekday definitons | Required |
| CalendarExceptions | array of GetCalendarException | List of CalendarExceptions | nullable: true |

---

### Schema: PostResourceCategory

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | Required |

---

### Schema: PostResourceGroup

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| Name | string | Name | Required |
| ResourceCategory | string | Guid of ResourceCategory | format: uuid |
| Resources | array of string | List of Guids for resources in this group | nullable: true |

---

### Schema: PostResourceGroupConstraint

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| ResourceGroup | string | Resource Group Guid | Required |
| ResourceUsage | number | Resource Usage | format: double |
| TaskConstraint | string | Task Constraint | nullable: true |
| ResourceConstraints | array of string |  | Required |

---

### Schema: PostTask

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| TaskNo | string | Task no. | Required |
| Name | string | Task Name | nullable: true |
| ProductionTimePerUnit | integer | Time needed to produce a single unit of this task in seconds | format: int32 |
| SetupTime | integer | Time needed to set up the resource(s) for the task in seconds | format: int32 |
| TeardownTime | integer | Time needed to reset the resource(s) to a default configuration in seconds | format: int32 |
| TransferTime | integer | Time needed to transfer the working items of this task to its predecessor(s) in seconds | format: int32 |
| ResourceGroupConstraints | array of PostResourceGroupConstraint | List of all used resource group constraints | Required |
| StartNotEarlierThan | string | Time constraint date/time for the ASAP strategy | format: date-time, nullable: true |
| EndNotLaterThan | string | Time constraint date/time for the JIT strategy | format: date-time, nullable: true |
| PredecessorTaskNos | array of string | The predecessor tasks leading up to this task | nullable: true |
| ComponentPredecessorsTaskNos | array of string | The predecessor component tasks leading up to this task | nullable: true |
| TaskConnectionTaskNos | array of string | The task connection tasks leading up to this task | nullable: true |
| TaskNote | string | Task Note | nullable: true |
| DisplayedTextFieldJobView | object ($ref: DisplayedTextField) |  |  |
| DisplayedTextFieldResView | object ($ref: DisplayedTextField) |  |  |
| ColorAs | string | The color as value | nullable: true |
| Quantity | integer | Task quantity | format: int32 |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| Hyperlinks | array of PostHyperLink | List of hyperlinks used | nullable: true |
| SendAheadQuantity | integer | Quantity of work in progress items with which the successor tasks will start to work | format: int32 |
| TotalDoneQuantity | integer | Total done quantity | format: int32 |
| ShopfloorTotalDoneQuantity | integer | Shopfloor Total done quantity | format: int32 |
| Heads | integer | Heads of subTasks | format: int32 |

---

### Schema: PostTaskToDiffJobs

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| JobGuid | string |  | Required, format: uuid |
| TaskNo | string |  | Required |
| Name | string |  | nullable: true |
| ProductionTimePerUnit | integer |  | format: int32 |
| SetupTime | integer |  | format: int32 |
| TeardownTime | integer |  | format: int32 |
| TransferTime | integer |  | format: int32 |
| ResourceGroupConstraints | array of PostResourceGroupConstraint |  | Required |
| StartNotEarlierThan | string |  | format: date-time, nullable: true |
| EndNotLaterThan | string |  | format: date-time, nullable: true |
| PredecessorTaskNos | array of string |  | nullable: true |
| ComponentPredecessorsTaskNos | array of string |  | nullable: true |
| TaskConnectionTaskNos | array of string |  | nullable: true |
| TaskNote | string |  | nullable: true |
| DisplayedTextFieldJobView | object ($ref: DisplayedTextField) |  |  |
| DisplayedTextFieldResView | object ($ref: DisplayedTextField) |  |  |
| ColorAs | string |  | nullable: true |
| Quantity | integer |  | format: int32 |
| CustomFieldValue1 | string |  | nullable: true |
| CustomFieldValue2 | string |  | nullable: true |
| CustomFieldValue3 | string |  | nullable: true |
| CustomFieldValue4 | string |  | nullable: true |
| CustomFieldValue5 | string |  | nullable: true |
| CustomFieldValue6 | string |  | nullable: true |
| CustomFieldValue7 | string |  | nullable: true |
| CustomFieldValue8 | string |  | nullable: true |
| CustomFieldValue9 | string |  | nullable: true |
| CustomFieldValue10 | string |  | nullable: true |
| Hyperlinks | array of PostHyperLink |  | nullable: true |
| SendAheadQuantity | integer |  | format: int32 |
| TotalDoneQuantity | integer |  | format: int32 |
| ShopfloorTotalDoneQuantity | integer |  | format: int32 |
| Heads | integer |  | format: int32 |

---

### Schema: PostTemplateComponentReference

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| TaskNo | string | Task number of Reference | Required |
| Component | string | Guid of Component used | Required |
| Quantity | integer | Amount of items needed, if 0 job.Quantity will be used | format: int32 |
| Predecessors | array of string | List of predecessor taskNos in routing | nullable: true |

---

### Schema: PostTemplateTask

**Description:** No description provided.

| Field | Type | Description | Constraints |
| :--- | :--- | :--- | :--- |
| TaskNo | string | Task no. | Required |
| Name | string | Task Name | nullable: true |
| ProductionTimePerUnit | integer | Time needed to produce a single unit of this task | format: int32 |
| SetupTime | integer | Time needed to set up the resource(s) for the task in seconds | format: int32 |
| TeardownTime | integer | Time needed to reset the resource(s) to a default configuration in seconds | format: int32 |
| TransferTime | integer | Time needed to transfer the working items of this task to its predecessor(s) in seconds | format: int32 |
| ResourceGroupConstraints | array of PostResourceGroupConstraint | List of all used resource group constraints in seconds | Required |
| PredecessorTaskNos | array of string | The predecessor tasks leading up to this task | nullable: true |
| ComponentPredecessors | array of string | The predecessor component tasks leading up to this task | nullable: true |
| TaskConnectionTaskNos | array of string | The task connection tasks leading up to this task | nullable: true |
| TaskNote | string | Task Note | nullable: true |
| DisplayedTextFieldJobView | object ($ref: DisplayedTextField) |  |  |
| DisplayedTextFieldResView | object ($ref: DisplayedTextField) |  |  |
| ColorAs | string | The color as value | nullable: true |
| Quantity | integer | Task quantity | format: int32 |
| CustomFieldValue1 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue2 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue3 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue4 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue5 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue6 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue7 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue8 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue9 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| CustomFieldValue10 | string | Free text field. Must be specified in jpi settings. | nullable: true |
| Hyperlinks | array of PostHyperLink | List of hyperlinks used | nullable: true |
| SendAheadQuantity | integer | Quantity of work in progress items with which the successor tasks will start to work | format: int32 |
| Heads | integer | Heads | format: int32 |

---

## Enum Definitions

### ApprovalWorkflow

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `NotActivated` | |
| `Activated` | |

### ColorOfBarInNonProdTime

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `Transparent` | |
| `White` | |
| `SameAstheBarColorInProdTimes` | |
| `CalculatedColor` | |

### DisplayedTextField

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `None` | |
| `JobName` | |
| `Strategy` | |
| `ReleaseDate` | |
| `DueDate` | |
| `JobStatus` | |
| `Customer` | |
| `AdditionalJobText` | |
| `TaskNo` | |
| `TaskName` | |
| `RunTime` | |
| `Resource` | |
| `ResourceGroup` | |
| `TimeConstraint` | |
| `Predecessors` | |
| `AdditionalTaskText` | |
| `GlobalSetting` | |
| `TemplateName` | |
| `JobCustomField1` | |
| `JobCustomField2` | |
| `Sales` | |
| `OperationCustomField1` | |
| `OperationCustomField2` | |

### EventObjectType

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `SchedulingModel` | |
| `ResourceCalendar` | |
| `DayPattern` | |
| `Resource` | |
| `ResourceGroup` | |
| `Job` | |
| `Task` | |
| `Template` | |
| `TemplateSet` | |
| `TemplateTask` | |
| `ServerMessage` | |
| `CustomField` | |
| `Component` | |
| `ComponentTask` | |
| `JobComponentRef` | |
| `TemplateComponentRef` | |
| `None` | |
| `JobHyperLink` | |

### EventType

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `None` | |
| `AssignedResourcesChanged` | |
| `BufferChanged` | |
| `Create` | |
| `CycleTimeChanged` | |
| `Delete` | |
| `DueDateChanged` | |
| `DueDateExceededChanged` | |
| `EndDateChanged` | |
| `NameChanged` | |
| `NoChanged` | |
| `OperatorNoteExistenceChanged` | |
| `ProcessTimeChanged` | |
| `QuantityChanged` | |
| `ReleaseDateChanged` | |
| `RunTimePerUnitChanged` | |
| `SequenceNumberChanged` | |
| `SetupTimeChanged` | |
| `ShopfloorApproved` | |
| `ShopfloorDataChanged` | |
| `StartDateChanged` | |
| `StatusChanged` | |
| `TeardownTimeChanged` | |
| `ThroughputTimeChanged` | |
| `TimeConstraintChanged` | |
| `TransferTimeChanged` | |

### ExecuteTracking

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `TimeBased` | |
| `QuantityBased` | |

### OrderStatus

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `Quoted` | |
| `Ordered` | |
| `Released` | |
| `Standby` | |

### SetupTimeStarts

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `IndependentFromPredecessor` | |
| `AfterPredecessor` | |

### ShopfloorExecuteTrackingMode

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `Totals` | |
| `Additions` | |

### ShowTooltip

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `Immediately` | |
| `SlightlyDelayed` | |
| `SeverelyDelayed` | |
| `No` | |

### Strategy

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `Asap` | |
| `Jit` | |
| `ASAP_PLUS` | |
| `JIT_PLUS` | |

### TaskStatus

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `Planned` | |
| `Started` | |
| `Finished` | |
| `None` | |
| `Standby` | |

### TeardownTimeStarts

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `IndependentFromSuccessor` | |
| `BeforeSuccessor` | |

### TemplateStrategy

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `NotSet` | |
| `Asap` | |
| `Jit` | |
| `ASAP_PLUS` | |
| `JIT_PLUS` | |

### Weekday

**Description:** No description provided.

**Type:** string

| Value | Description |
| :--- | :--- |
| `Monday` | |
| `Tuesday` | |
| `Wednesday` | |
| `Thursday` | |
| `Friday` | |
| `Saturday` | |
| `Sunday` | |
## References

[1] just plan it API docs: https://api.just-plan-it.com/index.html
