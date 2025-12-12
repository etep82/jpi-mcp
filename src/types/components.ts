/**
 * JPI API Component Schemas
 * Types for Components and Component Tasks
 */

import { DisplayedTextField } from './enums.js';
import {
  Identifier,
  GetHyperLink,
  PostHyperLink,
  PatchHyperLink,
  GetResourceGroupConstraint,
  PostResourceGroupConstraint
} from './schemas.js';

// ============================================
// Component Task Schemas
// ============================================

export interface GetComponentTask {
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

export interface PostComponentTask {
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

export interface PatchComponentTask {
  guid?: string | null;
  taskNo?: string | null;
  name?: string | null;
  productionTimePerUnit?: number | null;
  setupTime?: number | null;
  teardownTime?: number | null;
  transferTime?: number | null;
  resourceGroupConstraints?: PostResourceGroupConstraint[] | null;
  predecessors?: Identifier[] | null;
  taskConnections?: Identifier[] | null;
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
  hyperLinks?: PatchHyperLink[] | null;
  sendAheadQuantity?: number | null;
  heads?: number | null;
}

// ============================================
// Component Schemas
// ============================================

export interface GetComponent {
  guid?: string | null;
  name?: string | null;
  tasks?: GetComponentTask[];
  hyperLinks?: GetHyperLink[];
}

export interface PostComponent {
  name: string;
  hyperlinks?: PostHyperLink[];
  tasks?: PostComponentTask[];
}

export interface PatchComponent {
  name?: string | null;
  hyperLinks?: PatchHyperLink[] | null;
}
