/**
 * JPI API Common/Helper Schemas
 * Shared types used across multiple API categories
 */

import { Weekday, DisplayedTextField } from './enums.js';

// ============================================
// Core Identification
// ============================================

export interface Identifier {
  guid: string;
  name?: string | null;
}

// ============================================
// HyperLink Schemas
// ============================================

export interface GetHyperLink {
  name?: string | null;
  content?: string | null;
}

export interface PostHyperLink {
  name: string;
  content: string;
}

export interface PatchHyperLink {
  name?: string | null;
  content?: string | null;
}

// ============================================
// Custom Field Schemas
// ============================================

export interface GetCustomField {
  name?: string | null;
  defaultValue?: string | null;
}

export interface PatchCustomField {
  name?: string | null;
  defaultValue?: string | null;
}

// ============================================
// Calendar Schemas
// ============================================

export interface GetCalendarExceptionCategory {
  name?: string | null;
  color?: string | null;
}

export interface GetWorkTimePerWeekday {
  dayOfWeek?: Weekday;
  workTime?: string | null;
}

export interface PostWorkTimePerWeekday {
  dayOfWeek: Weekday;
  workTime?: string | null;
}

export interface GetCalendarException {
  date?: string | null;
  workTime?: string | null;
  note?: string | null;
  category?: string | null;
}

export interface PostCalendarException {
  date: string;
  workTime?: string | null;
  note?: string | null;
  category?: string | null;
}

// ============================================
// Resource Constraint Schemas
// ============================================

export interface GetResourceGroupConstraint {
  resourceConstraints?: Identifier[];
  resourceUsage?: number;
  taskConstraint?: Identifier;
  resourceGroup?: Identifier;
}

export interface PostResourceGroupConstraint {
  resourceGroup: string;
  resourceConstraints: string[];
  resourceUsage?: number;
  taskConstraint?: string | null;
}

export interface PatchResourceGroupConstraint {
  resourceGroup?: string | null;
  resourceConstraints?: string[] | null;
  resourceUsage?: number | null;
  taskConstraint?: string | null;
}

// ============================================
// Other Helper Schemas
// ============================================

export interface GetJobSequenceCriteria {
  guid?: string | null;
  order?: number;
  field?: string | null;
  fieldValue?: string | null;
}

export interface GetResourceLoadData {
  date?: string | null;
  capacity?: number;
  load?: number;
  idle?: number;
}
