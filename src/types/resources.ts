/**
 * JPI API Resource Schemas
 * Types for Resources, Resource Groups, and Resource Categories
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
  guid?: string | null;
  name?: string | null;
  resourceGroups?: Identifier[];
}

export interface PostResourceCategory {
  name: string;
}

export interface PatchResourceCategory {
  name?: string | null;
}

// ============================================
// Resource Group Schemas
// ============================================

export interface GetResourceGroup {
  guid?: string | null;
  name?: string | null;
  resourceCategory?: Identifier | null;
  resources?: Identifier[];
}

export interface PostResourceGroup {
  name: string;
  resourceCategory?: string | null;
  resources?: string[] | null;
}

export interface PatchResourceGroup {
  name?: string | null;
  resourceCategory?: string | null;
  resources?: string[] | null;
}

// ============================================
// Resource Schemas
// ============================================

export interface GetResource {
  guid?: string | null;
  name?: string | null;
  capacity?: number;
  finite?: boolean;
  overloadIndicator?: boolean;
  disabled?: boolean;
  resourceGroups?: Identifier[];

  // Custom fields
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

  // Calendar configuration
  resourceCalendarGuid?: string | null;
  worktimesPerWeekday?: GetWorkTimePerWeekday[];
  calendarExceptions?: GetCalendarException[];

  // Load data (read-only)
  loadData?: GetResourceLoadData[];
}

export interface PostResource {
  name: string;
  worktimesPerWeekday: PostWorkTimePerWeekday[];
  capacity?: number;
  finite?: boolean;
  resourceGroups?: string[] | null;
  calendarExceptions?: PostCalendarException[];
}

export interface PatchResource {
  name?: string | null;
  capacity?: number | null;
  finite?: boolean | null;
  disabled?: boolean | null;
  resourceGroups?: string[] | null;
  worktimesPerWeekday?: PostWorkTimePerWeekday[] | null;
  calendarExceptions?: PostCalendarException[] | null;
}
