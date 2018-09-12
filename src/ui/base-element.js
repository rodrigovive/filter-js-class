import $ from 'jquery'

export class BaseElement {
  constructor(){
    this.element = null;
  }
  appentToElement(el){
    this.createElement()
    el.after(this.element)
  }

  createElement(){
    let stringElement = this.getElementString();
    this.element = $(stringElement);

  }

  getElementString(){
    throw 'Override'
  }

  enableJS(){
    componentHandler.upgradeElement(this.element[0])
  }
}