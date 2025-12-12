/**
 * JPI API Event Schemas
 * Types for JPI Events
 * Field names use PascalCase to match JPI API exactly
 */

import { EventType, EventObjectType } from './enums.js';

// ============================================
// Event Schemas
// ============================================

export interface JPIEventEntity {
  // Azure Table Storage fields
  PartitionKey?: string | null;
  RowKey?: string | null;
  ETag?: unknown;
  Timestamp?: string | null;

  // Object identification
  ObjectGuid?: string | null;
  ObjectType?: string | null;
  ObjectName?: string | null;

  // Event metadata
  JpiEvent?: string | null;
  EventType?: EventType;
  EventObject?: EventObjectType;

  // Change details
  PrevValue?: string | null;
  Value?: string | null;

  // Context
  ParentName?: string | null;
  CustomerName?: string | null;
  User?: string | null;

  // Timestamps
  CreatedAt?: string | null;
  MyCreatedAt?: string | null;
}
