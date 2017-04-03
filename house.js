'use strict'

class House {

  constructor(object) {
    this.address = object.address
    this.square_feet = object.square_feet
    this.num_bedrooms = object.num_bedrooms || 3
    this.num_baths = object.num_baths || 2
    this.cost = object.cost || 320000
    this.down_payment = object.down_payment || 0.20
    this.sold = object.sold || false
    this.short_sale = object.short_sale
    this.has_tenants = object.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
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

let house = {
  address: "Jalan Pilar Baru No. 47",
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 0.1,
  sold: true,
  short_sale: true,
  has_tenants: true
}
const cool = new House(house);

console.log(cool.to_s());
