/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')
const OrderItem = db.model('orderItem')

describe('OrderItem model', () => {
  describe('checks association', () => {

    it('OrderItem should have associated key to Order', async () => {
      const order = await Order.build({
        status: 'Created',
        subtotal: 12.95,
        tax: 1.15
      })
      const orderItem = await OrderItem.create({
        price: 12.95,
        qty: 1,
      });
      orderItem.setOrder(order);
      expect(orderItem.orderId).to.equal(order.id);
    })
  }) // end describe('getter')
}) // end describe('User model')
