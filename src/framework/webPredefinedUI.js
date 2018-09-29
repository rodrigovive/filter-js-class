import {
  getAllSummaryProperties,
  getSummaryProperties,
} from '../services/filter/summary.js'
import { SidebarFilter } from '../ui/sidebar-filter.js'
import $ from 'jquery'
import { getParams } from '../actions/url.js'

class webPredefinedUI {
  constructor () {
    this.name = ''
    this._ui = {}
  }

  addUI (id, title, data) {
    let searchFilter = new SidebarFilter(id, title, data)
    this._ui = {
      id,
      ui: searchFilter,
    }
    return this
  }

  getUI (id) {
    return this._ui.filter(valUI => valUI.id == id)
  }

  appendUI () {
    console.log(this)
    this._ui.ui.appentToElement($('#filter-style-website').last())

  }

}

export let searchSummary = () => {
  getSummaryProperties().then((summaryProperty) => {
    let webSearchFilter = new webPredefinedUI()
    let operationTypes = summaryProperty.operation_types
    let propertyTypes = summaryProperty.property_types
    let env = summaryProperty.property_types
    let bathroom = summaryProperty.property_types
    let suite = summaryProperty.property_types
    let locationProperty = summaryProperty.locations
    let sublocationProperty = summaryProperty.sublocations
    let params = getParams()
    getAllSummaryProperties().then((allSummaryProperty) => {
      if (params.operation_type) {
        operationTypes = allSummaryProperty.operation_types.filter(val => {
          return val.id != params.operation_type;
        })
      }
      if (params.property_type) {
        operationTypes = allSummaryProperty.property_types.filter(val => {
          return val.id != params.property_type;
        })
      }
      if (params.envs) {
        env = allSummaryProperty.room_amount.filter(val => {
          return val.id != params.envs;
        })
      }
      if (params.bathrooms) {
        bathroom = allSummaryProperty.bathroom_amount.filter(val => {
          return val.id != params.bathrooms;
        })
      }
      if(params.rooms){
        suite = allSummaryProperty.suite_amount.filter(val => {
          return val.id != params.rooms;
        })
      }
      if(params.location){
        locationProperty = allSummaryProperty.locations.filter(val => {
          return val.id != params.location;
        })
      }
      if(params.sublocation){
        sublocationProperty = allSummaryProperty.sublocations.filter(val => {
          return val.id != params.sublocation;
        })
      }
      webSearchFilter.addUI('bathrooms', 'Banios',
        bathroom).
        appendUI()
      webSearchFilter.addUI('ages', 'Antiguedad', summaryProperty.age).appendUI()
      webSearchFilter.addUI('rooms', 'Dormitorios', suite).
        appendUI()
      webSearchFilter.addUI('envs', 'Ambientes', env).
        appendUI()
      webSearchFilter.addUI('sublocation-bar', 'Sub Localidades',
        sublocationProperty).appendUI()
      webSearchFilter.addUI('location-select', 'Localidad',
        locationProperty).
        appendUI()
      webSearchFilter.addUI('operation-type', 'Tipo de Operacion',
        operationTypes).appendUI()
      webSearchFilter.addUI('property-type', 'Tipo de Propiedad',
        propertyTypes).appendUI()
    })

  })
}