import {summary} from './summary.js';

let ageData = [];

for (let data of summary.age) {

  let {count, amount: id, title: name} = data;
  ageData.push({count, id, name});
}

export let age = ageData;