/**
 * JPI API Template Schemas
 * Types for Job Templates and Template Tasks/Component References
 * Field names use PascalCase to match JPI API exactly
 */

import { DisplayedTextField, TemplateStrategy } from './enums.js';
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
// Template Task Schemas
// ============================================

export interface GetJobTemplateTask {
  Guid?: string | null;
  TaskNo?: string | null;
  Name?: string | null;
  ProductionTimePerUnit?: number;
  SetupTime?: number;
  TeardownTime?: number;
  TransferTime?: number;
  ResourceGroupConstraints?: GetResourceGroupConstraint[];
  Predecessors?: Identifier[];
  TaskConnections?: GetTaskConnection[];
  TaskNote?: string | null;
  DisplayedTextFieldJobView?: DisplayedTextField;
  DisplayedTextFieldResView?: DisplayedTextField;
  ColorAs?: string | null;
  Quantity?: number;
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
  SendAheadQuantity?: number;
  HyperLinks?: GetHyperLink[];
  Heads?: number;
}

export interface PostTemplateTask {
  // Required fields
  TaskNo: string;
  ResourceGroupConstraints: PostResourceGroupConstraint[];

  // Optional fields
  Name?: string | null;
  ProductionTimePerUnit?: number;
  SetupTime?: number;
  TeardownTime?: number;
  TransferTime?: number;
  PredecessorTaskNos?: string[] | null;
  TaskConnectionTaskNos?: string[] | null;
  TaskNote?: string | null;
  DisplayedTextFieldJobView?: DisplayedTextField;
  DisplayedTextFieldResView?: DisplayedTextField;
  ColorAs?: string | null;
  Quantity?: number;
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
  HyperLinks?: PostHyperLink[];
  SendAheadQuantity?: number;
  Heads?: number;
}

export interface PatchTemplateTask {
  TaskNo?: string | null;
  Name?: string | null;
  ProductionTimePerUnit?: number | null;
  SetupTime?: number | null;
  TeardownTime?: number | null;
  TransferTime?: number | null;
  ResourceGroupConstraints?: PatchResourceGroupConstraint[] | null;
  PredecessorTaskNos?: string[] | null;
  TaskConnectionTaskNos?: string[] | null;
  TaskNote?: string | null;
  DisplayedTextFieldJobView?: DisplayedTextField | null;
  DisplayedTextFieldResView?: DisplayedTextField | null;
  ColorAs?: string | null;
  Quantity?: number | null;
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
  HyperLinks?: PatchHyperLink[] | null;
  SendAheadQuantity?: number | null;
  Heads?: number;
}

// ============================================
// Template Component Reference Schemas
// ============================================

export interface GetTemplateComponentReference {
  Guid?: string | null;
  TaskNo?: string | null;
  Component?: Identifier;
  Quantity?: number;
  Predecessors?: string[];
  CreatedTasks?: Identifier[];
}

export interface PostTemplateComponentReference {
  TaskNo: string;
  Component: string;
  Quantity?: number;
  Predecessors?: string[];
}

export interface PatchTemplateCompRef {
  TaskNo?: string | null;
  Component?: string | null;
  Quantity?: number | null;
  Predecessors?: string[] | null;
}

// ============================================
// Job Template Schemas
// ============================================

export interface GetJobTemplate {
  Guid?: string | null;
  Name?: string | null;
  Tasks?: GetJobTemplateTask[];
  TemplateComponentReferences?: GetTemplateComponentReference[];
  HyperLinks?: GetHyperLink[];

  // Strategy and scheduling
  Strategy?: TemplateStrategy;
  DueDateBuffer?: number;
  AdditionalText?: string | null;

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
}

export interface PostJobTemplate {
  Name: string;
  HyperLinks?: PostHyperLink[];

  // Tasks and Component References
  Tasks?: PostTemplateTask[];
  ComponentReferences?: PostTemplateComponentReference[];

  // Strategy and scheduling
  Strategy?: TemplateStrategy;
  DueDateBuffer?: number;
  AdditionalText?: string | null;

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
}

export interface PatchJobTemplate {
  Name?: string | null;
  HyperLinks?: PatchHyperLink[] | null;

  // Strategy and scheduling
  Strategy?: TemplateStrategy | null;
  DueDateBuffer?: number | null;
  AdditionalText?: string | null;

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
}
