/**
 * JPI API Common/Helper Schemas
 * Shared types used across multiple API categories
 * Field names use PascalCase to match JPI API exactly
 */

import { Weekday, DisplayedTextField } from './enums.js';

// ============================================
// Core Identification
// ============================================

export interface Identifier {
  Guid: string;
  Name?: string | null;
}

// ============================================
// HyperLink Schemas
// ============================================

export interface GetHyperLink {
  Name?: string | null;
  Content?: string | null;
}

export interface PostHyperLink {
  Name: string;
  Content: string;
}

export interface PatchHyperLink {
  Name?: string | null;
  Content?: string | null;
}

// ============================================
// Custom Field Schemas
// ============================================

export interface GetCustomField {
  Name?: string | null;
  DefaultValue?: string | null;
}

export interface PatchCustomField {
  Name?: string | null;
  DefaultValue?: string | null;
}

// ============================================
// Calendar Schemas
// ============================================

export interface GetCalendarExceptionCategory {
  Name?: string | null;
  Color?: string | null;
}

export interface GetWorkTimePerWeekday {
  DayOfWeek?: Weekday;
  WorkTime?: string | null;
}

export interface PostWorkTimePerWeekday {
  DayOfWeek: Weekday;
  WorkTime?: string | null;
}

export interface GetCalendarException {
  Date?: string | null;
  WorkTime?: string | null;
  Note?: string | null;
  Category?: string | null;
}

export interface PostCalendarException {
  Date: string;
  WorkTime?: string | null;
  Note?: string | null;
  Category?: string | null;
}

// ============================================
// Resource Constraint Schemas
// ============================================

export interface GetResourceGroupConstraint {
  ResourceConstraints?: Identifier[];
  ResourceUsage?: number;
  TaskConstraint?: Identifier;
  ResourceGroup?: Identifier;
}

export interface PostResourceGroupConstraint {
  ResourceGroup: string;
  ResourceConstraints?: string[];
  ResourceUsage?: number;
  TaskConstraint?: string | null;
}

export interface PatchResourceGroupConstraint {
  ResourceGroup?: string | null;
  ResourceConstraints?: string[] | null;
  ResourceUsage?: number | null;
  TaskConstraint?: string | null;
}

// ============================================
// Task Connection Schemas
// ============================================

export interface GetTaskConnection {
  Guid?: string | null;
  Name?: string | null;
  TaskNo?: string | null;
}

// ============================================
// Other Helper Schemas
// ============================================

export interface GetJobSequenceCriteria {
  Guid?: string | null;
  Order?: number;
  Field?: string | null;
  FieldValue?: string | null;
}

export interface GetResourceLoadData {
  Date?: string | null;
  Capacity?: number;
  Load?: number;
  Idle?: number;
}
