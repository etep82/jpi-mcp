/**
 * JPI API Job Schemas
 * Types for Jobs, Tasks, and Job Component References
 * Field names use PascalCase to match JPI API exactly
 */

import {
  OrderStatus,
  Strategy,
  TaskStatus,
  DisplayedTextField
} from './enums.js';
import {
  Identifier,
  GetHyperLink,
  PostHyperLink,
  PatchHyperLink,
  GetResourceGroupConstraint,
  PostResourceGroupConstraint,
  PatchResourceGroupConstraint,
  GetTaskConnection
} from './schemas.js';

// ============================================
// Task Schemas
// ============================================

export interface GetTask {
  // Core Identification
  Guid?: string | null;
  TaskNo?: string | null;
  Name?: string | null;
  TaskNote?: string | null;
  ColorAs?: string | null;
  Color?: string | null;

  // Time Fields (all in SECONDS)
  ProductionTimePerUnit?: number;
  SetupTime?: number;
  TeardownTime?: number;
  TransferTime?: number;
  ProcessTime?: number;
  RemainingProcessTime?: number;
  IdleTime?: number;
  PreIdleTime?: number;
  PostIdleTime?: number;

  // Scheduling Dates
  Start?: string | null;
  End?: string | null;
  ProductionTimeStart?: string | null;
  ProductionTimeEnd?: string | null;
  SetupTimeStart?: string | null;
  SetupTimeEnd?: string | null;
  TeardownTimeStart?: string | null;
  TeardownTimeEnd?: string | null;
  TransferTimeStart?: string | null;
  TransferTimeEnd?: string | null;
  ProcessingStart?: string | null;
  ProcessingEnd?: string | null;
  PlannedStart?: string | null;
  PlannedEnd?: string | null;

  // Resource Assignment
  ResourceGroupConstraints?: GetResourceGroupConstraint[];
  AssignedResources?: Identifier[];
  Resource?: Identifier;
  ResourceName?: string | null;

  // Planning Constraints
  StartNotEarlierThan?: string | null;
  EndNotLaterThan?: string | null;
  ConstraintDate?: string | null;
  ConstraintType?: string | null;
  TaskStatus?: TaskStatus;
  IsCritical?: boolean;

  // Display Settings
  DisplayedTextFieldJobView?: DisplayedTextField;
  DisplayedTextFieldResView?: DisplayedTextField;

  // Quantity Fields
  Quantity?: number;
  SendAheadQuantity?: number;
  Heads?: number;
  ProcessedQuantity?: number;

  // Relationships
  Predecessors?: Identifier[];
  Successors?: Identifier[];
  TaskConnections?: GetTaskConnection[];
  ComponentTask?: Identifier;

  // Baseline Fields (8)
  BaselineStartDate?: string | null;
  BaselineEndDate?: string | null;
  BaselineProcessingStart?: string | null;
  BaselineProcessingEnd?: string | null;
  BaselineSetupTime?: number;
  BaselineTeardownTime?: number;
  BaselineProcessTime?: number;
  BaselineIdleTime?: number;

  // Operator/Shopfloor Feedback (12)
  OperatorSetupTimeStart?: string | null;
  OperatorSetupTimeEnd?: string | null;
  OperatorTeardownTimeStart?: string | null;
  OperatorTeardownTimeEnd?: string | null;
  OperatorProcessingStart?: string | null;
  OperatorProcessingEnd?: string | null;
  OperatorSetupTime?: number;
  OperatorTeardownTime?: number;
  OperatorProcessTime?: number;
  OperatorQuantity?: number;
  OperatorQuantityGood?: number;
  OperatorQuantityRejected?: number;

  // Progress & Buffer
  TaskProgress?: number;
  TaskExecuteStatus?: string | null;
  BufferPenetration?: number;
  FeedingBufferLevel?: number;
  FeedingBuffer?: number;
  FeedingBufferPenetration?: number;

