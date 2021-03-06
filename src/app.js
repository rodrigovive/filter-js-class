import $ from 'jquery';
import {removeAll, removeElementById} from './actions/remove-filter.js';
import {getUrl, removeAllQuery, getParams} from './actions/url.js';
import {appUI,mobilePredefinedUI} from './framework/mobilePredefinedUI.js';
import {RulesFilter} from './framework/rules-filter.js';
import { updateProperties as getPropertiesFromLanding } from './actions/update-properties.js'
import {searchSummary} from './framework/webPredefinedUI.js'

let operationFilter = new RulesFilter('operationType');
operationFilter.addRule(1, appUI.getUI('rangePriceDollarUI'));
operationFilter.addRule(2, appUI.getUI('rangePriceArsUI'));

let propertyFilter = new RulesFilter('propertyType');
propertyFilter.addRule(2, appUI.getUI('envUI'));
propertyFilter.addRule(3, appUI.getUI('suiteUI'));
propertyFilter.addRule(3, appUI.getUI('baniosUI'));

let aptoFilter = new RulesFilter('aptoFilter');
aptoFilter.addRule(1, appUI.getUI('aptoPropertyTypeUI'));
aptoFilter.addRule(1, appUI.getUI('aptoOperationTypeUI'));
aptoFilter.addRule(1, appUI.getUI('rangePriceDollarUI'));
aptoFilter.addRule(0, appUI.getUI('operationTypeUI'));
aptoFilter.addRule(0, appUI.getUI('propertyTypeUI'));

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

$('#filter-content-id').on('change', '#filter-location', function(e) {
  removeAllQuery();
  location.href = getUrl();
});

$('#filter-apto-credito-checkbox').on('change', function(e) {
  removeAll();
  removeAllQuery();
  aptoFilter.checkRule(Number(this.checked));
});

$('#filtros-btn-aplicar').on('click', function(e) {
  e.preventDefault();
  location.href = getUrl();
});

$('#button-clear-filter').on('click', function(e) {
  e.preventDefault();
  removeAll();
  removeAllQuery();

  location.href = getUrl();
});

$('#filters-header-close').on('click',function (e) {
  $('#filter-style-mobile').toggleClass('filter-hidden');
})

$('#filters-header-open').on('click',function (e) {
  $('#filter-style-mobile').toggleClass('filter-hidden');
})


$('#pagination-container').on('click','#property-more',function () {
  let { dataset : {page} } = document.getElementById('property-more');
  let options = {
    url : page
  }
  getPropertiesFromLanding(options);
})


$(document).ready(function() {
  let params = getParams();

  if (params.operation_type) {
    operationFilter.checkRule(params.operation_type);
    appUI.setValueUI('operationTypeUI',params.operation_type)
  }
  if (params.property_type) {
    propertyFilter.checkRule(params.property_type);
    appUI.setValueUI('propertyTypeUI',params.property_type)
  }
  if (params.envs) {
    appUI.appendUI('envUI',params.envs);
  }
  if (params.bathrooms) {
    appUI.appendUI('baniosUI',params.bathrooms)
  }
  if(params.rooms){
    appUI.appendUI('suiteUI',params.rooms)
  }
  if(params.location){
    mobilePredefinedUI.setValueUIById('filter-location',params.location);
  }
  if(params.sublocation){
    mobilePredefinedUI.setValueUIById('filter-sublocation',params.location);
  }

  searchSummary();
  getPropertiesFromLanding();

});
