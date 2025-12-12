/**
 * JPI API Template Schemas
 * Types for Job Templates and Template Tasks/Component References
 */

import { DisplayedTextField } from './enums.js';
import {
  Identifier,
  GetHyperLink,
  PostHyperLink,
  PatchHyperLink,
  GetResourceGroupConstraint,
  PostResourceGroupConstraint,
  PatchResourceGroupConstraint
} from './schemas.js';

// ============================================
// Template Task Schemas
// ============================================

export interface GetJobTemplateTask {
  guid?: string | null;
  taskNo?: string | null;
  name?: string | null;
  productionTimePerUnit?: number;
  setupTime?: number;
  teardownTime?: number;
  transferTime?: number;
  resourceGroupConstraints?: GetResourceGroupConstraint[];
  predecessors?: Identifier[];
  taskConnections?: Identifier[];
  taskNote?: string | null;
  displayedTextFieldJobView?: DisplayedTextField;
  displayedTextFieldResView?: DisplayedTextField;
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
  sendAheadQuantity?: number;
  hyperLinks?: GetHyperLink[];
  heads?: number;
}

export interface PostTemplateTask {
  // Required fields
  taskNo: string;
  resourceGroupConstraints: PostResourceGroupConstraint[];

  // Optional fields
  name?: string | null;
  productionTimePerUnit?: number;
  setupTime?: number;
  teardownTime?: number;
  transferTime?: number;
  predecessorTaskNos?: string[] | null;
  taskConnectionTaskNos?: string[] | null;
  taskNote?: string | null;
  displayedTextFieldJobView?: DisplayedTextField;
  displayedTextFieldResView?: DisplayedTextField;
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

export interface PatchTemplateTask {
  taskNo?: string | null;
  name?: string | null;
  productionTimePerUnit?: number | null;
  setupTime?: number | null;
  teardownTime?: number | null;
  transferTime?: number | null;
  resourceGroupConstraints?: PatchResourceGroupConstraint[] | null;
  predecessorTaskNos?: string[] | null;
  taskConnectionTaskNos?: string[] | null;
  taskNote?: string | null;
  displayedTextFieldJobView?: DisplayedTextField | null;
  displayedTextFieldResView?: DisplayedTextField | null;
  colorAs?: string | null;
  quantity?: number | null;
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
  hyperlinks?: PatchHyperLink[] | null;
  sendAheadQuantity?: number | null;
  heads?: number;
}

// ============================================
// Template Component Reference Schemas
// ============================================

export interface GetTemplateComponentReference {
  guid?: string | null;
  component?: Identifier | null;
  quantity?: number;
}

export interface PostTemplateComponentReference {
  componentGuid: string;
  quantity?: number;
}

export interface PatchTemplateCompRef {
  quantity?: number | null;
}

// ============================================
// Job Template Schemas
// ============================================

export interface GetJobTemplate {
  guid?: string | null;
  name?: string | null;
  tasks?: GetJobTemplateTask[];
  templateComponentReferences?: GetTemplateComponentReference[];
  hyperLinks?: GetHyperLink[];
}

export interface PostJobTemplate {
  name: string;
  hyperlinks?: PostHyperLink[];
}

export interface PatchJobTemplate {
  name?: string | null;
  hyperLinks?: PatchHyperLink[] | null;
}
