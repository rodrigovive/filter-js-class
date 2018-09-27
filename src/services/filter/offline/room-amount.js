import {summary} from './summary.js';

let roomAmountData = [];

for(let data of summary.room_amount){

  let {amount: id, count  } = data;
  if(id<5){
    roomAmountData.push({
      id,
      count,
      name: `${id} Ambiente(s)`
    })
  }

}

roomAmountData.push({
  id: '+5',
  count: '',
  name: `+5 Ambiente(s)`
})

export let roomAmount = roomAmountData;