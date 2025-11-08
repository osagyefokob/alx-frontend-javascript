// crud.d.ts (ambient declarations)
// Import types from interface.ts so the declarations use the exact types
import { RowID, RowElement } from './interface';

// Declare module exports for the same module path ('./crud.js')
export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;

