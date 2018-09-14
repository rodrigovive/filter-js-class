import $ from 'jquery';
import {removeAll, removeElementById} from './actions/remove-filter.js';
import {getUrl, removeAllQuery, getParams} from './actions/url.js';
import definedUI from './framework/predefinedUI.js';
import {RulesFilter} from './framework/rules-filter.js';

let operationFilter = new RulesFilter('operationType');
operationFilter.addRule(1, definedUI.getUI('rangePriceDollarUI'));
operationFilter.addRule(2, definedUI.getUI('rangePriceArsUI'));

let propertyFilter = new RulesFilter('propertyType');
propertyFilter.addRule(2, definedUI.getUI('envUI'));
propertyFilter.addRule(3, definedUI.getUI('suiteUI'));
propertyFilter.addRule(3, definedUI.getUI('baniosUI'));

let aptoFilter = new RulesFilter('aptoFilter');
aptoFilter.addRule(1, definedUI.getUI('aptoPropertyTypeUI'));
aptoFilter.addRule(1, definedUI.getUI('aptoOperationTypeUI'));
aptoFilter.addRule(1, definedUI.getUI('rangePriceDollarUI'));
aptoFilter.addRule(0, definedUI.getUI('operationTypeUI'));
aptoFilter.addRule(0, definedUI.getUI('propertyTypeUI'));

$('#filter-content-id').on('change', '#filter-operation-type', function(e) {
  removeElementById('filter-range-price-dollar-section');
  removeElementById('filter-range-price-ars-section');
  operationFilter.checkRule(this.value);
});

$('#filter-content-id').on('change', '#filter-property-type', function(e) {
  removeElementById('filter-env-section');
  removeElementById('filter-suite-section');
  removeElementById('filter-bathroom-section');
  propertyFilter.checkRule(this.value);
});

$('#filter-apto-credito-checkbox').on('change', function(e) {
  removeAll();
  removeAllQuery();
  aptoFilter.checkRule(Number(this.checked));
});

$('#filtros-btn-aplicar').on('click', function(e) {
  e.preventDefault();
  window.alert(`La url es : ${getUrl()}`);
});

$('#button-clear-filter').on('click', function(e) {
  e.preventDefault();
  removeAll();
  removeAllQuery();
  $('#filter-apto-credito-checkbox').prop('checked', false);
  aptoFilter.checkRule(0);
});

$(document).ready(function() {
  let params = getParams();

  if (params.operation_type) {
    operationFilter.checkRule(params.operation_type);
    definedUI.setValueUI('operationTypeUI',params.operation_type)

  }
  if (params.property_type) {
    propertyFilter.checkRule(params.property_type);
    definedUI.setValueUI('propertyTypeUI',params.property_type)

  }
  if (params.envs) {
    definedUI.appendUI('envUI',params.envs);
  }
  if (params.bathrooms) {
    console.log(params.bathrooms)
    definedUI.appendUI('baniosUI',params.bathrooms)
  }
  if(params.rooms){
    definedUI.appendUI('suiteUI',params.rooms)
  }

});
