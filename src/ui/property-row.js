import {BaseElement} from './base-element.js';

export class PropertyRow extends BaseElement {
  constructor( data) {
    super();
    this.data = data;
    this._id = data.id;
  }

  get id() {
    return `div-property-${this._id}`;
  }

  getIcons(type){
    let surface = +this.data.surface;
    let roofedSurface = +this.data.roofed_surface;
    let totalSurface = +this.data.total_surface;
    let typeRoofedSurface = [2,3,4,5,6,7,8,11,20].includes(type);
    let textSurface = (typeRoofedSurface) ? `<i class="sl sl-icon-size-fullscreen"></i> ${roofedSurface.toFixed()} m² &nbsp;&nbsp; `:
        `<i class="sl sl-icon-size-fullscreen"></i> ${surface.toFixed()} m² &nbsp;&nbsp; `;
    switch (type){
      case 1:
        return textSurface;
      case 2:
        return `${textSurface}
                <i class="fa fa-bed"></i> ${this.data.room_amount} &nbsp;&nbsp;
                <i class="fa fa-bath"></i> ${this.data.bathroom_amount} &nbsp;&nbsp;
                <i class="sl sl-icon-grid"></i> ${this.data.suite_amount}`;
      case 3:
        return `${textSurface}
                <i class="fa fa-bed"></i> ${this.data.room_amount} &nbsp;&nbsp;
                <i class="fa fa-bath"></i> ${this.data.bathroom_amount} &nbsp;&nbsp;
                <i class="fa fa-car"></i> ${this.data.parking_lot_amount} &nbsp;&nbsp;`
      case 5:
        return `${textSurface}
                <i class="fa fa-bath"></i> ${this.data.bathroom_amount} &nbsp;&nbsp;
                <i class="fa fa-car"></i> ${this.data.parking_lot_amount} &nbsp;&nbsp;`
      case 7:
        return `${textSurface}
                <i class="fa fa-car"></i> ${this.data.parking_lot_amount} &nbsp;&nbsp;`
      case 8:
        return `${textSurface}`
      case 10:
        return `<i class="fa fa-car"></i> ${this.data.parking_lot_amount} &nbsp;&nbsp;`;
      case 14:
        return `${textSurface}
                <i class="fa fa-car"></i> ${this.data.parking_lot_amount} &nbsp;&nbsp;`
      default:
        return `${textSurface}
                <i class="fa fa-bed"></i> ${this.data.room_amount} &nbsp;&nbsp;
                <i class="fa fa-bath"></i> ${this.data.bathroom_amount} &nbsp;&nbsp;
                <i class="fa fa-car"></i> ${this.data.parking_lot_amount} &nbsp;&nbsp;
                <i class="sl sl-icon-grid"></i> ${this.data.suite_amount}`;
    }
  }

  getElementString() {
    let imgTag = (this.data.photos != null) ? this.data.photos[0].image : '/images/grid-offer1.jpg';
    let id = this._id;
    let optionsTag = ``;
    let hrefTag = `${document.location.origin}/${id}/${this.data.publication_title.split(' ').join('-')}`;
    let price = '';
    if(this.data.operations[0].prices[0].price=="1") {
      price = 'CONSULTAR';
    }else {
      let currency = (this.data.operations[0].prices[0].currency == "USD") ? "U\$S" : this.data.operations[0].prices[0].currency;
      price = `${currency} <span class="price" style="font-size: 20px">${this.data.operations[0].prices[0].price}</span>`;
    }
    let totalSurface = +this.data.total_surface;
    let icons = this.getIcons(this.data.type.id);

    return `<div class="col-lg-12 col-md-12 properties-list">
    <div class="listing-item-container list-layout">
        <a href="${hrefTag}" class="listing-item">
            
            <div class="listing-item-image">
                    <img src="${imgTag}" alt=""/>
                <span class="tag hidden-md hidden-lg ">VER PROPIEDAD</span>
            
            </div>
            
            <div class="listing-item-content">
                <div class="listing-badge now-closed" style="text-transform: uppercase; background-color: #307537">${this.data.operations[0].operation_type}</div>
                
                <div class="listing-item-inner">
                    ${price}
                    <h4><strong>${this.data.publication_title.substr(0,260)}...</strong></h4>
                    
                    <span><strong>Ubicación: </strong>${this.data.location.name}</span>
                    <div class="star-rating">
                        <div class="rating-counter">
                            ${icons}
                        </div>
                    </div>
                
                </div>
                
                <span class="tag hidden-xs hidden-sm ">VER PROPIEDAD</span>
            </div>
        </a>
    </div>
</div>`;
  }
}