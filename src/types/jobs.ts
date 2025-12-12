/**
 * JPI API Job Schemas
 * Types for Jobs, Tasks, and Job Component References
 */

import {
  OrderStatus,
  Strategy,
  TaskStatus,
  ExecuteStatus,
  ConstraintType
} from './enums.js';
import {
  Identifier,
  GetHyperLink,
  PostHyperLink,
  PatchHyperLink,
  GetResourceGroupConstraint,
  PostResourceGroupConstraint
} from './schemas.js';

// ============================================
// Task Schemas
// ============================================

export interface GetTask {
  // Core Identification
  guid?: string | null;
  taskNo?: number;
  name?: string | null;
  taskNote?: string | null;
  color?: string | null;

  // Time Fields (all in SECONDS)
  processTime?: number;
  setupTime?: number;
  teardownTime?: number;
  idleTime?: number;
  preIdleTime?: number;
  postIdleTime?: number;

  // Scheduling Dates
  processingStart?: string | null;
  processingEnd?: string | null;
  plannedStart?: string | null;
  plannedEnd?: string | null;

  // Resource Assignment
  resourceGroupConstraints?: Identifier[];
  resource?: Identifier | null;
  resourceName?: string | null;

  // Planning Constraints
  constraintDate?: string | null;
  constraintType?: ConstraintType;
  taskStatus?: TaskStatus;
  isCritical?: boolean;

  // Baseline Fields
  baselineStartDate?: string | null;
  baselineEndDate?: string | null;
  baselineProcessingStart?: string | null;
  baselineProcessingEnd?: string | null;
  baselineSetupTime?: number;
  baselineTeardownTime?: number;
  baselineProcessTime?: number;
  baselineIdleTime?: number;

  // Operator/Shopfloor Feedback
  operatorSetupTimeStart?: string | null;
  operatorSetupTimeEnd?: string | null;
  operatorTeardownTimeStart?: string | null;
  operatorTeardownTimeEnd?: string | null;
  operatorProcessingStart?: string | null;
  operatorProcessingEnd?: string | null;
  operatorSetupTime?: number | null;
  operatorTeardownTime?: number | null;
  operatorProcessTime?: number | null;
  operatorQuantity?: number | null;
  operatorQuantityGood?: number | null;
  operatorQuantityRejected?: number | null;

  // Progress Tracking
  processedQuantity?: number;
  taskProgress?: number;
  taskExecuteStatus?: ExecuteStatus;

  // Buffer Fields
  bufferPenetration?: number;
  feedingBufferLevel?: number;
  feedingBuffer?: number;
  feedingBufferPenetration?: number;

  // Relationships
  predecessors?: Identifier[];
  successors?: Identifier[];
  componentTask?: Identifier | null;

  // Custom Fields
  customFieldValue1?: string | null;
  customFieldValue2?: string | null;
  customFieldValue3?: string | null;
  customFieldValue4?: string | null;
  customFieldValue5?: string | null;
  customFieldValue6?: string | null;
  customFieldValue7?: string | null;
  customFieldValue8?: string | null;
  customFieldValue9?: string | null;
  customFieldValue10?: string | null;

  // Metadata
  patchWarnings?: string | null;

  // Links
  hyperLinks?: GetHyperLink[];
}

export interface PostTask {
  // Required Fields
  taskNo: number;
  resourceGroupConstraints: string[];

  // Optional Fields
  name?: string | null;
  taskNote?: string | null;
  color?: string | null;

  // Time Fields (all in SECONDS)
  processTime?: number;
  setupTime?: number;
  teardownTime?: number;

  // Resource Assignment
  resource?: string | null;

  // Constraints
  constraintDate?: string | null;
  constraintType?: ConstraintType;

  // Relationships
  predecessors?: string[] | null;
  successors?: string[] | null;
  componentTask?: string | null;

