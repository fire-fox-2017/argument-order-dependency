'use strict'

class House {

  constructor(data) {
    this.address = data['address'];
    this.square_feet = data['square_feet'];
    this.num_bedrooms = data['num_bedrooms'];
    this.num_baths = data['num_baths']
    this.cost = data['cost'];
    this.down_payment = data.down_payment;
    this.sold = data.sold;
    this.short_sale = data.short_sale;
    this.has_tenants = data.has_tenants;
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

let house = {
  address: 'Jl tb simatupang kav 15',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2 ,
  cost: 1200555,
  down_payment: 12345,
  sold: true,
  short_sale:true,
  has_tenants: true
}
const cool = new House(house)

console.log(cool.to_s())