  // Custom Fields
  CustomFieldValue1?: string | null;
  CustomFieldValue2?: string | null;
  CustomFieldValue3?: string | null;
  CustomFieldValue4?: string | null;
  CustomFieldValue5?: string | null;
  CustomFieldValue6?: string | null;
  CustomFieldValue7?: string | null;
  CustomFieldValue8?: string | null;
  CustomFieldValue9?: string | null;
  CustomFieldValue10?: string | null;

  // Links
  HyperLinks?: GetHyperLink[];

  // Metadata
  PatchWarnings?: string | null;

  // Display/UI Fields (Extended)
  Progress?: number;
  OverloadIndicator?: boolean;
  DisplayedTextJobView?: string | null;
  DisplayedTextResView?: string | null;
  MarkedAsStatus?: string | null;

  // Operator/Shopfloor Extended
  OperatorProcessingResources?: Identifier[];
  OperatorProcessingResourceGroups?: Identifier[];
  OperatorNote?: string | null;
  OperatorFeedback?: boolean;
  ShopfloorReferenceDate?: string | null;

  // Tracking
  FromNow?: number;
  LastUpdatedBy?: string | null;
  TaskOnHold?: string | null;
  WaitingTime?: number;

  // Quantity Extended
  TotalDoneQuantity?: number;
  ShopfloorTotalDoneQuantity?: number;

  // Baseline Extended
  BaselineQuantity?: number;
  BaselineProductionTimePerUnit?: number;
  BaselineTransferTime?: number;
  BaselineTotalTime?: number;
  BaselineAssignedResources?: Identifier[];
  BaselineResourceGroupConstraints?: GetResourceGroupConstraint[];
  BaselineCycleTime?: number;
  BaselineThroughputTime?: number;

  // Relationships Extended
  ComponentPredecessors?: Identifier[];

  // Other Extended
  CreatedFromComponentTemplate?: string | null;
  ProcessingRemainingTime?: number;
}

export interface PostTask {
  // Required Fields
  TaskNo: string;
  ResourceGroupConstraints: PostResourceGroupConstraint[];

  // Optional Fields
  Name?: string | null;
  TaskNote?: string | null;
  ColorAs?: string | null;

  // Time Fields (all in SECONDS)
  ProductionTimePerUnit?: number;
  SetupTime?: number;
  TeardownTime?: number;
  TransferTime?: number;

  // Planning Constraints
  StartNotEarlierThan?: string | null;
  EndNotLaterThan?: string | null;

  // Quantity Fields
  Quantity?: number;
  SendAheadQuantity?: number;
  Heads?: number;

  // Relationships (Task numbers as strings)
  PredecessorTaskNos?: string[] | null;
  TaskConnectionTaskNos?: string[] | null;

  // Custom Fields
  CustomFieldValue1?: string | null;
  CustomFieldValue2?: string | null;
  CustomFieldValue3?: string | null;
  CustomFieldValue4?: string | null;
  CustomFieldValue5?: string | null;
  CustomFieldValue6?: string | null;
  CustomFieldValue7?: string | null;
  CustomFieldValue8?: string | null;
  CustomFieldValue9?: string | null;
  CustomFieldValue10?: string | null;

  // Links
  HyperLinks?: PostHyperLink[];
}

export interface PatchTask {
  // Core Fields
  Guid?: string | null;
  TaskNo?: string | null;
  Name?: string | null;
  TaskNote?: string | null;
  ColorAs?: string | null;

  // Time Fields (all in SECONDS)
  ProductionTimePerUnit?: number | null;
  SetupTime?: number | null;
  TeardownTime?: number | null;
  TransferTime?: number | null;

  // Resource Assignment
  ResourceGroupConstraints?: PatchResourceGroupConstraint[] | null;

  // Planning Constraints
  StartNotEarlierThan?: string | null;
  EndNotLaterThan?: string | null;
  TaskStatus?: TaskStatus | null;

  // Quantity Fields
  Quantity?: number | null;
  SendAheadQuantity?: number | null;
  Heads?: number | null;

