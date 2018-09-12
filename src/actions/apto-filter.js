import {Select} from '../ui/select.js';
import $ from 'jquery';
import {priceDollar} from '../services/range-price-dollar.js';
import {operations} from '../services/operation.js';
import {types} from '../services/types.js';

export let aptoFilterTrue = () => {

  let select = new Select('operation-type', 'Tipo de Operacion',
      false,
      [
        {
          count: '',
          id: 1,
          name: 'Compra',
        },
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
};

export let aptoFilterFalse = () => {

  let select = new Select('operation-type', 'Tipo de Operacion',
      'Seleccione una operacion', operations);

  select.appentToElement($('section').last());

  select = new Select('property-type', 'Tipo de Propiedad',
      'Selecciona un tipo de propiedad', types);

  select.appentToElement($('section').last());
};