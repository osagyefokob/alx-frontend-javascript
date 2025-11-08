// main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create the RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and capture new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with age added using object spread (checker expects this exact form)
const updatedRow: RowElement = { ...row, age: 23 };

// Update and delete calls
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
