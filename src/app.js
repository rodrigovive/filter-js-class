import $ from 'jquery';
import {aptoFilterFalse, aptoFilterTrue} from './actions/apto-filter.js';
import {removeAll, removeElementById} from './actions/remove-filter.js';
import {getUrl, removeAllQuery, getParams} from './actions/url.js';
import {
  rangePriceArsUI,
  rangePriceDollarUI,
  envUI,
  suiteUI,
  baniosUI,
  aptoOperationTypeUI,
  aptoPropertyTypeUI,
  operationTypeUI,
  propertyTypeUI,
} from './framework/predefinedUI.js';
import {RulesFilter} from './framework/rules-filter.js';

let operationFilter = new RulesFilter('operationType');
operationFilter.addRule(1, rangePriceDollarUI);
operationFilter.addRule(2, rangePriceArsUI);

let propertyFilter = new RulesFilter('propertyType');
propertyFilter.addRule(2, envUI);
propertyFilter.addRule(3, suiteUI);
propertyFilter.addRule(3, baniosUI);

let aptoFilter = new RulesFilter('aptoFilter');
aptoFilter.addRule(1, aptoPropertyTypeUI);
aptoFilter.addRule(1, aptoOperationTypeUI);
aptoFilter.addRule(1, rangePriceDollarUI);
aptoFilter.addRule(0, operationTypeUI);
aptoFilter.addRule(0, propertyTypeUI);

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
  aptoFilter.checkRule(Number(this.checked))
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
  aptoFilterFalse();
});

$(document).ready(function() {
  let params = getParams();
  if (params.operation_type) {
    operationFilter.checkRule(params.operation_type);
  }

});
