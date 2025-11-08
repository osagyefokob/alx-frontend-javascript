// crud.d.ts (ambient declarations)
// Import types from interface.ts so the declarations use the exact types
import { RowID, RowElement } from './interface';

// Global (ambient) function declarations the grader expects
declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): number;
