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

$('#filter-content-id').on('change','#filter-operation-type', function(e) {
  $('#filter-content-id section').remove('#filter-range-price-dollar-section');
  $('#filter-content-id section').remove('#filter-range-price-ars-section');
  switch (this.value) {
    case '1': {
      let select = new Select('range-price-dollar', 'Rango Para Comprar',
          'Seleccione el monto',
          priceDollar);
      select.appentToElement($('section').last());
      break;
    }
    case '2': {
      let select = new Select('range-price-ars', 'Rango de Alquilar',
          'Seleccione el monto',
          priceArs);
      select.appentToElement($('section').last());
      break;
    }
  }
});

$('#filter-content-id').on('change','#filter-property-type', function(e) {
  $('#filter-content-id section').remove('#filter-env-section');
  $('#filter-content-id section').remove('#filter-suite-section');
  $('#filter-content-id section').remove('#filter-bathroom-section');
  console.log('asd',this.value,this)
  switch (this.value) {
    case '2': {
      let select = new Select('env', 'Ambientes', 'Seleccionar ambiente',
          roomAmount);
      select.appentToElement($('section').last());
      break;
    }
    case '3': {
      let select = new Select('suite', 'Dormitorios', 'Seleccionar dormitorios',
          suiteAmount);
      select.appentToElement($('section').last());
      select = new Select('bathroom', 'Banos', 'Seleccionar banios',
          bathroomAmount);
      select.appentToElement($('section').last());
      break;
    }
  }
});

$('#filter-apto-credito-checkbox').on('change', function(e) {
  $('#filter-content-id section').remove('#filter-env-section');
  $('#filter-content-id section').remove('#filter-suite-section');
  $('#filter-content-id section').remove('#filter-bathroom-section');
  $('#filter-content-id section').remove('#filter-range-price-dollar-section');
  $('#filter-content-id section').remove('#filter-range-price-ars-section');
  $('#filter-content-id section').remove('#filter-operation-type-section');
  $('#filter-content-id section').remove('#filter-property-type-section');
  if (this.checked) {
    let select = new Select('operation-type', 'Tipo de Operacion',
        false,
        [
          {
            count: '',
            id: 1,
            name: 'Compra',
          }
        ]);
    select.appentToElement($('section').last());
    select = new Select('property-type', 'Tipo de Propiedad',
        'Selecciona un tipo de propiedad',
        [
          {
            count: '',
            id: 2,
            name: 'Departamento',
          },
          {
            count: '',
            id: 3,
            name: 'Casa',
          },
        ]);
    select.appentToElement($('section').last());
    select = new Select('range-price-dollar', 'Rango Para Comprar',
        'Seleccione el monto',
        priceDollar);
    select.appentToElement($('section').last());
  } else {
    let select = new Select('operation-type', 'Tipo de Operacion',
        'Seleccione una operacion',operations);
    select.appentToElement($('section').last());
    select = new Select('property-type', 'Tipo de Propiedad',
        'Selecciona un tipo de propiedad', types);
    select.appentToElement($('section').last());
  }
});
