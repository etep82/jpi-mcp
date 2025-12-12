/**
 * JPI API Resource Schemas
 * Types for Resources, Resource Groups, and Resource Categories
 * Field names use PascalCase to match JPI API exactly
 */

import {
  Identifier,
  GetWorkTimePerWeekday,
  PostWorkTimePerWeekday,
  GetCalendarException,
  PostCalendarException,
  GetResourceLoadData
} from './schemas.js';

// ============================================
// Resource Category Schemas
// ============================================

export interface GetResourceCategory {
  Guid?: string | null;
  Name?: string | null;
  ResourceGroups?: Identifier[];
}

export interface PostResourceCategory {
  Name: string;
}

export interface PatchResourceCategory {
  Name?: string | null;
}

// ============================================
// Resource Group Schemas
// ============================================

export interface GetResourceGroup {
  Guid?: string | null;
  Name?: string | null;
  ResourceCategory?: Identifier | null;
  Resources?: Identifier[];
}

export interface PostResourceGroup {
  Name: string;
  ResourceCategoryGuid?: string | null;
  Resources?: string[] | null;
}

export interface PatchResourceGroup {
  Name?: string | null;
  ResourceCategoryGuid?: string | null;
  Resources?: string[] | null;
}

// ============================================
// Resource Schemas
// ============================================

export interface GetResource {
  Guid?: string | null;
  Name?: string | null;
  Capacity?: number;
  Finite?: boolean;
  OverloadIndicator?: boolean;
  Disabled?: boolean;
  ResourceGroups?: Identifier[];

  // Custom fields
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

  // Calendar configuration
  ResourceCalendarGuid?: string | null;
  WorktimesPerWeekday?: GetWorkTimePerWeekday[];
  CalendarExceptions?: GetCalendarException[];

  // Load data (read-only)
  LoadData?: GetResourceLoadData[];
}

export interface PostResource {
  Name: string;
  WorktimesPerWeekday: PostWorkTimePerWeekday[];
  Capacity?: number;
  Finite?: boolean;
  ResourceGroupGuid?: string | null;
  CalendarExceptions?: PostCalendarException[];
}

export interface PatchResource {
  Name?: string | null;
  Capacity?: number | null;
  Finite?: boolean | null;
  Disabled?: boolean | null;
  ResourceGroupGuid?: string | null;
  WorktimesPerWeekday?: PostWorkTimePerWeekday[] | null;
  CalendarExceptions?: PostCalendarException[] | null;
}
