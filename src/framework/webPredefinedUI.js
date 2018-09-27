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
    let operation_types = summaryProperty.operation_types
    let params = getParams()
    getAllSummaryProperties().then((allSummaryProperty) => {
      if (params.operation_type) {
        operation_types = allSummaryProperty.operation_types
      }
      webSearchFilter.addUI('bathrooms', 'Banios',
        summaryProperty.bathroom_amount).
        appendUI()
      webSearchFilter.addUI('ages', 'Antiguedad', summaryProperty.age).appendUI()
      webSearchFilter.addUI('rooms', 'Dormitorios', summaryProperty.suite_amount).
        appendUI()
      webSearchFilter.addUI('envs', 'Ambientes', summaryProperty.room_amount).
        appendUI()
      webSearchFilter.addUI('sublocation-bar', 'Sub Localidades',
        summaryProperty.sublocations).appendUI()
      webSearchFilter.addUI('location-select', 'Localidad',
        summaryProperty.locations).
        appendUI()
      webSearchFilter.addUI('operation-type', 'Tipo de Operacion',
        operation_types).appendUI()
      webSearchFilter.addUI('property-type', 'Tipo de Propiedad',
        summaryProperty.property_types).appendUI()
    })

  })
}