  // Custom Fields
  customFieldValue1?: string | null;
  customFieldValue2?: string | null;
  customFieldValue3?: string | null;
  customFieldValue4?: string | null;
  customFieldValue5?: string | null;
  customFieldValue6?: string | null;
  customFieldValue7?: string | null;
  customFieldValue8?: string | null;
  customFieldValue9?: string | null;
  customFieldValue10?: string | null;

  // Links
  hyperLinks?: PostHyperLink[];
}

export interface PatchTask {
  // Core Fields
  guid?: string | null;
  taskNo?: number | null;
  name?: string | null;
  taskNote?: string | null;
  color?: string | null;

  // Time Fields (all in SECONDS)
  processTime?: number | null;
  setupTime?: number | null;
  teardownTime?: number | null;

  // Resource Assignment
  resourceGroupConstraints?: string[] | null;
  resource?: string | null;

  // Constraints
  constraintDate?: string | null;
  constraintType?: ConstraintType | null;

  // Operator/Shopfloor Feedback
  operatorSetupTimeStart?: string | null;
  operatorSetupTimeEnd?: string | null;
  operatorTeardownTimeStart?: string | null;
  operatorTeardownTimeEnd?: string | null;
  operatorProcessingStart?: string | null;
  operatorProcessingEnd?: string | null;
  operatorSetupTime?: number | null;
  operatorTeardownTime?: number | null;
  operatorProcessTime?: number | null;
  operatorQuantity?: number | null;
  operatorQuantityGood?: number | null;
  operatorQuantityRejected?: number | null;

  // Progress Tracking
  taskExecuteStatus?: ExecuteStatus | null;

  // Relationships
  predecessors?: string[] | null;
  successors?: string[] | null;
  componentTask?: string | null;

  // Custom Fields
  customFieldValue1?: string | null;
  customFieldValue2?: string | null;
  customFieldValue3?: string | null;
  customFieldValue4?: string | null;
  customFieldValue5?: string | null;
  customFieldValue6?: string | null;
  customFieldValue7?: string | null;
  customFieldValue8?: string | null;
  customFieldValue9?: string | null;
  customFieldValue10?: string | null;

  // Links
  hyperLinks?: PatchHyperLink[] | null;
}

export interface PostTaskToDiffJobs {
  jobGuid: string;
  taskNo: string;
  resourceGroupConstraints: PostResourceGroupConstraint[];
  name?: string | null;
  productionTimePerUnit?: number;
  setupTime?: number;
  teardownTime?: number;
  transferTime?: number;
  predecessorTaskNos?: string[] | null;
  taskConnectionTaskNos?: string[] | null;
  taskNote?: string | null;
  colorAs?: string | null;
  quantity?: number;
  customFieldValue1?: string | null;
  customFieldValue2?: string | null;
  customFieldValue3?: string | null;
  customFieldValue4?: string | null;
  customFieldValue5?: string | null;
  customFieldValue6?: string | null;
  customFieldValue7?: string | null;
  customFieldValue8?: string | null;
  customFieldValue9?: string | null;
  customFieldValue10?: string | null;
  hyperlinks?: PostHyperLink[];
  sendAheadQuantity?: number;
  heads?: number;
}

// ============================================
// Job Component Reference Schemas
// ============================================

export interface GetJobComponentReference {
  guid?: string | null;
  component?: Identifier | null;
  taskNo?: number;
  createdTasks?: Identifier[];
  predecessors?: Identifier[];
  quantity?: number;
  patchWarnings?: string | null;
}

export interface PostJobComponentReference {
  component: string;
  taskNo?: number;
  predecessors?: string[] | null;
  quantity?: number;
}

export interface PatchJobComponentReference {
  taskNo?: number | null;
  predecessors?: string[] | null;
  quantity?: number | null;
}

// ============================================
// Job Schemas
// ============================================

export interface GetJob {
  // Core Identification
  guid?: string | null;
  jobNo?: string | null;
  name?: string | null;

  // Status & Strategy
  orderStatus?: OrderStatus;
  executeStatus?: ExecuteStatus;
  strategy?: Strategy;
  appliedStrategy?: Strategy;
  sequenceNumber?: number;

