import {BaseElement} from './base-element.js'

export class Heading extends BaseElement {
  constructor (type,id,title){
    super()
    this.title = title;
    this.type = type;
    this._id = id;
  }

  getElementString(){
    return `<h${this.type} id=${this._id} class="text-widget centered-content">${this.title}</h${this.type}>`
  }
}
