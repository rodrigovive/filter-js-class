import {summary} from './summary.js';

let bathroomAmountData = [];

for(let data of summary.bathroom_amount){

  let {amount: id, count  } = data;
  bathroomAmountData.push({
    id,
    count,
    name: `${id} Bano(s)`
  })
}

export let bathroomAmount = bathroomAmountData;