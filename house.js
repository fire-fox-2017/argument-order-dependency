'use strict'

class House {

  constructor (valueHouse) {
    this.address = valueHouse.address
    this.square_feet = valueHouse['square_feet']
    this.num_bedrooms = valueHouse['num_bedrooms']
    this.num_baths = valueHouse['num_baths']
    this.cost = valueHouse.cost
    this.down_payment = valueHouse['down_payment']
    this.sold = valueHouse['sold']
    this.short_sale = valueHouse['short_sale']
    this.has_tenants = valueHouse['has_tenants']
  }

  obscure_address () {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy (money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment () {
    return cost * this.down_payment
  }

  to_s () {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

const valueHouse = {
  address : 'Hacktiv8 Jakarta Selatan',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 320000,
  down_payment : 12345,
  sold : true,
  short_sale : true,
  has_tenants : false
}

const cool = new House(valueHouse);


console.log(cool.to_s())
