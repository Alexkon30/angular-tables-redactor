export interface RowData {
  [key: string]: string;
}

export type TableData = Array<RowData>;

export interface MethodResponse {
  ok: boolean
  message: string
  value?: unknown
}
