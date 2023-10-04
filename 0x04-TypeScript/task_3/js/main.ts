/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from 'crud'; // Correct import path

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)\n// Insert row ${newRowID}`);

const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(newRowID, updatedRow)\n// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID})\n// Delete row id ${newRowID}`);