  // Dates & Planning
  dueDate?: string | null;
  releaseDate?: string | null;
  plannedStart?: string | null;
  plannedEnd?: string | null;
  processingStart?: string | null;
  processingEnd?: string | null;
  isDueDateExceeded?: boolean;
  automatic?: boolean;
  dueDateBuffer?: number;

  // Business Fields
  sales?: number;
  quantity?: number;
  jobNote?: string | null;

  // Baseline Fields
  baselineDueDate?: string | null;
  baselineStartDate?: string | null;
  baselineEndDate?: string | null;
  baselineProcessingStart?: string | null;
  baselineProcessingEnd?: string | null;
  baselineSetupTime?: number;
  baselineTeardownTime?: number;
  baselineProcessTime?: number;
  baselineIdleTime?: number;
  baselineTotalLeadTime?: number;

  // Buffer Management Fields
  bufferLevel?: number;
  buffer?: number;
  maxRemainingCycleTime?: number;
  bufferPenetration?: number;
  bufferPenetrationFromPlanning?: number;
  feedingBufferLevel?: number;
  feedingBuffer?: number;
  milestoneBufferLevel?: number;
  milestoneBuffer?: number;

  // Progress Tracking
  jobProgress?: number;

  // Relationships
  tasks?: GetTask[];
  predecessors?: Identifier[];
  successors?: Identifier[];
  componentReferences?: GetJobComponentReference[];
  template?: Identifier | null;
  createdFromTemplate?: boolean;

  // Metadata
  creationDate?: string | null;
  patchWarnings?: string | null;

  // Custom Fields
  customFieldValue1?: string | null;
  customFieldValue2?: string | null;
  customFieldValue3?: string | null;
  customFieldValue4?: string | null;
  customFieldValue5?: string | null;
  customFieldValue6?: string | null;
  customFieldValue7?: string | null;
  customFieldValue8?: string | null;
  customFieldValue9?: string | null;
  customFieldValue10?: string | null;

  // Links
  hyperLinks?: GetHyperLink[];
}

export interface PostJob {
  // Required Fields
  name: string;
  tasks: PostTask[];

  // Optional Fields
  jobNo?: string | null;
  strategy?: Strategy;
  quantity?: number;
  sales?: number;
  dueDate?: string | null;
  releaseDate?: string | null;
  automatic?: boolean | null;
  jobNote?: string | null;

  // Relationships
  predecessors?: string[] | null;
  successors?: string[] | null;
  componentReferences?: PostJobComponentReference[];

  // Custom Fields
  customFieldValue1?: string | null;
  customFieldValue2?: string | null;
  customFieldValue3?: string | null;
  customFieldValue4?: string | null;
  customFieldValue5?: string | null;
  customFieldValue6?: string | null;
  customFieldValue7?: string | null;
  customFieldValue8?: string | null;
  customFieldValue9?: string | null;
  customFieldValue10?: string | null;

  // Links
  hyperLinks?: PostHyperLink[];
}

export interface PatchJob {
  // Core Fields
  name?: string | null;
  jobNo?: string | null;
  strategy?: Strategy | null;
  quantity?: number | null;
  sales?: number | null;
  dueDate?: string | null;
  releaseDate?: string | null;
  automatic?: boolean | null;
  jobNote?: string | null;
  disabled?: boolean | null;

  // Relationships
  predecessors?: string[] | null;
  successors?: string[] | null;
  componentReferences?: PatchJobComponentReference[] | null;

  // Custom Fields
  customFieldValue1?: string | null;
  customFieldValue2?: string | null;
  customFieldValue3?: string | null;
  customFieldValue4?: string | null;
  customFieldValue5?: string | null;
  customFieldValue6?: string | null;
  customFieldValue7?: string | null;
  customFieldValue8?: string | null;
  customFieldValue9?: string | null;
  customFieldValue10?: string | null;

  // Links
  hyperLinks?: PatchHyperLink[] | null;
}
