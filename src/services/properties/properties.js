import request from '../request.js'
import {getParams} from '../../actions/url.js'

const options = {
  url: `http://localhost:8000/api/property${document.location.search}`
}
export let findAllProperties = () => {
  console.log(options)
  return request(options)
  .then(data => data = JSON.parse(data))

}