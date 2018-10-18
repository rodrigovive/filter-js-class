import request from '../request.js'
import {pretierSummaryJSON} from '../pretty/summary.js'

const HOST = 'http://landing.com.ar'

const url = {

  url: `${HOST}/api/property/filter${document.location.search}`,

}

const urlFilter = {

  url: `${HOST}/api/property/filter`,

}

export let getAllSummaryProperties = (options = urlFilter) => {

  return request(options).then(data => {

    return pretierSummaryJSON(data);
  })

}

export let getSummaryProperties = (options = url) => {

  return request(options).then(data => {

    return pretierSummaryJSON(data);
  })

}