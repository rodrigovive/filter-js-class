import {priceDollar} from '../services/range-price-dollar.js';
import {Select} from '../ui/select.js';
import {priceArs} from '../services/range-price-ars.js';
import {roomAmount} from '../services/room-amount.js';
import {suiteAmount} from '../services/suite-amount.js';
import {bathroomAmount} from '../services/bathroom-amount.js';

export let rangePriceDollarUI = new Select('range-price-dollar',
    'Rango Para Comprar',
    'Seleccione el monto',
    priceDollar);

export let rangePriceArsUI = new Select('range-price-ars', 'Rango de Alquilar',
    'Seleccione el monto',
    priceArs);

export let envUI = new Select('env', 'Ambientes', 'Seleccionar ambiente',
    roomAmount);

export let suiteUI = new Select('suite', 'Dormitorios', 'Seleccionar dormitorios',
    suiteAmount);

export let baniosUI = new Select('bathroom', 'Banos', 'Seleccionar banios',
    bathroomAmount);