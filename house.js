'use strict'

class House {

  constructor(info) {
    this.address = info.address
    this.square_feet = info.square_feet
    this.num_bedrooms = info.num_bedrooms || 3
    this.num_baths = info.num_baths || 2
    this.cost = info.cost || 320000
    this.down_payment = info.down_payment || 0.20
    this.sold = info.sold || false
    this.short_sale = info.short_sale
    this.has_tenants = info.has_tenants || false
  }

  obscure_address() {
    // console.log(this.address);
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

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)

// console.log(cool.to_s())
let cool = new House({
  address : "Jakarta Selatan",
  square_feet : 100,
  num_bedrooms : 10,
  num_baths : 5,
  cost : 100000000,
  down_payment : 0.2,
  sold : false,
  short_sale : true,
  has_tenants : false
})
console.log(cool.to_s())
console.log(cool)
