import {summary} from './summary.js';

let typesCount = [];

for (let data of summary.property_types) {
  let {count, id, type: name} = data;
  typesCount.push({count, name, id});
}

export let types = typesCount;