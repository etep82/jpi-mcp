/**
 * JPI API Enums
 * All enumeration types used in the JPI API
 */

export enum OrderStatus {
  Quoted = 'Quoted',
  Ordered = 'Ordered',
  Released = 'Released',
  Standby = 'Standby'
}

export enum Strategy {
  Asap = 'Asap',
  Jit = 'Jit',
  ASAP_PLUS = 'ASAP_PLUS',
  JIT_PLUS = 'JIT_PLUS'
}

export enum TemplateStrategy {
  Asap = 'Asap',
  Jit = 'Jit',
  ASAP_PLUS = 'ASAP_PLUS',
  JIT_PLUS = 'JIT_PLUS'
}

export enum TaskStatus {
  Planned = 'Planned',
  Started = 'Started',
  Finished = 'Finished',
  None = 'None',
  Standby = 'Standby'
}

export enum ExecuteStatus {
  NotStarted = 'NotStarted',
  Started = 'Started',
  Finished = 'Finished'
}

export enum ConstraintType {
  None = 'None',
  StartNotEarlierThan = 'StartNotEarlierThan',
  EndNotLaterThan = 'EndNotLaterThan',
  MustStartOn = 'MustStartOn',
  MustEndOn = 'MustEndOn'
}

export enum DisplayedTextField {
  None = 'None',
  JobName = 'JobName',
  Strategy = 'Strategy',
  ReleaseDate = 'ReleaseDate',
  DueDate = 'DueDate',
  JobStatus = 'JobStatus',
  Customer = 'Customer',
  AdditionalJobText = 'AdditionalJobText',
  TaskNo = 'TaskNo',
  TaskName = 'TaskName',
  RunTime = 'RunTime',
  Resource = 'Resource',
  ResourceGroup = 'ResourceGroup',
  TimeConstraint = 'TimeConstraint',
  Predecessors = 'Predecessors',
  AdditionalTaskText = 'AdditionalTaskText',
  GlobalSetting = 'GlobalSetting',
  TemplateName = 'TemplateName',
  JobCustomField1 = 'JobCustomField1',
  JobCustomField2 = 'JobCustomField2',
  Sales = 'Sales',
  OperationCustomField1 = 'OperationCustomField1',
  OperationCustomField2 = 'OperationCustomField2'
}

export enum SetupTimeStarts {
  IndependentFromPredecessor = 'IndependentFromPredecessor',
  AfterPredecessor = 'AfterPredecessor'
}

export enum TeardownTimeStarts {
  IndependentFromSuccessor = 'IndependentFromSuccessor',
  BeforeSuccessor = 'BeforeSuccessor'
}

export enum ApprovalWorkflow {
  NotActivated = 'NotActivated',
  Activated = 'Activated'
}

export enum ShowTooltip {
  Immediately = 'Immediately',
  SlightlyDelayed = 'SlightlyDelayed',
  SeverelyDelayed = 'SeverelyDelayed',
  No = 'No'
}

export enum ExecuteTracking {
  TimeBased = 'TimeBased',
  QuantityBased = 'QuantityBased'
}

export enum ShopfloorExecuteTrackingMode {
  Totals = 'Totals',
  Additions = 'Additions'
}

export enum ColorOfBarInNonProdTime {
  Transparent = 'Transparent',
  White = 'White',
  SameAstheBarColorInProdTimes = 'SameAstheBarColorInProdTimes',
  CalculatedColor = 'CalculatedColor'
}

export enum Weekday {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

export enum EventType {
  Created = 'Created',
  Updated = 'Updated',
  Deleted = 'Deleted'
}

export enum EventObjectType {
  SchedulingModel = 'SchedulingModel',
  ResourceCalendar = 'ResourceCalendar',
  DayPattern = 'DayPattern',
  Resource = 'Resource',
  ResourceGroup = 'ResourceGroup',
  Job = 'Job',
  Task = 'Task',
  Template = 'Template',
  TemplateSet = 'TemplateSet',
  TemplateTask = 'TemplateTask',
  ServerMessage = 'ServerMessage',
  CustomField = 'CustomField',
  Component = 'Component',
  ComponentTask = 'ComponentTask',
  JobComponentRef = 'JobComponentRef',
  TemplateComponentRef = 'TemplateComponentRef',
  None = 'None',
  JobHyperLink = 'JobHyperLink'
}
