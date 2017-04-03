'use strict'

class House {

  constructor(atributHouse) {
    this.address = atributHouse.address
    this.square_feet = atributHouse.square_feet
    this.num_bedrooms = atributHouse.num_bedrooms || 3
    this.num_baths = atributHouse.num_baths || 2
    this.cost = atributHouse.cost || 320000
    this.down_payment = atributHouse.down_payment || 0.20
    this.sold = atributHouse.sold || false
    this.short_sale = atributHouse.short_sale || true
    this.has_tenants = atributHouse.has_tenants || false
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
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

var atributHouse = {
  address = "Jl Pondok Indah ",
  square_feet = 1000,
  num_bedrooms = 3,
  num_baths = 2,
  cost = c20000,
  down_payment = 20
  sold = false
  short_sale =true
  has_tenants = false
}

const cool = new House(atributHouse)

console.log(cool.to_s())
