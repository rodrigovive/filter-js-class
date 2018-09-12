import {summary} from './summary.js';

let roomAmountData = [];

for(let data of summary.room_amount){

  let {amount: id, count  } = data;
  roomAmountData.push({
    id,
    count,
    name: `${id} Ambiente(s)`
  })
}

export let roomAmount = roomAmountData;