  // Relationships
  PredecessorTaskNos?: string[] | null;
  TaskConnectionTaskNos?: string[] | null;

  // Custom Fields
  CustomFieldValue1?: string | null;
  CustomFieldValue2?: string | null;
  CustomFieldValue3?: string | null;
  CustomFieldValue4?: string | null;
  CustomFieldValue5?: string | null;
  CustomFieldValue6?: string | null;
  CustomFieldValue7?: string | null;
  CustomFieldValue8?: string | null;
  CustomFieldValue9?: string | null;
  CustomFieldValue10?: string | null;

  // Links
  HyperLinks?: PatchHyperLink[] | null;
}

export interface PostTaskToDiffJobs {
  // Required Fields
  JobGuid: string;
  TaskNo: string;
  ResourceGroupConstraints: PostResourceGroupConstraint[];

  // Optional Fields
  Name?: string | null;
  TaskNote?: string | null;
  ColorAs?: string | null;

  // Time Fields (all in SECONDS)
  ProductionTimePerUnit?: number;
  SetupTime?: number;
  TeardownTime?: number;
  TransferTime?: number;

  // Planning Constraints
  StartNotEarlierThan?: string | null;
  EndNotLaterThan?: string | null;

  // Quantity Fields
  Quantity?: number;
  SendAheadQuantity?: number;
  Heads?: number;

  // Relationships
  PredecessorTaskNos?: string[] | null;
  TaskConnectionTaskNos?: string[] | null;

  // Custom Fields
  CustomFieldValue1?: string | null;
  CustomFieldValue2?: string | null;
  CustomFieldValue3?: string | null;
  CustomFieldValue4?: string | null;
  CustomFieldValue5?: string | null;
  CustomFieldValue6?: string | null;
  CustomFieldValue7?: string | null;
  CustomFieldValue8?: string | null;
  CustomFieldValue9?: string | null;
  CustomFieldValue10?: string | null;

  // Links
  HyperLinks?: PostHyperLink[];
}

// ============================================
// Job Component Reference Schemas
// ============================================

export interface GetJobComponentReference {
  Guid?: string | null;
  Component?: Identifier;
  TaskNo?: number;
  CreatedTasks?: Identifier[];
  Predecessors?: Identifier[];
  Quantity?: number;
  PatchWarnings?: string | null;
}

export interface PostJobComponentReference {
  ComponentGuid: string;
  TaskNo?: string | null;
  PredecessorTaskNos?: string[] | null;
  Quantity?: number;
}

export interface PatchJobComponentReference {
  Guid?: string | null;
  TaskNo?: string | null;
  PredecessorTaskNos?: string[] | null;
  Quantity?: number | null;
}

// ============================================
// Job Schemas
// ============================================

export interface GetJob {
  // Core Identification
  Guid?: string | null;
  JobNo?: string | null;
  Name?: string | null;

  // Status & Strategy
  OrderStatus?: OrderStatus;
  Strategy?: Strategy;
  ExecuteStatus?: string | null;
  AppliedStrategy?: Strategy;
  SequenceNumber?: number;
  Automatic?: boolean;

  // Dates & Planning
  DueDate?: string | null;
  ReleaseDate?: string | null;
  PlannedStart?: string | null;
  PlannedEnd?: string | null;
  ProcessingStart?: string | null;
  ProcessingEnd?: string | null;
  IsDueDateExceeded?: boolean;
  DueDateBuffer?: number;
  FloatTime?: number;
  CriticalPath?: boolean;

  // Business Fields
  Customer?: string | null;
  AdditionalJobText?: string | null;
  JobNote?: string | null;
  ColorAs?: string | null;
  Quantity?: number;
  Sales?: number;
  CreationDate?: string | null;

  // Relationships
  Tasks?: GetTask[];
  ComponentReferences?: GetJobComponentReference[];
  Predecessors?: Identifier[];
  Successors?: Identifier[];
  Template?: Identifier;
  CreatedFromTemplate?: string | null;

