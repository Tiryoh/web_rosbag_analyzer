export interface RosoutMessage {
  timestamp: number;
  node: string;
  severity: number;
  message: string;
  file?: string;
  line?: number;
  function?: string;
  topics?: string[];
}

export interface FilterConfig {
  nodeNames: Set<string>;
  severityLevels: Set<number>;
  messageKeywords: string[];
  messageRegex: string;
  filterMode: 'OR' | 'AND';
  useRegex: boolean;
}

export const SEVERITY_NAMES: Record<number, string> = {
  1: 'DEBUG',
  2: 'INFO',
  4: 'WARN',
  8: 'ERROR',
  16: 'FATAL',
};

export const SEVERITY_COLORS: Record<number, string> = {
  1: 'text-surface-400',
  2: 'text-emerald-600 dark:text-emerald-400',
  4: 'text-amber-600 dark:text-amber-400',
  8: 'text-red-600 dark:text-red-400',
  16: 'text-red-700 dark:text-red-300 font-bold',
};

export const SEVERITY_BG_COLORS: Record<number, string> = {
  1: 'bg-surface-100/50 dark:bg-surface-800/30',
  2: 'bg-emerald-50 dark:bg-emerald-950/30',
  4: 'bg-amber-50 dark:bg-amber-950/30',
  8: 'bg-red-50 dark:bg-red-950/30',
  16: 'bg-red-100 dark:bg-red-950/50',
};

// Diagnostics types
export interface DiagnosticStatusEntry {
  timestamp: number;
  name: string;
  level: number;
  message: string;
  values: { key: string; value: string }[];
}

export const DIAGNOSTIC_LEVEL_NAMES: Record<number, string> = {
  0: 'OK',
  1: 'WARN',
  2: 'ERROR',
  3: 'STALE',
};

export const DIAGNOSTIC_LEVEL_COLORS: Record<number, string> = {
  0: 'text-emerald-600 dark:text-emerald-400',
  1: 'text-amber-600 dark:text-amber-400',
  2: 'text-red-600 dark:text-red-400',
  3: 'text-surface-400',
};

export const DIAGNOSTIC_LEVEL_BG_COLORS: Record<number, string> = {
  0: 'bg-emerald-50 dark:bg-emerald-950/30',
  1: 'bg-amber-50 dark:bg-amber-950/30',
  2: 'bg-red-50 dark:bg-red-950/30',
  3: 'bg-surface-100/50 dark:bg-surface-800/30',
};
