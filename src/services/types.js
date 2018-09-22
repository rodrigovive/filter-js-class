import {summary} from './summary.js';

let typesCount = [];
let propertyOrderList = {
  '3' : "Casa",
  '2' : "Departamento",
  '1' : "Terreno",
  '7' : "Local",
  '5' : "Oficina",
}
summary.property_types.map((data) => {
    let {count, id, type: name} = data;
    if(propertyOrderList[id]){
        typesCount.push({count, name, id});
    }
})


export let types = typesCount;