  // Baseline Fields (10)
  BaselineDueDate?: string | null;
  BaselineStartDate?: string | null;
  BaselineEndDate?: string | null;
  BaselineProcessingStart?: string | null;
  BaselineProcessingEnd?: string | null;
  BaselineSetupTime?: number;
  BaselineTeardownTime?: number;
  BaselineProcessTime?: number;
  BaselineIdleTime?: number;
  BaselineTotalLeadTime?: number;

  // Buffer Management (9)
  BufferLevel?: number;
  Buffer?: number;
  MaxRemainingCycleTime?: number;
  BufferPenetration?: number;
  BufferPenetrationFromPlanning?: number;
  FeedingBufferLevel?: number;
  FeedingBuffer?: number;
  MilestoneBufferLevel?: number;
  MilestoneBuffer?: number;

  // Progress
  JobProgress?: number;

  // Custom Fields
  CustomFieldValue1?: string | null;
  CustomFieldValue2?: string | null;
  CustomFieldValue3?: string | null;
  CustomFieldValue4?: string | null;
  CustomFieldValue5?: string | null;
  CustomFieldValue6?: string | null;
  CustomFieldValue7?: string | null;
  CustomFieldValue8?: string | null;
  CustomFieldValue9?: string | null;
  CustomFieldValue10?: string | null;

  // Links
  HyperLinks?: GetHyperLink[];

  // Metadata
  PatchWarnings?: string | null;

  // Baseline Extended
  BaselineSeqNo?: number;
  BaselineWaitTime?: string | null;
  BaselineCycleTime?: string | null;
  BaselineThroughputTime?: string | null;
  BaselineBufferLevel?: number;
  BaselineBuffer?: string | null;
  BaselineMaxRemainingCycleTime?: string | null;

  // Buffer Residual Fields
  BufferLevelResidual?: number;
  BufferResidual?: number;
  MaxRemainingCycleTimeResidual?: number;
}

export interface PostJob {
  // Required Fields
  Name: string;
  Tasks: PostTask[];

  // Optional Fields
  JobNo?: string | null;
  Strategy?: Strategy;
  OrderStatus?: OrderStatus;
  DueDate?: string | null;
  ReleaseDate?: string | null;
  Customer?: string | null;
  AdditionalJobText?: string | null;
  JobNote?: string | null;
  ColorAs?: string | null;
  Quantity?: number;

  // Relationships
  JobComponentReferences?: PostJobComponentReference[];

  // Custom Fields
  CustomFieldValue1?: string | null;
  CustomFieldValue2?: string | null;
  CustomFieldValue3?: string | null;
  CustomFieldValue4?: string | null;
  CustomFieldValue5?: string | null;
  CustomFieldValue6?: string | null;
  CustomFieldValue7?: string | null;
  CustomFieldValue8?: string | null;
  CustomFieldValue9?: string | null;
  CustomFieldValue10?: string | null;

  // Links
  HyperLinks?: PostHyperLink[];
}

export interface PatchJob {
  // Core Fields
  Guid?: string | null;
  Name?: string | null;
  JobNo?: string | null;
  Strategy?: Strategy | null;
  OrderStatus?: OrderStatus | null;
  DueDate?: string | null;
  ReleaseDate?: string | null;
  Customer?: string | null;
  AdditionalJobText?: string | null;
  JobNote?: string | null;
  ColorAs?: string | null;
  Quantity?: number | null;

  // Custom Fields
  CustomFieldValue1?: string | null;
  CustomFieldValue2?: string | null;
  CustomFieldValue3?: string | null;
  CustomFieldValue4?: string | null;
  CustomFieldValue5?: string | null;
  CustomFieldValue6?: string | null;
  CustomFieldValue7?: string | null;
  CustomFieldValue8?: string | null;
  CustomFieldValue9?: string | null;
  CustomFieldValue10?: string | null;

  // Links
  HyperLinks?: PatchHyperLink[] | null;
}
