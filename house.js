'use strict'

class House {

  constructor(data) {
    this.address = data['address']
    this.square_feet = data['square_feet']
    this.num_bedrooms = data['data.num_bedrooms'] || 3
    this.num_baths = data['data.num_baths'] || 2
    this.cost = data['data.cost'] || 320000
    this.down_payment = data['data.down_payment'] || 0.20
    this.sold = data['data.sold'] || false
    this.short_sale = data['short_sale']
    this.has_tenants = data['data.has_tenants'] || false
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

//const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
var objData = {
  address : "Jakarta Barat",
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345 ,
  sold : true,
  short_sale : true ,
  has_tenants : true
};
const cool = new House(objData);
console.log(cool.to_s());
