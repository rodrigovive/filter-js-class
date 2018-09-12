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
import {aptoFilterFalse, aptoFilterTrue} from './actions/apto-filter.js';
import {removeAll,removeElementById} from './actions/remove-filter.js';
import {getUrl} from './actions/url.js';

$('#filter-content-id').on('change', '#filter-operation-type', function(e) {
  removeElementById('filter-range-price-dollar-section');
  removeElementById('filter-range-price-ars-section');
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

$('#filter-content-id').on('change', '#filter-property-type', function(e) {
  removeElementById('filter-env-section');
  removeElementById('filter-suite-section');
  removeElementById('filter-bathroom-section');
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
  removeAll();
  if (this.checked) {
    aptoFilterTrue();
  } else {
    aptoFilterFalse();
  }
});

$('#filtros-btn-aplicar').on('click', function(e) {
  e.preventDefault();
  let section = $('#filter-content-id section');
  // let xd = Object.keys(section)
  let x = getUrl()
  window.alert(`La url es : ${x}`)

});

$('#button-clear-filter').on('click', function(e) {
  e.preventDefault();
  removeAll();
  $('#filter-apto-credito-checkbox').prop('checked', false);
  aptoFilterFalse();
});
