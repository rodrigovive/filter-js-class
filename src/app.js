import $ from 'jquery';
import {Select} from './ui/select.js';
import {operations} from './services/operation.js';
import {types} from './services/types.js';
import {suiteAmount} from './services/suite-amount.js';
import {roomAmount} from './services/room-amount.js';
import {bathroomAmount} from './services/bathroom-amount.js';
import {age} from './services/age.js';
import {priceDollar} from './services/range-price-dollar.js';
import {priceArs} from './services/range-price-ars.js';

console.log(age)

$('#filter-operation-type-select').on('change', function(e) {
  console.log('work', this.value);
  switch (this.value){
    case '1': {
      if($('#filter-range-price-dollar').length == 0){
        let select = new Select('range-price-dollar', 'Rango Para Comprar', 'Seleccione el monto',
            priceDollar);
        select.appentToElement($('section').last())
      }
      break;
    }
    case '2': {
      if($('#filter-range-price-ars').length == 0){
        let select = new Select('range-price-ars', 'Rango de Alquilar', 'Seleccione el monto',
            priceArs);
        select.appentToElement($('section').last())
      }
      break;
    }
  }


});
