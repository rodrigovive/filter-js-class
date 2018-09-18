import {priceDollar} from '../services/range-price-dollar.js';
import {Select} from '../ui/select.js';
import {priceArs} from '../services/range-price-ars.js';
import {roomAmount} from '../services/room-amount.js';
import {suiteAmount} from '../services/suite-amount.js';
import {bathroomAmount} from '../services/bathroom-amount.js';
import {types} from '../services/types.js';
import {operations} from '../services/operation.js';
import $ from 'jquery';

export class predefinedUI {
  constructor() {
    this._ui = [];
  }

  addUI(name, select) {
    this._ui.push({
      name, select,
    });
  }

  getUI(name) {
    let ui = this._ui.filter((ui) => ui.name == name);

    return ui[0].select;
  }

  appendUI(name, value = false) {
    let ui = this._ui.filter((ui) => ui.name == name);
    if (this.checkExistUI(ui[0].select.id)) {
      predefinedUI.setValueUIById(ui[0].select.id, value);
      return false;
    }
    ui[0].select.appentToElement($('section').last());
    if (value !== false) {
      predefinedUI.setValueUIById(ui[0].select.id, value);
    }
  }

  setValueUI(id, valueURI) {
    let value = decodeURIComponent(valueURI);
    let ui = this.getUI(id);
    $(`#${ui.id}`).val(value);

  }

  static setValueUIById(id, value) {
    $(`#${id}`).val(value);
  }

  checkExistUI(id) {
    let a = $(`#${id}`).length;
    return new Boolean(a);
  }
}

let definedUI = new predefinedUI();

definedUI.addUI('rangePriceDollarUI', new Select('range-price-dollar',
    'Rango Para Comprar',
    'Seleccione el monto',
    priceDollar));

definedUI.addUI('rangePriceArsUI',
    new Select('range-price-ars', 'Rango de Alquilar',
        'Seleccione el monto',
        priceArs));

definedUI.addUI('envUI', new Select('env', 'Ambientes', 'Seleccionar ambiente',
    roomAmount));

definedUI.addUI('suiteUI', new Select('suite', 'Dormitorios',
    'Seleccionar dormitorios',
    suiteAmount));

definedUI.addUI('baniosUI',
    new Select('bathroom', 'Banos', 'Seleccionar banios',
        bathroomAmount));

definedUI.addUI('propertyTypeUI',
    new Select('property-type', 'Tipo de Propiedad',
        'Selecciona un tipo de propiedad', types));

definedUI.addUI('operationTypeUI',
    new Select('operation-type', 'Tipo de Operacion',
        'Seleccione una operacion', operations));

definedUI.addUI('aptoOperationTypeUI',
    new Select('operation-type', 'Tipo de Operacion',
        false,
        [
          {
            count: '',
            id: 1,
            name: 'Compra',
          },
        ]));

definedUI.addUI('aptoPropertyTypeUI',
    new Select('property-type', 'Tipo de Propiedad',
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
        ]));

export let appUI = definedUI;