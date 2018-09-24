import { Heading } from '../ui/heading.js'
import $ from 'jquery'
import { PropertyRow } from '../ui/property-row.js'
import { Button } from '../ui/button.js'
import * as propertyService from '../services/properties/properties.js'

let actionUpdateMeta = (properties) => {

  $('#property-more').remove()
  $('#property-count').remove()

  let title = `Disponemos de ${properties.meta.total} propiedades`;
  let propertyTitle = new Heading(2, 'property-count', title)
  propertyTitle.appentToElement($('.properties-title'))

  if (properties.meta.current_page < properties.meta.last_page) {

    let count = properties.meta.total -
      (properties.meta.current_page * properties.meta.per_page)
    let title = `Mostrar ${count} propiedades más`
    let propertyMoreButton = new Button('property-more', title,
      properties.links.next)
    propertyMoreButton.appentToElement($('.properties-pagination'))

  }

  properties.objects.map(val => {
    let propertyRow = new PropertyRow(val)
    propertyRow.appentToElement($('.properties-list').last())
  })
}

export let updateProperties = (options) => {

  propertyService.findAllProperties(options).then(properties => {

    actionUpdateMeta(properties)

  })

}