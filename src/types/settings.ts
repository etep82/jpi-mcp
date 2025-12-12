/**
 * JPI API Settings Schemas
 * Types for Application Settings
 * Field names use PascalCase to match JPI API exactly
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
  JobCustomField1?: GetCustomField;
  JobCustomField2?: GetCustomField;
  JobCustomField3?: GetCustomField;
  JobCustomField4?: GetCustomField;
  JobCustomField5?: GetCustomField;
  JobCustomField6?: GetCustomField;
  JobCustomField7?: GetCustomField;
  JobCustomField8?: GetCustomField;
  JobCustomField9?: GetCustomField;
  JobCustomField10?: GetCustomField;

  // Task Custom Fields (1-10)
  TaskCustomField1?: GetCustomField;
  TaskCustomField2?: GetCustomField;
  TaskCustomField3?: GetCustomField;
  TaskCustomField4?: GetCustomField;
  TaskCustomField5?: GetCustomField;
  TaskCustomField6?: GetCustomField;
  TaskCustomField7?: GetCustomField;
  TaskCustomField8?: GetCustomField;
  TaskCustomField9?: GetCustomField;
  TaskCustomField10?: GetCustomField;

  // Task color display field
  TaskColorAsField?: GetCustomField;

  // Resource Custom Fields (1-10)
  ResourceCustomField1?: GetCustomField;
  ResourceCustomField2?: GetCustomField;
  ResourceCustomField3?: GetCustomField;
  ResourceCustomField4?: GetCustomField;
  ResourceCustomField5?: GetCustomField;
  ResourceCustomField6?: GetCustomField;
  ResourceCustomField7?: GetCustomField;
  ResourceCustomField8?: GetCustomField;
  ResourceCustomField9?: GetCustomField;
  ResourceCustomField10?: GetCustomField;

  // Planning settings
  PlanningStart?: string | null;
  PlanningHorizon?: number;
  DaysBeforePlanningStart?: number;

  // Display settings
  JobViewBarText?: DisplayedTextField;
  ResourceViewBarText?: DisplayedTextField;
  ShowTooltip?: ShowTooltip;

  // Strategy and scheduling
  JobStrategy?: Strategy;
  BarColorInNonProdTime?: ColorOfBarInNonProdTime;
  ScheduleEngineRunDirectly?: boolean;

  // Locale
  Locale?: string | null;

  // Job status settings
  JobStatusReadyTasks?: number[];

  // Setup/Teardown timing
  SetupTimeStarts?: SetupTimeStarts;
  TeardownTimeStarts?: TeardownTimeStarts;

  // Workflow settings
  ApprovalWorkflow?: ApprovalWorkflow;
  GlobalApplyCapacityConstraints?: boolean;

  // Tracking settings
  ExecuteTracking?: ExecuteTracking;
  ShopfloorExecuteTrackingMode?: ShopfloorExecuteTrackingMode;

  // Release date calculation
  CalculateReleasedateOnCreation?: boolean;
  ReleasedateCalculationBuffer?: number;

  // Resource settings
  UseResourceCategories?: boolean;

  // Filtering
  UseWildcardsInFilterEntries?: boolean;

  // Due date settings
  AutoDueDateBuffer?: number;

  // Calendar exceptions
  CalendarExceptionCategories?: GetCalendarExceptionCategory[];

  // Job sequencing
  JobSequenceCriteria?: GetJobSequenceCriteria[];
}

export interface PatchSettings {
  // Job Custom Fields (1-10) - nullable
  JobCustomField1?: PatchCustomField | null;
  JobCustomField2?: PatchCustomField | null;
  JobCustomField3?: PatchCustomField | null;
  JobCustomField4?: PatchCustomField | null;
  JobCustomField5?: PatchCustomField | null;
  JobCustomField6?: PatchCustomField | null;
  JobCustomField7?: PatchCustomField | null;
  JobCustomField8?: PatchCustomField | null;
  JobCustomField9?: PatchCustomField | null;
  JobCustomField10?: PatchCustomField | null;

  // Task Custom Fields (1-10) - nullable
  TaskCustomField1?: PatchCustomField | null;
  TaskCustomField2?: PatchCustomField | null;
  TaskCustomField3?: PatchCustomField | null;
  TaskCustomField4?: PatchCustomField | null;
  TaskCustomField5?: PatchCustomField | null;
  TaskCustomField6?: PatchCustomField | null;
  TaskCustomField7?: PatchCustomField | null;
  TaskCustomField8?: PatchCustomField | null;
  TaskCustomField9?: PatchCustomField | null;
  TaskCustomField10?: PatchCustomField | null;

  // Task color display field - nullable
  TaskColorAsField?: PatchCustomField | null;

  // Resource Custom Fields (1-10) - nullable
  ResourceCustomField1?: PatchCustomField | null;
  ResourceCustomField2?: PatchCustomField | null;
  ResourceCustomField3?: PatchCustomField | null;
  ResourceCustomField4?: PatchCustomField | null;
  ResourceCustomField5?: PatchCustomField | null;
  ResourceCustomField6?: PatchCustomField | null;
  ResourceCustomField7?: PatchCustomField | null;
  ResourceCustomField8?: PatchCustomField | null;
  ResourceCustomField9?: PatchCustomField | null;
  ResourceCustomField10?: PatchCustomField | null;

  // Planning settings - nullable
  PlanningStart?: string | null;
  PlanningHorizon?: number | null;
  DaysBeforePlanningStart?: number | null;

  // Display settings - nullable
  JobViewBarText?: DisplayedTextField | null;
  ResourceViewBarText?: DisplayedTextField | null;
  ShowTooltip?: ShowTooltip | null;

  // Strategy and scheduling - nullable
  JobStrategy?: Strategy | null;
  BarColorInNonProdTime?: ColorOfBarInNonProdTime | null;
  ScheduleEngineRunDirectly?: boolean | null;

  // Locale - nullable
  Locale?: string | null;

  // Job status settings - nullable
  JobStatusReadyTasks?: number[] | null;

  // Setup/Teardown timing - nullable
  SetupTimeStarts?: SetupTimeStarts | null;
  TeardownTimeStarts?: TeardownTimeStarts | null;

  // Workflow settings - nullable
  ApprovalWorkflow?: ApprovalWorkflow | null;
  GlobalApplyCapacityConstraints?: boolean | null;

  // Tracking settings - nullable
  ExecuteTracking?: ExecuteTracking | null;
  ShopfloorExecuteTrackingMode?: ShopfloorExecuteTrackingMode | null;

  // Release date calculation - nullable
  CalculateReleasedateOnCreation?: boolean | null;
  ReleasedateCalculationBuffer?: number | null;

  // Resource settings - nullable
  UseResourceCategories?: boolean | null;

  // Filtering - nullable
  UseWildcardsInFilterEntries?: boolean | null;

  // Due date settings - nullable
  AutoDueDateBuffer?: number | null;

  // Calendar exceptions - nullable
  CalendarExceptionCategories?: GetCalendarExceptionCategory[] | null;

  // Job sequencing - nullable
  JobSequenceCriteria?: GetJobSequenceCriteria[] | null;
}
