import request from '../request.js'

const HOST = 'http://localhost:8000'

const url = {

  url: `${HOST}/api/property${document.location.search}`,

}

export let findAllProperties = (options = url) => {

  return request(options).then(data => data = JSON.parse(data))

}