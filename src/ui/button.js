import { BaseElement} from './base-element.js'

export class Button extends BaseElement{
  constructor (id,title,link) {
    super();
    this._id = id;
    this.title = title;
    this.link = link;

  }
  getElementString(){
    return `<button class="button share-buttons centered-content centered" type="button" data-page="${this.link}" id="${this._id}">${this.title}</button>`
  }
}