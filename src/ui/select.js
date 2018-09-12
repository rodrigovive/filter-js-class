import {BaseElement} from './base-element.js';

export class Select extends BaseElement {
  constructor(id, title, placeholder, data) {
    super();
    this.title = title;
    this.placeholder = placeholder;
    this.options = data;
    this._id = id;
  }

  getElementString() {
    let placeholderTag = (this.placeholder) ? `<option value="">${this.placeholder}</option>` : '';
    let id = this._id;
    let optionsTag = ``;
    for(let option of this.options){
      let optionCount = (option.count) ? ` ( ${option.count} )` : '';
      optionsTag += `<option value="${option.id}">${option.name}${optionCount}</option>`
    }

    return `<section id="filter-${id}-section">
                    <div id="filter-${id}-div" class="section-selects-content ">
                        <label for="filter-${id}">
                            ${this.title}
                        </label>
                        <select tabindex="-1" name="filter-${id}" id="filter-${id}">
                            ${placeholderTag}
                            ${optionsTag}
                        </select>
                    </div>
                </section>`;
  }
}