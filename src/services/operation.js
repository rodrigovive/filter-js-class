import {summary} from './summary.js';

let operationsCount = [];
for (let data of summary.operation_types) {
  let {count, operation_type: id} = data;
  let name = '';
  switch (id) {
    case 1:
      name = 'Venta';
      break;
    case 2:
      name = 'Alquiler';
      break;
    case 3:
      name = 'Alquiler temporal';
      break;
    default:
      name = 'Desconocido';
      break;
  }
  operationsCount.push({id, count,name});
}
export let operations = operationsCount;