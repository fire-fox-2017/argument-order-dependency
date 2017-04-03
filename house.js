'use strict'

class House {

  constructor(components) {
    this.address = components['address']
    this.square_feet = components['square_feet']
    this.num_bedrooms = components['num_bedrooms']
    this.num_baths = components['num_baths']
    this.cost = components['cost']
    this.down_payment = components['down_payment']
    this.sold = components['sold']
    this.short_sale = components['short_sale']
    this.has_tenants = components['has_tenants']
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

let objHouse = {
  address: "address",
  square_feet: 100,
  num_bedrooms: 2 || 3,
  num_baths: 2 || 2,
  cost: 12345 || 320000,
  down_payment: 12345 || 0.20,
  sold: true || false,
  short_sale: true || false,
  has_tenants: true || false,
}

const cool = new House(objHouse)

console.log(cool.to_s())
