import {summary} from './summary.js';

let suiteAmountData = [];

for(let data of summary.suite_amount){

  let {amount: id, count  } = data;
  suiteAmountData.push({
    id,
    count,
    name: `${id} Dormitorio(s)`
  })
}

export let suiteAmount = suiteAmountData;