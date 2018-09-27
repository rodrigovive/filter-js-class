import {summary} from './summary.js';

let bathroomAmountData = [];

for(let data of summary.bathroom_amount){

  let {amount: id, count  } = data;
  if(id < 5){
    bathroomAmountData.push({
      id,
      count,
      name: `${id} Bano(s)`
    })
  }
}
bathroomAmountData.push({
  id: '+5',
  count: '',
  name: `+5 Bano(s)`
})

export let bathroomAmount = bathroomAmountData;