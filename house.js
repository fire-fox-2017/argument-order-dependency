'use strict'

class House {

  // constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants) {
  constructor( rumah ) {
    this.address = "";
    if (rumah.hasOwnProperty('address'))
      this.address = rumah['address'];

    this.square_feet = 0;
    if (rumah.hasOwnProperty('square_feet'))
      this.square_feet = rumah['square_feet'];

    this.num_bedrooms = 3
    if (rumah.hasOwnProperty('num_bedrooms'))
      this.num_bedrooms = rumah['num_bedrooms'];

    this.num_baths = 2
    if (rumah.hasOwnProperty('num_baths'))
      this.num_baths = rumah['num_baths'];

    this.cost = 320000
    if (rumah.hasOwnProperty('cost'))
      this.cost = rumah['cost'];


    this.down_payment = 0.20
    if (rumah.hasOwnProperty('down_payment'))
      this.down_payment = rumah['down_payment'];

    this.sold = false
    if (rumah.hasOwnProperty('sold'))
      this.sold = rumah['sold'];


    this.short_sale = false;
    if (rumah.hasOwnProperty('short_sale'))
      this.short_sale = rumah['short_sale'];


    this.has_tenants = false
    if (rumah.hasOwnProperty('has_tenants'))
      this.has_tenants = rumah['has_tenants'];

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

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
const cool = new House(
  {address: 'jalan tanah kusir IV', square_feet: 100, num_bedrooms: 2, num_baths: 2, cost: 12345, down_payment: 12345, sold: true, short_sale: true, has_tenants: true}
);

console.log(cool.to_s())

console.log(cool.address.replace(/.{10}$/g, '****'));
