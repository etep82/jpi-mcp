/**
 * JPI API Settings Schemas
 * Types for Application Settings
 */

import {
  Strategy,
  DisplayedTextField,
  ShowTooltip,
  ColorOfBarInNonProdTime,
  SetupTimeStarts,
  TeardownTimeStarts,
  ApprovalWorkflow,
  ExecuteTracking,
  ShopfloorExecuteTrackingMode
} from './enums.js';
import {
  GetCustomField,
  PatchCustomField,
  GetCalendarExceptionCategory,
  GetJobSequenceCriteria
} from './schemas.js';

// ============================================
// Settings Schemas
// ============================================

export interface GetSettings {
  // Job Custom Fields (1-10)
  jobCustomField1?: GetCustomField;
  jobCustomField2?: GetCustomField;
  jobCustomField3?: GetCustomField;
  jobCustomField4?: GetCustomField;
  jobCustomField5?: GetCustomField;
  jobCustomField6?: GetCustomField;
  jobCustomField7?: GetCustomField;
  jobCustomField8?: GetCustomField;
  jobCustomField9?: GetCustomField;
  jobCustomField10?: GetCustomField;

  // Task Custom Fields (1-10)
  taskCustomField1?: GetCustomField;
  taskCustomField2?: GetCustomField;
  taskCustomField3?: GetCustomField;
  taskCustomField4?: GetCustomField;
  taskCustomField5?: GetCustomField;
  taskCustomField6?: GetCustomField;
  taskCustomField7?: GetCustomField;
  taskCustomField8?: GetCustomField;
  taskCustomField9?: GetCustomField;
  taskCustomField10?: GetCustomField;

  // Task color display field
  taskColorAsField?: GetCustomField;

  // Resource Custom Fields (1-10)
  resourceCustomField1?: GetCustomField;
  resourceCustomField2?: GetCustomField;
  resourceCustomField3?: GetCustomField;
  resourceCustomField4?: GetCustomField;
  resourceCustomField5?: GetCustomField;
  resourceCustomField6?: GetCustomField;
  resourceCustomField7?: GetCustomField;
  resourceCustomField8?: GetCustomField;
  resourceCustomField9?: GetCustomField;
  resourceCustomField10?: GetCustomField;

  // Planning settings
  planningStart?: string | null;
  planningHorizon?: number;
  daysBeforePlanningStart?: number;

  // Display settings
  jobViewBarText?: DisplayedTextField;
  resourceViewBarText?: DisplayedTextField;
  showTooltip?: ShowTooltip;

  // Strategy and scheduling
  jobStrategy?: Strategy;
  barColorInNonProdTime?: ColorOfBarInNonProdTime;
  scheduleEngineRunDirectly?: boolean;

  // Locale
  locale?: string | null;

  // Job status settings
  jobStatusReadyTasks?: number[];

  // Setup/Teardown timing
  setupTimeStarts?: SetupTimeStarts;
  teardownTimeStarts?: TeardownTimeStarts;

  // Workflow settings
  approvalWorkflow?: ApprovalWorkflow;
  globalApplyCapacityConstraints?: boolean;

  // Tracking settings
  executeTracking?: ExecuteTracking;
  shopfloorExecuteTrackingMode?: ShopfloorExecuteTrackingMode;

  // Release date calculation
  calculateReleasedateOnCreation?: boolean;
  releasedateCalculationBuffer?: number;

  // Resource settings
  useResourceCategories?: boolean;

  // Filtering
  useWildcardsInFilterEntries?: boolean;

  // Due date settings
  autoDueDateBuffer?: number;

  // Calendar exceptions
  calendarExceptionCategories?: GetCalendarExceptionCategory[];

  // Job sequencing
  jobSequenceCriteria?: GetJobSequenceCriteria[];
}

export interface PatchSettings {
  // Job Custom Fields (1-10) - nullable
  jobCustomField1?: PatchCustomField | null;
  jobCustomField2?: PatchCustomField | null;
  jobCustomField3?: PatchCustomField | null;
  jobCustomField4?: PatchCustomField | null;
  jobCustomField5?: PatchCustomField | null;
  jobCustomField6?: PatchCustomField | null;
  jobCustomField7?: PatchCustomField | null;
  jobCustomField8?: PatchCustomField | null;
  jobCustomField9?: PatchCustomField | null;
  jobCustomField10?: PatchCustomField | null;

  // Task Custom Fields (1-10) - nullable
  taskCustomField1?: PatchCustomField | null;
  taskCustomField2?: PatchCustomField | null;
  taskCustomField3?: PatchCustomField | null;
  taskCustomField4?: PatchCustomField | null;
  taskCustomField5?: PatchCustomField | null;
  taskCustomField6?: PatchCustomField | null;
  taskCustomField7?: PatchCustomField | null;
  taskCustomField8?: PatchCustomField | null;
  taskCustomField9?: PatchCustomField | null;
  taskCustomField10?: PatchCustomField | null;

  // Task color display field - nullable
  taskColorAsField?: PatchCustomField | null;

  // Resource Custom Fields (1-10) - nullable
  resourceCustomField1?: PatchCustomField | null;
  resourceCustomField2?: PatchCustomField | null;
  resourceCustomField3?: PatchCustomField | null;
  resourceCustomField4?: PatchCustomField | null;
  resourceCustomField5?: PatchCustomField | null;
  resourceCustomField6?: PatchCustomField | null;
  resourceCustomField7?: PatchCustomField | null;
  resourceCustomField8?: PatchCustomField | null;
  resourceCustomField9?: PatchCustomField | null;
  resourceCustomField10?: PatchCustomField | null;

  // Planning settings - nullable
  planningStart?: string | null;
  planningHorizon?: number | null;
  daysBeforePlanningStart?: number | null;

  // Display settings - nullable
  jobViewBarText?: DisplayedTextField | null;
  resourceViewBarText?: DisplayedTextField | null;
  showTooltip?: ShowTooltip | null;

  // Strategy and scheduling - nullable
  jobStrategy?: Strategy | null;
  barColorInNonProdTime?: ColorOfBarInNonProdTime | null;
  scheduleEngineRunDirectly?: boolean | null;

  // Locale - nullable
  locale?: string | null;

  // Job status settings - nullable
  jobStatusReadyTasks?: number[] | null;

  // Setup/Teardown timing - nullable
  setupTimeStarts?: SetupTimeStarts | null;
  teardownTimeStarts?: TeardownTimeStarts | null;

  // Workflow settings - nullable
  approvalWorkflow?: ApprovalWorkflow | null;
  globalApplyCapacityConstraints?: boolean | null;

  // Tracking settings - nullable
  executeTracking?: ExecuteTracking | null;
  shopfloorExecuteTrackingMode?: ShopfloorExecuteTrackingMode | null;

  // Release date calculation - nullable
  calculateReleasedateOnCreation?: boolean | null;
  releasedateCalculationBuffer?: number | null;

  // Resource settings - nullable
  useResourceCategories?: boolean | null;

  // Filtering - nullable
  useWildcardsInFilterEntries?: boolean | null;

  // Due date settings - nullable
  autoDueDateBuffer?: number | null;

  // Calendar exceptions - nullable
  calendarExceptionCategories?: GetCalendarExceptionCategory[] | null;

  // Job sequencing - nullable
  jobSequenceCriteria?: GetJobSequenceCriteria[] | null;
}
