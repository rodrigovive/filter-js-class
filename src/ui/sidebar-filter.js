import { BaseElement } from './base-element.js'

export class SidebarFilter extends BaseElement {
  constructor (id, title, data) {
    super()
    this._id = id
    this.title = title
    this.data = data

  }

  getElementString () {
    console.log(this.data);
    let liTags = ''
    for (let data of this.data) {
      liTags += `<li class="${this._id}" value="${data.id}"><a class="listing-items-search" style="cursor: pointer;">${data.name} (${data.count ? data.count : ''})</a></li>`
    }
    return `<div class="col-md-12">
              <h4>${this.title}</h4>
              <ul class="listing-details-sidebar">
                  ${liTags}
              </ul>
            </div>`
  }
}