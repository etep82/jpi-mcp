/**
 * JPI API Component Schemas
 * Types for Components and Component Tasks
 * Field names use PascalCase to match JPI API exactly
 */

import { DisplayedTextField } from './enums.js';
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
// Component Task Schemas
// ============================================

export interface GetComponentTask {
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

export interface PostComponentTask {
  TaskNo: string;
  ResourceGroupConstraints: PostResourceGroupConstraint[];
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

export interface PatchComponentTask {
  Guid?: string | null;
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
  Heads?: number | null;
}

// ============================================
// Component Schemas
// ============================================

export interface GetComponent {
  Guid?: string | null;
  Name?: string | null;
  Tasks?: GetComponentTask[];
  HyperLinks?: GetHyperLink[];
}

export interface PostComponent {
  Name: string;
  HyperLinks?: PostHyperLink[];
  Tasks?: PostComponentTask[];
}

export interface PatchComponent {
  Name?: string | null;
  HyperLinks?: PatchHyperLink[] | null;
}
