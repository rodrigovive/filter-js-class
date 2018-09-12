import $ from 'jquery';

export let removeAll = () => {
  $('#filter-content-id section').remove('#filter-env-section');
  $('#filter-content-id section').remove('#filter-suite-section');
  $('#filter-content-id section').remove('#filter-bathroom-section');
  $('#filter-content-id section').remove('#filter-range-price-dollar-section');
  $('#filter-content-id section').remove('#filter-range-price-ars-section');
  $('#filter-content-id section').remove('#filter-operation-type-section');
  $('#filter-content-id section').remove('#filter-property-type-section');

}