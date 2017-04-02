'use strict'

class House {

  // constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants) {
  constructor( args ) {
    this.address = "";
    if (args.hasOwnProperty('address'))
      this.address = args['address'];

    this.square_feet = 0;
    if (args.hasOwnProperty('square_feet'))
      this.square_feet = args['square_feet'];

    this.num_bedrooms = 3
    if (args.hasOwnProperty('num_bedrooms'))
      this.num_bedrooms = args['num_bedrooms'];

    this.num_baths = 2
    if (args.hasOwnProperty('num_baths'))
      this.num_baths = args['num_baths'];

    this.cost = 320000
    if (args.hasOwnProperty('cost'))
      this.cost = args['cost'];


    this.down_payment = 0.20
    if (args.hasOwnProperty('down_payment'))
      this.down_payment = args['down_payment'];

    this.sold = false
    if (args.hasOwnProperty('sold'))
      this.sold = args['sold'];


    this.short_sale = false;
    if (args.hasOwnProperty('short_sale'))
      this.short_sale = args['short_sale'];


    this.has_tenants = false
    if (args.hasOwnProperty('has_tenants'))
      this.has_tenants = args['has_tenants'];

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
const cool = new House({address: 'address', square_feet: 100, num_bedrooms: 2, num_baths: 2, cost: 12345, down_payment: 12345, sold: true, short_sale: true, has_tenants: true});

console.log(cool.to_s())

console.log(cool.address.replace(/.{10}$/g, '****'));
