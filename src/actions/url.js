import $ from 'jquery';

let appendQuery = (key, value) => {
  let baseUrl = `${location.protocol}//${location.host}${location.pathname}`;
  let urlQueryString = document.location.search;
  let newParam = key + '=' + value,
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

export let getUrl = () => {

  let bathroom = $('#filter-bathroom').val();
  let type = $('#filter-property-type').val();
  let operation = $('#filter-operation-type').val();
  let envs = $('#filter-envs').val();
  let suite = $('#filter-suite').val();
  if (bathroom) appendQuery('bathrooms', bathroom);
  if (operation) appendQuery('operation_type', operation);
  if (type) appendQuery('property_type', type);
  if (suite) appendQuery('rooms', suite);
  if (envs) appendQuery('envs', envs);

  return window.location.href;
};

