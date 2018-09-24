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
                            <i class="fa fa-bed"></i> ${this.data.room_amount} &nbsp;&nbsp;
                            <i class="fa fa-bath"></i> ${this.data.bathroom_amount} &nbsp;&nbsp;
                            <i class="fa fa-car"></i> ${this.data.parking_lot_amount} &nbsp;&nbsp;
                            <i class="sl sl-icon-size-fullscreen"></i> ${totalSurface.toFixed()} m² &nbsp;&nbsp;
                            <i class="sl sl-icon-grid"></i> ${this.data.suite_amount}
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