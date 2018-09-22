import {summary} from './summary.js';

let typesCount = [];
let propertyOrderList = {
  '3' : "Casa",
  '2' : "Departamento",
  '1' : "Terreno",
  '7' : "Local",
  '5' : "Oficina",
}
Object.keys(propertyOrderList).map((order)=>{
  summary.property_types.map((data) => {
    let {count, id, type: name} = data;
    if(order == id){
      typesCount.push({count, name, id});
    }
  })
})


export let types = typesCount;