/**
 * JPI API Event Schemas
 * Types for JPI Events
 */

import { EventType, EventObjectType } from './enums.js';

// ============================================
// Event Schemas
// ============================================

export interface JPIEventEntity {
  // Azure Table Storage fields
  partitionKey?: string | null;
  rowKey?: string | null;
  eTag?: unknown;
  timestamp?: string | null;

  // Object identification
  objectGuid?: string | null;
  objectType?: string | null;
  objectName?: string | null;

  // Event metadata
  jpiEvent?: string | null;
  eventType?: EventType;
  eventObject?: EventObjectType;

  // Change details
  prevValue?: string | null;
  value?: string | null;

  // Context
  parentName?: string | null;
  customerName?: string | null;
  user?: string | null;

  // Timestamps
  createdAt?: string | null;
  myCreatedAt?: string | null;
}
