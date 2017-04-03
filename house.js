'use strict'

class House {

  constructor(args) {
    this.address = args['address']
    this.square_feet = args['square_feet']
    this.num_bedrooms = args['num_bedrooms'] || 3
    this.num_baths = args['num_baths']|| 2
    this.cost = args['cost'] || 320000
    this.down_payment = args['down_payment'] || 0.20
    this.sold = args['sold'] || false
    this.short_sale = args['short_sale']
    this.has_tenants = args['has_tenants'] || false
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
    return this.address;
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

const cool = new House({
  address: 'address'
  ,square_feet: 100
  ,num_bedrooms: 2
  ,down_payment: 12345
  ,num_baths: 2
  ,cost: 12345
  ,sold: true
  ,short_sale: true
})
console.log(cool.to_s())
