declare module 'sql.js' {
  export interface SqlJsConfig {
    locateFile?: (file: string) => string;
  }

  export interface QueryExecResult {
    columns: string[];
    values: unknown[][];
  }

  export interface Statement {
    run(params?: unknown[] | Record<string, unknown>): void;
    step(): boolean;
    get(params?: unknown[] | Record<string, unknown>): unknown[];
    reset(): void;
    free(): void;
  }

  export interface Database {
    run(sql: string, params?: unknown[] | Record<string, unknown>): void;
    prepare(sql: string): Statement;
    exec(sql: string): QueryExecResult[];
    export(): Uint8Array;
    close(): void;
  }

  export interface SqlJsStatic {
    Database: new (data?: Uint8Array) => Database;
  }

  export default function initSqlJs(config?: SqlJsConfig): Promise<SqlJsStatic>;
}

declare module '*.wasm?url' {
  const url: string;
  export default url;
}
