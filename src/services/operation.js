import {summary} from './summary.js';

let operationsCount = [];
for (let data of summary.operation_types) {
  let {count,operation_type : id} = data
  operationsCount.push({id,count});
}
export let operations = operationsCount;