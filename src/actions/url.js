import $ from 'jquery';

let appendQuery = (key, value) => {
  let baseUrl = `${location.protocol}//${location.host}${location.pathname}`;
  let urlQueryString = document.location.search;
  let newParam = key + '=' + encodeURIComponent(value),
      params = '?' + newParam;

  if (urlQueryString) {
    let keyRegex = new RegExp('([\?&])' + key + '[^&]*');
    if (urlQueryString.match(keyRegex) !== null) {
      params = urlQueryString.replace(keyRegex, '$1' + newParam);
    } else {
      params = urlQueryString + '&' + newParam;
    }
  }
  window.history.replaceState({}, '', baseUrl + params);
  return false;
};

export let removeAllQuery = () => {
  let baseUrl = `${location.protocol}//${location.host}${location.pathname}`;
  window.history.replaceState({}, '', baseUrl);
  return false;
}

export let getUrl = () => {
  removeAllQuery();
  let bathroom = $('#filter-bathroom').val();
  let type = $('#filter-property-type').val();
  let operation = $('#filter-operation-type').val();
  let envs = $('#filter-env').val();
  let suite = $('#filter-suite').val();
  let locationProperty = $('#filter-location').val();
  let sublocationProperty = $('#filter-sublocation').val();

  let priceDollar = $('#filter-range-price-dollar').val();
  let priceArs = $('#range-price-ars').val();
  if (bathroom) appendQuery('bathrooms', bathroom);
  if (operation) appendQuery('operation_type', operation);
  if (type) appendQuery('property_type', type);
  if (suite) appendQuery('rooms', suite);
  if (envs) appendQuery('envs', envs);
  if (priceDollar) {
    let rangeDollar = priceDollar.split('-');
    appendQuery('price_from',  rangeDollar[0]);
    if(rangeDollar.length > 1) appendQuery('price_to',  rangeDollar[1]);
  }
  if(locationProperty) appendQuery('location', locationProperty);
  if(sublocationProperty) appendQuery('sublocation', sublocationProperty);

  if (priceArs) {
    let rangeArs = priceArs.split('-');
    appendQuery('price_from',  priceArs[0]);
    if(priceArs.length > 1) appendQuery('price_to',  priceArs[1]);
  }
  return window.location.href;
};

export let getParams= () => {
  let queryParams = document.location.search
  if(document.location.search){
    let keyRegex = new RegExp('(?<=[\?\&])([a-zA-Z]*[^&]*)','gi')
    let params = {};
    queryParams.match(keyRegex).map((val) => {
      let [query, value] = val.split('=')
      Object.assign(params,{
        [decodeURIComponent(query)] : decodeURIComponent(value).split(',')[0]
      })
    })
    return params;
  }
  return {};

}