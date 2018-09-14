import {summary} from './summary.js';

let suiteAmountData = [];

for(let data of summary.suite_amount){

  let {amount: id, count  } = data;
  if(id<5){
    suiteAmountData.push({
      id,
      count,
      name: `${id} Dormitorio(s)`
    })
  }

}

suiteAmountData.push({
  id: '+5',
  count: '',
  name: `+5 Dormitorio(s)`
})

export let suiteAmount = suiteAmountData;