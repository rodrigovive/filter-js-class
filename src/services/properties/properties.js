import request from '../request.js'

const HOST = 'http://landing.com.ar'

const url = {

  url: `${HOST}/api/property${document.location.search}`,

}

export let findAllProperties = (options = url) => {

  return request(options).then(data => data = JSON.parse(data))

}