'use strict'

class House {

  constructor(property) {
    this.address = property.address
    this.square_feet = property.square_feet
    this.num_bedrooms = property.num_bedrooms || 3
    this.num_baths = property.num_baths || 2
    this.cost = property.cost || 320000
    this.down_payment = property.down_payment || 0.20
    this.sold = property.sold || false
    this.short_sale = property.short_sale
    this.has_tenants = property.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****');


  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }

}
let property ={
  address : 'cempaka putih',
  square_feet : 150,
  num_bedrooms : 0,
  num_baths : 0,
  cost : 0,
  down_payment : 0,
  sold : 0,
  short_sale : false,
  has_tenants :  false
};
const cool = new House(property);

console.log(cool.to_s());
