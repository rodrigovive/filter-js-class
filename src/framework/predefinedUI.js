import {priceDollar} from '../services/range-price-dollar.js';
import {Select} from '../ui/select.js';
import {priceArs} from '../services/range-price-ars.js';
import {roomAmount} from '../services/room-amount.js';
import {suiteAmount} from '../services/suite-amount.js';
import {bathroomAmount} from '../services/bathroom-amount.js';
import {types} from '../services/types';
import {operations} from '../services/operation';

export let rangePriceDollarUI = new Select('range-price-dollar',
    'Rango Para Comprar',
    'Seleccione el monto',
    priceDollar);

export let rangePriceArsUI = new Select('range-price-ars', 'Rango de Alquilar',
    'Seleccione el monto',
    priceArs);

export let envUI = new Select('env', 'Ambientes', 'Seleccionar ambiente',
    roomAmount);

export let suiteUI = new Select('suite', 'Dormitorios',
    'Seleccionar dormitorios',
    suiteAmount);

export let baniosUI = new Select('bathroom', 'Banos', 'Seleccionar banios',
    bathroomAmount);

export let propertyTypeUI = new Select('property-type', 'Tipo de Propiedad',
    'Selecciona un tipo de propiedad', types);

export let operationTypeUI = new Select('operation-type', 'Tipo de Operacion',
    'Seleccione una operacion', operations);

export let aptoOperationTypeUI = new Select('operation-type', 'Tipo de Operacion',
    false,
    [
      {
        count: '',
        id: 1,
        name: 'Compra',
      },
    ]);

export let aptoPropertyTypeUI = new Select('property-type', 'Tipo de Propiedad',
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